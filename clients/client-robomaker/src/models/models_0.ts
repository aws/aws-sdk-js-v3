// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RoboMakerServiceException as __BaseException } from "./RoboMakerServiceException";

/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM64: "ARM64",
  ARMHF: "ARMHF",
  X86_64: "X86_64",
} as const;

/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 */
export interface BatchDeleteWorldsRequest {
  /**
   * @public
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to delete.</p>
   */
  worlds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteWorldsResponse {
  /**
   * @public
   * <p>A list of unprocessed worlds associated with the call. These worlds were not
   *          deleted.</p>
   */
  unprocessedWorlds?: string[];
}

/**
 * @public
 * <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * @public
 * <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * @public
 * <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 */
export interface BatchDescribeSimulationJobRequest {
  /**
   * @public
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   */
  jobs: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  CPU: "CPU",
  GPU_AND_CPU: "GPU_AND_CPU",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * @public
 * <p>Compute information for the simulation job</p>
 */
export interface ComputeResponse {
  /**
   * @public
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *          only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;

  /**
   * @public
   * <p>Compute type response information for the simulation job.</p>
   */
  computeType?: ComputeType;

  /**
   * @public
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *          allocated to the SimulationJob.</p>
   */
  gpuUnitLimit?: number;
}

/**
 * @public
 * <p>Information about S3 keys.</p>
 */
export interface S3KeyOutput {
  /**
   * @public
   * <p>The S3 key.</p>
   */
  s3Key?: string;

  /**
   * @public
   * <p>The etag for the object.</p>
   */
  etag?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  Archive: "Archive",
  File: "File",
  Prefix: "Prefix",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 * <p>Information about a data source.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys?: S3KeyOutput[];

  /**
   * @public
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   */
  type?: DataSourceType;

  /**
   * @public
   * <p>The location where your files are mounted in the container image.</p>
   *          <p>If you've specified the <code>type</code> of the data source as an <code>Archive</code>,
   *          you must provide an Amazon S3 object key to your archive. The object key must point to
   *          either a <code>.zip</code> or <code>.tar.gz</code> file.</p>
   *          <p>If you've specified the <code>type</code> of the data source as a <code>Prefix</code>,
   *          you provide the Amazon S3 prefix that points to the files that you are using for your data
   *          source.</p>
   *          <p>If you've specified the <code>type</code> of the data source as a <code>File</code>, you
   *          provide the Amazon S3 path to the file that you're using as your data source.</p>
   */
  destination?: string;
}

/**
 * @public
 * @enum
 */
export const FailureBehavior = {
  Continue: "Continue",
  Fail: "Fail",
} as const;

/**
 * @public
 */
export type FailureBehavior = (typeof FailureBehavior)[keyof typeof FailureBehavior];

/**
 * @public
 * @enum
 */
export const SimulationJobErrorCode = {
  BadPermissionsCloudwatchLogs: "BadPermissionsCloudwatchLogs",
  BadPermissionsRobotApplication: "BadPermissionsRobotApplication",
  BadPermissionsS3Object: "BadPermissionsS3Object",
  BadPermissionsS3Output: "BadPermissionsS3Output",
  BadPermissionsSimulationApplication: "BadPermissionsSimulationApplication",
  BadPermissionsUserCredentials: "BadPermissionsUserCredentials",
  BatchCanceled: "BatchCanceled",
  BatchTimedOut: "BatchTimedOut",
  ENILimitExceeded: "ENILimitExceeded",
  InternalServiceError: "InternalServiceError",
  InvalidBundleRobotApplication: "InvalidBundleRobotApplication",
  InvalidBundleSimulationApplication: "InvalidBundleSimulationApplication",
  InvalidInput: "InvalidInput",
  InvalidS3Resource: "InvalidS3Resource",
  LimitExceeded: "LimitExceeded",
  MismatchedEtag: "MismatchedEtag",
  RequestThrottled: "RequestThrottled",
  ResourceNotFound: "ResourceNotFound",
  RobotApplicationCrash: "RobotApplicationCrash",
  RobotApplicationHealthCheckFailure: "RobotApplicationHealthCheckFailure",
  RobotApplicationVersionMismatchedEtag: "RobotApplicationVersionMismatchedEtag",
  SimulationApplicationCrash: "SimulationApplicationCrash",
  SimulationApplicationHealthCheckFailure: "SimulationApplicationHealthCheckFailure",
  SimulationApplicationVersionMismatchedEtag: "SimulationApplicationVersionMismatchedEtag",
  SubnetIpLimitExceeded: "SubnetIpLimitExceeded",
  ThrottlingError: "ThrottlingError",
  UploadContentMismatchError: "UploadContentMismatchError",
  WrongRegionRobotApplication: "WrongRegionRobotApplication",
  WrongRegionS3Bucket: "WrongRegionS3Bucket",
  WrongRegionS3Output: "WrongRegionS3Output",
  WrongRegionSimulationApplication: "WrongRegionSimulationApplication",
} as const;

/**
 * @public
 */
export type SimulationJobErrorCode = (typeof SimulationJobErrorCode)[keyof typeof SimulationJobErrorCode];

/**
 * @public
 * <p>The logging configuration.</p>
 */
export interface LoggingConfig {
  /**
   * @public
   * @deprecated
   *
   * <p>A boolean indicating whether to record all ROS topics.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  recordAllRosTopics?: boolean;
}

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * @public
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * @public
   * <p>The IPv4 public address of the network interface.</p>
   */
  publicIpAddress?: string;
}

/**
 * @public
 * <p>The output location.</p>
 */
export interface OutputLocation {
  /**
   * @public
   * <p>The S3 bucket for output.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>The S3 folder in the <code>s3Bucket</code> where output files will be placed.</p>
   */
  s3Prefix?: string;
}

/**
 * @public
 * <p>An object representing a port mapping.</p>
 */
export interface PortMapping {
  /**
   * @public
   * <p>The port number on the simulation job instance to use as a remote connection point.
   *          </p>
   */
  jobPort: number | undefined;

  /**
   * @public
   * <p>The port number on the application.</p>
   */
  applicationPort: number | undefined;

  /**
   * @public
   * <p>A Boolean indicating whether to enable this port mapping on public IP.</p>
   */
  enableOnPublicIp?: boolean;
}

/**
 * @public
 * <p>Configuration information for port forwarding.</p>
 */
export interface PortForwardingConfig {
  /**
   * @public
   * <p>The port mappings for the configuration.</p>
   */
  portMappings?: PortMapping[];
}

/**
 * @public
 * <p>Information about a launch configuration.</p>
 */
export interface LaunchConfig {
  /**
   * @public
   * <p>The package name.</p>
   */
  packageName?: string;

  /**
   * @public
   * <p>The launch file name.</p>
   */
  launchFile?: string;

  /**
   * @public
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p>The port forwarding configuration.</p>
   */
  portForwardingConfig?: PortForwardingConfig;

  /**
   * @public
   * <p>Boolean indicating whether a streaming session will be configured for the application.
   *          If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          your application as it is running in the simulation. You must configure and launch the
   *          component. It must have a graphical user interface. </p>
   */
  streamUI?: boolean;

  /**
   * @public
   * <p>If you've specified <code>General</code> as the value for your <code>RobotSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   *          <p>If you've specified <code>SimulationRuntime</code> as the value for your <code>SimulationSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   */
  command?: string[];
}

/**
 * @public
 * @enum
 */
export const ExitBehavior = {
  FAIL: "FAIL",
  RESTART: "RESTART",
} as const;

/**
 * @public
 */
export type ExitBehavior = (typeof ExitBehavior)[keyof typeof ExitBehavior];

/**
 * @public
 * <p>Information about a tool. Tools are used in a simulation job.</p>
 */
export interface Tool {
  /**
   * @public
   * <p>Boolean indicating whether a streaming session will be configured for the tool. If
   *             <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          the tool as it is running in the simulation. It must have a graphical user interface. The
   *          default is <code>False</code>. </p>
   */
  streamUI?: boolean;

