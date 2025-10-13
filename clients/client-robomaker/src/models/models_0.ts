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
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to delete.</p>
   * @public
   */
  worlds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteWorldsResponse {
  /**
   * <p>A list of unprocessed worlds associated with the call. These worlds were not
   *          deleted.</p>
   * @public
   */
  unprocessedWorlds?: string[] | undefined;
}

/**
 * <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 * @public
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
 * @public
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
 * @public
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
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   * @public
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
 * <p>Compute information for the simulation job</p>
 * @public
 */
export interface ComputeResponse {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *          only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   * @public
   */
  simulationUnitLimit?: number | undefined;

  /**
   * <p>Compute type response information for the simulation job.</p>
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *          allocated to the SimulationJob.</p>
   * @public
   */
  gpuUnitLimit?: number | undefined;
}

/**
 * <p>Information about S3 keys.</p>
 * @public
 */
export interface S3KeyOutput {
  /**
   * <p>The S3 key.</p>
   * @public
   */
  s3Key?: string | undefined;

  /**
   * <p>The etag for the object.</p>
   * @public
   */
  etag?: string | undefined;
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
 * <p>Information about a data source.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   * @public
   */
  s3Keys?: S3KeyOutput[] | undefined;

  /**
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   * @public
   */
  type?: DataSourceType | undefined;

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
   * @public
   */
  destination?: string | undefined;
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
 * <p>The logging configuration.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>A boolean indicating whether to record all ROS topics.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *
   * @deprecated AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.
   * @public
   */
  recordAllRosTopics?: boolean | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * <p>The IPv4 public address of the network interface.</p>
   * @public
   */
  publicIpAddress?: string | undefined;
}

/**
 * <p>The output location.</p>
 * @public
 */
export interface OutputLocation {
  /**
   * <p>The S3 bucket for output.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The S3 folder in the <code>s3Bucket</code> where output files will be placed.</p>
   * @public
   */
  s3Prefix?: string | undefined;
}

/**
 * <p>An object representing a port mapping.</p>
 * @public
 */
export interface PortMapping {
  /**
   * <p>The port number on the simulation job instance to use as a remote connection point.
   *          </p>
   * @public
   */
  jobPort: number | undefined;

  /**
   * <p>The port number on the application.</p>
   * @public
   */
  applicationPort: number | undefined;

  /**
   * <p>A Boolean indicating whether to enable this port mapping on public IP.</p>
   * @public
   */
  enableOnPublicIp?: boolean | undefined;
}

/**
 * <p>Configuration information for port forwarding.</p>
 * @public
 */
export interface PortForwardingConfig {
  /**
   * <p>The port mappings for the configuration.</p>
   * @public
   */
  portMappings?: PortMapping[] | undefined;
}

/**
 * <p>Information about a launch configuration.</p>
 * @public
 */
export interface LaunchConfig {
  /**
   * <p>The package name.</p>
   * @public
   */
  packageName?: string | undefined;

  /**
   * <p>The launch file name.</p>
   * @public
   */
  launchFile?: string | undefined;

  /**
   * <p>The environment variables for the application launch.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The port forwarding configuration.</p>
   * @public
   */
  portForwardingConfig?: PortForwardingConfig | undefined;

  /**
   * <p>Boolean indicating whether a streaming session will be configured for the application.
   *          If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          your application as it is running in the simulation. You must configure and launch the
   *          component. It must have a graphical user interface. </p>
   * @public
   */
  streamUI?: boolean | undefined;

  /**
   * <p>If you've specified <code>General</code> as the value for your <code>RobotSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   *          <p>If you've specified <code>SimulationRuntime</code> as the value for your <code>SimulationSoftwareSuite</code>, you can use this field to specify a list of commands for your container image.</p>
   * @public
   */
  command?: string[] | undefined;
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
 * <p>Information about a tool. Tools are used in a simulation job.</p>
 * @public
 */
export interface Tool {
  /**
   * <p>Boolean indicating whether a streaming session will be configured for the tool. If
   *             <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          the tool as it is running in the simulation. It must have a graphical user interface. The
   *          default is <code>False</code>. </p>
   * @public
   */
  streamUI?: boolean | undefined;

  /**
   * <p>The name of the tool.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Command-line arguments for the tool. It must include the tool executable name.</p>
   * @public
   */
  command: string | undefined;

  /**
   * <p>Boolean indicating whether logs will be recorded in CloudWatch for the tool. The default
   *          is <code>False</code>. </p>
   * @public
   */
  streamOutputToCloudWatch?: boolean | undefined;

  /**
   * <p>Exit behavior determines what happens when your tool quits running. <code>RESTART</code>
   *          will cause your tool to be restarted. <code>FAIL</code> will cause your job to exit. The
   *          default is <code>RESTART</code>. </p>
   * @public
   */
  exitBehavior?: ExitBehavior | undefined;
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
 * <p>Provides upload configuration information. Files are uploaded from the simulation job to
 *          a location you specify. </p>
 * @public
 */
export interface UploadConfiguration {
  /**
   * <p>A prefix that specifies where files will be uploaded in Amazon S3. It is appended to the
   *          simulation output location to determine the final path. </p>
   *          <p> For example, if your simulation output location is <code>s3://amzn-s3-demo-bucket</code> and your
   *          upload configuration name is <code>robot-test</code>, your files will be uploaded to
   *             <code>s3://amzn-s3-demo-bucket/<simid>/<runid>/robot-test</code>. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> Specifies the path of the file(s) to upload. Standard Unix glob matching rules are
   *          accepted, with the addition of <code>**</code> as a <i>super asterisk</i>.
   *          For example, specifying <code>/var/log/**.log</code> causes all .log files in the
   *             <code>/var/log</code> directory tree to be collected. For more examples, see <a href="https://github.com/gobwas/glob">Glob Library</a>. </p>
   * @public
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
   * @public
   */
  uploadBehavior: UploadBehavior | undefined;
}

/**
 * <p>Application configuration information for a robot.</p>
 * @public
 */
export interface RobotApplicationConfig {
  /**
   * <p>The application information for the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  applicationVersion?: string | undefined;

  /**
   * <p>The launch configuration for the robot application.</p>
   * @public
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>The upload configurations for the robot application.</p>
   * @public
   */
  uploadConfigurations?: UploadConfiguration[] | undefined;

