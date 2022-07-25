// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RoboMakerServiceException as __BaseException } from "./RoboMakerServiceException";

export enum Architecture {
  ARM64 = "ARM64",
  ARMHF = "ARMHF",
  X86_64 = "X86_64",
}

export interface BatchDeleteWorldsRequest {
  /**
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to delete.</p>
   */
  worlds: string[] | undefined;
}

export interface BatchDeleteWorldsResponse {
  /**
   * <p>A list of unprocessed worlds associated with the call. These worlds were not
   *          deleted.</p>
   */
  unprocessedWorlds?: string[];
}

/**
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

export interface BatchDescribeSimulationJobRequest {
  /**
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   */
  jobs: string[] | undefined;
}

export enum ComputeType {
  CPU = "CPU",
  GPU_AND_CPU = "GPU_AND_CPU",
}

/**
 * <p>Compute information for the simulation job</p>
 */
export interface ComputeResponse {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *          only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;

  /**
   * <p>Compute type response information for the simulation job.</p>
   */
  computeType?: ComputeType | string;

  /**
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *          allocated to the SimulationJob.</p>
   */
  gpuUnitLimit?: number;
}

/**
 * <p>Information about S3 keys.</p>
 */
export interface S3KeyOutput {
  /**
   * <p>The S3 key.</p>
   */
  s3Key?: string;

  /**
   * <p>The etag for the object.</p>
   */
  etag?: string;
}

export enum DataSourceType {
  Archive = "Archive",
  File = "File",
  Prefix = "Prefix",
}

/**
 * <p>Information about a data source.</p>
 */
export interface DataSource {
  /**
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys?: S3KeyOutput[];

  /**
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   */
  type?: DataSourceType | string;

  /**
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

export enum FailureBehavior {
  Continue = "Continue",
  Fail = "Fail",
}

export enum SimulationJobErrorCode {
  BadPermissionsCloudwatchLogs = "BadPermissionsCloudwatchLogs",
  BadPermissionsRobotApplication = "BadPermissionsRobotApplication",
  BadPermissionsS3Object = "BadPermissionsS3Object",
  BadPermissionsS3Output = "BadPermissionsS3Output",
  BadPermissionsSimulationApplication = "BadPermissionsSimulationApplication",
  BadPermissionsUserCredentials = "BadPermissionsUserCredentials",
  BatchCanceled = "BatchCanceled",
  BatchTimedOut = "BatchTimedOut",
  ENILimitExceeded = "ENILimitExceeded",
  InternalServiceError = "InternalServiceError",
  InvalidBundleRobotApplication = "InvalidBundleRobotApplication",
  InvalidBundleSimulationApplication = "InvalidBundleSimulationApplication",
  InvalidInput = "InvalidInput",
  InvalidS3Resource = "InvalidS3Resource",
  LimitExceeded = "LimitExceeded",
  MismatchedEtag = "MismatchedEtag",
  RequestThrottled = "RequestThrottled",
  ResourceNotFound = "ResourceNotFound",
  RobotApplicationCrash = "RobotApplicationCrash",
  RobotApplicationHealthCheckFailure = "RobotApplicationHealthCheckFailure",
  RobotApplicationVersionMismatchedEtag = "RobotApplicationVersionMismatchedEtag",
  SimulationApplicationCrash = "SimulationApplicationCrash",
  SimulationApplicationHealthCheckFailure = "SimulationApplicationHealthCheckFailure",
  SimulationApplicationVersionMismatchedEtag = "SimulationApplicationVersionMismatchedEtag",
  SubnetIpLimitExceeded = "SubnetIpLimitExceeded",
  ThrottlingError = "ThrottlingError",
  UploadContentMismatchError = "UploadContentMismatchError",
  WrongRegionRobotApplication = "WrongRegionRobotApplication",
  WrongRegionS3Bucket = "WrongRegionS3Bucket",
  WrongRegionS3Output = "WrongRegionS3Output",
  WrongRegionSimulationApplication = "WrongRegionSimulationApplication",
}

/**
 * <p>The logging configuration.</p>
 */
export interface LoggingConfig {
  /**
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
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The IPv4 public address of the network interface.</p>
   */
  publicIpAddress?: string;
}

/**
 * <p>The output location.</p>
 */
export interface OutputLocation {
  /**
   * <p>The S3 bucket for output.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The S3 folder in the <code>s3Bucket</code> where output files will be placed.</p>
   */
  s3Prefix?: string;
}

/**
 * <p>An object representing a port mapping.</p>
 */
export interface PortMapping {
  /**
   * <p>The port number on the simulation job instance to use as a remote connection point.
   *          </p>
   */
  jobPort: number | undefined;

  /**
   * <p>The port number on the application.</p>
   */
  applicationPort: number | undefined;

  /**
   * <p>A Boolean indicating whether to enable this port mapping on public IP.</p>
   */
  enableOnPublicIp?: boolean;
}

/**
 * <p>Configuration information for port forwarding.</p>
 */
export interface PortForwardingConfig {
  /**
   * <p>The port mappings for the configuration.</p>
   */
  portMappings?: PortMapping[];
}

/**
 * <p>Information about a launch configuration.</p>
 */
export interface LaunchConfig {
  /**
   * <p>The package name.</p>
   */
  packageName?: string;

  /**
   * <p>The launch file name.</p>
   */
  launchFile?: string;

  /**
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * <p>The port forwarding configuration.</p>
   */
  portForwardingConfig?: PortForwardingConfig;

  /**
   * <p>Boolean indicating whether a streaming session will be configured for the application.
   *          If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          your application as it is running in the simulation. You must configure and launch the
   *          component. It must have a graphical user interface. </p>
   */
  streamUI?: boolean;

  /**
   * <p>If you've specified <code>General</code> as the value for your <code>RobotSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   *          <p>If you've specified <code>SimulationRuntime</code> as the value for your <code>SimulationSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   */
  command?: string[];
}

export enum ExitBehavior {
  FAIL = "FAIL",
  RESTART = "RESTART",
}

/**
 * <p>Information about a tool. Tools are used in a simulation job.</p>
 */
export interface Tool {
  /**
   * <p>Boolean indicating whether a streaming session will be configured for the tool. If
   *             <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          the tool as it is running in the simulation. It must have a graphical user interface. The
   *          default is <code>False</code>. </p>
   */
  streamUI?: boolean;

  /**
   * <p>The name of the tool.</p>
   */
  name: string | undefined;

  /**
   * <p>Command-line arguments for the tool. It must include the tool executable name.</p>
   */
  command: string | undefined;

