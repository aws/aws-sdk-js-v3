import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface AcceptMatchInput {
  __type?: "AcceptMatchInput";
  /**
   *
   *         <p>Player response to the proposed match.</p>
   *
   */
  AcceptanceType: AcceptanceType | string | undefined;

  /**
   *
   *         <p>Unique identifier for a player delivering the response. This parameter can include one or multiple
   *             player IDs.</p>
   *
   */
  PlayerIds: Array<string> | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this
   *             request will fail.</p>
   *
   */
  TicketId: string | undefined;
}

export namespace AcceptMatchInput {
  export function isa(o: any): o is AcceptMatchInput {
    return _smithy.isa(o, "AcceptMatchInput");
  }
}

export interface AcceptMatchOutput extends $MetadataBearer {
  __type?: "AcceptMatchOutput";
}

export namespace AcceptMatchOutput {
  export function isa(o: any): o is AcceptMatchOutput {
    return _smithy.isa(o, "AcceptMatchOutput");
  }
}

export type AcceptanceType = "ACCEPT" | "REJECT";

/**
 *
 *         <p>Properties describing a fleet alias.</p>
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
 *
 */
export interface Alias {
  __type?: "Alias";
  /**
   *
   *         <p>Unique identifier for an alias; alias ARNs are unique across all regions.</p>
   *
   */
  AliasArn?: string;

  /**
   *
   *         <p>Unique identifier for an alias; alias IDs are unique within a region.</p>
   *
   */
  AliasId?: string;

  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Human-readable description of an alias.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  LastUpdatedTime?: Date;

  /**
   *
   *         <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Alias configuration for the alias, including routing type and settings.</p>
   *
   */
  RoutingStrategy?: RoutingStrategy;
}

export namespace Alias {
  export function isa(o: any): o is Alias {
    return _smithy.isa(o, "Alias");
  }
}

/**
 *
 *         <p>Values for use in <a>Player</a> attribute key:value pairs. This object lets
 *             you specify an attribute value using any of the valid data types: string, number, string
 *             array, or data map. Each <code>AttributeValue</code> object can use only one of the
 *             available properties.</p>
 *
 */
export interface AttributeValue {
  __type?: "AttributeValue";
  /**
   *
   *         <p>For number values, expressed as double.</p>
   *
   */
  N?: number;

  /**
   *
   *         <p>For single string values. Maximum string length is 100 characters.</p>
   *
   */
  S?: string;

  /**
   *
   *         <p>For a map of up to 10 data type:value pairs. Maximum length for each string value
   *             is 100 characters. </p>
   *
   */
  SDM?: { [key: string]: number };

  /**
   *
   *         <p>For a list of up to 10 strings. Maximum length for each string is 100 characters.
   *             Duplicate values are not recognized; all occurrences of the repeated value after the
   *             first of a repeated value are ignored.</p>
   *
   */
  SL?: Array<string>;
}

export namespace AttributeValue {
  export function isa(o: any): o is AttributeValue {
    return _smithy.isa(o, "AttributeValue");
  }
}

/**
 *
 *         <p>Temporary access credentials used for uploading game build files to Amazon GameLift. They
 *             are valid for a limited time. If they expire before you upload your game build, get a
 *             new set by calling <a>RequestUploadCredentials</a>.</p>
 *
 */
export interface AwsCredentials {
  __type?: "AwsCredentials";
  /**
   *
   *         <p>Temporary key allowing access to the Amazon GameLift S3 account.</p>
   *
   */
  AccessKeyId?: string;

  /**
   *
   *         <p>Temporary secret key allowing access to the Amazon GameLift S3 account.</p>
   *
   */
  SecretAccessKey?: string;

  /**
   *
   *         <p>Token used to associate a specific build ID with the files uploaded using these
   *             credentials.</p>
   *
   */
  SessionToken?: string;
}

export namespace AwsCredentials {
  export function isa(o: any): o is AwsCredentials {
    return _smithy.isa(o, "AwsCredentials");
  }
}

export enum BackfillMode {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL"
}

/**
 *
 *         <p>Properties describing a custom game build.</p>
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
 *
 */
export interface Build {
  __type?: "Build";
  /**
   *
   *         <p>Unique identifier for a build.</p>
   *
   */
  BuildId?: string;

  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Descriptive label that is associated with a build. Build names do not need to be unique. It can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build.</p>
   *
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   *
   *         <p>File size of the uploaded game build, expressed in bytes. When the build status is
   *                 <code>INITIALIZED</code>, this value is 0.</p>
   *
   */
  SizeOnDisk?: number;

  /**
   *
   *         <p>Current status of the build.</p>
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
   *
   */
  Status?: BuildStatus | string;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique. This value can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>
   *
   */
  Version?: string;
}

export namespace Build {
  export function isa(o: any): o is Build {
    return _smithy.isa(o, "Build");
  }
}

export enum BuildStatus {
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  READY = "READY"
}

export interface CertificateConfiguration {
  __type?: "CertificateConfiguration";
  CertificateType: CertificateType | string | undefined;
}

export namespace CertificateConfiguration {
  export function isa(o: any): o is CertificateConfiguration {
    return _smithy.isa(o, "CertificateConfiguration");
  }
}

export enum CertificateType {
  Disabled = "DISABLED",
  Generated = "GENERATED"
}

export enum ComparisonOperatorType {
  GreaterThanOrEqualToThreshold = "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold = "GreaterThanThreshold",
  LessThanOrEqualToThreshold = "LessThanOrEqualToThreshold",
  LessThanThreshold = "LessThanThreshold"
}

/**
 *
 *         <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateAliasInput {
  __type?: "CreateAliasInput";
  /**
   *
   *         <p>Human-readable description of an alias.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Object that specifies the fleet and routing type to use for the alias.</p>
   *
   */
  RoutingStrategy: RoutingStrategy | undefined;
}

