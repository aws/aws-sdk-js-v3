// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GameLiftServiceException as __BaseException } from "./GameLiftServiceException";

/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * @public
 */
export interface AcceptMatchInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this
   *             request will fail.</p>
   * @public
   */
  TicketId: string | undefined;

  /**
   * <p>A unique identifier for a player delivering the response. This parameter can include one or multiple player
   *             IDs.</p>
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Player response to the proposed match.</p>
   * @public
   */
  AcceptanceType: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface AcceptMatchOutput {}

/**
 * <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not supported in the Region specified.</p>
 * @public
 */
export class UnsupportedRegionException extends __BaseException {
  readonly name: "UnsupportedRegionException" = "UnsupportedRegionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedRegionException, __BaseException>) {
    super({
      name: "UnsupportedRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RoutingStrategyType = {
  SIMPLE: "SIMPLE",
  TERMINAL: "TERMINAL",
} as const;

/**
 * @public
 */
export type RoutingStrategyType = (typeof RoutingStrategyType)[keyof typeof RoutingStrategyType];

/**
 * <p>The routing configuration for a fleet alias.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface RoutingStrategy {
  /**
   * <p>The type of routing strategy for the alias.</p>
   *          <p>Possible routing types include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SIMPLE</b> - The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINAL</b> - The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the message embedded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: RoutingStrategyType;

  /**
   * <p>A unique identifier for the fleet that the alias points to. This value is the fleet ID, not the fleet ARN.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The message text to be used with a terminal routing strategy.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Properties that describe an alias resource.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Alias {
  /**
   * <p>A unique identifier for the alias. Alias IDs are unique within a Region.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift alias resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift alias ARN, the resource ID matches the alias ID value.</p>
   * @public
   */
  AliasArn?: string;

  /**
   * <p>A human-readable description of an alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias.
   *         </p>
   * @public
   */
  RoutingStrategy?: RoutingStrategy;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * <p>Amazon GameLift configuration options for your Anywhere fleets.</p>
 * @public
 */
export interface AnywhereConfiguration {
  /**
   * <p>The cost to run your fleet per hour. Amazon GameLift uses the provided cost of your fleet to
   *             balance usage in queues. For more information about queues, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">Setting
   *                 up queues</a> in the <i>Amazon GameLift Developer Guide</i>.</p>
   * @public
   */
  Cost: string | undefined;
}

/**
 * <p>Values for use in player attribute key-value pairs. This object lets
 *             you specify an attribute value using any of the valid data types: string, number, string
 *             array, or data map. Each <code>AttributeValue</code> object can use only one of the
 *             available properties.</p>
 * @public
 */
export interface AttributeValue {
  /**
   * <p>For single string values. Maximum string length is 100 characters.</p>
   * @public
   */
  S?: string;

  /**
   * <p>For number values, expressed as double.</p>
   * @public
   */
  N?: number;

  /**
   * <p>For a list of up to 100 strings. Maximum length for each string is 100 characters.
   *             Duplicate values are not recognized; all occurrences of the repeated value after the
   *             first of a repeated value are ignored.</p>
   * @public
   */
  SL?: string[];

  /**
   * <p>For a map of up to 10 data type:value pairs. Maximum length for each string value is
   *             100 characters. </p>
   * @public
   */
  SDM?: Record<string, number>;
}

/**
 * <p>Amazon Web Services account security credentials that allow interactions with Amazon GameLift resources. The
 *             credentials are temporary and valid for a limited time span. You can request fresh
 *             credentials at any time. </p>
 *          <p> Amazon Web Services security credentials consist of three parts: an access key ID, a secret access
 *             key, and a session token. You must use all three parts together to authenticate your
 *             access requests.</p>
 *          <p>You need Amazon Web Services credentials for the following tasks: </p>
 *          <ul>
 *             <li>
 *                <p>To upload a game server build directly to Amazon GameLift S3 storage using <code>CreateBuild</code>. To get access for this
 *             task, call <a>RequestUploadCredentials</a>.</p>
 *             </li>
 *             <li>
 *                <p>To remotely connect to an active Amazon GameLift fleet instances.
 *                 To get remote access, call <a>GetComputeAccess</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AwsCredentials {
  /**
   * <p>The access key ID that identifies the temporary security credentials. </p>
   * @public
   */
  AccessKeyId?: string;

  /**
   * <p>The secret access key that can be used to sign requests.</p>
   * @public
   */
  SecretAccessKey?: string;

  /**
   * <p>The token that users must pass to the service API to use the temporary credentials. </p>
   * @public
   */
  SessionToken?: string;
}

/**
 * @public
 * @enum
 */
export const BackfillMode = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type BackfillMode = (typeof BackfillMode)[keyof typeof BackfillMode];

/**
 * @public
 * @enum
 */
export const BalancingStrategy = {
  ON_DEMAND_ONLY: "ON_DEMAND_ONLY",
  SPOT_ONLY: "SPOT_ONLY",
  SPOT_PREFERRED: "SPOT_PREFERRED",
} as const;

/**
 * @public
 */
export type BalancingStrategy = (typeof BalancingStrategy)[keyof typeof BalancingStrategy];

/**
 * @public
 * @enum
 */
export const OperatingSystem = {
  AMAZON_LINUX: "AMAZON_LINUX",
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  AMAZON_LINUX_2023: "AMAZON_LINUX_2023",
  WINDOWS_2012: "WINDOWS_2012",
  WINDOWS_2016: "WINDOWS_2016",
} as const;

/**
 * @public
 */
export type OperatingSystem = (typeof OperatingSystem)[keyof typeof OperatingSystem];

/**
 * @public
 * @enum
 */
export const BuildStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus];

/**
 * <p>Properties describing a custom game build.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Build {
  /**
   * <p>A unique identifier for the build.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::build/build-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift build ARN, the resource ID matches the
   *                 <i>BuildId</i> value.</p>
   * @public
   */
  BuildArn?: string;

  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">CreateBuild</a> or
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/UpdateBuild">UpdateBuild</a>.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique.</p>
   * @public
   */
  Version?: string;

  /**
   * <p>Current status of the build.</p>
   *          <p>Possible build statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: BuildStatus;

  /**
   * <p>File size of the uploaded game build, expressed in bytes. When the build status is
   *                 <code>INITIALIZED</code> or when using a custom Amazon S3 storage location, this value is
   *             0.</p>
   * @public
   */
  SizeOnDisk?: number;

  /**
   * <p>Operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build.</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in
   *             the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>.
   *             For game servers
   *             that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the
   *             game server build to server SDK 5.x, and then deploy to AL2023 instances. See
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html">
   *                 Migrate to Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon GameLift Server SDK version used to develop your game server.</p>
   * @public
   */
  ServerSdkVersion?: string;
}

/**
 * @public
 * @enum
 */
