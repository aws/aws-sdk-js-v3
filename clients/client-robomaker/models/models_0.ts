import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum Architecture {
  ARM64 = "ARM64",
  ARMHF = "ARMHF",
  X86_64 = "X86_64",
}

export interface BatchDescribeSimulationJobRequest {
  /**
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   */
  jobs: string[] | undefined;
}

export namespace BatchDescribeSimulationJobRequest {
  export const filterSensitiveLog = (obj: BatchDescribeSimulationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Compute information for the simulation job</p>
 */
export interface ComputeResponse {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory
   *         proportional to the supplied simulation unit limit. A simulation
   *         unit is 1 vcpu and 2GB of memory. You are only billed
   *         for the SU utilization you consume up to the maximim value provided.
   *         </p>
   */
  simulationUnitLimit?: number;
}

export namespace ComputeResponse {
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
  RobotApplicationVersionMismatchedEtag = "RobotApplicationVersionMismatchedEtag",
  SimulationApplicationCrash = "SimulationApplicationCrash",
  SimulationApplicationVersionMismatchedEtag = "SimulationApplicationVersionMismatchedEtag",
  SubnetIpLimitExceeded = "SubnetIpLimitExceeded",
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
  export const filterSensitiveLog = (obj: LoggingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The IPv4 public address of the network interface.</p>
   */
  publicIpAddress?: string;
}

export namespace NetworkInterface {
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
  export const filterSensitiveLog = (obj: OutputLocation): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a port mapping.</p>
 */
export interface PortMapping {
  /**
   * <p>The port number on the simulation job instance to use as a remote connection point. </p>
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
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>Boolean indicating whether a streaming session will be configured for the application. If <code>True</code>,
   *         AWS RoboMaker will configure a connection so you can interact with your application as it is
   *        running in the simulation. You must configure and luanch the component. It must have a graphical
   *        user interface.
   *        </p>
   */
  streamUI?: boolean;

  /**
   * <p>The port forwarding configuration.</p>
   */
  portForwardingConfig?: PortForwardingConfig;
}

export namespace LaunchConfig {
  export const filterSensitiveLog = (obj: LaunchConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Application configuration information for a robot.</p>
 */
export interface RobotApplicationConfig {
  /**
   * <p>The version of the robot application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;
}

export namespace RobotApplicationConfig {
  export const filterSensitiveLog = (obj: RobotApplicationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a simulation application configuration.</p>
 */
export interface SimulationApplicationConfig {
  /**
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: LaunchConfig | undefined;

  /**
   * <p>The version of the simulation application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;
}

export namespace SimulationApplicationConfig {
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
   * <p>The VPC ID associated with your simulation job.</p>
   */
  vpcId?: string;

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: string[];

  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: string[];

  /**
   * <p>A boolean indicating if a public IP was assigned.</p>
   */
  assignPublicIp?: boolean;
}

export namespace VPCConfigResponse {
  export const filterSensitiveLog = (obj: VPCConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a simulation job.</p>
 */
export interface SimulationJob {
  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>Information about a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job.
   *       </p>
   */
  iamRole?: string;

  /**
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>Status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Restart the simulation job in the same host instance.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>Compute information for the simulation job</p>
   */
  compute?: ComputeResponse;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The reason why the simulation job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The failure code of the simulation job if it failed.</p>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;
}

export namespace SimulationJob {
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
  export const filterSensitiveLog = (obj: BatchDescribeSimulationJobResponse): any => ({
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
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter specified in a request is not valid, is unsupported, or cannot be used.
 *          The returned message provides an explanation of the error value.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
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
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
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
   *          <p>If a batch times out, and there are pending requests that
   *       were failing due to an internal failure (like <code>InternalServiceError</code>),
   *       they will be moved to the
   *       failed list and the batch status will be <code>Failed</code>.
   *       If the pending requests were failing for any other reason,
   *       the failed pending requests will be moved to the failed list
   *       and the batch status will be <code>TimedOut</code>.
   *       </p>
   */
  timeoutInSeconds?: number;

  /**
   * <p>The number of active simulation jobs create as part of the batch that
   *          can be in an active state at the same time.
   *       </p>
   *          <p>Active states include: <code>Pending</code>,<code>Preparing</code>,
   *          <code>Running</code>, <code>Restarting</code>, <code>RunningFailed</code> and
   *          <code>Terminating</code>. All other states are terminal states.
   *       </p>
   */
  maxConcurrency?: number;
}

export namespace BatchPolicy {
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
  export const filterSensitiveLog = (obj: CancelDeploymentJobRequest): any => ({
    ...obj,
  });
}

export interface CancelDeploymentJobResponse {}

export namespace CancelDeploymentJobResponse {
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
  export const filterSensitiveLog = (obj: CancelSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobResponse {}

export namespace CancelSimulationJobResponse {
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
  export const filterSensitiveLog = (obj: CancelSimulationJobBatchRequest): any => ({
    ...obj,
  });
}

export interface CancelSimulationJobBatchResponse {}

export namespace CancelSimulationJobBatchResponse {
  export const filterSensitiveLog = (obj: CancelSimulationJobBatchResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Compute information for the simulation job.</p>
 */
export interface Compute {
  /**
   * <p>The simulation unit limit. Your simulation is allocated CPU and memory
   *         proportional to the supplied simulation unit limit. A simulation
   *         unit is 1 vcpu and 2GB of memory. You are only billed
   *         for the SU utilization you consume up to the maximim value provided.
   *         </p>
   */
  simulationUnitLimit?: number;
}

export namespace Compute {
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
  export const filterSensitiveLog = (obj: ConcurrentDeploymentException): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for a deployment launch.</p>
 */
export interface DeploymentLaunchConfig {
  /**
   * <p>The deployment pre-launch file. This file will be executed prior to the launch file.</p>
   */
  preLaunchFile?: string;

  /**
   * <p>The deployment post-launch file. This file will be executed after the launch file.</p>
   */
  postLaunchFile?: string;

  /**
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>An array of key/value pairs specifying environment variables for the robot application</p>
   */
  environmentVariables?: { [key: string]: string };
}

export namespace DeploymentLaunchConfig {
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
   * <p>The launch configuration.</p>
   */
  launchConfig: DeploymentLaunchConfig | undefined;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: string | undefined;
}

export namespace DeploymentApplicationConfig {
  export const filterSensitiveLog = (obj: DeploymentApplicationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an S3 object.</p>
 */
export interface S3Object {
  /**
   * <p>The etag of the object.</p>
   */
  etag?: string;

  /**
   * <p>The key of the object.</p>
   */
  key: string | undefined;

  /**
   * <p>The bucket containing the object.</p>
   */
  bucket: string | undefined;
}

export namespace S3Object {
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a deployment configuration.</p>
 */
export interface DeploymentConfig {
  /**
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   */
  failureThresholdPercentage?: number;

  /**
   * <p>The download condition file.</p>
   */
  downloadConditionFile?: S3Object;

  /**
   * <p>The amount of time, in seconds, to wait for deployment to a single robot to complete.
   *         Choose a time between 1 minute and 7 days. The default is 5 hours.</p>
   */
  robotDeploymentTimeoutInSeconds?: number;

  /**
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   */
  concurrentDeploymentPercentage?: number;
}

export namespace DeploymentConfig {
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
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs: DeploymentApplicationConfig[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateDeploymentJobRequest {
  export const filterSensitiveLog = (obj: CreateDeploymentJobRequest): any => ({
    ...obj,
  });
}

export enum DeploymentJobErrorCode {
  BadPermissionError = "BadPermissionError",
  DownloadConditionFailed = "DownloadConditionFailed",
  EnvironmentSetupError = "EnvironmentSetupError",
  EtagMismatch = "EtagMismatch",
  ExtractingBundleFailure = "ExtractingBundleFailure",
  FailureThresholdBreached = "FailureThresholdBreached",
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
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>BadPermissionError</dt>
   *             <dd>
   *
   *                <p>AWS Greengrass requires a service-level role permission to access
   *                   other services. The role must include the
   *                   <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy$jsonEditor">
   *                      <code>AWSGreengrassResourceAccessRolePolicy</code>
   *                      managed policy</a>.
   *                </p>
   *             </dd>
   *             <dt>ExtractingBundleFailure</dt>
   *             <dd>
   *                <p>The robot application could not be extracted from the bundle.</p>
   *             </dd>
   *             <dt>FailureThresholdBreached</dt>
   *             <dd>
   *                <p>The percentage of robots that could not be updated exceeded the percentage
   *                   set for the deployment.</p>
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
   *                <p>An internal error has occurred. Retry your request, but if the problem persists,
   *                   contact us with details.</p>
   *             </dd>
   *             <dt>MissingRobotApplicationArchitecture</dt>
   *             <dd>
   *                <p>The robot application does not have a source that matches the architecture of the robot.</p>
   *             </dd>
   *             <dt>MissingRobotDeploymentResource</dt>
   *             <dd>
   *                <p>One or more of the resources specified for the robot application are missing. For
   *                example, does the robot application have the correct launch package and launch file?</p>
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
   *                <p>There is no response from the robot. It might not be powered on or
   *                connected to the internet.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The list of all tags added to the deployment job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The target fleet for the deployment job.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The failure reason of the deployment job if it failed.</p>
   */
  failureReason?: string;
}

export namespace CreateDeploymentJobResponse {
  export const filterSensitiveLog = (obj: CreateDeploymentJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request uses the same client token as a previous, but non-identical request.
 *          Do not reuse a client token with different requests, unless the requests are identical. </p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
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
  export const filterSensitiveLog = (obj: CreateFleetRequest): any => ({
    ...obj,
  });
}

export interface CreateFleetResponse {
  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The list of all tags added to the fleet.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;
}

export namespace CreateFleetResponse {
  export const filterSensitiveLog = (obj: CreateFleetResponse): any => ({
    ...obj,
  });
}

export interface CreateRobotRequest {
  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId: string | undefined;

  /**
   * <p>The name for the robot.</p>
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture: Architecture | string | undefined;
}

export namespace CreateRobotRequest {
  export const filterSensitiveLog = (obj: CreateRobotRequest): any => ({
    ...obj,
  });
}

export interface CreateRobotResponse {
  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The list of all tags added to the robot.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;
}

export namespace CreateRobotResponse {
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
  Kinetic = "Kinetic",
  Melodic = "Melodic",
}

/**
 * <p>Information about a robot software suite (ROS distribution).</p>
 */
export interface RobotSoftwareSuite {
  /**
   * <p>The version of the robot software suite (ROS distribution).</p>
   */
  version?: RobotSoftwareSuiteVersionType | string;

  /**
   * <p>The name of the robot software suite (ROS distribution).</p>
   */
  name?: RobotSoftwareSuiteType | string;
}

export namespace RobotSoftwareSuite {
  export const filterSensitiveLog = (obj: RobotSoftwareSuite): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a source configuration.</p>
 */
export interface SourceConfig {
  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The target processor architecture for the application.</p>
   */
  architecture?: Architecture | string;
}

export namespace SourceConfig {
  export const filterSensitiveLog = (obj: SourceConfig): any => ({
    ...obj,
  });
}

export interface CreateRobotApplicationRequest {
  /**
   * <p>The robot software suite (ROS distribuition) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the robot application.</p>
   */
  name: string | undefined;
}

export namespace CreateRobotApplicationRequest {
  export const filterSensitiveLog = (obj: CreateRobotApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a source.</p>
 */
export interface Source {
  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   */
  etag?: string;

  /**
   * <p>The s3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The taget processor architecture for the application.</p>
   */
  architecture?: Architecture | string;
}

export namespace Source {
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
}

export interface CreateRobotApplicationResponse {
  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The list of all tags added to the robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;
}

export namespace CreateRobotApplicationResponse {
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
   * <p>The current revision id for the robot application. If you provide a value and it
   *         matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;
}

export namespace CreateRobotApplicationVersionRequest {
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
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;
}

export namespace CreateRobotApplicationVersionResponse {
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
   * <p>The version of the rendering engine.</p>
   */
  version?: string;

  /**
   * <p>The name of the rendering engine.</p>
   */
  name?: RenderingEngineType | string;
}

export namespace RenderingEngine {
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
  export const filterSensitiveLog = (obj: SimulationSoftwareSuite): any => ({
    ...obj,
  });
}

export interface CreateSimulationApplicationRequest {
  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>The robot software suite (ROS distribution) used by the simulation application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The name of the simulation application.</p>
   */
  name: string | undefined;
}

export namespace CreateSimulationApplicationRequest {
  export const filterSensitiveLog = (obj: CreateSimulationApplicationRequest): any => ({
    ...obj,
  });
}

export interface CreateSimulationApplicationResponse {
  /**
   * <p>The list of all tags added to the simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];
}

export namespace CreateSimulationApplicationResponse {
  export const filterSensitiveLog = (obj: CreateSimulationApplicationResponse): any => ({
    ...obj,
  });
}

export interface CreateSimulationApplicationVersionRequest {
  /**
   * <p>The current revision id for the simulation application. If you provide a value and it
   *         matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;
}

export namespace CreateSimulationApplicationVersionRequest {
  export const filterSensitiveLog = (obj: CreateSimulationApplicationVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateSimulationApplicationVersionResponse {
  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The revision ID of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;
}

export namespace CreateSimulationApplicationVersionResponse {
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
  export const filterSensitiveLog = (obj: DataSourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security
 *         group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one
 *         security group and two subnet IDs.</p>
 */
export interface VPCConfig {
  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: string[] | undefined;

  /**
   * <p>A boolean indicating whether to assign a public IP address.</p>
   */
  assignPublicIp?: boolean;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: string[];
}

export namespace VPCConfig {
  export const filterSensitiveLog = (obj: VPCConfig): any => ({
    ...obj,
  });
}

export interface CreateSimulationJobRequest {
  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are
   *         available under <code>/opt/robomaker/datasources/data_source_name</code>.
   *       </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *             <code>DataSourceConfig</code> objects.
   *          </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds.
   *          When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to
   *          <code>Completed</code>.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job.
   *       </p>
   */
  iamRole: string | undefined;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs.
   *          These must belong to the same VPC. You must provide at least one security group and one subnet ID. </p>
   */
  vpcConfig?: VPCConfig;

  /**
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Restart the simulation job in the same host instance.</p>
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
   * <p>Compute information for the simulation job.</p>
   */
  compute?: Compute;
}

export namespace CreateSimulationJobRequest {
  export const filterSensitiveLog = (obj: CreateSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface CreateSimulationJobResponse {
  /**
   * <p>Simulation job output files location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

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
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The simulation application used by the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>the failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The robot application used by the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;

  /**
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>The IAM role that allows the simulation job to call the AWS APIs that
   *          are specified in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The list of all tags added to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The maximum simulation job duration in seconds.
   *       </p>
   */
  maxJobDurationInSeconds?: number;
}

export namespace CreateSimulationJobResponse {
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
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a simulation job request.</p>
 */
export interface SimulationJobRequest {
  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>Compute information for the simulation job</p>
   */
  compute?: Compute;

  /**
   * <p>Boolean indicating whether to use default simulation tool applications.</p>
   */
  useDefaultApplications?: boolean;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are
   *         available under <code>/opt/robomaker/datasources/data_source_name</code>.
   *       </p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *             <code>DataSourceConfig</code> objects.
   *          </p>
   *          </note>
   */
  dataSources?: DataSourceConfig[];

  /**
   * <p>The robot applications to use in the simulation job.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The output location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job request.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The simulation applications to use in the simulation job.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Restart the simulation job in the same host instance.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security
   *         group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one
   *         security group and two subnet IDs.</p>
   */
  vpcConfig?: VPCConfig;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job.
   *       </p>
   */
  iamRole?: string;
}

export namespace SimulationJobRequest {
  export const filterSensitiveLog = (obj: SimulationJobRequest): any => ({
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
  export const filterSensitiveLog = (obj: DeleteFleetRequest): any => ({
    ...obj,
  });
}

export interface DeleteFleetResponse {}

export namespace DeleteFleetResponse {
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
  export const filterSensitiveLog = (obj: DeleteRobotRequest): any => ({
    ...obj,
  });
}

export interface DeleteRobotResponse {}

export namespace DeleteRobotResponse {
  export const filterSensitiveLog = (obj: DeleteRobotResponse): any => ({
    ...obj,
  });
}

export interface DeleteRobotApplicationRequest {
  /**
   * <p>The version of the robot application to delete.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the the robot application.</p>
   */
  application: string | undefined;
}

export namespace DeleteRobotApplicationRequest {
  export const filterSensitiveLog = (obj: DeleteRobotApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteRobotApplicationResponse {}

export namespace DeleteRobotApplicationResponse {
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
  export const filterSensitiveLog = (obj: DeleteSimulationApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSimulationApplicationResponse {}

export namespace DeleteSimulationApplicationResponse {
  export const filterSensitiveLog = (obj: DeleteSimulationApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a deployment job.</p>
 */
export interface DeploymentJob {
  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;
}

export namespace DeploymentJob {
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
  export const filterSensitiveLog = (obj: DeregisterRobotRequest): any => ({
    ...obj,
  });
}

export interface DeregisterRobotResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;
}

export namespace DeregisterRobotResponse {
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
   * <p>Precentage of the step that is done. This currently only applies to the <code>Downloading/Extracting</code>
   *         step of the deployment. It is empty for other steps.</p>
   */
  percentDone?: number;

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
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies
   *         to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.</p>
   */
  estimatedTimeRemainingSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  targetResource?: string;
}

export namespace ProgressDetail {
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
   * <p>The status of the robot deployment.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>A short description of the reason why the robot deployment failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date;

  /**
   * <p>The robot deployment failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: ProgressDetail;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date;
}

export namespace RobotDeployment {
  export const filterSensitiveLog = (obj: RobotDeployment): any => ({
    ...obj,
  });
}

export interface DescribeDeploymentJobResponse {
  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The list of all tags added to the specified deployment job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>A list of robot deployment summaries.</p>
   */
  robotDeploymentSummary?: RobotDeployment[];

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;
}

export namespace DescribeDeploymentJobResponse {
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
  export const filterSensitiveLog = (obj: DescribeFleetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a robot.</p>
 */
export interface Robot {
  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The status of the robot.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The Greengrass group associated with the robot.</p>
   */
  greenGrassGroupId?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;
}

export namespace Robot {
  export const filterSensitiveLog = (obj: Robot): any => ({
    ...obj,
  });
}

export interface DescribeFleetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The status of the last deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The list of all tags added to the specified fleet.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A list of robots.</p>
   */
  robots?: Robot[];

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;
}

export namespace DescribeFleetResponse {
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
  export const filterSensitiveLog = (obj: DescribeRobotRequest): any => ({
    ...obj,
  });
}

export interface DescribeRobotResponse {
  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the fleet.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>The list of all tags added to the specified robot.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment job.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The target architecture of the robot application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId?: string;
}

export namespace DescribeRobotResponse {
  export const filterSensitiveLog = (obj: DescribeRobotResponse): any => ({
    ...obj,
  });
}

export interface DescribeRobotApplicationRequest {
  /**
   * <p>The version of the robot application to describe.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;
}

export namespace DescribeRobotApplicationRequest {
  export const filterSensitiveLog = (obj: DescribeRobotApplicationRequest): any => ({
    ...obj,
  });
}

export interface DescribeRobotApplicationResponse {
  /**
   * <p>The list of all tags added to the specified robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;
}

export namespace DescribeRobotApplicationResponse {
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
  export const filterSensitiveLog = (obj: DescribeSimulationApplicationRequest): any => ({
    ...obj,
  });
}

export interface DescribeSimulationApplicationResponse {
  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The list of all tags added to the specified simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the robot simulation application.</p>
   */
  arn?: string;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

export namespace DescribeSimulationApplicationResponse {
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
  export const filterSensitiveLog = (obj: DescribeSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeSimulationJobResponse {
  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: RobotApplicationConfig[];

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: DataSource[];

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: SimulationApplicationConfig[];

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>Compute information for the simulation job.</p>
   */
  compute?: ComputeResponse;

  /**
   * <p>The VPC configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;

  /**
   * <p>The network interface information for the simulation job.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>The failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>Details about why the simulation job failed. For more information
   *          about troubleshooting, see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.</p>
   */
  failureReason?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The list of all tags added to the specified simulation job.</p>
   */
  tags?: { [key: string]: string };

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
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;
}

export namespace DescribeSimulationJobResponse {
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
  export const filterSensitiveLog = (obj: DescribeSimulationJobBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information for a simulation job.</p>
 */
export interface SimulationJobSummary {
  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: string[];

  /**
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: string[];

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The names of the data sources.</p>
   */
  dataSourceNames?: string[];

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;
}

export namespace SimulationJobSummary {
  export const filterSensitiveLog = (obj: SimulationJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a failed create simulation job request.</p>
 */
export interface FailedCreateSimulationJobRequest {
  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch failed.</p>
   */
  failedAt?: Date;

  /**
   * <p>The simulation job request.</p>
   */
  request?: SimulationJobRequest;

  /**
   * <p>The failure code.</p>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The failure reason of the simulation job request.</p>
   */
  failureReason?: string;
}

export namespace FailedCreateSimulationJobRequest {
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was created.</p>
   */
  createdAt?: Date;

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
   *                <p>The simulation job batch failed. One or more simulation job requests could not be completed
   *                 due to an internal failure (like <code>InternalServiceError</code>).
   *                 See <code>failureCode</code> and <code>failureReason</code> for more information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are
   *                no pending simulation job requests in the batch and none of the
   *                failed simulation job requests are due to <code>InternalServiceError</code> and (2)
   *                   when all created simulation jobs have reached a terminal state (for example,
   *                   <code>Completed</code> or <code>Failed</code>).
   *                </p>
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
   *                <p>If a batch timing out, and there are pending requests that
   *                   were failing due to an internal failure (like <code>InternalServiceError</code>),
   *                   the batch status will be <code>Failed</code>. If there are no such failing request,
   *                   the batch status will be <code>TimedOut</code>.
   *                </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>A list of pending simulation job requests. These requests have
   *       not yet been created into simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * <p>A list of created simulation job summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job batch.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The failure code of the simulation job batch.</p>
   */
  failureCode?: SimulationJobBatchErrorCode | string;

  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>A list of failed create simulation job requests. The request failed to
   *          be created into a simulation job. Failed requests do not
   *          have a simulation job ID.
   *       </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];
}

export namespace DescribeSimulationJobBatchResponse {
  export const filterSensitiveLog = (obj: DescribeSimulationJobBatchResponse): any => ({
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
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a fleet.</p>
 */
export interface Fleet {
  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The status of the last fleet deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;
}

export namespace Fleet {
  export const filterSensitiveLog = (obj: Fleet): any => ({
    ...obj,
  });
}

export interface ListDeploymentJobsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>InProgress</code> or the status <code>Pending</code>.</p>
   */
  filters?: Filter[];

  /**
   * <p>When this parameter is used, <code>ListDeploymentJobs</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListDeploymentJobs</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code>
   *          returns up to 200 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   */
  nextToken?: string;
}

export namespace ListDeploymentJobsRequest {
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
   * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request.
   *          When the results of a <code>ListDeploymentJobs</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListDeploymentJobsResponse {
  export const filterSensitiveLog = (obj: ListDeploymentJobsResponse): any => ({
    ...obj,
  });
}

export interface ListFleetsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];

  /**
   * <p>When this parameter is used, <code>ListFleets</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListFleets</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code>
   *          returns up to 200 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListFleets</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListFleetsRequest {
  export const filterSensitiveLog = (obj: ListFleetsRequest): any => ({
    ...obj,
  });
}

export interface ListFleetsResponse {
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request.
   *          When the results of a <code>ListFleets</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of fleet details meeting the request criteria.</p>
   */
  fleetDetails?: Fleet[];
}

export namespace ListFleetsResponse {
  export const filterSensitiveLog = (obj: ListFleetsResponse): any => ({
    ...obj,
  });
}

export interface ListRobotApplicationsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *             <p>The filter name <code>name</code> is supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];

  /**
   * <p>When this parameter is used, <code>ListRobotApplications</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRobotApplications</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The version qualifier of the robot application.</p>
   */
  versionQualifier?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRobotApplications</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   */
  nextToken?: string;
}

export namespace ListRobotApplicationsRequest {
  export const filterSensitiveLog = (obj: ListRobotApplicationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information for a robot application.</p>
 */
export interface RobotApplicationSummary {
  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;
}

export namespace RobotApplicationSummary {
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
   * <p>The <code>nextToken</code> value to include in a future <code>ListRobotApplications</code> request.
   *          When the results of a <code>ListRobotApplications</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListRobotApplicationsResponse {
  export const filterSensitiveLog = (obj: ListRobotApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListRobotsRequest {
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>Registered</code> or the status <code>Available</code>.</p>
   */
  filters?: Filter[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRobots</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   */
  nextToken?: string;

  /**
   * <p>When this parameter is used, <code>ListRobots</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRobots</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code>
   *          returns up to 200 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;
}

export namespace ListRobotsRequest {
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
   * <p>The <code>nextToken</code> value to include in a future <code>ListRobots</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListRobotsResponse {
  export const filterSensitiveLog = (obj: ListRobotsResponse): any => ({
    ...obj,
  });
}

export interface ListSimulationApplicationsRequest {
  /**
   * <p>Optional list of filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported.  When filtering, you must use the complete
   *         value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Filter[];

  /**
   * <p>When this parameter is used, <code>ListSimulationApplications</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListSimulationApplications</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListSimulationApplications</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   */
  nextToken?: string;

  /**
   * <p>The version qualifier of the simulation application.</p>
   */
  versionQualifier?: string;
}

export namespace ListSimulationApplicationsRequest {
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
   * <p>Information about a simulation software suite.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>Information about a robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

export namespace SimulationApplicationSummary {
  export const filterSensitiveLog = (obj: SimulationApplicationSummary): any => ({
    ...obj,
  });
}

export interface ListSimulationApplicationsResponse {
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListSimulationApplications</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of simulation application summaries that meet the criteria of the request.</p>
   */
  simulationApplicationSummaries?: SimulationApplicationSummary[];
}

export namespace ListSimulationApplicationsResponse {
  export const filterSensitiveLog = (obj: ListSimulationApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListSimulationJobBatchesRequest {
  /**
   * <p>When this parameter is used, <code>ListSimulationJobBatches</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned
   *          <code>nextToken</code> value.
   *       </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListSimulationJobBatches</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   */
  nextToken?: string;

  /**
   * <p>Optional filters to limit results.</p>
   */
  filters?: Filter[];
}

export namespace ListSimulationJobBatchesRequest {
  export const filterSensitiveLog = (obj: ListSimulationJobBatchesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a simulation job batch.</p>
 */
export interface SimulationJobBatchSummary {
  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch.</p>
   */
  arn?: string;

  /**
   * <p>The number of failed simulation job requests.</p>
   */
  failedRequestCount?: number;

  /**
   * <p>The number of pending simulation job requests.</p>
   */
  pendingRequestCount?: number;

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
   *                <p>The simulation job batch failed. One or more simulation job requests could not be completed
   *                 due to an internal failure (like <code>InternalServiceError</code>).
   *                 See <code>failureCode</code> and <code>failureReason</code> for more information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are
   *                no pending simulation job requests in the batch and none of the
   *                failed simulation job requests are due to <code>InternalServiceError</code> and (2)
   *                   when all created simulation jobs have reached a terminal state (for example,
   *                   <code>Completed</code> or <code>Failed</code>).
   *                </p>
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
   *                <p>If a batch timing out, and there are pending requests that
   *                   were failing due to an internal failure (like <code>InternalServiceError</code>),
   *                   the batch status will be <code>Failed</code>. If there are no such failing request,
   *                   the batch status will be <code>TimedOut</code>.
   *                </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The number of created simulation job requests.</p>
   */
  createdRequestCount?: number;
}

export namespace SimulationJobBatchSummary {
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
   * <p>The <code>nextToken</code> value to include in a future <code>ListSimulationJobBatches</code> request.
   *          When the results of a <code>ListSimulationJobBatches</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return.
   *       </p>
   */
  nextToken?: string;
}

export namespace ListSimulationJobBatchesResponse {
  export const filterSensitiveLog = (obj: ListSimulationJobBatchesResponse): any => ({
    ...obj,
  });
}

export interface ListSimulationJobsRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListSimulationJobs</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>When this parameter is used, <code>ListSimulationJobs</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListSimulationJobs</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code>
   *          returns up to 1000 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>simulationApplicationName</code>
   *         and <code>robotApplicationName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>Preparing</code> or the status <code>Running</code>.</p>
   */
  filters?: Filter[];
}

export namespace ListSimulationJobsRequest {
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
   * <p>The <code>nextToken</code> value to include in a future <code>ListSimulationJobs</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListSimulationJobsResponse {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface RegisterRobotRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export namespace RegisterRobotRequest {
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
  export const filterSensitiveLog = (obj: RestartSimulationJobRequest): any => ({
    ...obj,
  });
}

export interface RestartSimulationJobResponse {}

export namespace RestartSimulationJobResponse {
  export const filterSensitiveLog = (obj: RestartSimulationJobResponse): any => ({
    ...obj,
  });
}

export interface StartSimulationJobBatchRequest {
  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job batch.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A list of simulation job requests to create in the batch.</p>
   */
  createSimulationJobRequests: SimulationJobRequest[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;
}

export namespace StartSimulationJobBatchRequest {
  export const filterSensitiveLog = (obj: StartSimulationJobBatchRequest): any => ({
    ...obj,
  });
}

export interface StartSimulationJobBatchResponse {
  /**
   * <p>A list of failed simulation job requests. The request failed to
   *          be created into a simulation job. Failed requests do not
   *          have a simulation job ID.
   *       </p>
   */
  failedRequests?: FailedCreateSimulationJobRequest[];

  /**
   * <p>The reason the simulation job batch failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of pending simulation job requests. These requests have
   *          not yet been created into simulation jobs.</p>
   */
  pendingRequests?: SimulationJobRequest[];

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job batch was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of created simulation job request summaries.</p>
   */
  createdRequests?: SimulationJobSummary[];

  /**
   * <p>The failure code if the simulation job batch failed.</p>
   */
  failureCode?: SimulationJobBatchErrorCode | string;

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
   *                <p>The simulation job batch failed. One or more simulation job requests could not be completed
   *                 due to an internal failure (like <code>InternalServiceError</code>).
   *                 See <code>failureCode</code> and <code>failureReason</code> for more information.</p>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <p>The simulation batch job completed. A batch is complete when (1) there are
   *                no pending simulation job requests in the batch and none of the
   *                failed simulation job requests are due to <code>InternalServiceError</code> and (2)
   *                   when all created simulation jobs have reached a terminal state (for example,
   *                   <code>Completed</code> or <code>Failed</code>).
   *                </p>
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
   *                <p>If a batch timing out, and there are pending requests that
   *                   were failing due to an internal failure (like <code>InternalServiceError</code>),
   *                   the batch status will be <code>Failed</code>. If there are no such failing request,
   *                   the batch status will be <code>TimedOut</code>.
   *                </p>
   *             </dd>
   *             <dt>TimedOut</dt>
   *             <dd>
   *                <p>The simulation batch job timed out.</p>
   *             </dd>
   *          </dl>
   */
  status?: SimulationJobBatchStatus | string;

  /**
   * <p>The Amazon Resource Name (arn) of the batch.</p>
   */
  arn?: string;

  /**
   * <p>The batch policy.</p>
   */
  batchPolicy?: BatchPolicy;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job batch.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartSimulationJobBatchResponse {
  export const filterSensitiveLog = (obj: StartSimulationJobBatchResponse): any => ({
    ...obj,
  });
}

export interface SyncDeploymentJobRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The target fleet for the synchronization.</p>
   */
  fleet: string | undefined;
}

export namespace SyncDeploymentJobRequest {
  export const filterSensitiveLog = (obj: SyncDeploymentJobRequest): any => ({
    ...obj,
  });
}

export interface SyncDeploymentJobResponse {
  /**
   * <p>The status of the synchronization job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The failure reason if the job fails.</p>
   */
  failureReason?: string;

  /**
   * <p>Information about the deployment application configurations.</p>
   */
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

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
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;
}

export namespace SyncDeploymentJobResponse {
  export const filterSensitiveLog = (obj: SyncDeploymentJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   */
  resourceArn: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that will be unattached from the resource.</p>
   */
  tagKeys: string[] | undefined;
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

export interface UpdateRobotApplicationRequest {
  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;
}

export namespace UpdateRobotApplicationRequest {
  export const filterSensitiveLog = (obj: UpdateRobotApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateRobotApplicationResponse {
  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Source[];

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The robot software suite (ROS distribution) used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated robot application.</p>
   */
  arn?: string;
}

export namespace UpdateRobotApplicationResponse {
  export const filterSensitiveLog = (obj: UpdateRobotApplicationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSimulationApplicationRequest {
  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: SourceConfig[] | undefined;

  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;
}

export namespace UpdateSimulationApplicationRequest {
  export const filterSensitiveLog = (obj: UpdateSimulationApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSimulationApplicationResponse {
  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Source[];

  /**
   * <p>The Amazon Resource Name (ARN) of the updated simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>Information about the robot software suite (ROS distribution).</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;
}

export namespace UpdateSimulationApplicationResponse {
  export const filterSensitiveLog = (obj: UpdateSimulationApplicationResponse): any => ({
    ...obj,
  });
}
