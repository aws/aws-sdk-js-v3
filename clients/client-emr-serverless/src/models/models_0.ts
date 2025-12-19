// smithy-typescript generated code
import { ApplicationState, Architecture, JobRunMode, JobRunState } from "./enums";

/**
 * <p>The configuration for an application to automatically start on job submission.</p>
 * @public
 */
export interface AutoStartConfig {
  /**
   * <p>Enables the application to automatically start on job submission. Defaults to true.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The configuration for an application to automatically stop after a certain amount of time being idle.</p>
 * @public
 */
export interface AutoStopConfig {
  /**
   * <p>Enables the application to automatically stop after a certain amount of time being idle. Defaults to true.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The amount of idle time in minutes after which your application will automatically stop. Defaults to 15 minutes.</p>
   * @public
   */
  idleTimeoutMinutes?: number | undefined;
}

/**
 * <p>The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.</p>
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * <p>The ARN of the IAM Identity Center instance.</p>
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the EMR Serverless created IAM Identity Center Application that provides trusted-identity propagation.</p>
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * <p>Enables user background sessions for this application so Livy sessions can continue running after users log out of their interactive notebook or their Identity Center sessions expire.</p>
   * @public
   */
  userBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * <p>The applied image configuration.</p>
 * @public
 */
export interface ImageConfiguration {
  /**
   * <p>The image URI.</p>
   * @public
   */
  imageUri: string | undefined;

  /**
   * <p>The SHA256 digest of the image URI. This indicates which specific image the application is configured for. The image digest doesn't exist until an application has started.</p>
   * @public
   */
  resolvedImageDigest?: string | undefined;
}

/**
 * <p>The cumulative configuration requirements for every worker instance of the worker type.</p>
 * @public
 */
export interface WorkerResourceConfig {
  /**
   * <p>The CPU requirements for every worker instance of the worker type.</p>
   * @public
   */
  cpu: string | undefined;

  /**
   * <p>The memory requirements for every worker instance of the worker type.</p>
   * @public
   */
  memory: string | undefined;

  /**
   * <p>The disk requirements for every worker instance of the worker type.</p>
   * @public
   */
  disk?: string | undefined;

  /**
   * <p>The disk type for every worker instance of the work type. Shuffle optimized disks have higher performance characteristics and are better for shuffle heavy workloads. Default is <code>STANDARD</code>.</p>
   * @public
   */
  diskType?: string | undefined;
}

/**
 * <p>The initial capacity configuration per worker.</p>
 * @public
 */
export interface InitialCapacityConfig {
  /**
   * <p>The number of workers in the initial capacity configuration.</p>
   * @public
   */
  workerCount: number | undefined;

  /**
   * <p>The resource configuration of the initial capacity configuration.</p>
   * @public
   */
  workerConfiguration?: WorkerResourceConfig | undefined;
}

/**
 * <p>The configuration to use to enable the different types of interactive use cases in an application.</p>
 * @public
 */
export interface InteractiveConfiguration {
  /**
   * <p>Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.</p>
   * @public
   */
  studioEnabled?: boolean | undefined;

  /**
   * <p>Enables an Apache Livy endpoint that you can connect to and run interactive jobs.</p>
   * @public
   */
  livyEndpointEnabled?: boolean | undefined;
}

/**
 * <p>The configuration object that enables job level cost allocation.</p>
 * @public
 */
export interface JobLevelCostAllocationConfiguration {
  /**
   * <p>Enables job level cost allocation for the application.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.</p>
 * @public
 */
export interface MaximumAllowedResources {
  /**
   * <p>The maximum allowed CPU for an application.</p>
   * @public
   */
  cpu: string | undefined;

  /**
   * <p>The maximum allowed resources for an application.</p>
   * @public
   */
  memory: string | undefined;