  /**
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *
   * @deprecated AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.
   * @public
   */
  useDefaultUploadConfigurations?: boolean | undefined;

  /**
   * <p>Information about tools configured for the robot application.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>A Boolean indicating whether to use default robot application tools. The default tools
   *          are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *
   * @deprecated AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.
   * @public
   */
  useDefaultTools?: boolean | undefined;
}

/**
 * <p>Configuration information for a world.</p>
 * @public
 */
export interface WorldConfig {
  /**
   * <p>The world generated by Simulation WorldForge.</p>
   * @public
   */
  world?: string | undefined;
}

/**
 * <p>Information about a simulation application configuration.</p>
 * @public
 */
export interface SimulationApplicationConfig {
  /**
   * <p>The application information for the simulation application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   * @public
   */
  applicationVersion?: string | undefined;

  /**
   * <p>The launch configuration for the simulation application.</p>
   * @public
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>Information about upload configurations for the simulation application.</p>
   * @public
   */
  uploadConfigurations?: UploadConfiguration[] | undefined;

  /**
   * <p>A list of world configurations.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   * @public
   */
  worldConfigs?: WorldConfig[] | undefined;

  /**
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *
   * @deprecated AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.
   * @public
   */
  useDefaultUploadConfigurations?: boolean | undefined;

  /**
   * <p>Information about tools configured for the simulation application.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>A Boolean indicating whether to use default simulation application tools. The default
   *          tools are rviz, rqt, terminal and rosbag record. The default is <code>False</code>.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *
   * @deprecated AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.
   * @public
   */
  useDefaultTools?: boolean | undefined;
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
 * <p>VPC configuration associated with your simulation job.</p>
 * @public
 */
export interface VPCConfigResponse {
  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The VPC ID associated with your simulation job.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>A boolean indicating if a public IP was assigned.</p>
   * @public
   */
  assignPublicIp?: boolean | undefined;
}

/**
 * <p>Information about a simulation job.</p>
 * @public
 */
export interface SimulationJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Status of the simulation job.</p>
   * @public
   */
  status?: SimulationJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   * @public
   */
  lastStartedAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

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
   * @public
   */
  failureBehavior?: FailureBehavior | undefined;

  /**
   * <p>The failure code of the simulation job if it failed.</p>
   * @public
   */
  failureCode?: SimulationJobErrorCode | undefined;

  /**
   * <p>The reason why the simulation job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The logging configuration.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   * @public
   */
  maxJobDurationInSeconds?: number | undefined;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   * @public
   */
  simulationTimeMillis?: number | undefined;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job. </p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>A list of robot applications.</p>
   * @public
   */
  robotApplications?: RobotApplicationConfig[] | undefined;

  /**
   * <p>A list of simulation applications.</p>
   * @public
   */
  simulationApplications?: SimulationApplicationConfig[] | undefined;

  /**
   * <p>The data sources for the simulation job.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>VPC configuration information.</p>
   * @public
   */
  vpcConfig?: VPCConfigResponse | undefined;

  /**
   * <p>Information about a network interface.</p>
   * @public
   */
  networkInterface?: NetworkInterface | undefined;

  /**
   * <p>Compute information for the simulation job</p>
   * @public
   */
  compute?: ComputeResponse | undefined;
}

/**
 * @public
 */
export interface BatchDescribeSimulationJobResponse {
  /**
   * <p>A list of simulation jobs.</p>
   * @public
   */
  jobs?: SimulationJob[] | undefined;

  /**
   * <p>A list of unprocessed simulation job Amazon Resource Names (ARNs).</p>
   * @public
   */
  unprocessedJobs?: string[] | undefined;
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
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
 * @public
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
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * <p>The number of active simulation jobs create as part of the batch that can be in an
   *          active state at the same time. </p>
   *          <p>Active states include: <code>Pending</code>,<code>Preparing</code>,
   *          <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and
   *             <code>Terminating</code>. All other states are terminal states. </p>
   * @public
   */
  maxConcurrency?: number | undefined;
}

/**
 * @public
 */
export interface CancelDeploymentJobRequest {
  /**
   * <p>The deployment job ARN to cancel.</p>
   * @public
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
   * <p>The simulation job ARN to cancel.</p>
   * @public
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
   * <p>The id of the batch to cancel.</p>
   * @public
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
   * <p>The Amazon Resource Name (arn) of the world export job to cancel.</p>
   * @public
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
   * <p>The Amazon Resource Name (arn) of the world generator job to cancel.</p>
   * @public
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface CancelWorldGenerationJobResponse {}

/**
 * <p>Compute information for the simulation job.</p>
 * @public
 */
export interface Compute {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *         only billed for the SU utilization you consume up to the maximum value provided. The
   *          default is 15. </p>
   * @public
   */
  simulationUnitLimit?: number | undefined;

  /**
   * <p>Compute type information for the simulation job.</p>
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * <p>Compute GPU unit limit for the simulation job. It is the same as the number of GPUs
   *         allocated to the SimulationJob.</p>
   * @public
   */
  gpuUnitLimit?: number | undefined;
}

/**
 * <p>The failure percentage threshold percentage was met.</p>
 * @public
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
 * @public
 */
export interface DeploymentLaunchConfig {
  /**
   * <p>The package name.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The deployment pre-launch file. This file will be executed prior to the launch
   *          file.</p>
   * @public
   */
  preLaunchFile?: string | undefined;