  /**
   * @public
   * <p>The name of the tool.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Command-line arguments for the tool. It must include the tool executable name.</p>
   */
  command: string | undefined;

  /**
   * @public
   * <p>Boolean indicating whether logs will be recorded in CloudWatch for the tool. The default
   *          is <code>False</code>. </p>
   */
  streamOutputToCloudWatch?: boolean;

  /**
   * @public
   * <p>Exit behavior determines what happens when your tool quits running. <code>RESTART</code>
   *          will cause your tool to be restarted. <code>FAIL</code> will cause your job to exit. The
   *          default is <code>RESTART</code>. </p>
   */
  exitBehavior?: ExitBehavior;
}

/**
 * @public
 * @enum
 */
export const UploadBehavior = {
  UPLOAD_ON_TERMINATE: "UPLOAD_ON_TERMINATE",
  UPLOAD_ROLLING_AUTO_REMOVE: "UPLOAD_ROLLING_AUTO_REMOVE",
} as const;

/**
 * @public
 */
export type UploadBehavior = (typeof UploadBehavior)[keyof typeof UploadBehavior];

/**
 * @public
 * <p>Provides upload configuration information. Files are uploaded from the simulation job to
 *          a location you specify. </p>
 */
export interface UploadConfiguration {
  /**
   * @public
   * <p>A prefix that specifies where files will be uploaded in Amazon S3. It is appended to the
   *          simulation output location to determine the final path. </p>
   *          <p> For example, if your simulation output location is <code>s3://my-bucket</code> and your
   *          upload configuration name is <code>robot-test</code>, your files will be uploaded to
   *             <code>s3://my-bucket/<simid>/<runid>/robot-test</code>. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p> Specifies the path of the file(s) to upload. Standard Unix glob matching rules are
   *          accepted, with the addition of <code>**</code> as a <i>super asterisk</i>.
   *          For example, specifying <code>/var/log/**.log</code> causes all .log files in the
   *             <code>/var/log</code> directory tree to be collected. For more examples, see <a href="https://github.com/gobwas/glob">Glob Library</a>. </p>
   */
  path: string | undefined;

  /**
   * @public
   * <p>Specifies when to upload the files:</p>
   *          <dl>
   *             <dt>UPLOAD_ON_TERMINATE</dt>
   *             <dd>
   *                <p>Matching files are uploaded once the simulation enters the
   *                      <code>TERMINATING</code> state. Matching files are not uploaded until all of
   *                   your code (including tools) have stopped. </p>
   *                <p>If there is a problem uploading a file, the upload is retried. If problems
   *                   persist, no further upload attempts will be made.</p>
   *             </dd>
   *             <dt>UPLOAD_ROLLING_AUTO_REMOVE</dt>
   *             <dd>
   *                <p>Matching files are uploaded as they are created. They are deleted after they
   *                   are uploaded. The specified path is checked every 5 seconds. A final check is made
   *                   when all of your code (including tools) have stopped. </p>
   *             </dd>
   *          </dl>
   */
  uploadBehavior: UploadBehavior | undefined;
}

/**
 * @public
 * <p>Application configuration information for a robot.</p>
 */
export interface RobotApplicationConfig {
  /**
   * @public
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  applicationVersion?: string;

  /**
   * @public
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * @public
   * <p>The upload configurations for the robot application.</p>
   */
  uploadConfigurations?: UploadConfiguration[];

  /**
   * @public
   * @deprecated
   *
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  useDefaultUploadConfigurations?: boolean;

  /**
   * @public
   * <p>Information about tools configured for the robot application.</p>
   */
  tools?: Tool[];

  /**
   * @public
   * @deprecated
   *
   * <p>A Boolean indicating whether to use default robot application tools. The default tools
   *          are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  useDefaultTools?: boolean;
}

/**
 * @public
 * <p>Configuration information for a world.</p>
 */
export interface WorldConfig {
  /**
   * @public
   * <p>The world generated by Simulation WorldForge.</p>
   */
  world?: string;
}

/**
 * @public
 * <p>Information about a simulation application configuration.</p>
 */
export interface SimulationApplicationConfig {
  /**
   * @public
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the simulation application.</p>
   */
  applicationVersion?: string;

  /**
   * @public
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * @public
   * <p>Information about upload configurations for the simulation application.</p>
   */
  uploadConfigurations?: UploadConfiguration[];

  /**
   * @public
   * <p>A list of world configurations.</p>
   */
  worldConfigs?: WorldConfig[];

  /**
   * @public
   * @deprecated
   *
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  useDefaultUploadConfigurations?: boolean;

  /**
   * @public
   * <p>Information about tools configured for the simulation application.</p>
   */
  tools?: Tool[];

  /**
   * @public
   * @deprecated
   *
   * <p>A Boolean indicating whether to use default simulation application tools. The default
   *          tools are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  useDefaultTools?: boolean;
}

/**
 * @public
 * @enum
 */
export const SimulationJobStatus = {
  Canceled: "Canceled",
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  Preparing: "Preparing",
  Restarting: "Restarting",
  Running: "Running",
  RunningFailed: "RunningFailed",
  Terminated: "Terminated",
  Terminating: "Terminating",
} as const;

/**
 * @public
 */
export type SimulationJobStatus = (typeof SimulationJobStatus)[keyof typeof SimulationJobStatus];

/**
 * @public
 * <p>VPC configuration associated with your simulation job.</p>
 */
export interface VPCConfigResponse {
  /**
   * @public
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: string[];

  /**
   * @public
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: string[];

  /**
   * @public
   * <p>The VPC ID associated with your simulation job.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>A boolean indicating if a public IP was assigned.</p>
   */
  assignPublicIp?: boolean;
}

/**
 * @public
 * <p>Information about a simulation job.</p>
 */
export interface SimulationJob {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Status of the simulation job.</p>
   */
  status?: SimulationJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Leaves the host running for its maximum timeout duration after a
   *                      <code>4XX</code> error code.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior;

  /**
   * @public
   * <p>The failure code of the simulation job if it failed.</p>
   */
  failureCode?: SimulationJobErrorCode;

  /**
   * @public
   * <p>The reason why the simulation job failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * @public
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * @public
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job. </p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * @public
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * @public
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * @public
   * <p>Information about a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * @public
   * <p>Compute information for the simulation job</p>
   */
  compute?: ComputeResponse;
}

/**
 * @public
 */
export interface BatchDescribeSimulationJobResponse {
  /**
   * @public
   * <p>A list of simulation jobs.</p>
   */
  jobs?: SimulationJob[];

  /**
   * @public
   * <p>A list of unprocessed simulation job Amazon Resource Names (ARNs).</p>
   */
  unprocessedJobs?: string[];
}

/**
 * @public
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>Information about the batch policy.</p>
 */
export interface BatchPolicy {
  /**
   * @public
   * <p>The amount of time, in seconds, to wait for the batch to complete.
   *
   *       </p>
   *          <p>If a batch times out, and there are pending requests that were failing due to an
   *          internal failure (like <code>InternalServiceError</code>), they will be moved to the failed
   *          list and the batch status will be <code>Failed</code>. If the pending requests were failing
   *          for any other reason, the failed pending requests will be moved to the failed list and the
   *          batch status will be <code>TimedOut</code>. </p>
   */
  timeoutInSeconds?: number;

