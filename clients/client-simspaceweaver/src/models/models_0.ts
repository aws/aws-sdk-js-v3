// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SimSpaceWeaverServiceException as __BaseException } from "./SimSpaceWeaverServiceException";

/**
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
 * <p>A collection of TCP/UDP ports for a custom or service app.</p>
 */
export interface SimulationAppPortMapping {
  /**
   * <p>The TCP/UDP port number of the app, declared in the simulation schema. SimSpace Weaver maps
   *          the <code>Declared</code> port to the <code>Actual</code> port. The source code for the
   *          app should bind to the <code>Declared</code> port.</p>
   */
  Declared?: number;

  /**
   * <p>The TCP/UDP port number of the running app. SimSpace Weaver dynamically assigns this port
   *          number when the app starts. SimSpace Weaver maps the <code>Declared</code> port to the
   *             <code>Actual</code> port. Clients connect to the app using the app's IP address
   *          and the <code>Actual</code> port number.</p>
   */
  Actual?: number;
}

export enum ClockStatus {
  STARTED = "STARTED",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UNKNOWN = "UNKNOWN",
}

export enum ClockTargetStatus {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>The Amazon CloudWatch Logs log group for the simulation. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
 *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
 */
export interface CloudWatchLogsLogGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group for the simulation.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   */
  LogGroupArn?: string;
}

/**
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

export interface DeleteAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

export interface DeleteAppOutput {}

/**
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

export interface DeleteSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

export interface DeleteSimulationOutput {}

export interface DescribeAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

/**
 * <p>Information about the network endpoint that you can use to connect to your custom or
 *          service app.</p>
 */
export interface SimulationAppEndpointInfo {
  /**
   * <p>The IP address of the app. SimSpace Weaver dynamically assigns this IP address when the
   *          app starts.</p>
   */
  Address?: string;

  /**
   * <p>The inbound TCP/UDP port numbers of the app. The combination of an IP address and
   *          a port number form a network endpoint.</p>
   */
  IngressPortMappings?: SimulationAppPortMapping[];
}

/**
 * <p>Options that apply when the app starts. These optiAons override default behavior.</p>
 */
export interface LaunchOverrides {
  /**
   * <p>App launch commands and command line parameters that override the launch command
   *          configured in the simulation schema.</p>
   */
  LaunchCommands?: string[];
}

export enum SimulationAppStatus {
  ERROR = "ERROR",
  STARTED = "STARTED",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UNKNOWN = "UNKNOWN",
}

export enum SimulationAppTargetStatus {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
  UNKNOWN = "UNKNOWN",
}

export interface DescribeAppOutput {
  /**
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain?: string;

  /**
   * <p>The current lifecycle state of the custom app.</p>
   */
  Status?: SimulationAppStatus | string;

  /**
   * <p>The desired lifecycle state of the custom app.</p>
   */
  TargetStatus?: SimulationAppTargetStatus | string;

  /**
   * <p>Options that apply when the app starts. These optiAons override default behavior.</p>
   */
  LaunchOverrides?: LaunchOverrides;

  /**
   * <p>The description of the app.</p>
   */
  Description?: string;

  /**
   * <p>Information about the network endpoint for the custom app. You can use the endpoint to connect to the custom app.</p>
   */
  EndpointInfo?: SimulationAppEndpointInfo;
}

export interface DescribeSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

/**
 * <p>Status information about the simulation clock.</p>
 */
export interface SimulationClock {
  /**
   * <p>The current status of the simulation clock.</p>
   */
  Status?: ClockStatus | string;

  /**
   * <p>The desired status of the simulation clock.</p>
   */
  TargetStatus?: ClockTargetStatus | string;
}

export enum LifecycleManagementStrategy {
  ByRequest = "ByRequest",
  BySpatialSubdivision = "BySpatialSubdivision",
  PerWorker = "PerWorker",
  Unknown = "Unknown",
}

/**
 * <p>A collection of app instances that run the same executable app code and have the same
 *          launch options and commands.</p>
 *          <p>For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html">Key concepts</a>
 *    in the <i>Amazon Web Services SimSpace Weaver User Guide</i>.</p>
 */
export interface Domain {
  /**
   * <p>The name of the domain.</p>
   */
  Name?: string;