  /**
   * <p>Boolean indicating whether logs will be recorded in CloudWatch for the tool. The default
   *          is <code>False</code>. </p>
   */
  streamOutputToCloudWatch?: boolean;

  /**
   * <p>Exit behavior determines what happens when your tool quits running. <code>RESTART</code>
   *          will cause your tool to be restarted. <code>FAIL</code> will cause your job to exit. The
   *          default is <code>RESTART</code>. </p>
   */
  exitBehavior?: ExitBehavior | string;
}

export enum UploadBehavior {
  UPLOAD_ON_TERMINATE = "UPLOAD_ON_TERMINATE",
  UPLOAD_ROLLING_AUTO_REMOVE = "UPLOAD_ROLLING_AUTO_REMOVE",
}

/**
 * <p>Provides upload configuration information. Files are uploaded from the simulation job to
 *          a location you specify. </p>
 */
export interface UploadConfiguration {
  /**
   * <p>A prefix that specifies where files will be uploaded in Amazon S3. It is appended to the
   *          simulation output location to determine the final path. </p>
   *          <p> For example, if your simulation output location is <code>s3://my-bucket</code> and your
   *          upload configuration name is <code>robot-test</code>, your files will be uploaded to
   *             <code>s3://my-bucket/<simid>/<runid>/robot-test</code>. </p>
   */
  name: string | undefined;

  /**
   * <p> Specifies the path of the file(s) to upload. Standard Unix glob matching rules are
   *          accepted, with the addition of <code>**</code> as a <i>super asterisk</i>.
   *          For example, specifying <code>/var/log/**.log</code> causes all .log files in the
   *             <code>/var/log</code> directory tree to be collected. For more examples, see <a href="https://github.com/gobwas/glob">Glob Library</a>. </p>
   */
  path: string | undefined;

  /**
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
  uploadBehavior: UploadBehavior | string | undefined;
}

/**
 * <p>Application configuration information for a robot.</p>
 */
export interface RobotApplicationConfig {
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>The upload configurations for the robot application.</p>
   */
  uploadConfigurations?: UploadConfiguration[];

  /**
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
   * <p>Information about tools configured for the robot application.</p>
   */
  tools?: Tool[];

  /**
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
 * <p>Configuration information for a world.</p>
 */
export interface WorldConfig {
  /**
   * <p>The world generated by Simulation WorldForge.</p>
   */
  world?: string;
}

/**
 * <p>Information about a simulation application configuration.</p>
 */
export interface SimulationApplicationConfig {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>Information about upload configurations for the simulation application.</p>
   */
  uploadConfigurations?: UploadConfiguration[];

  /**
   * <p>A list of world configurations.</p>
   */
  worldConfigs?: WorldConfig[];

  /**
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
   * <p>Information about tools configured for the simulation application.</p>
   */
  tools?: Tool[];

  /**
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

export enum SimulationJobStatus {
  Canceled = "Canceled",
  Completed = "Completed",
  Failed = "Failed",
  Pending = "Pending",
  Preparing = "Preparing",
  Restarting = "Restarting",
  Running = "Running",
  RunningFailed = "RunningFailed",
  Terminated = "Terminated",
  Terminating = "Terminating",
}

/**
 * <p>VPC configuration associated with your simulation job.</p>
 */
export interface VPCConfigResponse {
  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: string[];

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The VPC ID associated with your simulation job.</p>
   */
  vpcId?: string;

  /**
   * <p>A boolean indicating if a public IP was assigned.</p>
   */
  assignPublicIp?: boolean;
}

/**
 * <p>Information about a simulation job.</p>
 */
export interface SimulationJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>Status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
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
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The failure code of the simulation job if it failed.</p>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The reason why the simulation job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job. </p>
   */
  iamRole?: string;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>Information about a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>Compute information for the simulation job</p>
   */
  compute?: ComputeResponse;
}

export interface BatchDescribeSimulationJobResponse {
  /**
   * <p>A list of simulation jobs.</p>
   */
  jobs?: SimulationJob[];

  /**
   * <p>A list of unprocessed simulation job Amazon Resource Names (ARNs).</p>
   */
  unprocessedJobs?: string[];
}

/**
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
 * <p>Information about the batch policy.</p>
 */
export interface BatchPolicy {
  /**
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
   * <p>The number of active simulation jobs create as part of the batch that can be in an
   *          active state at the same time. </p>
   *          <p>Active states include: <code>Pending</code>,<code>Preparing</code>,
   *          <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and
   *             <code>Terminating</code>. All other states are terminal states. </p>
   */
  maxConcurrency?: number;
}

export interface CancelDeploymentJobRequest {
  /**
   * <p>The deployment job ARN to cancel.</p>
   */
  job: string | undefined;
}

export interface CancelDeploymentJobResponse {}

export interface CancelSimulationJobRequest {
  /**
   * <p>The simulation job ARN to cancel.</p>
   */
  job: string | undefined;
}

export interface CancelSimulationJobResponse {}

export interface CancelSimulationJobBatchRequest {
  /**
   * <p>The id of the batch to cancel.</p>
   */
  batch: string | undefined;
}

export interface CancelSimulationJobBatchResponse {}

export interface CancelWorldExportJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world export job to cancel.</p>
   */
  job: string | undefined;
}

export interface CancelWorldExportJobResponse {}

export interface CancelWorldGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world generator job to cancel.</p>
   */
  job: string | undefined;
}

export interface CancelWorldGenerationJobResponse {}

/**
 * <p>Compute information for the simulation job.</p>
 */
export interface Compute {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *         only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;

  /**
   * <p>Compute type information for the simulation job.</p>
   */
  computeType?: ComputeType | string;

  /**
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *         allocated to the SimulationJob.</p>
   */
  gpuUnitLimit?: number;
}

/**
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
 * <p>Configuration information for a deployment launch.</p>
 */
export interface DeploymentLaunchConfig {
  /**
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The deployment pre-launch file. This file will be executed prior to the launch
   *          file.</p>
   */
  preLaunchFile?: string;

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>The deployment post-launch file. This file will be executed after the launch
   *          file.</p>
   */
  postLaunchFile?: string;

  /**
   * <p>An array of key/value pairs specifying environment variables for the robot
   *          application</p>
   */
  environmentVariables?: Record<string, string>;
}

/**
 * <p>Information about a deployment application configuration.</p>
 */
export interface DeploymentApplicationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: string | undefined;

  /**
   * <p>The launch configuration.</p>
   */
  launchConfig: DeploymentLaunchConfig | undefined;
}

/**
 * <p>Information about an S3 object.</p>
 */