  /**
   * @public
   * <p>The number of active simulation jobs create as part of the batch that can be in an
   *          active state at the same time. </p>
   *          <p>Active states include: <code>Pending</code>,<code>Preparing</code>,
   *          <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and
   *             <code>Terminating</code>. All other states are terminal states. </p>
   */
  maxConcurrency?: number;
}

/**
 * @public
 */
export interface CancelDeploymentJobRequest {
  /**
   * @public
   * <p>The deployment job ARN to cancel.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface CancelDeploymentJobResponse {}

/**
 * @public
 */
export interface CancelSimulationJobRequest {
  /**
   * @public
   * <p>The simulation job ARN to cancel.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface CancelSimulationJobResponse {}

/**
 * @public
 */
export interface CancelSimulationJobBatchRequest {
  /**
   * @public
   * <p>The id of the batch to cancel.</p>
   */
  batch: string | undefined;
}

/**
 * @public
 */
export interface CancelSimulationJobBatchResponse {}

/**
 * @public
 */
export interface CancelWorldExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world export job to cancel.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface CancelWorldExportJobResponse {}

/**
 * @public
 */
export interface CancelWorldGenerationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world generator job to cancel.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface CancelWorldGenerationJobResponse {}

/**
 * @public
 * <p>Compute information for the simulation job.</p>
 */
export interface Compute {
  /**
   * @public
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *         only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;

  /**
   * @public
   * <p>Compute type information for the simulation job.</p>
   */
  computeType?: ComputeType;

  /**
   * @public
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *         allocated to the SimulationJob.</p>
   */
  gpuUnitLimit?: number;
}

/**
 * @public
 * <p>The failure percentage threshold percentage was met.</p>
 */
export class ConcurrentDeploymentException extends __BaseException {
  readonly name: "ConcurrentDeploymentException" = "ConcurrentDeploymentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentDeploymentException, __BaseException>) {
    super({
      name: "ConcurrentDeploymentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentDeploymentException.prototype);
  }
}

/**
 * @public
 * <p>Configuration information for a deployment launch.</p>
 */
export interface DeploymentLaunchConfig {
  /**
   * @public
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * @public
   * <p>The deployment pre-launch file. This file will be executed prior to the launch
   *          file.</p>
   */
  preLaunchFile?: string;

  /**
   * @public
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * @public
   * <p>The deployment post-launch file. This file will be executed after the launch
   *          file.</p>
   */
  postLaunchFile?: string;

  /**
   * @public
   * <p>An array of key/value pairs specifying environment variables for the robot
   *          application</p>
   */
  environmentVariables?: Record<string, string>;
}

/**
 * @public
 * <p>Information about a deployment application configuration.</p>
 */
export interface DeploymentApplicationConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  applicationVersion: string | undefined;

  /**
   * @public
   * <p>The launch configuration.</p>
   */
  launchConfig: DeploymentLaunchConfig | undefined;
}

/**
 * @public
 * <p>Information about an S3 object.</p>
 */
export interface S3Object {
  /**
   * @public
   * <p>The bucket containing the object.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>The key of the object.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The etag of the object.</p>
   */
  etag?: string;
}

/**
 * @public
 * <p>Information about a deployment configuration.</p>
 */
export interface DeploymentConfig {
  /**
   * @public
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   */
  concurrentDeploymentPercentage?: number;

  /**
   * @public
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   */
  failureThresholdPercentage?: number;

  /**
   * @public
   * <p>The amount of time, in seconds, to wait for deployment to a single robot to complete.
   *          Choose a time between 1 minute and 7 days. The default is 5 hours.</p>
   */
  robotDeploymentTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The download condition file.</p>
   */
  downloadConditionFile?: S3Object;
}

/**
 * @public
 */
export interface CreateDeploymentJobRequest {
  /**
   * @public
   * <p>The requested deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   */
  fleet: string | undefined;