export const CertificateType = {
  Disabled: "DISABLED",
  Generated: "GENERATED",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * <p>Determines whether a TLS/SSL certificate is generated for a fleet. This feature must
 *             be enabled when creating the fleet. All instances in a fleet share the same certificate.
 *             The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server
 *                 SDK</a> operation <code>GetInstanceCertificate</code>. </p>
 * @public
 */
export interface CertificateConfiguration {
  /**
   * <p>Indicates whether a TLS/SSL certificate is generated for a fleet. </p>
   *          <p>Valid values include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>GENERATED</b> -- Generate a TLS/SSL certificate
   *                     for this fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DISABLED</b> -- (default) Do not generate a
   *                     TLS/SSL certificate for this fleet. </p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateType: CertificateType | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
} as const;

/**
 * @public
 */
export type FilterInstanceStatus = (typeof FilterInstanceStatus)[keyof typeof FilterInstanceStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>
 *         Filters which game servers may be claimed when calling <code>ClaimGameServer</code>.
 *     </p>
 * @public
 */
export interface ClaimFilterOption {
  /**
   * <p>List of instance statuses that game servers may be claimed on. If provided, the list must contain the
   *             <code>ACTIVE</code> status.</p>
   * @public
   */
  InstanceStatuses?: FilterInstanceStatus[];
}

/**
 * @public
 */
export interface ClaimGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running. If you are not specifying a game server to claim, this value identifies
   *             where you want Amazon GameLift FleetIQ to look for an available game server to claim. </p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to claim. If this parameter is left empty, Amazon GameLift FleetIQ searches for an available
   *             game server in the specified game server group.</p>
   * @public
   */
  GameServerId?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers. </p>
   * @public
   */
  GameServerData?: string;

  /**
   * <p>Object that restricts how a claimed game server is chosen.</p>
   * @public
   */
  FilterOption?: ClaimFilterOption;
}

/**
 * @public
 * @enum
 */
export const GameServerClaimStatus = {
  CLAIMED: "CLAIMED",
} as const;

/**
 * @public
 */
export type GameServerClaimStatus = (typeof GameServerClaimStatus)[keyof typeof GameServerClaimStatus];

/**
 * @public
 * @enum
 */
export const GameServerUtilizationStatus = {
  AVAILABLE: "AVAILABLE",
  UTILIZED: "UTILIZED",
} as const;

/**
 * @public
 */
export type GameServerUtilizationStatus =
  (typeof GameServerUtilizationStatus)[keyof typeof GameServerUtilizationStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Properties describing a game server that
 *             is running on an instance in a game server group. </p>
 *          <p>A game server is created by a successful call to <code>RegisterGameServer</code> and
 *             deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a
 *             game session by calling <code>ClaimGameServer</code>. </p>
 * @public
 */
export interface GameServer {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>The ARN identifier for the game server group where the game server is located.</p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>A custom string that uniquely identifies the game server. Game server IDs are developer-defined and are unique across all game
   *             server groups in an Amazon Web Services account.</p>
   * @public
   */
  GameServerId?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The port and IP address that must be used to establish a client connection to the game
   *             server.</p>
   * @public
   */
  ConnectionInfo?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers.</p>
   * @public
   */
  GameServerData?: string;

  /**
   * <p>Indicates when an available game server has been reserved for gameplay but has not yet
   *             started hosting a game. Once it is claimed, the game server remains in
   *                 <code>CLAIMED</code> status for a maximum of one minute. During this time, game
   *             clients connect to the game server to start the game and trigger the game server to
   *             update its utilization status. After one minute, the game server claim status reverts to
   *             null.</p>
   * @public
   */
  ClaimStatus?: GameServerClaimStatus;

  /**
   * <p>Indicates whether the game server is currently available for new games or is busy.
   *             Possible statuses include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The game server is available to be claimed. A game
   *                     server that has been claimed remains in this status until it reports game
   *                     hosting activity. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UTILIZED</code> - The game server is currently hosting a game session
   *                     with players. </p>
   *             </li>
   *          </ul>
   * @public
   */
  UtilizationStatus?: GameServerUtilizationStatus;

  /**
   * <p>Timestamp that indicates when the game server registered. The format is a number expressed in Unix
   *             time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  RegistrationTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was claimed. The format is a
   *             number expressed in Unix time as milliseconds (for example
   *             <code>"1469498468.057"</code>). This value is used to calculate when a claimed game
   *             server's status should revert to null.</p>
   * @public
   */
  LastClaimTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was updated with health status.
   *             The format is a number expressed in Unix time as milliseconds (for example
   *                 <code>"1469498468.057"</code>). After game server registration, this property is
   *             only changed when a game server update specifies a health check value.</p>
   * @public
   */
  LastHealthCheckTime?: Date;
}

/**
 * @public
 */
export interface ClaimGameServerOutput {
  /**
   * <p>Object that describes the newly claimed game server.</p>
   * @public
   */
  GameServer?: GameServer;
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified game server group has no available game servers to fulfill a
 *                 <code>ClaimGameServer</code> request. Clients can retry such requests immediately or
 *             after a waiting period.</p>
 * @public
 */
export class OutOfCapacityException extends __BaseException {
  readonly name: "OutOfCapacityException" = "OutOfCapacityException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutOfCapacityException, __BaseException>) {
    super({
      name: "OutOfCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutOfCapacityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The client failed authentication. Clients should not retry such requests.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ComparisonOperatorType = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;

/**
 * @public
 */
export type ComparisonOperatorType = (typeof ComparisonOperatorType)[keyof typeof ComparisonOperatorType];

/**
 * @public
 * @enum
 */
export const ComputeStatus = {
  ACTIVE: "ACTIVE",
  IMPAIRED: "IMPAIRED",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type ComputeStatus = (typeof ComputeStatus)[keyof typeof ComputeStatus];

/**
 * <p>A unique identifier for a container in a container fleet compute. </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeCompute</a>
 *          </p>
 * @public
 */
export interface ContainerAttribute {
  /**
   * <p>The identifier for a container that's running in a compute. </p>
   * @public
   */
  ContainerName?: string;

  /**
   * <p>The runtime ID for the container that's running in a compute. This value is unique within
   *       the compute.</p>
   * @public
   */
  ContainerRuntimeId?: string;
}

/**
 * @public
 * @enum
 */
export const EC2InstanceType = {
  c3_2xlarge: "c3.2xlarge",
  c3_4xlarge: "c3.4xlarge",
  c3_8xlarge: "c3.8xlarge",
  c3_large: "c3.large",
  c3_xlarge: "c3.xlarge",
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c5d_12xlarge: "c5d.12xlarge",
  c5d_18xlarge: "c5d.18xlarge",
  c5d_24xlarge: "c5d.24xlarge",
  c5d_2xlarge: "c5d.2xlarge",
  c5d_4xlarge: "c5d.4xlarge",
  c5d_9xlarge: "c5d.9xlarge",
  c5d_large: "c5d.large",
  c5d_xlarge: "c5d.xlarge",
  c6a_12xlarge: "c6a.12xlarge",
  c6a_16xlarge: "c6a.16xlarge",
  c6a_24xlarge: "c6a.24xlarge",
  c6a_2xlarge: "c6a.2xlarge",
  c6a_4xlarge: "c6a.4xlarge",
  c6a_8xlarge: "c6a.8xlarge",
  c6a_large: "c6a.large",
  c6a_xlarge: "c6a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  c6gn_12xlarge: "c6gn.12xlarge",
  c6gn_16xlarge: "c6gn.16xlarge",
  c6gn_2xlarge: "c6gn.2xlarge",
  c6gn_4xlarge: "c6gn.4xlarge",
  c6gn_8xlarge: "c6gn.8xlarge",
  c6gn_large: "c6gn.large",
  c6gn_medium: "c6gn.medium",
  c6gn_xlarge: "c6gn.xlarge",
  c6i_12xlarge: "c6i.12xlarge",
  c6i_16xlarge: "c6i.16xlarge",
  c6i_24xlarge: "c6i.24xlarge",
  c6i_2xlarge: "c6i.2xlarge",
  c6i_4xlarge: "c6i.4xlarge",
  c6i_8xlarge: "c6i.8xlarge",
  c6i_large: "c6i.large",
  c6i_xlarge: "c6i.xlarge",
  c7g_12xlarge: "c7g.12xlarge",
  c7g_16xlarge: "c7g.16xlarge",
  c7g_2xlarge: "c7g.2xlarge",
  c7g_4xlarge: "c7g.4xlarge",
  c7g_8xlarge: "c7g.8xlarge",
  c7g_large: "c7g.large",
  c7g_medium: "c7g.medium",
  c7g_xlarge: "c7g.xlarge",
  g5g_16xlarge: "g5g.16xlarge",
  g5g_2xlarge: "g5g.2xlarge",
  g5g_4xlarge: "g5g.4xlarge",
  g5g_8xlarge: "g5g.8xlarge",
  g5g_xlarge: "g5g.xlarge",
  m3_2xlarge: "m3.2xlarge",
  m3_large: "m3.large",
  m3_medium: "m3.medium",
  m3_xlarge: "m3.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  m7g_12xlarge: "m7g.12xlarge",
  m7g_16xlarge: "m7g.16xlarge",
  m7g_2xlarge: "m7g.2xlarge",
  m7g_4xlarge: "m7g.4xlarge",
  m7g_8xlarge: "m7g.8xlarge",
  m7g_large: "m7g.large",
  m7g_medium: "m7g.medium",
  m7g_xlarge: "m7g.xlarge",
  r3_2xlarge: "r3.2xlarge",
  r3_4xlarge: "r3.4xlarge",
  r3_8xlarge: "r3.8xlarge",
  r3_large: "r3.large",
  r3_xlarge: "r3.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r5d_12xlarge: "r5d.12xlarge",
  r5d_16xlarge: "r5d.16xlarge",
  r5d_24xlarge: "r5d.24xlarge",
  r5d_2xlarge: "r5d.2xlarge",
  r5d_4xlarge: "r5d.4xlarge",
  r5d_8xlarge: "r5d.8xlarge",
  r5d_large: "r5d.large",
  r5d_xlarge: "r5d.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
  r7g_12xlarge: "r7g.12xlarge",
  r7g_16xlarge: "r7g.16xlarge",
  r7g_2xlarge: "r7g.2xlarge",
  r7g_4xlarge: "r7g.4xlarge",
  r7g_8xlarge: "r7g.8xlarge",
  r7g_large: "r7g.large",
  r7g_medium: "r7g.medium",
  r7g_xlarge: "r7g.xlarge",
  t2_large: "t2.large",
  t2_medium: "t2.medium",
  t2_micro: "t2.micro",
  t2_small: "t2.small",
} as const;

/**
 * @public
 */
export type EC2InstanceType = (typeof EC2InstanceType)[keyof typeof EC2InstanceType];

/**
 * <p>An Amazon GameLift compute resource for hosting your game servers. Computes in an Amazon GameLift
 *             fleet differs depending on the fleet's compute type property as follows: </p>
 *          <ul>
 *             <li>
 *                <p>For managed EC2 fleets, a compute is an EC2 instance.</p>
 *             </li>
 *             <li>
 *                <p>For Anywhere fleets, a compute is a computing resource that you provide and is
 *                     registered to the fleet.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Compute {
  /**
   * <p>A unique identifier for the fleet that the compute belongs to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the compute belongs to.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A descriptive label for the compute resource. For instances in a managed EC2 fleet, the compute name is the same value as the <code>InstanceId</code>
   *             ID.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The ARN that is assigned to a compute resource and uniquely identifies it. ARNs are
   *             unique across locations. Instances in managed EC2 fleets are not assigned a Compute
   *             ARN.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>The IP address of a compute resource. Amazon GameLift requires a DNS name or IP address for a
   *             compute.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS name of a compute resource. Amazon GameLift requires a DNS name or IP address for a
   *             compute.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Current status of the compute. A compute must have an <code>ACTIVE</code> status to
   *             host game sessions.</p>
   * @public
   */
  ComputeStatus?: ComputeStatus;

  /**
   * <p>The name of the custom location you added to the fleet that this compute resource
   *             resides in.</p>
   * @public
   */
  Location?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The type of operating system on the compute resource.</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in
   *             the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>.
   *             For game servers
   *             that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the
   *             game server build to server SDK 5.x, and then deploy to AL2023 instances. See
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html">
   *                 Migrate to Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The Amazon EC2 instance type that the fleet uses. For registered computes in an Amazon GameLift Anywhere fleet, this property is empty. </p>
   * @public
   */
  Type?: EC2InstanceType;

  /**
   * <p>The Amazon GameLift SDK endpoint connection for a registered compute resource in an Anywhere
   *             fleet. The game servers on the compute use this endpoint to connect to the Amazon GameLift
   *             service.</p>
   * @public
   */
  GameLiftServiceSdkEndpoint?: string;

  /**
   * <p> The endpoint of the Amazon GameLift Agent. </p>
   * @public
   */
  GameLiftAgentEndpoint?: string;

  /**
   * <p>
   *         The <code>InstanceID</code> of the EC2 instance that is hosting the compute.
   *       </p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>A set of attributes for each container in the compute. </p>
   * @public
   */
  ContainerAttributes?: ContainerAttribute[];

  /**
   * <p>The game server container group definition for the compute.</p>
   * @public
   */
  GameServerContainerGroupDefinitionArn?: string;
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ANYWHERE: "ANYWHERE",
  EC2: "EC2",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * <p>The set of port numbers to open on each instance in a container fleet. Connection
 *             ports are used by inbound traffic to connect with processes that are running in
 *             containers on the fleet.</p>
 * @public
 */
export interface ConnectionPortRange {
  /**
   * <p>Starting value for the port range.</p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>Ending value for the port. Port numbers are end-inclusive. This value must be equal to
   *             or greater than <code>FromPort</code>.</p>
   * @public
   */
  ToPort: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerDependencyCondition = {
  COMPLETE: "COMPLETE",
  HEALTHY: "HEALTHY",
  START: "START",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ContainerDependencyCondition =
  (typeof ContainerDependencyCondition)[keyof typeof ContainerDependencyCondition];

/**
 * <p>A container's dependency on another container in the same container group. The dependency
 *       impacts how the dependent container is able to start or shut down based the status of the
 *       other container.</p>
 *          <p>For example, <i>ContainerA</i> is configured with the following dependency: a
 *         <code>START</code> dependency on <i>ContainerB</i>. This means that
 *         <i>ContainerA</i> can't start until <i>ContainerB</i> has
 *       started. It also means that <i>ContainerA</i> must shut down before
 *         <i>ContainerB</i>.</p>
 *          <p>eiifcbfhgrdurhnucnufkgbnbnnerrvbtjvljdetkehc<b>Part of:</b>
 *             <a>GameServerContainerDefinition</a>, <a>GameServerContainerDefinitionInput</a>, <a>SupportContainerDefinition</a>, <a>SupportContainerDefinitionInput</a>
 *          </p>
 * @public
 */
export interface ContainerDependency {
  /**
   * <p>A descriptive label for the container definition that this container depends on.</p>
   * @public
   */
  ContainerName: string | undefined;

  /**
   * <p>The condition that the dependency container must reach before the dependent container can
   *       start. Valid conditions include: </p>
   *          <ul>
   *             <li>
   *                <p>START - The dependency container must have started. </p>
   *             </li>
   *             <li>
   *                <p>COMPLETE - The dependency container has run to completion (exits). Use this condition with
   *           nonessential containers, such as those that run a script and then exit. The dependency
   *           container can't be an essential container. </p>
   *             </li>
   *             <li>
   *                <p>SUCCESS - The dependency container has run to completion and exited with a zero status. The
   *           dependency container can't be an essential container. </p>
   *             </li>
   *             <li>
   *                <p>HEALTHY - The dependency container has passed its Docker health check. Use this condition with
   *           dependency containers that have health checks configured. This condition is confirmed at
   *           container group startup only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Condition: ContainerDependencyCondition | undefined;
}

/**
 * <p>An environment variable to set inside a container, in the form of a key-value pair.
 *     </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>GameServerContainerDefinition</a>, <a>GameServerContainerDefinitionInput</a>, <a>SupportContainerDefinition</a>, <a>SupportContainerDefinitionInput</a>
 *          </p>
 * @public
 */
export interface ContainerEnvironment {
  /**
   * <p>The environment variable name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The environment variable value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerFleetBillingType = {
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;

/**
 * @public
 */
export type ContainerFleetBillingType = (typeof ContainerFleetBillingType)[keyof typeof ContainerFleetBillingType];

/**
 * <p>Information about the most recent deployment for the container fleet.</p>
 * @public
 */
export interface DeploymentDetails {
  /**
   * <p>A unique identifier for a fleet deployment.</p>
   * @public
   */
  LatestDeploymentId?: string;
}

/**
 * <p>A policy that puts limits on the number of game sessions that a player can create
 *             within a specified span of time. With this policy, you can control players' ability to
 *             consume available resources.</p>
 *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
 *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
 *             <code>CreatorId</code>) has created fewer than game session limit in the specified
 *             time period.</p>
 * @public
 */
export interface GameSessionCreationLimitPolicy {
  /**
   * <p>A policy that puts limits on the number of game sessions that a player can create
   *             within a specified span of time. With this policy, you can control players' ability to
   *             consume available resources.</p>
   *          <p>The policy evaluates when a player tries to create a new game session. On receiving a
   *                 <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified
   *             by <code>CreatorId</code>) has created fewer than game session limit in the specified
   *             time period.</p>
   * @public
   */
  NewGameSessionsPerCreator?: number;

  /**
   * <p>The time span used in evaluating the resource creation limit policy. </p>
   * @public
   */
  PolicyPeriodInMinutes?: number;
}

/**
 * @public
 * @enum
 */
export const IpProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type IpProtocol = (typeof IpProtocol)[keyof typeof IpProtocol];

/**
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to
 *             processes on an instance in a fleet. Processes are assigned an IP address/port number
 *             combination, which must fall into the fleet's allowed ranges. For managed container fleets, the
 *             port settings must use the same port numbers as the fleet's connection ports. </p>
 *          <p>For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging
 *             and one for UDP.</p>
 * @public
 */
export interface IpPermission {
  /**
   * <p>A starting value for a range of allowed port numbers.</p>
   *          <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p>
   *          <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>An ending value for a range of allowed port numbers. Port numbers are end-inclusive.
   *             This value must be equal to or greater than <code>FromPort</code>.</p>
   *          <p>For fleets using Linux builds, only ports <code>22</code> and <code>1026-60000</code> are valid.</p>
   *          <p>For fleets using Windows builds, only ports <code>1026-60000</code> are valid.</p>
   * @public
   */
  ToPort: number | undefined;

  /**
   * <p>A range of allowed IP addresses. This value must be expressed in CIDR notation.
   *             Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened
   *             version "<code>0.0.0.0/[subnet mask]</code>".</p>
   * @public
   */
  IpRange: string | undefined;

  /**
   * <p>The network communication protocol used by the fleet.</p>
   * @public
   */
  Protocol: IpProtocol | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerFleetLocationStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ContainerFleetLocationStatus =
  (typeof ContainerFleetLocationStatus)[keyof typeof ContainerFleetLocationStatus];

/**
 * <p>Details about a location in a multi-location container fleet. </p>
 * @public
 */
export interface ContainerFleetLocationAttributes {
  /**
   * <p>A location identifier.</p>
   * @public
   */
  Location?: string;

  /**
   * <p>The status of fleet activity in the location. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> -- A new container fleet has been requested.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> -- A new container fleet resource is being created.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> -- A new container fleet resource has been created. No
   *                     fleet instances have been deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> -- New container fleet instances are being
   *                     deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> -- The container fleet has been deployed and is ready to
   *                     host game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> -- Updates to the container fleet is being updated. A
   *                     deployment is in progress.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ContainerFleetLocationStatus;
}

/**
 * @public
 * @enum
 */
export const LogDestination = {
  CLOUDWATCH: "CLOUDWATCH",
  NONE: "NONE",
  S3: "S3",
} as const;

/**
 * @public
 */
export type LogDestination = (typeof LogDestination)[keyof typeof LogDestination];

/**
 * <p>A method for collecting container logs for the fleet. Amazon GameLift saves all standard
 *             output for each container in logs, including game session logs. You can select from the
 *             following methods: </p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The type of log collection to use for a fleet.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUDWATCH</code> -- (default value) Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> -- Store logs in an Amazon S3 bucket that you define.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> -- Don't collect container logs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LogDestination?: LogDestination;

  /**
   * <p>If log destination is <code>S3</code>, logs are sent to the specified Amazon S3 bucket name.</p>
   * @public
   */
  S3BucketName?: string;

  /**
   * <p>If log destination is <code>CLOUDWATCH</code>, logs are sent to the specified log group in Amazon CloudWatch.</p>
   * @public
   */
  LogGroupArn?: string;
}

/**
 * @public
 * @enum
 */
export const ProtectionPolicy = {
  FullProtection: "FullProtection",
  NoProtection: "NoProtection",
} as const;

/**
 * @public
 */
export type ProtectionPolicy = (typeof ProtectionPolicy)[keyof typeof ProtectionPolicy];

/**
 * @public
 * @enum
 */
export const ContainerFleetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ContainerFleetStatus = (typeof ContainerFleetStatus)[keyof typeof ContainerFleetStatus];

/**
 * <p>Describes an Amazon GameLift managed container fleet. </p>
 * @public
 */
export interface ContainerFleet {
  /**
   * <p>A unique identifier for the container fleet to retrieve. </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift fleet ARN, the resource ID matches the <code>FleetId</code>
   *             value.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The unique identifier for an Identity and Access Management (IAM) role with permissions to run your
   *             containers on resources that are managed by Amazon GameLift. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set up an IAM service
   *                 role</a>. This fleet property can't be changed.</p>
   * @public
   */
  FleetRoleArn?: string;

  /**
   * <p>The name of the fleet's game server container group definition, which describes how to
   *             deploy containers with your game server build and support software onto each fleet
   *             instance. </p>
   * @public
   */
  GameServerContainerGroupDefinitionName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to the fleet's game server container group. The ARN value
   *             also identifies the specific container group definition version in use.</p>
   * @public
   */
  GameServerContainerGroupDefinitionArn?: string;

  /**
   * <p>The name of the fleet's per-instance container group definition. </p>
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to the fleet's per-instance container group. The ARN value
   *             also identifies the specific container group definition version in use.</p>
   * @public
   */
  PerInstanceContainerGroupDefinitionArn?: string;

  /**
   * <p>The set of port numbers to open on each instance in a container fleet. Connection
   *             ports are used by inbound traffic to connect with processes that are running in
   *             containers on the fleet.</p>
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange;

  /**
   * <p>The IP address ranges and port settings that allow inbound traffic to access game
   *             server processes and other processes on this fleet. </p>
   * @public
   */
  InstanceInboundPermissions?: IpPermission[];

  /**
   * <p>The number of times to replicate the game server container group on each fleet
   *             instance. </p>
   * @public
   */
  GameServerContainerGroupsPerInstance?: number;

  /**
   * <p>The calculated maximum number of game server container group that can be deployed on
   *             each fleet instance. The calculation depends on the resource needs of the container
   *             group and the CPU and memory resources of the fleet's instance type.</p>
   * @public
   */
  MaximumGameServerContainerGroupsPerInstance?: number;

  /**
   * <p>The Amazon EC2 instance type to use for all instances in the fleet. Instance type
   *             determines the computing resources and processing power that's available to host your
   *             game servers. This includes including CPU, memory, storage, and networking capacity. You
   *             can't update this fleet property.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>Indicates whether the fleet uses On-Demand or Spot instances for this fleet. Learn
   *             more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. You can't update this fleet
   *             property.</p>
   *          <p>By default, this property is set to <code>ON_DEMAND</code>.</p>
   * @public
   */
  BillingType?: ContainerFleetBillingType;

  /**
   * <p>A meaningful description of the container fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. Metric groups
   *             aggregate metrics for multiple fleets. </p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Determines whether Amazon GameLift can shut down game sessions on the fleet that are actively
   *             running and hosting players. Amazon GameLift might prompt an instance shutdown when scaling down
   *             fleet capacity or when retiring unhealthy instances. You can also set game session
   *             protection for individual game sessions using <a href="gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- Game sessions can be shut down
   *                     during active gameplay. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- Game sessions in
   *                     <code>ACTIVE</code> status can't be shut down.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>A policy that limits the number of game sessions that each individual player can create
   *             on instances in this fleet. The limit applies for a specified span of time.</p>
   * @public
   */
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;

  /**
   * <p>The current status of the container fleet.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> -- A new container fleet has been requested.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> -- A new container fleet resource is being created. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> -- A new container fleet resource has been created. No fleet instances
   *                     have been deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> -- New container fleet instances are being deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> -- The container fleet has been deployed and is ready to host game
   *                     sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> -- Updates to the container fleet is being updated. A deployment is in
   *                     progress.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ContainerFleetStatus;

  /**
   * <p>Information about the most recent deployment for the container fleet.</p>
   * @public
   */
  DeploymentDetails?: DeploymentDetails;

  /**
   * <p>The method that is used to collect container logs for the fleet. Amazon GameLift saves all
   *             standard output for each container in logs, including game session logs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUDWATCH</code> -- Send logs to an Amazon CloudWatch log group that you define. Each container
   *                 emits a log stream, which is organized in the log group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> -- Store logs in an Amazon S3 bucket that you define.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> -- Don't collect container logs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LogConfiguration?: LogConfiguration;

  /**
   * <p>Information about the container fleet's remote locations where fleet instances are
   *             deployed.</p>
   * @public
   */
  LocationAttributes?: ContainerFleetLocationAttributes[];
}

/**
 * @public
 * @enum
 */
export const ContainerFleetRemoveAttribute = {
  PER_INSTANCE_CONTAINER_GROUP_DEFINITION: "PER_INSTANCE_CONTAINER_GROUP_DEFINITION",
} as const;

/**
 * @public
 */
export type ContainerFleetRemoveAttribute =
  (typeof ContainerFleetRemoveAttribute)[keyof typeof ContainerFleetRemoveAttribute];

/**
 * @public
 * @enum
 */
export const ContainerGroupType = {
  GAME_SERVER: "GAME_SERVER",
  PER_INSTANCE: "PER_INSTANCE",
} as const;

/**
 * @public
 */
export type ContainerGroupType = (typeof ContainerGroupType)[keyof typeof ContainerGroupType];

/**
 * @public
 * @enum
 */
export const ContainerMountPointAccessLevel = {
  READ_AND_WRITE: "READ_AND_WRITE",
  READ_ONLY: "READ_ONLY",
} as const;

/**
 * @public
 */
export type ContainerMountPointAccessLevel =
  (typeof ContainerMountPointAccessLevel)[keyof typeof ContainerMountPointAccessLevel];

/**
 * <p>A mount point that binds a container to a file or directory on the host system. </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>GameServerContainerDefinition</a>, <a>GameServerContainerDefinitionInput</a>, <a>SupportContainerDefinition</a>, <a>SupportContainerDefinitionInput</a>
 *          </p>
 * @public
 */
export interface ContainerMountPoint {
  /**
   * <p>The path to the source file or directory. </p>
   * @public
   */
  InstancePath: string | undefined;

  /**
   * <p>The mount path on the container. If this property isn't set, the instance path is
   *       used.</p>
   * @public
   */
  ContainerPath?: string;

  /**
   * <p>The type of access for the container.</p>
   * @public
   */
  AccessLevel?: ContainerMountPointAccessLevel;
}

/**
 * <p>A set of one or more port numbers that can be opened on the container.
 *   </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>ContainerPortConfiguration</a>
 *          </p>
 * @public
 */
export interface ContainerPortRange {
  /**
   * <p>A starting value for the range of allowed port numbers.</p>
   * @public
   */
  FromPort: number | undefined;

  /**
   * <p>An ending value for the range of allowed port numbers.
   *     Port numbers are end-inclusive.
   *     This value must be equal to or greater than <code>FromPort</code>.</p>
   * @public
   */
  ToPort: number | undefined;

  /**
   * <p>The network protocol that these ports support. </p>
   * @public
   */
  Protocol: IpProtocol | undefined;
}

/**
 * <p>A set of port ranges that can be opened on the container. A process that's running in the
 *       container can bind to a port number, making it accessible to inbound traffic. Container ports
 *       map to a container fleet's connection ports. </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>GameServerContainerDefinition</a>, <a>GameServerContainerDefinitionInput</a>, <a>SupportContainerDefinition</a>, <a>SupportContainerDefinitionInput</a>
 *          </p>
 * @public
 */
export interface ContainerPortConfiguration {
  /**
   * <p>A set of one or more container port number ranges. The ranges can't overlap. </p>
   * @public
   */
  ContainerPortRanges: ContainerPortRange[] | undefined;
}

/**
 * <p>Describes the game server container in an existing game server container group. A game
 *       server container identifies a container image with your game server build. A game server
 *       container is automatically considered essential; if an essential container fails, the entire
 *       container group restarts.</p>
 *          <p>You can update a container definition and deploy the updates to an existing fleet. When
 *       creating or updating a game server container group definition, use the property <a>GameServerContainerDefinitionInput</a>. </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>ContainerGroupDefinition</a>
 *          </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeContainerGroupDefinition</a>, <a>ListContainerGroupDefinitions</a>, <a>UpdateContainerGroupDefinition</a>
 *          </p>
 * @public
 */
export interface GameServerContainerDefinition {
  /**
   * <p>The container definition identifier. Container names are unique within a container group
   *       definition.</p>
   * @public
   */
  ContainerName?: string;

  /**
   * <p>Indicates that the container relies on the status of other containers in the same
   *       container group during startup and shutdown sequences. A container might have dependencies on
   *       multiple containers.</p>
   * @public
   */
  DependsOn?: ContainerDependency[];

  /**
   * <p>A mount point that binds a path inside the container to a file or directory on the host
   *       system and lets it access the file or directory.</p>
   * @public
   */
  MountPoints?: ContainerMountPoint[];

  /**
   * <p>A set of environment variables that's passed to the container on startup. See the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment">ContainerDefinition::environment</a> parameter in the <i>Amazon Elastic Container Service API
   *         Reference</i>.</p>
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[];

  /**
   * <p>The URI to the image that Amazon GameLift uses when deploying this container to a container fleet.
   *       For a more specific identifier, see <code>ResolvedImageDigest</code>. </p>
   * @public
   */
  ImageUri?: string;

  /**
   * <p>The set of ports that are available to bind to processes in the container. For example, a
   *       game server process requires a container port to allow game clients to connect to it.
   *       Container ports aren't directly accessed by inbound traffic. Amazon GameLift maps these container
   *       ports to externally accessible connection ports, which are assigned as needed from the
   *       container fleet's <code>ConnectionPortRange</code>. </p>
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration;

  /**
   * <p>A unique and immutable identifier for the container image. The digest is a SHA 256 hash of
   *       the container image manifest. </p>
   * @public
   */
  ResolvedImageDigest?: string;

  /**
   * <p>The Amazon GameLift server SDK version that the game server is integrated with. Only game servers
   *       using 5.2.0 or higher are compatible with container fleets.</p>
   * @public
   */
  ServerSdkVersion?: string;
}

/**
 * @public
 * @enum
 */
export const ContainerOperatingSystem = {
  AMAZON_LINUX_2023: "AMAZON_LINUX_2023",
} as const;

/**
 * @public
 */
export type ContainerOperatingSystem = (typeof ContainerOperatingSystem)[keyof typeof ContainerOperatingSystem];

/**
 * @public
 * @enum
 */
export const ContainerGroupDefinitionStatus = {
  COPYING: "COPYING",
  FAILED: "FAILED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ContainerGroupDefinitionStatus =
  (typeof ContainerGroupDefinitionStatus)[keyof typeof ContainerGroupDefinitionStatus];

/**
 * <p>Instructions on when and how to check the health of a support container in a container
 *       fleet. These properties override any Docker health checks that are set in the container image.
 *       For more information on container health checks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html#ECS-Type-HealthCheck-command">HealthCheck command</a> in the <i>Amazon Elastic Container Service API</i>. Game server
 *       containers don't have a health check parameter; Amazon GameLift automatically handles health checks
 *       for these containers.</p>
 *          <p>The following example instructs the container to initiate a health check command every 60
 *       seconds and wait 10 seconds for it to succeed. If it fails, retry the command 3 times before
 *       flagging the container as unhealthy. It also tells the container to wait 100 seconds after
 *       launch before counting failed health checks.</p>
 *          <p>
 *             <code>\{"Command": [ "CMD-SHELL", "ps cax | grep "processmanager" || exit 1" ], "Interval":
 *         60, "Timeout": 10, "Retries": 3, "StartPeriod": 100 \}</code>
 *          </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>SupportContainerDefinition</a>, <a>SupportContainerDefinitionInput</a>
 *          </p>
 * @public
 */
export interface ContainerHealthCheck {
  /**
   * <p>A string array that specifies the command that the container runs to determine if it's
   *       healthy.</p>
   * @public
   */
  Command: string[] | undefined;

  /**
   * <p>The time period (in seconds) between each health check.</p>
   * @public
   */
  Interval?: number;

  /**
   * <p>The number of times to retry a failed health check before flagging the container
   *       unhealthy. The first run of the command does not count as a retry.</p>
   * @public
   */
  Retries?: number;

  /**
   * <p>The optional grace period (in seconds) to give a container time to bootstrap before the
   *       first failed health check counts toward the number of retries.</p>
   * @public
   */
  StartPeriod?: number;

  /**
   * <p>The time period (in seconds) to wait for a health check to succeed before counting a
   *       failed health check. </p>
   * @public
   */
  Timeout?: number;
}

/**
 * <p>Describes a support container in a container group. A support container might be in a game
 *       server container group or a per-instance container group. Support containers don't run game
 *       server processes.</p>
 *          <p>You can update a support container definition and deploy the updates to an existing fleet.
 *       When creating or updating a game server container group definition, use the property <a>GameServerContainerDefinitionInput</a>. </p>
 *          <p>
 *             <b>Part of:</b>
 *             <a>ContainerGroupDefinition</a>
 *          </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeContainerGroupDefinition</a>, <a>ListContainerGroupDefinitions</a>, <a>UpdateContainerGroupDefinition</a>
 *          </p>
 * @public
 */
export interface SupportContainerDefinition {
  /**
   * <p>The container definition identifier. Container names are unique within a container group
   *       definition. </p>
   * @public
   */
  ContainerName?: string;

  /**
   * <p>Indicates that the container relies on the status of other containers in the same
   *       container group during its startup and shutdown sequences. A container might have dependencies
   *       on multiple containers.</p>
   * @public
   */
  DependsOn?: ContainerDependency[];

  /**
   * <p>A mount point that binds a path inside the container to a file or directory on the host
   *       system and lets it access the file or directory.</p>
   * @public
   */
  MountPoints?: ContainerMountPoint[];

  /**
   * <p>A set of environment variables that's passed to the container on startup. See the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment">ContainerDefinition::environment</a> parameter in the <i>Amazon Elastic Container Service API
   *         Reference</i>.</p>
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[];

  /**
   * <p>Indicates whether the container is vital to the container group. If an essential container
   *       fails, the entire container group restarts.</p>
   * @public
   */
  Essential?: boolean;

  /**
   * <p>A configuration for a non-terminal health check. A support container automatically
   *       restarts if it stops functioning or if it fails this health check. </p>
   * @public
   */
  HealthCheck?: ContainerHealthCheck;

  /**
   * <p>The URI to the image that Amazon GameLift deploys to a container fleet. For a more specific
   *       identifier, see <code>ResolvedImageDigest</code>. </p>
   * @public
   */
  ImageUri?: string;

  /**
   * <p>The amount of memory that Amazon GameLift makes available to the container. If memory limits
   *       aren't set for an individual container, the container shares the container group's total
   *       memory allocation.</p>
   *          <p>
   *             <b>Related data type: </b>
   *             <a>ContainerGroupDefinition$TotalMemoryLimitMebibytes</a>
   *          </p>
   * @public
   */
  MemoryHardLimitMebibytes?: number;

  /**
   * <p>A set of ports that allow access to the container from external users. Processes running
   *       in the container can bind to a one of these ports. Container ports aren't directly accessed by
   *       inbound traffic. Amazon GameLift maps these container ports to externally accessible connection ports,
   *       which are assigned as needed from the container fleet's
   *       <code>ConnectionPortRange</code>.</p>
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration;

  /**
   * <p>A unique and immutable identifier for the container image. The digest is a SHA 256 hash of
   *       the container image manifest. </p>
   * @public
   */
  ResolvedImageDigest?: string;

  /**
   * <p>The number of vCPU units that are reserved for the container. If no resources are
   *       reserved, the container shares the total vCPU limit for the container group.</p>
   *          <p>
   *             <b>Related data type: </b>
   *             <a>ContainerGroupDefinition$TotalVcpuLimit</a>
   *          </p>
   * @public
   */
  Vcpu?: number;
}

/**
 * <p>The properties that describe a container group resource. You can update all properties of
 *       a container group definition properties. Updates to a container group definition are saved as
 *       new versions. </p>
 *          <p>
 *             <b>Used with:</b>
 *             <a>CreateContainerGroupDefinition</a>
 *          </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeContainerGroupDefinition</a>, <a>ListContainerGroupDefinitions</a>, <a>UpdateContainerGroupDefinition</a>
 *          </p>
 * @public
 */
export interface ContainerGroupDefinition {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to an Amazon GameLift <code>ContainerGroupDefinition</code> resource. It uniquely identifies
   * the resource across all Amazon Web Services Regions. Format is
   * <code>arn:aws:gamelift:[region]::containergroupdefinition/[container group definition name]:[version]</code>.</p>
   * @public
   */
  ContainerGroupDefinitionArn?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The platform that all containers in the container group definition run on.</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>. For game
   *         servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x, first update the game
   *         server build to server SDK 5.x, and then deploy to AL2023 instances. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html"> Migrate to
   *           Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: ContainerOperatingSystem;

  /**
   * <p>A descriptive identifier for the container group definition. The name value is unique in an Amazon Web Services Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of container group. Container group type determines how Amazon GameLift deploys the
   *       container group on each fleet instance.</p>
   * @public
   */
  ContainerGroupType?: ContainerGroupType;

  /**
   * <p>The amount of memory (in MiB) on a fleet instance to allocate for the container group. All
   *       containers in the group share these resources. </p>
   *          <p>You can set a limit for each container definition in the group. If individual containers
   *       have limits, this total value must be greater than any individual container's memory
   *       limit.</p>
   * @public
   */
  TotalMemoryLimitMebibytes?: number;

  /**
   * <p>The amount of vCPU units on a fleet instance to allocate for the container group (1 vCPU
   *       is equal to 1024 CPU units). All containers in the group share these resources. You can set a
   *       limit for each container definition in the group. If individual containers have limits, this
   *       total value must be equal to or greater than the sum of the limits for each container in the
   *       group.</p>
   * @public
   */
  TotalVcpuLimit?: number;

  /**
   * <p>The definition for the game server container in this group. This property is used only
   *       when the container group type is <code>GAME_SERVER</code>. This container definition specifies
   *       a container image with the game server build. </p>
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinition;

  /**
   * <p>The set of definitions for support containers in this group. A container group definition
   *       might have zero support container definitions. Support container can be used in any type of
   *       container group.</p>
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinition[];

  /**
   * <p>Indicates the version of a particular container group definition. This number is
   *       incremented automatically when you update a container group definition. You can view, update,
   *       or delete individual versions or the entire container group definition.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>An optional description that was provided for a container group definition update. Each
   *       version can have a unique description.</p>
   * @public
   */
  VersionDescription?: string;

  /**
   * <p>Current status of the container group definition resource. Values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COPYING</code> -- Amazon GameLift is in the process of making copies of all container
   *           images that are defined in the group. While in this state, the resource can't be used to
   *           create a container fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> -- Amazon GameLift has copied the registry images for all containers that
   *           are defined in the group. You can use a container group definition in this status to
   *           create a container fleet. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> -- Amazon GameLift failed to create a valid container group definition
   *           resource. For more details on the cause of the failure, see <code>StatusReason</code>. A
   *           container group definition resource in failed status will be deleted within a few
   *           minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ContainerGroupDefinitionStatus;

  /**
   * <p>Additional information about a container group definition that's in <code>FAILED</code>
   *       status. Possible reasons include:</p>
   *          <ul>
   *             <li>
   *                <p>An internal issue prevented Amazon GameLift from creating
   *         the container group definition resource. Delete the failed resource and call
   *       <a>CreateContainerGroupDefinition</a>again. </p>
   *             </li>
   *             <li>
   *                <p>An access-denied message means that you don't have permissions to access the container image on ECR. See
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html">
   *           IAM permission examples</a>
   *         for help setting up required IAM permissions for Amazon GameLift.</p>
   *             </li>
   *             <li>
   *                <p>The <code>ImageUri</code> value for at least one
   *       of the containers in the container group definition was invalid or not found in the current
   *       Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>At least one
   *         of the container images referenced in the container group definition exceeds the
   *         allowed size. For size limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/gamelift.html">
   *           Amazon GameLift endpoints and quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>At least one of the container images referenced in the
   *         container group definition uses a different operating system than the one defined for the container group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusReason?: string;
}

/**
 * <p>A unique identifier for a container in a compute on a managed container fleet instance.
 *       This information makes it possible to remotely connect to a specific container on a fleet
 *       instance.</p>
 *          <p>
 *             <b>Related to:</b>
 *             <a>ContainerAttribute</a>
 *          </p>
 *          <p>
 *             <b>Use with: </b>
 *             <a>GetComputeAccess</a>
 *          </p>
 * @public
 */
export interface ContainerIdentifier {
  /**
   * <p>The identifier for a container that's running in a compute. </p>
   * @public
   */
  ContainerName?: string;

  /**
   * <p>The runtime ID for the container that's running in a compute. This value is unique within
   *       the compute. It is returned as a <code>ContainerAttribute</code> value in a
   *         <code>Compute</code> object.</p>
   * @public
   */
  ContainerRuntimeId?: string;
}

/**
 * <p>A label that you can assign to a Amazon GameLift resource. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
 *                 Resources</a> in the <i>Amazon Web Services General Reference</i>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *                 Amazon Web Services Tagging Strategies</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for a developer-defined key value pair for tagging an Amazon Web Services resource. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for a developer-defined key value pair for tagging an Amazon Web Services resource. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasInput {
  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the alias.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias.
   *         </p>
   * @public
   */
  RoutingStrategy: RoutingStrategy | undefined;

  /**
   * <p>A list of labels to assign to the new alias resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * <p>The newly created alias resource.</p>
   * @public
   */
  Alias?: Alias;
}

/**
 * <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 * @public
 */
export class TaggingFailedException extends __BaseException {
  readonly name: "TaggingFailedException" = "TaggingFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaggingFailedException, __BaseException>) {
    super({
      name: "TaggingFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaggingFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The location in Amazon S3 where build or script files are stored for access by
 *             Amazon GameLift.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>An Amazon S3 bucket identifier. Thename of the S3 bucket.</p>
   *          <note>
   *             <p>Amazon GameLift doesn't support uploading from Amazon S3 buckets with names that contain a dot
   *                 (.).</p>
   *          </note>
   * @public
   */
  Bucket?: string;

  /**
   * <p>The name of the zip file that contains the build files or script files. </p>
   * @public
   */
  Key?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access the S3 bucket.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses
   *             this information when retrieving files from an S3 bucket that you own. Use this
   *             parameter to specify a specific version of the file. If not set, the latest version of
   *             the file is retrieved. </p>
   * @public
   */
  ObjectVersion?: string;
}

/**
 * @public
 */
export interface CreateBuildInput {
  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. You can change this value later. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique. You can change this value later. </p>
   * @public
   */
  Version?: string;

  /**
   * <p>Information indicating where your game build files are stored. Use this parameter only
   *             when creating a build with files stored in an Amazon S3 bucket that you own. The storage
   *             location must specify an Amazon S3 bucket name and key. The location must also specify a role
   *             ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your
   *             new build must be in the same Region.</p>
   *          <p>If a <code>StorageLocation</code> is specified, the size of your file can be found in
   *             your Amazon S3 bucket. Amazon GameLift will report a <code>SizeOnDisk</code> of 0. </p>
   * @public
   */
  StorageLocation?: S3Location;

  /**
   * <p>The environment that your game server binaries run on. This value determines the type
   *             of fleet resources that you use for this build. If your game build contains multiple
   *             executables, they all must run on the same operating system. This parameter is required,
   *             and there's no default value. You can't change a build's operating system later.</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in
   *             the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>.
   *             For game servers
   *                 that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the
   *                 game server build to server SDK 5.x, and then deploy to AL2023 instances. See
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html">
   *                 Migrate to Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A list of labels to assign to the new build resource. Tags are developer defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>. Once the resource is created, you can
   *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit
   *             may be lower than stated. See the Amazon Web Services General Reference for actual tagging
   *             limits.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A server SDK version you used when integrating your game server build with Amazon GameLift. For more information see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-custom-intro.html">Integrate games
   *                 with custom game servers</a>. By default Amazon GameLift sets this value to
   *                 <code>4.0.2</code>.</p>
   * @public
   */
  ServerSdkVersion?: string;
}

/**
 * @public
 */
export interface CreateBuildOutput {
  /**
   * <p>The newly created build resource, including a unique build IDs and status. </p>
   * @public
   */
  Build?: Build;

  /**
   * <p>This element is returned only when the operation is called without a storage location.
   *             It contains credentials to use when you are uploading a build file to an Amazon S3 bucket
   *             that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these
   *             credentials, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>. </p>
   * @public
   */
  UploadCredentials?: AwsCredentials;

  /**
   * <p>Amazon S3 location for your game build file, including bucket name and key.</p>
   * @public
   */
  StorageLocation?: S3Location;
}

/**
 * <p>A remote location where a multi-location fleet can deploy game servers for game
 *             hosting. </p>
 * @public
 */
export interface LocationConfiguration {
  /**
   * <p>An Amazon Web Services Region code, such as <code>us-west-2</code>. For a list of supported Regions
   *             and Local Zones, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html"> Amazon GameLift service
   *                 locations</a> for managed hosting.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface CreateContainerFleetInput {
  /**
   * <p>The unique identifier for an Identity and Access Management (IAM) role with permissions to run your
   *             containers on resources that are managed by Amazon GameLift. Use an IAM service role with the
   *                 <code>GameLiftContainerFleetPolicy</code> managed policy attached. For more
   *             information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set up an IAM service
   *                 role</a>. You can't change this fleet property after the fleet is
   *             created.</p>
   *          <p>IAM role ARN values use the following pattern: <code>arn:aws:iam::[Amazon Web Services account]:role/[role name]</code>.</p>
   * @public
   */
  FleetRoleArn: string | undefined;

  /**
   * <p>A meaningful description of the container fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A container group definition resource that describes how to deploy containers with
   *             your game server build and support software onto each fleet instance. You can specify
   *             the container group definition's name to use the latest version. Alternatively, provide
   *             an ARN value with a specific version number.</p>
   *          <p>Create a container group definition by calling <a>CreateContainerGroupDefinition</a>. This operation creates a <a>ContainerGroupDefinition</a> resource. </p>
   * @public
   */
  GameServerContainerGroupDefinitionName?: string;

  /**
   * <p>The name of a container group definition resource that describes a set of axillary
   *             software. A fleet instance has one process for executables in this container group. A
   *             per-instance container group is optional. You can update the fleet to add or remove a
   *             per-instance container group at any time. You can specify the container group
   *             definition's name to use the latest version. Alternatively, provide an ARN value with a
   *             specific version number. </p>
   *          <p>Create a container group definition by calling <a>CreateContainerGroupDefinition</a>.
   *             This operation creates a <a>ContainerGroupDefinition</a> resource.</p>
   * @public
   */
  PerInstanceContainerGroupDefinitionName?: string;

  /**
   * <p>The set of port numbers to open on each fleet instance. A fleet's connection ports map
   *             to container ports that are configured in the fleet's container group definitions. </p>
   *          <p>By default, Amazon GameLift calculates an optimal port range based on your fleet
   *             configuration. To use the calculated range, don't set this parameter. The values
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>Port range: 4192 to a number calculated based on your fleet configuration.
   *                     Amazon GameLift uses the following formula: <code>4192 + [# of game server container
   *                         groups per fleet instance] * [# of container ports in the game server
   *                         container group definition] + [# of container ports in the game server
   *                         container group definition]</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can also choose to manually set this parameter. When manually setting this
   *             parameter, you must use port numbers that match the fleet's inbound permissions port
   *             range.</p>
   *          <note>
   *             <p>If you set values manually, Amazon GameLift no longer calculates a port range for you,
   *                 even if you later remove the manual settings. </p>
   *          </note>
   * @public
   */
  InstanceConnectionPortRange?: ConnectionPortRange;

  /**
   * <p>The IP address ranges and port settings that allow inbound traffic to access game
   *             server processes and other processes on this fleet. As a best practice, when remotely
   *             accessing a fleet instance, we recommend opening ports only when you need them and
   *             closing them when you're finished.</p>
   *          <p>By default, Amazon GameLift calculates an optimal port range based on your fleet
   *             configuration. To use the calculated range, don't set this parameter. The values
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>Protocol: UDP</p>
   *             </li>
   *             <li>
   *                <p>Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift uses the
   *                     following formula: <code>4192 + [# of game server container groups per fleet
   *                         instance] * [# of container ports in the game server container group
   *                         definition] + [# of container ports in the game server container group
   *                         definition]</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can also choose to manually set this parameter. When manually setting this
   *             parameter, you must use port numbers that match the fleet's connection port
   *             range.</p>
   *          <note>
   *             <p>If you set values manually, Amazon GameLift no longer calculates a port range for you,
   *                 even if you later remove the manual settings. </p>
   *          </note>
   * @public
   */
  InstanceInboundPermissions?: IpPermission[];

  /**
   * <p>The number of times to replicate the game server container group on each fleet
   *             instance. </p>
   *          <p>By default, Amazon GameLift calculates the maximum number of game server container groups that
   *             can fit on each instance. This calculation is based on the CPU and memory resources of
   *             the fleet's instance type). To use the calculated maximum, don't set this parameter. If
   *             you set this number manually, Amazon GameLift uses your value as long as it's less than the
   *             calculated maximum.</p>
   * @public
   */
  GameServerContainerGroupsPerInstance?: number;

  /**
   * <p>The Amazon EC2 instance type to use for all instances in the fleet. For multi-location
   *             fleets, the instance type must be available in the home region and all remote locations.
   *             Instance type determines the computing resources and processing power that's available
   *             to host your game servers. This includes including CPU, memory, storage, and networking
   *             capacity. </p>
   *          <p>By default, Amazon GameLift selects an instance type that fits the needs of your container
   *             groups and is available in all selected fleet locations. You can also choose to manually
   *             set this parameter. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud
   *                 Instance Types</a> for detailed descriptions of Amazon EC2 instance types.</p>
   *          <p>You can't update this fleet property later.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>Indicates whether to use On-Demand or Spot instances for this fleet. Learn more about
   *             when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This fleet property can't be changed after the fleet is created.</p>
   *          <p>By default, this property is set to <code>ON_DEMAND</code>.</p>
   *          <p>You can't update this fleet property later.</p>
   * @public
   */
  BillingType?: ContainerFleetBillingType;

  /**
   * <p>A set of locations to deploy container fleet instances to. You can add any Amazon Web Services
   *             Region or Local Zone that's supported by Amazon GameLift. Provide a list of one or more Amazon Web Services
   *             Region codes, such as <code>us-west-2</code>, or Local Zone names. Also include the
   *             fleet's home Region, which is the Amazon Web Services Region where the fleet is created. For a list of
   *             supported Regions and Local Zones, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html"> Amazon GameLift service
   *                 locations</a> for managed hosting.</p>
   * @public
   */
  Locations?: LocationConfiguration[];

  /**
   * <p>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. You can use a metric group
   *             to aggregate metrics for multiple fleets. You can specify an existing metric
   *             group name or use a new name to create a new metric group. Each fleet can have only one metric group,
   *             but you can change this value at any time. </p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Determines whether Amazon GameLift can shut down game sessions on the fleet that are actively
   *             running and hosting players. Amazon GameLift might prompt an instance shutdown when scaling down
   *             fleet capacity or when retiring unhealthy instances. You can also set game session
   *             protection for individual game sessions using <a href="gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- Game sessions can be shut down
   *                     during active gameplay. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- Game sessions in
   *                         <code>ACTIVE</code> status can't be shut down.</p>
   *             </li>
   *          </ul>
   *          <p>By default, this property is set to <code>NoProtection</code>. </p>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>A policy that limits the number of game sessions that each individual player can create
   *             on instances in this fleet. The limit applies for a specified span of time.</p>
   * @public
   */
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;

  /**
   * <p>A method for collecting container logs for the fleet. Amazon GameLift saves all standard
   *             output for each container in logs, including game session logs. You can select from the
   *             following methods: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUDWATCH</code> -- Send logs to an Amazon CloudWatch log group that you define. Each container
   *                     emits a log stream, which is organized in the log group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> -- Store logs in an Amazon S3 bucket that you define.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> -- Don't collect container logs.</p>
   *             </li>
   *          </ul>
   *          <p>By default, this property is set to <code>CLOUDWATCH</code>. </p>
   *          <p>Amazon GameLift requires permissions to send logs other Amazon Web Services services in your account. These permissions are included in the IAM fleet role for this container fleet (see <code>FleetRoleArn)</code>.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration;

  /**
   * <p>A list of labels to assign to the new fleet resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *             <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateContainerFleetOutput {
  /**
   * <p>The properties for the new container fleet, including current status. All fleets are
   *             initially placed in <code>PENDING</code> status. </p>
   * @public
   */
  ContainerFleet?: ContainerFleet;
}

/**
 * <p>Describes the configuration for a container that runs your game server executable. This
 *       definition includes container configuration, resources, and start instructions. Use this data
 *       type when creating or updating a game server container group definition. For properties of a
 *       deployed container, see <a>GameServerContainerDefinition</a>. A game server
 *       container is automatically considered essential; if an essential container fails, the entire
 *       container group restarts.</p>
 *          <p>
 *             <b>Use with: </b>
 *             <a>CreateContainerGroupDefinition</a>, <a>UpdateContainerGroupDefinition</a>
 *          </p>
 * @public
 */
export interface GameServerContainerDefinitionInput {
  /**
   * <p>A string that uniquely identifies the container definition within a container
   *       group.</p>
   * @public
   */
  ContainerName: string | undefined;

  /**
   * <p>Establishes dependencies between this container and the status of other containers in the
   *       same container group. A container can have dependencies on multiple different containers. </p>
   *          <p>You can use dependencies to establish a startup/shutdown sequence across the container
   *       group. For example, you might specify that <i>ContainerB</i> has a
   *         <code>START</code> dependency on <i>ContainerA</i>. This dependency means that
   *         <i>ContainerB</i> can't start until after <i>ContainerA</i> has
   *       started. This dependency is reversed on shutdown, which means that
   *         <i>ContainerB</i> must shut down before <i>ContainerA</i> can
   *       shut down. </p>
   * @public
   */
  DependsOn?: ContainerDependency[];

  /**
   * <p>A mount point that binds a path inside the container to a file or directory on the host
   *       system and lets it access the file or directory.</p>
   * @public
   */
  MountPoints?: ContainerMountPoint[];

  /**
   * <p>A set of environment variables to pass to the container on startup. See the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment">ContainerDefinition::environment</a> parameter in the <i>Amazon Elastic Container Service API
   *         Reference</i>. </p>
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[];

  /**
   * <p>The location of the container image to deploy to a container fleet. Provide an image in an
   *       Amazon Elastic Container Registry public or private repository. The repository must be in the same Amazon Web Services account and
   *       Amazon Web Services Region where you're creating the container group definition. For limits on image size,
   *       see <a href="https://docs.aws.amazon.com/general/latest/gr/gamelift.html">Amazon GameLift endpoints and
   *         quotas</a>. You can use any of the following image URI formats: </p>
   *          <ul>
   *             <li>
   *                <p>Image ID only: <code>[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository
   *           ID]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Image ID and digest: <code>[AWS account].dkr.ecr.[AWS
   *           region].amazonaws.com/[repository ID]@[digest]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Image ID and tag: <code>[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository
   *           ID]:[tag]</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ImageUri: string | undefined;

  /**
   * <p>A set of ports that Amazon GameLift can assign to processes in the container. Processes, must be
   *       assigned a container port to accept inbound traffic connections. For example, a game server
   *       process requires a container port to allow game clients to connect to it. Container ports
   *       aren't directly accessed by inbound traffic. Instead, Amazon GameLift maps container ports to
   *       externally accessible connection ports (see the container fleet property
   *         <code>ConnectionPortRange</code>). </p>
   * @public
   */
  PortConfiguration: ContainerPortConfiguration | undefined;

  /**
   * <p>The Amazon GameLift server SDK version that the game server is integrated with. Only game servers
   *       using 5.2.0 or higher are compatible with container fleets.</p>
   * @public
   */
  ServerSdkVersion: string | undefined;
}

/**
 * <p>Describes a support container in a container group. You can define a support container in
 *       either a game server container group or a per-instance container group. Support containers
 *       don't run game server processes.</p>
 *          <p>This definition includes container configuration, resources, and start instructions. Use
 *       this data type when creating or updating a container group definition. For properties of a
 *       deployed support container, see <a>SupportContainerDefinition</a>.</p>
 *          <p>
 *             <b>Use with: </b>
 *             <a>CreateContainerGroupDefinition</a>, <a>UpdateContainerGroupDefinition</a>
 *          </p>
 * @public
 */
export interface SupportContainerDefinitionInput {
  /**
   * <p>A string that uniquely identifies the container definition within a container
   *       group.</p>
   * @public
   */
  ContainerName: string | undefined;

  /**
   * <p>Establishes dependencies between this container and the status of other containers in the
   *       same container group. A container can have dependencies on multiple different containers. </p>
   *          <p>.</p>
   *          <p>You can use dependencies to establish a startup/shutdown sequence across the container
   *       group. For example, you might specify that <i>ContainerB</i> has a
   *         <code>START</code> dependency on <i>ContainerA</i>. This dependency means that
   *         <i>ContainerB</i> can't start until after <i>ContainerA</i> has
   *       started. This dependency is reversed on shutdown, which means that
   *         <i>ContainerB</i> must shut down before <i>ContainerA</i> can
   *       shut down. </p>
   * @public
   */
  DependsOn?: ContainerDependency[];

  /**
   * <p>A mount point that binds a path inside the container to a file or directory on the host
   *       system and lets it access the file or directory.</p>
   * @public
   */
  MountPoints?: ContainerMountPoint[];

  /**
   * <p>A set of environment variables to pass to the container on startup. See the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment">ContainerDefinition::environment</a> parameter in the <i>Amazon Elastic Container Service API
   *         Reference</i>. </p>
   * @public
   */
  EnvironmentOverride?: ContainerEnvironment[];

  /**
   * <p>Flags the container as vital for the container group to function properly. If an essential
   *       container fails, the entire container group restarts. At least one support container in a
   *       per-instance container group must be essential. When flagging a container as essential, also
   *       configure a health check so that the container can signal that it's healthy. </p>
   * @public
   */
  Essential?: boolean;

  /**
   * <p>Configuration for a non-terminal health check. A container automatically restarts if it
   *       stops functioning. With a health check, you can define additional reasons to flag a container
   *       as unhealthy and restart it. If an essential container fails a health check, the entire
   *       container group restarts. </p>
   * @public
   */
  HealthCheck?: ContainerHealthCheck;

  /**
   * <p>The location of the container image to deploy to a container fleet. Provide an image in an
   *       Amazon Elastic Container Registry public or private repository. The repository must be in the same Amazon Web Services account and
   *       Amazon Web Services Region where you're creating the container group definition. For limits on image size,
   *       see <a href="https://docs.aws.amazon.com/general/latest/gr/gamelift.html">Amazon GameLift endpoints and
   *         quotas</a>. You can use any of the following image URI formats: </p>
   *          <ul>
   *             <li>
   *                <p>Image ID only: <code>[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository
   *           ID]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Image ID and digest: <code>[AWS account].dkr.ecr.[AWS
   *           region].amazonaws.com/[repository ID]@[digest]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Image ID and tag: <code>[AWS account].dkr.ecr.[AWS region].amazonaws.com/[repository
   *           ID]:[tag]</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ImageUri: string | undefined;

  /**
   * <p>A specified amount of memory (in MiB) to reserve for this container. If you don't specify
   *       a container-specific memory limit, the container shares the container group's total memory
   *       allocation. </p>
   *          <p>
   *             <b>Related data type: </b>
   *             <a>ContainerGroupDefinition</a>  TotalMemoryLimitMebibytes<code></code>
   *          </p>
   * @public
   */
  MemoryHardLimitMebibytes?: number;

  /**
   * <p>A set of ports that Amazon GameLift can assign to processes in the container. Any processes that
   *       accept inbound traffic connections must be assigned a port from this set. The container port
   *       range must be large enough to assign one to each process in the container that needs one. </p>
   *          <p>Container ports aren't directly accessed by inbound traffic. Amazon GameLift maps these container
   *       ports to externally accessible connection ports, which are assigned as needed from the
   *       container fleet's <code>ConnectionPortRange</code>.</p>
   * @public
   */
  PortConfiguration?: ContainerPortConfiguration;

  /**
   * <p>The number of vCPU units to reserve for this container. The container can use more
   *       resources when needed, if available. If you don't reserve CPU units for this container, it
   *       shares the container group's total vCPU limit. </p>
   *          <p>
   *             <b>Related data type: </b>
   *             <a>ContainerGroupDefinition</a> TotalCpuLimit
   *     </p>
   * @public
   */
  Vcpu?: number;
}

/**
 * @public
 */
export interface CreateContainerGroupDefinitionInput {
  /**
   * <p>A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of container group being defined. Container group type determines how Amazon GameLift
   *       deploys the container group on each fleet instance.</p>
   *          <p>Default value: <code>GAME_SERVER</code>
   *          </p>
   * @public
   */
  ContainerGroupType?: ContainerGroupType;

  /**
   * <p>The maximum amount of memory (in MiB) to allocate to the container group. All containers in
   *       the group share this memory. If you specify memory limits for an individual container, the
   *       total value must be greater than any individual container's memory limit.</p>
   *          <p>Default value: 1024</p>
   * @public
   */
  TotalMemoryLimitMebibytes: number | undefined;

  /**
   * <p>The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024
   *       CPU units). All containers in the group share this memory. If you specify vCPU limits for
   *       individual containers, the total value must be equal to or greater than the sum of the CPU
   *       limits for all containers in the group.</p>
   *          <p>Default value: 1</p>
   * @public
   */
  TotalVcpuLimit: number | undefined;

  /**
   * <p>The definition for the game server container in this group. Define a game server container
   *       only when the container group type is <code>GAME_SERVER</code>. Game server containers specify
   *       a container image with your game server build. You can pass in your container definitions as a
   *       JSON file.</p>
   * @public
   */
  GameServerContainerDefinition?: GameServerContainerDefinitionInput;

  /**
   * <p>One or more definition for support containers in this group. You can define a support
   *       container in any type of container group. You can pass in your container definitions as a JSON
   *       file.</p>
   * @public
   */
  SupportContainerDefinitions?: SupportContainerDefinitionInput[];

  /**
   * <p>The platform that all containers in the group use. Containers in a group must run on the
   *       same operating system.</p>
   *          <p>Default value: <code>AMAZON_LINUX_2023</code>
   *          </p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>. For game
   *         servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x, first update the game
   *         server build to server SDK 5.x, and then deploy to AL2023 instances. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html"> Migrate to
   *           Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem: ContainerOperatingSystem | undefined;

  /**
   * <p>A description for the initial version of this container group definition. </p>
   * @public
   */
  VersionDescription?: string;

  /**
   * <p>A list of labels to assign to the container group definition resource. Tags are
   *       developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management,
   *       access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *         <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateContainerGroupDefinitionOutput {
  /**
   * <p>The properties of the new container group definition resource. You can use this resource to
   *       create a container fleet.</p>
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition;
}

/**
 * @public
 * @enum
 */
export const FleetType = {
  OnDemand: "ON_DEMAND",
  Spot: "SPOT",
} as const;

/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 * @enum
 */
export const InstanceRoleCredentialsProvider = {
  SHARED_CREDENTIAL_FILE: "SHARED_CREDENTIAL_FILE",
} as const;

/**
 * @public
 */
export type InstanceRoleCredentialsProvider =
  (typeof InstanceRoleCredentialsProvider)[keyof typeof InstanceRoleCredentialsProvider];

/**
 * <p>A policy that puts limits on the number of game sessions that a player can create
 *             within a specified span of time. With this policy, you can control players' ability to
 *             consume available resources.</p>
 *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
 *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
 *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
 *             time period.</p>
 * @public
 */
export interface ResourceCreationLimitPolicy {
  /**
   * <p>A policy that puts limits on the number of game sessions that a player can create
   *             within a specified span of time. With this policy, you can control players' ability to
   *             consume available resources.</p>
   *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
   *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
   *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
   *             time period.</p>
   * @public
   */
  NewGameSessionsPerCreator?: number;

  /**
   * <p>The time span used in evaluating the resource creation limit policy. </p>
   * @public
   */
  PolicyPeriodInMinutes?: number;
}

/**
 * <p>A set of instructions for launching server processes on fleet computes. Server
 *             processes run either an executable in a custom game build or a Realtime Servers script. Server
 *             process configurations are part of a fleet's runtime configuration.</p>
 * @public
 */
export interface ServerProcess {
  /**
   * <p>The location of a game build executable or Realtime script. Game builds and Realtime
   *             scripts are installed on instances at the root: </p>
   *          <ul>
   *             <li>
   *                <p>Windows (custom game builds only): <code>C:\game</code>. Example:
   *                         "<code>C:\game\MyGame\server.exe</code>" </p>
   *             </li>
   *             <li>
   *                <p>Linux: <code>/local/game</code>. Examples:
   *                         "<code>/local/game/MyGame/server.exe</code>" or
   *                         "<code>/local/game/MyRealtimeScript.js</code>"</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Amazon GameLift doesn't support the use of setup scripts that launch the game executable.
   *                 For custom game builds, this parameter must indicate the executable that calls the
   *                 server SDK operations <code>initSDK()</code> and <code>ProcessReady()</code>.
   *             </p>
   *          </note>
   * @public
   */
  LaunchPath: string | undefined;

  /**
   * <p>An optional list of parameters to pass to the server executable or Realtime script on
   *             launch.</p>
   * @public
   */
  Parameters?: string;

  /**
   * <p>The number of server processes using this configuration that run concurrently on each
   *             instance or compute.</p>
   * @public
   */
  ConcurrentExecutions: number | undefined;
}

/**
 * <p>A set of instructions that define the set of server processes to run on computes in a
 *             fleet. Server processes run either an executable in a custom game build or a Realtime Servers
 *             script. Amazon GameLift launches the processes, manages their life cycle, and replaces them as
 *             needed. Computes check regularly for an updated runtime configuration. </p>
 *          <p>An Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the
 *             total number of processes defined in a runtime configuration, add the values of the
 *                 <code>ConcurrentExecutions</code> parameter for each server process. Learn more
 *             about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple
 *                 Processes on a Fleet</a>.</p>
 * @public
 */
export interface RuntimeConfiguration {
  /**
   * <p>A collection of server process configurations that identify what server processes to
   *             run on fleet computes.</p>
   * @public
   */
  ServerProcesses?: ServerProcess[];

  /**
   * <p>The number of game sessions in status <code>ACTIVATING</code> to allow on an instance.
   *             This setting limits the instance resources that can be used for new game activations at
   *             any one time.</p>
   * @public
   */
  MaxConcurrentGameSessionActivations?: number;

  /**
   * <p>The maximum amount of time (in seconds) allowed to launch a new game session and have
   *             it report ready to host players. During this time, the game session is in status
   *                 <code>ACTIVATING</code>. If the game session does not become active before the
   *             timeout, it is ended and the game session status is changed to
   *             <code>TERMINATED</code>.</p>
   * @public
   */
  GameSessionActivationTimeoutSeconds?: number;
}

/**
 * @public
 */
export interface CreateFleetInput {
  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The unique identifier for a custom game server build to be deployed to a fleet with
   *             compute type <code>EC2</code>. You can use either the build ID or ARN. The build must be
   *             uploaded to Amazon GameLift and in <code>READY</code> status. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p>The unique identifier for a Realtime configuration script to be deployed to a fleet with
   *             compute type <code>EC2</code>. You can use either the script ID or ARN. Scripts must be
   *             uploaded to Amazon GameLift prior to creating the fleet. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Specify a server
   *             launch path using the <code>RuntimeConfiguration</code> parameter. Requests that use
   *             this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchPath?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Specify server
   *             launch parameters using the <code>RuntimeConfiguration</code> parameter. Requests that
   *             use this parameter instead continue to be valid.</p>
   * @public
   */
  ServerLaunchParameters?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> To specify where
   *             Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server
   *             API <code>ProcessReady()</code> and specify one or more directory paths in
   *                 <code>logParameters</code>. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-initialize">Initialize the server process</a> in the <i>Amazon GameLift Developer
   *                 Guide</i>. </p>
   * @public
   */
  LogPaths?: string[];

  /**
   * <p>The Amazon GameLift-supported Amazon EC2 instance type to use with managed EC2 fleets.
   *             Instance type determines the computing resources that will be used to host your game
   *             servers, including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for
   *             detailed descriptions of Amazon EC2 instance types.</p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The IP address ranges and port settings that allow inbound traffic to access game
   *             server processes and other processes on this fleet. Set this parameter for managed EC2
   *             fleets. You can leave this parameter empty when creating the fleet, but you must call
   *             <a>UpdateFleetPortSettings</a> to set it before players can connect to game sessions.
   *             As a best practice, we recommend
   *             opening ports for remote access only when you need them and closing them when you're finished.
   *             For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges.</p>
   * @public
   */
  EC2InboundPermissions?: IpPermission[];

  /**
   * <p>The status of termination protection for active game sessions on the fleet. By
   *             default, this property is set to <code>NoProtection</code>. You can also set game
   *             session protection for an individual game session by calling <a href="gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> - Game sessions can be terminated
   *                     during active gameplay as a result of a scale-down event. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> - Game sessions in
   *                         <code>ACTIVE</code> status cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>Instructions for how to launch and run server processes on the fleet. Set runtime
   *             configuration for managed EC2 fleets. For an Anywhere fleets, set this
   *             parameter only if the fleet is running the Amazon GameLift Agent. The runtime configuration
   *             defines one or more server process configurations. Each server process identifies a game
   *             executable or Realtime script file and the number of processes to run concurrently. </p>
   *          <note>
   *             <p>This parameter replaces the parameters <code>ServerLaunchPath</code> and
   *                     <code>ServerLaunchParameters</code>, which are still supported for backward
   *                 compatibility.</p>
   *          </note>
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration;

  /**
   * <p>A policy that limits the number of game sessions that an individual player can create
   *             on instances in this fleet within a specified span of time.</p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is
   *             used to aggregate the metrics for multiple fleets. You can specify an existing metric
   *             group name or set a new name to create a new metric group. A fleet can be included in
   *             only one metric group at a time. </p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the Amazon Web Services
   *             account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account
   *             settings. </p>
   * @public
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>Indicates whether to use On-Demand or Spot instances for this fleet. By default, this
   *             property is set to <code>ON_DEMAND</code>. Learn more about when to use <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  FleetType?: FleetType;

  /**
   * <p>A unique identifier for an IAM role that manages access to your Amazon Web Services services.
   *         With an instance role ARN set, any application that runs on an instance in this fleet can assume the role,
   *         including install scripts, server processes, and daemons (background processes). Create a role or look up a role's
   *         ARN by using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the Amazon Web Services Management Console.
   *         Learn more about using on-box credentials for your game servers at
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Access external resources from a game server</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * <p>Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the
   *             certificates to encrypt traffic between game clients and the game servers running on
   *             Amazon GameLift. By default, the <code>CertificateConfiguration</code> is <code>DISABLED</code>.
   *             You can't change this property after you create the fleet. </p>
   *          <p>Certificate Manager (ACM) certificates expire after 13 months.
   *             Certificate expiration can cause fleets to fail, preventing players from connecting to
   *             instances in the fleet. We recommend you replace fleets before 13 months, consider using
   *             fleet aliases for a smooth transition.</p>
   *          <note>
   *             <p>ACM isn't available in all Amazon Web Services regions. A fleet creation request
   *                 with certificate generation enabled in an unsupported Region, fails with a 4xx
   *                 error. For more information about the supported Regions, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html">Supported
   *                     Regions</a> in the <i>Certificate Manager User
   *                 Guide</i>.</p>
   *          </note>
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration;

  /**
   * <p>A set of remote locations to deploy additional instances to and manage as a
   *             multi-location fleet. Use this parameter when creating a fleet in Amazon Web Services Regions that
   *             support multiple locations. You can add any Amazon Web Services Region or Local Zone that's supported
   *             by Amazon GameLift. Provide a list of one or more Amazon Web Services Region codes, such as
   *                 <code>us-west-2</code>, or Local Zone names. When using this parameter, Amazon GameLift
   *             requires you to include your home location in the request. For a list of supported
   *             Regions and Local Zones, see
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html">
   *                 Amazon GameLift service locations</a> for managed hosting.</p>
   * @public
   */
  Locations?: LocationConfiguration[];

  /**
   * <p>A list of labels to assign to the new fleet resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The type of compute resource used to host your game servers. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EC2</code> – The game server build is deployed to Amazon EC2 instances for
   *                     cloud hosting. This is the default setting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANYWHERE</code> – Your game server
   *                     and supporting software is deployed to compute resources that are provided and
   *                     managed by you. With this compute type, you can also set the
   *                         <code>AnywhereConfiguration</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ComputeType?: ComputeType;

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;

  /**
   * <p>Prompts Amazon GameLift to generate a shared credentials file for the IAM role
   *             that's defined in <code>InstanceRoleArn</code>. The shared credentials file is stored on
   *             each fleet instance and refreshed as needed. Use shared credentials for applications
   *             that are deployed along with the game server executable, if the game server is
   *             integrated with server SDK version 5.x. For more information about using shared
   *             credentials, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Communicate
   *                 with other Amazon Web Services resources from your fleets</a>.</p>
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}

/**
 * @public
 * @enum
 */
export const FleetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  DELETING: "DELETING",
  DOWNLOADING: "DOWNLOADING",
  ERROR: "ERROR",
  NEW: "NEW",
  NOT_FOUND: "NOT_FOUND",
  TERMINATED: "TERMINATED",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];

/**
 * @public
 * @enum
 */
export const FleetAction = {
  AutoScaling: "AUTO_SCALING",
} as const;

/**
 * @public
 */
export type FleetAction = (typeof FleetAction)[keyof typeof FleetAction];

/**
 * <p>Describes an Amazon GameLift fleet of game hosting resources. Attributes differ based on
 *             the fleet's compute type, as follows:</p>
 *          <ul>
 *             <li>
 *                <p>EC2 fleet attributes identify a <code>Build</code> resource (for fleets with
 *                     customer game server builds) or a <code>Script</code> resource (for Realtime Servers fleets).</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift Anywhere fleets have an abbreviated set of attributes, because most fleet configurations
 *                 are set directly on the fleet's computes. Attributes include fleet identifiers and descriptive
 *                 properties, creation/termination time, and fleet status.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeFleetAttributes</a>
 *          </p>
 * @public
 */
export interface FleetAttributes {
  /**
   * <p>A unique identifier for the fleet.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. In a GameLift fleet ARN, the resource ID matches the <code>FleetId</code>
   *             value.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>Indicates whether the fleet uses On-Demand or Spot instances. For more information,
   *             see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. This fleet property can't be changed after the fleet is created.</p>
   * @public
   */
  FleetType?: FleetType;

  /**
   * <p>The Amazon EC2 instance type that the fleet uses. Instance type determines the computing
   *             resources of each instance in the fleet, including CPU, memory, storage, and networking
   *             capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance
   *                 Types</a> for detailed descriptions. This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  InstanceType?: EC2InstanceType;

  /**
   * <p>A human-readable description of the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the fleet. Possible fleet statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>NEW -- A new fleet resource has been defined and Amazon GameLift has started creating the fleet.
   *                     Desired instances is set to 1. </p>
   *             </li>
   *             <li>
   *                <p>DOWNLOADING/VALIDATING/BUILDING -- Amazon GameLift is download the game server build,
   *                     running install scripts, and then validating the build files. When complete,
   *                     Amazon GameLift launches a fleet instance. </p>
   *             </li>
   *             <li>
   *                <p>ACTIVATING -- Amazon GameLift is launching a game server process and testing its
   *                     connectivity with the Amazon GameLift service.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE -- The fleet is now ready to host game sessions.</p>
   *             </li>
   *             <li>
   *                <p>ERROR -- An error occurred when downloading,
   *                     validating, building, or activating the fleet.</p>
   *             </li>
   *             <li>
   *                <p>DELETING -- Hosts are responding to a delete fleet request.</p>
   *             </li>
   *             <li>
   *                <p>TERMINATED -- The fleet no longer exists.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: FleetStatus;

  /**
   * <p>A unique identifier for the build resource that is deployed on instances in this fleet. This attribute is used with
   *         fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  BuildId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the Amazon GameLift build resource that is deployed on instances in
   *             this fleet. In a GameLift build ARN, the resource ID matches the <code>BuildId</code>
   *             value. This attribute is used with fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  BuildArn?: string;

  /**
   * <p>A unique identifier for the Realtime script resource that is deployed on instances in this fleet.
   *             This attribute is used with fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift script resource that is deployed on instances
   *             in this fleet. In a GameLift script ARN, the resource ID matches the
   *                 <code>ScriptId</code> value.</p>
   * @public
   */
  ScriptArn?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Server launch paths
   *             are now defined using the fleet's <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/RuntimeConfiguration.html">RuntimeConfiguration</a>. Requests that use this parameter continue to be
   *             valid.</p>
   * @public
   */
  ServerLaunchPath?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Server launch
   *             parameters are now defined using the fleet's runtime configuration. Requests that use
   *             this parameter continue to be valid.</p>
   * @public
   */
  ServerLaunchParameters?: string;

  /**
   * <p>
   *             <b>This parameter is no longer used.</b> Game session log
   *             paths are now defined using the Amazon GameLift server API <code>ProcessReady()</code>
   *             <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. </p>
   * @public
   */
  LogPaths?: string[];

  /**
   * <p>The type of game session protection to set on all new instances that are started in
   *             the fleet.  This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy;

  /**
   * <p>The operating system of the fleet's computing resources. A fleet's operating system is
   *             determined by the OS of the build or script that is deployed on this fleet.
   *             This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>.
   *                 For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x,
   *                 first update the game server build to server SDK 5.x, and then deploy to AL2023
   *                 instances. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html">
   *                     Migrate to Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>A policy that puts limits on the number of game sessions that a player can create
   *             within a specified span of time. With this policy, you can control players' ability to
   *             consume available resources.</p>
   *          <p>The policy is evaluated when a player tries to create a new game session. On receiving
   *             a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by
   *                 <code>CreatorId</code>) has created fewer than game session limit in the specified
   *             time period.</p>
   * @public
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>Name of a metric group that metrics for this fleet are added to. In Amazon CloudWatch,
   *             you can view aggregated metrics for fleets that are in a metric group. A fleet can be
   *             included in only one metric group at a time.  This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  MetricGroups?: string[];

  /**
   * <p>A list of fleet activity that has been suspended using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>.
   *             This includes fleet auto-scaling. This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  StoppedActions?: FleetAction[];

  /**
   * <p>A unique identifier for an IAM role that manages access to your Amazon Web Services services.
   *         With an instance role ARN set, any application that runs on an instance in this fleet can assume the role,
   *         including install scripts, server processes, and daemons (background processes). Create a role or look up a role's
   *         ARN by using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the Amazon Web Services Management Console.
   *         Learn more about using on-box credentials for your game servers at
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Access external resources from a game server</a>.  This attribute is used with
   *             fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * <p>Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet.
   *             All instances in a fleet share the same certificate.</p>
   * @public
   */
  CertificateConfiguration?: CertificateConfiguration;

  /**
   * <p>The type of compute resource used to host your game servers. You can use your own
   *             compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed
   *             Amazon GameLift.</p>
   * @public
   */
  ComputeType?: ComputeType;

  /**
   * <p>Amazon GameLift Anywhere configuration options.</p>
   * @public
   */
  AnywhereConfiguration?: AnywhereConfiguration;

  /**
   * <p>Indicates that fleet instances maintain a shared credentials file for the IAM role
   *                 defined in <code>InstanceRoleArn</code>. Shared credentials allow applications that are
   *                 deployed with the game server executable to communicate with other Amazon Web Services resources. This property is used
   *                 only when the game server is integrated with the
   *                 server SDK version 5.x. For more information about using shared credentials, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Communicate
   *                     with other Amazon Web Services resources from your fleets</a>.
   *                 This attribute is used with
   *                 fleets where <code>ComputeType</code> is "EC2".</p>
   * @public
   */
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}

/**
 * <p>A fleet location and its life-cycle state. A location state object might be used to
 *             describe a fleet's remote location or home Region. Life-cycle state tracks the progress
 *             of launching the first instance in a new location and preparing it for game hosting, and
 *             then removing all instances and deleting the location from the fleet.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>NEW</b> -- A new fleet location has been defined and desired
 *                     instances is set to 1. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> --
 *                     Amazon GameLift is setting up the new fleet location, creating new instances with the game build
 *                     or Realtime script and starting server processes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ACTIVE</b> -- Hosts can now accept game
 *                     sessions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ERROR</b> -- An error occurred when downloading,
 *                     validating, building, or activating the fleet location.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>DELETING</b> -- Hosts are responding to a delete
 *                     fleet location request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>TERMINATED</b> -- The fleet location no longer
 *                     exists.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created.
 *                 </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface LocationState {
  /**
   * <p>The fleet location, expressed as an Amazon Web Services Region code such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

  /**
   * <p>The life-cycle status of a fleet location. </p>
   * @public
   */
  Status?: FleetStatus;
}

/**
 * @public
 */
export interface CreateFleetOutput {
  /**
   * <p>The properties for the new fleet, including the current status. All fleets are placed
   *             in <code>NEW</code> status on creation. </p>
   * @public
   */
  FleetAttributes?: FleetAttributes;

  /**
   * <p>The fleet's locations and life-cycle status of each location. For new fleets, the
   *             status of all locations is set to <code>NEW</code>. During fleet creation, Amazon GameLift
   *             updates each location status as instances are deployed there and prepared for game
   *             hosting. This list includes an entry for the fleet's home Region. For fleets with no
   *             remote locations, only one entry, representing the home Region, is returned.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * <p> The operation failed because Amazon GameLift has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
 * @public
 */
export class NotReadyException extends __BaseException {
  readonly name: "NotReadyException" = "NotReadyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotReadyException, __BaseException>) {
    super({
      name: "NotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateFleetLocationsInput {
  /**
   * <p>A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A list of locations to deploy additional instances to and manage as part of the fleet.
   *             You can add any Amazon GameLift-supported Amazon Web Services Region as a remote location, in the form of an
   *             Amazon Web Services Region code such as <code>us-west-2</code>. </p>
   * @public
   */
  Locations: LocationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetLocationsOutput {
  /**
   * <p>A unique identifier for the fleet that was updated with new locations.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The remote locations that are being added to the fleet, and the life-cycle status of
   *             each location. For new locations, the status is set to <code>NEW</code>. During location
   *             creation, Amazon GameLift updates each location's status as instances are deployed there and
   *             prepared for game hosting. This list does not include the fleet home Region or any
   *             remote locations that were already added to the fleet.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidFleetStatusException extends __BaseException {
  readonly name: "InvalidFleetStatusException" = "InvalidFleetStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFleetStatusException, __BaseException>) {
    super({
      name: "InvalidFleetStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFleetStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Settings for a
 *             target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a
 *             target-based policy that tracks the Amazon GameLift FleetIQ metric
 *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
 *             metric. As player usage changes, the policy triggers to adjust the game server group
 *             capacity so that the metric returns to the target value. </p>
 * @public
 */
export interface TargetTrackingConfiguration {
  /**
   * <p>Desired value to use with a game server group target-based scaling policy. </p>
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Configuration
 *             settings for intelligent automatic scaling that uses target tracking. These settings are
 *             used to add an Auto Scaling policy when creating the corresponding Auto Scaling group.
 *             After the Auto Scaling group is created, all updates to Auto Scaling policies, including
 *             changing this policy and adding or removing other policies, is done directly on the Auto
 *             Scaling group. </p>
 * @public
 */
export interface GameServerGroupAutoScalingPolicy {
  /**
   * <p>Length of time, in seconds, it takes for a new instance to start new game server
   *             processes and register with Amazon GameLift FleetIQ. Specifying a warm-up time can be useful, particularly
   *             with game servers that take a long time to start up, because it avoids prematurely
   *             starting new instances. </p>
   * @public
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>Settings for a target-based scaling policy applied to Auto Scaling group. These
   *             settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric
   *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
   *             metric. As player usage changes, the policy triggers to adjust the game server group
   *             capacity so that the metric returns to the target value. </p>
   * @public
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const GameServerProtectionPolicy = {
  FULL_PROTECTION: "FULL_PROTECTION",
  NO_PROTECTION: "NO_PROTECTION",
} as const;

/**
 * @public
 */
export type GameServerProtectionPolicy = (typeof GameServerProtectionPolicy)[keyof typeof GameServerProtectionPolicy];

/**
 * @public
 * @enum
 */
export const GameServerGroupInstanceType = {
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
} as const;

/**
 * @public
 */
export type GameServerGroupInstanceType =
  (typeof GameServerGroupInstanceType)[keyof typeof GameServerGroupInstanceType];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>An allowed instance type for a
 *             game server group. All game server groups must have at least two instance types defined
 *             for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then
 *             updates the Auto Scaling group with the list of viable instance types.</p>
 * @public
 */
export interface InstanceDefinition {
  /**
   * <p>An Amazon EC2 instance type designation.</p>
   * @public
   */
  InstanceType: GameServerGroupInstanceType | undefined;

  /**
   * <p>Instance weighting that indicates how much this instance type contributes to the total
   *             capacity of a game server group. Instance weights are used by Amazon GameLift FleetIQ to calculate the
   *             instance type's cost per unit hour and better identify the most cost-effective options.
   *             For detailed information on weighting instance capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html">Instance
   *                 Weighting</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling User Guide</i>.
   *             Default value is "1".</p>
   * @public
   */
  WeightedCapacity?: string;
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>An Amazon Elastic Compute Cloud launch
 *             template that contains configuration settings and game server code to be deployed to all
 *             instances in a game server group. The launch template is specified when creating a new
 *             game server group. </p>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>A unique identifier for an existing Amazon EC2 launch template.</p>
   * @public
   */
  LaunchTemplateId?: string;

  /**
   * <p>A readable identifier for an existing Amazon EC2 launch template. </p>
   * @public
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the Amazon EC2 launch template to use. If no version is specified, the
   *             default version will be used. With Amazon EC2, you can specify a default version for a launch
   *             template. If none is set, the default is the first version created.</p>
   * @public
   */
  Version?: string;
}

/**
 * @public
 */
export interface CreateGameServerGroupInput {
  /**
   * <p>An identifier for the new game server group. This value is used to generate unique ARN
   *             identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift FleetIQ game server group. The name
   *             must be unique per Region per Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During
   *             automatic scaling events, Amazon GameLift FleetIQ and Amazon EC2 do not scale down the group below this
   *             minimum. In production, this value should be set to at least 1. After the Auto Scaling
   *             group is created, update this value directly in the Auto Scaling group using the Amazon Web Services
   *             console or APIs.</p>
   * @public
   */
  MinSize: number | undefined;

  /**
   * <p>The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During
   *             automatic scaling events, Amazon GameLift FleetIQ and EC2 do not scale up the group above this maximum.
   *             After the Auto Scaling group is created, update this value directly in the Auto Scaling
   *             group using the Amazon Web Services console or APIs.</p>
   * @public
   */
  MaxSize: number | undefined;

  /**
   * <p>The Amazon EC2 launch template that contains configuration settings and game server code to
   *             be deployed to all instances in the game server group. You can specify the template
   *             using either the template name or ID. For help with creating a launch template, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch
   *                 Template for an Auto Scaling Group</a> in the <i>Amazon Elastic Compute Cloud Auto Scaling
   *                 User Guide</i>. After the Auto Scaling group is created, update this value
   *             directly in the Auto Scaling group using the Amazon Web Services console or APIs.</p>
   *          <note>
   *             <p>If you specify network interfaces in your launch template, you must explicitly set
   *                 the property <code>AssociatePublicIpAddress</code> to "true". If no network
   *                 interface is specified in the launch template, Amazon GameLift FleetIQ uses your account's default
   *                 VPC.</p>
   *          </note>
   * @public
   */
  LaunchTemplate: LaunchTemplateSpecification | undefined;

  /**
   * <p>The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             Amazon GameLift FleetIQ. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance Types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>. You can optionally specify capacity
   *             weighting for each instance type. If no weight value is specified for an instance type,
   *             it is set to the default value "1". For more information about capacity weighting, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   * @public
   */
  InstanceDefinitions: InstanceDefinition[] | undefined;

  /**
   * <p>Configuration settings to define a scaling policy for the Auto Scaling group that is
   *             optimized for game hosting. The scaling policy uses the metric
   *                 <code>"PercentUtilizedGameServers"</code> to maintain a buffer of idle game servers
   *             that can immediately accommodate new games and players. After the Auto Scaling group is
   *             created, update this value directly in the Auto Scaling group using the Amazon Web Services console or
   *             APIs.</p>
   * @public
   */
  AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  /**
   * <p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BalancingStrategy?: BalancingStrategy;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;

  /**
   * <p>A list of virtual private cloud (VPC) subnets to use with instances in the game server
   *             group. By default, all Amazon GameLift FleetIQ-supported Availability Zones are used. You can use this
   *             parameter to specify VPCs that you've set up. This property cannot be updated after the
   *             game server group is created, and the corresponding Auto Scaling group will always use
   *             the property value that is set with this request, even if the Auto Scaling group is
   *             updated directly.</p>
   * @public
   */
  VpcSubnets?: string[];

  /**
   * <p>A list of labels to assign to the new game server group resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource
   *             management, access management, and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const GameServerGroupStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_SCHEDULED: "DELETE_SCHEDULED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  NEW: "NEW",
} as const;

/**
 * @public
 */
export type GameServerGroupStatus = (typeof GameServerGroupStatus)[keyof typeof GameServerGroupStatus];

/**
 * @public
 * @enum
 */
export const GameServerGroupAction = {
  REPLACE_INSTANCE_TYPES: "REPLACE_INSTANCE_TYPES",
} as const;

/**
 * @public
 */
export type GameServerGroupAction = (typeof GameServerGroupAction)[keyof typeof GameServerGroupAction];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p>Properties that describe a game
 *             server group resource. A game server group manages certain properties related to a
 *             corresponding Amazon EC2 Auto Scaling group. </p>
 *          <p>A game server group is created by a successful call to
 *                 <code>CreateGameServerGroup</code> and deleted by calling
 *                 <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily
 *             suspended and resumed by calling <code>SuspendGameServerGroup</code> and
 *                 <code>ResumeGameServerGroup</code>, respectively. </p>
 * @public
 */
export interface GameServerGroup {
  /**
   * <p>A developer-defined identifier for the game server group. The name is unique for each
   *             Region in each Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique ID for the game server group.</p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The set of Amazon EC2 instance types that Amazon GameLift FleetIQ can use when balancing and automatically
   *             scaling instances in the corresponding Auto Scaling group. </p>
   * @public
   */
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BalancingStrategy?: BalancingStrategy;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by Amazon Web Services regardless of protection status. </p>
   * @public
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;

  /**
   * <p>A generated unique ID for the Amazon EC2 Auto Scaling group that is associated with this
   *             game server group.</p>
   * @public
   */
  AutoScalingGroupArn?: string;

  /**
   * <p>The current status of the game server group. Possible statuses include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - Amazon GameLift FleetIQ has validated the <code>CreateGameServerGroup()</code>
   *                     request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - Amazon GameLift FleetIQ is setting up a game server group, which
   *                     includes creating an Auto Scaling group in your Amazon Web Services account. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The game server group has been successfully created.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_SCHEDULED</code> - A request to delete the game server group has
   *                     been received. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon GameLift FleetIQ has received a valid
   *                         <code>DeleteGameServerGroup()</code> request and is processing it. Amazon GameLift FleetIQ
   *                     must first complete and release hosts before it deletes the Auto Scaling group
   *                     and the game server group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The game server group has been successfully deleted.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The asynchronous processes of activating or deleting a
   *                     game server group has failed, resulting in an error state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GameServerGroupStatus;

  /**
   * <p>Additional information about the current game server group status. This information
   *             might provide additional insight on groups that are in <code>ERROR</code> status.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>A list of activities that are currently suspended for this game server group. If this
   *             property is empty, all activities are occurring.</p>
   * @public
   */
  SuspendedActions?: GameServerGroupAction[];

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that indicates when this game server group was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface CreateGameServerGroupOutput {
  /**
   * <p>The newly created game server group object, including the new ARN value for the Amazon GameLift FleetIQ
   *             game server group and the object's status. The Amazon EC2 Auto Scaling group ARN is initially
   *             null, since the group has not yet been created. This value is added once the game server
   *             group status reaches <code>ACTIVE</code>. </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * <p>This key-value pair can store custom data about a game session.
 *         For example, you might use a <code>GameProperty</code> to track a game session's map, level of difficulty, or remaining time.
 *         The difficulty level could be specified like this: <code>\{"Key": "difficulty", "Value":"Novice"\}</code>.
 *       </p>
 *          <p>
 *           You can set game properties when creating a game session. You can also modify game properties of an active game session. When searching for game sessions, you can filter on game property keys and values. You can't delete game properties from a game session.
 *       </p>
 *          <p>For examples of working with game properties, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties">Create a game session with properties</a>.
 *       </p>
 * @public
 */
export interface GameProperty {
  /**
   * <p>The game property identifier.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The game property value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGameSessionInput {
  /**
   * <p>A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each
   *             request must reference either a fleet ID or alias ID, but not both.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to create a game session in. You can use either the
   *             alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but
   *             not both.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.
   *           For an example, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#game-properties-create">Create a game session with custom properties</a>.
   *         </p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A unique identifier for a player or entity creating the game session. </p>
   *          <p>If you add a resource creation limit policy to a fleet, the
   *                 <code>CreateGameSession</code> operation requires a <code>CreatorId</code>. Amazon GameLift
   *             limits the number of game session creation requests with the same <code>CreatorId</code>
   *             in a specified time period.</p>
   *          <p>If you your fleet doesn't have a resource creation limit policy and you provide a
   *                 <code>CreatorId</code> in your <code>CreateGameSession</code> requests, Amazon GameLift
   *             limits requests to one request per <code>CreatorId</code> per second.</p>
   *          <p>To not limit <code>CreateGameSession</code> requests with the same
   *                 <code>CreatorId</code>, don't provide a <code>CreatorId</code> in your
   *                 <code>CreateGameSession</code> request.</p>
   * @public
   */
  CreatorId?: string;

  /**
   * <p>
   *             <i>This parameter is deprecated. Use <code>IdempotencyToken</code>
   *                 instead.</i>
   *          </p>
   *          <p>Custom string that uniquely identifies a request for a new game session. Maximum token
   *             length is 48 characters. If provided, this string is included in the new game session's
   *             ID.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>Custom string that uniquely identifies the new game session request. This is useful
   *             for ensuring that game session requests with the same idempotency token are processed
   *             only once. Subsequent requests with the same string return the original
   *                 <code>GameSession</code> object, with an updated status. Maximum token length is 48
   *             characters. If provided, this string is included in the new game session's ID.
   *             A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>. Idempotency tokens remain in use for 30 days after a game session has ended;
   *             game session objects are retained for this time period and then deleted.</p>
   * @public
   */
  IdempotencyToken?: string;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>A fleet's remote location to place the new game session in. If this parameter is not
   *             set, the new game session is placed in the fleet's home Region. Specify a remote
   *             location with an Amazon Web Services Region code such as <code>us-west-2</code>. When using an
   *             Anywhere fleet, this parameter is required and must be set to the Anywhere fleet's
   *             custom location.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const PlayerSessionCreationPolicy = {
  ACCEPT_ALL: "ACCEPT_ALL",
  DENY_ALL: "DENY_ALL",
} as const;

/**
 * @public
 */
export type PlayerSessionCreationPolicy =
  (typeof PlayerSessionCreationPolicy)[keyof typeof PlayerSessionCreationPolicy];

/**
 * @public
 * @enum
 */
export const GameSessionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type GameSessionStatus = (typeof GameSessionStatus)[keyof typeof GameSessionStatus];

/**
 * @public
 * @enum
 */
export const GameSessionStatusReason = {
  INTERRUPTED: "INTERRUPTED",
} as const;

/**
 * @public
 */
export type GameSessionStatusReason = (typeof GameSessionStatusReason)[keyof typeof GameSessionStatusReason];

/**
 * <p>Properties describing a game session.</p>
 *          <p>A game session in ACTIVE status can host players. When a game session ends, its status
 *             is set to <code>TERMINATED</code>. </p>
 *          <p>Amazon GameLift retains a game session resource for 30 days after the game session ends. You
 *             can reuse idempotency token values after this time. Game session logs are retained for
 *             14 days.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface GameSession {
  /**
   * <p>A unique identifier for the game session. A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A unique identifier for the fleet that the game session is running on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that this game session is running on. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Number of players currently in the game session.</p>
   * @public
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Current status of the game session. A game session must have an <code>ACTIVE</code>
   *             status to have player sessions.</p>
   * @public
   */
  Status?: GameSessionStatus;

  /**
   * <p>Provides additional information about game session status. <code>INTERRUPTED</code>
   *             indicates that the game session was hosted on a spot instance that was reclaimed,
   *             causing the active game session to be terminated.</p>
   * @public
   */
  StatusReason?: GameSessionStatusReason;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
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
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>Indicates whether or not the game session is accepting new players.</p>
   * @public
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;

  /**
   * <p>A unique identifier for a player. This ID is used to enforce a resource protection policy (if one exists),
   *             that limits the number of game sessions a player can create.</p>
   * @public
   */
  CreatorId?: string;

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>Information about the matchmaking process that resulted in the game session, if
   *             matchmaking was used. Data is in JSON syntax, formatted as a string. Information
   *             includes the matchmaker ID as well as player attributes and team assignments. For more
   *             details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *                 Data</a>. Matchmaker data is updated whenever new players are added during a
   *             successful backfill (see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html">StartMatchBackfill</a>).  </p>
   * @public
   */
  MatchmakerData?: string;

  /**
   * <p>The fleet location where the game session is running. This value might specify the
   *             fleet's home Region or a remote location. Location is expressed as an Amazon Web Services Region code
   *             such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface CreateGameSessionOutput {
  /**
   * <p>Object that describes the newly created game session record.</p>
   * @public
   */
  GameSession?: GameSession;
}

/**
 * <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 * @public
 */
export class FleetCapacityExceededException extends __BaseException {
  readonly name: "FleetCapacityExceededException" = "FleetCapacityExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FleetCapacityExceededException, __BaseException>) {
    super({
      name: "FleetCapacityExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FleetCapacityExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A game session with this custom ID string already exists in this fleet. Resolve this
 *             conflict before retrying this request.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
 * @public
 */
export class TerminalRoutingStrategyException extends __BaseException {
  readonly name: "TerminalRoutingStrategyException" = "TerminalRoutingStrategyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TerminalRoutingStrategyException, __BaseException>) {
    super({
      name: "TerminalRoutingStrategyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TerminalRoutingStrategyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A fleet or alias designated in a game session queue. Queues fulfill requests for new
 *             game sessions by placing a new game session on any of the queue's destinations. </p>
 * @public
 */
export interface GameSessionQueueDestination {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which
   *             include a fleet ID or alias ID and a Region name, provide a unique identifier across all
   *             Regions.</p>
   * @public
   */
  DestinationArn?: string;
}

/**
 * <p>A list of fleet locations where a game session queue can place new game sessions. You
 *             can use a filter to temporarily turn off placements for specific locations. For queues
 *             that have multi-location fleets, you can use a filter configuration allow placement with
 *             some, but not all of these locations.</p>
 * @public
 */
export interface FilterConfiguration {
  /**
   * <p> A list of locations to allow game session placement in, in the form of Amazon Web Services Region
   *             codes such as <code>us-west-2</code>. </p>
   * @public
   */
  AllowedLocations?: string[];
}

/**
 * <p>Sets a latency cap for individual players when placing a game session. With a latency
 *             policy in force, a game session cannot be placed in a fleet location where a player
 *             reports latency higher than the cap. Latency policies are used only with placement
 *             request that provide player latency information. Player latency policies can be stacked
 *             to gradually relax latency requirements over time. </p>
 * @public
 */
export interface PlayerLatencyPolicy {
  /**
   * <p>The maximum latency value that is allowed for any player, in milliseconds. All
   *             policies must have a value set for this property.</p>
   * @public
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   * <p>The length of time, in seconds, that the policy is enforced while placing a new game
   *             session. A null value for this property means that the policy is enforced until the
   *             queue times out.</p>
   * @public
   */
  PolicyDurationSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const PriorityType = {
  COST: "COST",
  DESTINATION: "DESTINATION",
  LATENCY: "LATENCY",
  LOCATION: "LOCATION",
} as const;

/**
 * @public
 */
export type PriorityType = (typeof PriorityType)[keyof typeof PriorityType];

/**
 * <p>Custom prioritization settings for use by a game session queue when placing new game
 *             sessions with available game servers. When defined, this configuration replaces the
 *             default FleetIQ prioritization process, which is as follows:</p>
 *          <ul>
 *             <li>
 *                <p>If player latency data is included in a game session request, destinations and
 *                     locations are prioritized first based on lowest average latency (1), then on
 *                     lowest hosting cost (2), then on destination list order (3), and finally on
 *                     location (alphabetical) (4). This approach ensures that the queue's top priority
 *                     is to place game sessions where average player latency is lowest, and--if
 *                     latency is the same--where the hosting cost is less, etc.</p>
 *             </li>
 *             <li>
 *                <p>If player latency data is not included, destinations and locations are
 *                     prioritized first on destination list order (1), and then on location
 *                     (alphabetical) (2). This approach ensures that the queue's top priority is to
 *                     place game sessions on the first destination fleet listed. If that fleet has
 *                     multiple locations, the game session is placed on the first location (when
 *                     listed alphabetically).</p>
 *             </li>
 *          </ul>
 *          <p>Changing the priority order will affect how game sessions are placed.</p>
 * @public
 */
export interface PriorityConfiguration {
  /**
   * <p>The recommended sequence to use when prioritizing where to place new game sessions.
   *             Each type can only be listed once.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LATENCY</code> -- FleetIQ prioritizes locations where the average player
   *                     latency (provided in each game session request) is lowest. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COST</code> -- FleetIQ prioritizes destinations with the lowest current
   *                     hosting costs. Cost is evaluated based on the location, instance type, and fleet
   *                     type (Spot or On-Demand) for each destination in the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESTINATION</code> -- FleetIQ prioritizes based on the order that
   *                     destinations are listed in the queue configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCATION</code> -- FleetIQ prioritizes based on the provided order of
   *                     locations, as defined in <code>LocationOrder</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  PriorityOrder?: PriorityType[];

  /**
   * <p>The prioritization order to use for fleet locations, when the
   *                 <code>PriorityOrder</code> property includes <code>LOCATION</code>. Locations are
   *             identified by Amazon Web Services Region codes such as <code>us-west-2</code>. Each location can only
   *             be listed once. </p>
   * @public
   */
  LocationOrder?: string[];
}

/**
 * @public
 */
export interface CreateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   * @public
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests.
   * 	Use multiple policies to gradually relax the cap over time if Amazon GameLift can't make a placement.
   * 	    Policies are evaluated in order starting with the lowest maximum latency value.</p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. </p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p>Information to be added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>A list of labels to assign to the new game session queue resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Configuration for a game session placement mechanism that processes requests for new
 *             game sessions. A queue can be used on its own or as part of a matchmaking
 *             solution.</p>
 * @public
 */
export interface GameSessionQueue {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. In a Amazon GameLift game session queue ARN, the resource ID matches the
   *                 <i>Name</i> value.</p>
   * @public
   */
  GameSessionQueueArn?: string;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   * @public
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests.
   * 	Use multiple policies to gradually relax the cap over time if Amazon GameLift can't make a placement.
   * 	    Policies are evaluated in order starting with the lowest maximum latency value. </p>
   * @public
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   *     Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.</p>
   * @public
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of locations where a queue is allowed to place new game sessions. Locations
   *             are specified in the form of Amazon Web Services Region codes, such as <code>us-west-2</code>. If this parameter is
   *             not set, game sessions can be placed in any queue location. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration;

  /**
   * <p>Custom settings to use when prioritizing destinations and locations for game session placements. This
   *             configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly
   *             named will be automatically applied at the end of the prioritization process. </p>
   * @public
   */
  PriorityConfiguration?: PriorityConfiguration;

  /**
   * <p> Information that is added to all events that are related to this game session
   *             queue.</p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive game session placement notifications. See
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html"> Setting up
   *                 notifications for game session placement</a>.</p>
   * @public
   */
  NotificationTarget?: string;
}

/**
 * @public
 */
export interface CreateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly created game session queue.</p>
   * @public
   */
  GameSessionQueue?: GameSessionQueue;
}

/**
 * @public
 */
export interface CreateLocationInput {
  /**
   * <p>A descriptive name for the custom location.</p>
   * @public
   */
  LocationName: string | undefined;

  /**
   * <p>A list of labels to assign to the new resource. Tags are developer-defined key-value
   *             pairs. Tagging Amazon Web Services resources are useful for resource management, access management,
   *             and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Rareference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Properties of a custom location for use in an Amazon GameLift Anywhere fleet. This data type is returned in response to a call to <a>CreateLocation</a>.</p>
 * @public
 */
export interface LocationModel {
  /**
   * <p>The location's name.</p>
   * @public
   */
  LocationName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift location resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  LocationArn?: string;
}

/**
 * @public
 */
export interface CreateLocationOutput {
  /**
   * <p>The details of the custom location you created.</p>
   * @public
   */
  Location?: LocationModel;
}

/**
 * @public
 * @enum
 */
export const FlexMatchMode = {
  STANDALONE: "STANDALONE",
  WITH_QUEUE: "WITH_QUEUE",
} as const;

/**
 * @public
 */
export type FlexMatchMode = (typeof FlexMatchMode)[keyof typeof FlexMatchMode];

/**
 * @public
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking
   *             request or ticket.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the matchmaking configuration. </p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter. </p>
   * @public
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds: number | undefined;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. </p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that determines whether a match that was created with this configuration must
   *             be accepted by the matched players. To require acceptance, set to <code>TRUE</code>.
   *             With this option enabled, matchmaking tickets use the status
   *                 <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is
   *             waiting for player acceptance. </p>
   * @public
   */
  AcceptanceRequired: boolean | undefined;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up notifications for matchmaking</a> for more information.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to be added to all events related to this matchmaking configuration.
   *         </p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used if <code>FlexMatchMode</code>
   *             is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions that are created with this matchmaking
   *             configuration. Specify <code>MANUAL</code> when your game manages backfill requests
   *             manually or does not use the match backfill feature. Specify <code>AUTOMATIC</code> to
   *             have Amazon GameLift create a backfill request whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill Existing Games
   *                 with FlexMatch</a>. Automatic backfill is not available when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  BackfillMode?: BackfillMode;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified Amazon GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FlexMatchMode?: FlexMatchMode;

  /**
   * <p>A list of labels to assign to the new matchmaking configuration resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Guidelines for use with FlexMatch to match players into games. All matchmaking requests
 *             must specify a matchmaking configuration.</p>
 * @public
 */
export interface MatchmakingConfiguration {
  /**
   * <p>A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking
   *             request or ticket.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::matchmakingconfiguration/<matchmaking configuration name></code>. In a Amazon GameLift configuration ARN, the resource ID matches the
   *                 <i>Name</i> value.</p>
   * @public
   */
  ConfigurationArn?: string;

  /**
   * <p>A descriptive label that is associated with matchmaking configuration.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::gamesessionqueue/<queue name></code>. Queues can be located in any Region. Queues are used to start new
   *             Amazon GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. This property is not set when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   * @public
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. If any player rejects the match or fails to accept before the
   *             timeout, the ticket continues to look for an acceptable match.</p>
   * @public
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. When this option is
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance.</p>
   * @public
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for the matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule
   *             sets that are defined in the same Region.</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking rule set resource that this
   *             configuration uses.</p>
   * @public
   */
  RuleSetArn?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications.</p>
   * @public
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   * @public
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to attach to all events related to the matchmaking configuration. </p>
   * @public
   */
  CustomEventData?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>. This information is added to the new <code>GameSession</code> object that is
   *             created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions created with this matchmaking configuration.
   *             MANUAL indicates that the game makes backfill requests or does not use the match
   *             backfill feature. AUTOMATIC indicates that GameLift creates backfill requests whenever a
   *             game session has one or more open slots. Learn more about manual and automatic backfill
   *             in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill existing games with FlexMatch</a>. Automatic backfill is not available
   *             when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   * @public
   */
  BackfillMode?: BackfillMode;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and
   *                     returns match information, including players and team assignments, in a <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded"> MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses
   *                     the specified Amazon GameLift queue to start a game session for the match. </p>
   *             </li>
   *          </ul>
   * @public
   */
  FlexMatchMode?: FlexMatchMode;
}

/**
 * @public
 */
export interface CreateMatchmakingConfigurationOutput {
  /**
   * <p>Object that describes the newly created matchmaking configuration.</p>
   * @public
   */
  Configuration?: MatchmakingConfiguration;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name
   *             value. Note that the rule set name is different from the optional <code>name</code>
   *             field in the rule set body.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * <p>A list of labels to assign to the new matchmaking rule set resource. Tags are
   *             developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource
   *             management, access management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services
   *                 Resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Set of rule statements, used with FlexMatch, that determine how to build your player
 *             matches. Each rule set describes a type of group to be created and defines the
 *             parameters for acceptable player matches.</p>
 *          <p>A rule set may define the following elements for a match. For detailed information and
 *             examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule
 *                 set</a>. </p>
 *          <ul>
 *             <li>
 *                <p>Teams -- Required. A rule set must define one or multiple teams for the match
 *                     and set minimum and maximum team sizes. For example, a rule set might describe a
 *                     4x4 match that requires all eight slots to be filled. </p>
 *             </li>
 *             <li>
 *                <p>Player attributes -- Optional. These attributes specify a set of player
 *                     characteristics to evaluate when looking for a match. Matchmaking requests that
 *                     use a rule set with player attributes must provide the corresponding attribute
 *                     values. For example, an attribute might specify a player's skill or
 *                     level.</p>
 *             </li>
 *             <li>
 *                <p>Rules -- Optional. Rules define how to evaluate potential players for a match
 *                     based on player attributes. A rule might specify minimum requirements for
 *                     individual players, teams, or entire matches. For example, a rule might require
 *                     each player to meet a certain skill level, each team to have at least one player
 *                     in a certain role, or the match to have a minimum average skill level. or may
 *                     describe an entire group--such as all teams must be evenly matched or have at
 *                     least one player in a certain role. </p>
 *             </li>
 *             <li>
 *                <p>Expansions -- Optional. Expansions allow you to relax the rules after a period
 *                     of time when no acceptable matches are found. This feature lets you balance
 *                     getting players into games in a reasonable amount of time instead of making them
 *                     wait indefinitely for the best possible match. For example, you might use an
 *                     expansion to increase the maximum skill variance between players after 30
 *                     seconds.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface MatchmakingRuleSet {
  /**
   * <p>A unique identifier for the matchmaking rule set</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::matchmakingruleset/<ruleset name></code>. In a GameLift rule set ARN, the resource ID matches the
   *                 <i>RuleSetName</i> value.</p>
   * @public
   */
  RuleSetArn?: string;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   * @public
   */
  RuleSetBody: string | undefined;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface CreateMatchmakingRuleSetOutput {
  /**
   * <p>The newly created matchmaking rule set.</p>
   * @public
   */
  RuleSet: MatchmakingRuleSet | undefined;
}

/**
 * @public
 */
export interface CreatePlayerSessionInput {
  /**
   * <p>A unique identifier for the game session to add a player to.</p>
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * <p>A unique identifier for a player. Player IDs are developer-defined.</p>
   * @public
   */
  PlayerId: string | undefined;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 * @enum
 */
export const PlayerSessionStatus = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  RESERVED: "RESERVED",
  TIMEDOUT: "TIMEDOUT",
} as const;

/**
 * @public
 */
export type PlayerSessionStatus = (typeof PlayerSessionStatus)[keyof typeof PlayerSessionStatus];

/**
 * <p>Represents a player session. Player sessions are created either for a specific game
 *             session, or as part of a game session placement or matchmaking request. A player session
 *             can represents a reserved player slot in a game session (when status is
 *                 <code>RESERVED</code>) or actual player activity in a game session (when status is
 *                 <code>ACTIVE</code>). A player session object, including player data, is
 *             automatically passed to a game session when the player connects to the game session and
 *             is validated. After the game session ends, player sessions information is retained for
 *             30 days and then removed.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface PlayerSession {
  /**
   * <p>A unique identifier for a player session.</p>
   * @public
   */
  PlayerSessionId?: string;

  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for the game session that the player session is connected to.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the fleet that the player's game session is running on.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet that the player's game session is
   *             running on. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the player session.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                     received, but the player has not yet connected to the server process and/or been
   *                     validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                     server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                     dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                     received, but the player did not connect and/or was not validated within the
   *                     timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: PlayerSessionStatus;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
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
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift server process, an app needs
   *             both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 */
export interface CreatePlayerSessionOutput {
  /**
   * <p>Object that describes the newly created player session record.</p>
   * @public
   */
  PlayerSession?: PlayerSession;
}

/**
 * <p>The game instance is currently full and cannot allow the requested player(s) to join.
 *             Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class GameSessionFullException extends __BaseException {
  readonly name: "GameSessionFullException" = "GameSessionFullException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GameSessionFullException, __BaseException>) {
    super({
      name: "GameSessionFullException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GameSessionFullException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidGameSessionStatusException extends __BaseException {
  readonly name: "InvalidGameSessionStatusException" = "InvalidGameSessionStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGameSessionStatusException, __BaseException>) {
    super({
      name: "InvalidGameSessionStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGameSessionStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreatePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to add players to.</p>
   * @public
   */
  GameSessionId: string | undefined;

  /**
   * <p>List of unique identifiers for the players to be added.</p>
   * @public
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Map of string pairs, each specifying a player ID and a set of developer-defined
   *             information related to the player. Amazon GameLift does not use this data, so it can be formatted
   *             as needed for use in the game. Any player data strings for player IDs that are not
   *             included in the <code>PlayerIds</code> parameter are ignored. </p>
   * @public
   */
  PlayerDataMap?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePlayerSessionsOutput {
  /**
   * <p>A collection of player session objects created for the added players.</p>
   * @public
   */
  PlayerSessions?: PlayerSession[];
}

/**
 * @public
 */
export interface CreateScriptInput {
  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to
   *             change this value later. </p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique. You can use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html">UpdateScript</a> to
   *             change this value later. </p>
   * @public
   */
  Version?: string;

  /**
   * <p>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3
   *             bucket must be in the same Region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version. </p>
   * @public
   */
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *          <p>When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip
   *             file name. It must be prepended with the string "fileb://" to indicate that the file
   *             data is a binary object. For example: <code>--zip-file
   *                 fileb://myRealtimeScript.zip</code>.</p>
   * @public
   */
  ZipFile?: Uint8Array;

  /**
   * <p>A list of labels to assign to the new script resource. Tags are developer-defined
   *             key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access
   *             management and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging Amazon Web Services Resources</a> in the
   *                 <i>Amazon Web Services General Reference</i>. Once the resource is created, you can
   *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html">UntagResource</a>, and
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html">ListTagsForResource</a> to add, remove, and view tags. The maximum tag limit
   *             may be lower than stated. See the Amazon Web Services General Reference for actual tagging
   *             limits.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Properties describing a Realtime script.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface Script {
  /**
   * <p>A unique identifier for the Realtime script</p>
   * @public
   */
  ScriptId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the
   *                 <i>ScriptId</i> value.</p>
   * @public
   */
  ScriptArn?: string;

  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique.</p>
   * @public
   */
  Version?: string;

  /**
   * <p>The file size of the uploaded Realtime script, expressed in bytes. When files are
   *             uploaded from an S3 location, this value remains at "0".</p>
   * @public
   */
  SizeOnDisk?: number;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3
   *             bucket must be in the same Region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version. </p>
   * @public
   */
  StorageLocation?: S3Location;
}

/**
 * @public
 */
export interface CreateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID and ARN. The new script's
   *             storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3
   *             bucket under your account, the storage location reflects the information that was
   *             provided in the <i>CreateScript</i> request; (2) If the script file was
   *             uploaded from a local zip file, the storage location reflects an S3 location controls by
   *             the Amazon GameLift service.</p>
   * @public
   */
  Script?: Script;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * <p>Represents an authorization for a VPC peering connection between the VPC for an
 *             Amazon GameLift fleet and another VPC on an account you have access to. This authorization
 *             must exist and be valid for the peering connection to be established. Authorizations are
 *             valid for 24 hours after they are issued.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface VpcPeeringAuthorization {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId?: string;

  /**
   * <p>The authorization's peer VPC Amazon Web Services account ID.</p>
   * @public
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this authorization expires (24 hours after issuance).
   *             Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  ExpirationTime?: Date;
}

/**
 * @public
 */
export interface CreateVpcPeeringAuthorizationOutput {
  /**
   * <p>Details on the requested VPC peering authorization, including expiration.</p>
   * @public
   */
  VpcPeeringAuthorization?: VpcPeeringAuthorization;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift
   *             VPC to peer with. </p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the Amazon Web Services account with the VPC that you want to peer your
   *             Amazon GameLift fleet with. You can find your Account ID in the Amazon Web Services Management Console under account
   *             settings.</p>
   * @public
   */
  PeerVpcAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcPeeringConnectionOutput {}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * <p>A unique identifier of the alias that you want to delete. You can use either the alias
   *             ID or ARN value.</p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildInput {
  /**
   * <p>A unique identifier for the build to delete. You can use either the build ID or ARN value. </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerFleetInput {
  /**
   * <p>A unique identifier for the container fleet to delete. You can use either the fleet ID
   *             or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerFleetOutput {}

/**
 * @public
 */
export interface DeleteContainerGroupDefinitionInput {
  /**
   * <p>The unique identifier for the container group definition to delete. You can use either the <code>Name</code> or <code>ARN</code>
   *       value.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific version to delete.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The number of most recent versions to keep while deleting all older versions.</p>
   * @public
   */
  VersionCountToRetain?: number;
}

/**
 * @public
 */
export interface DeleteContainerGroupDefinitionOutput {}

/**
 * @public
 */
export interface DeleteFleetInput {
  /**
   * <p>A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsInput {
  /**
   * <p>A unique identifier for the fleet to delete locations for. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The list of fleet locations to delete. Specify locations in the form of an Amazon Web Services
   *             Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Locations: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetLocationsOutput {
  /**
   * <p>A unique identifier for the fleet that location attributes are being deleted for.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The remote locations that are being deleted, with each location status set to
   *                 <code>DELETING</code>.</p>
   * @public
   */
  LocationStates?: LocationState[];
}

/**
 * @public
 * @enum
 */
export const GameServerGroupDeleteOption = {
  FORCE_DELETE: "FORCE_DELETE",
  RETAIN: "RETAIN",
  SAFE_DELETE: "SAFE_DELETE",
} as const;

/**
 * @public
 */
export type GameServerGroupDeleteOption =
  (typeof GameServerGroupDeleteOption)[keyof typeof GameServerGroupDeleteOption];

/**
 * @public
 */
export interface DeleteGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The type of delete to perform. Options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAFE_DELETE</code> – (default) Terminates the game server group and
   *                     Amazon EC2 Auto Scaling group only when it has no game servers that are in
   *                         <code>UTILIZED</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DELETE</code> – Terminates the game server group, including all
   *                     active game servers regardless of their utilization status, and the Amazon EC2 Auto
   *                     Scaling group. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETAIN</code> – Does a safe delete of the game server group but retains
   *                     the Amazon EC2 Auto Scaling group as is.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeleteOption?: GameServerGroupDeleteOption;
}

/**
 * @public
 */
export interface DeleteGameServerGroupOutput {
  /**
   * <p>An object that describes the deleted game server group resource, with status updated
   *             to <code>DELETE_SCHEDULED</code>. </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteGameSessionQueueOutput {}

/**
 * @public
 */
export interface DeleteLocationInput {
  /**
   * <p>The location name of the custom location to be deleted.</p>
   * @public
   */
  LocationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLocationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for the matchmaking configuration. You can use either the configuration name or ARN value.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingConfigurationOutput {}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for the matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name"
   *             field in the rule set body.) You can use either the rule set name or ARN value.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchmakingRuleSetOutput {}

/**
 * @public
 */
export interface DeleteScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to delete. You can use either the script ID or ARN value.</p>
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the Amazon Web Services Management Console under account settings.</p>
   * @public
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringAuthorizationOutput {}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for the fleet. This fleet specified must match the fleet referenced in the VPC peering
   *             connection record. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for a VPC peering connection.</p>
   * @public
   */
  VpcPeeringConnectionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcPeeringConnectionOutput {}

/**
 * @public
 * @enum
 */
export const DeploymentImpairmentStrategy = {
  MAINTAIN: "MAINTAIN",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type DeploymentImpairmentStrategy =
  (typeof DeploymentImpairmentStrategy)[keyof typeof DeploymentImpairmentStrategy];

/**
 * @public
 * @enum
 */
export const DeploymentProtectionStrategy = {
  IGNORE_PROTECTION: "IGNORE_PROTECTION",
  WITH_PROTECTION: "WITH_PROTECTION",
} as const;

/**
 * @public
 */
export type DeploymentProtectionStrategy =
  (typeof DeploymentProtectionStrategy)[keyof typeof DeploymentProtectionStrategy];

/**
 * <p>Set of rules for processing a deployment for a container fleet update.</p>
 * @public
 */
export interface DeploymentConfiguration {
  /**
   * <p>Determines how fleet deployment activity affects active game sessions on the fleet.
   *             With protection, a deployment honors game session protection, and delays actions that
   *             would interrupt a protected active game session until the game session ends. Without
   *             protection, deployment activity can shut down all running tasks, including active game
   *             sessions, regardless of game session protection. </p>
   * @public
   */
  ProtectionStrategy?: DeploymentProtectionStrategy;

  /**
   * <p>Sets a minimum level of healthy tasks to maintain during deployment activity. </p>
   * @public
   */
  MinimumHealthyPercentage?: number;

  /**
   * <p>Determines what actions to take if a deployment fails. If the fleet is multi-location,
   *             this strategy applies across all fleet locations. With a rollback strategy, updated
   *             fleet instances are rolled back to the last successful deployment. Alternatively, you
   *             can maintain a few impaired containers for the purpose of debugging, while all other
   *             tasks return to the last successful deployment.</p>
   * @public
   */
  ImpairmentStrategy?: DeploymentImpairmentStrategy;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  IMPAIRED: "IMPAIRED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 */
export interface DeregisterComputeInput {
  /**
   * <p>A unique identifier for the fleet the compute resource is currently registered to.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The unique identifier of the compute resource to deregister. For an Anywhere fleet
   *             compute, use the registered compute name.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DeregisterComputeOutput {}

/**
 * @public
 */
export interface DeregisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to deregister.</p>
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasInput {
  /**
   * <p>The unique identifier for the fleet alias that you want to retrieve. You can use
   *             either the alias ID or ARN value. </p>
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAliasOutput {
  /**
   * <p>The requested alias resource.</p>
   * @public
   */
  Alias?: Alias;
}

/**
 * @public
 */
export interface DescribeBuildInput {
  /**
   * <p>A unique identifier for the build to retrieve properties for. You can use either the build ID or ARN value.
   *         </p>
   * @public
   */
  BuildId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBuildOutput {
  /**
   * <p>Set of properties describing the requested build.</p>
   * @public
   */
  Build?: Build;
}

/**
 * @public
 */
export interface DescribeComputeInput {
  /**
   * <p>A unique identifier for the fleet that the compute belongs to. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The unique identifier of the compute resource to retrieve properties for. For an
   *             Anywhere fleet compute, use the registered compute name. For an EC2 fleet instance, use
   *             the instance ID. </p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputeOutput {
  /**
   * <p>The set of properties for the requested compute resource.</p>
   * @public
   */
  Compute?: Compute;
}

/**
 * @public
 */
export interface DescribeContainerFleetInput {
  /**
   * <p>A unique identifier for the container fleet to retrieve. You can use either the fleet
   *             ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerFleetOutput {
  /**
   * <p>The properties for the requested container fleet, including current status.</p>
   * @public
   */
  ContainerFleet?: ContainerFleet;
}

/**
 * @public
 */
export interface DescribeContainerGroupDefinitionInput {
  /**
   * <p>The unique identifier for the container group definition to retrieve properties for. You can use either the <code>Name</code> or
   *         <code>ARN</code> value.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific version to retrieve.</p>
   * @public
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface DescribeContainerGroupDefinitionOutput {
  /**
   * <p>The properties of the requested container group definition resource.</p>
   * @public
   */
  ContainerGroupDefinition?: ContainerGroupDefinition;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsInput {
  /**
   * <p>Name of an Amazon EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Do not specify a value for this parameter to retrieve
   *             limits for all instance types.</p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The name of a remote location to request instance limits for, in the form of an Amazon Web Services
   *             Region code such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * <p>The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift
 *             allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region
 *             or location, for use with Amazon GameLift. You can request an limit increase for your account by
 *             using the <b>Service limits</b> page in the Amazon GameLift
 *             console.</p>
 * @public
 */
export interface EC2InstanceLimit {
  /**
   * <p>The name of an Amazon EC2 instance type. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud Instance Types</a> for detailed
   *             descriptions. </p>
   * @public
   */
  EC2InstanceType?: EC2InstanceType;

  /**
   * <p>The number of instances for the specified type and location that are currently being
   *             used by the Amazon Web Services account. </p>
   * @public
   */
  CurrentInstances?: number;

  /**
   * <p>The number of instances that is allowed for the specified instance type and
   *             location.</p>
   * @public
   */
  InstanceLimit?: number;

  /**
   * <p>An Amazon Web Services Region code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeEC2InstanceLimitsOutput {
  /**
   * <p>The maximum number of instances for the specified instance type.</p>
   * @public
   */
  EC2InstanceLimits?: EC2InstanceLimit[];
}

/**
 * @public
 */
export interface DescribeFleetAttributesInput {
  /**
   * <p>A list of unique fleet identifiers to retrieve attributes for. You can use either the
   *             fleet ID or ARN value. To retrieve attributes for all current fleets, do not include
   *             this parameter. </p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAttributesOutput {
  /**
   * <p>A collection of objects containing attribute metadata for each requested fleet ID.
   *             Attribute objects are returned only for fleets that currently exist.</p>
   * @public
   */
  FleetAttributes?: FleetAttributes[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetCapacityInput {
  /**
   * <p>A unique identifier for the fleet to retrieve capacity information for. You can use either the fleet ID or ARN
   *             value. Leave this parameter empty to retrieve capacity information for all
   *             fleets.</p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The number and status of game server container groups that are deployed across a container fleet.
 *             Combine this count with the number of server processes that each game server container group runs
 *             to learn how many game sessions the fleet is capable of hosting concurrently. For example, if a
 *         fleet has 50 game server container groups, and the game server container in each group runs 1 game server
 *         process, then the fleet has the capacity to run host 50 game sessions at a time. </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a>DescribeFleetCapacity</a>, <a>DescribeFleetLocationCapacity</a>
 *          </p>
 * @public
 */
export interface GameServerContainerGroupCounts {
  /**
   * <p> The number of container groups that are starting up but haven't yet registered. </p>
   * @public
   */
  PENDING?: number;

  /**
   * <p>
   *             The number of container groups that have active game sessions.
   *         </p>
   * @public
   */
  ACTIVE?: number;

  /**
   * <p>
   *             The number of container groups that have no active game sessions.
   *         </p>
   * @public
   */
  IDLE?: number;

  /**
   * <p> The number of container groups that are in the process of shutting down. </p>
   * @public
   */
  TERMINATING?: number;
}

/**
 * <p>Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and
 *             terminating counts are non-zero when the fleet capacity is adjusting to a scaling event
 *             or if access to resources is temporarily affected.</p>
 * @public
 */
export interface EC2InstanceCounts {
  /**
   * <p>Requested number of active instances. Amazon GameLift takes action as needed to maintain the
   *             desired number of instances. Capacity is scaled up or down by changing the desired
   *             instances. A change in the desired instances value can take up to 1 minute to be
   *             reflected when viewing a fleet's capacity settings. </p>
   * @public
   */
  DESIRED?: number;

  /**
   * <p>The minimum instance count value allowed.</p>
   * @public
   */
  MINIMUM?: number;

  /**
   * <p>The maximum instance count value allowed.</p>
   * @public
   */
  MAXIMUM?: number;

  /**
   * <p>Number of instances that are starting but not yet active.</p>
   * @public
   */
  PENDING?: number;

  /**
   * <p>Actual number of instances that are ready to host game sessions.</p>
   * @public
   */
  ACTIVE?: number;

  /**
   * <p>Number of active instances that are not currently hosting a game session.</p>
   * @public
   */
  IDLE?: number;

  /**
   * <p>Number of instances that are no longer active but haven't yet been terminated.</p>
   * @public
   */
  TERMINATING?: number;
}

/**
 * <p>Current resource capacity settings for managed EC2 fleets and managed container fleets. For
 *             multi-location fleets, location values might refer to a fleet's remote location or its
 *             home Region. </p>
 *          <p>
 *             <b>Returned by:</b>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>
 *          </p>
 * @public
 */
export interface FleetCapacity {
  /**
   * <p>A unique identifier for the fleet associated with the location.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The Amazon EC2 instance type that is used for instances in a fleet. Instance type
   *             determines the computing resources in use, including CPU, memory, storage, and
   *             networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon Elastic Compute Cloud
   *                 Instance Types</a> for detailed descriptions.</p>
   * @public
   */
  InstanceType?: EC2InstanceType;

  /**
   * <p>The current number of instances in the fleet, listed by instance status. Counts for pending and
   *             terminating instances might be non-zero if the fleet is adjusting to a scaling event
   *             or if access to resources is temporarily affected.</p>
   * @public
   */
  InstanceCounts?: EC2InstanceCounts;

  /**
   * <p>The fleet location for the instance count information, expressed as an Amazon Web Services Region
   *             code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;

  /**
   * <p>The number and status of game server container groups deployed in a container fleet. </p>
   * @public
   */
  GameServerContainerGroupCounts?: GameServerContainerGroupCounts;
}

/**
 * @public
 */
export interface DescribeFleetCapacityOutput {
  /**
   * <p>A collection of objects that contains capacity information for each requested fleet
   *             ID. Capacity objects are returned only for fleets that currently exist. Changes in
   *             desired instance value can take up to 1 minute to be reflected.</p>
   * @public
   */
  FleetCapacity?: FleetCapacity[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetDeploymentInput {
  /**
   * <p>A unique identifier for the container fleet. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the deployment to return information for. </p>
   * @public
   */
  DeploymentId?: string;
}

/**
 * <p>Describes a container fleet deployment with updates to the fleet. </p>
 * @public
 */
export interface FleetDeployment {
  /**
   * <p>A unique identifier for the deployment. </p>
   * @public
   */
  DeploymentId?: string;

  /**
   * <p>A unique identifier for the container fleet. </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The unique identifier for the version of the game server container group definition
   *             that is being deployed.</p>
   * @public
   */
  GameServerBinaryArn?: string;

  /**
   * <p>The unique identifier for the version of the game server container group definition to
   *             roll back to if deployment fails.</p>
   * @public
   */
  RollbackGameServerBinaryArn?: string;

  /**
   * <p>The unique identifier for the version of the per-instance container group definition
   *             that is being deployed.</p>
   * @public
   */
  PerInstanceBinaryArn?: string;

  /**
   * <p>The unique identifier for the version of the per-instance container group definition
   *             to roll back to if deployment fails.</p>
   * @public
   */
  RollbackPerInstanceBinaryArn?: string;

  /**
   * <p>The status of fleet deployment activity in the location. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> -- The deployment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPAIRED</code> -- The deployment failed and the fleet has some impaired
   *                     containers. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> -- The deployment has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK_IN_PROGRESS</code> -- The deployment failed and rollback has
   *                     been initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK_IN_COMPLETE</code> -- The deployment failed and rollback has
   *                     been completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> -- The deployment was cancelled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeploymentStatus?: DeploymentStatus;

  /**
   * <p>Instructions for how to deploy updates to a container fleet and what actions to take
   *             if the deployment fails.</p>
   * @public
   */
  DeploymentConfiguration?: DeploymentConfiguration;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * <p>For a multi-location container fleet, describes the progress of a deployment across
 *             all fleet locations. </p>
 * @public
 */
export interface LocationalDeployment {
  /**
   * <p>The status of fleet deployment activity in the location. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> -- The deployment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPAIRED</code> -- The deployment failed and the fleet has some impaired
   *                     containers. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> -- The deployment has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK_IN_PROGRESS</code> -- The deployment failed and rollback has
   *                     been initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK_IN_COMPLETE</code> -- The deployment failed and rollback has
   *                     been completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> -- The deployment was cancelled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeploymentStatus?: DeploymentStatus;
}

/**
 * @public
 */
export interface DescribeFleetDeploymentOutput {
  /**
   * <p>The requested deployment information.</p>
   * @public
   */
  FleetDeployment?: FleetDeployment;

  /**
   * <p>If the deployment is for a multi-location fleet, the requests returns the deployment
   *             status in each fleet location.</p>
   * @public
   */
  LocationalDeployments?: Record<string, LocationalDeployment>;
}

/**
 * @public
 */
export interface DescribeFleetEventsInput {
  /**
   * <p>A unique identifier for the fleet to get event logs for. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The earliest date to retrieve event logs for. If no start time is specified, this call
   *             returns entries starting from when the fleet was created to the specified end time.
   *             Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The most recent date to retrieve event logs for. If no end time is specified, this
   *             call returns entries from the specified start time up to the present. Format is a number
   *             expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EventCode = {
  COMPUTE_LOG_UPLOAD_FAILED: "COMPUTE_LOG_UPLOAD_FAILED",
  FLEET_ACTIVATION_FAILED: "FLEET_ACTIVATION_FAILED",
  FLEET_ACTIVATION_FAILED_NO_INSTANCES: "FLEET_ACTIVATION_FAILED_NO_INSTANCES",
  FLEET_BINARY_DOWNLOAD_FAILED: "FLEET_BINARY_DOWNLOAD_FAILED",
  FLEET_CREATED: "FLEET_CREATED",
  FLEET_CREATION_COMPLETED_INSTALLER: "FLEET_CREATION_COMPLETED_INSTALLER",
  FLEET_CREATION_EXTRACTING_BUILD: "FLEET_CREATION_EXTRACTING_BUILD",
  FLEET_CREATION_FAILED_INSTALLER: "FLEET_CREATION_FAILED_INSTALLER",
  FLEET_CREATION_RUNNING_INSTALLER: "FLEET_CREATION_RUNNING_INSTALLER",
  FLEET_CREATION_VALIDATING_RUNTIME_CONFIG: "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG",
  FLEET_DELETED: "FLEET_DELETED",
  FLEET_INITIALIZATION_FAILED: "FLEET_INITIALIZATION_FAILED",
  FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED: "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED",
  FLEET_SCALING_EVENT: "FLEET_SCALING_EVENT",
  FLEET_STATE_ACTIVATING: "FLEET_STATE_ACTIVATING",
  FLEET_STATE_ACTIVE: "FLEET_STATE_ACTIVE",
  FLEET_STATE_BUILDING: "FLEET_STATE_BUILDING",
  FLEET_STATE_CREATED: "FLEET_STATE_CREATED",
  FLEET_STATE_CREATING: "FLEET_STATE_CREATING",
  FLEET_STATE_DOWNLOADING: "FLEET_STATE_DOWNLOADING",
  FLEET_STATE_ERROR: "FLEET_STATE_ERROR",
  FLEET_STATE_PENDING: "FLEET_STATE_PENDING",
  FLEET_STATE_UPDATING: "FLEET_STATE_UPDATING",
  FLEET_STATE_VALIDATING: "FLEET_STATE_VALIDATING",
  FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE: "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE",
  FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND: "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND",
  FLEET_VALIDATION_TIMED_OUT: "FLEET_VALIDATION_TIMED_OUT",
  FLEET_VPC_PEERING_DELETED: "FLEET_VPC_PEERING_DELETED",
  FLEET_VPC_PEERING_FAILED: "FLEET_VPC_PEERING_FAILED",
  FLEET_VPC_PEERING_SUCCEEDED: "FLEET_VPC_PEERING_SUCCEEDED",
  GAME_SERVER_CONTAINER_GROUP_CRASHED: "GAME_SERVER_CONTAINER_GROUP_CRASHED",
  GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY: "GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY",
  GAME_SESSION_ACTIVATION_TIMEOUT: "GAME_SESSION_ACTIVATION_TIMEOUT",
  GENERIC_EVENT: "GENERIC_EVENT",
  INSTANCE_INTERRUPTED: "INSTANCE_INTERRUPTED",
  INSTANCE_RECYCLED: "INSTANCE_RECYCLED",
  INSTANCE_REPLACED_UNHEALTHY: "INSTANCE_REPLACED_UNHEALTHY",
  LOCATION_STATE_ACTIVATING: "LOCATION_STATE_ACTIVATING",
  LOCATION_STATE_ACTIVE: "LOCATION_STATE_ACTIVE",
  LOCATION_STATE_CREATED: "LOCATION_STATE_CREATED",
  LOCATION_STATE_CREATING: "LOCATION_STATE_CREATING",
  LOCATION_STATE_DELETED: "LOCATION_STATE_DELETED",
  LOCATION_STATE_DELETING: "LOCATION_STATE_DELETING",
  LOCATION_STATE_ERROR: "LOCATION_STATE_ERROR",
  LOCATION_STATE_PENDING: "LOCATION_STATE_PENDING",
  LOCATION_STATE_UPDATING: "LOCATION_STATE_UPDATING",
  PER_INSTANCE_CONTAINER_GROUP_CRASHED: "PER_INSTANCE_CONTAINER_GROUP_CRASHED",
  SERVER_PROCESS_CRASHED: "SERVER_PROCESS_CRASHED",
  SERVER_PROCESS_FORCE_TERMINATED: "SERVER_PROCESS_FORCE_TERMINATED",
  SERVER_PROCESS_INVALID_PATH: "SERVER_PROCESS_INVALID_PATH",
  SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT: "SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT",
  SERVER_PROCESS_PROCESS_EXIT_TIMEOUT: "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT",
  SERVER_PROCESS_PROCESS_READY_TIMEOUT: "SERVER_PROCESS_PROCESS_READY_TIMEOUT",
  SERVER_PROCESS_SDK_INITIALIZATION_FAILED: "SERVER_PROCESS_SDK_INITIALIZATION_FAILED",
  SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT: "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT",
  SERVER_PROCESS_TERMINATED_UNHEALTHY: "SERVER_PROCESS_TERMINATED_UNHEALTHY",
} as const;

/**
 * @public
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

/**
 * <p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In
 *             addition to tracking activity, event codes and messages can provide additional
 *             information for troubleshooting and debugging problems.</p>
 * @public
 */
export interface Event {
  /**
   * <p>A unique identifier for a fleet event.</p>
   * @public
   */
  EventId?: string;

  /**
   * <p>A unique identifier for an event resource, such as a fleet ID.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of event being logged. </p>
   *          <p>
   *             <b>Fleet state transition events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_CREATED -- A fleet resource was successfully created with a status of
   *                         <code>NEW</code>. Event messaging includes the fleet ID.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to
   *                         <code>DOWNLOADING</code>. Amazon GameLift is downloading the compressed build and
   *                     running install scripts.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_VALIDATING -- Fleet status changed from <code>DOWNLOADING</code>
   *                     to <code>VALIDATING</code>. Amazon GameLift has successfully installed build and is now
   *                     validating the build files.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code> to
   *                         <code>BUILDING</code>. Amazon GameLift has successfully verified the build files and
   *                     is now launching a fleet instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code> to
   *                         <code>ACTIVATING</code>. Amazon GameLift is launching a game server process on the
   *                     fleet instance and is testing its connectivity with the Amazon GameLift service.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ACTIVE -- The fleet's status changed from <code>ACTIVATING</code>
   *                     to <code>ACTIVE</code>. The fleet is now ready to host game sessions.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_STATE_ERROR -- The Fleet's status changed to <code>ERROR</code>.
   *                     Describe the fleet event message for more details.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Fleet creation events (ordered by fleet creation
   *                 activity):</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_EXTRACTING_BUILD -- The game server build was successfully
   *                     downloaded to an instance, and Amazon GameLiftis now extracting the build files from the
   *                     uploaded build. Failure at this stage prevents a fleet from moving to ACTIVE
   *                     status. Logs for this stage display a list of the files that are extracted and
   *                     saved on the instance. Access the logs by using the URL in
   *                         <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_RUNNING_INSTALLER -- The game server build files were
   *                     successfully extracted, and Amazon GameLift is now running the build's install script
   *                     (if one is included). Failure in this stage prevents a fleet from moving to
   *                     ACTIVE status. Logs for this stage list the installation steps and whether or
   *                     not the install completed successfully. Access the logs by using the URL in
   *                         <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_COMPLETED_INSTALLER -- The game server build files were
   *                     successfully installed and validation of the installation will begin
   *                     soon.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_FAILED_INSTALLER -- The installed failed while attempting to
   *                     install the build files. This event indicates that the failure occurred before
   *                     Amazon GameLift could start validation. </p>
   *             </li>
   *             <li>
   *                <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful,
   *                     and the GameLift is now verifying that the game server launch paths, which are
   *                     specified in the fleet's runtime configuration, exist. If any listed launch path
   *                     exists, Amazon GameLift tries to launch a game server process and waits for the process
   *                     to report ready. Failures in this stage prevent a fleet from moving to
   *                         <code>ACTIVE</code> status. Logs for this stage list the launch paths in the
   *                     runtime configuration and indicate whether each is found. Access the logs by
   *                     using the URL in <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path does not
   *                     exist on the instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path failed to
   *                     run on the fleet instance.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VALIDATION_TIMED_OUT -- Validation of the fleet at the end of creation
   *                     timed out. Try fleet creation again.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_ACTIVATION_FAILED -- The fleet failed to successfully complete one of
   *                     the steps in the fleet activation process. This event code indicates that the
   *                     game build was successfully downloaded to a fleet instance, built, and
   *                     validated, but was not able to start a server process. For more information, see
   *                         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug Fleet Creation Issues</a>.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_ACTIVATION_FAILED_NO_INSTANCES -- Fleet creation was not able to obtain
   *                     any instances based on the input fleet attributes. Try again at a different time
   *                     or choose a different combination of fleet attributes such as fleet type,
   *                     instance type, etc.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_INITIALIZATION_FAILED -- A generic exception occurred during fleet
   *                     creation. Describe the fleet event message for more details.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>VPC peering events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established
   *                     between the VPC for an Amazon GameLift fleet and a VPC in your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed.
   *                     Event details and status information provide additional detail. A common reason
   *                     for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4
   *                     addresses. To resolve this, change the CIDR block for the VPC in your Amazon Web Services
   *                     account. For more information on VPC peering failures, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html">https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully
   *                     deleted.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Container group events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>CONTAINER_GROUP_REGISTRATION_FAILED –  A game server container group started, but
   *                 timed out before calling <code>RegisterCompute</code>. </p>
   *             </li>
   *             <li>
   *                <p>CONTAINER_GROUP_CRASHED A game server container group started and terminated without
   *                 calling <code>RegisterCompute</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Spot instance events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a
   *                     two-minute notification.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_RECYCLED -- A spot instance was determined to have a high risk
   *                     of interruption and is scheduled to be recycled once it has no active
   *                     game sessions.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Server process events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>SERVER_PROCESS_INVALID_PATH -- The game server executable or script could not
   *                     be found based on the Fleet runtime configuration. Check that the launch path is
   *                     correct based on the operating system of the Fleet.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT -- The server process did not call
   *                         <code>InitSDK()</code> within the time expected (5 minutes). Check your game
   *                     session log to see why <code>InitSDK()</code> was not called in time.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_PROCESS_READY_TIMEOUT -- The server process did not call
   *                         <code>ProcessReady()</code> within the time expected  (5 minutes) after
   *                     calling <code>InitSDK()</code>. Check your game session log to see why
   *                         <code>ProcessReady()</code> was not called in time.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_CRASHED -- The server process exited without calling
   *                         <code>ProcessEnding()</code>. Check your game session log to see why
   *                         <code>ProcessEnding()</code> was not called.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_TERMINATED_UNHEALTHY -- The server process did not report a
   *                     valid health check for too long and was therefore terminated by GameLift. Check
   *                     your game session log to see if the thread became stuck processing a synchronous
   *                     task for too long.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_FORCE_TERMINATED -- The server process did not exit cleanly
   *                     within the time expected after <code>OnProcessTerminate()</code> was sent. Check
   *                     your game session log to see why termination took longer than expected.</p>
   *             </li>
   *             <li>
   *                <p>SERVER_PROCESS_PROCESS_EXIT_TIMEOUT -- The server process did not exit cleanly
   *                     within the time expected (30 seconds) after calling
   *                     <code>ProcessEnding()</code>. Check your game session log to see why termination
   *                     took longer than expected.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Game session events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>GAME_SESSION_ACTIVATION_TIMEOUT -- GameSession failed to activate within the
   *                     expected time. Check your game session log to see why
   *                         <code>ActivateGameSession()</code> took longer to complete than
   *                     expected.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Other fleet events:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings
   *                     (desired instances, minimum/maximum scaling limits). Event messaging includes
   *                     the new capacity settings.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the
   *                     fleet's game session protection policy setting. Event messaging includes both
   *                     the old and new policy setting. </p>
   *             </li>
   *             <li>
   *                <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p>
   *             </li>
   *             <li>
   *                <p> GENERIC_EVENT -- An unspecified event has occurred.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventCode?: EventCode;

  /**
   * <p>Additional information related to the event.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  EventTime?: Date;

  /**
   * <p>Location of stored logs with additional detail that is related to the event. This is
   *             useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet
   *             creation logs through the Amazon GameLift console.</p>
   * @public
   */
  PreSignedLogUrl?: string;

  /**
   * <p>The number of times that this event occurred.</p>
   * @public
   */
  Count?: number;
}

/**
 * @public
 */
export interface DescribeFleetEventsOutput {
  /**
   * <p>A collection of objects containing event log entries for the specified fleet.</p>
   * @public
   */
  Events?: Event[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesInput {
  /**
   * <p>A unique identifier for the fleet to retrieve remote locations for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A list of fleet locations to retrieve information for. Specify locations in the form
   *             of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Locations?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This limit is not currently enforced.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LocationUpdateStatus = {
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type LocationUpdateStatus = (typeof LocationUpdateStatus)[keyof typeof LocationUpdateStatus];

/**
 * <p>Details about a location in a multi-location fleet.</p>
 * @public
 */
export interface LocationAttributes {
  /**
   * <p>A fleet location and its current life-cycle state.</p>
   * @public
   */
  LocationState?: LocationState;

  /**
   * <p>A list of fleet actions that have been suspended in the fleet location.</p>
   * @public
   */
  StoppedActions?: FleetAction[];

  /**
   * <p>The status of fleet activity updates to the location. The status
   *                 <code>PENDING_UPDATE</code> indicates that <code>StopFleetActions</code> or
   *                 <code>StartFleetActions</code> has been requested but the update has not yet been
   *             completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;
}

/**
 * @public
 */
export interface DescribeFleetLocationAttributesOutput {
  /**
   * <p>A unique identifier for the fleet that location attributes were requested for.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p> Location-specific information on the requested fleet's remote locations.</p>
   * @public
   */
  LocationAttributes?: LocationAttributes[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityInput {
  /**
   * <p>A unique identifier for the fleet to request location capacity for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The fleet location to retrieve capacity information for. Specify a location in the
   *             form of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetLocationCapacityOutput {
  /**
   * <p>Resource capacity information for the requested fleet location. Capacity objects are
   *             returned only for fleets and locations that currently exist. Changes in desired instance
   *             value can take up to 1 minute to be reflected.</p>
   * @public
   */
  FleetCapacity?: FleetCapacity;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationInput {
  /**
   * <p>A unique identifier for the fleet to request location utilization for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The fleet location to retrieve utilization information for. Specify a location in the
   *             form of an Amazon Web Services Region code, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * <p>Current resource utilization statistics in a specified fleet or location. The location
 *             value might refer to a fleet's remote location or its home region.</p>
 * @public
 */
export interface FleetUtilization {
  /**
   * <p>A unique identifier for the fleet associated with the location.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The number of server processes in <code>ACTIVE</code> status that are currently
   *             running across all instances in the fleet location. </p>
   * @public
   */
  ActiveServerProcessCount?: number;

  /**
   * <p>The number of active game sessions that are currently being hosted across all
   *             instances in the fleet location.</p>
   * @public
   */
  ActiveGameSessionCount?: number;

  /**
   * <p>The number of active player sessions that are currently being hosted across all
   *             instances in the fleet location.</p>
   * @public
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players allowed across all game sessions that are currently
   *             being hosted across all instances in the fleet location.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>The fleet location for the fleet utilization information, expressed as an Amazon Web Services Region
   *             code, such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetLocationUtilizationOutput {
  /**
   * <p>Utilization information for the requested fleet location. Utilization objects are
   *             returned only for fleets and locations that currently exist.</p>
   * @public
   */
  FleetUtilization?: FleetUtilization;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve port settings for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A remote location to check for status of port setting updates. Use the Amazon Web Services Region
   *             code format, such as <code>us-west-2</code>.</p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for the fleet that was requested. </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The port settings for the requested fleet ID.</p>
   * @public
   */
  InboundPermissions?: IpPermission[];

  /**
   * <p>The current status of updates to the fleet's port settings in the requested fleet
   *             location. A status of <code>PENDING_UPDATE</code> indicates that an update was requested
   *             for the fleet but has not yet been completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;

  /**
   * <p>The requested fleet location, expressed as an Amazon Web Services Region code, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationInput {
  /**
   * <p>A unique identifier for the fleet to retrieve utilization data for. You can use either the fleet ID or ARN value.
   *             To retrieve attributes for all current fleets, do not include this parameter. </p>
   * @public
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetUtilizationOutput {
  /**
   * <p>A collection of objects containing utilization information for each requested fleet
   *             ID. Utilization objects are returned only for fleets that currently exist.</p>
   * @public
   */
  FleetUtilization?: FleetUtilization[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server information to be retrieved.</p>
   * @public
   */
  GameServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerOutput {
  /**
   * <p>Object that describes the requested game server.</p>
   * @public
   */
  GameServer?: GameServer;
}

/**
 * @public
 */
export interface DescribeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGameServerGroupOutput {
  /**
   * <p>An object with the property settings for the requested game server group resource.
   *         </p>
   * @public
   */
  GameServerGroup?: GameServerGroup;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesInput {
  /**
   * <p>A unique identifier for the game server group. Use either the name or ARN value.</p>
   * @public
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 instance IDs that you want to retrieve status on. Amazon EC2 instance IDs use a
   *             17-character format, for example: <code>i-1234567890abcdef0</code>. To retrieve all
   *             instances in the game server group, leave this parameter empty. </p>
   * @public
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const GameServerInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
  SPOT_TERMINATING: "SPOT_TERMINATING",
} as const;

/**
 * @public
 */
export type GameServerInstanceStatus = (typeof GameServerInstanceStatus)[keyof typeof GameServerInstanceStatus];

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *          <p> Additional properties,
 *             including status, that describe an EC2 instance in a game server group. Instance
 *             configurations are set with game server group properties (see
 *                 <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used
 *             when creating the game server group. </p>
 *          <p>Retrieve game server instances for a game server group by calling
 *                 <code>DescribeGameServerInstances</code>. </p>
 * @public
 */
export interface GameServerInstance {
  /**
   * <p>A developer-defined identifier for the game server group that includes the game server
   *             instance. The name is unique for each Region in each Amazon Web Services account.</p>
   * @public
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique identifier for the game server group that includes the game server
   *             instance. </p>
   * @public
   */
  GameServerGroupArn?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>Current status of the game server instance</p>
   * @public
   */
  InstanceStatus?: GameServerInstanceStatus;
}

/**
 * @public
 */
export interface DescribeGameServerInstancesOutput {
  /**
   * <p>The collection of requested game server instances.</p>
   * @public
   */
  GameServerInstances?: GameServerInstance[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve all game sessions active on the fleet. You can use either the fleet
   *             ID or ARN value.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to retrieve all game sessions for. You can use either
   *             the alias ID or ARN value.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to get game session details for. You can specify a fleet's home
   *             Region or a remote location. Use the Amazon Web Services Region code format, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;

  /**
   * <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   * @public
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A game session's properties plus the protection policy currently in force.</p>
 * @public
 */
export interface GameSessionDetail {
  /**
   * <p>Object that describes a game session.</p>
   * @public
   */
  GameSession?: GameSession;

  /**
   * <p>Current status of protection for the game session.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ProtectionPolicy?: ProtectionPolicy;
}

/**
 * @public
 */
export interface DescribeGameSessionDetailsOutput {
  /**
   * <p>A collection of properties for each game session that matches the request.</p>
   * @public
   */
  GameSessionDetails?: GameSessionDetail[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to retrieve.</p>
   * @public
   */
  PlacementId: string | undefined;
}

/**
 * <p>Information about a player session. This object contains only the player ID and player
 *             session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID.</p>
 * @public
 */
export interface PlacedPlayerSession {
  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session.</p>
   * @public
   */
  PlayerSessionId?: string;
}

/**
 * <p>Regional latency information for a player, used when requesting a new game session.
 *             This value indicates the amount of time lag that exists when the player is connected to
 *             a fleet in the specified Region. The relative difference between a player's latency
 *             values for multiple Regions are used to determine which fleets are best suited to place
 *             a new game session for the player. </p>
 * @public
 */
export interface PlayerLatency {
  /**
   * <p>A unique identifier for a player associated with the latency data.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>Name of the Region that is associated with the latency value.</p>
   * @public
   */
  RegionIdentifier?: string;

  /**
   * <p>Amount of time that represents the time lag experienced by the player when connected
   *             to the specified Region.</p>
   * @public
   */
  LatencyInMilliseconds?: number;
}

/**
 * @public
 * @enum
 */
export const GameSessionPlacementState = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FULFILLED: "FULFILLED",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type GameSessionPlacementState = (typeof GameSessionPlacementState)[keyof typeof GameSessionPlacementState];

/**
 * <p>Represents a potential game session placement, including the full details of the
 *             original placement request and the current status. </p>
 *          <note>
 *             <p>If the game session placement status is <code>PENDING</code>, the properties for game
 *                 session ID/ARN, region, IP address/DNS, and port aren't final. A game session is not
 *                 active and ready to accept players until placement status reaches
 *                     <code>FULFILLED</code>. When the placement is in <code>PENDING</code> status,
 *                 Amazon GameLift may attempt to place a game session multiple times before succeeding. With
 *                 each attempt it creates a <a>GameSession</a> object and updates this
 *                 placement object with the new game session properties..</p>
 *          </note>
 * @public
 */
export interface GameSessionPlacement {
  /**
   * <p>A unique identifier for a game session placement.</p>
   * @public
   */
  PlacementId?: string;

  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   * @public
   */
  GameSessionQueueName?: string;

  /**
   * <p>Current status of the game session placement request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The placement request is
   *                     in the queue waiting to be processed. Game session properties are not
   *                     yet final. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FULFILLED</b> -- A new game session has been
   *                     successfully placed. Game session properties are now final.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> -- The placement request was
   *                     canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMED_OUT</b> -- A new game session was not
   *                     successfully created before the time limit expired. You can resubmit as a new
   *                     placement request as needed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- Amazon GameLift is not able to complete the
   *                     process of placing the game session. Common reasons are the game session
   *                     terminated before the placement process was completed, or an unexpected internal
   *                     error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GameSessionPlacementState;

  /**
   * <p>A set of key-value pairs that can store custom data in a game session.
   *   For example: <code>\{"Key": "difficulty", "Value": "novice"\}</code>.</p>
   * @public
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   * @public
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   * @public
   */
  GameSessionName?: string;

  /**
   * <p>A unique identifier for the game session. This value isn't final until placement status is
   *             <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>Identifier for the game session created by this placement request. This identifier is
   *             unique across all Regions. This value isn't final until placement status is
   *                 <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionArn?: string;

  /**
   * <p>Name of the Region where the game session created by this placement request is
   *             running. This value isn't final until placement status is <code>FULFILLED</code>.</p>
   * @public
   */
  GameSessionRegion?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions.</p>
   * @public
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this request was completed, canceled, or timed out.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value isn't final until placement status is <code>FULFILLED</code>. </p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
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
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value isn't final until placement status is
   *             <code>FULFILLED</code>.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>A collection of information on player sessions created in response to the game session
   *             placement request. These player sessions are created only after a new game session is
   *             successfully placed (placement status is <code>FULFILLED</code>). This information
   *             includes the player ID, provided in the placement request, and a corresponding player
   *             session ID.</p>
   * @public
   */
  PlacedPlayerSessions?: PlacedPlayerSession[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>.</p>
   * @public
   */
  GameSessionData?: string;

  /**
   * <p>Information on the matchmaking process for this game. Data is in JSON syntax,
   *             formatted as a string. It identifies the matchmaking configuration used to create the
   *             match, and contains data on all players assigned to the match, including player
   *             attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *                 Data</a>.</p>
   * @public
   */
  MatchmakerData?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionPlacementOutput {
  /**
   * <p>Object that describes the requested game session placement.</p>
   * @public
   */
  GameSessionPlacement?: GameSessionPlacement;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesInput {
  /**
   * <p>A list of queue names to retrieve information for. You can use either the queue ID or
   *             ARN value. To request settings for all queues, leave this parameter empty. </p>
   * @public
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. You can request up to 50 results.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionQueuesOutput {
  /**
   * <p>A collection of objects that describe the requested game session queues.</p>
   * @public
   */
  GameSessionQueues?: GameSessionQueue[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionsInput {
  /**
   * <p>A unique identifier for the fleet to retrieve game sessions for. You can use either the fleet ID or ARN value.
   *         </p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for the alias associated with the fleet to retrieve game sessions for. You can use either the
   *             alias ID or ARN value.</p>
   * @public
   */
  AliasId?: string;

  /**
   * <p>A fleet location to get game sessions for. You can specify a fleet's home Region or a
   *             remote location. Use the Amazon Web Services Region code format, such as <code>us-west-2</code>.
   *         </p>
   * @public
   */
  Location?: string;

  /**
   * <p>Game session status to filter results on. You can filter on the following states:
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and
   *                 <code>TERMINATING</code>. The last two are transitory and used for only very brief
   *             periods of time. </p>
   * @public
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeGameSessionsOutput {
  /**
   * <p>A collection of properties for each game session that matches the request.</p>
   * @public
   */
  GameSessions?: GameSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstancesInput {
  /**
   * <p>A unique identifier for the fleet to retrieve instance information for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for an instance to retrieve. Specify an instance ID or leave blank
   *             to retrieve all instances in the fleet.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The name of a location to retrieve instance information for, in the form of an Amazon Web Services
   *             Region code such as <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * <p>Represents a virtual computing instance that runs game server processes and hosts game
 *             sessions. In Amazon GameLift, one or more instances make up a managed EC2 fleet.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>A unique identifier for the fleet that the instance belongs to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A unique identifier for the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>IP address that is assigned to the instance.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
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
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>Operating system that is running on this EC2 instance. </p>
   *          <note>
   *             <p>Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in
   *             the <a href="https://aws.amazon.com/amazon-linux-2/faqs/">Amazon Linux 2 FAQs</a>.
   *             For game servers
   *             that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the
   *             game server build to server SDK 5.x, and then deploy to AL2023 instances. See
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk5-migration.html">
   *                 Migrate to Amazon GameLift server SDK version 5.</a>
   *             </p>
   *          </note>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>EC2 instance type that defines the computing resources of this instance. </p>
   * @public
   */
  Type?: EC2InstanceType;

  /**
   * <p>Current status of the instance. Possible statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The instance is in the process of
   *                     being created and launching server processes as defined in the fleet's run-time
   *                     configuration. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The instance has been successfully
   *                     created and at least one server process has successfully launched and reported
   *                     back to Amazon GameLift that it is ready to host a game session. The instance is now
   *                     considered ready to host game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINATING</b> -- The instance is in the process
   *                     of shutting down. This may happen to reduce capacity during a scaling down event
   *                     or to recycle resources in the event of a problem.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: InstanceStatus;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The fleet location of the instance, expressed as an Amazon Web Services Region code, such as
   *                 <code>us-west-2</code>. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeInstancesOutput {
  /**
   * <p>A collection of objects containing properties for each instance returned.</p>
   * @public
   */
  Instances?: Instance[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. You can include up to 10 ID values. </p>
   * @public
   */
  TicketIds: string[] | undefined;
}

/**
 * <p>Represents a new player session that is created as a result of a successful FlexMatch
 *             match. A successful match automatically creates new player sessions for every player ID
 *             in the original matchmaking request. </p>
 *          <p>When players connect to the match's game session, they must include both player ID and
 *             player session ID in order to claim their assigned player slot.</p>
 * @public
 */
export interface MatchedPlayerSession {
  /**
   * <p>A unique identifier for a player </p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session</p>
   * @public
   */
  PlayerSessionId?: string;
}

/**
 * <p>Connection information for a new game session that is created in response to a start
 *             matchmaking request. Once a match is made, the FlexMatch engine creates a new game session
 *             for it. This information, including the game session endpoint and player sessions for
 *             each player in the original matchmaking request, is added to the matchmaking
 *             ticket.</p>
 * @public
 */
export interface GameSessionConnectionInfo {
  /**
   * <p>A unique identifier for the game session. Use the game session ID.</p>
   * @public
   */
  GameSessionArn?: string;

  /**
   * <p>The IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>The DNS identifier assigned to the instance that is running the game session. Values have
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
   *          <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   * @public
   */
  DnsName?: string;

  /**
   * <p>The port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>A collection of player session IDs, one for each player ID that was included in the
   *             original matchmaking request. </p>
   * @public
   */
  MatchedPlayerSessions?: MatchedPlayerSession[];
}

/**
 * <p>Represents a player in matchmaking. When starting a matchmaking request, a player has
 *             a player ID, attributes, and may have latency data. Team information is added after a
 *             match has been successfully completed.</p>
 * @public
 */
export interface Player {
  /**
   * <p>A unique identifier for a player</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A collection of key:value pairs containing player information for use in matchmaking.
   *             Player attribute keys must match the <i>playerAttributes</i> used in a
   *             matchmaking rule set. Example: <code>"PlayerAttributes": \{"skill": \{"N": "23"\},
   *                 "gameMode": \{"S": "deathmatch"\}\}</code>.</p>
   *          <p>You can provide up to 10 <code>PlayerAttributes</code>.</p>
   * @public
   */
  PlayerAttributes?: Record<string, AttributeValue>;

  /**
   * <p>Name of the team that the player is assigned to in a match. Team names are defined in
   *             a matchmaking rule set.</p>
   * @public
   */
  Team?: string;

  /**
   * <p>A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions. If this property is present, FlexMatch considers placing the match only in
   *             Regions for which latency is reported. </p>
   *          <p>If a matchmaker has a rule that evaluates player latency, players must report latency
   *             in order to be matched. If no latency is reported in this scenario, FlexMatch assumes that
   *             no Regions are available to the player and the ticket is not matchable. </p>
   * @public
   */
  LatencyInMs?: Record<string, number>;
}

/**
 * @public
 * @enum
 */
export const MatchmakingConfigurationStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PLACING: "PLACING",
  QUEUED: "QUEUED",
  REQUIRES_ACCEPTANCE: "REQUIRES_ACCEPTANCE",
  SEARCHING: "SEARCHING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type MatchmakingConfigurationStatus =
  (typeof MatchmakingConfigurationStatus)[keyof typeof MatchmakingConfigurationStatus];

/**
 * <p>Ticket generated to track the progress of a matchmaking request. Each ticket is
 *             uniquely identified by a ticket ID, supplied by the requester, when creating a
 *             matchmaking request.</p>
 * @public
 */
export interface MatchmakingTicket {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
   * @public
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaking configuration that is used with this ticket. Matchmaking
   *             configurations determine how players are grouped into a match and how a new game session
   *             is created for the match.</p>
   * @public
   */
  ConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift matchmaking configuration resource that is used
   *             with this ticket.</p>
   * @public
   */
  ConfigurationArn?: string;

  /**
   * <p>Current status of the matchmaking request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>QUEUED</b> -- The matchmaking request has been
   *                     received and is currently waiting to be processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SEARCHING</b> -- The matchmaking request is
   *                     currently being processed. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REQUIRES_ACCEPTANCE</b> -- A match has been
   *                     proposed and the players must accept the match. This status is used only with
   *                     requests that use a matchmaking configuration with a player acceptance
   *                     requirement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PLACING</b> -- The FlexMatch engine has matched
   *                     players and is in the process of placing a new game session for the
   *                     match.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- Players have been matched and a
   *                     game session is ready to host the players. A ticket in this state contains the
   *                     necessary connection information for players.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The matchmaking request was not
   *                     completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> -- The matchmaking request was
   *                     canceled. This may be the result of a <code>StopMatchmaking</code> operation or
   *                     a proposed match that one or more players failed to accept.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMED_OUT</b> -- The matchmaking request was not
   *                     successful within the duration specified in the matchmaking configuration.
   *                 </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Matchmaking requests that fail to successfully complete (statuses FAILED,
   *                 CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.</p>
   *          </note>
   * @public
   */
  Status?: MatchmakingConfigurationStatus;

  /**
   * <p>Code to explain the current status. For example, a status reason may indicate when a
   *             ticket has returned to <code>SEARCHING</code> status after a proposed match fails to
   *             receive player acceptances.</p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>Additional information about the current status.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when the matchmaking request stopped being processed due to
   *             successful completion, timeout, or cancellation. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>A set of <code>Player</code> objects, each representing a player to find matches for.
   *             Players are identified by a unique player ID and may include latency data for use during
   *             matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code>
   *             objects include the team the players were assigned to in the resulting match.</p>
   * @public
   */
  Players?: Player[];

  /**
   * <p>Connection information for a new game session. Once a match is made, the FlexMatch
   *             engine creates a new game session for it. This information is added to the matchmaking
   *             ticket, which you can be retrieve by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html">DescribeMatchmaking</a> .</p>
   * @public
   */
  GameSessionConnectionInfo?: GameSessionConnectionInfo;

  /**
   * <p>Average amount of time (in seconds) that players are currently waiting for a match. If
   *             there is not enough recent data, this property may be empty.</p>
   * @public
   */
  EstimatedWaitTime?: number;
}

/**
 * @public
 */
export interface DescribeMatchmakingOutput {
  /**
   * <p>A collection of existing matchmaking ticket objects matching the request.</p>
   * @public
   */
  TicketList?: MatchmakingTicket[];
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsInput {
  /**
   * <p>A unique identifier for the matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To
   *             request all existing configurations, leave this parameter empty.</p>
   * @public
   */
  Names?: string[];

  /**
   * <p>A unique identifier for the matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to
   *             retrieve all matchmaking configurations that use this rule set.</p>
   * @public
   */
  RuleSetName?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingConfigurationsOutput {
  /**
   * <p>A collection of requested matchmaking configurations.</p>
   * @public
   */
  Configurations?: MatchmakingConfiguration[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsInput {
  /**
   * <p>A list of one or more matchmaking rule set names to retrieve details for. (Note: The
   *             rule set name is different from the optional "name" field in the rule set body.) You can
   *             use either the rule set name or ARN value. </p>
   * @public
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMatchmakingRuleSetsOutput {
  /**
   * <p>A collection of requested matchmaking rule set objects. </p>
   * @public
   */
  RuleSets: MatchmakingRuleSet[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to retrieve player sessions for.</p>
   * @public
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for a player to retrieve player sessions for.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session to retrieve.</p>
   * @public
   */
  PlayerSessionId?: string;

  /**
   * <p>Player session status to filter results on. Note that when a PlayerSessionId or
   *             PlayerId is provided in a DescribePlayerSessions request, then the
   *             PlayerSessionStatusFilter has no effect on the response.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                     received, but the player has not yet connected to the server process and/or been
   *                     validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                     server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                     dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                     received, but the player did not connect and/or was not validated within the
   *                     timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   * @public
   */
  PlayerSessionStatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribePlayerSessionsOutput {
  /**
   * <p>A collection of objects containing properties for each player session that matches the
   *             request.</p>
   * @public
   */
  PlayerSessions?: PlayerSession[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for the fleet to get the runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuntimeConfigurationOutput {
  /**
   * <p>Instructions that describe how server processes are launched and maintained on
   *             computes in the fleet.</p>
   * @public
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

/**
 * @public
 * @enum
 */
export const ScalingStatusType = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_REQUESTED: "DELETE_REQUESTED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ScalingStatusType = (typeof ScalingStatusType)[keyof typeof ScalingStatusType];

/**
 * @public
 */
export interface DescribeScalingPoliciesInput {
  /**
   * <p>A unique identifier for the fleet for which to retrieve scaling policies. You can use either the fleet ID or ARN
   *             value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>Scaling policy status to filter results on. A scaling policy is only in force when in
   *             an <code>ACTIVE</code> status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The scaling policy is currently in
   *                     force.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATEREQUESTED</b> -- A request to update the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATING</b> -- A change is being made to the
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETEREQUESTED</b> -- A request to delete the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- The scaling policy is being
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> -- The scaling policy has been
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred in creating the
   *                     policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusFilter?: ScalingStatusType;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The fleet location. If you don't specify this value, the response contains the
   *             scaling policies of every location in the fleet. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const MetricName = {
  ActivatingGameSessions: "ActivatingGameSessions",
  ActiveGameSessions: "ActiveGameSessions",
  ActiveInstances: "ActiveInstances",
  AvailableGameSessions: "AvailableGameSessions",
  AvailablePlayerSessions: "AvailablePlayerSessions",
  ConcurrentActivatableGameSessions: "ConcurrentActivatableGameSessions",
  CurrentPlayerSessions: "CurrentPlayerSessions",
  IdleInstances: "IdleInstances",
  PercentAvailableGameSessions: "PercentAvailableGameSessions",
  PercentIdleInstances: "PercentIdleInstances",
  QueueDepth: "QueueDepth",
  WaitTime: "WaitTime",
} as const;

/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  RuleBased: "RuleBased",
  TargetBased: "TargetBased",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ScalingAdjustmentType = {
  ChangeInCapacity: "ChangeInCapacity",
  ExactCapacity: "ExactCapacity",
  PercentChangeInCapacity: "PercentChangeInCapacity",
} as const;

/**
 * @public
 */
export type ScalingAdjustmentType = (typeof ScalingAdjustmentType)[keyof typeof ScalingAdjustmentType];

/**
 * <p>Settings for a target-based scaling policy. A target-based policy tracks a particular
 *             fleet metric specifies a target value for the metric. As player usage changes, the
 *             policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target
 *             value. The target configuration specifies settings as needed for the target based
 *             policy, including the target value. </p>
 * @public
 */
export interface TargetConfiguration {
  /**
   * <p>Desired value to use with a target-based scaling policy. The value must be relevant
   *             for whatever metric the scaling policy is using. For example, in a policy using the
   *             metric PercentAvailableGameSessions, the target value should be the preferred size of
   *             the fleet's buffer (the percent of capacity that should be idle and ready for new game
   *             sessions).</p>
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by
 *             the combination of name and fleet ID.</p>
 * @public
 */
export interface ScalingPolicy {
  /**
   * <p>A unique identifier for the fleet that is associated with this scaling policy.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Current status of the scaling policy. The scaling policy can be in force only when in
   *             an <code>ACTIVE</code> status. Scaling policies can be suspended for individual fleets.
   *             If the policy is suspended for a fleet, the policy status does not change.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The scaling policy can be used for
   *                     auto-scaling a fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_REQUESTED</b> -- A request to update the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATING</b> -- A change is being made to the
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETE_REQUESTED</b> -- A request to delete the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- The scaling policy is being
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> -- The scaling policy has been
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred in creating the
   *                     policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ScalingStatusType;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   * @public
   */
  ScalingAdjustment?: number;

  /**
   * <p>The type of adjustment to make to a fleet's instance count.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChangeInCapacity</b> -- add (or subtract) the
   *                     scaling adjustment value from the current instance count. Positive values scale
   *                     up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExactCapacity</b> -- set the instance count to the
   *                     scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentChangeInCapacity</b> -- increase or reduce
   *                     the current instance count by the scaling adjustment, read as a percentage.
   *                     Positive values scale up while negative values scale down.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScalingAdjustmentType?: ScalingAdjustmentType;

  /**
   * <p>Comparison operator to use when measuring a metric against the threshold value.</p>
   * @public
   */
  ComparisonOperator?: ComparisonOperatorType;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   * @public
   */
  Threshold?: number;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricName?: MetricName;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   * @public
   */
  PolicyType?: PolicyType;

  /**
   * <p>An object that contains settings for a target-based scaling policy.</p>
   * @public
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   * <p>The current status of the fleet's scaling policies in a requested fleet location. The
   *             status <code>PENDING_UPDATE</code> indicates that an update was requested for the fleet
   *             but has not yet been completed for the location.</p>
   * @public
   */
  UpdateStatus?: LocationUpdateStatus;

  /**
   * <p> The fleet location. </p>
   * @public
   */
  Location?: string;
}

/**
 * @public
 */
export interface DescribeScalingPoliciesOutput {
  /**
   * <p>A collection of objects containing the scaling policies matching the request.</p>
   * @public
   */
  ScalingPolicies?: ScalingPolicy[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeScriptInput {
  /**
   * <p>A unique identifier for the Realtime script to retrieve properties for. You can use either the script ID or ARN
   *             value.</p>
   * @public
   */
  ScriptId: string | undefined;
}

/**
 * @public
 */
export interface DescribeScriptOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   * @public
   */
  Script?: Script;
}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsInput {}

/**
 * @public
 */
export interface DescribeVpcPeeringAuthorizationsOutput {
  /**
   * <p>A collection of objects that describe all valid VPC peering operations for the current
   *             Amazon Web Services account.</p>
   * @public
   */
  VpcPeeringAuthorizations?: VpcPeeringAuthorization[];
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * <p>A unique identifier for the fleet. You can use either the fleet ID or ARN value.</p>
   * @public
   */
  FleetId?: string;
}

/**
 * <p>Represents status information for a VPC peering connection. Status codes and messages
 *             are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also
 *             communicated as a fleet event.</p>
 * @public
 */
export interface VpcPeeringConnectionStatus {
  /**
   * <p>Code indicating the status of a VPC peering connection.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>Additional messaging associated with the connection status. </p>
   * @public
   */
  Message?: string;
}

/**
 * <p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the
 *             VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a
 *             pending connection that has not yet been established.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @public
 */
export interface VpcPeeringConnection {
  /**
   * <p>A unique identifier for the fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) associated with the GameLift fleet resource for this connection. </p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift
   *             VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot
   *             overlap or the peering connection cannot be created. </p>
   * @public
   */
  IpV4CidrBlock?: string;

  /**
   * <p>A unique identifier that is automatically assigned to the connection record. This ID
   *             is referenced in VPC peering connection events, and is used when deleting a
   *             connection.</p>
   * @public
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The status information about the connection. Status indicates if a connection is
   *             pending, successful, or failed.</p>
   * @public
   */
  Status?: VpcPeeringConnectionStatus;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the Amazon Web Services Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   * @public
   */
  PeerVpcId?: string;

  /**
   * <p>A unique identifier for the VPC that contains the Amazon GameLift fleet for this connection.
   *             This VPC is managed by Amazon GameLift and does not appear in your Amazon Web Services account. </p>
   * @public
   */
  GameLiftVpcId?: string;
}

/**
 * @public
 */
export interface DescribeVpcPeeringConnectionsOutput {
  /**
   * <p>A collection of VPC peering connection records that match the request.</p>
   * @public
   */
  VpcPeeringConnections?: VpcPeeringConnection[];
}

/**
 * <p>Player information for use when creating player sessions using a game session
 *             placement request.</p>
 * @public
 */
export interface DesiredPlayerSession {
  /**
   * <p>A unique identifier for a player to associate with the player session.</p>
   * @public
   */
  PlayerId?: string;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   * @public
   */
  PlayerData?: string;
}

/**
 * @public
 */
export interface GetComputeAccessInput {
  /**
   * <p>A unique identifier for the fleet that holds the compute resource that you want to connect to. You can use either the
   *             fleet ID or ARN value.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the compute resource that you want to connect to. For an EC2
   *             fleet compute, use the instance ID.  Use
   *                 <a>ListCompute</a> to retrieve compute identifiers.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAccessOutput {
  /**
   * <p>The ID of the fleet that holds the compute resource to be accessed.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The identifier of the compute resource to be accessed.  This value might be either a
   *             compute name or an instance ID.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to an Amazon GameLift compute resource and uniquely identifies it.
   *             ARNs are unique across all Regions. Format is
   *                 <code>arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>A set of temporary Amazon Web Services credentials for use when connecting to the
   *             compute resource with Amazon EC2 Systems Manager (SSM).</p>
   * @public
   */
  Credentials?: AwsCredentials;

  /**
   * <p>The instance ID where the compute resource is running.</p>
   * @public
   */
  Target?: string;

  /**
   * <p>For a managed container fleet, a list of containers on the compute. Use the container
   *             runtime ID with Docker commands to connect to a specific container. </p>
   * @public
   */
  ContainerIdentifiers?: ContainerIdentifier[];
}

/**
 * @public
 */
export interface GetComputeAuthTokenInput {
  /**
   * <p>A unique identifier for the fleet that the compute is registered to.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name of the compute resource you are requesting the authentication token for. For
   *             an Anywhere fleet compute, use the registered compute name. For an EC2 fleet instance,
   *             use the instance ID.</p>
   * @public
   */
  ComputeName: string | undefined;
}

/**
 * @public
 */
export interface GetComputeAuthTokenOutput {
  /**
   * <p>A unique identifier for the fleet that the compute is registered to.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a Amazon GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is <code>arn:aws:gamelift:<region>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  FleetArn?: string;

  /**
   * <p>The name of the compute resource that the authentication token is issued to.</p>
   * @public
   */
  ComputeName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to an Amazon GameLift compute resource and uniquely identifies it.
   *             ARNs are unique across all Regions. Format is
   *                 <code>arn:aws:gamelift:<region>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912</code>.</p>
   * @public
   */
  ComputeArn?: string;

  /**
   * <p>A valid temporary authentication token.</p>
   * @public
   */
  AuthToken?: string;

  /**
   * <p>The amount of time until the authentication token is no longer valid.</p>
   * @public
   */
  ExpirationTimestamp?: Date;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlInput {
  /**
   * <p>A unique identifier for the game session to get logs for. </p>
   * @public
   */
  GameSessionId: string | undefined;
}

/**
 * @public
 */
export interface GetGameSessionLogUrlOutput {
  /**
   * <p>Location of the requested game session logs, available for download. This URL is valid
   *             for 15 minutes, after which S3 will reject any download request using this URL. You can
   *             request a new URL any time within the 14-day period that the logs are retained.</p>
   * @public
   */
  PreSignedUrl?: string;
}

/**
 * @public
 */
export interface GetInstanceAccessInput {
  /**
   * <p>A unique identifier for the fleet that contains the instance you want to access. You can request access to
   *             instances in EC2 fleets with the following statuses: <code>ACTIVATING</code>,
   *                 <code>ACTIVE</code>, or <code>ERROR</code>. Use either a fleet ID or an ARN value. </p>
   *          <note>
   *             <p>You can access fleets in <code>ERROR</code> status for a short period of time before Amazon GameLift deletes them.</p>
   *          </note>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the instance you want to access. You can access an instance in any status.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>A set of credentials that allow remote access to an instance in an EC2 managed fleet.
 *             These credentials are returned in response to a call to
 *             <a>GetInstanceAccess</a>, which requests access for instances that are running
 *             game servers with the Amazon GameLift server SDK version 4.x or earlier.</p>
 * @public
 */
export interface InstanceCredentials {
  /**
   * <p>A user name for logging in.</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>Secret string. For Windows instances, the secret is a password for use with Windows
   *             Remote Desktop. For Linux instances, it's a private key for use with SSH.</p>
   * @public
   */
  Secret?: string;
}

/**
 * <p>Information and credentials that you can use to remotely connect to an instance in an
 *             EC2 managed fleet. This data type is returned in response to a call to
 *             <a>GetInstanceAccess</a>. </p>
 * @public
 */
export interface InstanceAccess {
  /**
   * <p>A unique identifier for the fleet containing the instance to be accessed.</p>
   * @public
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the instance to be accessed.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>IP address assigned to the instance.</p>
   * @public
   */
  IpAddress?: string;

  /**
   * <p>Operating system that is running on the instance.</p>
   * @public
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>Security credentials that are required to access the instance.</p>
   * @public
   */
  Credentials?: InstanceCredentials;
}

/**
 * @public
 */
export interface GetInstanceAccessOutput {
  /**
   * <p>The connection information for a fleet instance, including IP address and access
   *             credentials.</p>
   * @public
   */
  InstanceAccess?: InstanceAccess;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * <p>The routing type to filter results on. Use this parameter to retrieve only aliases
   *             with a certain routing type. To retrieve all aliases, leave this parameter empty.</p>
   *          <p>Possible routing types include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SIMPLE</b> -- The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINAL</b> -- The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RoutingStrategy.html">RoutingStrategy</a> message embedded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RoutingStrategyType?: RoutingStrategyType;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * <p>A collection of alias resources that match the request parameters.</p>
   * @public
   */
  Aliases?: Alias[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * <p>Build status to filter results by. To retrieve all builds, leave this parameter
   *             empty.</p>
   *          <p>Possible build statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: BuildStatus;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * <p>A collection of build resources that match the request.</p>
   * @public
   */
  Builds?: Build[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListComputeInputStatus = {
  ACTIVE: "ACTIVE",
  IMPAIRED: "IMPAIRED",
} as const;

/**
 * @public
 */
export type ListComputeInputStatus = (typeof ListComputeInputStatus)[keyof typeof ListComputeInputStatus];

/**
 * @public
 */
export interface ListComputeInput {
  /**
   * <p>A unique identifier for the fleet to retrieve compute resources for.</p>
   * @public
   */
  FleetId: string | undefined;

  /**
   * <p>The name of a location to retrieve compute resources for. For an Amazon GameLift Anywhere
   *             fleet, use a custom location. For a managed fleet, provide a
   *             Amazon Web Services Region or Local Zone code (for example: <code>us-west-2</code> or
   *             <code>us-west-2-lax-1</code>).</p>
   * @public
   */
  Location?: string;

  /**
   * <p>For computes in a managed container fleet, the name of the deployed container group
   *             definition. </p>
   * @public
   */
  ContainerGroupDefinitionName?: string;

  /**
   * <p>The status of computes in a managed container fleet, based on the success of the
   *             latest update deployment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> -- The compute is deployed with the correct container
   *                     definitions. It is ready to process game servers and host game sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPAIRED</code> -- An update deployment to the compute failed, and the
   *                     compute is deployed with incorrect container definitions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ComputeStatus?: ListComputeInputStatus;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComputeOutput {
  /**
   * <p>A list of compute resources in the specified fleet.</p>
   * @public
   */
  ComputeList?: Compute[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContainerFleetsInput {
  /**
   * <p>The container group definition to filter the list on. Use this parameter to retrieve
   *             only those fleets that use the specified container group definition. You can specify the
   *             container group definition's name to get fleets with the latest versions. Alternatively,
   *             provide an ARN value to get fleets with a specific version number.</p>
   * @public
   */
  ContainerGroupDefinitionName?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContainerFleetsOutput {
  /**
   * <p>A collection of container fleet objects for all fleets that match the request
   *             criteria.</p>
   * @public
   */
  ContainerFleets?: ContainerFleet[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const AcceptMatchInputFilterSensitiveLog = (obj: AcceptMatchInput): any => ({
  ...obj,
  ...(obj.PlayerIds && { PlayerIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AwsCredentialsFilterSensitiveLog = (obj: AwsCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeFilterSensitiveLog = (obj: Compute): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionPortRangeFilterSensitiveLog = (obj: ConnectionPortRange): any => ({
  ...obj,
  ...(obj.FromPort && { FromPort: SENSITIVE_STRING }),
  ...(obj.ToPort && { ToPort: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IpPermissionFilterSensitiveLog = (obj: IpPermission): any => ({
  ...obj,
  ...(obj.FromPort && { FromPort: SENSITIVE_STRING }),
  ...(obj.ToPort && { ToPort: SENSITIVE_STRING }),
  ...(obj.IpRange && { IpRange: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContainerFleetFilterSensitiveLog = (obj: ContainerFleet): any => ({
  ...obj,
  ...(obj.InstanceConnectionPortRange && {
    InstanceConnectionPortRange: ConnectionPortRangeFilterSensitiveLog(obj.InstanceConnectionPortRange),
  }),
  ...(obj.InstanceInboundPermissions && {
    InstanceInboundPermissions: obj.InstanceInboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ContainerPortRangeFilterSensitiveLog = (obj: ContainerPortRange): any => ({
  ...obj,
  ...(obj.FromPort && { FromPort: SENSITIVE_STRING }),
  ...(obj.ToPort && { ToPort: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContainerPortConfigurationFilterSensitiveLog = (obj: ContainerPortConfiguration): any => ({
  ...obj,
  ...(obj.ContainerPortRanges && {
    ContainerPortRanges: obj.ContainerPortRanges.map((item) => ContainerPortRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GameServerContainerDefinitionFilterSensitiveLog = (obj: GameServerContainerDefinition): any => ({
  ...obj,
  ...(obj.PortConfiguration && {
    PortConfiguration: ContainerPortConfigurationFilterSensitiveLog(obj.PortConfiguration),
  }),
});

/**
 * @internal
 */
export const SupportContainerDefinitionFilterSensitiveLog = (obj: SupportContainerDefinition): any => ({
  ...obj,
  ...(obj.PortConfiguration && {
    PortConfiguration: ContainerPortConfigurationFilterSensitiveLog(obj.PortConfiguration),
  }),
});

/**
 * @internal
 */
export const ContainerGroupDefinitionFilterSensitiveLog = (obj: ContainerGroupDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBuildOutputFilterSensitiveLog = (obj: CreateBuildOutput): any => ({
  ...obj,
  ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateContainerFleetInputFilterSensitiveLog = (obj: CreateContainerFleetInput): any => ({
  ...obj,
  ...(obj.InstanceConnectionPortRange && {
    InstanceConnectionPortRange: ConnectionPortRangeFilterSensitiveLog(obj.InstanceConnectionPortRange),
  }),
  ...(obj.InstanceInboundPermissions && {
    InstanceInboundPermissions: obj.InstanceInboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateContainerFleetOutputFilterSensitiveLog = (obj: CreateContainerFleetOutput): any => ({
  ...obj,
  ...(obj.ContainerFleet && { ContainerFleet: ContainerFleetFilterSensitiveLog(obj.ContainerFleet) }),
});

/**
 * @internal
 */
export const GameServerContainerDefinitionInputFilterSensitiveLog = (obj: GameServerContainerDefinitionInput): any => ({
  ...obj,
  ...(obj.PortConfiguration && {
    PortConfiguration: ContainerPortConfigurationFilterSensitiveLog(obj.PortConfiguration),
  }),
});

/**
 * @internal
 */
export const SupportContainerDefinitionInputFilterSensitiveLog = (obj: SupportContainerDefinitionInput): any => ({
  ...obj,
  ...(obj.PortConfiguration && {
    PortConfiguration: ContainerPortConfigurationFilterSensitiveLog(obj.PortConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateContainerGroupDefinitionInputFilterSensitiveLog = (
  obj: CreateContainerGroupDefinitionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContainerGroupDefinitionOutputFilterSensitiveLog = (
  obj: CreateContainerGroupDefinitionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetInputFilterSensitiveLog = (obj: CreateFleetInput): any => ({
  ...obj,
  ...(obj.EC2InboundPermissions && {
    EC2InboundPermissions: obj.EC2InboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GameSessionFilterSensitiveLog = (obj: GameSession): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGameSessionOutputFilterSensitiveLog = (obj: CreateGameSessionOutput): any => ({
  ...obj,
  ...(obj.GameSession && { GameSession: GameSessionFilterSensitiveLog(obj.GameSession) }),
});

/**
 * @internal
 */
export const CreatePlayerSessionInputFilterSensitiveLog = (obj: CreatePlayerSessionInput): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlayerSessionFilterSensitiveLog = (obj: PlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePlayerSessionOutputFilterSensitiveLog = (obj: CreatePlayerSessionOutput): any => ({
  ...obj,
  ...(obj.PlayerSession && { PlayerSession: PlayerSessionFilterSensitiveLog(obj.PlayerSession) }),
});

/**
 * @internal
 */
export const CreatePlayerSessionsInputFilterSensitiveLog = (obj: CreatePlayerSessionsInput): any => ({
  ...obj,
  ...(obj.PlayerIds && { PlayerIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePlayerSessionsOutputFilterSensitiveLog = (obj: CreatePlayerSessionsOutput): any => ({
  ...obj,
  ...(obj.PlayerSessions && {
    PlayerSessions: obj.PlayerSessions.map((item) => PlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeComputeOutputFilterSensitiveLog = (obj: DescribeComputeOutput): any => ({
  ...obj,
  ...(obj.Compute && { Compute: ComputeFilterSensitiveLog(obj.Compute) }),
});

/**
 * @internal
 */
export const DescribeContainerFleetOutputFilterSensitiveLog = (obj: DescribeContainerFleetOutput): any => ({
  ...obj,
  ...(obj.ContainerFleet && { ContainerFleet: ContainerFleetFilterSensitiveLog(obj.ContainerFleet) }),
});

/**
 * @internal
 */
export const DescribeContainerGroupDefinitionOutputFilterSensitiveLog = (
  obj: DescribeContainerGroupDefinitionOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetPortSettingsOutputFilterSensitiveLog = (obj: DescribeFleetPortSettingsOutput): any => ({
  ...obj,
  ...(obj.InboundPermissions && {
    InboundPermissions: obj.InboundPermissions.map((item) => IpPermissionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GameSessionDetailFilterSensitiveLog = (obj: GameSessionDetail): any => ({
  ...obj,
  ...(obj.GameSession && { GameSession: GameSessionFilterSensitiveLog(obj.GameSession) }),
});

/**
 * @internal
 */
export const DescribeGameSessionDetailsOutputFilterSensitiveLog = (obj: DescribeGameSessionDetailsOutput): any => ({
  ...obj,
  ...(obj.GameSessionDetails && {
    GameSessionDetails: obj.GameSessionDetails.map((item) => GameSessionDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PlacedPlayerSessionFilterSensitiveLog = (obj: PlacedPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlayerLatencyFilterSensitiveLog = (obj: PlayerLatency): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GameSessionPlacementFilterSensitiveLog = (obj: GameSessionPlacement): any => ({
  ...obj,
  ...(obj.PlayerLatencies && {
    PlayerLatencies: obj.PlayerLatencies.map((item) => PlayerLatencyFilterSensitiveLog(item)),
  }),
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Port && { Port: SENSITIVE_STRING }),
  ...(obj.PlacedPlayerSessions && {
    PlacedPlayerSessions: obj.PlacedPlayerSessions.map((item) => PlacedPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeGameSessionPlacementOutputFilterSensitiveLog = (obj: DescribeGameSessionPlacementOutput): any => ({
  ...obj,
  ...(obj.GameSessionPlacement && {
    GameSessionPlacement: GameSessionPlacementFilterSensitiveLog(obj.GameSessionPlacement),
  }),
});

/**
 * @internal
 */
export const DescribeGameSessionsOutputFilterSensitiveLog = (obj: DescribeGameSessionsOutput): any => ({
  ...obj,
  ...(obj.GameSessions && { GameSessions: obj.GameSessions.map((item) => GameSessionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeInstancesOutputFilterSensitiveLog = (obj: DescribeInstancesOutput): any => ({
  ...obj,
  ...(obj.Instances && { Instances: obj.Instances.map((item) => InstanceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MatchedPlayerSessionFilterSensitiveLog = (obj: MatchedPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GameSessionConnectionInfoFilterSensitiveLog = (obj: GameSessionConnectionInfo): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.MatchedPlayerSessions && {
    MatchedPlayerSessions: obj.MatchedPlayerSessions.map((item) => MatchedPlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PlayerFilterSensitiveLog = (obj: Player): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MatchmakingTicketFilterSensitiveLog = (obj: MatchmakingTicket): any => ({
  ...obj,
  ...(obj.Players && { Players: obj.Players.map((item) => PlayerFilterSensitiveLog(item)) }),
  ...(obj.GameSessionConnectionInfo && {
    GameSessionConnectionInfo: GameSessionConnectionInfoFilterSensitiveLog(obj.GameSessionConnectionInfo),
  }),
});

/**
 * @internal
 */
export const DescribeMatchmakingOutputFilterSensitiveLog = (obj: DescribeMatchmakingOutput): any => ({
  ...obj,
  ...(obj.TicketList && { TicketList: obj.TicketList.map((item) => MatchmakingTicketFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribePlayerSessionsInputFilterSensitiveLog = (obj: DescribePlayerSessionsInput): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribePlayerSessionsOutputFilterSensitiveLog = (obj: DescribePlayerSessionsOutput): any => ({
  ...obj,
  ...(obj.PlayerSessions && {
    PlayerSessions: obj.PlayerSessions.map((item) => PlayerSessionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DesiredPlayerSessionFilterSensitiveLog = (obj: DesiredPlayerSession): any => ({
  ...obj,
  ...(obj.PlayerId && { PlayerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetComputeAccessOutputFilterSensitiveLog = (obj: GetComputeAccessOutput): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InstanceCredentialsFilterSensitiveLog = (obj: InstanceCredentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceAccessFilterSensitiveLog = (obj: InstanceAccess): any => ({
  ...obj,
  ...(obj.IpAddress && { IpAddress: SENSITIVE_STRING }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetInstanceAccessOutputFilterSensitiveLog = (obj: GetInstanceAccessOutput): any => ({
  ...obj,
  ...(obj.InstanceAccess && { InstanceAccess: InstanceAccessFilterSensitiveLog(obj.InstanceAccess) }),
});

/**
 * @internal
 */
export const ListComputeOutputFilterSensitiveLog = (obj: ListComputeOutput): any => ({
  ...obj,
  ...(obj.ComputeList && { ComputeList: obj.ComputeList.map((item) => ComputeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListContainerFleetsOutputFilterSensitiveLog = (obj: ListContainerFleetsOutput): any => ({
  ...obj,
  ...(obj.ContainerFleets && {
    ContainerFleets: obj.ContainerFleets.map((item) => ContainerFleetFilterSensitiveLog(item)),
  }),
});
