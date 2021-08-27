import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace BatchDeleteWorldsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteWorldsRequest): any => ({
    ...obj,
  });
}

export interface BatchDeleteWorldsResponse {
  /**
   * <p>A list of unprocessed worlds associated with the call. These worlds were not
   *          deleted.</p>
   */
  unprocessedWorlds?: string[];
}

export namespace BatchDeleteWorldsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteWorldsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface BatchDescribeSimulationJobRequest {
  /**
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   */
  jobs: string[] | undefined;
}

export namespace BatchDescribeSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeSimulationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Compute information for the simulation job</p>
 */
export interface ComputeResponse {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *          only billed for the SU utilization you consume up to the maximim value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;
}

export namespace ComputeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeResponse): any => ({
    ...obj,
  });
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

export namespace S3KeyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3KeyOutput): any => ({
    ...obj,
  });
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
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
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
   * <p>A boolean indicating whether to record all ROS topics.</p>
   */
  recordAllRosTopics: boolean | undefined;
}

export namespace LoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfig): any => ({
    ...obj,
  });
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

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
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

export namespace OutputLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputLocation): any => ({
    ...obj,
  });
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

export namespace PortMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortMapping): any => ({
    ...obj,
  });
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

export namespace PortForwardingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortForwardingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a launch configuration.</p>
 */
export interface LaunchConfig {
  /**
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: { [key: string]: string };

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
}

export namespace LaunchConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchConfig): any => ({
    ...obj,
  });
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
   * <p>Boolean indicating whether a streaming session will be configured for the tool.
   *          If <code>True</code>, AWS RoboMaker will configure a connection so you can interact with
   *          the tool as it is running in the simulation. It must have a graphical user interface.
   *          The default is <code>False</code>.
   *       </p>
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
   * <p>Boolean indicating whether logs will be recorded in CloudWatch for the tool.
   *       The default is <code>False</code>.
   *       </p>
   */
  streamOutputToCloudWatch?: boolean;

  /**
   * <p>Exit behavior determines what happens when your tool quits running.
   *         <code>RESTART</code> will cause your tool to be restarted. <code>FAIL</code>
   *         will cause your job to exit. The default is <code>RESTART</code>.
   *       </p>
   */
  exitBehavior?: ExitBehavior | string;
}

export namespace Tool {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tool): any => ({
    ...obj,
  });
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
   * <p>A prefix that specifies where files will be uploaded in Amazon S3.
   *         It is appended to the simulation output location to determine the final path.
   *        </p>
   *          <p>
   *         For example, if your simulation output location is <code>s3://my-bucket</code> and your upload
   *         configuration name is <code>robot-test</code>, your files will be uploaded to
   *         <code>s3://my-bucket/<simid>/<runid>/robot-test</code>.
   *       </p>
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

export namespace UploadConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadConfiguration): any => ({
    ...obj,
  });
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
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>. </p>
   */
  useDefaultUploadConfigurations?: boolean;

  /**
   * <p>Information about tools configured for the robot application.</p>
   */
  tools?: Tool[];

  /**
   * <p>A Boolean indicating whether to use default robot application tools.
   *         The default tools are rviz, rqt, terminal and rosbag record.
   *         The default is <code>False</code>.
   *       </p>
   */
  useDefaultTools?: boolean;
}

export namespace RobotApplicationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RobotApplicationConfig): any => ({
    ...obj,
  });
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

export namespace WorldConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldConfig): any => ({
    ...obj,
  });
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
   * <p>A Boolean indicating whether to use default upload configurations. By default,
   *             <code>.ros</code> and <code>.gazebo</code> files are uploaded when the application
   *          terminates and all ROS topics will be recorded.</p>
   *          <p>If you set this value, you must specify an <code>outputLocation</code>. </p>
   */
  useDefaultUploadConfigurations?: boolean;

  /**
   * <p>Information about tools configured for the simulation application.</p>
   */
  tools?: Tool[];

  /**
   * <p>A Boolean indicating whether to use default simulation application tools.
   *         The default tools are rviz, rqt, terminal and rosbag record.
   *         The default is <code>False</code>.
   *       </p>
   */
  useDefaultTools?: boolean;
}

export namespace SimulationApplicationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationApplicationConfig): any => ({
    ...obj,
  });
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

export namespace VPCConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCConfigResponse): any => ({
    ...obj,
  });
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
   *                <p>Leaves the host running for its maximum timeout duration after a <code>4XX</code> error code.</p>
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
  tags?: { [key: string]: string };

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

export namespace SimulationJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationJob): any => ({
    ...obj,
  });
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