  /**
   * <p>The launch file name.</p>
   * @public
   */
  launchFile: string | undefined;

  /**
   * <p>The deployment post-launch file. This file will be executed after the launch
   *          file.</p>
   * @public
   */
  postLaunchFile?: string | undefined;

  /**
   * <p>An array of key/value pairs specifying environment variables for the robot
   *          application</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * <p>Information about a deployment application configuration.</p>
 * @public
 */
export interface DeploymentApplicationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  applicationVersion: string | undefined;

  /**
   * <p>The launch configuration.</p>
   * @public
   */
  launchConfig: DeploymentLaunchConfig | undefined;
}

/**
 * <p>Information about an S3 object.</p>
 * @public
 */
export interface S3Object {
  /**
   * <p>The bucket containing the object.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The key of the object.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The etag of the object.</p>
   * @public
   */
  etag?: string | undefined;
}

/**
 * <p>Information about a deployment configuration.</p>
 * @public
 */
export interface DeploymentConfig {
  /**
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   * @public
   */
  concurrentDeploymentPercentage?: number | undefined;

  /**
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   * @public
   */
  failureThresholdPercentage?: number | undefined;

  /**
   * <p>The amount of time, in seconds, to wait for deployment to a single robot to complete.
   *          Choose a time between 1 minute and 7 days. The default is 5 hours.</p>
   * @public
   */
  robotDeploymentTimeoutInSeconds?: number | undefined;