  /**
   * <p>The maximum allowed disk for an application.</p>
   * @public
   */
  disk?: string | undefined;
}

/**
 * <p>The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.</p>
 * @public
 */
export interface CloudWatchLoggingConfiguration {
  /**
   * <p>Enables CloudWatch logging.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Prefix for the CloudWatch log stream name.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * <p>The Key Management Service (KMS) key ARN to encrypt the logs that you store in CloudWatch Logs.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The types of logs that you want to publish to CloudWatch. If you don't specify any log types, driver STDOUT and STDERR logs will be published to CloudWatch Logs by default. For more information including the supported worker types for Hive and Spark, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/logging.html#jobs-log-storage-cw">Logging for EMR Serverless with CloudWatch</a>.</p> <ul> <li> <p> <b>Key Valid Values</b>: <code>SPARK_DRIVER</code>, <code>SPARK_EXECUTOR</code>, <code>HIVE_DRIVER</code>, <code>TEZ_TASK</code> </p> </li> <li> <p> <b>Array Members Valid Values</b>: <code>STDOUT</code>, <code>STDERR</code>, <code>HIVE_LOG</code>, <code>TEZ_AM</code>, <code>SYSTEM_LOGS</code> </p> </li> </ul>
   * @public
   */
  logTypes?: Record<string, string[]> | undefined;
}

/**
 * <p>The managed log persistence configuration for a job run.</p>
 * @public
 */
export interface ManagedPersistenceMonitoringConfiguration {
  /**
   * <p>Enables managed logging and defaults to true. If set to false, managed logging will be turned off.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The KMS key ARN to encrypt the logs stored in managed log persistence.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * <p>The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.</p>
 * @public
 */
export interface PrometheusMonitoringConfiguration {
  /**
   * <p>The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  remoteWriteUrl?: string | undefined;
}

/**
 * <p>The Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.</p>
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>The Amazon S3 destination URI for log publishing.</p>
   * @public
   */
  logUri?: string | undefined;

  /**
   * <p>The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * <p>The configuration setting for monitoring.</p>
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * <p>The Amazon S3 configuration for monitoring log publishing.</p>
   * @public
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration | undefined;

  /**
   * <p>The managed log persistence configuration for a job run.</p>
   * @public
   */
  managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.</p>
   * @public
   */
  cloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration | undefined;

  /**
   * <p>The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.</p>
   * @public
   */
  prometheusMonitoringConfiguration?: PrometheusMonitoringConfiguration | undefined;
}

/**
 * <p>The network configuration for customer VPC connectivity.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>The array of subnet Ids for customer VPC connectivity.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The array of security group Ids for customer VPC connectivity.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * <p>The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.</p>
 * @public
 */
export interface SchedulerConfiguration {
  /**
   * <p>The maximum duration in minutes for the job in QUEUED state. If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720.</p>
   * @public
   */
  queueTimeoutMinutes?: number | undefined;