export namespace BatchDescribeSimulationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeSimulationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace BatchPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPolicy): any => ({
    ...obj,
  });
}

export interface CancelDeploymentJobRequest {
  /**
   * <p>The deployment job ARN to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelDeploymentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDeploymentJobRequest): any => ({
    ...obj,
  });
}

export interface CancelDeploymentJobResponse {}

export namespace CancelDeploymentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDeploymentJobResponse): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobRequest {
  /**
   * <p>The simulation job ARN to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobResponse {}

export namespace CancelSimulationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSimulationJobResponse): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobBatchRequest {
  /**
   * <p>The id of the batch to cancel.</p>
   */
  batch: string | undefined;
}

export namespace CancelSimulationJobBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSimulationJobBatchRequest): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobBatchResponse {}

export namespace CancelSimulationJobBatchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSimulationJobBatchResponse): any => ({
    ...obj,
  });
}

export interface CancelWorldExportJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world export job to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelWorldExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelWorldExportJobRequest): any => ({
    ...obj,
  });
}

export interface CancelWorldExportJobResponse {}

export namespace CancelWorldExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelWorldExportJobResponse): any => ({
    ...obj,
  });
}

export interface CancelWorldGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world generator job to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelWorldGenerationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelWorldGenerationJobRequest): any => ({
    ...obj,
  });
}

export interface CancelWorldGenerationJobResponse {}

export namespace CancelWorldGenerationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelWorldGenerationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Compute information for the simulation job.</p>
 */
export interface Compute {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory proportional to
   *          the supplied simulation unit limit. A simulation unit is 1 vcpu and 2GB of memory. You are
   *          only billed for the SU utilization you consume up to the maximim value provided. The
   *          default is 15. </p>
   */
  simulationUnitLimit?: number;
}

export namespace Compute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Compute): any => ({
    ...obj,
  });
}

/**
 * <p>The failure percentage threshold percentage was met.</p>
 */
export interface ConcurrentDeploymentException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentDeploymentException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentDeploymentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentDeploymentException): any => ({
    ...obj,
  });
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
  environmentVariables?: { [key: string]: string };
}

export namespace DeploymentLaunchConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentLaunchConfig): any => ({
    ...obj,
  });
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

export namespace DeploymentApplicationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentApplicationConfig): any => ({
    ...obj,
  });
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

export namespace S3Object {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
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

export namespace DeploymentConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentConfig): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateDeploymentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateDeploymentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeploymentJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the fleet.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateFleetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetResponse): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateRobotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateRobotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export enum RobotSoftwareSuiteType {
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

export namespace RobotSoftwareSuite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RobotSoftwareSuite): any => ({
    ...obj,
  });
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

export namespace SourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConfig): any => ({
    ...obj,
  });
}

export interface CreateRobotApplicationRequest {
  /**
   * <p>The name of the robot application.</p>
   */
  name: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>The robot software suite (ROS distribuition) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot
   *          application.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRobotApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotApplicationRequest): any => ({
    ...obj,
  });
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

export namespace Source {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateRobotApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotApplicationResponse): any => ({
    ...obj,
  });
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
}

export namespace CreateRobotApplicationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotApplicationVersionRequest): any => ({
    ...obj,
  });
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
}

export namespace CreateRobotApplicationVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRobotApplicationVersionResponse): any => ({
    ...obj,
  });
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

export namespace RenderingEngine {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderingEngine): any => ({
    ...obj,
  });
}

export enum SimulationSoftwareSuiteType {
  Gazebo = "Gazebo",
  RosbagPlay = "RosbagPlay",
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

export namespace SimulationSoftwareSuite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationSoftwareSuite): any => ({
    ...obj,
  });
}

export interface CreateSimulationApplicationRequest {
  /**
   * <p>The name of the simulation application.</p>
   */
  name: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: SourceConfig[] | undefined;

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
  tags?: { [key: string]: string };
}

export namespace CreateSimulationApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationApplicationRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateSimulationApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationApplicationResponse): any => ({
    ...obj,
  });
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
}

export namespace CreateSimulationApplicationVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationApplicationVersionRequest): any => ({
    ...obj,
  });
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
}

export namespace CreateSimulationApplicationVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationApplicationVersionResponse): any => ({
    ...obj,
  });
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
}

export namespace DataSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSourceConfig): any => ({
    ...obj,
  });
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

export namespace VPCConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCConfig): any => ({
    ...obj,
  });
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
   *                <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p>
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
  tags?: { [key: string]: string };

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

export namespace CreateSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;
}

export namespace CreateSimulationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSimulationJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
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
   *                <p>Leaves the host running for its maximum timeout duration after a <code>4XX</code> error code.</p>
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
  tags?: { [key: string]: string };
}