export namespace CreateAliasInput {
  export function isa(o: any): o is CreateAliasInput {
    return _smithy.isa(o, "CreateAliasInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateAliasOutput extends $MetadataBearer {
  __type?: "CreateAliasOutput";
  /**
   *
   *         <p>Object that describes the newly created alias record.</p>
   *
   */
  Alias?: Alias;
}

export namespace CreateAliasOutput {
  export function isa(o: any): o is CreateAliasOutput {
    return _smithy.isa(o, "CreateAliasOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateBuildInput {
  __type?: "CreateBuildInput";
  /**
   *
   *         <p>Descriptive label that is associated with a build. Build names do not need to be unique. You can use <a>UpdateBuild</a> to change this value later.
   *         </p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build. If your game
   *             build contains multiple executables, they all must run on the same operating system. If
   *             an operating system is not specified when creating a build, Amazon GameLift uses the
   *             default value (WINDOWS_2012). This value cannot be changed later.</p>
   *
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   *
   *         <p>Information indicating where your game build files are stored. Use this parameter
   *             only when creating a build with files stored in an Amazon S3 bucket that you own. The storage
   *             location must specify an Amazon S3 bucket name and key, as well as a the ARN for a role that you set up
   *             to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket must be in the same region
   *             that you want to create a new build in.</p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique. You can use <a>UpdateBuild</a> to change this value later.
   *         </p>
   *
   */
  Version?: string;
}

export namespace CreateBuildInput {
  export function isa(o: any): o is CreateBuildInput {
    return _smithy.isa(o, "CreateBuildInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateBuildOutput extends $MetadataBearer {
  __type?: "CreateBuildOutput";
  /**
   *
   *         <p>The newly created build record, including a unique build ID and status. </p>
   *
   */
  Build?: Build;

  /**
   *
   *         <p>Amazon S3 location for your game build file, including bucket name and
   *             key.</p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>This element is returned only when the operation is called without a storage
   *             location. It contains credentials to use when you are uploading a build file to an Amazon S3
   *             bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these
   *             credentials, call <a>RequestUploadCredentials</a>. </p>
   *
   */
  UploadCredentials?: AwsCredentials;
}

export namespace CreateBuildOutput {
  export function isa(o: any): o is CreateBuildOutput {
    return _smithy.isa(o, "CreateBuildOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateFleetInput {
  __type?: "CreateFleetInput";
  /**
   *
   *         <p>Unique identifier for a build to be deployed on the new fleet. The custom game server build must have been successfully
   *             uploaded to Amazon GameLift and be in a <code>READY</code> status. This fleet setting cannot be
   *             changed once the fleet is created.</p>
   *
   */
  BuildId?: string;

  CertificateConfiguration?: CertificateConfiguration;
  /**
   *
   *         <p>Human-readable description of a fleet.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Range of IP addresses and port settings that permit inbound traffic to access
   *             game sessions that running on the fleet. For fleets using a custom game build,
   *             this parameter is required before game sessions running on the fleet can accept
   *             connections. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges
   *             for use by the Realtime servers. You can specify multiple permission settings
   *             or add more by updating the fleet.</p>
   *
   */
  EC2InboundPermissions?: Array<IpPermission>;

  /**
   *
   *         <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   *
   */
  EC2InstanceType: EC2InstanceType | string | undefined;

  /**
   *
   *         <p>Indicates whether to use on-demand instances or spot instances for this fleet. If
   *             empty, the default is ON_DEMAND. Both categories of instances use identical hardware and
   *             configurations based on the instance type selected for this fleet. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot">
   *                 On-Demand versus Spot Instances</a>. </p>
   *
   */
  FleetType?: FleetType | string;

  /**
   *
   *         <p>Unique identifier for an AWS IAM role that manages access to your AWS services.
   *         With an instance role ARN set, any application that runs on an instance in this fleet can assume the role,
   *         including install scripts, server processes, daemons (background processes). Create a role or look up a role's
   *         ARN using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the AWS Management Console.
   *         Learn more about using on-box credentials for your game servers at
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Access external resources from a game server</a>.</p>
   *
   */
  InstanceRoleArn?: string;

  /**
   *
   *         <p>This parameter is no longer used. Instead, to specify where Amazon GameLift should store log
   *             files once a server process shuts down, use the Amazon GameLift server API
   *                 <code>ProcessReady()</code> and specify one or more directory paths in
   *                 <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. </p>
   *
   */
  LogPaths?: Array<string>;

  /**
   *
   *         <p>Name of an Amazon CloudWatch metric group to add this fleet to. A metric group
   *             aggregates the metrics for all fleets in the group. Specify an existing metric group
   *             name, or provide a new name to create a new metric group. A fleet can only be included
   *             in one metric group at a time. </p>
   *
   */
  MetricGroups?: Array<string>;

  /**
   *
   *         <p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Game session protection policy to apply to all instances in this fleet. If this
   *             parameter is not set, instances in this fleet default to no protection. You can change a
   *             fleet's protection policy using <a>UpdateFleetAttributes</a>, but this change
   *             will only affect sessions created after the policy change. You can also set protection
   *             for individual instances using <a>UpdateGameSession</a>.</p>
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
   *
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   *
   *         <p>Unique identifier for the AWS account with the VPC that you want to peer your
   *             Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account
   *             settings. </p>
   *
   */
  PeerVpcAwsAccountId?: string;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>. </p>
   *
   */
  PeerVpcId?: string;

  /**
   *
   *         <p>Policy that limits the number of game sessions an individual player can create over
   *             a span of time for this fleet.</p>
   *
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   *
   *         <p>Instructions for launching server processes on each instance in the fleet. Server processes run
   *             either a custom game build executable or a Realtime Servers script. The
   *             run-time configuration lists the types of server processes to run on an instance and includes
   *             the following configuration settings: the server executable or launch script file, launch parameters, and
   *             the number of processes to run concurrently on each instance.
   *             A CreateFleet request must include a run-time configuration with at least one server
   *             process configuration.</p>
   *
   */
  RuntimeConfiguration?: RuntimeConfiguration;

  /**
   *
   *         <p>Unique identifier for a Realtime script to be deployed on the new fleet. The Realtime script must have been successfully
   *             uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is
   *             created.</p>
   *
   */
  ScriptId?: string;

  /**
   *
   *         <p>This parameter is no longer used. Instead, specify server launch parameters in the
   *                 <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch
   *             path and launch parameters instead of a run-time configuration will continue to
   *             work.)</p>
   *
   */
  ServerLaunchParameters?: string;

  /**
   *
   *         <p>This parameter is no longer used. Instead, specify a server launch path using the
   *                 <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch
   *             path and launch parameters instead of a run-time configuration will continue to
   *             work.)</p>
   *
   */
  ServerLaunchPath?: string;
}

export namespace CreateFleetInput {
  export function isa(o: any): o is CreateFleetInput {
    return _smithy.isa(o, "CreateFleetInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateFleetOutput extends $MetadataBearer {
  __type?: "CreateFleetOutput";
  /**
   *
   *         <p>Properties for the newly created fleet.</p>
   *
   */
  FleetAttributes?: FleetAttributes;
}

export namespace CreateFleetOutput {
  export function isa(o: any): o is CreateFleetOutput {
    return _smithy.isa(o, "CreateFleetOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateGameSessionInput {
  __type?: "CreateGameSessionInput";
  /**
   *
   *         <p>Unique identifier for an alias associated with the fleet to create a game session in. Each request must
   *             reference either a fleet ID or alias ID, but not both.</p>
   *
   */
  AliasId?: string;

  /**
   *
   *         <p>Unique identifier for a player or entity creating the game session. This ID is used to enforce a
   *             resource protection policy (if one exists) that limits the number of concurrent active
   *             game sessions one player can have.</p>
   *
   */
  CreatorId?: string;

  /**
   *
   *         <p>Unique identifier for a fleet to create a game session in. Each request must reference either a fleet ID or
   *             alias ID, but not both.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *         <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *         <p>
   *             <i>This parameter is no longer preferred. Please use
   *                     <code>IdempotencyToken</code> instead.</i> Custom string that uniquely
   *             identifies a request for a new game session. Maximum token length is 48 characters. If
   *             provided, this string is included in the new game session's ID. (A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.) </p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *         <p>Custom string that uniquely identifies a request for a new game session. Maximum
   *             token length is 48 characters. If provided, this string is included in the new game
   *             session's ID. (A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.) Idempotency tokens remain in use for 30 days after a game
   *             session has ended; game session objects are retained for this time period and then
   *             deleted.</p>
   *
   */
  IdempotencyToken?: string;

  /**
   *
   *         <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   *
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   *
   *         <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   *
   */
  Name?: string;
}

export namespace CreateGameSessionInput {
  export function isa(o: any): o is CreateGameSessionInput {
    return _smithy.isa(o, "CreateGameSessionInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateGameSessionOutput extends $MetadataBearer {
  __type?: "CreateGameSessionOutput";
  /**
   *
   *         <p>Object that describes the newly created game session record.</p>
   *
   */
  GameSession?: GameSession;
}

export namespace CreateGameSessionOutput {
  export function isa(o: any): o is CreateGameSessionOutput {
    return _smithy.isa(o, "CreateGameSessionOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateGameSessionQueueInput {
  __type?: "CreateGameSessionQueueInput";
  /**
   *
   *         <p>List of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>
   *
   */
  Destinations?: Array<GameSessionQueueDestination>;

  /**
   *
   *         <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, it is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. A player latency policy must set a value for
   *             MaximumIndividualPlayerLatencyMilliseconds; if none is set, this API requests will
   *             fail.</p>
   *
   */
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;

  /**
   *
   *         <p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   *
   */
  TimeoutInSeconds?: number;
}

export namespace CreateGameSessionQueueInput {
  export function isa(o: any): o is CreateGameSessionQueueInput {
    return _smithy.isa(o, "CreateGameSessionQueueInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateGameSessionQueueOutput extends $MetadataBearer {
  __type?: "CreateGameSessionQueueOutput";
  /**
   *
   *         <p>Object that describes the newly created game session queue.</p>
   *
   */
  GameSessionQueue?: GameSessionQueue;
}

export namespace CreateGameSessionQueueOutput {
  export function isa(o: any): o is CreateGameSessionQueueOutput {
    return _smithy.isa(o, "CreateGameSessionQueueOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateMatchmakingConfigurationInput {
  __type?: "CreateMatchmakingConfigurationInput";
  /**
   *
   *         <p>Flag that determines whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE.</p>
   *
   */
  AcceptanceRequired: boolean | undefined;

  /**
   *
   *         <p>Length of time (in seconds) to wait for players to accept a proposed match. If any
   *             player rejects the match or fails to accept before the timeout, the ticket continues to
   *             look for an acceptable match.</p>
   *
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   *
   *         <p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>
   *
   */
  AdditionalPlayerCount?: number;

  /**
   *
   *         <p>Method used to backfill game sessions created with this matchmaking configuration.
   *             Specify MANUAL when your game manages backfill requests manually or does not use the match
   *             backfill feature. Specify AUTOMATIC to have GameLift create a
   *             <a>StartMatchBackfill</a> request whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html"> Backfill Existing Games
   *                 with FlexMatch</a>. </p>
   *
   */
  BackfillMode?: BackfillMode | string;

  /**
   *
   *         <p>Information to be added to all events related to this matchmaking configuration.
   *         </p>
   *
   */
  CustomEventData?: string;

  /**
   *
   *         <p>Meaningful description of the matchmaking configuration. </p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *         <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match.</p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:<region>:<aws account>:gamesessionqueue/<queue name></code>. These queues are used when placing game sessions for matches that are
   *             created with this matchmaking configuration. Queues can be located in any
   *             region.</p>
   *
   */
  GameSessionQueueArns: Array<string> | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a
   *             matchmaking request or ticket.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>SNS topic ARN that is set up to receive matchmaking notifications.</p>
   *
   */
  NotificationTarget?: string;

  /**
   *
   *         <p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before
   *             timing out. Requests that fail due to timing out can be resubmitted as needed.</p>
   *
   */
  RequestTimeoutSeconds: number | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use
   *             rule sets that are defined in the same region.</p>
   *
   */
  RuleSetName: string | undefined;
}

export namespace CreateMatchmakingConfigurationInput {
  export function isa(o: any): o is CreateMatchmakingConfigurationInput {
    return _smithy.isa(o, "CreateMatchmakingConfigurationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateMatchmakingConfigurationOutput extends $MetadataBearer {
  __type?: "CreateMatchmakingConfigurationOutput";
  /**
   *
   *         <p>Object that describes the newly created matchmaking configuration.</p>
   *
   */
  Configuration?: MatchmakingConfiguration;
}

export namespace CreateMatchmakingConfigurationOutput {
  export function isa(o: any): o is CreateMatchmakingConfigurationOutput {
    return _smithy.isa(o, "CreateMatchmakingConfigurationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateMatchmakingRuleSetInput {
  __type?: "CreateMatchmakingRuleSetInput";
  /**
   *
   *         <p>Unique identifier for a matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name
   *             value. (Note: The rule set name is different from the optional "name" field in the rule
   *             set body.) </p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Collection of matchmaking rules, formatted as a JSON string. Comments are not allowed
   *             in JSON, but most elements support a description field.</p>
   *
   */
  RuleSetBody: string | undefined;
}

export namespace CreateMatchmakingRuleSetInput {
  export function isa(o: any): o is CreateMatchmakingRuleSetInput {
    return _smithy.isa(o, "CreateMatchmakingRuleSetInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateMatchmakingRuleSetOutput extends $MetadataBearer {
  __type?: "CreateMatchmakingRuleSetOutput";
  /**
   *
   *         <p>Object that describes the newly created matchmaking rule set.</p>
   *
   */
  RuleSet: MatchmakingRuleSet | undefined;
}

export namespace CreateMatchmakingRuleSetOutput {
  export function isa(o: any): o is CreateMatchmakingRuleSetOutput {
    return _smithy.isa(o, "CreateMatchmakingRuleSetOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface CreatePlayerSessionInput {
  __type?: "CreatePlayerSessionInput";
  /**
   *
   *          <p>Unique identifier for the game session to add a player to.</p>
   *
   */
  GameSessionId: string | undefined;

  /**
   *
   *          <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   *
   */
  PlayerData?: string;

  /**
   *
   *          <p>Unique identifier for a player. Player IDs are developer-defined.</p>
   *
   */
  PlayerId: string | undefined;
}

export namespace CreatePlayerSessionInput {
  export function isa(o: any): o is CreatePlayerSessionInput {
    return _smithy.isa(o, "CreatePlayerSessionInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreatePlayerSessionOutput extends $MetadataBearer {
  __type?: "CreatePlayerSessionOutput";
  /**
   *
   *          <p>Object that describes the newly created player session record.</p>
   *
   */
  PlayerSession?: PlayerSession;
}

export namespace CreatePlayerSessionOutput {
  export function isa(o: any): o is CreatePlayerSessionOutput {
    return _smithy.isa(o, "CreatePlayerSessionOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface CreatePlayerSessionsInput {
  __type?: "CreatePlayerSessionsInput";
  /**
   *
   *          <p>Unique identifier for the game session to add players to.</p>
   *
   */
  GameSessionId: string | undefined;

  /**
   *
   *          <p>Map of string pairs, each specifying a player ID and a set of developer-defined
   *         information related to the player. Amazon GameLift does not use this data, so it can be formatted
   *         as needed for use in the game. Player data strings for player IDs not included in the
   *         <code>PlayerIds</code> parameter are ignored. </p>
   *
   */
  PlayerDataMap?: { [key: string]: string };

  /**
   *
   *          <p>List of unique identifiers for the players to be added.</p>
   *
   */
  PlayerIds: Array<string> | undefined;
}

export namespace CreatePlayerSessionsInput {
  export function isa(o: any): o is CreatePlayerSessionsInput {
    return _smithy.isa(o, "CreatePlayerSessionsInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreatePlayerSessionsOutput extends $MetadataBearer {
  __type?: "CreatePlayerSessionsOutput";
  /**
   *
   *          <p>Collection of player session objects created for the added players.</p>
   *
   */
  PlayerSessions?: Array<PlayerSession>;
}

export namespace CreatePlayerSessionsOutput {
  export function isa(o: any): o is CreatePlayerSessionsOutput {
    return _smithy.isa(o, "CreatePlayerSessionsOutput");
  }
}

export interface CreateScriptInput {
  __type?: "CreateScriptInput";
  /**
   *
   *         <p>Descriptive label that is associated with a script. Script names do not need to be unique. You can use <a>UpdateScript</a> to change this value later.
   *         </p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the  Amazon S3 storage location. The S3
   *             bucket must be in the same region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version.  </p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique. You can use <a>UpdateScript</a> to change this value later.
   *         </p>
   *
   */
  Version?: string;

  /**
   *
   *         <p>Data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *         <p>When using the AWS CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the
   *             string "fileb://" to indicate that the file data is a binary object. For example: <code>--zip-file fileb://myRealtimeScript.zip</code>.</p>
   *
   */
  ZipFile?: Uint8Array;
}

export namespace CreateScriptInput {
  export function isa(o: any): o is CreateScriptInput {
    return _smithy.isa(o, "CreateScriptInput");
  }
}

export interface CreateScriptOutput extends $MetadataBearer {
  __type?: "CreateScriptOutput";
  /**
   *
   *         <p>The newly created script record with a unique script ID. The new script's storage
   *             location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket
   *             under your account, the storage location reflects the information that was provided in
   *             the <i>CreateScript</i> request; (2) If the script file was uploaded from
   *             a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift
   *             service.</p>
   *
   */
  Script?: Script;
}

export namespace CreateScriptOutput {
  export function isa(o: any): o is CreateScriptOutput {
    return _smithy.isa(o, "CreateScriptOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateVpcPeeringAuthorizationInput {
  __type?: "CreateVpcPeeringAuthorizationInput";
  /**
   *
   *         <p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   *
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *
   */
  PeerVpcId: string | undefined;
}

export namespace CreateVpcPeeringAuthorizationInput {
  export function isa(o: any): o is CreateVpcPeeringAuthorizationInput {
    return _smithy.isa(o, "CreateVpcPeeringAuthorizationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface CreateVpcPeeringAuthorizationOutput extends $MetadataBearer {
  __type?: "CreateVpcPeeringAuthorizationOutput";
  /**
   *
   *         <p>Details on the requested VPC peering authorization, including expiration.</p>
   *
   */
  VpcPeeringAuthorization?: VpcPeeringAuthorization;
}

export namespace CreateVpcPeeringAuthorizationOutput {
  export function isa(o: any): o is CreateVpcPeeringAuthorizationOutput {
    return _smithy.isa(o, "CreateVpcPeeringAuthorizationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface CreateVpcPeeringConnectionInput {
  __type?: "CreateVpcPeeringConnectionInput";
  /**
   *
   *         <p>Unique identifier for a fleet. This tells Amazon GameLift which GameLift VPC to peer with. </p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Unique identifier for the AWS account with the VPC that you want to peer your
   *             Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account
   *             settings.</p>
   *
   */
  PeerVpcAwsAccountId: string | undefined;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *
   */
  PeerVpcId: string | undefined;
}

export namespace CreateVpcPeeringConnectionInput {
  export function isa(o: any): o is CreateVpcPeeringConnectionInput {
    return _smithy.isa(o, "CreateVpcPeeringConnectionInput");
  }
}

export interface CreateVpcPeeringConnectionOutput extends $MetadataBearer {
  __type?: "CreateVpcPeeringConnectionOutput";
}

export namespace CreateVpcPeeringConnectionOutput {
  export function isa(o: any): o is CreateVpcPeeringConnectionOutput {
    return _smithy.isa(o, "CreateVpcPeeringConnectionOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteAliasInput {
  __type?: "DeleteAliasInput";
  /**
   *
   *         <p>Unique identifier for a fleet alias. Specify the alias you want to
   *             delete.</p>
   *
   */
  AliasId: string | undefined;
}

export namespace DeleteAliasInput {
  export function isa(o: any): o is DeleteAliasInput {
    return _smithy.isa(o, "DeleteAliasInput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteBuildInput {
  __type?: "DeleteBuildInput";
  /**
   *
   *         <p>Unique identifier for a build to delete.</p>
   *
   */
  BuildId: string | undefined;
}

export namespace DeleteBuildInput {
  export function isa(o: any): o is DeleteBuildInput {
    return _smithy.isa(o, "DeleteBuildInput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteFleetInput {
  __type?: "DeleteFleetInput";
  /**
   *
   *         <p>Unique identifier for a fleet to be deleted.</p>
   *
   */
  FleetId: string | undefined;
}

export namespace DeleteFleetInput {
  export function isa(o: any): o is DeleteFleetInput {
    return _smithy.isa(o, "DeleteFleetInput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteGameSessionQueueInput {
  __type?: "DeleteGameSessionQueueInput";
  /**
   *
   *         <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   *
   */
  Name: string | undefined;
}

export namespace DeleteGameSessionQueueInput {
  export function isa(o: any): o is DeleteGameSessionQueueInput {
    return _smithy.isa(o, "DeleteGameSessionQueueInput");
  }
}

export interface DeleteGameSessionQueueOutput extends $MetadataBearer {
  __type?: "DeleteGameSessionQueueOutput";
}

export namespace DeleteGameSessionQueueOutput {
  export function isa(o: any): o is DeleteGameSessionQueueOutput {
    return _smithy.isa(o, "DeleteGameSessionQueueOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteMatchmakingConfigurationInput {
  __type?: "DeleteMatchmakingConfigurationInput";
  /**
   *
   *         <p>Unique identifier for a matchmaking configuration</p>
   *
   */
  Name: string | undefined;
}

export namespace DeleteMatchmakingConfigurationInput {
  export function isa(o: any): o is DeleteMatchmakingConfigurationInput {
    return _smithy.isa(o, "DeleteMatchmakingConfigurationInput");
  }
}

export interface DeleteMatchmakingConfigurationOutput extends $MetadataBearer {
  __type?: "DeleteMatchmakingConfigurationOutput";
}

export namespace DeleteMatchmakingConfigurationOutput {
  export function isa(o: any): o is DeleteMatchmakingConfigurationOutput {
    return _smithy.isa(o, "DeleteMatchmakingConfigurationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteMatchmakingRuleSetInput {
  __type?: "DeleteMatchmakingRuleSetInput";
  /**
   *
   *         <p>Unique identifier for a matchmaking rule set to be deleted. (Note: The rule set name is different from the optional
   *             "name" field in the rule set body.) </p>
   *
   */
  Name: string | undefined;
}

export namespace DeleteMatchmakingRuleSetInput {
  export function isa(o: any): o is DeleteMatchmakingRuleSetInput {
    return _smithy.isa(o, "DeleteMatchmakingRuleSetInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DeleteMatchmakingRuleSetOutput extends $MetadataBearer {
  __type?: "DeleteMatchmakingRuleSetOutput";
}

export namespace DeleteMatchmakingRuleSetOutput {
  export function isa(o: any): o is DeleteMatchmakingRuleSetOutput {
    return _smithy.isa(o, "DeleteMatchmakingRuleSetOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteScalingPolicyInput {
  __type?: "DeleteScalingPolicyInput";
  /**
   *
   *         <p>Unique identifier for a fleet to be deleted.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   *
   */
  Name: string | undefined;
}

export namespace DeleteScalingPolicyInput {
  export function isa(o: any): o is DeleteScalingPolicyInput {
    return _smithy.isa(o, "DeleteScalingPolicyInput");
  }
}

export interface DeleteScriptInput {
  __type?: "DeleteScriptInput";
  /**
   *
   *         <p>Unique identifier for a Realtime script to delete.</p>
   *
   */
  ScriptId: string | undefined;
}

export namespace DeleteScriptInput {
  export function isa(o: any): o is DeleteScriptInput {
    return _smithy.isa(o, "DeleteScriptInput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteVpcPeeringAuthorizationInput {
  __type?: "DeleteVpcPeeringAuthorizationInput";
  /**
   *
   *         <p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   *
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *
   */
  PeerVpcId: string | undefined;
}

export namespace DeleteVpcPeeringAuthorizationInput {
  export function isa(o: any): o is DeleteVpcPeeringAuthorizationInput {
    return _smithy.isa(o, "DeleteVpcPeeringAuthorizationInput");
  }
}

export interface DeleteVpcPeeringAuthorizationOutput extends $MetadataBearer {
  __type?: "DeleteVpcPeeringAuthorizationOutput";
}

export namespace DeleteVpcPeeringAuthorizationOutput {
  export function isa(o: any): o is DeleteVpcPeeringAuthorizationOutput {
    return _smithy.isa(o, "DeleteVpcPeeringAuthorizationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DeleteVpcPeeringConnectionInput {
  __type?: "DeleteVpcPeeringConnectionInput";
  /**
   *
   *         <p>Unique identifier for a fleet. This value must match the fleet ID referenced in the VPC peering connection
   *             record.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Unique identifier for a VPC peering connection. This value is included in the <a>VpcPeeringConnection</a> object, which can be retrieved by calling <a>DescribeVpcPeeringConnections</a>.</p>
   *
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace DeleteVpcPeeringConnectionInput {
  export function isa(o: any): o is DeleteVpcPeeringConnectionInput {
    return _smithy.isa(o, "DeleteVpcPeeringConnectionInput");
  }
}

export interface DeleteVpcPeeringConnectionOutput extends $MetadataBearer {
  __type?: "DeleteVpcPeeringConnectionOutput";
}

export namespace DeleteVpcPeeringConnectionOutput {
  export function isa(o: any): o is DeleteVpcPeeringConnectionOutput {
    return _smithy.isa(o, "DeleteVpcPeeringConnectionOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeAliasInput {
  __type?: "DescribeAliasInput";
  /**
   *
   *         <p>Unique identifier for a fleet alias. Specify the alias you want to
   *             retrieve.</p>
   *
   */
  AliasId: string | undefined;
}

export namespace DescribeAliasInput {
  export function isa(o: any): o is DescribeAliasInput {
    return _smithy.isa(o, "DescribeAliasInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeAliasOutput extends $MetadataBearer {
  __type?: "DescribeAliasOutput";
  /**
   *
   *         <p>Object that contains the requested alias.</p>
   *
   */
  Alias?: Alias;
}

export namespace DescribeAliasOutput {
  export function isa(o: any): o is DescribeAliasOutput {
    return _smithy.isa(o, "DescribeAliasOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeBuildInput {
  __type?: "DescribeBuildInput";
  /**
   *
   *         <p>Unique identifier for a build to retrieve properties for.</p>
   *
   */
  BuildId: string | undefined;
}

export namespace DescribeBuildInput {
  export function isa(o: any): o is DescribeBuildInput {
    return _smithy.isa(o, "DescribeBuildInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeBuildOutput extends $MetadataBearer {
  __type?: "DescribeBuildOutput";
  /**
   *
   *         <p>Set of properties describing the requested build.</p>
   *
   */
  Build?: Build;
}

export namespace DescribeBuildOutput {
  export function isa(o: any): o is DescribeBuildOutput {
    return _smithy.isa(o, "DescribeBuildOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeEC2InstanceLimitsInput {
  __type?: "DescribeEC2InstanceLimitsInput";
  /**
   *
   *         <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions. Leave this parameter blank to retrieve limits for all
   *             types.</p>
   *
   */
  EC2InstanceType?: EC2InstanceType | string;
}

export namespace DescribeEC2InstanceLimitsInput {
  export function isa(o: any): o is DescribeEC2InstanceLimitsInput {
    return _smithy.isa(o, "DescribeEC2InstanceLimitsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeEC2InstanceLimitsOutput extends $MetadataBearer {
  __type?: "DescribeEC2InstanceLimitsOutput";
  /**
   *
   *         <p>Object that contains the maximum number of instances for the specified instance
   *             type.</p>
   *
   */
  EC2InstanceLimits?: Array<EC2InstanceLimit>;
}

export namespace DescribeEC2InstanceLimitsOutput {
  export function isa(o: any): o is DescribeEC2InstanceLimitsOutput {
    return _smithy.isa(o, "DescribeEC2InstanceLimitsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeFleetAttributesInput {
  __type?: "DescribeFleetAttributesInput";
  /**
   *
   *         <p>Unique identifier for a fleet(s) to retrieve attributes for. To request attributes for all fleets, leave
   *             this parameter empty.</p>
   *
   */
  FleetIds?: Array<string>;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetAttributesInput {
  export function isa(o: any): o is DescribeFleetAttributesInput {
    return _smithy.isa(o, "DescribeFleetAttributesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeFleetAttributesOutput extends $MetadataBearer {
  __type?: "DescribeFleetAttributesOutput";
  /**
   *
   *         <p>Collection of objects containing attribute metadata for each requested fleet
   *             ID.</p>
   *
   */
  FleetAttributes?: Array<FleetAttributes>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetAttributesOutput {
  export function isa(o: any): o is DescribeFleetAttributesOutput {
    return _smithy.isa(o, "DescribeFleetAttributesOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeFleetCapacityInput {
  __type?: "DescribeFleetCapacityInput";
  /**
   *
   *         <p>Unique identifier for a fleet(s) to retrieve capacity information for. To request capacity information for
   *             all fleets, leave this parameter empty.</p>
   *
   */
  FleetIds?: Array<string>;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetCapacityInput {
  export function isa(o: any): o is DescribeFleetCapacityInput {
    return _smithy.isa(o, "DescribeFleetCapacityInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeFleetCapacityOutput extends $MetadataBearer {
  __type?: "DescribeFleetCapacityOutput";
  /**
   *
   *         <p>Collection of objects containing capacity information for each requested fleet ID.
   *             Leave this parameter empty to retrieve capacity information for all fleets.</p>
   *
   */
  FleetCapacity?: Array<FleetCapacity>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetCapacityOutput {
  export function isa(o: any): o is DescribeFleetCapacityOutput {
    return _smithy.isa(o, "DescribeFleetCapacityOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeFleetEventsInput {
  __type?: "DescribeFleetEventsInput";
  /**
   *
   *         <p>Most recent date to retrieve event logs for. If no end time is specified, this call
   *             returns entries from the specified start time up to the present. Format is a number
   *             expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   *
   */
  EndTime?: Date;

  /**
   *
   *         <p>Unique identifier for a fleet to get event logs for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Earliest date to retrieve event logs for. If no start time is specified, this call
   *             returns entries starting from when the fleet was created to the specified end time.
   *             Format is a number expressed in Unix time as milliseconds (ex:
   *             "1469498468.057").</p>
   *
   */
  StartTime?: Date;
}

export namespace DescribeFleetEventsInput {
  export function isa(o: any): o is DescribeFleetEventsInput {
    return _smithy.isa(o, "DescribeFleetEventsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeFleetEventsOutput extends $MetadataBearer {
  __type?: "DescribeFleetEventsOutput";
  /**
   *
   *         <p>Collection of objects containing event log entries for the specified
   *             fleet.</p>
   *
   */
  Events?: Array<Event>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetEventsOutput {
  export function isa(o: any): o is DescribeFleetEventsOutput {
    return _smithy.isa(o, "DescribeFleetEventsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeFleetPortSettingsInput {
  __type?: "DescribeFleetPortSettingsInput";
  /**
   *
   *         <p>Unique identifier for a fleet to retrieve port settings for.</p>
   *
   */
  FleetId: string | undefined;
}

export namespace DescribeFleetPortSettingsInput {
  export function isa(o: any): o is DescribeFleetPortSettingsInput {
    return _smithy.isa(o, "DescribeFleetPortSettingsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeFleetPortSettingsOutput extends $MetadataBearer {
  __type?: "DescribeFleetPortSettingsOutput";
  /**
   *
   *         <p>Object that contains port settings for the requested fleet ID.</p>
   *
   */
  InboundPermissions?: Array<IpPermission>;
}

export namespace DescribeFleetPortSettingsOutput {
  export function isa(o: any): o is DescribeFleetPortSettingsOutput {
    return _smithy.isa(o, "DescribeFleetPortSettingsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeFleetUtilizationInput {
  __type?: "DescribeFleetUtilizationInput";
  /**
   *
   *         <p>Unique identifier for a fleet(s) to retrieve utilization data for. To request utilization data for all
   *             fleets, leave this parameter empty.</p>
   *
   */
  FleetIds?: Array<string>;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetUtilizationInput {
  export function isa(o: any): o is DescribeFleetUtilizationInput {
    return _smithy.isa(o, "DescribeFleetUtilizationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeFleetUtilizationOutput extends $MetadataBearer {
  __type?: "DescribeFleetUtilizationOutput";
  /**
   *
   *         <p>Collection of objects containing utilization information for each requested fleet
   *             ID.</p>
   *
   */
  FleetUtilization?: Array<FleetUtilization>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeFleetUtilizationOutput {
  export function isa(o: any): o is DescribeFleetUtilizationOutput {
    return _smithy.isa(o, "DescribeFleetUtilizationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeGameSessionDetailsInput {
  __type?: "DescribeGameSessionDetailsInput";
  /**
   *
   *         <p>Unique identifier for an alias associated with the fleet to retrieve all game sessions for.</p>
   *
   */
  AliasId?: string;

  /**
   *
   *         <p>Unique identifier for a fleet to retrieve all game sessions active on the fleet.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Unique identifier for the game session to retrieve.</p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   *
   */
  StatusFilter?: string;
}

export namespace DescribeGameSessionDetailsInput {
  export function isa(o: any): o is DescribeGameSessionDetailsInput {
    return _smithy.isa(o, "DescribeGameSessionDetailsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeGameSessionDetailsOutput extends $MetadataBearer {
  __type?: "DescribeGameSessionDetailsOutput";
  /**
   *
   *         <p>Collection of objects containing game session properties and the protection policy
   *             currently in force for each session matching the request.</p>
   *
   */
  GameSessionDetails?: Array<GameSessionDetail>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeGameSessionDetailsOutput {
  export function isa(o: any): o is DescribeGameSessionDetailsOutput {
    return _smithy.isa(o, "DescribeGameSessionDetailsOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeGameSessionPlacementInput {
  __type?: "DescribeGameSessionPlacementInput";
  /**
   *
   *          <p>Unique identifier for a game session placement to retrieve.</p>
   *
   */
  PlacementId: string | undefined;
}

export namespace DescribeGameSessionPlacementInput {
  export function isa(o: any): o is DescribeGameSessionPlacementInput {
    return _smithy.isa(o, "DescribeGameSessionPlacementInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeGameSessionPlacementOutput extends $MetadataBearer {
  __type?: "DescribeGameSessionPlacementOutput";
  /**
   *
   *          <p>Object that describes the requested game session placement.</p>
   *
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace DescribeGameSessionPlacementOutput {
  export function isa(o: any): o is DescribeGameSessionPlacementOutput {
    return _smithy.isa(o, "DescribeGameSessionPlacementOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeGameSessionQueuesInput {
  __type?: "DescribeGameSessionQueuesInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>List of queue names to retrieve information for. To request settings for all
   *             queues, leave this parameter empty.</p>
   *
   */
  Names?: Array<string>;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeGameSessionQueuesInput {
  export function isa(o: any): o is DescribeGameSessionQueuesInput {
    return _smithy.isa(o, "DescribeGameSessionQueuesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeGameSessionQueuesOutput extends $MetadataBearer {
  __type?: "DescribeGameSessionQueuesOutput";
  /**
   *
   *         <p>Collection of objects that describes the requested game session queues.</p>
   *
   */
  GameSessionQueues?: Array<GameSessionQueue>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeGameSessionQueuesOutput {
  export function isa(o: any): o is DescribeGameSessionQueuesOutput {
    return _smithy.isa(o, "DescribeGameSessionQueuesOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeGameSessionsInput {
  __type?: "DescribeGameSessionsInput";
  /**
   *
   *         <p>Unique identifier for an alias associated with the fleet to retrieve all game sessions for. </p>
   *
   */
  AliasId?: string;

  /**
   *
   *         <p>Unique identifier for a fleet to retrieve all game sessions for.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Unique identifier for the game session to retrieve. You can use either a <code>GameSessionId</code> or
   *                 <code>GameSessionArn</code> value. </p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   *
   */
  StatusFilter?: string;
}

export namespace DescribeGameSessionsInput {
  export function isa(o: any): o is DescribeGameSessionsInput {
    return _smithy.isa(o, "DescribeGameSessionsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeGameSessionsOutput extends $MetadataBearer {
  __type?: "DescribeGameSessionsOutput";
  /**
   *
   *         <p>Collection of objects containing game session properties for each session matching
   *             the request.</p>
   *
   */
  GameSessions?: Array<GameSession>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeGameSessionsOutput {
  export function isa(o: any): o is DescribeGameSessionsOutput {
    return _smithy.isa(o, "DescribeGameSessionsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeInstancesInput {
  __type?: "DescribeInstancesInput";
  /**
   *
   *         <p>Unique identifier for a fleet to retrieve instance information for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Unique identifier for an instance to retrieve. Specify an instance ID or leave
   *             blank to retrieve all instances in the fleet.</p>
   *
   */
  InstanceId?: string;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeInstancesInput {
  export function isa(o: any): o is DescribeInstancesInput {
    return _smithy.isa(o, "DescribeInstancesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeInstancesOutput extends $MetadataBearer {
  __type?: "DescribeInstancesOutput";
  /**
   *
   *         <p>Collection of objects containing properties for each instance returned.</p>
   *
   */
  Instances?: Array<Instance>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeInstancesOutput {
  export function isa(o: any): o is DescribeInstancesOutput {
    return _smithy.isa(o, "DescribeInstancesOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeMatchmakingConfigurationsInput {
  __type?: "DescribeMatchmakingConfigurationsInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Unique identifier for a matchmaking configuration(s) to retrieve. To request all existing configurations, leave this parameter
   *             empty.</p>
   *
   */
  Names?: Array<string>;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Unique identifier for a matchmaking rule set. Use this parameter to retrieve all matchmaking configurations that use this
   *             rule set.</p>
   *
   */
  RuleSetName?: string;
}

export namespace DescribeMatchmakingConfigurationsInput {
  export function isa(o: any): o is DescribeMatchmakingConfigurationsInput {
    return _smithy.isa(o, "DescribeMatchmakingConfigurationsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeMatchmakingConfigurationsOutput
  extends $MetadataBearer {
  __type?: "DescribeMatchmakingConfigurationsOutput";
  /**
   *
   *         <p>Collection of requested matchmaking configuration objects.</p>
   *
   */
  Configurations?: Array<MatchmakingConfiguration>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingConfigurationsOutput {
  export function isa(o: any): o is DescribeMatchmakingConfigurationsOutput {
    return _smithy.isa(o, "DescribeMatchmakingConfigurationsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeMatchmakingInput {
  __type?: "DescribeMatchmakingInput";
  /**
   *
   *         <p>Unique identifier for a matchmaking ticket. You can include up to 10 ID values. </p>
   *
   */
  TicketIds: Array<string> | undefined;
}

export namespace DescribeMatchmakingInput {
  export function isa(o: any): o is DescribeMatchmakingInput {
    return _smithy.isa(o, "DescribeMatchmakingInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeMatchmakingOutput extends $MetadataBearer {
  __type?: "DescribeMatchmakingOutput";
  /**
   *
   *         <p>Collection of existing matchmaking ticket objects matching the request.</p>
   *
   */
  TicketList?: Array<MatchmakingTicket>;
}

export namespace DescribeMatchmakingOutput {
  export function isa(o: any): o is DescribeMatchmakingOutput {
    return _smithy.isa(o, "DescribeMatchmakingOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeMatchmakingRuleSetsInput {
  __type?: "DescribeMatchmakingRuleSetsInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>List of one or more matchmaking rule set names to retrieve details for. (Note: The
   *             rule set name is different from the optional "name" field in the rule set body.)
   *         </p>
   *
   */
  Names?: Array<string>;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingRuleSetsInput {
  export function isa(o: any): o is DescribeMatchmakingRuleSetsInput {
    return _smithy.isa(o, "DescribeMatchmakingRuleSetsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeMatchmakingRuleSetsOutput extends $MetadataBearer {
  __type?: "DescribeMatchmakingRuleSetsOutput";
  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Collection of requested matchmaking rule set objects. </p>
   *
   */
  RuleSets: Array<MatchmakingRuleSet> | undefined;
}

export namespace DescribeMatchmakingRuleSetsOutput {
  export function isa(o: any): o is DescribeMatchmakingRuleSetsOutput {
    return _smithy.isa(o, "DescribeMatchmakingRuleSetsOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface DescribePlayerSessionsInput {
  __type?: "DescribePlayerSessionsInput";
  /**
   *
   *          <p>Unique identifier for the game session to retrieve player sessions for.</p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *          <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.</p>
   *
   */
  Limit?: number;

  /**
   *
   *          <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Unique identifier for a player to retrieve player sessions for.</p>
   *
   */
  PlayerId?: string;

  /**
   *
   *          <p>Unique identifier for a player session to retrieve.</p>
   *
   */
  PlayerSessionId?: string;

  /**
   *
   *          <p>Player session status to filter results on.</p>
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
   *
   */
  PlayerSessionStatusFilter?: string;
}

export namespace DescribePlayerSessionsInput {
  export function isa(o: any): o is DescribePlayerSessionsInput {
    return _smithy.isa(o, "DescribePlayerSessionsInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribePlayerSessionsOutput extends $MetadataBearer {
  __type?: "DescribePlayerSessionsOutput";
  /**
   *
   *          <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Collection of objects containing properties for each player session that matches
   *         the request.</p>
   *
   */
  PlayerSessions?: Array<PlayerSession>;
}

export namespace DescribePlayerSessionsOutput {
  export function isa(o: any): o is DescribePlayerSessionsOutput {
    return _smithy.isa(o, "DescribePlayerSessionsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeRuntimeConfigurationInput {
  __type?: "DescribeRuntimeConfigurationInput";
  /**
   *
   *         <p>Unique identifier for a fleet to get the run-time configuration for.</p>
   *
   */
  FleetId: string | undefined;
}

export namespace DescribeRuntimeConfigurationInput {
  export function isa(o: any): o is DescribeRuntimeConfigurationInput {
    return _smithy.isa(o, "DescribeRuntimeConfigurationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeRuntimeConfigurationOutput extends $MetadataBearer {
  __type?: "DescribeRuntimeConfigurationOutput";
  /**
   *
   *         <p>Instructions describing how server processes should be launched and maintained on
   *             each instance in the fleet.</p>
   *
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export namespace DescribeRuntimeConfigurationOutput {
  export function isa(o: any): o is DescribeRuntimeConfigurationOutput {
    return _smithy.isa(o, "DescribeRuntimeConfigurationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeScalingPoliciesInput {
  __type?: "DescribeScalingPoliciesInput";
  /**
   *
   *         <p>Unique identifier for a fleet to retrieve scaling policies for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Scaling policy status to filter results on. A scaling policy is only in force when
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
   *
   */
  StatusFilter?: ScalingStatusType | string;
}

export namespace DescribeScalingPoliciesInput {
  export function isa(o: any): o is DescribeScalingPoliciesInput {
    return _smithy.isa(o, "DescribeScalingPoliciesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeScalingPoliciesOutput extends $MetadataBearer {
  __type?: "DescribeScalingPoliciesOutput";
  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Collection of objects containing the scaling policies matching the
   *             request.</p>
   *
   */
  ScalingPolicies?: Array<ScalingPolicy>;
}

export namespace DescribeScalingPoliciesOutput {
  export function isa(o: any): o is DescribeScalingPoliciesOutput {
    return _smithy.isa(o, "DescribeScalingPoliciesOutput");
  }
}

export interface DescribeScriptInput {
  __type?: "DescribeScriptInput";
  /**
   *
   *         <p>Unique identifier for a Realtime script to retrieve properties for.</p>
   *
   */
  ScriptId: string | undefined;
}

export namespace DescribeScriptInput {
  export function isa(o: any): o is DescribeScriptInput {
    return _smithy.isa(o, "DescribeScriptInput");
  }
}

export interface DescribeScriptOutput extends $MetadataBearer {
  __type?: "DescribeScriptOutput";
  /**
   *
   *         <p>Set of properties describing the requested script.</p>
   *
   */
  Script?: Script;
}

export namespace DescribeScriptOutput {
  export function isa(o: any): o is DescribeScriptOutput {
    return _smithy.isa(o, "DescribeScriptOutput");
  }
}

export interface DescribeVpcPeeringAuthorizationsInput {
  __type?: "DescribeVpcPeeringAuthorizationsInput";
}

export namespace DescribeVpcPeeringAuthorizationsInput {
  export function isa(o: any): o is DescribeVpcPeeringAuthorizationsInput {
    return _smithy.isa(o, "DescribeVpcPeeringAuthorizationsInput");
  }
}

export interface DescribeVpcPeeringAuthorizationsOutput
  extends $MetadataBearer {
  __type?: "DescribeVpcPeeringAuthorizationsOutput";
  /**
   *
   *         <p>Collection of objects that describe all valid VPC peering operations for the
   *             current AWS account.</p>
   *
   */
  VpcPeeringAuthorizations?: Array<VpcPeeringAuthorization>;
}

export namespace DescribeVpcPeeringAuthorizationsOutput {
  export function isa(o: any): o is DescribeVpcPeeringAuthorizationsOutput {
    return _smithy.isa(o, "DescribeVpcPeeringAuthorizationsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface DescribeVpcPeeringConnectionsInput {
  __type?: "DescribeVpcPeeringConnectionsInput";
  /**
   *
   *         <p>Unique identifier for a fleet.</p>
   *
   */
  FleetId?: string;
}

export namespace DescribeVpcPeeringConnectionsInput {
  export function isa(o: any): o is DescribeVpcPeeringConnectionsInput {
    return _smithy.isa(o, "DescribeVpcPeeringConnectionsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface DescribeVpcPeeringConnectionsOutput extends $MetadataBearer {
  __type?: "DescribeVpcPeeringConnectionsOutput";
  /**
   *
   *         <p>Collection of VPC peering connection records that match the request.</p>
   *
   */
  VpcPeeringConnections?: Array<VpcPeeringConnection>;
}

export namespace DescribeVpcPeeringConnectionsOutput {
  export function isa(o: any): o is DescribeVpcPeeringConnectionsOutput {
    return _smithy.isa(o, "DescribeVpcPeeringConnectionsOutput");
  }
}

/**
 *
 *          <p>Player information for use when creating player sessions using a game session
 *         placement request with <a>StartGameSessionPlacement</a>.</p>
 *
 */
export interface DesiredPlayerSession {
  __type?: "DesiredPlayerSession";
  /**
   *
   *          <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   *
   */
  PlayerData?: string;

  /**
   *
   *          <p>Unique identifier for a player to associate with the player session.</p>
   *
   */
  PlayerId?: string;
}

export namespace DesiredPlayerSession {
  export function isa(o: any): o is DesiredPlayerSession {
    return _smithy.isa(o, "DesiredPlayerSession");
  }
}

/**
 *
 *         <p>Current status of fleet capacity. The number of active instances should match or be
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                         <ul>
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
 *
 */
export interface EC2InstanceCounts {
  __type?: "EC2InstanceCounts";
  /**
   *
   *         <p>Actual number of active instances in the fleet.</p>
   *
   */
  ACTIVE?: number;

  /**
   *
   *         <p>Ideal number of active instances in the fleet.</p>
   *
   */
  DESIRED?: number;

  /**
   *
   *         <p>Number of active instances in the fleet that are not currently hosting a game
   *             session.</p>
   *
   */
  IDLE?: number;

  /**
   *
   *         <p>Maximum value allowed for the fleet's instance count.</p>
   *
   */
  MAXIMUM?: number;

  /**
   *
   *         <p>Minimum value allowed for the fleet's instance count.</p>
   *
   */
  MINIMUM?: number;

  /**
   *
   *         <p>Number of instances in the fleet that are starting but not yet active.</p>
   *
   */
  PENDING?: number;

  /**
   *
   *         <p>Number of instances in the fleet that are no longer active but haven't yet been
   *             terminated.</p>
   *
   */
  TERMINATING?: number;
}

export namespace EC2InstanceCounts {
  export function isa(o: any): o is EC2InstanceCounts {
    return _smithy.isa(o, "EC2InstanceCounts");
  }
}

/**
 *
 *         <p>Maximum number of instances allowed based on the Amazon Elastic Compute Cloud
 *             (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>.</p>
 *
 */
export interface EC2InstanceLimit {
  __type?: "EC2InstanceLimit";
  /**
   *
   *         <p>Number of instances of the specified type that are currently in use by this AWS
   *             account.</p>
   *
   */
  CurrentInstances?: number;

  /**
   *
   *         <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   *
   */
  EC2InstanceType?: EC2InstanceType | string;

  /**
   *
   *         <p>Number of instances allowed.</p>
   *
   */
  InstanceLimit?: number;
}

export namespace EC2InstanceLimit {
  export function isa(o: any): o is EC2InstanceLimit {
    return _smithy.isa(o, "EC2InstanceLimit");
  }
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
  | "t2.large"
  | "t2.medium"
  | "t2.micro"
  | "t2.small";

/**
 *
 *         <p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In
 *             addition to tracking activity, event codes and messages can provide additional
 *             information for troubleshooting and debugging problems.</p>
 *
 */
export interface Event {
  __type?: "Event";
  /**
   *
   *         <p>Type of event being logged. The following events are currently in use:</p>
   *         <p>
   *             <b>Fleet creation events:</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>FLEET_CREATED -- A fleet record was successfully created with a status of
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
   *                 <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was
   *                     successful, and the Amazon GameLift is now verifying that the game server launch
   *                     paths, which are specified in the fleet's run-time configuration, exist. If any
   *                     listed launch path exists, Amazon GameLift tries to launch a game server process and
   *                     waits for the process to report ready. Failures in this stage prevent a fleet
   *                     from moving to <code>ACTIVE</code> status. Logs for this stage list the launch
   *                     paths in the run-time configuration and indicate whether each is found. Access
   *                     the logs by using the URL in <i>PreSignedLogUrl</i>.
   *
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_VALIDATING -- Fleet status changed from
   *                         <code>DOWNLOADING</code> to <code>VALIDATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p> FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the run-time
   *                     configuration failed because the executable specified in a launch path does not
   *                     exist on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code>
   *                     to <code>BUILDING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the run-time
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
   *                     validated, but was not able to start a server process. A possible reason for
   *                     failure is that the game server is not reporting "process ready" to the
   *                     Amazon GameLift service.</p>
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
   *
   */
  EventCode?: EventCode | string;

  /**
   *
   *         <p>Unique identifier for a fleet event.</p>
   *
   */
  EventId?: string;

  /**
   *
   *         <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  EventTime?: Date;

  /**
   *
   *         <p>Additional information related to the event.</p>
   *
   */
  Message?: string;

  /**
   *
   *         <p>Location of stored logs with additional detail that is related to the event. This
   *             is useful for debugging issues. The URL is valid for 15 minutes. You can also access
   *             fleet creation logs through the Amazon GameLift console.</p>
   *
   */
  PreSignedLogUrl?: string;

  /**
   *
   *         <p>Unique identifier for an event resource, such as a fleet ID.</p>
   *
   */
  ResourceId?: string;
}

export namespace Event {
  export function isa(o: any): o is Event {
    return _smithy.isa(o, "Event");
  }
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
  SERVER_PROCESS_TERMINATED_UNHEALTHY = "SERVER_PROCESS_TERMINATED_UNHEALTHY"
}

export enum FleetAction {
  AutoScaling = "AUTO_SCALING"
}

/**
 *
 *         <p>General properties describing a fleet.</p>
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                         <ul>
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
 *
 */
export interface FleetAttributes {
  __type?: "FleetAttributes";
  /**
   *
   *         <p>Unique identifier for a build.</p>
   *
   */
  BuildId?: string;

  CertificateConfiguration?: CertificateConfiguration;
  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Human-readable description of the fleet.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Identifier for a fleet that is unique across all regions.</p>
   *
   */
  FleetArn?: string;

  /**
   *
   *         <p>Unique identifier for a fleet.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Indicates whether the fleet uses on-demand or spot instances. A spot instance in use
   *             may be interrupted with a two-minute notification.</p>
   *
   */
  FleetType?: FleetType | string;

  /**
   *
   *         <p>Unique identifier for an AWS IAM role that manages access to your AWS services.
   *         With an instance role ARN set, any application that runs on an instance in this fleet can assume the role,
   *         including install scripts, server processes, daemons (background processes). Create a role or look up a role's
   *         ARN using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the AWS Management Console.
   *         Learn more about using on-box credentials for your game servers at
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Access external resources from a game server</a>.</p>
   *
   */
  InstanceRoleArn?: string;

  /**
   *
   *         <p>EC2 instance type indicating the computing resources of each instance in the
   *             fleet, including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a> for
   *             detailed descriptions.</p>
   *
   */
  InstanceType?: EC2InstanceType | string;

  /**
   *
   *         <p>Location of default log files. When a server process is shut down, Amazon GameLift captures
   *             and stores any log files in this location. These logs are in addition to game session
   *             logs; see more on game session logs in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-api-server-code">Amazon GameLift Developer Guide</a>. If no default log path for a fleet is specified,
   *             Amazon GameLift automatically uploads logs that are stored on each instance at
   *                 <code>C:\game\logs</code> (for Windows) or <code>/local/game/logs</code> (for
   *             Linux). Use the Amazon GameLift console to access stored logs. </p>
   *
   */
  LogPaths?: Array<string>;

  /**
   *
   *         <p>Names of metric groups that this fleet is included in. In Amazon CloudWatch, you
   *             can view metrics for an individual fleet or aggregated metrics for fleets that are in a
   *             fleet metric group. A fleet can be included in only one metric group at a
   *             time.</p>
   *
   */
  MetricGroups?: Array<string>;

  /**
   *
   *         <p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Type of game session protection to set for all new instances started in the
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
   *
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   *
   *         <p>Operating system of the fleet's computing resources. A fleet's operating system
   *             depends on the OS specified for the build that is deployed on this fleet.</p>
   *
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   *
   *         <p>Fleet policy to limit the number of game sessions an individual player can create
   *             over a span of time.</p>
   *
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   *
   *         <p>Unique identifier for a Realtime script.</p>
   *
   */
  ScriptId?: string;

  /**
   *
   *         <p>Game server launch parameters specified for fleets created before 2016-08-04 (or
   *             AWS SDK v. 0.12.16). Server launch parameters for fleets created after this date are
   *             specified in the fleet's <a>RuntimeConfiguration</a>.</p>
   *
   */
  ServerLaunchParameters?: string;

  /**
   *
   *         <p>Path to a game server executable in the fleet's build, specified for fleets created
   *             before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch paths for fleets created after
   *             this date are specified in the fleet's <a>RuntimeConfiguration</a>.</p>
   *
   */
  ServerLaunchPath?: string;

  /**
   *
   *         <p>Current status of the fleet.</p>
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
   *
   */
  Status?: FleetStatus | string;

  /**
   *
   *         <p>List of fleet actions that have been suspended using <a>StopFleetActions</a>. This includes auto-scaling.</p>
   *
   */
  StoppedActions?: Array<FleetAction | string>;

  /**
   *
   *         <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  TerminationTime?: Date;
}

export namespace FleetAttributes {
  export function isa(o: any): o is FleetAttributes {
    return _smithy.isa(o, "FleetAttributes");
  }
}

/**
 *
 *         <p>Information about the fleet's capacity. Fleet capacity is measured in EC2
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                         <ul>
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
 *
 */
export interface FleetCapacity {
  __type?: "FleetCapacity";
  /**
   *
   *         <p>Unique identifier for a fleet.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Current status of fleet capacity.</p>
   *
   */
  InstanceCounts?: EC2InstanceCounts;

  /**
   *
   *         <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   *
   */
  InstanceType?: EC2InstanceType | string;
}

export namespace FleetCapacity {
  export function isa(o: any): o is FleetCapacity {
    return _smithy.isa(o, "FleetCapacity");
  }
}

/**
 *
 *         <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 *
 */
export interface FleetCapacityExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "FleetCapacityExceededException";
  $fault: "client";
  Message?: string;
}

export namespace FleetCapacityExceededException {
  export function isa(o: any): o is FleetCapacityExceededException {
    return _smithy.isa(o, "FleetCapacityExceededException");
  }
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
  VALIDATING = "VALIDATING"
}

export enum FleetType {
  OnDemand = "ON_DEMAND",
  Spot = "SPOT"
}

/**
 *
 *         <p>Current status of fleet utilization, including the number of game and player
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                         <ul>
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
 *
 */
export interface FleetUtilization {
  __type?: "FleetUtilization";
  /**
   *
   *         <p>Number of active game sessions currently being hosted on all instances in the
   *             fleet.</p>
   *
   */
  ActiveGameSessionCount?: number;

  /**
   *
   *         <p>Number of server processes in an <code>ACTIVE</code> status currently running
   *             across all instances in the fleet</p>
   *
   */
  ActiveServerProcessCount?: number;

  /**
   *
   *         <p>Number of active player sessions currently being hosted on all instances in the
   *             fleet.</p>
   *
   */
  CurrentPlayerSessionCount?: number;

  /**
   *
   *         <p>Unique identifier for a fleet.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Maximum players allowed across all game sessions currently being hosted on all
   *             instances in the fleet.</p>
   *
   */
  MaximumPlayerSessionCount?: number;
}

export namespace FleetUtilization {
  export function isa(o: any): o is FleetUtilization {
    return _smithy.isa(o, "FleetUtilization");
  }
}

/**
 *
 *         <p>Set of key-value pairs that contain information about a game session. When included
 *             in a game session request, these properties communicate details to be used when setting
 *             up the new game session, such as to specify a game mode, level, or map. Game properties
 *             are passed to the game server process when initiating a new game session; the server
 *             process uses the properties as appropriate. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.</p>
 *
 */
export interface GameProperty {
  __type?: "GameProperty";
  /**
   *
   *         <p>Game property identifier.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *         <p>Game property value.</p>
   *
   */
  Value: string | undefined;
}

export namespace GameProperty {
  export function isa(o: any): o is GameProperty {
    return _smithy.isa(o, "GameProperty");
  }
}

/**
 *
 *         <p>Properties describing a game session.</p>
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
 *
 */
export interface GameSession {
  __type?: "GameSession";
  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Unique identifier for a player. This ID is used to enforce a resource protection policy (if one
   *             exists), that limits the number of game sessions a player can create.</p>
   *
   */
  CreatorId?: string;

  /**
   *
   *         <p>Number of players currently in the game session.</p>
   *
   */
  CurrentPlayerSessionCount?: number;

  DnsName?: string;
  /**
   *
   *         <p>Unique identifier for a fleet that the game session is running on.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). You can search for active game sessions based on this custom data
   *             with <a>SearchGameSessions</a>.</p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *         <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *         <p>Unique identifier for the game session. A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.</p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *         <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *         <p>Information about the matchmaking process that was used to create the game session.
   *             It is in JSON syntax, formatted as a string. In addition the matchmaking configuration
   *             used, it contains data on all players assigned to the match, including player attributes
   *             and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data">Match
   *                 Data</a>. Matchmaker data is useful when requesting match backfills, and is
   *             updated whenever new players are added during a successful backfill (see <a>StartMatchBackfill</a>). </p>
   *
   */
  MatchmakerData?: string;

  /**
   *
   *         <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   *
   */
  MaximumPlayerSessionCount?: number;

  /**
   *
   *         <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Indicates whether or not the game session is accepting new players.</p>
   *
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | string;

  /**
   *
   *         <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   *
   */
  Port?: number;

  /**
   *
   *         <p>Current status of the game session. A game session must have an <code>ACTIVE</code>
   *             status to have player sessions.</p>
   *
   */
  Status?: GameSessionStatus | string;

  /**
   *
   *         <p>Provides additional information about game session status. <code>INTERRUPTED</code>
   *             indicates that the game session was hosted on a spot instance that was reclaimed,
   *             causing the active game session to be terminated.</p>
   *
   */
  StatusReason?: GameSessionStatusReason | string;

  /**
   *
   *         <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  TerminationTime?: Date;
}

export namespace GameSession {
  export function isa(o: any): o is GameSession {
    return _smithy.isa(o, "GameSession");
  }
}

/**
 *
 *         <p>Connection information for the new game session that is created with matchmaking.
 *             (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine
 *             places the match and creates a new game session for it. This information, including the
 *             game session endpoint and player sessions for each player in the original matchmaking
 *             request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by
 *             calling <a>DescribeMatchmaking</a>.</p>
 *
 */
export interface GameSessionConnectionInfo {
  __type?: "GameSessionConnectionInfo";
  DnsName?: string;
  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session and uniquely identifies it.</p>
   *
   */
  GameSessionArn?: string;

  /**
   *
   *         <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *         <p>Collection of player session IDs, one for each player ID that was included in the
   *             original matchmaking request. </p>
   *
   */
  MatchedPlayerSessions?: Array<MatchedPlayerSession>;

  /**
   *
   *         <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   *
   */
  Port?: number;
}

export namespace GameSessionConnectionInfo {
  export function isa(o: any): o is GameSessionConnectionInfo {
    return _smithy.isa(o, "GameSessionConnectionInfo");
  }
}

/**
 *
 *         <p>A game session's properties plus the protection policy currently in
 *             force.</p>
 *
 */
export interface GameSessionDetail {
  __type?: "GameSessionDetail";
  /**
   *
   *         <p>Object that describes a game session.</p>
   *
   */
  GameSession?: GameSession;

  /**
   *
   *         <p>Current status of protection for the game session.</p>
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
   *
   */
  ProtectionPolicy?: ProtectionPolicy | string;
}

export namespace GameSessionDetail {
  export function isa(o: any): o is GameSessionDetail {
    return _smithy.isa(o, "GameSessionDetail");
  }
}

/**
 *
 *         <p>The game instance is currently full and cannot allow the requested player(s) to
 *             join. Clients can retry such requests immediately or after a waiting period.</p>
 *
 */
export interface GameSessionFullException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "GameSessionFullException";
  $fault: "client";
  Message?: string;
}

export namespace GameSessionFullException {
  export function isa(o: any): o is GameSessionFullException {
    return _smithy.isa(o, "GameSessionFullException");
  }
}

/**
 *
 *          <p>Object that describes a <a>StartGameSessionPlacement</a> request. This
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
 *
 */
export interface GameSessionPlacement {
  __type?: "GameSessionPlacement";
  DnsName?: string;
  /**
   *
   *          <p>Time stamp indicating when this request was completed, canceled, or timed
   *         out.</p>
   *
   */
  EndTime?: Date;

  /**
   *
   *          <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *          <p>Identifier for the game session created by this placement request. This value is
   *         set once the new game session is placed (placement status is <code>FULFILLED</code>).
   *         This identifier is unique across all regions. You can use this value as a
   *         <code>GameSessionId</code> value as needed.</p>
   *
   */
  GameSessionArn?: string;

  /**
   *
   *          <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *          <p>Unique identifier for the game session. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *          <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   *
   */
  GameSessionName?: string;

  /**
   *
   *          <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   *
   */
  GameSessionQueueName?: string;

  /**
   *
   *          <p>Name of the region where the game session created by this placement request is
   *         running. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   *
   */
  GameSessionRegion?: string;

  /**
   *
   *          <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>). </p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Information on the matchmaking process for this game. Data is in JSON syntax,
   *         formatted as a string. It identifies the matchmaking configuration used to create the
   *         match, and contains data on all players assigned to the match, including player
   *         attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data">Match
   *             Data</a>.</p>
   *
   */
  MatchmakerData?: string;

  /**
   *
   *          <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   *
   */
  MaximumPlayerSessionCount?: number;

  /**
   *
   *          <p>Collection of information on player sessions created in response to the game
   *         session placement request. These player sessions are created only once a new game
   *         session is successfully placed (placement status is <code>FULFILLED</code>). This
   *         information includes the player ID (as provided in the placement request) and the
   *         corresponding player session ID. Retrieve full player sessions by calling <a>DescribePlayerSessions</a> with the player session ID.</p>
   *
   */
  PlacedPlayerSessions?: Array<PlacedPlayerSession>;

  /**
   *
   *          <p>Unique identifier for a game session placement.</p>
   *
   */
  PlacementId?: string;

  /**
   *
   *          <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions.</p>
   *
   */
  PlayerLatencies?: Array<PlayerLatency>;

  /**
   *
   *          <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   *
   */
  Port?: number;

  /**
   *
   *          <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  StartTime?: Date;

  /**
   *
   *          <p>Current status of the game session placement request.</p>
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
   *          </ul>
   *
   */
  Status?: GameSessionPlacementState | string;
}

export namespace GameSessionPlacement {
  export function isa(o: any): o is GameSessionPlacement {
    return _smithy.isa(o, "GameSessionPlacement");
  }
}

export enum GameSessionPlacementState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  TIMED_OUT = "TIMED_OUT"
}

/**
 *
 *         <p>Configuration of a queue that is used to process game session placement requests.
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
 *
 */
export interface GameSessionQueue {
  __type?: "GameSessionQueue";
  /**
   *
   *         <p>List of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>
   *
   */
  Destinations?: Array<GameSessionQueueDestination>;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:<region>:<aws account>:gamesessionqueue/<queue name></code>.</p>
   *
   */
  GameSessionQueueArn?: string;

  /**
   *
   *         <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, it is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. </p>
   *
   */
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;

  /**
   *
   *         <p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   *
   */
  TimeoutInSeconds?: number;
}

export namespace GameSessionQueue {
  export function isa(o: any): o is GameSessionQueue {
    return _smithy.isa(o, "GameSessionQueue");
  }
}

/**
 *
 *         <p>Fleet designated in a game session queue. Requests for new game sessions in the
 *             queue are fulfilled by starting a new game session on any destination configured for a
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
 *
 */
export interface GameSessionQueueDestination {
  __type?: "GameSessionQueueDestination";
  /**
   *
   *         <p>Amazon Resource Name (ARN) assigned to fleet or fleet alias. ARNs, which include a
   *             fleet ID or alias ID and a region name, provide a unique identifier across all regions.
   *         </p>
   *
   */
  DestinationArn?: string;
}

export namespace GameSessionQueueDestination {
  export function isa(o: any): o is GameSessionQueueDestination {
    return _smithy.isa(o, "GameSessionQueueDestination");
  }
}

export enum GameSessionStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING"
}

export enum GameSessionStatusReason {
  INTERRUPTED = "INTERRUPTED"
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface GetGameSessionLogUrlInput {
  __type?: "GetGameSessionLogUrlInput";
  /**
   *
   *         <p>Unique identifier for the game session to get logs for.</p>
   *
   */
  GameSessionId: string | undefined;
}

export namespace GetGameSessionLogUrlInput {
  export function isa(o: any): o is GetGameSessionLogUrlInput {
    return _smithy.isa(o, "GetGameSessionLogUrlInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface GetGameSessionLogUrlOutput extends $MetadataBearer {
  __type?: "GetGameSessionLogUrlOutput";
  /**
   *
   *         <p>Location of the requested game session logs, available for download. This URL is
   *             valid for 15 minutes, after which S3 will reject any download request using this URL.
   *             You can request a new URL any time within the 14-day period that the logs are
   *             retained.</p>
   *
   */
  PreSignedUrl?: string;
}

export namespace GetGameSessionLogUrlOutput {
  export function isa(o: any): o is GetGameSessionLogUrlOutput {
    return _smithy.isa(o, "GetGameSessionLogUrlOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface GetInstanceAccessInput {
  __type?: "GetInstanceAccessInput";
  /**
   *
   *         <p>Unique identifier for a fleet that contains the instance you want access to. The fleet can be in any of the
   *             following statuses: <code>ACTIVATING</code>, <code>ACTIVE</code>, or <code>ERROR</code>.
   *             Fleets with an <code>ERROR</code> status may be accessible for a short time before they
   *             are deleted.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Unique identifier for an instance you want to get access to. You can access an instance in any
   *             status.</p>
   *
   */
  InstanceId: string | undefined;
}

export namespace GetInstanceAccessInput {
  export function isa(o: any): o is GetInstanceAccessInput {
    return _smithy.isa(o, "GetInstanceAccessInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface GetInstanceAccessOutput extends $MetadataBearer {
  __type?: "GetInstanceAccessOutput";
  /**
   *
   *         <p>Object that contains connection information for a fleet instance, including IP
   *             address and access credentials.</p>
   *
   */
  InstanceAccess?: InstanceAccess;
}

export namespace GetInstanceAccessOutput {
  export function isa(o: any): o is GetInstanceAccessOutput {
    return _smithy.isa(o, "GetInstanceAccessOutput");
  }
}

/**
 *
 *         <p>A game session with this custom ID string already exists in this fleet. Resolve
 *             this conflict before retrying this request.</p>
 *
 */
export interface IdempotentParameterMismatchException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IdempotentParameterMismatchException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export function isa(o: any): o is IdempotentParameterMismatchException {
    return _smithy.isa(o, "IdempotentParameterMismatchException");
  }
}

/**
 *
 *          <p>Properties that describe an instance of a virtual computing resource that hosts one
 *         or more game servers. A fleet may contain zero or more instances.</p>
 *
 */
export interface Instance {
  __type?: "Instance";
  /**
   *
   *          <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  DnsName?: string;
  /**
   *
   *          <p>Unique identifier for a fleet that the instance is in.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *          <p>Unique identifier for an instance.</p>
   *
   */
  InstanceId?: string;

  /**
   *
   *          <p>IP address assigned to the instance.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Operating system that is running on this instance. </p>
   *
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   *
   *          <p>Current status of the instance. Possible statuses include the following:</p>
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
   *
   */
  Status?: InstanceStatus | string;

  /**
   *
   *          <p>EC2 instance type that defines the computing resources of this instance.
   *     </p>
   *
   */
  Type?: EC2InstanceType | string;
}

export namespace Instance {
  export function isa(o: any): o is Instance {
    return _smithy.isa(o, "Instance");
  }
}

/**
 *
 *          <p>Information required to remotely connect to a fleet instance. Access is requested
 *         by calling <a>GetInstanceAccess</a>. </p>
 *
 */
export interface InstanceAccess {
  __type?: "InstanceAccess";
  /**
   *
   *          <p>Credentials required to access the instance.</p>
   *
   */
  Credentials?: InstanceCredentials;

  /**
   *
   *          <p>Unique identifier for a fleet containing the instance being accessed.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *          <p>Unique identifier for an instance being accessed.</p>
   *
   */
  InstanceId?: string;

  /**
   *
   *          <p>IP address assigned to the instance.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Operating system that is running on the instance.</p>
   *
   */
  OperatingSystem?: OperatingSystem | string;
}

export namespace InstanceAccess {
  export function isa(o: any): o is InstanceAccess {
    return _smithy.isa(o, "InstanceAccess");
  }
}

/**
 *
 *          <p>Set of credentials required to remotely access a fleet instance. Access credentials
 *         are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.</p>
 *
 */
export interface InstanceCredentials {
  __type?: "InstanceCredentials";
  /**
   *
   *          <p>Secret string. For Windows instances, the secret is a password for use with Windows
   *         Remote Desktop. For Linux instances, it is a private key (which must be saved as a
   *         <code>.pem</code> file) for use with SSH.</p>
   *
   */
  Secret?: string;

  /**
   *
   *          <p>User login string.</p>
   *
   */
  UserName?: string;
}

export namespace InstanceCredentials {
  export function isa(o: any): o is InstanceCredentials {
    return _smithy.isa(o, "InstanceCredentials");
  }
}

export enum InstanceStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  TERMINATING = "TERMINATING"
}

/**
 *
 *         <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting
 *             period.</p>
 *
 */
export interface InternalServiceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return _smithy.isa(o, "InternalServiceException");
  }
}

/**
 *
 *         <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 *
 */
export interface InvalidFleetStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidFleetStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFleetStatusException {
  export function isa(o: any): o is InvalidFleetStatusException {
    return _smithy.isa(o, "InvalidFleetStatusException");
  }
}

/**
 *
 *         <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 *
 */
export interface InvalidGameSessionStatusException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidGameSessionStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGameSessionStatusException {
  export function isa(o: any): o is InvalidGameSessionStatusException {
    return _smithy.isa(o, "InvalidGameSessionStatusException");
  }
}

/**
 *
 *         <p>One or more parameter values in the request are invalid. Correct the invalid
 *             parameter values before retrying.</p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 *
 *         <p>A range of IP addresses and port settings that allow inbound traffic to connect to
 *             server processes on an Amazon GameLift. New game sessions that are started on the fleet are
 *             assigned an IP address/port number combination, which must fall into the fleet's
 *             allowed ranges. For fleets created with a custom game server, the ranges
 *             reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically
 *             opens two port ranges, one for TCP messaging and one for UDP for use by the Realtime servers.</p>
 *
 */
export interface IpPermission {
  __type?: "IpPermission";
  /**
   *
   *         <p>Starting value for a range of allowed port numbers.</p>
   *
   */
  FromPort: number | undefined;

  /**
   *
   *         <p>Range of allowed IP addresses. This value must be expressed in CIDR notation.
   *             Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened
   *             version "<code>0.0.0.0/[subnet mask]</code>".</p>
   *
   */
  IpRange: string | undefined;

  /**
   *
   *         <p>Network communication protocol used by the fleet.</p>
   *
   */
  Protocol: IpProtocol | string | undefined;

  /**
   *
   *         <p>Ending value for a range of allowed port numbers. Port numbers are end-inclusive.
   *             This value must be higher than <code>FromPort</code>.</p>
   *
   */
  ToPort: number | undefined;
}

export namespace IpPermission {
  export function isa(o: any): o is IpPermission {
    return _smithy.isa(o, "IpPermission");
  }
}

export enum IpProtocol {
  TCP = "TCP",
  UDP = "UDP"
}

/**
 *
 *         <p>The requested operation would cause the resource to exceed the allowed service
 *             limit. Resolve the issue before retrying.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface ListAliasesInput {
  __type?: "ListAliasesInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Type of routing to filter results on. Use this parameter to retrieve only aliases
   *             of a certain type. To retrieve all aliases, leave this parameter empty.</p>
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
   *
   */
  RoutingStrategyType?: RoutingStrategyType | string;
}

export namespace ListAliasesInput {
  export function isa(o: any): o is ListAliasesInput {
    return _smithy.isa(o, "ListAliasesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface ListAliasesOutput extends $MetadataBearer {
  __type?: "ListAliasesOutput";
  /**
   *
   *         <p>Collection of alias records that match the list request.</p>
   *
   */
  Aliases?: Array<Alias>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace ListAliasesOutput {
  export function isa(o: any): o is ListAliasesOutput {
    return _smithy.isa(o, "ListAliasesOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface ListBuildsInput {
  __type?: "ListBuildsInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Build status to filter results by. To retrieve all builds, leave this parameter
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
   *
   */
  Status?: BuildStatus | string;
}

export namespace ListBuildsInput {
  export function isa(o: any): o is ListBuildsInput {
    return _smithy.isa(o, "ListBuildsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface ListBuildsOutput extends $MetadataBearer {
  __type?: "ListBuildsOutput";
  /**
   *
   *         <p>Collection of build records that match the request.</p>
   *
   */
  Builds?: Array<Build>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace ListBuildsOutput {
  export function isa(o: any): o is ListBuildsOutput {
    return _smithy.isa(o, "ListBuildsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface ListFleetsInput {
  __type?: "ListFleetsInput";
  /**
   *
   *         <p>Unique identifier for a build to return fleets for. Use this parameter to return only fleets using the
   *             specified build. To retrieve all fleets, leave this parameter empty.</p>
   *
   */
  BuildId?: string;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Unique identifier for a Realtime script to return fleets for. Use this parameter to return only fleets using the
   *             specified script. To retrieve all fleets, leave this parameter empty.</p>
   *
   */
  ScriptId?: string;
}

export namespace ListFleetsInput {
  export function isa(o: any): o is ListFleetsInput {
    return _smithy.isa(o, "ListFleetsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface ListFleetsOutput extends $MetadataBearer {
  __type?: "ListFleetsOutput";
  /**
   *
   *         <p>Set of fleet IDs matching the list request. You can retrieve additional information
   *             about all returned fleets by passing this result set to a call to <a>DescribeFleetAttributes</a>, <a>DescribeFleetCapacity</a>, or
   *                 <a>DescribeFleetUtilization</a>.</p>
   *
   */
  FleetIds?: Array<string>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace ListFleetsOutput {
  export function isa(o: any): o is ListFleetsOutput {
    return _smithy.isa(o, "ListFleetsOutput");
  }
}

export interface ListScriptsInput {
  __type?: "ListScriptsInput";
  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;
}

export namespace ListScriptsInput {
  export function isa(o: any): o is ListScriptsInput {
    return _smithy.isa(o, "ListScriptsInput");
  }
}

export interface ListScriptsOutput extends $MetadataBearer {
  __type?: "ListScriptsOutput";
  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Set of properties describing the requested script.</p>
   *
   */
  Scripts?: Array<Script>;
}

export namespace ListScriptsOutput {
  export function isa(o: any): o is ListScriptsOutput {
    return _smithy.isa(o, "ListScriptsOutput");
  }
}

/**
 *
 *         <p>Represents a new player session that is created as a result of a successful FlexMatch
 *             match. A successful match automatically creates new player sessions for every player ID
 *             in the original matchmaking request. </p>
 *         <p>When players connect to the match's game session, they must include both player ID
 *             and player session ID in order to claim their assigned player slot.</p>
 *
 */
export interface MatchedPlayerSession {
  __type?: "MatchedPlayerSession";
  /**
   *
   *         <p>Unique identifier for a player </p>
   *
   */
  PlayerId?: string;

  /**
   *
   *         <p>Unique identifier for a player session</p>
   *
   */
  PlayerSessionId?: string;
}

export namespace MatchedPlayerSession {
  export function isa(o: any): o is MatchedPlayerSession {
    return _smithy.isa(o, "MatchedPlayerSession");
  }
}

/**
 *
 *         <p>Guidelines for use with FlexMatch to match players into games. All matchmaking
 *             requests must specify a matchmaking configuration.</p>
 *
 */
export interface MatchmakingConfiguration {
  __type?: "MatchmakingConfiguration";
  /**
   *
   *         <p>Flag that determines whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE.</p>
   *
   */
  AcceptanceRequired?: boolean;

  /**
   *
   *         <p>Length of time (in seconds) to wait for players to accept a proposed match. If any
   *             player rejects the match or fails to accept before the timeout, the ticket continues to
   *             look for an acceptable match.</p>
   *
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   *
   *         <p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>
   *
   */
  AdditionalPlayerCount?: number;

  /**
   *
   *         <p>Method used to backfill game sessions created with this matchmaking configuration. MANUAL
   *             indicates that the game makes backfill requests or does not use the match backfill feature. AUTOMATIC
   *             indicates that GameLift creates <a>StartMatchBackfill</a> requests whenever a game session has one or more
   *             open slots. Learn more about manual and automatic backfill in
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html">Backfill Existing Games with FlexMatch</a>.</p>
   *
   */
  BackfillMode?: BackfillMode | string;

  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Information to attach to all events related to the matchmaking configuration. </p>
   *
   */
  CustomEventData?: string;

  /**
   *
   *         <p>Descriptive label that is associated with matchmaking configuration.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *         <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match. </p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:<region>:<aws account>:gamesessionqueue/<queue name></code>. These queues are used when placing game sessions for matches that are
   *             created with this matchmaking configuration. Queues can be located in any
   *             region.</p>
   *
   */
  GameSessionQueueArns?: Array<string>;

  /**
   *
   *         <p>Unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a
   *             matchmaking request or ticket.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>SNS topic ARN that is set up to receive matchmaking notifications.</p>
   *
   */
  NotificationTarget?: string;

  /**
   *
   *         <p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before
   *             timing out. Requests that fail due to timing out can be resubmitted as needed.</p>
   *
   */
  RequestTimeoutSeconds?: number;

  /**
   *
   *         <p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use
   *             rule sets that are defined in the same region.</p>
   *
   */
  RuleSetName?: string;
}

export namespace MatchmakingConfiguration {
  export function isa(o: any): o is MatchmakingConfiguration {
    return _smithy.isa(o, "MatchmakingConfiguration");
  }
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
 *
 *         <p>Set of rule statements, used with FlexMatch, that determine how to build your player
 *             matches. Each rule set describes a type of group to be created and defines the
 *             parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p>
 *         <p>A rule set may define the following elements for a match. For detailed information
 *             and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a FlexMatch Rule
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
 *
 */
export interface MatchmakingRuleSet {
  __type?: "MatchmakingRuleSet";
  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Collection of matchmaking rules, formatted as a JSON string. Comments are not allowed
   *             in JSON, but most elements support a description field.</p>
   *
   */
  RuleSetBody: string | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking rule set</p>
   *
   */
  RuleSetName?: string;
}

export namespace MatchmakingRuleSet {
  export function isa(o: any): o is MatchmakingRuleSet {
    return _smithy.isa(o, "MatchmakingRuleSet");
  }
}

/**
 *
 *         <p>Ticket generated to track the progress of a matchmaking request. Each ticket is
 *             uniquely identified by a ticket ID, supplied by the requester, when creating a
 *             matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by
 *             calling <a>DescribeMatchmaking</a> with the ticket ID.</p>
 *
 */
export interface MatchmakingTicket {
  __type?: "MatchmakingTicket";
  /**
   *
   *         <p>Name of the <a>MatchmakingConfiguration</a> that is used with this
   *             ticket. Matchmaking configurations determine how players are grouped into a match and
   *             how a new game session is created for the match.</p>
   *
   */
  ConfigurationName?: string;

  /**
   *
   *         <p>Time stamp indicating when this matchmaking request stopped being processed due to
   *             success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  EndTime?: Date;

  /**
   *
   *         <p>Average amount of time (in seconds) that players are currently waiting for a match.
   *             If there is not enough recent data, this property may be empty.</p>
   *
   */
  EstimatedWaitTime?: number;

  /**
   *
   *         <p>Identifier and connection information of the game session created for the match.
   *             This information is added to the ticket only after the matchmaking request has been
   *             successfully completed.</p>
   *
   */
  GameSessionConnectionInfo?: GameSessionConnectionInfo;

  /**
   *
   *         <p>A set of <code>Player</code> objects, each representing a player to find matches
   *             for. Players are identified by a unique player ID and may include latency data for use
   *             during matchmaking. If the ticket is in status <code>COMPLETED</code>, the
   *             <code>Player</code> objects include the team the players were assigned to in the
   *             resulting match.</p>
   *
   */
  Players?: Array<Player>;

  /**
   *
   *         <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  StartTime?: Date;

  /**
   *
   *         <p>Current status of the matchmaking request.</p>
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
   *
   */
  Status?: MatchmakingConfigurationStatus | string;

  /**
   *
   *         <p>Additional information about the current status.</p>
   *
   */
  StatusMessage?: string;

  /**
   *
   *         <p>Code to explain the current status. For example, a status reason may indicate when
   *             a ticket has returned to <code>SEARCHING</code> status after a proposed match fails to
   *             receive player acceptances.</p>
   *
   */
  StatusReason?: string;

  /**
   *
   *         <p>Unique identifier for a matchmaking ticket.</p>
   *
   */
  TicketId?: string;
}

export namespace MatchmakingTicket {
  export function isa(o: any): o is MatchmakingTicket {
    return _smithy.isa(o, "MatchmakingTicket");
  }
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

/**
 *
 *         <p>A service resource associated with the request could not be found. Clients should
 *             not retry such requests.</p>
 *
 */
export interface NotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return _smithy.isa(o, "NotFoundException");
  }
}

export enum OperatingSystem {
  AMAZON_LINUX = "AMAZON_LINUX",
  AMAZON_LINUX_2 = "AMAZON_LINUX_2",
  WINDOWS_2012 = "WINDOWS_2012"
}

/**
 *
 *          <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player
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
 *
 */
export interface PlacedPlayerSession {
  __type?: "PlacedPlayerSession";
  /**
   *
   *          <p>Unique identifier for a player that is associated with this player session.</p>
   *
   */
  PlayerId?: string;

  /**
   *
   *          <p>Unique identifier for a player session.</p>
   *
   */
  PlayerSessionId?: string;
}

export namespace PlacedPlayerSession {
  export function isa(o: any): o is PlacedPlayerSession {
    return _smithy.isa(o, "PlacedPlayerSession");
  }
}

/**
 *
 *         <p>Represents a player in matchmaking. When starting a matchmaking request, a player
 *             has a player ID, attributes, and may have latency data. Team information is added after
 *             a match has been successfully completed.</p>
 *
 */
export interface Player {
  __type?: "Player";
  /**
   *
   *         <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions. If this property is present, FlexMatch considers placing the match only
   *             in regions for which latency is reported. </p>
   *         <p>If a matchmaker has a rule that evaluates player latency, players must report
   *             latency in order to be matched. If no latency is reported in this scenario, FlexMatch
   *             assumes that no regions are available to the player and the ticket is not matchable.
   *         </p>
   *
   */
  LatencyInMs?: { [key: string]: number };

  /**
   *
   *         <p>Collection of key:value pairs containing player information for use in matchmaking.
   *             Player attribute keys must match the <i>playerAttributes</i> used in a
   *             matchmaking rule set. Example: <code>"PlayerAttributes": {"skill": {"N": "23"},
   *                 "gameMode": {"S": "deathmatch"}}</code>.</p>
   *
   */
  PlayerAttributes?: { [key: string]: AttributeValue };

  /**
   *
   *         <p>Unique identifier for a player</p>
   *
   */
  PlayerId?: string;

  /**
   *
   *         <p>Name of the team that the player is assigned to in a match. Team names are defined
   *             in a matchmaking rule set.</p>
   *
   */
  Team?: string;
}

export namespace Player {
  export function isa(o: any): o is Player {
    return _smithy.isa(o, "Player");
  }
}

/**
 *
 *          <p>Regional latency information for a player, used when requesting a new game session
 *         with <a>StartGameSessionPlacement</a>. This value indicates the amount of
 *         time lag that exists when the player is connected to a fleet in the specified region.
 *         The relative difference between a player's latency values for multiple regions are used
 *         to determine which fleets are best suited to place a new game session for the player.
 *     </p>
 *
 */
export interface PlayerLatency {
  __type?: "PlayerLatency";
  /**
   *
   *          <p>Amount of time that represents the time lag experienced by the player when
   *         connected to the specified region.</p>
   *
   */
  LatencyInMilliseconds?: number;

  /**
   *
   *          <p>Unique identifier for a player associated with the latency data.</p>
   *
   */
  PlayerId?: string;

  /**
   *
   *          <p>Name of the region that is associated with the latency value.</p>
   *
   */
  RegionIdentifier?: string;
}

export namespace PlayerLatency {
  export function isa(o: any): o is PlayerLatency {
    return _smithy.isa(o, "PlayerLatency");
  }
}

/**
 *
 *         <p>Queue setting that determines the highest latency allowed for individual players
 *             when placing a game session. When a latency policy is in force, a game session cannot be
 *             placed at any destination in a region where a player is reporting latency higher than
 *             the cap. Latency policies are only enforced when the placement request contains player
 *             latency information.</p>
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
 *
 */
export interface PlayerLatencyPolicy {
  __type?: "PlayerLatencyPolicy";
  /**
   *
   *         <p>The maximum latency value that is allowed for any player, in milliseconds. All
   *             policies must have a value set for this property.</p>
   *
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   *
   *         <p>The length of time, in seconds, that the policy is enforced while placing a new
   *             game session. A null value for this property means that the policy is enforced until the
   *             queue times out.</p>
   *
   */
  PolicyDurationSeconds?: number;
}

export namespace PlayerLatencyPolicy {
  export function isa(o: any): o is PlayerLatencyPolicy {
    return _smithy.isa(o, "PlayerLatencyPolicy");
  }
}

/**
 *
 *          <p>Properties describing a player session. Player session objects are created either
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
 *
 */
export interface PlayerSession {
  __type?: "PlayerSession";
  /**
   *
   *          <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  DnsName?: string;
  /**
   *
   *          <p>Unique identifier for a fleet that the player's game session is running on.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *          <p>Unique identifier for the game session that the player session is connected to.</p>
   *
   */
  GameSessionId?: string;

  /**
   *
   *          <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>
   *
   */
  PlayerData?: string;

  /**
   *
   *          <p>Unique identifier for a player that is associated with this player session.</p>
   *
   */
  PlayerId?: string;

  /**
   *
   *          <p>Unique identifier for a player session.</p>
   *
   */
  PlayerSessionId?: string;

  /**
   *
   *          <p>Port number for the game session. To connect to a Amazon GameLift server process, an app
   *         needs both the IP address and port number.</p>
   *
   */
  Port?: number;

  /**
   *
   *          <p>Current status of the player session.</p>
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
   *
   */
  Status?: PlayerSessionStatus | string;

  /**
   *
   *          <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  TerminationTime?: Date;
}

export namespace PlayerSession {
  export function isa(o: any): o is PlayerSession {
    return _smithy.isa(o, "PlayerSession");
  }
}

export enum PlayerSessionCreationPolicy {
  ACCEPT_ALL = "ACCEPT_ALL",
  DENY_ALL = "DENY_ALL"
}

export enum PlayerSessionStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  RESERVED = "RESERVED",
  TIMEDOUT = "TIMEDOUT"
}

export enum PolicyType {
  RuleBased = "RuleBased",
  TargetBased = "TargetBased"
}

export enum ProtectionPolicy {
  FullProtection = "FullProtection",
  NoProtection = "NoProtection"
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface PutScalingPolicyInput {
  __type?: "PutScalingPolicyInput";
  /**
   *
   *         <p>Comparison operator to use when measuring the metric against the threshold
   *             value.</p>
   *
   */
  ComparisonOperator?: ComparisonOperatorType | string;

  /**
   *
   *         <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   *
   */
  EvaluationPeriods?: number;

  /**
   *
   *         <p>Unique identifier for a fleet to apply this policy to. The fleet cannot be in any of the following
   *             statuses: ERROR or DELETING.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *          <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
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
   *
   */
  MetricName: MetricName | string | undefined;

  /**
   *
   *         <p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   *
   */
  PolicyType?: PolicyType | string;

  /**
   *
   *         <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   *
   */
  ScalingAdjustment?: number;

  /**
   *
   *         <p>Type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p>
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
   *
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | string;

  /**
   *
   *         <p>Object that contains settings for a target-based scaling policy.</p>
   *
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   *
   *         <p>Metric value used to trigger a scaling event.</p>
   *
   */
  Threshold?: number;
}

export namespace PutScalingPolicyInput {
  export function isa(o: any): o is PutScalingPolicyInput {
    return _smithy.isa(o, "PutScalingPolicyInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface PutScalingPolicyOutput extends $MetadataBearer {
  __type?: "PutScalingPolicyOutput";
  /**
   *
   *         <p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   *
   */
  Name?: string;
}

export namespace PutScalingPolicyOutput {
  export function isa(o: any): o is PutScalingPolicyOutput {
    return _smithy.isa(o, "PutScalingPolicyOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface RequestUploadCredentialsInput {
  __type?: "RequestUploadCredentialsInput";
  /**
   *
   *         <p>Unique identifier for a build to get credentials for.</p>
   *
   */
  BuildId: string | undefined;
}

export namespace RequestUploadCredentialsInput {
  export function isa(o: any): o is RequestUploadCredentialsInput {
    return _smithy.isa(o, "RequestUploadCredentialsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface RequestUploadCredentialsOutput extends $MetadataBearer {
  __type?: "RequestUploadCredentialsOutput";
  /**
   *
   *         <p>Amazon S3 path and key, identifying where the game build files are
   *             stored.</p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>AWS credentials required when uploading a game build to the storage location.
   *             These credentials have a limited lifespan and are valid only for the build they were
   *             issued for.</p>
   *
   */
  UploadCredentials?: AwsCredentials;
}

export namespace RequestUploadCredentialsOutput {
  export function isa(o: any): o is RequestUploadCredentialsOutput {
    return _smithy.isa(o, "RequestUploadCredentialsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface ResolveAliasInput {
  __type?: "ResolveAliasInput";
  /**
   *
   *         <p>Unique identifier for the alias you want to resolve.</p>
   *
   */
  AliasId: string | undefined;
}

export namespace ResolveAliasInput {
  export function isa(o: any): o is ResolveAliasInput {
    return _smithy.isa(o, "ResolveAliasInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface ResolveAliasOutput extends $MetadataBearer {
  __type?: "ResolveAliasOutput";
  /**
   *
   *         <p>Fleet identifier that is associated with the requested alias.</p>
   *
   */
  FleetId?: string;
}

export namespace ResolveAliasOutput {
  export function isa(o: any): o is ResolveAliasOutput {
    return _smithy.isa(o, "ResolveAliasOutput");
  }
}

/**
 *
 *         <p>Policy that limits the number of game sessions a player can create on the same
 *             fleet. This optional policy gives game owners control over how players can consume
 *             available game server resources. A resource creation policy makes the following
 *             statement: "An individual player can create a maximum number of new game sessions within
 *             a specified time period".</p>
 *         <p>The policy is evaluated when a player tries to create a new game session. For
 *             example, with a policy of 10 new game sessions and a time period of 60 minutes, on
 *             receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player
 *             (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the
 *             past 60 minutes.</p>
 *
 */
export interface ResourceCreationLimitPolicy {
  __type?: "ResourceCreationLimitPolicy";
  /**
   *
   *         <p>Maximum number of game sessions that an individual can create during the policy
   *             period. </p>
   *
   */
  NewGameSessionsPerCreator?: number;

  /**
   *
   *         <p>Time span used in evaluating the resource creation limit policy. </p>
   *
   */
  PolicyPeriodInMinutes?: number;
}

export namespace ResourceCreationLimitPolicy {
  export function isa(o: any): o is ResourceCreationLimitPolicy {
    return _smithy.isa(o, "ResourceCreationLimitPolicy");
  }
}

/**
 *
 *         <p>Routing configuration for a fleet alias.</p>
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
 *
 */
export interface RoutingStrategy {
  __type?: "RoutingStrategy";
  /**
   *
   *         <p>Unique identifier for a fleet that the alias points to.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Message text to be used with a terminal routing strategy.</p>
   *
   */
  Message?: string;

  /**
   *
   *         <p>Type of routing strategy.</p>
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
   *
   */
  Type?: RoutingStrategyType | string;
}

export namespace RoutingStrategy {
  export function isa(o: any): o is RoutingStrategy {
    return _smithy.isa(o, "RoutingStrategy");
  }
}

export enum RoutingStrategyType {
  SIMPLE = "SIMPLE",
  TERMINAL = "TERMINAL"
}

/**
 *
 *         <p>A collection of server process configurations that describe what processes to run
 *             on each instance in a fleet. Server processes run
 *             either a custom game build executable or a Realtime Servers script.
 *             Each instance in the fleet starts the specified server processes and continues to
 *             start new processes as existing processes end. An instance regularly
 *             checks for an updated run-time configuration. </p>
 *         <p>The run-time configuration enables the instances in a fleet to
 *             run multiple processes simultaneously. Learn more about
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">
 *                 Running Multiple Processes on a Fleet
 *             </a>.</p>
 *         <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total
 *             number of processes in a run-time configuration, add the values of the
 *                 <code>ConcurrentExecutions</code> parameter for each
 *                 <a>ServerProcess</a> object.</p>
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
 *                <p>Describe fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetUtilization</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeEC2InstanceLimits</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeFleetEvents</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                         <ul>
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
 *
 */
export interface RuntimeConfiguration {
  __type?: "RuntimeConfiguration";
  /**
   *
   *         <p>Maximum amount of time (in seconds) that a game session can remain in status
   *                 <code>ACTIVATING</code>. If the game session is not active before the timeout,
   *             activation is terminated and the game session status is changed to
   *                 <code>TERMINATED</code>.</p>
   *
   */
  GameSessionActivationTimeoutSeconds?: number;

  /**
   *
   *         <p>Maximum number of game sessions with status <code>ACTIVATING</code> to allow on an
   *             instance simultaneously. This setting limits the amount of instance resources that can
   *             be used for new game activations at any one time.</p>
   *
   */
  MaxConcurrentGameSessionActivations?: number;

  /**
   *
   *         <p>Collection of server process configurations that describe which server processes to
   *             run on each instance in a fleet.</p>
   *
   */
  ServerProcesses?: Array<ServerProcess>;
}

export namespace RuntimeConfiguration {
  export function isa(o: any): o is RuntimeConfiguration {
    return _smithy.isa(o, "RuntimeConfiguration");
  }
}

/**
 *
 *         <p>Location in Amazon Simple Storage Service (Amazon S3) where build or script files are
 *             stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. </p>
 *
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   *
   *         <p>Amazon S3 bucket identifier. This is the name of the S3 bucket.</p>
   *
   */
  Bucket?: string;

  /**
   *
   *         <p>Name of the zip file containing the  build files or script files. </p>
   *
   */
  Key?: string;

  /**
   *
   *         <p>Version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses
   *             this information when retrieving files from an S3 bucket that you own. Use this
   *             parameter to specify a specific version of the file; if not set, the latest version of
   *             the file is retrieved. </p>
   *
   */
  ObjectVersion?: string;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access the S3 bucket.</p>
   *
   */
  RoleArn?: string;
}

export namespace S3Location {
  export function isa(o: any): o is S3Location {
    return _smithy.isa(o, "S3Location");
  }
}

export enum ScalingAdjustmentType {
  ChangeInCapacity = "ChangeInCapacity",
  ExactCapacity = "ExactCapacity",
  PercentChangeInCapacity = "PercentChangeInCapacity"
}

/**
 *
 *          <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified
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
 *
 */
export interface ScalingPolicy {
  __type?: "ScalingPolicy";
  /**
   *
   *          <p>Comparison operator to use when measuring a metric against the threshold
   *         value.</p>
   *
   */
  ComparisonOperator?: ComparisonOperatorType | string;

  /**
   *
   *          <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *         scaling event is triggered.</p>
   *
   */
  EvaluationPeriods?: number;

  /**
   *
   *          <p>Unique identifier for a fleet that is associated with this scaling policy.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *          <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
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
   *
   */
  MetricName?: MetricName | string;

  /**
   *
   *          <p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *          <p>Type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   *
   */
  PolicyType?: PolicyType | string;

  /**
   *
   *          <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   *
   */
  ScalingAdjustment?: number;

  /**
   *
   *          <p>Type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p>
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
   *
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | string;

  /**
   *
   *          <p>Current status of the scaling policy. The scaling policy can be in force only when
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
   *
   */
  Status?: ScalingStatusType | string;

  /**
   *
   *          <p>Object that contains settings for a target-based scaling policy.</p>
   *
   */
  TargetConfiguration?: TargetConfiguration;

  /**
   *
   *          <p>Metric value used to trigger a scaling event.</p>
   *
   */
  Threshold?: number;
}

export namespace ScalingPolicy {
  export function isa(o: any): o is ScalingPolicy {
    return _smithy.isa(o, "ScalingPolicy");
  }
}

export enum ScalingStatusType {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETE_REQUESTED = "DELETE_REQUESTED",
  DELETING = "DELETING",
  ERROR = "ERROR",
  UPDATE_REQUESTED = "UPDATE_REQUESTED",
  UPDATING = "UPDATING"
}

/**
 *
 *
 *         <p>Properties describing a Realtime script.</p>
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
 *
 */
export interface Script {
  __type?: "Script";
  /**
   *
   *         <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Descriptive label that is associated with a script. Script names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Unique identifier for a Realtime script</p>
   *
   */
  ScriptId?: string;

  /**
   *
   *         <p>File size of the uploaded Realtime script, expressed in bytes. When files are uploaded
   *             from an S3 location, this value remains at "0".</p>
   *
   */
  SizeOnDisk?: number;

  /**
   *
   *         <p>Location in Amazon Simple Storage Service (Amazon S3) where build or script files are
   *             stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. </p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique.</p>
   *
   */
  Version?: string;
}

export namespace Script {
  export function isa(o: any): o is Script {
    return _smithy.isa(o, "Script");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface SearchGameSessionsInput {
  __type?: "SearchGameSessionsInput";
  /**
   *
   *         <p>Unique identifier for an alias associated with the fleet to search for active game sessions. Each request
   *             must reference either a fleet ID or alias ID, but not both.</p>
   *
   */
  AliasId?: string;

  /**
   *
   *         <p>String containing the search criteria for the session search. If no filter
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
   *
   */
  FilterExpression?: string;

  /**
   *
   *         <p>Unique identifier for a fleet to search for active game sessions. Each request must reference either a
   *             fleet ID or alias ID, but not both.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set
   *             or is set higher than 20. </p>
   *
   */
  Limit?: number;

  /**
   *
   *         <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this action. To start at the beginning of the result set, do not specify a value.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *         <p>Instructions on how to sort the search results. If no sort expression is included,
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
   *
   */
  SortExpression?: string;
}

export namespace SearchGameSessionsInput {
  export function isa(o: any): o is SearchGameSessionsInput {
    return _smithy.isa(o, "SearchGameSessionsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface SearchGameSessionsOutput extends $MetadataBearer {
  __type?: "SearchGameSessionsOutput";
  /**
   *
   *         <p>Collection of objects containing game session properties for each session matching
   *             the request.</p>
   *
   */
  GameSessions?: Array<GameSession>;

  /**
   *
   *         <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   *
   */
  NextToken?: string;
}

export namespace SearchGameSessionsOutput {
  export function isa(o: any): o is SearchGameSessionsOutput {
    return _smithy.isa(o, "SearchGameSessionsOutput");
  }
}

/**
 *
 *         <p>A set of instructions for launching server processes on each instance in a fleet.
 *             Server processes run either a custom game build executable or a Realtime Servers script.
 *             Each instruction set identifies the location of the custom game build executable or
 *             Realtime launch script, optional launch
 *             parameters, and the number of server processes with this configuration to maintain
 *             concurrently on the instance. Server process configurations make up a fleet's <code>
 *                 <a>RuntimeConfiguration</a>
 *             </code>.</p>
 *
 */
export interface ServerProcess {
  __type?: "ServerProcess";
  /**
   *
   *         <p>Number of server processes using this configuration to run concurrently on an
   *             instance.</p>
   *
   */
  ConcurrentExecutions: number | undefined;

  /**
   *
   *         <p>Location of the server executable in a custom game build or the name of the Realtime
   *             script file that contains the <code>Init()</code> function. Game builds and
   *             Realtime scripts are installed on
   *             instances at the root: </p>
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
   *
   */
  LaunchPath: string | undefined;

  /**
   *
   *         <p>Optional list of parameters to pass to the server executable or Realtime script on launch.</p>
   *
   */
  Parameters?: string;
}

export namespace ServerProcess {
  export function isa(o: any): o is ServerProcess {
    return _smithy.isa(o, "ServerProcess");
  }
}

export interface StartFleetActionsInput {
  __type?: "StartFleetActionsInput";
  /**
   *
   *         <p>List of actions to restart on the fleet.</p>
   *
   */
  Actions: Array<FleetAction | string> | undefined;

  /**
   *
   *         <p>Unique identifier for a fleet</p>
   *
   */
  FleetId: string | undefined;
}

export namespace StartFleetActionsInput {
  export function isa(o: any): o is StartFleetActionsInput {
    return _smithy.isa(o, "StartFleetActionsInput");
  }
}

export interface StartFleetActionsOutput extends $MetadataBearer {
  __type?: "StartFleetActionsOutput";
}

export namespace StartFleetActionsOutput {
  export function isa(o: any): o is StartFleetActionsOutput {
    return _smithy.isa(o, "StartFleetActionsOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface StartGameSessionPlacementInput {
  __type?: "StartGameSessionPlacementInput";
  /**
   *
   *          <p>Set of information on each player to create a player session for.</p>
   *
   */
  DesiredPlayerSessions?: Array<DesiredPlayerSession>;

  /**
   *
   *          <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *          <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *          <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   *
   */
  GameSessionName?: string;

  /**
   *
   *          <p>Name of the queue to use to place the new game session.</p>
   *
   */
  GameSessionQueueName: string | undefined;

  /**
   *
   *          <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   *
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   *
   *          <p>Unique identifier to assign to the new game session placement. This value is
   *         developer-defined. The value must be unique across all regions and cannot be reused
   *         unless you are resubmitting a canceled or timed-out placement request.</p>
   *
   */
  PlacementId: string | undefined;

  /**
   *
   *          <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS regions. This information is used to try to place the new game session where
   *         it can offer the best possible gameplay experience for the players. </p>
   *
   */
  PlayerLatencies?: Array<PlayerLatency>;
}

export namespace StartGameSessionPlacementInput {
  export function isa(o: any): o is StartGameSessionPlacementInput {
    return _smithy.isa(o, "StartGameSessionPlacementInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface StartGameSessionPlacementOutput extends $MetadataBearer {
  __type?: "StartGameSessionPlacementOutput";
  /**
   *
   *          <p>Object that describes the newly created game session placement. This object
   *         includes all the information provided in the request, as well as start/end time stamps
   *         and placement status. </p>
   *
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace StartGameSessionPlacementOutput {
  export function isa(o: any): o is StartGameSessionPlacementOutput {
    return _smithy.isa(o, "StartGameSessionPlacementOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface StartMatchBackfillInput {
  __type?: "StartMatchBackfillInput";
  /**
   *
   *         <p>Name of the matchmaker to use for this request. The name of the matchmaker that was
   *             used with the original game session is listed in the <a>GameSession</a>
   *             object, <code>MatchmakerData</code> property. This property contains a matchmaking
   *             configuration ARN value, which includes the matchmaker name. (In the ARN value
   *             "arn:aws:gamelift:us-west-2:111122223333:matchmakingconfiguration/MM-4v4", the
   *             matchmaking configuration name is "MM-4v4".) Use only the name for this
   *             parameter.</p>
   *
   */
  ConfigurationName: string | undefined;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session and uniquely identifies it. </p>
   *
   */
  GameSessionArn: string | undefined;

  /**
   *
   *         <p>Match information on all players that are currently assigned to the game session.
   *             This information is used by the matchmaker to find new players and add them to the
   *             existing game.</p>
   *         <ul>
   *             <li>
   *                 <p>PlayerID, PlayerAttributes, Team -\\- This information is maintained in the
   *                     <a>GameSession</a> object, <code>MatchmakerData</code> property,
   *                     for all players who are currently assigned to the game session. The matchmaker
   *                     data is in JSON syntax, formatted as a string. For more details, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-server.html#match-server-data">
   *                         Match Data</a>. </p>
   *             </li>
   *             <li>
   *                 <p>LatencyInMs -\\- If the matchmaker uses player latency, include a latency
   *                     value, in milliseconds, for the region that the game session is currently in. Do
   *                     not include latency values for any other region.</p>
   *             </li>
   *          </ul>
   *
   */
  Players: Array<Player> | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of
   *             a UUID. Use this identifier to track the match backfill ticket status and retrieve match
   *             results.</p>
   *
   */
  TicketId?: string;
}

export namespace StartMatchBackfillInput {
  export function isa(o: any): o is StartMatchBackfillInput {
    return _smithy.isa(o, "StartMatchBackfillInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface StartMatchBackfillOutput extends $MetadataBearer {
  __type?: "StartMatchBackfillOutput";
  /**
   *
   *         <p>Ticket representing the backfill matchmaking request. This object includes the
   *             information in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   *
   */
  MatchmakingTicket?: MatchmakingTicket;
}

export namespace StartMatchBackfillOutput {
  export function isa(o: any): o is StartMatchBackfillOutput {
    return _smithy.isa(o, "StartMatchBackfillOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface StartMatchmakingInput {
  __type?: "StartMatchmakingInput";
  /**
   *
   *         <p>Name of the matchmaking configuration to use for this request. Matchmaking
   *             configurations must exist in the same region as this request.</p>
   *
   */
  ConfigurationName: string | undefined;

  /**
   *
   *         <p>Information on each player to be matched. This information must include a player
   *             ID, and may contain player attributes and latency data to be used in the matchmaking
   *             process. After a successful match, <code>Player</code> objects contain the name of the
   *             team the player is assigned to.</p>
   *
   */
  Players: Array<Player> | undefined;

  /**
   *
   *         <p>Unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of
   *             a UUID. Use this identifier to track the matchmaking ticket status and retrieve match
   *             results.</p>
   *
   */
  TicketId?: string;
}

export namespace StartMatchmakingInput {
  export function isa(o: any): o is StartMatchmakingInput {
    return _smithy.isa(o, "StartMatchmakingInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface StartMatchmakingOutput extends $MetadataBearer {
  __type?: "StartMatchmakingOutput";
  /**
   *
   *         <p>Ticket representing the matchmaking request. This object include the information
   *             included in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   *
   */
  MatchmakingTicket?: MatchmakingTicket;
}

export namespace StartMatchmakingOutput {
  export function isa(o: any): o is StartMatchmakingOutput {
    return _smithy.isa(o, "StartMatchmakingOutput");
  }
}

export interface StopFleetActionsInput {
  __type?: "StopFleetActionsInput";
  /**
   *
   *         <p>List of actions to suspend on the fleet. </p>
   *
   */
  Actions: Array<FleetAction | string> | undefined;

  /**
   *
   *         <p>Unique identifier for a fleet</p>
   *
   */
  FleetId: string | undefined;
}

export namespace StopFleetActionsInput {
  export function isa(o: any): o is StopFleetActionsInput {
    return _smithy.isa(o, "StopFleetActionsInput");
  }
}

export interface StopFleetActionsOutput extends $MetadataBearer {
  __type?: "StopFleetActionsOutput";
}

export namespace StopFleetActionsOutput {
  export function isa(o: any): o is StopFleetActionsOutput {
    return _smithy.isa(o, "StopFleetActionsOutput");
  }
}

/**
 *
 *          <p>Represents the input for a request action.</p>
 *
 */
export interface StopGameSessionPlacementInput {
  __type?: "StopGameSessionPlacementInput";
  /**
   *
   *          <p>Unique identifier for a game session placement to cancel.</p>
   *
   */
  PlacementId: string | undefined;
}

export namespace StopGameSessionPlacementInput {
  export function isa(o: any): o is StopGameSessionPlacementInput {
    return _smithy.isa(o, "StopGameSessionPlacementInput");
  }
}

/**
 *
 *          <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface StopGameSessionPlacementOutput extends $MetadataBearer {
  __type?: "StopGameSessionPlacementOutput";
  /**
   *
   *          <p>Object that describes the canceled game session placement, with
   *         <code>CANCELLED</code> status and an end time stamp. </p>
   *
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace StopGameSessionPlacementOutput {
  export function isa(o: any): o is StopGameSessionPlacementOutput {
    return _smithy.isa(o, "StopGameSessionPlacementOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface StopMatchmakingInput {
  __type?: "StopMatchmakingInput";
  /**
   *
   *         <p>Unique identifier for a matchmaking ticket.</p>
   *
   */
  TicketId: string | undefined;
}

export namespace StopMatchmakingInput {
  export function isa(o: any): o is StopMatchmakingInput {
    return _smithy.isa(o, "StopMatchmakingInput");
  }
}

export interface StopMatchmakingOutput extends $MetadataBearer {
  __type?: "StopMatchmakingOutput";
}

export namespace StopMatchmakingOutput {
  export function isa(o: any): o is StopMatchmakingOutput {
    return _smithy.isa(o, "StopMatchmakingOutput");
  }
}

/**
 *
 *          <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A
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
 *
 */
export interface TargetConfiguration {
  __type?: "TargetConfiguration";
  /**
   *
   *          <p>Desired value to use with a target-based scaling policy. The value must be relevant
   *         for whatever metric the scaling policy is using. For example, in a policy using the
   *         metric PercentAvailableGameSessions, the target value should be the preferred size of
   *         the fleet's buffer (the percent of capacity that should be idle and ready for new game
   *         sessions).</p>
   *
   */
  TargetValue: number | undefined;
}

export namespace TargetConfiguration {
  export function isa(o: any): o is TargetConfiguration {
    return _smithy.isa(o, "TargetConfiguration");
  }
}

/**
 *
 *         <p>The service is unable to resolve the routing for a particular alias because it has
 *             a terminal <a>RoutingStrategy</a> associated with it. The message returned in
 *             this exception is the message defined in the routing strategy itself. Such requests
 *             should only be retried if the routing strategy for the specified alias is modified.
 *         </p>
 *
 */
export interface TerminalRoutingStrategyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TerminalRoutingStrategyException";
  $fault: "client";
  Message?: string;
}

export namespace TerminalRoutingStrategyException {
  export function isa(o: any): o is TerminalRoutingStrategyException {
    return _smithy.isa(o, "TerminalRoutingStrategyException");
  }
}

/**
 *
 *         <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 */
export interface UnauthorizedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return _smithy.isa(o, "UnauthorizedException");
  }
}

/**
 *
 *         <p>The requested operation is not supported in the region specified.</p>
 *
 */
export interface UnsupportedRegionException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedRegionException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedRegionException {
  export function isa(o: any): o is UnsupportedRegionException {
    return _smithy.isa(o, "UnsupportedRegionException");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateAliasInput {
  __type?: "UpdateAliasInput";
  /**
   *
   *         <p>Unique identifier for a fleet alias. Specify the alias you want to
   *             update.</p>
   *
   */
  AliasId: string | undefined;

  /**
   *
   *         <p>Human-readable description of an alias.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Object that specifies the fleet and routing type to use for the alias.</p>
   *
   */
  RoutingStrategy?: RoutingStrategy;
}

export namespace UpdateAliasInput {
  export function isa(o: any): o is UpdateAliasInput {
    return _smithy.isa(o, "UpdateAliasInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateAliasOutput extends $MetadataBearer {
  __type?: "UpdateAliasOutput";
  /**
   *
   *         <p>Object that contains the updated alias configuration.</p>
   *
   */
  Alias?: Alias;
}

export namespace UpdateAliasOutput {
  export function isa(o: any): o is UpdateAliasOutput {
    return _smithy.isa(o, "UpdateAliasOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateBuildInput {
  __type?: "UpdateBuildInput";
  /**
   *
   *         <p>Unique identifier for a build to update.</p>
   *
   */
  BuildId: string | undefined;

  /**
   *
   *         <p>Descriptive label that is associated with a build. Build names do not need to be unique. </p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique.</p>
   *
   */
  Version?: string;
}

export namespace UpdateBuildInput {
  export function isa(o: any): o is UpdateBuildInput {
    return _smithy.isa(o, "UpdateBuildInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateBuildOutput extends $MetadataBearer {
  __type?: "UpdateBuildOutput";
  /**
   *
   *         <p>Object that contains the updated build record.</p>
   *
   */
  Build?: Build;
}

export namespace UpdateBuildOutput {
  export function isa(o: any): o is UpdateBuildOutput {
    return _smithy.isa(o, "UpdateBuildOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateFleetAttributesInput {
  __type?: "UpdateFleetAttributesInput";
  /**
   *
   *         <p>Human-readable description of a fleet.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Unique identifier for a fleet to update attribute metadata for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Names of metric groups to include this fleet in. Amazon CloudWatch uses a fleet
   *             metric group is to aggregate metrics from multiple fleets. Use an existing metric group
   *             name to add this fleet to the group. Or use a new name to create a new metric group. A
   *             fleet can only be included in one metric group at a time.</p>
   *
   */
  MetricGroups?: Array<string>;

  /**
   *
   *         <p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Game session protection policy to apply to all new instances created in this fleet.
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
   *
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   *
   *         <p>Policy that limits the number of game sessions an individual player can create over
   *             a span of time. </p>
   *
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
}

export namespace UpdateFleetAttributesInput {
  export function isa(o: any): o is UpdateFleetAttributesInput {
    return _smithy.isa(o, "UpdateFleetAttributesInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateFleetAttributesOutput extends $MetadataBearer {
  __type?: "UpdateFleetAttributesOutput";
  /**
   *
   *         <p>Unique identifier for a fleet that was updated.</p>
   *
   */
  FleetId?: string;
}

export namespace UpdateFleetAttributesOutput {
  export function isa(o: any): o is UpdateFleetAttributesOutput {
    return _smithy.isa(o, "UpdateFleetAttributesOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateFleetCapacityInput {
  __type?: "UpdateFleetCapacityInput";
  /**
   *
   *         <p>Number of EC2 instances you want this fleet to host.</p>
   *
   */
  DesiredInstances?: number;

  /**
   *
   *         <p>Unique identifier for a fleet to update capacity for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Maximum value allowed for the fleet's instance count. Default if not set is
   *             1.</p>
   *
   */
  MaxSize?: number;

  /**
   *
   *         <p>Minimum value allowed for the fleet's instance count. Default if not set is
   *             0.</p>
   *
   */
  MinSize?: number;
}

export namespace UpdateFleetCapacityInput {
  export function isa(o: any): o is UpdateFleetCapacityInput {
    return _smithy.isa(o, "UpdateFleetCapacityInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateFleetCapacityOutput extends $MetadataBearer {
  __type?: "UpdateFleetCapacityOutput";
  /**
   *
   *         <p>Unique identifier for a fleet that was updated.</p>
   *
   */
  FleetId?: string;
}

export namespace UpdateFleetCapacityOutput {
  export function isa(o: any): o is UpdateFleetCapacityOutput {
    return _smithy.isa(o, "UpdateFleetCapacityOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateFleetPortSettingsInput {
  __type?: "UpdateFleetPortSettingsInput";
  /**
   *
   *         <p>Unique identifier for a fleet to update port settings for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Collection of port settings to be added to the fleet record.</p>
   *
   */
  InboundPermissionAuthorizations?: Array<IpPermission>;

  /**
   *
   *         <p>Collection of port settings to be removed from the fleet record.</p>
   *
   */
  InboundPermissionRevocations?: Array<IpPermission>;
}

export namespace UpdateFleetPortSettingsInput {
  export function isa(o: any): o is UpdateFleetPortSettingsInput {
    return _smithy.isa(o, "UpdateFleetPortSettingsInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateFleetPortSettingsOutput extends $MetadataBearer {
  __type?: "UpdateFleetPortSettingsOutput";
  /**
   *
   *         <p>Unique identifier for a fleet that was updated.</p>
   *
   */
  FleetId?: string;
}

export namespace UpdateFleetPortSettingsOutput {
  export function isa(o: any): o is UpdateFleetPortSettingsOutput {
    return _smithy.isa(o, "UpdateFleetPortSettingsOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateGameSessionInput {
  __type?: "UpdateGameSessionInput";
  /**
   *
   *         <p>Unique identifier for the game session to update.</p>
   *
   */
  GameSessionId: string | undefined;

  /**
   *
   *         <p>Maximum number of players that can be connected simultaneously to the game session.</p>
   *
   */
  MaximumPlayerSessionCount?: number;

  /**
   *
   *         <p>Descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Policy determining whether or not the game session accepts new players.</p>
   *
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | string;

  /**
   *
   *         <p>Game session protection policy to apply to this game session only.</p>
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
   *
   */
  ProtectionPolicy?: ProtectionPolicy | string;
}

export namespace UpdateGameSessionInput {
  export function isa(o: any): o is UpdateGameSessionInput {
    return _smithy.isa(o, "UpdateGameSessionInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateGameSessionOutput extends $MetadataBearer {
  __type?: "UpdateGameSessionOutput";
  /**
   *
   *         <p>Object that contains the updated game session metadata.</p>
   *
   */
  GameSession?: GameSession;
}

export namespace UpdateGameSessionOutput {
  export function isa(o: any): o is UpdateGameSessionOutput {
    return _smithy.isa(o, "UpdateGameSessionOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateGameSessionQueueInput {
  __type?: "UpdateGameSessionQueueInput";
  /**
   *
   *         <p>List of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order. When updating this list, provide a complete list of destinations.</p>
   *
   */
  Destinations?: Array<GameSessionQueueDestination>;

  /**
   *
   *         <p>Descriptive label that is associated with game session queue. Queue names must be unique within each region.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>Collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, it is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. When updating policies, provide a complete collection of
   *             policies.</p>
   *
   */
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;

  /**
   *
   *         <p>Maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   *
   */
  TimeoutInSeconds?: number;
}

export namespace UpdateGameSessionQueueInput {
  export function isa(o: any): o is UpdateGameSessionQueueInput {
    return _smithy.isa(o, "UpdateGameSessionQueueInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateGameSessionQueueOutput extends $MetadataBearer {
  __type?: "UpdateGameSessionQueueOutput";
  /**
   *
   *         <p>Object that describes the newly updated game session queue.</p>
   *
   */
  GameSessionQueue?: GameSessionQueue;
}

export namespace UpdateGameSessionQueueOutput {
  export function isa(o: any): o is UpdateGameSessionQueueOutput {
    return _smithy.isa(o, "UpdateGameSessionQueueOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateMatchmakingConfigurationInput {
  __type?: "UpdateMatchmakingConfigurationInput";
  /**
   *
   *         <p>Flag that determines whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE.</p>
   *
   */
  AcceptanceRequired?: boolean;

  /**
   *
   *         <p>Length of time (in seconds) to wait for players to accept a proposed match. If any
   *             player rejects the match or fails to accept before the timeout, the ticket continues to
   *             look for an acceptable match.</p>
   *
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   *
   *         <p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies
   *             a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>
   *
   */
  AdditionalPlayerCount?: number;

  /**
   *
   *         <p>Method used to backfill game sessions created with this matchmaking configuration. Specify MANUAL
   *             when your game manages backfill requests manually or does not use the match backfill feature.
   *             Specify AUTOMATIC
   *             to have GameLift create a <a>StartMatchBackfill</a> request whenever a game session has
   *             one or more open slots. Learn more about manual and automatic backfill in
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html">Backfill Existing Games with FlexMatch</a>.</p>
   *
   */
  BackfillMode?: BackfillMode | string;

  /**
   *
   *         <p>Information to add to all events related to the matchmaking configuration. </p>
   *
   */
  CustomEventData?: string;

  /**
   *
   *         <p>Descriptive label that is associated with matchmaking configuration.</p>
   *
   */
  Description?: string;

  /**
   *
   *         <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>
   *
   */
  GameProperties?: Array<GameProperty>;

  /**
   *
   *         <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match. </p>
   *
   */
  GameSessionData?: string;

  /**
   *
   *         <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:<region>:<aws account>:gamesessionqueue/<queue name></code>. These queues are used when placing game sessions for matches that are
   *             created with this matchmaking configuration. Queues can be located in any
   *             region.</p>
   *
   */
  GameSessionQueueArns?: Array<string>;

  /**
   *
   *         <p>Unique identifier for a matchmaking configuration to update.</p>
   *
   */
  Name: string | undefined;

  /**
   *
   *         <p>SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html">
   *                 Setting up Notifications for Matchmaking</a> for more information.</p>
   *
   */
  NotificationTarget?: string;

  /**
   *
   *         <p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before
   *             timing out. Requests that fail due to timing out can be resubmitted as needed.</p>
   *
   */
  RequestTimeoutSeconds?: number;

  /**
   *
   *         <p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use
   *             rule sets that are defined in the same region.</p>
   *
   */
  RuleSetName?: string;
}

export namespace UpdateMatchmakingConfigurationInput {
  export function isa(o: any): o is UpdateMatchmakingConfigurationInput {
    return _smithy.isa(o, "UpdateMatchmakingConfigurationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateMatchmakingConfigurationOutput extends $MetadataBearer {
  __type?: "UpdateMatchmakingConfigurationOutput";
  /**
   *
   *         <p>Object that describes the updated matchmaking configuration.</p>
   *
   */
  Configuration?: MatchmakingConfiguration;
}

export namespace UpdateMatchmakingConfigurationOutput {
  export function isa(o: any): o is UpdateMatchmakingConfigurationOutput {
    return _smithy.isa(o, "UpdateMatchmakingConfigurationOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface UpdateRuntimeConfigurationInput {
  __type?: "UpdateRuntimeConfigurationInput";
  /**
   *
   *         <p>Unique identifier for a fleet to update run-time configuration for.</p>
   *
   */
  FleetId: string | undefined;

  /**
   *
   *         <p>Instructions for launching server processes on each instance in the fleet. Server processes run
   *             either a custom game build executable or a Realtime Servers script. The
   *             run-time configuration lists the types of server processes to run on an instance and includes
   *             the following configuration settings: the server executable or launch script file, launch parameters, and
   *             the number of processes to run concurrently on each instance.
   *             A CreateFleet request must include a run-time configuration with at least one server
   *             process configuration.</p>
   *
   */
  RuntimeConfiguration: RuntimeConfiguration | undefined;
}

export namespace UpdateRuntimeConfigurationInput {
  export function isa(o: any): o is UpdateRuntimeConfigurationInput {
    return _smithy.isa(o, "UpdateRuntimeConfigurationInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface UpdateRuntimeConfigurationOutput extends $MetadataBearer {
  __type?: "UpdateRuntimeConfigurationOutput";
  /**
   *
   *         <p>The run-time configuration currently in force. If the update was successful, this
   *             object matches the one in the request.</p>
   *
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export namespace UpdateRuntimeConfigurationOutput {
  export function isa(o: any): o is UpdateRuntimeConfigurationOutput {
    return _smithy.isa(o, "UpdateRuntimeConfigurationOutput");
  }
}

export interface UpdateScriptInput {
  __type?: "UpdateScriptInput";
  /**
   *
   *         <p>Descriptive label that is associated with a script. Script names do not need to be unique.</p>
   *
   */
  Name?: string;

  /**
   *
   *         <p>Unique identifier for a Realtime script to update.</p>
   *
   */
  ScriptId: string | undefined;

  /**
   *
   *         <p>Location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is
   *             stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the
   *             "key"), and a role ARN that allows Amazon GameLift to access the  Amazon S3 storage location. The S3
   *             bucket must be in the same region where you want to create a new script. By default,
   *             Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning
   *             turned on, you can use the <code>ObjectVersion</code> parameter to specify an earlier
   *             version.  </p>
   *
   */
  StorageLocation?: S3Location;

  /**
   *
   *         <p>Version that is associated with a build or script. Version strings do not need to be unique.</p>
   *
   */
  Version?: string;

  /**
   *
   *         <p>Data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *         <p>When using the AWS CLI tool to create a script, this parameter is set to the zip file
   *             name. It must be prepended with the string "fileb://" to indicate that the file data is
   *             a binary object. For example: <code>--zip-file
   *             fileb://myRealtimeScript.zip</code>.</p>
   *
   */
  ZipFile?: Uint8Array;
}

export namespace UpdateScriptInput {
  export function isa(o: any): o is UpdateScriptInput {
    return _smithy.isa(o, "UpdateScriptInput");
  }
}

export interface UpdateScriptOutput extends $MetadataBearer {
  __type?: "UpdateScriptOutput";
  /**
   *
   *         <p>The newly created script record with a unique script ID. The new script's storage
   *             location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket
   *             under your account, the storage location reflects the information that was provided in
   *             the <i>CreateScript</i> request; (2) If the script file was uploaded from
   *             a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift
   *             service.</p>
   *
   */
  Script?: Script;
}

export namespace UpdateScriptOutput {
  export function isa(o: any): o is UpdateScriptOutput {
    return _smithy.isa(o, "UpdateScriptOutput");
  }
}

/**
 *
 *         <p>Represents the input for a request action.</p>
 *
 */
export interface ValidateMatchmakingRuleSetInput {
  __type?: "ValidateMatchmakingRuleSetInput";
  /**
   *
   *         <p>Collection of matchmaking rules to validate, formatted as a JSON string.</p>
   *
   */
  RuleSetBody: string | undefined;
}

export namespace ValidateMatchmakingRuleSetInput {
  export function isa(o: any): o is ValidateMatchmakingRuleSetInput {
    return _smithy.isa(o, "ValidateMatchmakingRuleSetInput");
  }
}

/**
 *
 *         <p>Represents the returned data in response to a request action.</p>
 *
 */
export interface ValidateMatchmakingRuleSetOutput extends $MetadataBearer {
  __type?: "ValidateMatchmakingRuleSetOutput";
  /**
   *
   *         <p>Response indicating whether the rule set is valid.</p>
   *
   */
  Valid?: boolean;
}

export namespace ValidateMatchmakingRuleSetOutput {
  export function isa(o: any): o is ValidateMatchmakingRuleSetOutput {
    return _smithy.isa(o, "ValidateMatchmakingRuleSetOutput");
  }
}

/**
 *
 *         <p>Represents an authorization for a VPC peering connection between the VPC for an
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
 *
 */
export interface VpcPeeringAuthorization {
  __type?: "VpcPeeringAuthorization";
  /**
   *
   *         <p>Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *         <p>Time stamp indicating when this authorization expires (24 hours after issuance).
   *             Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   *
   */
  ExpirationTime?: Date;

  /**
   *
   *         <p>Unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   *
   */
  GameLiftAwsAccountId?: string;

  /**
   *
   *         <p></p>
   *
   */
  PeerVpcAwsAccountId?: string;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *
   */
  PeerVpcId?: string;
}

export namespace VpcPeeringAuthorization {
  export function isa(o: any): o is VpcPeeringAuthorization {
    return _smithy.isa(o, "VpcPeeringAuthorization");
  }
}

/**
 *
 *         <p>Represents a peering connection between a VPC on one of your AWS accounts and the
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
 *
 */
export interface VpcPeeringConnection {
  __type?: "VpcPeeringConnection";
  /**
   *
   *         <p>Unique identifier for a fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>
   *
   */
  FleetId?: string;

  /**
   *
   *         <p>Unique identifier for the VPC that contains the Amazon GameLift fleet for this
   *             connection. This VPC is managed by Amazon GameLift and does not appear in your AWS account.
   *         </p>
   *
   */
  GameLiftVpcId?: string;

  /**
   *
   *         <p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the
   *             GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these
   *             blocks cannot overlap or the peering connection cannot be created. </p>
   *
   */
  IpV4CidrBlock?: string;

  /**
   *
   *         <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *
   */
  PeerVpcId?: string;

  /**
   *
   *         <p>Object that contains status information about the connection. Status indicates if a
   *             connection is pending, successful, or failed.</p>
   *
   */
  Status?: VpcPeeringConnectionStatus;

  /**
   *
   *         <p>Unique identifier that is automatically assigned to the connection record. This ID
   *             is referenced in VPC peering connection events, and is used when deleting a connection
   *             with <a>DeleteVpcPeeringConnection</a>. </p>
   *
   */
  VpcPeeringConnectionId?: string;
}

export namespace VpcPeeringConnection {
  export function isa(o: any): o is VpcPeeringConnection {
    return _smithy.isa(o, "VpcPeeringConnection");
  }
}

/**
 *
 *         <p>Represents status information for a VPC peering connection. Status is associated
 *             with a <a>VpcPeeringConnection</a> object. Status codes and messages are
 *             provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also
 *             communicated as a fleet <a>Event</a>.</p>
 *
 */
export interface VpcPeeringConnectionStatus {
  __type?: "VpcPeeringConnectionStatus";
  /**
   *
   *         <p>Code indicating the status of a VPC peering connection.</p>
   *
   */
  Code?: string;

  /**
   *
   *         <p>Additional messaging associated with the connection status. </p>
   *
   */
  Message?: string;
}

export namespace VpcPeeringConnectionStatus {
  export function isa(o: any): o is VpcPeeringConnectionStatus {
    return _smithy.isa(o, "VpcPeeringConnectionStatus");
  }
}