export interface S3Object {
  /**
   * <p>The bucket containing the object.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The key of the object.</p>
   */
  key: string | undefined;

  /**
   * <p>The etag of the object.</p>
   */
  etag?: string;
}

/**
 * <p>Information about a deployment configuration.</p>
 */
export interface DeploymentConfig {
  /**
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   */
  concurrentDeploymentPercentage?: number;

  /**
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   */
  failureThresholdPercentage?: number;

  /**
   * <p>The amount of time, in seconds, to wait for deployment to a single robot to complete.
   *          Choose a time between 1 minute and 7 days. The default is 5 hours.</p>
   */
  robotDeploymentTimeoutInSeconds?: number;

  /**
   * <p>The download condition file.</p>
   */
  downloadConditionFile?: S3Object;
}

export interface CreateDeploymentJobRequest {
  /**
   * <p>The requested deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment
   *          job.</p>
   */
  tags?: Record<string, string>;
}

export enum DeploymentJobErrorCode {
  BadLambdaAssociated = "BadLambdaAssociated",
  BadPermissionError = "BadPermissionError",
  DeploymentFleetDoesNotExist = "DeploymentFleetDoesNotExist",
  DownloadConditionFailed = "DownloadConditionFailed",
  EnvironmentSetupError = "EnvironmentSetupError",
  EtagMismatch = "EtagMismatch",
  ExtractingBundleFailure = "ExtractingBundleFailure",
  FailureThresholdBreached = "FailureThresholdBreached",
  FleetDeploymentTimeout = "FleetDeploymentTimeout",
  GreengrassDeploymentFailed = "GreengrassDeploymentFailed",
  GreengrassGroupVersionDoesNotExist = "GreengrassGroupVersionDoesNotExist",
  InternalServerError = "InternalServerError",
  InvalidGreengrassGroup = "InvalidGreengrassGroup",
  LambdaDeleted = "LambdaDeleted",
  MissingRobotApplicationArchitecture = "MissingRobotApplicationArchitecture",
  MissingRobotArchitecture = "MissingRobotArchitecture",
  MissingRobotDeploymentResource = "MissingRobotDeploymentResource",
  PostLaunchFileFailure = "PostLaunchFileFailure",
  PreLaunchFileFailure = "PreLaunchFileFailure",
  ResourceNotFound = "ResourceNotFound",
  RobotAgentConnectionTimeout = "RobotAgentConnectionTimeout",
  RobotApplicationDoesNotExist = "RobotApplicationDoesNotExist",
  RobotDeploymentAborted = "RobotDeploymentAborted",
  RobotDeploymentNoResponse = "RobotDeploymentNoResponse",
}

export enum DeploymentStatus {
  Canceled = "Canceled",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  Preparing = "Preparing",
  Succeeded = "Succeeded",
}

export interface CreateDeploymentJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The target fleet for the deployment job.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The failure reason of the deployment job if it failed.</p>
   */
  failureReason?: string;

  /**
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
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The list of all tags added to the deployment job.</p>
   */
  tags?: Record<string, string>;
}

/**
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

export interface CreateFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the fleet.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The list of all tags added to the fleet.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateRobotRequest {
  /**
   * <p>The name for the robot.</p>
   */
  name: string | undefined;

  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture: Architecture | string | undefined;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The list of all tags added to the robot.</p>
   */
  tags?: Record<string, string>;
}

/**
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
 * <p>The object that contains the Docker image URI for either your robot or simulation
 *          applications.</p>
 */
export interface Environment {
  /**
   * <p>The Docker image URI for either your robot or simulation applications.</p>
   */
  uri?: string;
}

export enum RobotSoftwareSuiteType {
  General = "General",
  ROS = "ROS",
  ROS2 = "ROS2",
}

export enum RobotSoftwareSuiteVersionType {
  Dashing = "Dashing",
  Foxy = "Foxy",
  Kinetic = "Kinetic",
  Melodic = "Melodic",
}

/**
 * <p>Information about a robot software suite (ROS distribution).</p>
 */
export interface RobotSoftwareSuite {
  /**
   * <p>The name of the robot software suite (ROS distribution).</p>
   */
  name?: RobotSoftwareSuiteType | string;

  /**
   * <p>The version of the robot software suite (ROS distribution).</p>
   */
  version?: RobotSoftwareSuiteVersionType | string;
}

/**
 * <p>Information about a source configuration.</p>
 */
export interface SourceConfig {
  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>The target processor architecture for the application.</p>
   */
  architecture?: Architecture | string;
}

export interface CreateRobotApplicationRequest {
  /**
   * <p>The name of the robot application.</p>
   */
  name: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: SourceConfig[];

  /**
   * <p>The robot software suite (ROS distribuition) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot
   *          application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The object that contains that URI of the Docker image that you use for your robot
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * <p>Information about a source.</p>
 */
export interface Source {
  /**
   * <p>The s3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   */
  etag?: string;

  /**
   * <p>The taget processor architecture for the application.</p>
   */
  architecture?: Architecture | string;
}

export interface CreateRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The list of all tags added to the robot application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>An object that contains the Docker image URI used to a create your robot
   *          application.</p>
   */
  environment?: Environment;
}

export interface CreateRobotApplicationVersionRequest {
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the robot application. If you provide a value and it matches
   *          the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The Amazon S3 identifier for the zip file bundle that you use for your robot
   *          application.</p>
   */
  s3Etags?: string[];

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   */
  imageDigest?: string;
}

export interface CreateRobotApplicationVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The object that contains the Docker image URI used to create your robot
   *          application.</p>
   */
  environment?: Environment;
}

export enum RenderingEngineType {
  OGRE = "OGRE",
}

/**
 * <p>Information about a rendering engine.</p>
 */
export interface RenderingEngine {
  /**
   * <p>The name of the rendering engine.</p>
   */
  name?: RenderingEngineType | string;

  /**
   * <p>The version of the rendering engine.</p>
   */
  version?: string;
}

export enum SimulationSoftwareSuiteType {
  Gazebo = "Gazebo",
  RosbagPlay = "RosbagPlay",
  SimulationRuntime = "SimulationRuntime",
}

/**
 * <p>Information about a simulation software suite.</p>
 */
export interface SimulationSoftwareSuite {
  /**
   * <p>The name of the simulation software suite.</p>
   */
  name?: SimulationSoftwareSuiteType | string;

  /**
   * <p>The version of the simulation software suite.</p>
   */
  version?: string;
}