export namespace SimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateWorldExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldExportJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateWorldExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldExportJobResponse): any => ({
    ...obj,
  });
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

export namespace WorldCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldCount): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: { [key: string]: string };
}

export namespace CreateWorldGenerationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldGenerationJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: { [key: string]: string };
}

export namespace CreateWorldGenerationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldGenerationJobResponse): any => ({
    ...obj,
  });
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

export namespace TemplateLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateLocation): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateWorldTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldTemplateRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateWorldTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorldTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export namespace DeleteFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetRequest): any => ({
    ...obj,
  });
}

export interface DeleteFleetResponse {}

export namespace DeleteFleetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetResponse): any => ({
    ...obj,
  });
}

export interface DeleteRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export namespace DeleteRobotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRobotRequest): any => ({
    ...obj,
  });
}

export interface DeleteRobotResponse {}

export namespace DeleteRobotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRobotResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteRobotApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRobotApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteRobotApplicationResponse {}

export namespace DeleteRobotApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRobotApplicationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteSimulationApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSimulationApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSimulationApplicationResponse {}

export namespace DeleteSimulationApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSimulationApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template you want to delete.</p>
   */
  template: string | undefined;
}

export namespace DeleteWorldTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorldTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorldTemplateResponse {}

export namespace DeleteWorldTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorldTemplateResponse): any => ({
    ...obj,
  });
}

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

export namespace DeploymentJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentJob): any => ({
    ...obj,
  });
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

export namespace DeregisterRobotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterRobotRequest): any => ({
    ...obj,
  });
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

export namespace DeregisterRobotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterRobotResponse): any => ({
    ...obj,
  });
}

export interface DescribeDeploymentJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  job: string | undefined;
}

export namespace DescribeDeploymentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeploymentJobRequest): any => ({
    ...obj,
  });
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

export namespace ProgressDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProgressDetail): any => ({
    ...obj,
  });
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

export namespace RobotDeployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RobotDeployment): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeDeploymentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeploymentJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeFleetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export namespace DescribeFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetRequest): any => ({
    ...obj,
  });
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

export namespace Robot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Robot): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeFleetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetResponse): any => ({
    ...obj,
  });
}

export interface DescribeRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot to be described.</p>
   */
  robot: string | undefined;
}

export namespace DescribeRobotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRobotRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeRobotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRobotResponse): any => ({
    ...obj,
  });
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

export namespace DescribeRobotApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRobotApplicationRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeRobotApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRobotApplicationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSimulationApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationApplicationRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeSimulationApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationApplicationResponse): any => ({
    ...obj,
  });
}

export interface DescribeSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job to be described.</p>
   */
  job: string | undefined;
}

export namespace DescribeSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

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

export namespace DescribeSimulationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeSimulationJobBatchRequest {
  /**
   * <p>The id of the batch to describe.</p>
   */
  batch: string | undefined;
}

export namespace DescribeSimulationJobBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationJobBatchRequest): any => ({
    ...obj,
  });
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
}

export namespace SimulationJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationJobSummary): any => ({
    ...obj,
  });
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

export namespace FailedCreateSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedCreateSimulationJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeSimulationJobBatchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSimulationJobBatchResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorldRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world you want to describe.</p>
   */
  world: string | undefined;
}

export namespace DescribeWorldRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>Returns the JSON formatted string that describes the contents of your world.</p>
   */
  worldDescriptionBody?: string;
}

export namespace DescribeWorldResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorldExportJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world export job to describe.</p>
   */
  job: string | undefined;
}

export namespace DescribeWorldExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldExportJobRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeWorldExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldExportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorldGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world generation job to describe.</p>
   */
  job: string | undefined;
}

export namespace DescribeWorldGenerationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldGenerationJobRequest): any => ({
    ...obj,
  });
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

export namespace WorldFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldFailure): any => ({
    ...obj,
  });
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

export namespace FailureSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailureSummary): any => ({
    ...obj,
  });
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

export namespace FinishedWorldsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FinishedWorldsSummary): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A map that contains tag keys and tag values that are attached to the generated
   *          worlds.</p>
   */
  worldTags?: { [key: string]: string };
}

export namespace DescribeWorldGenerationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldGenerationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorldTemplateRequest {
  /**
   * <p>The Amazon Resource Name (arn) of the world template you want to describe.</p>
   */
  template: string | undefined;
}

export namespace DescribeWorldTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldTemplateRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>The version of the world template that you're using.</p>
   */
  version?: string;
}