  /**
   * <p>The type of lifecycle management for apps in the domain. This value indicates whether
   *          apps in this domain are <i>managed</i> (SimSpace Weaver starts and stops the apps) or
   *             <i>unmanaged</i> (you must start and stop the apps).</p>
   *          <p class="title">
   *             <b>Lifecycle types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PerWorker</code> – Managed: SimSpace Weaver starts 1 app on each worker</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BySpatialSubdivision</code> – Managed: SimSpace Weaver starts 1 app for each spatial partition</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ByRequest</code> – Unmanaged: You use the <b>StartApp</b>
   *                API to start the apps and use the <b>StopApp</b> API to stop the apps.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The lifecycle types will change when the service is released for general availability (GA).</p>
   *          </note>
   */
  Lifecycle?: LifecycleManagementStrategy | string;
}

/**
 * <p>A collection of additional state information, such as
 * domain and clock configuration.</p>
 */
export interface LiveSimulationState {
  /**
   * <p>A list of domains for the simulation. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html">Key concepts</a>
   *    in the <i>Amazon Web Services SimSpace Weaver User Guide</i>.</p>
   */
  Domains?: Domain[];

  /**
   * <p>A list of simulation clocks.</p>
   *          <note>
   *             <p>At this time, a simulation has only one clock.</p>
   *          </note>
   */
  Clocks?: SimulationClock[];
}

/**
 * <p>The location where SimSpace Weaver sends simulation log data.</p>
 */
export interface LogDestination {
  /**
   * <p>An Amazon CloudWatch Logs log group that stores simulation log data. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   */
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}

/**
 * <p>The logging configuration for a simulation.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>A list of the locations where SimSpace Weaver sends simulation log data.</p>
   */
  Destinations?: LogDestination[];
}

/**
 * <p>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app zip
 *          files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
 *                <i>Amazon Simple Storage Service User Guide</i>
 *             </a>.</p>
 */
export interface S3Location {
  /**
   * <p>The name of an Amazon S3 bucket. For more information about buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating,
   *             configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   */
  BucketName?: string;

  /**
   * <p>The key name of an object in Amazon S3. For more information about Amazon S3 objects and object
   *          keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html">Uploading,
   *             downloading, and working with objects in Amazon S3</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   */
  ObjectKey?: string;
}

export enum SimulationStatus {
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  STARTED = "STARTED",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UNKNOWN = "UNKNOWN",
}

export enum SimulationTargetStatus {
  DELETED = "DELETED",
  STARTED = "STARTED",
  STOPPED = "STOPPED",
  UNKNOWN = "UNKNOWN",
}

export interface DescribeSimulationOutput {
  /**
   * <p>The name of the simulation.</p>
   */
  Name?: string;

  /**
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the simulation.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;

  /**
   * <p>The current lifecycle state of the simulation.</p>
   */
  Status?: SimulationStatus | string;

  /**
   * <p>The desired lifecycle state of the simulation.</p>
   */
  TargetStatus?: SimulationTargetStatus | string;

  /**
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   */
  SchemaS3Location?: S3Location;

  /**
   * <p>An error message that SimSpace Weaver returns only if there is a problem with the simulation
   *          schema.</p>
   */
  SchemaError?: string;

  /**
   * <p>Settings that control how SimSpace Weaver handles your simulation log data.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * <p>A collection of additional state information, such as
   * domain and clock configuration.</p>
   */
  LiveSimulationState?: LiveSimulationState;

  /**
   * <p>The maximum running time of the simulation,
   *    specified as a number of months (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit.</p>
   */
  MaximumDuration?: string;
}

export interface ListAppsInput {
  /**
   * <p>The name of the simulation that you want to list apps for.</p>
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain that you want to list apps for.</p>
   */
  Domain?: string;

  /**
   * <p>The maximum number of apps to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * <p>A collection of metadata about an app.</p>
 */
export interface SimulationAppMetadata {
  /**
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;

  /**
   * <p>The domain of the app. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html">Key concepts</a>
   *    in the <i>Amazon Web Services SimSpace Weaver User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>The current status of the app.</p>
   */
  Status?: SimulationAppStatus | string;

  /**
   * <p>The desired status of the app.</p>
   */
  TargetStatus?: SimulationAppTargetStatus | string;
}

export interface ListAppsOutput {
  /**
   * <p>The list of apps for the given simulation and domain.</p>
   */
  Apps?: SimulationAppMetadata[];

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

export interface ListSimulationsInput {
  /**
   * <p>The maximum number of simulations to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

/**
 * <p>A collection of data about the simulation.</p>
 */
export interface SimulationMetadata {
  /**
   * <p>The name of the simulation.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;

  /**
   * <p>The current status of the simulation.</p>
   */
  Status?: SimulationStatus | string;