export interface CreateSimulationApplicationRequest {
  /**
   * <p>The name of the simulation application.</p>
   */
  name: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: SourceConfig[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The robot software suite (ROS distribution) used by the simulation application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The object that contains the Docker image URI used to create your simulation
   *          application.</p>
   */
  environment?: Environment;
}

export interface CreateSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The list of all tags added to the simulation application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The object that contains the Docker image URI that you used to create your simulation
   *          application.</p>
   */
  environment?: Environment;
}

export interface CreateSimulationApplicationVersionRequest {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the simulation application. If you provide a value and it
   *          matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The Amazon S3 eTag identifier for the zip file bundle that you use to create the
   *          simulation application.</p>
   */
  s3Etags?: string[];

  /**
   * <p>The SHA256 digest used to identify the Docker image URI used to created the simulation
   *          application.</p>
   */
  imageDigest?: string;
}

export interface CreateSimulationApplicationVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision ID of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   */
  environment?: Environment;
}

/**
 * <p>Information about a data source.</p>
 */
export interface DataSourceConfig {
  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys: string[] | undefined;

  /**
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   */
  type?: DataSourceType | string;

  /**
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
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter
 *          identifying the list of security group IDs and subnet IDs. These must belong to the same
 *          VPC. You must provide at least one security group and two subnet IDs.</p>
 */
export interface VPCConfig {
  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: string[] | undefined;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: string[];

  /**
   * <p>A boolean indicating whether to assign a public IP address.</p>
   */
  assignPublicIp?: boolean;
}

export interface CreateSimulationJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When
   *             <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will
   *          transition to <code>Completed</code>.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   */
  iamRole: string | undefined;

  /**
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
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The robot application to use in the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The simulation application to use in the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and one subnet ID. </p>
   */
  vpcConfig?: VPCConfig;

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: Compute;
}

export interface CreateSimulationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>the failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
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
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Simulation job output files location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds. </p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation job to call the AWS APIs that are specified in
   *          its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>The robot application used by the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The simulation application used by the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>The list of all tags added to the simulation job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;
}

/**
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
 * <p>Information about a simulation job request.</p>
 */
export interface SimulationJobRequest {
  /**
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   */
  iamRole?: string;

  /**
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
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>A Boolean indicating whether to use default applications in the simulation job. Default
   *          applications include Gazebo, rqt, rviz and terminal access. </p>
   */
  useDefaultApplications?: boolean;

  /**
   * <p>The robot applications to use in the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The simulation applications to use in the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and two subnet IDs.</p>
   */
  vpcConfig?: VPCConfig;

  /**
   * <p>Compute information for the simulation job</p>
   */
  compute?: Compute;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          request.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateWorldExportJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to export.</p>
   */
  worlds: string[] | undefined;

  /**
   * <p>The output location.</p>
   */
  outputLocation: OutputLocation | undefined;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   */
  iamRole: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

export enum WorldExportJobErrorCode {
  AccessDenied = "AccessDenied",
  InternalServiceError = "InternalServiceError",
  InvalidInput = "InvalidInput",
  LimitExceeded = "LimitExceeded",
  RequestThrottled = "RequestThrottled",
  ResourceNotFound = "ResourceNotFound",
}

export enum WorldExportJobStatus {
  Canceled = "Canceled",
  Canceling = "Canceling",
  Completed = "Completed",
  Failed = "Failed",
  Pending = "Pending",
  Running = "Running",
}

export interface CreateWorldExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
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
  status?: WorldExportJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
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
  failureCode?: WorldExportJobErrorCode | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export. </p>
   */
  iamRole?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

/**
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
   * <p>The number of unique floorplans.</p>
   */
  floorplanCount?: number;

  /**
   * <p>The number of unique interiors per floorplan.</p>
   */
  interiorCountPerFloorplan?: number;
}

export interface CreateWorldGenerationJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world template describing the worlds you want to
   *          create.</p>
   */
  template: string | undefined;

  /**
   * <p>Information about the world count.</p>
   */
  worldCount: WorldCount | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

export enum WorldGenerationJobErrorCode {
  AllWorldGenerationFailed = "AllWorldGenerationFailed",
  InternalServiceError = "InternalServiceError",
  InvalidInput = "InvalidInput",
  LimitExceeded = "LimitExceeded",
  RequestThrottled = "RequestThrottled",
  ResourceNotFound = "ResourceNotFound",
}

export enum WorldGenerationJobStatus {
  Canceled = "Canceled",
  Canceling = "Canceling",
  Completed = "Completed",
  Failed = "Failed",
  PartialFailed = "PartialFailed",
  Pending = "Pending",
  Running = "Running",
}

export interface CreateWorldGenerationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   */
  arn?: string;

  /**
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
  status?: WorldGenerationJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
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
  failureCode?: WorldGenerationJobErrorCode | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * <p>Information about the world count. </p>
   */
  worldCount?: WorldCount;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

/**
 * <p>Information about a template location.</p>
 */
export interface TemplateLocation {
  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Key: string | undefined;
}

export interface CreateWorldTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * <p>The world template body.</p>
   */
  templateBody?: string;

  /**
   * <p>The location of the world template.</p>
   */
  templateLocation?: TemplateLocation;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   */
  arn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;
}

export interface DeleteFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export interface DeleteFleetResponse {}

export interface DeleteRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export interface DeleteRobotResponse {}

export interface DeleteRobotApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to delete.</p>
   */
  applicationVersion?: string;
}

export interface DeleteRobotApplicationResponse {}

export interface DeleteSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application to delete.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to delete.</p>
   */
  applicationVersion?: string;
}

export interface DeleteSimulationApplicationResponse {}

export interface DeleteWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template you want to delete.</p>
   */
  template: string | undefined;
}

export interface DeleteWorldTemplateResponse {}

/**
 * <p>Information about a deployment job.</p>
 */
export interface DeploymentJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;
}

export interface DeregisterRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export interface DeregisterRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot?: string;
}

export interface DescribeDeploymentJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  job: string | undefined;
}

export enum RobotDeploymentStep {
  DownloadingExtractingStep = "DownloadingExtracting",
  ExecutingDownloadCondition = "ExecutingDownloadCondition",
  FinishedStep = "Finished",
  LaunchingStep = "Launching",
  PostLaunchStep = "ExecutingPostLaunch",
  PreLaunchStep = "ExecutingPreLaunch",
  ValidatingStep = "Validating",
}

/**
 * <p>Information about the progress of a deployment job.</p>
 */
export interface ProgressDetail {
  /**
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
  currentProgress?: RobotDeploymentStep | string;

  /**
   * <p>Precentage of the step that is done. This currently only applies to the
   *             <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   */
  percentDone?: number;