  /**
   * <p>The maximum concurrent job runs on this application. If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000.</p>
   * @public
   */
  maxConcurrentRuns?: number | undefined;
}

/**
 * <p>The specifications for a worker type.</p>
 * @public
 */
export interface WorkerTypeSpecification {
  /**
   * <p>The image configuration for a worker type.</p>
   * @public
   */
  imageConfiguration?: ImageConfiguration | undefined;
}

/**
 * <p>The summary of attributes associated with an application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * <p>The state details of the application.</p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p>The date and time when the application was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture | undefined;
}

/**
 * <p>The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.</p>
 * @public
 */
export interface IdentityCenterConfigurationInput {
  /**
   * <p>The ARN of the IAM Identity Center instance.</p>
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * <p>Enables user background sessions for this application so Livy sessions can continue running after users log out of their interactive notebook or their Identity Center sessions expire.</p>
   * @public
   */
  userBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * <p>The image configuration.</p>
 * @public
 */
export interface ImageConfigurationInput {
  /**
   * <p>The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.</p>
   * @public
   */
  imageUri?: string | undefined;
}

/**
 * <p>The specifications for a worker type.</p>
 * @public
 */
export interface WorkerTypeSpecificationInput {
  /**
   * <p>The image configuration for a worker type.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The output contains the application ID.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The output contains the ARN of the application.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application that will be deleted.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The ID of the application that will be described.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The token for the next set of application results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of applications that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.</p>
   * @public
   */
  states?: ApplicationState[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The output lists the specified applications.</p>
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of application results. This is required for pagination and is available as a response of the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * <p>The ID of the application to start.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationResponse {}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * <p>The ID of the application to stop.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationResponse {}

/**
 * @public
 */
export interface CancelJobRunRequest {
  /**
   * <p>The ID of the application on which the job run will be canceled.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run to cancel.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>The duration in seconds to wait before forcefully terminating the job after cancellation is requested.</p>
   * @public
   */
  shutdownGracePeriodInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CancelJobRunResponse {
  /**
   * <p>The output contains the application ID on which the job run is cancelled.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the cancelled job run.</p>
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.</p>
   * @public
   */
  attempt?: number | undefined;

  /**
   * <p>Allows access to system profile logs for Lake Formation-enabled jobs. Default is false.</p>
   * @public
   */
  accessSystemProfileLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunResponse {
  /**
   * <p>The URL to view job run's dashboard.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * <p>The ID of the application on which the job run is submitted.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.</p>
   * @public
   */
  attempt?: number | undefined;
}

/**
 * <p>The resource utilization for memory, storage, and vCPU for jobs.</p>
 * @public
 */
export interface ResourceUtilization {
  /**
   * <p>The aggregated vCPU used per hour from the time the job starts executing until the job is terminated.</p>
   * @public
   */
  vCPUHour?: number | undefined;

  /**
   * <p>The aggregated memory used per hour from the time the job starts executing until the job is terminated.</p>
   * @public
   */
  memoryGBHour?: number | undefined;

  /**
   * <p>The aggregated storage used per hour from the time the job starts executing until the job is terminated.</p>
   * @public
   */
  storageGBHour?: number | undefined;
}

/**
 * <p>Optional IAM policy. The resulting job IAM role permissions will be an intersection of the policies passed and the policy associated with your job execution role.</p>
 * @public
 */
export interface JobRunExecutionIamPolicy {
  /**
   * <p>An IAM inline policy to use as an execution IAM policy.</p>
   * @public
   */
  policy?: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARNs) to use as an execution IAM policy.</p>
   * @public
   */
  policyArns?: string[] | undefined;
}

/**
 * <p>The configurations for the Hive job driver.</p>
 * @public
 */
export interface Hive {
  /**
   * <p>The query for the Hive job run.</p>
   * @public
   */
  query: string | undefined;

  /**
   * <p>The query file for the Hive job run.</p>
   * @public
   */
  initQueryFile?: string | undefined;

  /**
   * <p>The parameters for the Hive job run.</p>
   * @public
   */
  parameters?: string | undefined;
}

/**
 * <p>The configurations for the Spark submit job driver.</p>
 * @public
 */
export interface SparkSubmit {
  /**
   * <p>The entry point for the Spark submit job run.</p>
   * @public
   */
  entryPoint: string | undefined;

  /**
   * <p>The arguments for the Spark submit job run.</p>
   * @public
   */
  entryPointArguments?: string[] | undefined;

  /**
   * <p>The parameters for the Spark submit job run.</p>
   * @public
   */
  sparkSubmitParameters?: string | undefined;
}

/**
 * <p>The driver that the job runs on.</p>
 * @public
 */
export type JobDriver = JobDriver.HiveMember | JobDriver.SparkSubmitMember | JobDriver.$UnknownMember;

/**
 * @public
 */
export namespace JobDriver {
  /**
   * <p>The job driver parameters specified for Spark.</p>
   * @public
   */
  export interface SparkSubmitMember {
    sparkSubmit: SparkSubmit;
    hive?: never;
    $unknown?: never;
  }

  /**
   * <p>The job driver parameters specified for Hive.</p>
   * @public
   */
  export interface HiveMember {
    sparkSubmit?: never;
    hive: Hive;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sparkSubmit?: never;
    hive?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sparkSubmit: (value: SparkSubmit) => T;
    hive: (value: Hive) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The retry policy to use for a job run.</p>
 * @public
 */
export interface RetryPolicy {
  /**
   * <p>Maximum number of attempts for the job run. This parameter is only applicable for <code>BATCH</code> mode.</p>
   * @public
   */
  maxAttempts?: number | undefined;

  /**
   * <p>Maximum number of failed attempts per hour. This [arameter is only applicable for <code>STREAMING</code> mode.</p>
   * @public
   */
  maxFailedAttemptsPerHour?: number | undefined;
}

/**
 * <p>The aggregate vCPU, memory, and storage resources used from the time job start executing till the time job is terminated, rounded up to the nearest second.</p>
 * @public
 */
export interface TotalResourceUtilization {
  /**
   * <p>The aggregated vCPU used per hour from the time job start executing till the time job is terminated.</p>
   * @public
   */
  vCPUHour?: number | undefined;

  /**
   * <p>The aggregated memory used per hour from the time job start executing till the time job is terminated.</p>
   * @public
   */
  memoryGBHour?: number | undefined;

  /**
   * <p>The aggregated storage used per hour from the time job start executing till the time job is terminated.</p>
   * @public
   */
  storageGBHour?: number | undefined;
}

/**
 * @public
 */
export interface ListJobRunAttemptsRequest {
  /**
   * <p>The ID of the application for which to list job runs.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run to list.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>The token for the next set of job run attempt results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of job run attempts to list.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of attributes associated with a job run attempt.</p>
 * @public
 */
export interface JobRunAttemptSummary {
  /**
   * <p>The ID of the application the job is running on.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run attempt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the job run attempt.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The mode of the job run attempt.</p>
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time of when the job run was created.</p>
   * @public
   */
  jobCreatedAt: Date | undefined;

  /**
   * <p>The date and time when the job run attempt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time of when the job run attempt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role of the job run..</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run attempt.</p>
   * @public
   */
  state: JobRunState | undefined;

  /**
   * <p>The state details of the job run attempt.</p>
   * @public
   */
  stateDetails: string | undefined;

  /**
   * <p>The Amazon EMR release label of the job run attempt.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of the job run, such as Spark or Hive.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The attempt number of the job run execution.</p>
   * @public
   */
  attempt?: number | undefined;
}

/**
 * @public
 */
export interface ListJobRunAttemptsResponse {
  /**
   * <p>The array of the listed job run attempt objects.</p>
   * @public
   */
  jobRunAttempts: JobRunAttemptSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of application results. This is required for pagination and is available as a response of the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * <p>The ID of the application for which to list the job run.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The token for the next set of job run results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of job runs that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The lower bound of the option to filter by creation date and time.</p>
   * @public
   */
  createdAtAfter?: Date | undefined;

  /**
   * <p>The upper bound of the option to filter by creation date and time.</p>
   * @public
   */
  createdAtBefore?: Date | undefined;

  /**
   * <p>An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.</p>
   * @public
   */
  states?: JobRunState[] | undefined;

  /**
   * <p>The mode of the job runs to list.</p>
   * @public
   */
  mode?: JobRunMode | undefined;
}

/**
 * <p>The summary of attributes associated with a job run.</p>
 * @public
 */
export interface JobRunSummary {
  /**
   * <p>The ID of the application the job is running on.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The mode of the job run.</p>
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * <p>The ARN of the job run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run.</p>
   * @public
   */
  state: JobRunState | undefined;

  /**
   * <p>The state details of the job run.</p>
   * @public
   */
  stateDetails: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application your job is running on.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of job run, such as Spark or Hive.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The attempt number of the job run execution.</p>
   * @public
   */
  attempt?: number | undefined;

  /**
   * <p>The date and time of when the job run attempt was created.</p>
   * @public
   */
  attemptCreatedAt?: Date | undefined;

  /**
   * <p>The date and time of when the job run attempt was last updated.</p>
   * @public
   */
  attemptUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * <p>The output lists information about the specified job runs.</p>
   * @public
   */
  jobRuns: JobRunSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of job run results. This is required for pagination and is available as a response of the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>This output displays the application ID on which the job run was submitted.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the started job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>This output displays the ARN of the job run..</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
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
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   * @public
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   * @public
   */
  configurations?: Configuration[] | undefined;
}

/**
 * <p>Information about an application. Amazon EMR Serverless uses applications to run jobs.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * <p>The state details of the application.</p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p>The initial capacity of the application.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * <p>The maximum capacity of the application. This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * <p>The date and time when the application run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application run was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags assigned to the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * <p>The network configuration for customer VPC connectivity for the application.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The image configuration applied to all worker types.</p>
   * @public
   */
  imageConfiguration?: ImageConfiguration | undefined;

  /**
   * <p>The specification applied to each worker type.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification> | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a> specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html">GetApplication</a> API operation.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * <p>The interactive configuration object that enables the interactive use cases for an application.</p>
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * <p>The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.</p>
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * <p>The IAM Identity Center configuration applied to enable trusted identity propagation.</p>
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * <p>The configuration object that enables job level cost allocation.</p>
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * <p>The override configurations for the application.</p>
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * <p>The override configurations for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application you want to start, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The client idempotency token of the application to create. Its value must be unique for each request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The capacity to initialize when the application is created.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * <p>The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * <p>The tags assigned to the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The image configuration for all worker types. You can either set this parameter or <code>imageConfiguration</code> for each worker type in <code>workerTypeSpecifications</code>.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;

  /**
   * <p>The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput> | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a> specifications to use when creating an application. Each configuration consists of a classification and properties. This configuration is applied to all the job runs submitted under the application.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * <p>The interactive configuration object that enables the interactive use cases to use when running an application.</p>
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * <p>The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.</p>
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * <p>The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.</p>
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfigurationInput | undefined;

  /**
   * <p>The configuration object that enables job level cost allocation.</p>
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The ID of the application to update.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the application to update. Its value must be unique for each request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The capacity to initialize when the application is updated.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * <p>The maximum capacity to allocate when the application is updated. This is cumulative across all workers at any given point in time during the lifespan of the application. No new resources will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>The image configuration to be used for all worker types. You can either set this parameter or <code>imageConfiguration</code> for each worker type in <code>WorkerTypeSpecificationInput</code>.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;

  /**
   * <p>The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput> | undefined;

  /**
   * <p>The interactive configuration object that contains new interactive use cases when the application is updated.</p>
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * <p>The Amazon EMR release label for the application. You can change the release label to use a different release of Amazon EMR.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a> specifications to use when updating an application. Each configuration consists of a classification and properties. This configuration is applied across all the job runs submitted under the application.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * <p>The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.</p>
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * <p>Specifies the IAM Identity Center configuration used to enable or disable trusted identity propagation. When provided, this configuration determines how the application interacts with IAM Identity Center for user authentication and access control.</p>
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfigurationInput | undefined;

  /**
   * <p>The configuration object that enables job level cost allocation.</p>
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The output displays information about the specified application.</p>
   * @public
   */
  application: Application | undefined;
}

/**
 * <p>Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive query, or SparkSQL query, that you submit to an Amazon EMR Serverless application.</p>
 * @public
 */
export interface JobRun {
  /**
   * <p>The ID of the application the job is running on.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>Optional IAM policy. The resulting job IAM role permissions will be an intersection of the policies passed and the policy associated with your job execution role.</p>
   * @public
   */
  executionIamPolicy?: JobRunExecutionIamPolicy | undefined;

  /**
   * <p>The state of the job run.</p>
   * @public
   */
  state: JobRunState | undefined;

  /**
   * <p>The state details of the job run.</p>
   * @public
   */
  stateDetails: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application your job is running on.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The configuration settings that are used to override default configuration.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>The job driver for the job run.</p>
   * @public
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The tags assigned to the job run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The aggregate vCPU, memory, and storage resources used from the time the job starts to execute, until the time the job terminates, rounded up to the nearest second.</p>
   * @public
   */
  totalResourceUtilization?: TotalResourceUtilization | undefined;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The job run total execution duration in seconds. This field is only available for job runs in a <code>COMPLETED</code>, <code>FAILED</code>, or <code>CANCELLED</code> state.</p>
   * @public
   */
  totalExecutionDurationSeconds?: number | undefined;

  /**
   * <p>Returns the job run timeout value from the <code>StartJobRun</code> call. If no timeout was specified, then it returns the default timeout of 720 minutes.</p>
   * @public
   */
  executionTimeoutMinutes?: number | undefined;

  /**
   * <p>The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the job run. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. Note that billed resources do not include usage for idle pre-initialized workers.</p>
   * @public
   */
  billedResourceUtilization?: ResourceUtilization | undefined;

  /**
   * <p>The mode of the job run.</p>
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * <p>The retry policy of the job run.</p>
   * @public
   */
  retryPolicy?: RetryPolicy | undefined;

  /**
   * <p>The attempt of the job run.</p>
   * @public
   */
  attempt?: number | undefined;

  /**
   * <p>The date and time of when the job run attempt was created.</p>
   * @public
   */
  attemptCreatedAt?: Date | undefined;

  /**
   * <p>The date and time of when the job run attempt was last updated.</p>
   * @public
   */
  attemptUpdatedAt?: Date | undefined;

  /**
   * <p>The date and time when the job moved to the RUNNING state.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time when the job was terminated.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The total time for a job in the QUEUED state in milliseconds.</p>
   * @public
   */
  queuedDurationMilliseconds?: number | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The ID of the application on which to run the job.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the job run to start. Its value must be unique for each request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The execution role ARN for the job run.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>You can pass an optional IAM policy. The resulting job IAM role permissions will be an intersection of this policy and the policy associated with your job execution role.</p>
   * @public
   */
  executionIamPolicy?: JobRunExecutionIamPolicy | undefined;

  /**
   * <p>The job driver for the job run.</p>
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * <p>The configuration overrides for the job run.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>The tags assigned to the job run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The maximum duration for the job run to run. If the job run runs beyond this duration, it will be automatically cancelled.</p>
   * @public
   */
  executionTimeoutMinutes?: number | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The mode of the job run when it starts.</p>
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * <p>The retry policy when job run starts.</p>
   * @public
   */
  retryPolicy?: RetryPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>Information about the updated application.</p>
   * @public
   */
  application: Application | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * <p>The output displays information about the job run.</p>
   * @public
   */
  jobRun: JobRun | undefined;
}