  /**
   * <p>The download condition file.</p>
   * @public
   */
  downloadConditionFile?: S3Object | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentJobRequest {
  /**
   * <p>The requested deployment configuration.</p>
   * @public
   */
  deploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   * @public
   */
  fleet: string | undefined;

  /**
   * <p>The deployment application configuration.</p>
   * @public
   */
  deploymentApplicationConfigs: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The target fleet for the deployment job.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>The status of the deployment job.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>The deployment application configuration.</p>
   * @public
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>The failure reason of the deployment job if it failed.</p>
   * @public
   */
  failureReason?: string | undefined;

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
   * @public
   */
  failureCode?: DeploymentJobErrorCode | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The deployment configuration.</p>
   * @public
   */
  deploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>The list of all tags added to the deployment job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 * @public
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
 * @public
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
   * <p>The name of the fleet.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the fleet.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The list of all tags added to the fleet.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRobotRequest {
  /**
   * <p>The name for the robot.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The target architecture of the robot.</p>
   * @public
   */
  architecture: Architecture | undefined;

  /**
   * <p>The Greengrass group id.</p>
   * @public
   */
  greengrassGroupId: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   * @public
   */
  greengrassGroupId?: string | undefined;

  /**
   * <p>The target architecture of the robot.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The list of all tags added to the robot.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The specified resource already exists.</p>
 * @public
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
 * @public
 */
export interface Environment {
  /**
   * <p>The Docker image URI for either your robot or simulation applications.</p>
   * @public
   */
  uri?: string | undefined;
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
 * <p>Information about a robot software suite.</p>
 * @public
 */
export interface RobotSoftwareSuite {
  /**
   * <p>The name of the robot software suite. <code>General</code> is the only supported value.</p>
   * @public
   */
  name?: RobotSoftwareSuiteType | undefined;

  /**
   * <p>The version of the robot software suite. Not applicable for General software suite.</p>
   * @public
   */
  version?: RobotSoftwareSuiteVersionType | undefined;
}

/**
 * <p>Information about a source configuration.</p>
 * @public
 */
export interface SourceConfig {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The s3 object key.</p>
   * @public
   */
  s3Key?: string | undefined;

  /**
   * <p>The target processor architecture for the application.</p>
   * @public
   */
  architecture?: Architecture | undefined;
}

/**
 * @public
 */
export interface CreateRobotApplicationRequest {
  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: SourceConfig[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot
   *          application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The object that contains that URI of the Docker image that you use for your robot
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * <p>Information about a source.</p>
 * @public
 */
export interface Source {
  /**
   * <p>The s3 bucket name.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The s3 object key.</p>
   * @public
   */
  s3Key?: string | undefined;

  /**
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   * @public
   */
  etag?: string | undefined;

  /**
   * <p>The taget processor architecture for the application.</p>
   * @public
   */
  architecture?: Architecture | undefined;
}

/**
 * @public
 */
export interface CreateRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision id of the robot application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The list of all tags added to the robot application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object that contains the Docker image URI used to a create your robot
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface CreateRobotApplicationVersionRequest {
  /**
   * <p>The application information for the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the robot application. If you provide a value and it matches
   *          the latest revision ID, a new version will be created.</p>
   * @public
   */
  currentRevisionId?: string | undefined;

  /**
   * <p>The Amazon S3 identifier for the zip file bundle that you use for your robot
   *          application.</p>
   * @public
   */
  s3Etags?: string[] | undefined;

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface CreateRobotApplicationVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision id of the robot application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI used to create your robot
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
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
 * <p>Information about a rendering engine.</p>
 * @public
 */
export interface RenderingEngine {
  /**
   * <p>The name of the rendering engine.</p>
   * @public
   */
  name?: RenderingEngineType | undefined;

  /**
   * <p>The version of the rendering engine.</p>
   * @public
   */
  version?: string | undefined;
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
 * <p>Information about a simulation software suite.</p>
 * @public
 */
export interface SimulationSoftwareSuite {
  /**
   * <p>The name of the simulation software suite. <code>SimulationRuntime</code> is the only supported value.</p>
   * @public
   */
  name?: SimulationSoftwareSuiteType | undefined;

  /**
   * <p>The version of the simulation software suite. Not applicable for <code>SimulationRuntime</code>.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface CreateSimulationApplicationRequest {
  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: SourceConfig[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The robot software suite used by the simulation application.</p>
   * @public
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The object that contains the Docker image URI used to create your simulation
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface CreateSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision id of the simulation application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The list of all tags added to the simulation application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The object that contains the Docker image URI that you used to create your simulation
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface CreateSimulationApplicationVersionRequest {
  /**
   * <p>The application information for the simulation application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the simulation application. If you provide a value and it
   *          matches the latest revision ID, a new version will be created.</p>
   * @public
   */
  currentRevisionId?: string | undefined;

  /**
   * <p>The Amazon S3 eTag identifier for the zip file bundle that you use to create the
   *          simulation application.</p>
   * @public
   */
  s3Etags?: string[] | undefined;

  /**
   * <p>The SHA256 digest used to identify the Docker image URI used to created the simulation
   *          application.</p>
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface CreateSimulationApplicationVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision ID of the simulation application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * <p>Information about a data source.</p>
 * @public
 */
export interface DataSourceConfig {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   * @public
   */
  s3Keys: string[] | undefined;

  /**
   * <p>The data type for the data source that you're using for your container image or
   *          simulation job. You can use this field to specify whether your data source is an Archive,
   *          an Amazon S3 prefix, or a file.</p>
   *          <p>If you don't specify a field, the default value is <code>File</code>.</p>
   * @public
   */
  type?: DataSourceType | undefined;

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
   * @public
   */
  destination?: string | undefined;
}

/**
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter
 *          identifying the list of security group IDs and subnet IDs. These must belong to the same
 *          VPC. You must provide at least one security group and two subnet IDs.</p>
 * @public
 */
export interface VPCConfig {
  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   * @public
   */
  subnets: string[] | undefined;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>A boolean indicating whether to assign a public IP address.</p>
   * @public
   */
  assignPublicIp?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateSimulationJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The logging configuration.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When
   *             <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will
   *          transition to <code>Completed</code>.</p>
   * @public
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   * @public
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
   * @public
   */
  failureBehavior?: FailureBehavior | undefined;

  /**
   * <p>The robot application to use in the simulation job.</p>
   * @public
   */
  robotApplications?: RobotApplicationConfig[] | undefined;

  /**
   * <p>The simulation application to use in the simulation job.</p>
   * @public
   */
  simulationApplications?: SimulationApplicationConfig[] | undefined;

  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   * @public
   */
  dataSources?: DataSourceConfig[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and one subnet ID. </p>
   * @public
   */
  vpcConfig?: VPCConfig | undefined;

  /**
   * <p>Compute information for the simulation job.</p>
   * @public
   */
  compute?: Compute | undefined;
}

/**
 * @public
 */
export interface CreateSimulationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the simulation job.</p>
   * @public
   */
  status?: SimulationJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   * @public
   */
  lastStartedAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>the failure behavior for the simulation job.</p>
   * @public
   */
  failureBehavior?: FailureBehavior | undefined;

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
   * @public
   */
  failureCode?: SimulationJobErrorCode | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Simulation job output files location.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The logging configuration.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The maximum simulation job duration in seconds. </p>
   * @public
   */
  maxJobDurationInSeconds?: number | undefined;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   * @public
   */
  simulationTimeMillis?: number | undefined;

  /**
   * <p>The IAM role that allows the simulation job to call the AWS APIs that are specified in
   *          its associated policies on your behalf.</p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>The robot application used by the simulation job.</p>
   * @public
   */
  robotApplications?: RobotApplicationConfig[] | undefined;

  /**
   * <p>The simulation application used by the simulation job.</p>
   * @public
   */
  simulationApplications?: SimulationApplicationConfig[] | undefined;

  /**
   * <p>The data sources for the simulation job.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The list of all tags added to the simulation job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Information about the vpc configuration.</p>
   * @public
   */
  vpcConfig?: VPCConfigResponse | undefined;

  /**
   * <p>Compute information for the simulation job.</p>
   * @public
   */
  compute?: ComputeResponse | undefined;
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 * @public
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
 * @public
 */
export interface SimulationJobRequest {
  /**
   * <p>The output location.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The logging configuration.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200
   *          seconds) or less.</p>
   * @public
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that are
   *          specified in its associated policies on your behalf. This is how credentials are passed in
   *          to your simulation job. </p>
   * @public
   */
  iamRole?: string | undefined;

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
   * @public
   */
  failureBehavior?: FailureBehavior | undefined;

  /**
   * <p>A Boolean indicating whether to use default applications in the simulation job. Default
   *          applications include Gazebo, rqt, rviz and terminal access. </p>
   * @public
   */
  useDefaultApplications?: boolean | undefined;

  /**
   * <p>The robot applications to use in the simulation job.</p>
   * @public
   */
  robotApplications?: RobotApplicationConfig[] | undefined;

  /**
   * <p>The simulation applications to use in the simulation job.</p>
   * @public
   */
  simulationApplications?: SimulationApplicationConfig[] | undefined;

  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files
   *          are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *                <code>DataSourceConfig</code> objects. </p>
   *          </note>
   * @public
   */
  dataSources?: DataSourceConfig[] | undefined;

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter
   *          identifying the list of security group IDs and subnet IDs. These must belong to the same
   *          VPC. You must provide at least one security group and two subnet IDs.</p>
   * @public
   */
  vpcConfig?: VPCConfig | undefined;

  /**
   * <p>Compute information for the simulation job</p>
   * @public
   */
  compute?: Compute | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          request.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorldExportJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to export.</p>
   * @public
   */
  worlds: string[] | undefined;

  /**
   * <p>The output location.</p>
   * @public
   */
  outputLocation: OutputLocation | undefined;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   * @public
   */
  iamRole: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: WorldExportJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  failureCode?: WorldExportJobErrorCode | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The output location.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export. </p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The number of worlds that will be created. You can configure the number of unique
 *          floorplans and the number of unique interiors for each floor plan. For example, if you want
 *          1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and
 *             <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds
 *             (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p>
 *          <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan =
 *             5</code>, there will be 20 worlds with 5 unique floor plans. </p>
 * @public
 */
export interface WorldCount {
  /**
   * <p>The number of unique floorplans.</p>
   * @public
   */
  floorplanCount?: number | undefined;

  /**
   * <p>The number of unique interiors per floorplan.</p>
   * @public
   */
  interiorCountPerFloorplan?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorldGenerationJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world template describing the worlds you want to
   *          create.</p>
   * @public
   */
  template: string | undefined;

  /**
   * <p>Information about the world count.</p>
   * @public
   */
  worldCount: WorldCount | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   * @public
   */
  worldTags?: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: WorldGenerationJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  failureCode?: WorldGenerationJobErrorCode | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>Information about the world count. </p>
   * @public
   */
  worldCount?: WorldCount | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generator
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   * @public
   */
  worldTags?: Record<string, string> | undefined;
}

/**
 * <p>Information about a template location.</p>
 * @public
 */
export interface TemplateLocation {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   * @public
   */
  s3Key: string | undefined;
}

/**
 * @public
 */
export interface CreateWorldTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The name of the world template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The world template body.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>The location of the world template.</p>
   * @public
   */
  templateLocation?: TemplateLocation | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The name of the world template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to delete.</p>
   * @public
   */
  applicationVersion?: string | undefined;
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
   * <p>The application information for the simulation application to delete.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to delete.</p>
   * @public
   */
  applicationVersion?: string | undefined;
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
   * <p>The Amazon Resource Name (arn) of the world template you want to delete.</p>
   * @public
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorldTemplateResponse {}

/**
 * <p>Information about a deployment job.</p>
 * @public
 */
export interface DeploymentJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>The status of the deployment job.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>The deployment application configuration.</p>
   * @public
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>The deployment configuration.</p>
   * @public
   */
  deploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The deployment job failure code.</p>
   * @public
   */
  failureCode?: DeploymentJobErrorCode | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeregisterRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface DeregisterRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  robot?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeploymentJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   * @public
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
 * <p>Information about the progress of a deployment job.</p>
 * @public
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
   * @public
   */
  currentProgress?: RobotDeploymentStep | undefined;

  /**
   * <p>Precentage of the step that is done. This currently only applies to the
   *             <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   * @public
   */
  percentDone?: number | undefined;

  /**
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies
   *          to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other
   *          steps.</p>
   * @public
   */
  estimatedTimeRemainingSeconds?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   * @public
   */
  targetResource?: string | undefined;
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
 * <p>Information about a robot deployment.</p>
 * @public
 */
export interface RobotDeployment {
  /**
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   * @public
   */
  deploymentStartTime?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   * @public
   */
  deploymentFinishTime?: Date | undefined;

  /**
   * <p>The status of the robot deployment.</p>
   * @public
   */
  status?: RobotStatus | undefined;

  /**
   * <p>Information about how the deployment is progressing.</p>
   * @public
   */
  progressDetail?: ProgressDetail | undefined;

  /**
   * <p>A short description of the reason why the robot deployment failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The robot deployment failure code.</p>
   * @public
   */
  failureCode?: DeploymentJobErrorCode | undefined;
}

/**
 * @public
 */
export interface DescribeDeploymentJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>The status of the deployment job.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>The deployment configuration.</p>
   * @public
   */
  deploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>The deployment application configuration.</p>
   * @public
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The deployment job failure code.</p>
   * @public
   */
  failureCode?: DeploymentJobErrorCode | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A list of robot deployment summaries.</p>
   * @public
   */
  robotDeploymentSummary?: RobotDeployment[] | undefined;

  /**
   * <p>The list of all tags added to the specified deployment job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet: string | undefined;
}

/**
 * <p>Information about a robot.</p>
 * @public
 */
export interface Robot {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleetArn?: string | undefined;

  /**
   * <p>The status of the robot.</p>
   * @public
   */
  status?: RobotStatus | undefined;

  /**
   * <p>The Greengrass group associated with the robot.</p>
   * @public
   */
  greenGrassGroupId?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The architecture of the robot.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   * @public
   */
  lastDeploymentJob?: string | undefined;

  /**
   * <p>The time of the last deployment.</p>
   * @public
   */
  lastDeploymentTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A list of robots.</p>
   * @public
   */
  robots?: Robot[] | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The status of the last deployment.</p>
   * @public
   */
  lastDeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   * @public
   */
  lastDeploymentJob?: string | undefined;

  /**
   * <p>The time of the last deployment.</p>
   * @public
   */
  lastDeploymentTime?: Date | undefined;

  /**
   * <p>The list of all tags added to the specified fleet.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot to be described.</p>
   * @public
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface DescribeRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleetArn?: string | undefined;

  /**
   * <p>The status of the fleet.</p>
   * @public
   */
  status?: RobotStatus | undefined;

  /**
   * <p>The Greengrass group id.</p>
   * @public
   */
  greengrassGroupId?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The target architecture of the robot application.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   * @public
   */
  lastDeploymentJob?: string | undefined;

  /**
   * <p>The time of the last deployment job.</p>
   * @public
   */
  lastDeploymentTime?: Date | undefined;

  /**
   * <p>The list of all tags added to the specified robot.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRobotApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to describe.</p>
   * @public
   */
  applicationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The revision id of the robot application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The list of all tags added to the specified robot application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The object that contains the Docker image URI used to create the robot
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your robot application.</p>
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to describe.</p>
   * @public
   */
  applicationVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot simulation application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>The revision id of the simulation application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The list of all tags added to the specified simulation application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The object that contains the Docker image URI used to create the simulation
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;

  /**
   * <p>A SHA256 identifier for the Docker image that you use for your simulation
   *          application.</p>
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job to be described.</p>
   * @public
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the simulation job.</p>
   * @public
   */
  status?: SimulationJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          started.</p>
   * @public
   */
  lastStartedAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The failure behavior for the simulation job.</p>
   * @public
   */
  failureBehavior?: FailureBehavior | undefined;

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
   * @public
   */
  failureCode?: SimulationJobErrorCode | undefined;

  /**
   * <p>Details about why the simulation job failed. For more information about troubleshooting,
   *          see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The logging configuration.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or
   *          less.</p>
   * @public
   */
  maxJobDurationInSeconds?: number | undefined;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   * @public
   */
  simulationTimeMillis?: number | undefined;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified
   *          in its associated policies on your behalf.</p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>A list of robot applications.</p>
   * @public
   */
  robotApplications?: RobotApplicationConfig[] | undefined;

  /**
   * <p>A list of simulation applications.</p>
   * @public
   */
  simulationApplications?: SimulationApplicationConfig[] | undefined;

  /**
   * <p>The data sources for the simulation job.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The list of all tags added to the specified simulation job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The VPC configuration.</p>
   * @public
   */
  vpcConfig?: VPCConfigResponse | undefined;

  /**
   * <p>The network interface information for the simulation job.</p>
   * @public
   */
  networkInterface?: NetworkInterface | undefined;

  /**
   * <p>Compute information for the simulation job.</p>
   * @public
   */
  compute?: ComputeResponse | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationJobBatchRequest {
  /**
   * <p>The id of the batch to describe.</p>
   * @public
   */
  batch: string | undefined;
}

/**
 * <p>Summary information for a simulation job.</p>
 * @public
 */
export interface SimulationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The name of the simulation job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the simulation job.</p>
   * @public
   */
  status?: SimulationJobStatus | undefined;

  /**
   * <p>A list of simulation job simulation application names.</p>
   * @public
   */
  simulationApplicationNames?: string[] | undefined;

  /**
   * <p>A list of simulation job robot application names.</p>
   * @public
   */
  robotApplicationNames?: string[] | undefined;

  /**
   * <p>The names of the data sources.</p>
   * @public
   */
  dataSourceNames?: string[] | undefined;

  /**
   * <p>The compute type for the simulation job summary.</p>
   * @public
   */
  computeType?: ComputeType | undefined;
}

/**
 * <p>Information about a failed create simulation job request.</p>
 * @public
 */
export interface FailedCreateSimulationJobRequest {
  /**
   * <p>The simulation job request.</p>
   * @public
   */
  request?: SimulationJobRequest | undefined;

  /**
   * <p>The failure reason of the simulation job request.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: SimulationJobErrorCode | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch failed.</p>
   * @public
   */
  failedAt?: Date | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: SimulationJobBatchStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The batch policy.</p>
   * @public
   */
  batchPolicy?: BatchPolicy | undefined;

  /**
   * <p>The failure code of the simulation job batch.</p>
   * @public
   */
  failureCode?: SimulationJobBatchErrorCode | undefined;

  /**
   * <p>The reason the simulation job batch failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>A list of failed create simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   * @public
   */
  failedRequests?: FailedCreateSimulationJobRequest[] | undefined;

  /**
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   * @public
   */
  pendingRequests?: SimulationJobRequest[] | undefined;

  /**
   * <p>A list of created simulation job summaries.</p>
   * @public
   */
  createdRequests?: SimulationJobSummary[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job
   *          batch.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeWorldRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world you want to describe.</p>
   * @public
   */
  world: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the world.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world generation job that generated the
   *          world.</p>
   * @public
   */
  generationJob?: string | undefined;

  /**
   * <p>The world template.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Returns the JSON formatted string that describes the contents of your world.</p>
   * @public
   */
  worldDescriptionBody?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldExportJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world export job to describe.</p>
   * @public
   */
  job: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: WorldExportJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  failureCode?: WorldExportJobErrorCode | undefined;

  /**
   * <p>The reason why the world export job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (arns) that correspond to worlds to be exported.</p>
   * @public
   */
  worlds?: string[] | undefined;

  /**
   * <p>The output location.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;

  /**
   * <p>The IAM role that the world export process uses to access the Amazon S3 bucket and put
   *          the export.</p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world export
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeWorldGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world generation job to describe.</p>
   * @public
   */
  job: string | undefined;
}

/**
 * <p>Information about a failed world.</p>
 * @public
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
   * @public
   */
  failureCode?: WorldGenerationJobErrorCode | undefined;

  /**
   * <p>The sample reason why the world failed. World errors are aggregated. A sample is used as
   *          the <code>sampleFailureReason</code>. </p>
   * @public
   */
  sampleFailureReason?: string | undefined;

  /**
   * <p>The number of failed worlds.</p>
   * @public
   */
  failureCount?: number | undefined;
}

/**
 * <p>Information about worlds that failed.</p>
 * @public
 */
export interface FailureSummary {
  /**
   * <p>The total number of failures.</p>
   * @public
   */
  totalFailureCount?: number | undefined;

  /**
   * <p>The worlds that failed.</p>
   * @public
   */
  failures?: WorldFailure[] | undefined;
}

/**
 * <p>Information about worlds that finished.</p>
 * @public
 */
export interface FinishedWorldsSummary {
  /**
   * <p>The total number of finished worlds.</p>
   * @public
   */
  finishedCount?: number | undefined;

  /**
   * <p>A list of worlds that succeeded.</p>
   * @public
   */
  succeededWorlds?: string[] | undefined;

  /**
   * <p>Information about worlds that failed.</p>
   * @public
   */
  failureSummary?: FailureSummary | undefined;
}

/**
 * @public
 */
export interface DescribeWorldGenerationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world generation job.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: WorldGenerationJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generation job was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  failureCode?: WorldGenerationJobErrorCode | undefined;

  /**
   * <p>The reason why the world generation job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>Information about the world count.</p>
   * @public
   */
  worldCount?: WorldCount | undefined;

  /**
   * <p>Summary information about finished worlds.</p>
   * @public
   */
  finishedWorldsSummary?: FinishedWorldsSummary | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world generation
   *          job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   * @public
   */
  worldTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template you want to describe.</p>
   * @public
   */
  template: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the world template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The name of the world template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the world
   *          template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The version of the world template that you're using.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Information about a filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list of values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Information about a fleet.</p>
 * @public
 */
export interface Fleet {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The status of the last fleet deployment.</p>
   * @public
   */
  lastDeploymentStatus?: DeploymentStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   * @public
   */
  lastDeploymentJob?: string | undefined;

  /**
   * <p>The time of the last deployment.</p>
   * @public
   */
  lastDeploymentTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetWorldTemplateBodyRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world generator job.</p>
   * @public
   */
  generationJob?: string | undefined;
}

/**
 * @public
 */
export interface GetWorldTemplateBodyResponse {
  /**
   * <p>The world template body.</p>
   * @public
   */
  templateBody?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentJobsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListDeploymentJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code>
   *          value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDeploymentJobsResponse {
  /**
   * <p>A list of deployment jobs that meet the criteria of the request.</p>
   * @public
   */
  deploymentJobs?: DeploymentJob[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListDeploymentJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListFleets</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListFleets</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if
   *          applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListFleetsResponse {
  /**
   * <p>A list of fleet details meeting the request criteria.</p>
   * @public
   */
  fleetDetails?: Fleet[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListFleets</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRobotApplicationsRequest {
  /**
   * <p>The version qualifier of the robot application.</p>
   * @public
   */
  versionQualifier?: string | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListRobotApplications</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListRobotApplications</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListRobotApplications</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Summary information for a robot application.</p>
 * @public
 */
export interface RobotApplicationSummary {
  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>Information about a robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;
}

/**
 * @public
 */
export interface ListRobotApplicationsResponse {
  /**
   * <p>A list of robot application summaries that meet the criteria of the request.</p>
   * @public
   */
  robotApplicationSummaries?: RobotApplicationSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobotApplications</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRobotsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListRobots</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListRobots</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then
   *             <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if
   *          applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When
   *          filtering, you must use the complete value of the filtered item. You can use up to three
   *          filters, but they must be for the same named item. For example, if you are looking for
   *          items with the status <code>Registered</code> or the status <code>Available</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListRobotsResponse {
  /**
   * <p>A list of robots that meet the criteria of the request.</p>
   * @public
   */
  robots?: Robot[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListRobots</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSimulationApplicationsRequest {
  /**
   * <p>The version qualifier of the simulation application.</p>
   * @public
   */
  versionQualifier?: string | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListSimulationApplications</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationApplications</code> request with the returned
   *             <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is
   *          not used, then <code>ListSimulationApplications</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional list of filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Summary information for a simulation application.</p>
 * @public
 */
export interface SimulationApplicationSummary {
  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>Information about a robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>Information about a simulation software suite.</p>
   * @public
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite | undefined;
}

/**
 * @public
 */
export interface ListSimulationApplicationsResponse {
  /**
   * <p>A list of simulation application summaries that meet the criteria of the request.</p>
   * @public
   */
  simulationApplicationSummaries?: SimulationApplicationSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationApplications</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSimulationJobBatchesRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListSimulationJobBatches</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationJobBatches</code> request with the returned
   *             <code>nextToken</code> value. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Information about a simulation job batch.</p>
 * @public
 */
export interface SimulationJobBatchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last updated.
   *       </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  status?: SimulationJobBatchStatus | undefined;

  /**
   * <p>The number of failed simulation job requests.</p>
   * @public
   */
  failedRequestCount?: number | undefined;

  /**
   * <p>The number of pending simulation job requests.</p>
   * @public
   */
  pendingRequestCount?: number | undefined;

  /**
   * <p>The number of created simulation job requests.</p>
   * @public
   */
  createdRequestCount?: number | undefined;
}

/**
 * @public
 */
export interface ListSimulationJobBatchesResponse {
  /**
   * <p>A list of simulation job batch summaries.</p>
   * @public
   */
  simulationJobBatchSummaries?: SimulationJobBatchSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobBatches</code> again and assign that token
   *          to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSimulationJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListSimulationJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 1000. If this parameter is not used, then
   *             <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code>
   *          value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and
   *             <code>robotApplicationName</code> are supported. When filtering, you must use the
   *          complete value of the filtered item. You can use up to three filters, but they must be for
   *          the same named item. For example, if you are looking for items with the status
   *             <code>Preparing</code> or the status <code>Running</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListSimulationJobsResponse {
  /**
   * <p>A list of simulation job summaries that meet the criteria of the request.</p>
   * @public
   */
  simulationJobSummaries: SimulationJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListSimulationJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of all tags added to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorldExportJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobs</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListWorldExportJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code>
   *          value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results. You can use <code>generationJobId</code> and
   *             <code>templateId</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Information about a world export job.</p>
 * @public
 */
export interface WorldExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world export job.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: WorldExportJobStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world export job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A list of worlds.</p>
   * @public
   */
  worlds?: string[] | undefined;

  /**
   * <p>The output location.</p>
   * @public
   */
  outputLocation?: OutputLocation | undefined;
}

/**
 * @public
 */
export interface ListWorldExportJobsResponse {
  /**
   * <p>Summary information for world export jobs.</p>
   * @public
   */
  worldExportJobSummaries: WorldExportJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldExportJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorldGenerationJobsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldGeneratorJobs</code> request with the returned
   *             <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is
   *          not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a
   *             <code>nextToken</code> value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results. You can use <code>status</code> and
   *             <code>templateId</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Information about a world generator job.</p>
 * @public
 */
export interface WorldGenerationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world generator job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  template?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world generator job was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

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
   * @public
   */
  status?: WorldGenerationJobStatus | undefined;

  /**
   * <p>Information about the world count.</p>
   * @public
   */
  worldCount?: WorldCount | undefined;

  /**
   * <p>The number of worlds that were generated.</p>
   * @public
   */
  succeededWorldCount?: number | undefined;

  /**
   * <p>The number of worlds that failed.</p>
   * @public
   */
  failedWorldCount?: number | undefined;
}

/**
 * @public
 */
export interface ListWorldGenerationJobsResponse {
  /**
   * <p>Summary information for world generator jobs.</p>
   * @public
   */
  worldGenerationJobSummaries: WorldGenerationJobSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldGeneratorJobsRequest</code> again and assign that
   *          token to the request object's <code>nextToken</code> parameter. If there are no remaining
   *          results, the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorldsRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListWorlds</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorlds</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if
   *          applicable. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Optional filters to limit results. You can use <code>status</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;
}

/**
 * <p>Information about a world.</p>
 * @public
 */
export interface WorldSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the world.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world generation job.</p>
   * @public
   */
  generationJob?: string | undefined;

  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  template?: string | undefined;
}

/**
 * @public
 */
export interface ListWorldsResponse {
  /**
   * <p>Summary information for worlds.</p>
   * @public
   */
  worldSummaries?: WorldSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorlds</code> again and assign that token to the
   *          request object's <code>nextToken</code> parameter. If there are no remaining results, the
   *          previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorldTemplatesRequest {
  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>When this parameter is used, <code>ListWorldTemplates</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 100. If this parameter is not used, then
   *             <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code>
   *          value if applicable. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information for a template.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the template was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the template that you're using.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface ListWorldTemplatesResponse {
  /**
   * <p>Summary information for templates.</p>
   * @public
   */
  templateSummaries?: TemplateSummary[] | undefined;

  /**
   * <p>If the previous paginated request did not return all of the remaining results, the
   *          response object's <code>nextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListWorldTemplates</code> again and assign that token to
   *          the request object's <code>nextToken</code> parameter. If there are no remaining results,
   *          the previous response object's NextToken parameter is set to null. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   * @public
   */
  robot: string | undefined;
}

/**
 * @public
 */
export interface RegisterRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the robot will join.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>Information about the robot registration.</p>
   * @public
   */
  robot?: string | undefined;
}

/**
 * @public
 */
export interface RestartSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   * @public
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The batch policy.</p>
   * @public
   */
  batchPolicy?: BatchPolicy | undefined;

  /**
   * <p>A list of simulation job requests to create in the batch.</p>
   * @public
   */
  createSimulationJobRequests: SimulationJobRequest[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartSimulationJobBatchResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the batch.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: SimulationJobBatchStatus | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was
   *          created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The batch policy.</p>
   * @public
   */
  batchPolicy?: BatchPolicy | undefined;

  /**
   * <p>The failure code if the simulation job batch failed.</p>
   * @public
   */
  failureCode?: SimulationJobBatchErrorCode | undefined;

  /**
   * <p>The reason the simulation job batch failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>A list of failed simulation job requests. The request failed to be created into a
   *          simulation job. Failed requests do not have a simulation job ID. </p>
   * @public
   */
  failedRequests?: FailedCreateSimulationJobRequest[] | undefined;

  /**
   * <p>A list of pending simulation job requests. These requests have not yet been created into
   *          simulation jobs.</p>
   * @public
   */
  pendingRequests?: SimulationJobRequest[] | undefined;

  /**
   * <p>A list of created simulation job request summaries.</p>
   * @public
   */
  createdRequests?: SimulationJobSummary[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job
   *          batch.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SyncDeploymentJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The target fleet for the synchronization.</p>
   * @public
   */
  fleet: string | undefined;
}

/**
 * @public
 */
export interface SyncDeploymentJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  fleet?: string | undefined;

  /**
   * <p>The status of the synchronization job.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>Information about the deployment configuration.</p>
   * @public
   */
  deploymentConfig?: DeploymentConfig | undefined;

  /**
   * <p>Information about the deployment application configurations.</p>
   * @public
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>The failure reason if the job fails.</p>
   * @public
   */
  failureReason?: string | undefined;

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
   * @public
   */
  failureCode?: DeploymentJobErrorCode | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing
   *          tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that will be unattached from the
   *          resource.</p>
   * @public
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
   * <p>The application information for the robot application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: SourceConfig[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   * @public
   */
  currentRevisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI for your robot application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface UpdateRobotApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated robot application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the robot application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision id of the robot application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI for your robot application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface UpdateSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application.</p>
   * @public
   */
  application: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: SourceConfig[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite.</p>
   * @public
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   * @public
   */
  currentRevisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI for your simulation application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface UpdateSimulationApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated simulation application.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the simulation application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   * @public
   */
  sources?: Source[] | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   * @public
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite | undefined;

  /**
   * <p>Information about the robot software suite.</p>
   * @public
   */
  robotSoftwareSuite?: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   * @public
   */
  renderingEngine?: RenderingEngine | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The revision id of the simulation application.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The object that contains the Docker image URI used for your simulation
   *          application.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface UpdateWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template to update.</p>
   * @public
   */
  template: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The world template body.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>The location of the world template.</p>
   * @public
   */
  templateLocation?: TemplateLocation | undefined;
}

/**
 * @public
 */
export interface UpdateWorldTemplateResponse {
  /**
   * <p>The Amazon Resource Name (arn) of the world template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the world template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the world template was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}