  /**
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies
   *          to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   */
  estimatedTimeRemainingSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  targetResource?: string;
}

export enum RobotStatus {
  Available = "Available",
  Deploying = "Deploying",
  Failed = "Failed",
  InSync = "InSync",
  NoResponse = "NoResponse",
  PendingNewDeployment = "PendingNewDeployment",
  Registered = "Registered",
}

/**
 * <p>Information about a robot deployment.</p>
 */
export interface RobotDeployment {
  /**
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date;

  /**
   * <p>The status of the robot deployment.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: ProgressDetail;

  /**
   * <p>A short description of the reason why the robot deployment failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The robot deployment failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;
}

export interface DescribeDeploymentJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of robot deployment summaries.</p>
   */
  robotDeploymentSummary?: RobotDeployment[];

  /**
   * <p>The list of all tags added to the specified deployment job.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

/**
 * <p>Information about a robot.</p>
 */
export interface Robot {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The status of the robot.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>The Greengrass group associated with the robot.</p>
   */
  greenGrassGroupId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

export interface DescribeFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>A list of robots.</p>
   */
  robots?: Robot[];

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the last deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The list of all tags added to the specified fleet.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot to be described.</p>
   */
  robot: string | undefined;
}

export interface DescribeRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The target architecture of the robot application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment job.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The list of all tags added to the specified robot.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeRobotApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to describe.</p>
   */
  applicationVersion?: string;
}

export interface DescribeRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The list of all tags added to the specified robot application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The object that contains the Docker image URI used to create the robot
   *          application.</p>
   */
  environment?: Environment;

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   */
  imageDigest?: string;
}

export interface DescribeSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to describe.</p>
   */
  applicationVersion?: string;
}

export interface DescribeSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The list of all tags added to the specified simulation application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   */
  environment?: Environment;

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your simulation
   *          application.</p>
   */
  imageDigest?: string;
}

export interface DescribeSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job to be described.</p>
   */
  job: string | undefined;
}

export interface DescribeSimulationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
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
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>Details about why the simulation job failed. For more information about troubleshooting,
   *          see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.</p>
   */
  failureReason?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or
   *          less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>The list of all tags added to the specified simulation job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The VPC configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>The network interface information for the simulation job.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;
}

export interface DescribeSimulationJobBatchRequest {
  /**
   * <p>The id of the batch to describe.</p>
   */
  batch: string | undefined;
}

/**
 * <p>Summary information for a simulation job.</p>
 */
export interface SimulationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: string[];

  /**
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: string[];

  /**
   * <p>The names of the data sources.</p>
   */
  dataSourceNames?: string[];

  /**
   * <p>The compute type for the simulation job summary.</p>
   */
  computeType?: ComputeType | string;
}

/**
 * <p>Information about a failed create simulation job request.</p>
 */
export interface FailedCreateSimulationJobRequest {
  /**
   * <p>The simulation job request.</p>
   */
  request?: SimulationJobRequest;

  /**
   * <p>The failure reason of the simulation job request.</p>
   */
  failureReason?: string;

  /**
   * <p>The failure code.</p>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch failed.</p>
   */
  failedAt?: Date;
}

export enum SimulationJobBatchErrorCode {
  InternalServiceError = "InternalServiceError",
}

export enum SimulationJobBatchStatus {
  Canceled = "Canceled",
  Canceling = "Canceling",
  Completed = "Completed",
  Completing = "Completing",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  TimedOut = "TimedOut",
  TimingOut = "TimingOut",
}

export interface DescribeSimulationJobBatchResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
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
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>The failure code of the simulation job batch.</p>
   */
  failureCode?: SimulationJobBatchErrorCode | string;

  /**
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * <p>A list of failed create simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * <p>A list of created simulation job summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeWorldRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world you want to describe.</p>
   */
  world: string | undefined;
}

export interface DescribeWorldResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the world.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world generation job that generated the
   *          world.</p>
   */
  generationJob?: string;

  /**
   * <p>The world template.</p>
   */
  template?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Returns the JSON formatted string that describes the contents of your world.</p>
   */
  worldDescriptionBody?: string;
}

export interface DescribeWorldExportJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world export job to describe.</p>
   */
  job: string | undefined;
}

export interface DescribeWorldExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
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
  status?: WorldExportJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
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
  failureCode?: WorldExportJobErrorCode | string;

  /**
   * <p>The reason why the world export job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to be exported.</p>
   */
  worlds?: string[];

  /**
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   */
  iamRole?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeWorldGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world generation job to describe.</p>
   */
  job: string | undefined;
}

/**
 * <p>Information about a failed world.</p>
 */
export interface WorldFailure {
  /**
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
  failureCode?: WorldGenerationJobErrorCode | string;

  /**
   * <p>The sample reason why the world failed. World errors are aggregated. A sample is used as
   *          the <code>sampleFailureReason</code>. </p>
   */
  sampleFailureReason?: string;

  /**
   * <p>The number of failed worlds.</p>
   */
  failureCount?: number;
}

/**
 * <p>Information about worlds that failed.</p>
 */
export interface FailureSummary {
  /**
   * <p>The total number of failures.</p>
   */
  totalFailureCount?: number;

  /**
   * <p>The worlds that failed.</p>
   */
  failures?: WorldFailure[];
}

/**
 * <p>Information about worlds that finished.</p>
 */
export interface FinishedWorldsSummary {
  /**
   * <p>The total number of finished worlds.</p>
   */
  finishedCount?: number;

  /**
   * <p>A list of worlds that succeeded.</p>
   */
  succeededWorlds?: string[];

  /**
   * <p>Information about worlds that failed.</p>
   */
  failureSummary?: FailureSummary;
}

export interface DescribeWorldGenerationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world generation job.</p>
   */
  arn?: string;

  /**
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
  status?: WorldGenerationJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generation job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
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
  failureCode?: WorldGenerationJobErrorCode | string;

  /**
   * <p>The reason why the world generation job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * <p>Information about the world count.</p>
   */
  worldCount?: WorldCount;

  /**
   * <p>Summary information about finished worlds.</p>
   */
  finishedWorldsSummary?: FinishedWorldsSummary;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generation
   *          job.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: Record<string, string>;
}

export interface DescribeWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template you want to describe.</p>
   */
  template: string | undefined;
}

export interface DescribeWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   */
  arn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The version of the world template that you're using.</p>
   */
  version?: string;
}

/**
 * <p>Information about a filter.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>A list of values.</p>
   */
  values?: string[];
}

/**
 * <p>Information about a fleet.</p>
 */