  /**
   * @public
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs: DeploymentApplicationConfig[] | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the deployment
   *          job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const DeploymentJobErrorCode = {
  BadLambdaAssociated: "BadLambdaAssociated",
  BadPermissionError: "BadPermissionError",
  DeploymentFleetDoesNotExist: "DeploymentFleetDoesNotExist",
  DownloadConditionFailed: "DownloadConditionFailed",
  EnvironmentSetupError: "EnvironmentSetupError",
  EtagMismatch: "EtagMismatch",
  ExtractingBundleFailure: "ExtractingBundleFailure",
  FailureThresholdBreached: "FailureThresholdBreached",
  FleetDeploymentTimeout: "FleetDeploymentTimeout",
  GreengrassDeploymentFailed: "GreengrassDeploymentFailed",
  GreengrassGroupVersionDoesNotExist: "GreengrassGroupVersionDoesNotExist",
  InternalServerError: "InternalServerError",
  InvalidGreengrassGroup: "InvalidGreengrassGroup",
  LambdaDeleted: "LambdaDeleted",
  MissingRobotApplicationArchitecture: "MissingRobotApplicationArchitecture",
  MissingRobotArchitecture: "MissingRobotArchitecture",
  MissingRobotDeploymentResource: "MissingRobotDeploymentResource",
  PostLaunchFileFailure: "PostLaunchFileFailure",
  PreLaunchFileFailure: "PreLaunchFileFailure",
  ResourceNotFound: "ResourceNotFound",
  RobotAgentConnectionTimeout: "RobotAgentConnectionTimeout",
  RobotApplicationDoesNotExist: "RobotApplicationDoesNotExist",
  RobotDeploymentAborted: "RobotDeploymentAborted",
  RobotDeploymentNoResponse: "RobotDeploymentNoResponse",
} as const;

/**
 * @public
 */
export type DeploymentJobErrorCode = (typeof DeploymentJobErrorCode)[keyof typeof DeploymentJobErrorCode];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  Canceled: "Canceled",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  Preparing: "Preparing",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 */
export interface CreateDeploymentJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The target fleet for the deployment job.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @public
   * <p>The failure reason of the deployment job if it failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>BadPermissionError</dt>
   *             <dd>
   *                <p>AWS Greengrass requires a service-level role permission to access other
   *                   services. The role must include the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy$jsonEditor">
   *                      <code>AWSGreengrassResourceAccessRolePolicy</code> managed policy</a>.
   *                </p>
   *             </dd>
   *             <dt>ExtractingBundleFailure</dt>
   *             <dd>
   *                <p>The robot application could not be extracted from the bundle.</p>
   *             </dd>
   *             <dt>FailureThresholdBreached</dt>
   *             <dd>
   *                <p>The percentage of robots that could not be updated exceeded the percentage set
   *                   for the deployment.</p>
   *             </dd>
   *             <dt>GreengrassDeploymentFailed</dt>
   *             <dd>
   *                <p>The robot application could not be deployed to the robot.</p>
   *             </dd>
   *             <dt>GreengrassGroupVersionDoesNotExist</dt>
   *             <dd>
   *                <p>The AWS Greengrass group or version associated with a robot is missing.</p>
   *             </dd>
   *             <dt>InternalServerError</dt>
   *             <dd>
   *                <p>An internal error has occurred. Retry your request, but if the problem
   *                   persists, contact us with details.</p>
   *             </dd>
   *             <dt>MissingRobotApplicationArchitecture</dt>
   *             <dd>
   *                <p>The robot application does not have a source that matches the architecture of
   *                   the robot.</p>
   *             </dd>
   *             <dt>MissingRobotDeploymentResource</dt>
   *             <dd>
   *                <p>One or more of the resources specified for the robot application are missing.
   *                   For example, does the robot application have the correct launch package and launch
   *                   file?</p>
   *             </dd>
   *             <dt>PostLaunchFileFailure</dt>
   *             <dd>
   *                <p>The post-launch script failed.</p>
   *             </dd>
   *             <dt>PreLaunchFileFailure</dt>
   *             <dd>
   *                <p>The pre-launch script failed.</p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>One or more deployment resources are missing. For example, do robot application
   *                   source bundles still exist? </p>
   *             </dd>
   *             <dt>RobotDeploymentNoResponse</dt>
   *             <dd>
   *                <p>There is no response from the robot. It might not be powered on or connected to
   *                   the internet.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>The list of all tags added to the deployment job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateFleetRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the fleet.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The list of all tags added to the fleet.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRobotRequest {
  /**
   * @public
   * <p>The name for the robot.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The target architecture of the robot.</p>
   */
  architecture: Architecture | undefined;

  /**
   * @public
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRobotResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   */
  greengrassGroupId?: string;

  /**
   * @public
   * <p>The target architecture of the robot.</p>
   */
  architecture?: Architecture;

  /**
   * @public
   * <p>The list of all tags added to the robot.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The specified resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p>The object that contains the Docker image URI for either your robot or simulation
 *          applications.</p>
 */
export interface Environment {
  /**
   * @public
   * <p>The Docker image URI for either your robot or simulation applications.</p>
   */
  uri?: string;
}

/**
 * @public
 * @enum
 */
export const RobotSoftwareSuiteType = {
  General: "General",
  ROS: "ROS",
  ROS2: "ROS2",
} as const;

/**
 * @public
 */
export type RobotSoftwareSuiteType = (typeof RobotSoftwareSuiteType)[keyof typeof RobotSoftwareSuiteType];

/**
 * @public
 * @enum
 */
export const RobotSoftwareSuiteVersionType = {
  Dashing: "Dashing",
  Foxy: "Foxy",
  Kinetic: "Kinetic",
  Melodic: "Melodic",
} as const;

/**
 * @public
 */
export type RobotSoftwareSuiteVersionType =
  (typeof RobotSoftwareSuiteVersionType)[keyof typeof RobotSoftwareSuiteVersionType];

/**
 * @public
 * <p>Information about a robot software suite (ROS distribution).</p>
 */
export interface RobotSoftwareSuite {
  /**
   * @public
   * <p>The name of the robot software suite (ROS distribution).</p>
   */
  name?: RobotSoftwareSuiteType;

  /**
   * @public
   * <p>The version of the robot software suite (ROS distribution).</p>
   */
  version?: RobotSoftwareSuiteVersionType;
}

/**
 * @public
 * <p>Information about a source configuration.</p>
 */
export interface SourceConfig {
  /**
   * @public
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * @public
   * <p>The target processor architecture for the application.</p>
   */
  architecture?: Architecture;
}

/**
 * @public
 */
export interface CreateRobotApplicationRequest {
  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: SourceConfig[];

  /**
   * @public
   * <p>The robot software suite (ROS distribuition) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the robot
   *          application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The object that contains that URI of the Docker image that you use for your robot
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 * <p>Information about a source.</p>
 */
export interface Source {
  /**
   * @public
   * <p>The s3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * @public
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   */
  etag?: string;

  /**
   * @public
   * <p>The taget processor architecture for the application.</p>
   */
  architecture?: Architecture;
}

/**
 * @public
 */
export interface CreateRobotApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The list of all tags added to the robot application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>An object that contains the Docker image URI used to a create your robot
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface CreateRobotApplicationVersionRequest {
  /**
   * @public
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The current revision id for the robot application. If you provide a value and it matches
   *          the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;

  /**
   * @public
   * <p>The Amazon S3 identifier for the zip file bundle that you use for your robot
   *          application.</p>
   */
  s3Etags?: string[];

  /**
   * @public
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   */
  imageDigest?: string;
}

/**
 * @public
 */
export interface CreateRobotApplicationVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI used to create your robot
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 * @enum
 */
export const RenderingEngineType = {
  OGRE: "OGRE",
} as const;

/**
 * @public
 */
export type RenderingEngineType = (typeof RenderingEngineType)[keyof typeof RenderingEngineType];

/**
 * @public
 * <p>Information about a rendering engine.</p>
 */
export interface RenderingEngine {
  /**
   * @public
   * <p>The name of the rendering engine.</p>
   */
  name?: RenderingEngineType;

  /**
   * @public
   * <p>The version of the rendering engine.</p>
   */
  version?: string;
}

/**
 * @public
 * @enum
 */
export const SimulationSoftwareSuiteType = {
  Gazebo: "Gazebo",
  RosbagPlay: "RosbagPlay",
  SimulationRuntime: "SimulationRuntime",
} as const;

/**
 * @public
 */
export type SimulationSoftwareSuiteType =
  (typeof SimulationSoftwareSuiteType)[keyof typeof SimulationSoftwareSuiteType];

/**
 * @public
 * <p>Information about a simulation software suite.</p>
 */
export interface SimulationSoftwareSuite {
  /**
   * @public
   * <p>The name of the simulation software suite.</p>
   */
  name?: SimulationSoftwareSuiteType;

  /**
   * @public
   * <p>The version of the simulation software suite.</p>
   */
  version?: string;
}

/**
 * @public
 */
export interface CreateSimulationApplicationRequest {
  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: SourceConfig[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the simulation application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The object that contains the Docker image URI used to create your simulation
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface CreateSimulationApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @public
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The list of all tags added to the simulation application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The object that contains the Docker image URI that you used to create your simulation
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface CreateSimulationApplicationVersionRequest {
  /**
   * @public
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The current revision id for the simulation application. If you provide a value and it
   *          matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;

  /**
   * @public
   * <p>The Amazon S3 eTag identifier for the zip file bundle that you use to create the
   *          simulation application.</p>
   */
  s3Etags?: string[];

  /**
   * @public
   * <p>The SHA256 digest used to identify the Docker image URI used to created the simulation
   *          application.</p>
   */
  imageDigest?: string;
}

/**
 * @public
 */
export interface CreateSimulationApplicationVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @public
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision ID of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 * <p>Information about a data source.</p>
 */
export interface DataSourceConfig {
  /**
   * @public
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket: string | undefined;

  /**
   * @public
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys: string[] | undefined;

  /**
   * @public
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   */
  type?: DataSourceType;

  /**
   * @public
   * <p>The location where your files are mounted in the container image.</p>
   *          <p>If you've specified the <code>type</code> of the data source as an <code>Archive</code>,
   *          you must provide an Amazon S3 object key to your archive. The object key must point to
   *          either a <code>.zip</code> or <code>.tar.gz</code> file.</p>
   *          <p>If you've specified the <code>type</code> of the data source as a <code>Prefix</code>,
   *          you provide the Amazon S3 prefix that points to the files that you are using for your data
   *          source.</p>
   *          <p>If you've specified the <code>type</code> of the data source as a <code>File</code>, you
   *          provide the Amazon S3 path to the file that you're using as your data source.</p>
   */
  destination?: string;
}

/**
 * @public
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter
 *          identifying the list of security group IDs and subnet IDs. These must belong to the same
 *          VPC. You must provide at least one security group and two subnet IDs.</p>
 */
export interface VPCConfig {
  /**
   * @public
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: string[] | undefined;

  /**
   * @public
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: string[];

  /**
   * @public
   * <p>A boolean indicating whether to assign a public IP address.</p>
   */
  assignPublicIp?: boolean;
}

/**
 * @public
 */
export interface CreateSimulationJobRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When
   *             <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will
   *          transition to <code>Completed</code>.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * @public
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   */
  iamRole: string | undefined;

  /**
   * @public
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Leaves the instance running for its maximum timeout duration after a
   *                      <code>4XX</code> error code.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior;

  /**
   * @public
   * <p>The robot application to use in the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * @public
   * <p>The simulation application to use in the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * @public
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and one subnet ID. </p>
   */
  vpcConfig?: VPCConfig;

  /**
   * @public
   * <p>Compute information for the simulation job.</p>
   */
  compute?: Compute;
}

/**
 * @public
 */
export interface CreateSimulationJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>the failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior;

  /**
   * @public
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version
   *                   creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Simulation job output files location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The maximum simulation job duration in seconds. </p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * @public
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * @public
   * <p>The IAM role that allows the simulation job to call the AWS APIs that are specified in
   *          its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>The robot application used by the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * @public
   * <p>The simulation application used by the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * @public
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * @public
   * <p>The list of all tags added to the simulation job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * @public
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;
}

/**
 * @public
 * <p>The request has failed due to a temporary failure of the server.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 * <p>Information about a simulation job request.</p>
 */
export interface SimulationJobRequest {
  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * @public
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Leaves the host running for its maximum timeout duration after a
   *                      <code>4XX</code> error code.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior;

  /**
   * @public
   * <p>A Boolean indicating whether to use default applications in the simulation job. Default
   *          applications include Gazebo, rqt, rviz and terminal access. </p>
   */
  useDefaultApplications?: boolean;

  /**
   * @public
   * <p>The robot applications to use in the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * @public
   * <p>The simulation applications to use in the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * @public
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * @public
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and two subnet IDs.</p>
   */
  vpcConfig?: VPCConfig;

  /**
   * @public
   * <p>Compute information for the simulation job</p>
   */
  compute?: Compute;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          request.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateWorldExportJobRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to export.</p>
   */
  worlds: string[] | undefined;

  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation: OutputLocation | undefined;

  /**
   * @public
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   */
  iamRole: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const WorldExportJobErrorCode = {
  AccessDenied: "AccessDenied",
  InternalServiceError: "InternalServiceError",
  InvalidInput: "InvalidInput",
  LimitExceeded: "LimitExceeded",
  RequestThrottled: "RequestThrottled",
  ResourceNotFound: "ResourceNotFound",
} as const;

/**
 * @public
 */
export type WorldExportJobErrorCode = (typeof WorldExportJobErrorCode)[keyof typeof WorldExportJobErrorCode];

/**
 * @public
 * @enum
 */
export const WorldExportJobStatus = {
  Canceled: "Canceled",
  Canceling: "Canceling",
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  Running: "Running",
} as const;

/**
 * @public
 */
export type WorldExportJobStatus = (typeof WorldExportJobStatus)[keyof typeof WorldExportJobStatus];

/**
 * @public
 */
export interface CreateWorldExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the world export job.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world export job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world export job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world export job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world export job failed. See <code>failureCode</code> for more information.
   *                </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world export job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world export job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldExportJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The failure code of the world export job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>LimitExceeded</dt>
   *             <dd>
   *                <p>The requested resource exceeds the maximum number allowed, or the number of
   *                   concurrent stream requests exceeds the maximum number allowed. </p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>The specified resource could not be found. </p>
   *             </dd>
   *             <dt>RequestThrottled</dt>
   *             <dd>
   *                <p>The request was throttled.</p>
   *             </dd>
   *             <dt>InvalidInput</dt>
   *             <dd>
   *                <p>An input parameter in the request is not valid.</p>
   *             </dd>
   *             <dt>AllWorldGenerationFailed</dt>
   *             <dd>
   *                <p>All of the worlds in the world generation job failed. This can happen if your
   *                      <code>worldCount</code> is greater than 50 or less than 1. </p>
   *             </dd>
   *          </dl>
   *          <p>For more information about troubleshooting WorldForge, see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting-worldforge.html">Troubleshooting Simulation WorldForge</a>. </p>
   */
  failureCode?: WorldExportJobErrorCode;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export. </p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The number of worlds that will be created. You can configure the number of unique
 *          floorplans and the number of unique interiors for each floor plan. For example, if you want
 *          1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and
 *             <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds
 *             (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p>
 *          <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan =
 *             5</code>, there will be 20 worlds with 5 unique floor plans. </p>
 */
export interface WorldCount {
  /**
   * @public
   * <p>The number of unique floorplans.</p>
   */
  floorplanCount?: number;

  /**
   * @public
   * <p>The number of unique interiors per floorplan.</p>
   */
  interiorCountPerFloorplan?: number;
}

/**
 * @public
 */
export interface CreateWorldGenerationJobRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template describing the worlds you want to
   *          create.</p>
   */
  template: string | undefined;

  /**
   * @public
   * <p>Information about the world count.</p>
   */
  worldCount: WorldCount | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const WorldGenerationJobErrorCode = {
  AllWorldGenerationFailed: "AllWorldGenerationFailed",
  InternalServiceError: "InternalServiceError",
  InvalidInput: "InvalidInput",
  LimitExceeded: "LimitExceeded",
  RequestThrottled: "RequestThrottled",
  ResourceNotFound: "ResourceNotFound",
} as const;

/**
 * @public
 */
export type WorldGenerationJobErrorCode =
  (typeof WorldGenerationJobErrorCode)[keyof typeof WorldGenerationJobErrorCode];

/**
 * @public
 * @enum
 */
export const WorldGenerationJobStatus = {
  Canceled: "Canceled",
  Canceling: "Canceling",
  Completed: "Completed",
  Failed: "Failed",
  PartialFailed: "PartialFailed",
  Pending: "Pending",
  Running: "Running",
} as const;

/**
 * @public
 */
export type WorldGenerationJobStatus = (typeof WorldGenerationJobStatus)[keyof typeof WorldGenerationJobStatus];

/**
 * @public
 */
export interface CreateWorldGenerationJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the world generator job.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world generator job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world generator job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world generator job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world generator job failed. See <code>failureCode</code> for more
   *                   information. </p>
   *             </dd>
   *             <dt>PartialFailed</dt>
   *             <dd>
   *                <p>Some worlds did not generate.</p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world generator job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world generator job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldGenerationJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The failure code of the world generator job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>LimitExceeded</dt>
   *             <dd>
   *                <p>The requested resource exceeds the maximum number allowed, or the number of
   *                   concurrent stream requests exceeds the maximum number allowed. </p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>The specified resource could not be found. </p>
   *             </dd>
   *             <dt>RequestThrottled</dt>
   *             <dd>
   *                <p>The request was throttled.</p>
   *             </dd>
   *             <dt>InvalidInput</dt>
   *             <dd>
   *                <p>An input parameter in the request is not valid.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: WorldGenerationJobErrorCode;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * @public
   * <p>Information about the world count. </p>
   */
  worldCount?: WorldCount;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

/**
 * @public
 * <p>Information about a template location.</p>
 */
export interface TemplateLocation {
  /**
   * @public
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket: string | undefined;

  /**
   * @public
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Key: string | undefined;
}

/**
 * @public
 */
export interface CreateWorldTemplateRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The world template body.</p>
   */
  templateBody?: string;

  /**
   * @public
   * <p>The location of the world template.</p>
   */
  templateLocation?: TemplateLocation;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateWorldTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetResponse {}

/**
 * @public
 */
export interface DeleteRobotRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface DeleteRobotResponse {}

/**
 * @public
 */
export interface DeleteRobotApplicationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the robot application to delete.</p>
   */
  applicationVersion?: string;
}

/**
 * @public
 */
export interface DeleteRobotApplicationResponse {}

/**
 * @public
 */
export interface DeleteSimulationApplicationRequest {
  /**
   * @public
   * <p>The application information for the simulation application to delete.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the simulation application to delete.</p>
   */
  applicationVersion?: string;
}

/**
 * @public
 */
export interface DeleteSimulationApplicationResponse {}

/**
 * @public
 */
export interface DeleteWorldTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template you want to delete.</p>
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorldTemplateResponse {}

/**
 * @public
 * <p>Information about a deployment job.</p>
 */
export interface DeploymentJob {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @public
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface DeregisterRobotRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface DeregisterRobotResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot?: string;
}

/**
 * @public
 */
export interface DescribeDeploymentJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  job: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RobotDeploymentStep = {
  DownloadingExtractingStep: "DownloadingExtracting",
  ExecutingDownloadCondition: "ExecutingDownloadCondition",
  FinishedStep: "Finished",
  LaunchingStep: "Launching",
  PostLaunchStep: "ExecutingPostLaunch",
  PreLaunchStep: "ExecutingPreLaunch",
  ValidatingStep: "Validating",
} as const;

/**
 * @public
 */
export type RobotDeploymentStep = (typeof RobotDeploymentStep)[keyof typeof RobotDeploymentStep];

/**
 * @public
 * <p>Information about the progress of a deployment job.</p>
 */
export interface ProgressDetail {
  /**
   * @public
   * <p>The current progress status.</p>
   *          <dl>
   *             <dt>Validating</dt>
   *             <dd>
   *                <p>Validating the deployment.</p>
   *             </dd>
   *             <dt>DownloadingExtracting</dt>
   *             <dd>
   *                <p>Downloading and extracting the bundle on the robot.</p>
   *             </dd>
   *             <dt>ExecutingPreLaunch</dt>
   *             <dd>
   *                <p>Executing pre-launch script(s) if provided.</p>
   *             </dd>
   *             <dt>Launching</dt>
   *             <dd>
   *                <p>Launching the robot application.</p>
   *             </dd>
   *             <dt>ExecutingPostLaunch</dt>
   *             <dd>
   *                <p>Executing post-launch script(s) if provided.</p>
   *             </dd>
   *             <dt>Finished</dt>
   *             <dd>
   *                <p>Deployment is complete.</p>
   *             </dd>
   *          </dl>
   */
  currentProgress?: RobotDeploymentStep;

  /**
   * @public
   * <p>Precentage of the step that is done. This currently only applies to the
   *             <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   */
  percentDone?: number;

  /**
   * @public
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies
   *          to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   */
  estimatedTimeRemainingSeconds?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  targetResource?: string;
}

/**
 * @public
 * @enum
 */
export const RobotStatus = {
  Available: "Available",
  Deploying: "Deploying",
  Failed: "Failed",
  InSync: "InSync",
  NoResponse: "NoResponse",
  PendingNewDeployment: "PendingNewDeployment",
  Registered: "Registered",
} as const;

/**
 * @public
 */
export type RobotStatus = (typeof RobotStatus)[keyof typeof RobotStatus];

/**
 * @public
 * <p>Information about a robot deployment.</p>
 */
export interface RobotDeployment {
  /**
   * @public
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date;

  /**
   * @public
   * <p>The status of the robot deployment.</p>
   */
  status?: RobotStatus;

  /**
   * @public
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: ProgressDetail;

  /**
   * @public
   * <p>A short description of the reason why the robot deployment failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The robot deployment failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode;
}

/**
 * @public
 */
export interface DescribeDeploymentJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @public
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A list of robot deployment summaries.</p>
   */
  robotDeploymentSummary?: RobotDeployment[];

  /**
   * @public
   * <p>The list of all tags added to the specified deployment job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeFleetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

/**
 * @public
 * <p>Information about a robot.</p>
 */
export interface Robot {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * @public
   * <p>The status of the robot.</p>
   */
  status?: RobotStatus;

  /**
   * @public
   * <p>The Greengrass group associated with the robot.</p>
   */
  greenGrassGroupId?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The architecture of the robot.</p>
   */
  architecture?: Architecture;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * @public
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

/**
 * @public
 */
export interface DescribeFleetResponse {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A list of robots.</p>
   */
  robots?: Robot[];

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the last deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * @public
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * @public
   * <p>The list of all tags added to the specified fleet.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRobotRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot to be described.</p>
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface DescribeRobotResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * @public
   * <p>The status of the fleet.</p>
   */
  status?: RobotStatus;

  /**
   * @public
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The target architecture of the robot application.</p>
   */
  architecture?: Architecture;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * @public
   * <p>The time of the last deployment job.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * @public
   * <p>The list of all tags added to the specified robot.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRobotApplicationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the robot application to describe.</p>
   */
  applicationVersion?: string;
}

/**
 * @public
 */
export interface DescribeRobotApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The list of all tags added to the specified robot application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The object that contains the Docker image URI used to create the robot
   *          application.</p>
   */
  environment?: Environment;

  /**
   * @public
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   */
  imageDigest?: string;
}

/**
 * @public
 */
export interface DescribeSimulationApplicationRequest {
  /**
   * @public
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The version of the simulation application to describe.</p>
   */
  applicationVersion?: string;
}

/**
 * @public
 */
export interface DescribeSimulationApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot simulation application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @public
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The list of all tags added to the specified simulation application.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   */
  environment?: Environment;

  /**
   * @public
   * <p>A SHA256 identifier for the Docker image that you use for your simulation
   *          application.</p>
   */
  imageDigest?: string;
}

/**
 * @public
 */
export interface DescribeSimulationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job to be described.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior;

  /**
   * @public
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version
   *                   creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode;

  /**
   * @public
   * <p>Details about why the simulation job failed. For more information about troubleshooting,
   *          see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or
   *          less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * @public
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * @public
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * @public
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * @public
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * @public
   * <p>The list of all tags added to the specified simulation job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The VPC configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * @public
   * <p>The network interface information for the simulation job.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * @public
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;
}

/**
 * @public
 */
export interface DescribeSimulationJobBatchRequest {
  /**
   * @public
   * <p>The id of the batch to describe.</p>
   */
  batch: string | undefined;
}

/**
 * @public
 * <p>Summary information for a simulation job.</p>
 */
export interface SimulationJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus;

  /**
   * @public
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: string[];

  /**
   * @public
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: string[];

  /**
   * @public
   * <p>The names of the data sources.</p>
   */
  dataSourceNames?: string[];

  /**
   * @public
   * <p>The compute type for the simulation job summary.</p>
   */
  computeType?: ComputeType;
}

/**
 * @public
 * <p>Information about a failed create simulation job request.</p>
 */
export interface FailedCreateSimulationJobRequest {
  /**
   * @public
   * <p>The simulation job request.</p>
   */
  request?: SimulationJobRequest;

  /**
   * @public
   * <p>The failure reason of the simulation job request.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: SimulationJobErrorCode;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch failed.</p>
   */
  failedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const SimulationJobBatchErrorCode = {
  InternalServiceError: "InternalServiceError",
} as const;

/**
 * @public
 */
export type SimulationJobBatchErrorCode =
  (typeof SimulationJobBatchErrorCode)[keyof typeof SimulationJobBatchErrorCode];

/**
 * @public
 * @enum
 */
export const SimulationJobBatchStatus = {
  Canceled: "Canceled",
  Canceling: "Canceling",
  Completed: "Completed",
  Completing: "Completing",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  TimedOut: "TimedOut",
  TimingOut: "TimingOut",
} as const;

/**
 * @public
 */
export type SimulationJobBatchStatus = (typeof SimulationJobBatchStatus)[keyof typeof SimulationJobBatchStatus];

/**
 * @public
 */
export interface DescribeSimulationJobBatchResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the batch.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The simulation job batch request is pending.</p>
   *             </dd>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <p>The simulation job batch is in progress. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The simulation job batch failed. One or more simulation job requests could not
   *                   be completed due to an internal failure (like <code>InternalServiceError</code>).
   *                   See <code>failureCode</code> and <code>failureReason</code> for more
   *                   information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are no
   *                   pending simulation job requests in the batch and none of the failed simulation job
   *                   requests are due to <code>InternalServiceError</code> and (2) when all created
   *                   simulation jobs have reached a terminal state (for example, <code>Completed</code>
   *                   or <code>Failed</code>). </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The simulation batch job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The simulation batch job is being cancelled.</p>
   *             </dd>
   *             <dt>Completing</dt>
   *             <dd>
   *                <p>The simulation batch job is completing.</p>
   *             </dd>
   *             <dt>TimingOut</dt>
   *             <dd>
   *                <p>The simulation job batch is timing out.</p>
   *                <p>If a batch timing out, and there are pending requests that were failing due to
   *                   an internal failure (like <code>InternalServiceError</code>), the batch status
   *                   will be <code>Failed</code>. If there are no such failing request, the batch
   *                   status will be <code>TimedOut</code>. </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * @public
   * <p>The failure code of the simulation job batch.</p>
   */
  failureCode?: SimulationJobBatchErrorCode;

  /**
   * @public
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>A list of failed create simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * @public
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * @public
   * <p>A list of created simulation job summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeWorldRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world you want to describe.</p>
   */
  world: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world generation job that generated the
   *          world.</p>
   */
  generationJob?: string;

  /**
   * @public
   * <p>The world template.</p>
   */
  template?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Returns the JSON formatted string that describes the contents of your world.</p>
   */
  worldDescriptionBody?: string;
}

/**
 * @public
 */
export interface DescribeWorldExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world export job to describe.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the world export job.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world export job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world export job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world export job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world export job failed. See <code>failureCode</code> and
   *                      <code>failureReason</code> for more information. </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world export job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world export job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldExportJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The failure code of the world export job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>LimitExceeded</dt>
   *             <dd>
   *                <p>The requested resource exceeds the maximum number allowed, or the number of
   *                   concurrent stream requests exceeds the maximum number allowed. </p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>The specified resource could not be found. </p>
   *             </dd>
   *             <dt>RequestThrottled</dt>
   *             <dd>
   *                <p>The request was throttled.</p>
   *             </dd>
   *             <dt>InvalidInput</dt>
   *             <dd>
   *                <p>An input parameter in the request is not valid.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: WorldExportJobErrorCode;

  /**
   * @public
   * <p>The reason why the world export job failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to be exported.</p>
   */
  worlds?: string[];

  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * @public
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeWorldGenerationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world generation job to describe.</p>
   */
  job: string | undefined;
}

/**
 * @public
 * <p>Information about a failed world.</p>
 */
export interface WorldFailure {
  /**
   * @public
   * <p>The failure code of the world export job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>LimitExceeded</dt>
   *             <dd>
   *                <p>The requested resource exceeds the maximum number allowed, or the number of
   *                   concurrent stream requests exceeds the maximum number allowed. </p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>The specified resource could not be found. </p>
   *             </dd>
   *             <dt>RequestThrottled</dt>
   *             <dd>
   *                <p>The request was throttled.</p>
   *             </dd>
   *             <dt>InvalidInput</dt>
   *             <dd>
   *                <p>An input parameter in the request is not valid.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: WorldGenerationJobErrorCode;

  /**
   * @public
   * <p>The sample reason why the world failed. World errors are aggregated. A sample is used as
   *          the <code>sampleFailureReason</code>. </p>
   */
  sampleFailureReason?: string;

  /**
   * @public
   * <p>The number of failed worlds.</p>
   */
  failureCount?: number;
}

/**
 * @public
 * <p>Information about worlds that failed.</p>
 */
export interface FailureSummary {
  /**
   * @public
   * <p>The total number of failures.</p>
   */
  totalFailureCount?: number;

  /**
   * @public
   * <p>The worlds that failed.</p>
   */
  failures?: WorldFailure[];
}

/**
 * @public
 * <p>Information about worlds that finished.</p>
 */
export interface FinishedWorldsSummary {
  /**
   * @public
   * <p>The total number of finished worlds.</p>
   */
  finishedCount?: number;

  /**
   * @public
   * <p>A list of worlds that succeeded.</p>
   */
  succeededWorlds?: string[];

  /**
   * @public
   * <p>Information about worlds that failed.</p>
   */
  failureSummary?: FailureSummary;
}

/**
 * @public
 */
export interface DescribeWorldGenerationJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world generation job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the world generation job:</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world generation job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world generation job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world generation job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world generation job failed. See <code>failureCode</code> for more
   *                   information. </p>
   *             </dd>
   *             <dt>PartialFailed</dt>
   *             <dd>
   *                <p>Some worlds did not generate.</p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world generation job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world generation job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldGenerationJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world generation job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The failure code of the world generation job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>LimitExceeded</dt>
   *             <dd>
   *                <p>The requested resource exceeds the maximum number allowed, or the number of
   *                   concurrent stream requests exceeds the maximum number allowed. </p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>The specified resource could not be found. </p>
   *             </dd>
   *             <dt>RequestThrottled</dt>
   *             <dd>
   *                <p>The request was throttled.</p>
   *             </dd>
   *             <dt>InvalidInput</dt>
   *             <dd>
   *                <p>An input parameter in the request is not valid.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: WorldGenerationJobErrorCode;

  /**
   * @public
   * <p>The reason why the world generation job failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * @public
   * <p>Information about the world count.</p>
   */
  worldCount?: WorldCount;

  /**
   * @public
   * <p>Summary information about finished worlds.</p>
   */
  finishedWorldsSummary?: FinishedWorldsSummary;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world generation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeWorldTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template you want to describe.</p>
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The version of the world template that you're using.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>Information about a filter.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A list of values.</p>
   */
  values?: string[];
}

/**
 * @public
 * <p>Information about a fleet.</p>
 */
export interface Fleet {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the last fleet deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * @public
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

/**
 * @public
 */
export interface GetWorldTemplateBodyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world generator job.</p>
   */
  generationJob?: string;
}

/**
 * @public
 */
export interface GetWorldTemplateBodyResponse {
  /**
   * @public
   * <p>The world template body.</p>
   */
  templateBody?: string;
}

/**
 * @public
 */
export interface ListDeploymentJobsRequest {
  /**
   * @public
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListDeploymentJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code>
   *          value if applicable. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDeploymentJobsResponse {
  /**
   * @public
   * <p>A list of deployment jobs that meet the criteria of the request.</p>
   */
  deploymentJobs?: DeploymentJob[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFleetsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListFleets</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *             the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListFleets</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListFleets</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if
   *          applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * @public
   * <p>A list of fleet details meeting the request criteria.</p>
   */
  fleetDetails?: Fleet[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListFleets</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRobotApplicationsRequest {
  /**
   * @public
   * <p>The version qualifier of the robot application.</p>
   */
  versionQualifier?: string;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListRobotApplications</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListRobotApplications</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListRobotApplications</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Summary information for a robot application.</p>
 */
export interface RobotApplicationSummary {
  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;
}

/**
 * @public
 */
export interface ListRobotApplicationsResponse {
  /**
   * @public
   * <p>A list of robot application summaries that meet the criteria of the request.</p>
   */
  robotApplicationSummaries?: RobotApplicationSummary[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRobotsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListRobots</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListRobots</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if
   *          applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>Registered</code> or the status <code>Available</code>.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 */
export interface ListRobotsResponse {
  /**
   * @public
   * <p>A list of robots that meet the criteria of the request.</p>
   */
  robots?: Robot[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSimulationApplicationsRequest {
  /**
   * @public
   * <p>The version qualifier of the simulation application.</p>
   */
  versionQualifier?: string;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListSimulationApplications</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationApplications</code> request with the returned
   *             <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is
   *          not used, then <code>ListSimulationApplications</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional list of filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Summary information for a simulation application.</p>
 */
export interface SimulationApplicationSummary {
  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>Information about a simulation software suite.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;
}

/**
 * @public
 */
export interface ListSimulationApplicationsResponse {
  /**
   * @public
   * <p>A list of simulation application summaries that meet the criteria of the request.</p>
   */
  simulationApplicationSummaries?: SimulationApplicationSummary[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSimulationJobBatchesRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListSimulationJobBatches</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationJobBatches</code> request with the returned
   *             <code>nextToken</code> value. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Information about a simulation job batch.</p>
 */
export interface SimulationJobBatchSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the simulation job batch.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The simulation job batch request is pending.</p>
   *             </dd>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <p>The simulation job batch is in progress. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The simulation job batch failed. One or more simulation job requests could not
   *                   be completed due to an internal failure (like <code>InternalServiceError</code>).
   *                   See <code>failureCode</code> and <code>failureReason</code> for more
   *                   information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are no
   *                   pending simulation job requests in the batch and none of the failed simulation job
   *                   requests are due to <code>InternalServiceError</code> and (2) when all created
   *                   simulation jobs have reached a terminal state (for example, <code>Completed</code>
   *                   or <code>Failed</code>). </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The simulation batch job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The simulation batch job is being cancelled.</p>
   *             </dd>
   *             <dt>Completing</dt>
   *             <dd>
   *                <p>The simulation batch job is completing.</p>
   *             </dd>
   *             <dt>TimingOut</dt>
   *             <dd>
   *                <p>The simulation job batch is timing out.</p>
   *                <p>If a batch timing out, and there are pending requests that were failing due to
   *                   an internal failure (like <code>InternalServiceError</code>), the batch status
   *                   will be <code>Failed</code>. If there are no such failing request, the batch
   *                   status will be <code>TimedOut</code>. </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus;

  /**
   * @public
   * <p>The number of failed simulation job requests.</p>
   */
  failedRequestCount?: number;

  /**
   * @public
   * <p>The number of pending simulation job requests.</p>
   */
  pendingRequestCount?: number;

  /**
   * @public
   * <p>The number of created simulation job requests.</p>
   */
  createdRequestCount?: number;
}

/**
 * @public
 */
export interface ListSimulationJobBatchesResponse {
  /**
   * @public
   * <p>A list of simulation job batch summaries.</p>
   */
  simulationJobBatchSummaries?: SimulationJobBatchSummary[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSimulationJobsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListSimulationJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 1000. If this parameter is not used, then
   *             <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code>
   *          value if applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and
   *             <code>robotApplicationName</code> are supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters, but they must be for
   *          the same named item. For example, if you are looking for items with the status
   *             <code>Preparing</code> or the status <code>Running</code>.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 */
export interface ListSimulationJobsResponse {
  /**
   * @public
   * <p>A list of simulation job summaries that meet the criteria of the request.</p>
   */
  simulationJobSummaries: SimulationJobSummary[] | undefined;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of all tags added to the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorldExportJobsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListWorldExportJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code>
   *          value if applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results. You can use <code>generationJobId</code> and
   *             <code>templateId</code>.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Information about a world export job.</p>
 */
export interface WorldExportJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the world export job.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world export job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world export job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world export job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world export job failed. See <code>failureCode</code> for more information.
   *                </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world export job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world export job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldExportJobStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A list of worlds.</p>
   */
  worlds?: string[];

  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;
}

/**
 * @public
 */
export interface ListWorldExportJobsResponse {
  /**
   * @public
   * <p>Summary information for world export jobs.</p>
   */
  worldExportJobSummaries: WorldExportJobSummary[] | undefined;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorldGenerationJobsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldGeneratorJobs</code> request with the returned
   *             <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is
   *          not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results. You can use <code>status</code> and
   *             <code>templateId</code>.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Information about a world generator job.</p>
 */
export interface WorldGenerationJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The status of the world generator job:</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The world generator job request is pending.</p>
   *             </dd>
   *             <dt>Running</dt>
   *             <dd>
   *                <p>The world generator job is running. </p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The world generator job completed. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The world generator job failed. See <code>failureCode</code> for more
   *                   information. </p>
   *             </dd>
   *             <dt>PartialFailed</dt>
   *             <dd>
   *                <p>Some worlds did not generate.</p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The world generator job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The world generator job is being cancelled.</p>
   *             </dd>
   *          </dl>
   */
  status?: WorldGenerationJobStatus;

  /**
   * @public
   * <p>Information about the world count.</p>
   */
  worldCount?: WorldCount;

  /**
   * @public
   * <p>The number of worlds that were generated.</p>
   */
  succeededWorldCount?: number;

  /**
   * @public
   * <p>The number of worlds that failed.</p>
   */
  failedWorldCount?: number;
}

/**
 * @public
 */
export interface ListWorldGenerationJobsResponse {
  /**
   * @public
   * <p>Summary information for world generator jobs.</p>
   */
  worldGenerationJobSummaries: WorldGenerationJobSummary[] | undefined;

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGeneratorJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorldsRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListWorlds</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorlds</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if
   *          applicable. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Optional filters to limit results. You can use <code>status</code>.</p>
   */
  filters?: Filter[];
}

/**
 * @public
 * <p>Information about a world.</p>
 */
export interface WorldSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the world.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world generation job.</p>
   */
  generationJob?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;
}

/**
 * @public
 */
export interface ListWorldsResponse {
  /**
   * @public
   * <p>Summary information for worlds.</p>
   */
  worldSummaries?: WorldSummary[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorldTemplatesRequest {
  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>When this parameter is used, <code>ListWorldTemplates</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code>
   *          value if applicable. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information for a template.</p>
 */
export interface TemplateSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the template was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the template was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the template that you're using.</p>
   */
  version?: string;
}

/**
 * @public
 */
export interface ListWorldTemplatesResponse {
  /**
   * @public
   * <p>Summary information for templates.</p>
   */
  templateSummaries?: TemplateSummary[];

  /**
   * @public
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface RegisterRobotRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface RegisterRobotResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet that the robot will join.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>Information about the robot registration.</p>
   */
  robot?: string;
}

/**
 * @public
 */
export interface RestartSimulationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface RestartSimulationJobResponse {}

/**
 * @public
 */
export interface StartSimulationJobBatchRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * @public
   * <p>A list of simulation job requests to create in the batch.</p>
   */
  createSimulationJobRequests: SimulationJobRequest[] | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartSimulationJobBatchResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the batch.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The status of the simulation job batch.</p>
   *          <dl>
   *             <dt>Pending</dt>
   *             <dd>
   *                <p>The simulation job batch request is pending.</p>
   *             </dd>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <p>The simulation job batch is in progress. </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The simulation job batch failed. One or more simulation job requests could not
   *                   be completed due to an internal failure (like <code>InternalServiceError</code>).
   *                   See <code>failureCode</code> and <code>failureReason</code> for more
   *                   information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are no
   *                   pending simulation job requests in the batch and none of the failed simulation job
   *                   requests are due to <code>InternalServiceError</code> and (2) when all created
   *                   simulation jobs have reached a terminal state (for example, <code>Completed</code>
   *                   or <code>Failed</code>). </p>
   *             </dd>
   *             <dt>Canceled</dt>
   *             <dd>
   *                <p>The simulation batch job was cancelled.</p>
   *             </dd>
   *             <dt>Canceling</dt>
   *             <dd>
   *                <p>The simulation batch job is being cancelled.</p>
   *             </dd>
   *             <dt>Completing</dt>
   *             <dd>
   *                <p>The simulation batch job is completing.</p>
   *             </dd>
   *             <dt>TimingOut</dt>
   *             <dd>
   *                <p>The simulation job batch is timing out.</p>
   *                <p>If a batch timing out, and there are pending requests that were failing due to
   *                   an internal failure (like <code>InternalServiceError</code>), the batch status
   *                   will be <code>Failed</code>. If there are no such failing request, the batch
   *                   status will be <code>TimedOut</code>. </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * @public
   * <p>The failure code if the simulation job batch failed.</p>
   */
  failureCode?: SimulationJobBatchErrorCode;

  /**
   * @public
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>A list of failed simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * @public
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * @public
   * <p>A list of created simulation job request summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SyncDeploymentJobRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The target fleet for the synchronization.</p>
   */
  fleet: string | undefined;
}

/**
 * @public
 */
export interface SyncDeploymentJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * @public
   * <p>The status of the synchronization job.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>Information about the deployment application configurations.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * @public
   * <p>The failure reason if the job fails.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The failure code if the job fails:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other
   *                   issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version
   *                   creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing
   *          tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A map that contains tag keys and tag values that will be unattached from the
   *          resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateRobotApplicationRequest {
  /**
   * @public
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: SourceConfig[];

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * @public
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI for your robot application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface UpdateRobotApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated robot application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI for your robot application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface UpdateSimulationApplicationRequest {
  /**
   * @public
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: SourceConfig[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * @public
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI for your simulation application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface UpdateSimulationApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated simulation application.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * @public
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * @public
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * @public
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The object that contains the Docker image URI used for your simulation
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface UpdateWorldTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template to update.</p>
   */
  template: string | undefined;

  /**
   * @public
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The world template body.</p>
   */
  templateBody?: string;

  /**
   * @public
   * <p>The location of the world template.</p>
   */
  templateLocation?: TemplateLocation;
}

/**
 * @public
 */
export interface UpdateWorldTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;
}