export namespace DescribeWorldTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorldTemplateResponse): any => ({
    ...obj,
  });
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

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
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

export namespace Fleet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Fleet): any => ({
    ...obj,
  });
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

export namespace GetWorldTemplateBodyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorldTemplateBodyRequest): any => ({
    ...obj,
  });
}

export interface GetWorldTemplateBodyResponse {
  /**
   * <p>The world template body.</p>
   */
  templateBody?: string;
}

export namespace GetWorldTemplateBodyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorldTemplateBodyResponse): any => ({
    ...obj,
  });
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

export namespace ListDeploymentJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeploymentJobsRequest): any => ({
    ...obj,
  });
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

export namespace ListDeploymentJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeploymentJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListFleetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFleetsRequest): any => ({
    ...obj,
  });
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

export namespace ListFleetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFleetsResponse): any => ({
    ...obj,
  });
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

export namespace ListRobotApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRobotApplicationsRequest): any => ({
    ...obj,
  });
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

export namespace RobotApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RobotApplicationSummary): any => ({
    ...obj,
  });
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

export namespace ListRobotApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRobotApplicationsResponse): any => ({
    ...obj,
  });
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

export namespace ListRobotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRobotsRequest): any => ({
    ...obj,
  });
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

export namespace ListRobotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRobotsResponse): any => ({
    ...obj,
  });
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

export namespace ListSimulationApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationApplicationsRequest): any => ({
    ...obj,
  });
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

export namespace SimulationApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationApplicationSummary): any => ({
    ...obj,
  });
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

export namespace ListSimulationApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationApplicationsResponse): any => ({
    ...obj,
  });
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

export namespace ListSimulationJobBatchesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationJobBatchesRequest): any => ({
    ...obj,
  });
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

export namespace SimulationJobBatchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimulationJobBatchSummary): any => ({
    ...obj,
  });
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

export namespace ListSimulationJobBatchesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationJobBatchesResponse): any => ({
    ...obj,
  });
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

export namespace ListSimulationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationJobsRequest): any => ({
    ...obj,
  });
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

export namespace ListSimulationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSimulationJobsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of all tags added to the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ListWorldExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldExportJobsRequest): any => ({
    ...obj,
  });
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
}

export namespace WorldExportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldExportJobSummary): any => ({
    ...obj,
  });
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

export namespace ListWorldExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldExportJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListWorldGenerationJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldGenerationJobsRequest): any => ({
    ...obj,
  });
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

export namespace WorldGenerationJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldGenerationJobSummary): any => ({
    ...obj,
  });
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

export namespace ListWorldGenerationJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldGenerationJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListWorldsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldsRequest): any => ({
    ...obj,
  });
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

export namespace WorldSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorldSummary): any => ({
    ...obj,
  });
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

export namespace ListWorldsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldsResponse): any => ({
    ...obj,
  });
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

export namespace ListWorldTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldTemplatesRequest): any => ({
    ...obj,
  });
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

export namespace TemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateSummary): any => ({
    ...obj,
  });
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

export namespace ListWorldTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorldTemplatesResponse): any => ({
    ...obj,
  });
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

export namespace RegisterRobotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterRobotRequest): any => ({
    ...obj,
  });
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

export namespace RegisterRobotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterRobotResponse): any => ({
    ...obj,
  });
}

export interface RestartSimulationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  job: string | undefined;
}

export namespace RestartSimulationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestartSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface RestartSimulationJobResponse {}

export namespace RestartSimulationJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestartSimulationJobResponse): any => ({
    ...obj,
  });
}

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
  tags?: { [key: string]: string };
}

export namespace StartSimulationJobBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSimulationJobBatchRequest): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace StartSimulationJobBatchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSimulationJobBatchResponse): any => ({
    ...obj,
  });
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

export namespace SyncDeploymentJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyncDeploymentJobRequest): any => ({
    ...obj,
  });
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

export namespace SyncDeploymentJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SyncDeploymentJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateRobotApplicationRequest {
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;
}

export namespace UpdateRobotApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRobotApplicationRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateRobotApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRobotApplicationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSimulationApplicationRequest {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: SourceConfig[] | undefined;

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
}

export namespace UpdateSimulationApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSimulationApplicationRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateSimulationApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSimulationApplicationResponse): any => ({
    ...obj,
  });
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

export namespace UpdateWorldTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorldTemplateRequest): any => ({
    ...obj,
  });
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

export namespace UpdateWorldTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorldTemplateResponse): any => ({
    ...obj,
  });
}