  /**
   * <p>The desired status of the simulation.</p>
   */
  TargetStatus?: SimulationTargetStatus | string;
}

export interface ListSimulationsOutput {
  /**
   * <p>The list of simulations.</p>
   */
  Simulations?: SimulationMetadata[];

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, you receive an <i>HTTP 400 ValidationException</i> error.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags for the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
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

export interface StartAppInput {
  /**
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the app.</p>
   */
  Description?: string;

  /**
   * <p>Options that apply when the app starts. These optiAons override default behavior.</p>
   */
  LaunchOverrides?: LaunchOverrides;
}

export interface StartAppOutput {
  /**
   * <p>The name of the app.</p>
   */
  Name?: string;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain?: string;

  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation?: string;
}

export interface StartClockInput {
  /**
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

export interface StartClockOutput {}

export interface StartSimulationInput {
  /**
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the simulation.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the simulation.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   */
  SchemaS3Location: S3Location | undefined;

  /**
   * <p>The maximum running time of the simulation,
   *    specified as a number of months (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit.</p>
   */
  MaximumDuration?: string;

  /**
   * <p>A list of tags for the simulation. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
   *    <i>Amazon Web Services General Reference</i>.</p>
   */
  Tags?: Record<string, string>;
}

export interface StartSimulationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   */
  CreationTime?: Date;
}

export interface StopAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  App: string | undefined;
}

export interface StopAppOutput {}

export interface StopClockInput {
  /**
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

export interface StopClockOutput {}

export interface StopSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   */
  Simulation: string | undefined;
}

export interface StopSimulationOutput {}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add tags to.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to apply to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceOutput {}

/**
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

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

/**
 * @internal
 */
export const SimulationAppPortMappingFilterSensitiveLog = (obj: SimulationAppPortMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsLogGroupFilterSensitiveLog = (obj: CloudWatchLogsLogGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInputFilterSensitiveLog = (obj: DeleteAppInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppOutputFilterSensitiveLog = (obj: DeleteAppOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSimulationInputFilterSensitiveLog = (obj: DeleteSimulationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSimulationOutputFilterSensitiveLog = (obj: DeleteSimulationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInputFilterSensitiveLog = (obj: DescribeAppInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationAppEndpointInfoFilterSensitiveLog = (obj: SimulationAppEndpointInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchOverridesFilterSensitiveLog = (obj: LaunchOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppOutputFilterSensitiveLog = (obj: DescribeAppOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationInputFilterSensitiveLog = (obj: DescribeSimulationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationClockFilterSensitiveLog = (obj: SimulationClock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainFilterSensitiveLog = (obj: Domain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LiveSimulationStateFilterSensitiveLog = (obj: LiveSimulationState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDestinationFilterSensitiveLog = (obj: LogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationOutputFilterSensitiveLog = (obj: DescribeSimulationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsInputFilterSensitiveLog = (obj: ListAppsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationAppMetadataFilterSensitiveLog = (obj: SimulationAppMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsOutputFilterSensitiveLog = (obj: ListAppsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationsInputFilterSensitiveLog = (obj: ListSimulationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationMetadataFilterSensitiveLog = (obj: SimulationMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationsOutputFilterSensitiveLog = (obj: ListSimulationsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

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
export const StartAppOutputFilterSensitiveLog = (obj: StartAppOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartClockInputFilterSensitiveLog = (obj: StartClockInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartClockOutputFilterSensitiveLog = (obj: StartClockOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSimulationInputFilterSensitiveLog = (obj: StartSimulationInput): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSimulationOutputFilterSensitiveLog = (obj: StartSimulationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAppInputFilterSensitiveLog = (obj: StopAppInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAppOutputFilterSensitiveLog = (obj: StopAppOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopClockInputFilterSensitiveLog = (obj: StopClockInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopClockOutputFilterSensitiveLog = (obj: StopClockOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSimulationInputFilterSensitiveLog = (obj: StopSimulationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSimulationOutputFilterSensitiveLog = (obj: StopSimulationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});