export interface Fleet {
  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the last fleet deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

export interface GetWorldTemplateBodyRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world generator job.</p>
   */
  generationJob?: string;
}

export interface GetWorldTemplateBodyResponse {
  /**
   * <p>The world template body.</p>
   */
  templateBody?: string;
}

export interface ListDeploymentJobsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
   */
  filters?: Filter[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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

export interface ListDeploymentJobsResponse {
  /**
   * <p>A list of deployment jobs that meet the criteria of the request.</p>
   */
  deploymentJobs?: DeploymentJob[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListFleetsRequest {
  /**
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
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

export interface ListFleetsResponse {
  /**
   * <p>A list of fleet details meeting the request criteria.</p>
   */
  fleetDetails?: Fleet[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListFleets</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListRobotApplicationsRequest {
  /**
   * <p>The version qualifier of the robot application.</p>
   */
  versionQualifier?: string;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Summary information for a robot application.</p>
 */
export interface RobotApplicationSummary {
  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;
}

export interface ListRobotApplicationsResponse {
  /**
   * <p>A list of robot application summaries that meet the criteria of the request.</p>
   */
  robotApplicationSummaries?: RobotApplicationSummary[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListRobotsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>Registered</code> or the status <code>Available</code>.</p>
   */
  filters?: Filter[];
}

export interface ListRobotsResponse {
  /**
   * <p>A list of robots that meet the criteria of the request.</p>
   */
  robots?: Robot[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListSimulationApplicationsRequest {
  /**
   * <p>The version qualifier of the simulation application.</p>
   */
  versionQualifier?: string;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional list of filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Summary information for a simulation application.</p>
 */
export interface SimulationApplicationSummary {
  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>Information about a simulation software suite.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;
}

export interface ListSimulationApplicationsResponse {
  /**
   * <p>A list of simulation application summaries that meet the criteria of the request.</p>
   */
  simulationApplicationSummaries?: SimulationApplicationSummary[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListSimulationJobBatchesRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * <p>When this parameter is used, <code>ListSimulationJobBatches</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationJobBatches</code> request with the returned
   *             <code>nextToken</code> value. </p>
   */
  maxResults?: number;

  /**
   * <p>Optional filters to limit results.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Information about a simulation job batch.</p>
 */
export interface SimulationJobBatchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
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
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>The number of failed simulation job requests.</p>
   */
  failedRequestCount?: number;

  /**
   * <p>The number of pending simulation job requests.</p>
   */
  pendingRequestCount?: number;

  /**
   * <p>The number of created simulation job requests.</p>
   */
  createdRequestCount?: number;
}

export interface ListSimulationJobBatchesResponse {
  /**
   * <p>A list of simulation job batch summaries.</p>
   */
  simulationJobBatchSummaries?: SimulationJobBatchSummary[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListSimulationJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and
   *             <code>robotApplicationName</code> are supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters, but they must be for
   *          the same named item. For example, if you are looking for items with the status
   *             <code>Preparing</code> or the status <code>Running</code>.</p>
   */
  filters?: Filter[];
}

export interface ListSimulationJobsResponse {
  /**
   * <p>A list of simulation job summaries that meet the criteria of the request.</p>
   */
  simulationJobSummaries: SimulationJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of all tags added to the specified resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListWorldExportJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results. You can use <code>generationJobId</code> and
   *             <code>templateId</code>.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Information about a world export job.</p>
 */
export interface WorldExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   */
  arn?: string;

  /**
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
  status?: WorldExportJobStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of worlds.</p>
   */
  worlds?: string[];

  /**
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;
}

export interface ListWorldExportJobsResponse {
  /**
   * <p>Summary information for world export jobs.</p>
   */
  worldExportJobSummaries: WorldExportJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListWorldGenerationJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results. You can use <code>status</code> and
   *             <code>templateId</code>.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Information about a world generator job.</p>
 */
export interface WorldGenerationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   */
  createdAt?: Date;

  /**
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
  status?: WorldGenerationJobStatus | string;

  /**
   * <p>Information about the world count.</p>
   */
  worldCount?: WorldCount;

  /**
   * <p>The number of worlds that were generated.</p>
   */
  succeededWorldCount?: number;

  /**
   * <p>The number of worlds that failed.</p>
   */
  failedWorldCount?: number;
}

export interface ListWorldGenerationJobsResponse {
  /**
   * <p>Summary information for world generator jobs.</p>
   */
  worldGenerationJobSummaries: WorldGenerationJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGeneratorJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListWorldsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
   * <p>Optional filters to limit results. You can use <code>status</code>.</p>
   */
  filters?: Filter[];
}

/**
 * <p>Information about a world.</p>
 */
export interface WorldSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (arn) of the world generation job.</p>
   */
  generationJob?: string;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  template?: string;
}

export interface ListWorldsResponse {
  /**
   * <p>Summary information for worlds.</p>
   */
  worldSummaries?: WorldSummary[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface ListWorldTemplatesRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;

  /**
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
 * <p>Summary information for a template.</p>
 */
export interface TemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the template was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * <p>The version of the template that you're using.</p>
   */
  version?: string;
}

export interface ListWorldTemplatesResponse {
  /**
   * <p>Summary information for templates.</p>
   */
  templateSummaries?: TemplateSummary[];

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   */
  nextToken?: string;
}

export interface RegisterRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export interface RegisterRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the robot will join.</p>
   */
  fleet?: string;

  /**
   * <p>Information about the robot registration.</p>
   */
  robot?: string;
}

export interface RestartSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  job: string | undefined;
}

export interface RestartSimulationJobResponse {}

export interface StartSimulationJobBatchRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>A list of simulation job requests to create in the batch.</p>
   */
  createSimulationJobRequests: SimulationJobRequest[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

export interface StartSimulationJobBatchResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the batch.</p>
   */
  arn?: string;

  /**
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
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>The failure code if the simulation job batch failed.</p>
   */
  failureCode?: SimulationJobBatchErrorCode | string;

  /**
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * <p>A list of failed simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * <p>A list of created simulation job request summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   */
  tags?: Record<string, string>;
}

export interface SyncDeploymentJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The target fleet for the synchronization.</p>
   */
  fleet: string | undefined;
}

export interface SyncDeploymentJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the synchronization job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>Information about the deployment application configurations.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The failure reason if the job fails.</p>
   */
  failureReason?: string;

  /**
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
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing
   *          tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that will be unattached from the
   *          resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateRobotApplicationRequest {
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: SourceConfig[];

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The object that contains the Docker image URI for your robot application.</p>
   */
  environment?: Environment;
}

export interface UpdateRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated robot application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The object that contains the Docker image URI for your robot application.</p>
   */
  environment?: Environment;
}

export interface UpdateSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: SourceConfig[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The object that contains the Docker image URI for your simulation application.</p>
   */
  environment?: Environment;
}

export interface UpdateSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The object that contains the Docker image URI used for your simulation
   *          application.</p>
   */
  environment?: Environment;
}

export interface UpdateWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template to update.</p>
   */
  template: string | undefined;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * <p>The world template body.</p>
   */
  templateBody?: string;

  /**
   * <p>The location of the world template.</p>
   */
  templateLocation?: TemplateLocation;
}

export interface UpdateWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   */
  arn?: string;

  /**
   * <p>The name of the world template.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @internal
 */
export const BatchDeleteWorldsRequestFilterSensitiveLog = (obj: BatchDeleteWorldsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteWorldsResponseFilterSensitiveLog = (obj: BatchDeleteWorldsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeSimulationJobRequestFilterSensitiveLog = (obj: BatchDescribeSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeResponseFilterSensitiveLog = (obj: ComputeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3KeyOutputFilterSensitiveLog = (obj: S3KeyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigFilterSensitiveLog = (obj: LoggingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputLocationFilterSensitiveLog = (obj: OutputLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortMappingFilterSensitiveLog = (obj: PortMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortForwardingConfigFilterSensitiveLog = (obj: PortForwardingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigFilterSensitiveLog = (obj: LaunchConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ToolFilterSensitiveLog = (obj: Tool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadConfigurationFilterSensitiveLog = (obj: UploadConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RobotApplicationConfigFilterSensitiveLog = (obj: RobotApplicationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldConfigFilterSensitiveLog = (obj: WorldConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationApplicationConfigFilterSensitiveLog = (obj: SimulationApplicationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCConfigResponseFilterSensitiveLog = (obj: VPCConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationJobFilterSensitiveLog = (obj: SimulationJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeSimulationJobResponseFilterSensitiveLog = (obj: BatchDescribeSimulationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPolicyFilterSensitiveLog = (obj: BatchPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDeploymentJobRequestFilterSensitiveLog = (obj: CancelDeploymentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDeploymentJobResponseFilterSensitiveLog = (obj: CancelDeploymentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSimulationJobRequestFilterSensitiveLog = (obj: CancelSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSimulationJobResponseFilterSensitiveLog = (obj: CancelSimulationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSimulationJobBatchRequestFilterSensitiveLog = (obj: CancelSimulationJobBatchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSimulationJobBatchResponseFilterSensitiveLog = (obj: CancelSimulationJobBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelWorldExportJobRequestFilterSensitiveLog = (obj: CancelWorldExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelWorldExportJobResponseFilterSensitiveLog = (obj: CancelWorldExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelWorldGenerationJobRequestFilterSensitiveLog = (obj: CancelWorldGenerationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelWorldGenerationJobResponseFilterSensitiveLog = (obj: CancelWorldGenerationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeFilterSensitiveLog = (obj: Compute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentLaunchConfigFilterSensitiveLog = (obj: DeploymentLaunchConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentApplicationConfigFilterSensitiveLog = (obj: DeploymentApplicationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectFilterSensitiveLog = (obj: S3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentConfigFilterSensitiveLog = (obj: DeploymentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentJobRequestFilterSensitiveLog = (obj: CreateDeploymentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeploymentJobResponseFilterSensitiveLog = (obj: CreateDeploymentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetRequestFilterSensitiveLog = (obj: CreateFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetResponseFilterSensitiveLog = (obj: CreateFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotRequestFilterSensitiveLog = (obj: CreateRobotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotResponseFilterSensitiveLog = (obj: CreateRobotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RobotSoftwareSuiteFilterSensitiveLog = (obj: RobotSoftwareSuite): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceConfigFilterSensitiveLog = (obj: SourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotApplicationRequestFilterSensitiveLog = (obj: CreateRobotApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFilterSensitiveLog = (obj: Source): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotApplicationResponseFilterSensitiveLog = (obj: CreateRobotApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotApplicationVersionRequestFilterSensitiveLog = (
  obj: CreateRobotApplicationVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRobotApplicationVersionResponseFilterSensitiveLog = (
  obj: CreateRobotApplicationVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenderingEngineFilterSensitiveLog = (obj: RenderingEngine): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationSoftwareSuiteFilterSensitiveLog = (obj: SimulationSoftwareSuite): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationApplicationRequestFilterSensitiveLog = (obj: CreateSimulationApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationApplicationResponseFilterSensitiveLog = (
  obj: CreateSimulationApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationApplicationVersionRequestFilterSensitiveLog = (
  obj: CreateSimulationApplicationVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationApplicationVersionResponseFilterSensitiveLog = (
  obj: CreateSimulationApplicationVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceConfigFilterSensitiveLog = (obj: DataSourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCConfigFilterSensitiveLog = (obj: VPCConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationJobRequestFilterSensitiveLog = (obj: CreateSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSimulationJobResponseFilterSensitiveLog = (obj: CreateSimulationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationJobRequestFilterSensitiveLog = (obj: SimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldExportJobRequestFilterSensitiveLog = (obj: CreateWorldExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldExportJobResponseFilterSensitiveLog = (obj: CreateWorldExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldCountFilterSensitiveLog = (obj: WorldCount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldGenerationJobRequestFilterSensitiveLog = (obj: CreateWorldGenerationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldGenerationJobResponseFilterSensitiveLog = (obj: CreateWorldGenerationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateLocationFilterSensitiveLog = (obj: TemplateLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldTemplateRequestFilterSensitiveLog = (obj: CreateWorldTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorldTemplateResponseFilterSensitiveLog = (obj: CreateWorldTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetRequestFilterSensitiveLog = (obj: DeleteFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetResponseFilterSensitiveLog = (obj: DeleteFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRobotRequestFilterSensitiveLog = (obj: DeleteRobotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRobotResponseFilterSensitiveLog = (obj: DeleteRobotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRobotApplicationRequestFilterSensitiveLog = (obj: DeleteRobotApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRobotApplicationResponseFilterSensitiveLog = (obj: DeleteRobotApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSimulationApplicationRequestFilterSensitiveLog = (obj: DeleteSimulationApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSimulationApplicationResponseFilterSensitiveLog = (
  obj: DeleteSimulationApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorldTemplateRequestFilterSensitiveLog = (obj: DeleteWorldTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorldTemplateResponseFilterSensitiveLog = (obj: DeleteWorldTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentJobFilterSensitiveLog = (obj: DeploymentJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterRobotRequestFilterSensitiveLog = (obj: DeregisterRobotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterRobotResponseFilterSensitiveLog = (obj: DeregisterRobotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeploymentJobRequestFilterSensitiveLog = (obj: DescribeDeploymentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProgressDetailFilterSensitiveLog = (obj: ProgressDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RobotDeploymentFilterSensitiveLog = (obj: RobotDeployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeploymentJobResponseFilterSensitiveLog = (obj: DescribeDeploymentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetRequestFilterSensitiveLog = (obj: DescribeFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RobotFilterSensitiveLog = (obj: Robot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFleetResponseFilterSensitiveLog = (obj: DescribeFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRobotRequestFilterSensitiveLog = (obj: DescribeRobotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRobotResponseFilterSensitiveLog = (obj: DescribeRobotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRobotApplicationRequestFilterSensitiveLog = (obj: DescribeRobotApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRobotApplicationResponseFilterSensitiveLog = (obj: DescribeRobotApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationApplicationRequestFilterSensitiveLog = (
  obj: DescribeSimulationApplicationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationApplicationResponseFilterSensitiveLog = (
  obj: DescribeSimulationApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationJobRequestFilterSensitiveLog = (obj: DescribeSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationJobResponseFilterSensitiveLog = (obj: DescribeSimulationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationJobBatchRequestFilterSensitiveLog = (obj: DescribeSimulationJobBatchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationJobSummaryFilterSensitiveLog = (obj: SimulationJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCreateSimulationJobRequestFilterSensitiveLog = (obj: FailedCreateSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSimulationJobBatchResponseFilterSensitiveLog = (obj: DescribeSimulationJobBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldRequestFilterSensitiveLog = (obj: DescribeWorldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldResponseFilterSensitiveLog = (obj: DescribeWorldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldExportJobRequestFilterSensitiveLog = (obj: DescribeWorldExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldExportJobResponseFilterSensitiveLog = (obj: DescribeWorldExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldGenerationJobRequestFilterSensitiveLog = (obj: DescribeWorldGenerationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldFailureFilterSensitiveLog = (obj: WorldFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailureSummaryFilterSensitiveLog = (obj: FailureSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinishedWorldsSummaryFilterSensitiveLog = (obj: FinishedWorldsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldGenerationJobResponseFilterSensitiveLog = (obj: DescribeWorldGenerationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldTemplateRequestFilterSensitiveLog = (obj: DescribeWorldTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorldTemplateResponseFilterSensitiveLog = (obj: DescribeWorldTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FleetFilterSensitiveLog = (obj: Fleet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorldTemplateBodyRequestFilterSensitiveLog = (obj: GetWorldTemplateBodyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorldTemplateBodyResponseFilterSensitiveLog = (obj: GetWorldTemplateBodyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentJobsRequestFilterSensitiveLog = (obj: ListDeploymentJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeploymentJobsResponseFilterSensitiveLog = (obj: ListDeploymentJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsRequestFilterSensitiveLog = (obj: ListFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFleetsResponseFilterSensitiveLog = (obj: ListFleetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRobotApplicationsRequestFilterSensitiveLog = (obj: ListRobotApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RobotApplicationSummaryFilterSensitiveLog = (obj: RobotApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRobotApplicationsResponseFilterSensitiveLog = (obj: ListRobotApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRobotsRequestFilterSensitiveLog = (obj: ListRobotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRobotsResponseFilterSensitiveLog = (obj: ListRobotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationApplicationsRequestFilterSensitiveLog = (obj: ListSimulationApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationApplicationSummaryFilterSensitiveLog = (obj: SimulationApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationApplicationsResponseFilterSensitiveLog = (obj: ListSimulationApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationJobBatchesRequestFilterSensitiveLog = (obj: ListSimulationJobBatchesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SimulationJobBatchSummaryFilterSensitiveLog = (obj: SimulationJobBatchSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationJobBatchesResponseFilterSensitiveLog = (obj: ListSimulationJobBatchesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationJobsRequestFilterSensitiveLog = (obj: ListSimulationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSimulationJobsResponseFilterSensitiveLog = (obj: ListSimulationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldExportJobsRequestFilterSensitiveLog = (obj: ListWorldExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldExportJobSummaryFilterSensitiveLog = (obj: WorldExportJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldExportJobsResponseFilterSensitiveLog = (obj: ListWorldExportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldGenerationJobsRequestFilterSensitiveLog = (obj: ListWorldGenerationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldGenerationJobSummaryFilterSensitiveLog = (obj: WorldGenerationJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldGenerationJobsResponseFilterSensitiveLog = (obj: ListWorldGenerationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldsRequestFilterSensitiveLog = (obj: ListWorldsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorldSummaryFilterSensitiveLog = (obj: WorldSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldsResponseFilterSensitiveLog = (obj: ListWorldsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldTemplatesRequestFilterSensitiveLog = (obj: ListWorldTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSummaryFilterSensitiveLog = (obj: TemplateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorldTemplatesResponseFilterSensitiveLog = (obj: ListWorldTemplatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterRobotRequestFilterSensitiveLog = (obj: RegisterRobotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterRobotResponseFilterSensitiveLog = (obj: RegisterRobotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestartSimulationJobRequestFilterSensitiveLog = (obj: RestartSimulationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestartSimulationJobResponseFilterSensitiveLog = (obj: RestartSimulationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSimulationJobBatchRequestFilterSensitiveLog = (obj: StartSimulationJobBatchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSimulationJobBatchResponseFilterSensitiveLog = (obj: StartSimulationJobBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SyncDeploymentJobRequestFilterSensitiveLog = (obj: SyncDeploymentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SyncDeploymentJobResponseFilterSensitiveLog = (obj: SyncDeploymentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRobotApplicationRequestFilterSensitiveLog = (obj: UpdateRobotApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRobotApplicationResponseFilterSensitiveLog = (obj: UpdateRobotApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSimulationApplicationRequestFilterSensitiveLog = (obj: UpdateSimulationApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSimulationApplicationResponseFilterSensitiveLog = (
  obj: UpdateSimulationApplicationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorldTemplateRequestFilterSensitiveLog = (obj: UpdateWorldTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorldTemplateResponseFilterSensitiveLog = (obj: UpdateWorldTemplateResponse): any => ({
  ...obj,
});
