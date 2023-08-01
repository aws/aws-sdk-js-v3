// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SimSpaceWeaverServiceException as __BaseException } from "./SimSpaceWeaverServiceException";

/**
 * @public
 * <p/>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A collection of TCP/UDP ports for a custom or service app.</p>
 */
export interface SimulationAppPortMapping {
  /**
   * @public
   * <p>The TCP/UDP port number of the app, declared in the simulation schema. SimSpace Weaver maps
   *          the <code>Declared</code> port to the <code>Actual</code> port. The source code for the
   *          app should bind to the <code>Declared</code> port.</p>
   */
  Declared?: number;

  /**
   * @public
   * <p>The TCP/UDP port number of the running app. SimSpace Weaver dynamically assigns this port
   *          number when the app starts. SimSpace Weaver maps the <code>Declared</code> port to the
   *             <code>Actual</code> port. Clients connect to the app using the app's IP address
   *          and the <code>Actual</code> port number.</p>
   */
  Actual?: number;
}

/**
 * @public
 * @enum
 */
export const ClockStatus = {
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ClockStatus = (typeof ClockStatus)[keyof typeof ClockStatus];

/**
 * @public
 * @enum
 */
export const ClockTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ClockTargetStatus = (typeof ClockTargetStatus)[keyof typeof ClockTargetStatus];

/**
 * @public
 * <p>The Amazon CloudWatch Logs log group for the simulation. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
 *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
 */
export interface CloudWatchLogsLogGroup {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group for the simulation.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   */
  LogGroupArn?: string;
}

/**
 * @public
 * <p/>
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
 * @public
 * <p>An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file.</p>
 */
export interface S3Destination {
  /**
   * @public
   * <p>The name of an Amazon S3 bucket. For more information about buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating,
   *             configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>A string prefix for an Amazon S3 object key. It's usually a folder name.
   *          For more information about folders in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html">Organizing objects in the Amazon S3 console using folders</a>
   *    in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  ObjectKeyPrefix?: string;
}

/**
 * @public
 */
export interface CreateSnapshotInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates the snapshot file.</p>
   *          <p>The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation.</p>
   */
  Destination: S3Destination | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotOutput {}

/**
 * @public
 * <p/>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p/>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAppInput {
  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppOutput {}

/**
 * @public
 */
export interface DeleteSimulationInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface DeleteSimulationOutput {}

/**
 * @public
 */
export interface DescribeAppInput {
  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

/**
 * @public
 * <p>Information about the network endpoint that you can use to connect to your custom or
 *          service app. For more information about SimSpace Weaver apps, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_apps">Key concepts: Apps</a>
 *    in the <i>SimSpace Weaver User Guide</i>..</p>
 */
export interface SimulationAppEndpointInfo {
  /**
   * @public
   * <p>The IP address of the app. SimSpace Weaver dynamically assigns this IP address when the
   *          app starts.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The inbound TCP/UDP port numbers of the app. The combination of an IP address and
   *          a port number form a network endpoint.</p>
   */
  IngressPortMappings?: SimulationAppPortMapping[];
}

/**
 * @public
 * <p>Options that apply when the app starts. These options override default behavior.</p>
 */
export interface LaunchOverrides {
  /**
   * @public
   * <p>App launch commands and command line parameters that override the launch command
   *          configured in the simulation schema.</p>
   */
  LaunchCommands?: string[];
}

/**
 * @public
 * @enum
 */
export const SimulationAppStatus = {
  ERROR: "ERROR",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationAppStatus = (typeof SimulationAppStatus)[keyof typeof SimulationAppStatus];

/**
 * @public
 * @enum
 */
export const SimulationAppTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationAppTargetStatus = (typeof SimulationAppTargetStatus)[keyof typeof SimulationAppTargetStatus];

/**
 * @public
 */
export interface DescribeAppOutput {
  /**
   * @public
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The current lifecycle state of the custom app.</p>
   */
  Status?: SimulationAppStatus | string;

  /**
   * @public
   * <p>The desired lifecycle state of the custom app.</p>
   */
  TargetStatus?: SimulationAppTargetStatus | string;

  /**
   * @public
   * <p>Options that apply when the app starts. These options override default behavior.</p>
   */
  LaunchOverrides?: LaunchOverrides;

  /**
   * @public
   * <p>The description of the app.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the network endpoint for the custom app. You can use the endpoint to connect to the custom app.</p>
   */
  EndpointInfo?: SimulationAppEndpointInfo;
}

/**
 * @public
 */
export interface DescribeSimulationInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * @public
 * <p>Status information about the simulation clock.</p>
 */
export interface SimulationClock {
  /**
   * @public
   * <p>The current status of the simulation clock.</p>
   */
  Status?: ClockStatus | string;

  /**
   * @public
   * <p>The desired status of the simulation clock.</p>
   */
  TargetStatus?: ClockTargetStatus | string;
}

/**
 * @public
 * @enum
 */
export const LifecycleManagementStrategy = {
  ByRequest: "ByRequest",
  BySpatialSubdivision: "BySpatialSubdivision",
  PerWorker: "PerWorker",
  Unknown: "Unknown",
} as const;

/**
 * @public
 */
export type LifecycleManagementStrategy =
  (typeof LifecycleManagementStrategy)[keyof typeof LifecycleManagementStrategy];

/**
 * @public
 * <p>A collection of app instances that run the same executable app code and have the same
 *          launch options and commands.</p>
 *          <p>For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
 *    in the <i>SimSpace Weaver User Guide</i>.</p>
 */
export interface Domain {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of lifecycle management for apps in the domain. Indicates whether apps in this
   *          domain are <i>managed</i> (SimSpace Weaver starts and stops the apps) or
   *             <i>unmanaged</i> (you must start and stop the apps).</p>
   *          <p class="title">
   *             <b>Lifecycle types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PerWorker</code> – Managed: SimSpace Weaver starts one app on each
   *                worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BySpatialSubdivision</code> – Managed: SimSpace Weaver starts one app for
   *                each spatial partition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ByRequest</code> – Unmanaged: You use the <code>StartApp</code>
   *                API to start the apps and use the <code>StopApp</code> API to stop the apps.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: LifecycleManagementStrategy | string;
}

/**
 * @public
 * <p>A collection of additional state information, such as
 * domain and clock configuration.</p>
 */
export interface LiveSimulationState {
  /**
   * @public
   * <p>A list of domains for the simulation. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
   *    in the <i>SimSpace Weaver User Guide</i>.</p>
   */
  Domains?: Domain[];

  /**
   * @public
   * <p>A list of simulation clocks.</p>
   *          <note>
   *             <p>At this time, a simulation has only one clock.</p>
   *          </note>
   */
  Clocks?: SimulationClock[];
}

/**
 * @public
 * <p>The location where SimSpace Weaver sends simulation log data.</p>
 */
export interface LogDestination {
  /**
   * @public
   * <p>An Amazon CloudWatch Logs log group that stores simulation log data. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   */
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}

/**
 * @public
 * <p>The logging configuration for a simulation.</p>
 */
export interface LoggingConfiguration {
  /**
   * @public
   * <p>A list of the locations where SimSpace Weaver sends simulation log data.</p>
   */
  Destinations?: LogDestination[];
}

/**
 * @public
 * <p>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip
 *          files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
 *                <i>Amazon Simple Storage Service User Guide</i>
 *             </a>.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The name of an Amazon S3 bucket. For more information about buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating,
   *             configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The key name of an object in Amazon S3. For more information about Amazon S3 objects and object
   *          keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html">Uploading,
   *             downloading, and working with objects in Amazon S3</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   */
  ObjectKey?: string;
}

/**
 * @public
 * @enum
 */
export const SimulationStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  SNAPSHOT_IN_PROGRESS: "SNAPSHOT_IN_PROGRESS",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationStatus = (typeof SimulationStatus)[keyof typeof SimulationStatus];

/**
 * @public
 * @enum
 */
export const SimulationTargetStatus = {
  DELETED: "DELETED",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationTargetStatus = (typeof SimulationTargetStatus)[keyof typeof SimulationTargetStatus];

/**
 * @public
 */
export interface DescribeSimulationOutput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   */
  ExecutionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the simulation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The current lifecycle state of the simulation.</p>
   */
  Status?: SimulationStatus | string;

  /**
   * @public
   * <p>The desired lifecycle state of the simulation.</p>
   */
  TargetStatus?: SimulationTargetStatus | string;

  /**
   * @public
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   */
  SchemaS3Location?: S3Location;

  /**
   * @public
   * @deprecated
   *
   * <p>An error message that SimSpace Weaver returns only if there is a problem with the simulation
   *          schema.</p>
   */
  SchemaError?: string;

  /**
   * @public
   * <p>Settings that control how SimSpace Weaver handles your simulation log data.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * @public
   * <p>A collection of additional state information, such as
   * domain and clock configuration.</p>
   */
  LiveSimulationState?: LiveSimulationState;

  /**
   * @public
   * <p>The maximum running time of the simulation,
   *    specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the
   *    other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the
   *    simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.</p>
   */
  MaximumDuration?: string;

  /**
   * @public
   * <p>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip
   *          files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   */
  SnapshotS3Location?: S3Location;

  /**
   * @public
   * <p>An error message that SimSpace Weaver returns only if a problem occurs when the simulation is in the <code>STARTING</code> state.</p>
   */
  StartError?: string;
}

/**
 * @public
 */
export interface ListAppsInput {
  /**
   * @public
   * <p>The name of the simulation that you want to list apps for.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The name of the domain that you want to list apps for.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The maximum number of apps to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A collection of metadata about the app.</p>
 */
export interface SimulationAppMetadata {
  /**
   * @public
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;

  /**
   * @public
   * <p>The domain of the app. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
   *    in the <i>SimSpace Weaver User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The current status of the app.</p>
   */
  Status?: SimulationAppStatus | string;

  /**
   * @public
   * <p>The desired status of the app.</p>
   */
  TargetStatus?: SimulationAppTargetStatus | string;
}

/**
 * @public
 */
export interface ListAppsOutput {
  /**
   * @public
   * <p>The list of apps for the given simulation and domain.</p>
   */
  Apps?: SimulationAppMetadata[];

  /**
   * @public
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSimulationsInput {
  /**
   * @public
   * <p>The maximum number of simulations to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A collection of data about the simulation.</p>
 */
export interface SimulationMetadata {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The current status of the simulation.</p>
   */
  Status?: SimulationStatus | string;

  /**
   * @public
   * <p>The desired status of the simulation.</p>
   */
  TargetStatus?: SimulationTargetStatus | string;
}

/**
 * @public
 */
export interface ListSimulationsOutput {
  /**
   * @public
   * <p>The list of simulations.</p>
   */
  Simulations?: SimulationMetadata[];

  /**
   * @public
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tags for the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p/>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartAppInput {
  /**
   * @public
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the app.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Options that apply when the app starts. These options override default behavior.</p>
   */
  LaunchOverrides?: LaunchOverrides;
}

/**
 * @public
 */
export interface StartAppOutput {
  /**
   * @public
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;
}

/**
 * @public
 */
export interface StartClockInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StartClockOutput {}

/**
 * @public
 */
export interface StartSimulationInput {
  /**
   * @public
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the simulation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   *          <p>Provide a <code>SchemaS3Location</code> to start your simulation from a schema.</p>
   *          <p>If you provide a <code>SchemaS3Location</code> then you can't provide a <code>SnapshotS3Location</code>.</p>
   */
  SchemaS3Location?: S3Location;

  /**
   * @public
   * <p>The maximum running time of the simulation,
   *    specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the
   *    other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the
   *    simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.</p>
   */
  MaximumDuration?: string;

  /**
   * @public
   * <p>A list of tags for the simulation. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
   *    <i>Amazon Web Services General Reference</i>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The location of the snapshot .zip file in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   *          <p>Provide a <code>SnapshotS3Location</code> to start your simulation from a snapshot.</p>
   *          <p>The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation.</p>
   *          <p>If you provide a <code>SnapshotS3Location</code> then you can't provide a <code>SchemaS3Location</code>.</p>
   */
  SnapshotS3Location?: S3Location;
}

/**
 * @public
 */
export interface StartSimulationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   */
  ExecutionId?: string;

  /**
   * @public
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface StopAppInput {
  /**
   * @public
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * @public
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

/**
 * @public
 */
export interface StopAppOutput {}

/**
 * @public
 */
export interface StopClockInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StopClockOutput {}

/**
 * @public
 */
export interface StopSimulationInput {
  /**
   * @public
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StopSimulationOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add tags to.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tags to apply to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 * <p/>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const StartAppInputFilterSensitiveLog = (obj: StartAppInput): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSimulationInputFilterSensitiveLog = (obj: StartSimulationInput): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});
