// smithy-typescript generated code
import type { ApplicationState, Architecture, JobRunMode, JobRunState, ResourceType, SessionState } from "./enums";

/**
 * The configuration for an application to automatically start on job submission.
 *
 * @public
 */
export interface AutoStartConfig {
  /**
   * Enables the application to automatically start on job submission. Defaults to true.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * The configuration for an application to automatically stop after a certain amount of time being idle.
 *
 * @public
 */
export interface AutoStopConfig {
  /**
   * Enables the application to automatically stop after a certain amount of time being idle. Defaults to true.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The amount of idle time in minutes after which your application will automatically stop. Defaults to 15 minutes.
   *
   * @public
   */
  idleTimeoutMinutes?: number | undefined;
}

/**
 * The configuration object that allows encrypting local disks.
 *
 * @public
 */
export interface DiskEncryptionConfiguration {
  /**
   * Specifies the optional encryption context that will be used when encrypting the data. An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data.
   *
   * @public
   */
  encryptionContext?: Record<string, string> | undefined;

  /**
   * The KMS key ARN to encrypt local disks.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.
 *
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * The ARN of the IAM Identity Center instance.
   *
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * The ARN of the EMR Serverless created IAM Identity Center Application that provides trusted-identity propagation.
   *
   * @public
   */
  identityCenterApplicationArn?: string | undefined;

  /**
   * Enables user background sessions for this application so Livy sessions can continue running after users log out of their interactive notebook or their Identity Center sessions expire.
   *
   * @public
   */
  userBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * The applied image configuration.
 *
 * @public
 */
export interface ImageConfiguration {
  /**
   * The image URI.
   *
   * @public
   */
  imageUri: string | undefined;

  /**
   * The SHA256 digest of the image URI. This indicates which specific image the application is configured for. The image digest doesn't exist until an application has started.
   *
   * @public
   */
  resolvedImageDigest?: string | undefined;

  /**
   * Boolean value indicating if the digest resolution is application level or workload level. If true, a custom image URI is resolved at application start time and all workloads submitted will use that image digest. If false, the custom image URI is resolved at the workload submission time.
   *
   * @public
   */
  applicationLevelDigestResolution?: boolean | undefined;
}

/**
 * The cumulative configuration requirements for every worker instance of the worker type.
 *
 * @public
 */
export interface WorkerResourceConfig {
  /**
   * The CPU requirements for every worker instance of the worker type.
   *
   * @public
   */
  cpu: string | undefined;

  /**
   * The memory requirements for every worker instance of the worker type.
   *
   * @public
   */
  memory: string | undefined;

  /**
   * The disk requirements for every worker instance of the worker type.
   *
   * @public
   */
  disk?: string | undefined;

  /**
   * The disk type for every worker instance of the work type. Shuffle optimized disks have higher performance characteristics and are better for shuffle heavy workloads. Default is `STANDARD`.
   *
   * @public
   */
  diskType?: string | undefined;
}

/**
 * The initial capacity configuration per worker.
 *
 * @public
 */
export interface InitialCapacityConfig {
  /**
   * The number of workers in the initial capacity configuration.
   *
   * @public
   */
  workerCount: number | undefined;

  /**
   * The resource configuration of the initial capacity configuration.
   *
   * @public
   */
  workerConfiguration?: WorkerResourceConfig | undefined;
}

/**
 * The configuration to use to enable the different types of interactive use cases in an application.
 *
 * @public
 */
export interface InteractiveConfiguration {
  /**
   * Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.
   *
   * @public
   */
  studioEnabled?: boolean | undefined;

  /**
   * Enables an Apache Livy endpoint that you can connect to and run interactive jobs.
   *
   * @public
   */
  livyEndpointEnabled?: boolean | undefined;

  /**
   * Enables interactive sessions on the application. When set to `true`, you can start interactive sessions using the `StartSession` operation.
   *
   * @public
   */
  sessionEnabled?: boolean | undefined;
}

/**
 * The configuration object that enables job level cost allocation.
 *
 * @public
 */
export interface JobLevelCostAllocationConfiguration {
  /**
   * Enables job level cost allocation for the application.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 *
 * @public
 */
export interface MaximumAllowedResources {
  /**
   * The maximum allowed CPU for an application.
   *
   * @public
   */
  cpu: string | undefined;

  /**
   * The maximum allowed resources for an application.
   *
   * @public
   */
  memory: string | undefined;

  /**
   * The maximum allowed disk for an application.
   *
   * @public
   */
  disk?: string | undefined;
}

/**
 * The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.
 *
 * @public
 */
export interface CloudWatchLoggingConfiguration {
  /**
   * Enables CloudWatch logging.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Prefix for the CloudWatch log stream name.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * The Key Management Service (KMS) key ARN to encrypt the logs that you store in CloudWatch Logs.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The types of logs that you want to publish to CloudWatch. If you don't specify any log types, driver STDOUT and STDERR logs will be published to CloudWatch Logs by default. For more information including the supported worker types for Hive and Spark, see [Logging for EMR Serverless with CloudWatch](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/logging.html#jobs-log-storage-cw).
   *
   * - **Key Valid Values**: `SPARK_DRIVER`, `SPARK_EXECUTOR`, `HIVE_DRIVER`, `TEZ_TASK`
   * - **Array Members Valid Values**: `STDOUT`, `STDERR`, `HIVE_LOG`, `TEZ_AM`, `SYSTEM_LOGS`
   *
   * @public
   */
  logTypes?: Record<string, string[]> | undefined;
}

/**
 * The managed log persistence configuration for a job run.
 *
 * @public
 */
export interface ManagedPersistenceMonitoringConfiguration {
  /**
   * Enables managed logging and defaults to true. If set to false, managed logging will be turned off.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The KMS key ARN to encrypt the logs stored in managed log persistence.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.
 *
 * @public
 */
export interface PrometheusMonitoringConfiguration {
  /**
   * The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.
   *
   * @public
   */
  remoteWriteUrl?: string | undefined;
}

/**
 * The Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
 *
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * The Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  logUri?: string | undefined;

  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * The configuration setting for monitoring.
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * The Amazon S3 configuration for monitoring log publishing.
   *
   * @public
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration | undefined;

  /**
   * The managed log persistence configuration for a job run.
   *
   * @public
   */
  managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration | undefined;

  /**
   * The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.
   *
   * @public
   */
  cloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration | undefined;

  /**
   * The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.
   *
   * @public
   */
  prometheusMonitoringConfiguration?: PrometheusMonitoringConfiguration | undefined;
}

/**
 * The network configuration for customer VPC connectivity.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * The array of subnet Ids for customer VPC connectivity.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The array of security group Ids for customer VPC connectivity.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
 *
 * @public
 */
export interface SchedulerConfiguration {
  /**
   * The maximum duration in minutes for the job in QUEUED state. If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720.
   *
   * @public
   */
  queueTimeoutMinutes?: number | undefined;

  /**
   * The maximum concurrent job runs on this application. If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000.
   *
   * @public
   */
  maxConcurrentRuns?: number | undefined;
}

/**
 * The specifications for a worker type.
 *
 * @public
 */
export interface WorkerTypeSpecification {
  /**
   * The image configuration for a worker type.
   *
   * @public
   */
  imageConfiguration?: ImageConfiguration | undefined;
}

/**
 * The summary of attributes associated with an application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The ID of the application.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon EMR release associated with the application.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The type of application, such as Spark or Hive.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The state of the application.
   *
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * The state details of the application.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The date and time when the application was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the application was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The CPU architecture of an application.
   *
   * @public
   */
  architecture?: Architecture | undefined;
}

/**
 * The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.
 *
 * @public
 */
export interface IdentityCenterConfigurationInput {
  /**
   * The ARN of the IAM Identity Center instance.
   *
   * @public
   */
  identityCenterInstanceArn?: string | undefined;

  /**
   * Enables user background sessions for this application so Livy sessions can continue running after users log out of their interactive notebook or their Identity Center sessions expire.
   *
   * @public
   */
  userBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * The image configuration.
 *
 * @public
 */
export interface ImageConfigurationInput {
  /**
   * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
   *
   * @public
   */
  imageUri?: string | undefined;

  /**
   * Boolean value indicating if the digest resolution is application level or workload level. If true, a custom image URI is resolved at application start time and all workloads submitted will use that image digest. If false, the custom image URI is resolved at the workload submission time.
   *
   * @public
   */
  applicationLevelDigestResolution?: boolean | undefined;
}

/**
 * The specifications for a worker type.
 *
 * @public
 */
export interface WorkerTypeSpecificationInput {
  /**
   * The image configuration for a worker type.
   *
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The output contains the application ID.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the name of the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The output contains the ARN of the application.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The ID of the application that will be deleted.
   *
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
   * The ID of the application that will be described.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDashboardRequest {
  /**
   * The ID of the application that the resource belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of resource to access the dashboard for. Currently, only `Session` is supported.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * Allows access to system profile logs for Lake Formation-enabled sessions. Default is false.
   *
   * @public
   */
  accessSystemProfileLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetResourceDashboardResponse {
  /**
   * A URL to the resource dashboard. For an active resource, this URL opens the live application UI. For a terminated resource, this URL opens the persistent application UI. This value is not included in the response if the URL is not available.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The token for the next set of application results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of applications that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
   *
   * @public
   */
  states?: ApplicationState[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The output lists the specified applications.
   *
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * The output displays the token for the next set of application results. This is required for pagination and is available as a response of the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * The ID of the application to start.
   *
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
   * The ID of the application to stop.
   *
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
   * The ID of the application on which the job run will be canceled.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run to cancel.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * The duration in seconds to wait before forcefully terminating the job after cancellation is requested.
   *
   * @public
   */
  shutdownGracePeriodInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CancelJobRunResponse {
  /**
   * The output contains the application ID on which the job run is cancelled.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the ID of the cancelled job run.
   *
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunRequest {
  /**
   * The ID of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.
   *
   * @public
   */
  attempt?: number | undefined;

  /**
   * Allows access to system profile logs for Lake Formation-enabled jobs. Default is false.
   *
   * @public
   */
  accessSystemProfileLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunResponse {
  /**
   * The URL to view job run's dashboard.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * The ID of the application on which the job run is submitted.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.
   *
   * @public
   */
  attempt?: number | undefined;
}

/**
 * The resource utilization for memory, storage, and vCPU for jobs.
 *
 * @public
 */
export interface ResourceUtilization {
  /**
   * The aggregated vCPU used per hour from the time the job starts executing until the job is terminated.
   *
   * @public
   */
  vCPUHour?: number | undefined;

  /**
   * The aggregated memory used per hour from the time the job starts executing until the job is terminated.
   *
   * @public
   */
  memoryGBHour?: number | undefined;

  /**
   * The aggregated storage used per hour from the time the job starts executing until the job is terminated.
   *
   * @public
   */
  storageGBHour?: number | undefined;
}

/**
 * Optional IAM policy. The resulting job IAM role permissions will be an intersection of the policies passed and the policy associated with your job execution role.
 *
 * @public
 */
export interface JobRunExecutionIamPolicy {
  /**
   * An IAM inline policy to use as an execution IAM policy.
   *
   * @public
   */
  policy?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) to use as an execution IAM policy.
   *
   * @public
   */
  policyArns?: string[] | undefined;
}

/**
 * The configurations for the Hive job driver.
 *
 * @public
 */
export interface Hive {
  /**
   * The query for the Hive job run.
   *
   * @public
   */
  query: string | undefined;

  /**
   * The query file for the Hive job run.
   *
   * @public
   */
  initQueryFile?: string | undefined;

  /**
   * The parameters for the Hive job run.
   *
   * @public
   */
  parameters?: string | undefined;
}

/**
 * The configurations for the Spark submit job driver.
 *
 * @public
 */
export interface SparkSubmit {
  /**
   * The entry point for the Spark submit job run.
   *
   * @public
   */
  entryPoint: string | undefined;

  /**
   * The arguments for the Spark submit job run.
   *
   * @public
   */
  entryPointArguments?: string[] | undefined;

  /**
   * The parameters for the Spark submit job run.
   *
   * @public
   */
  sparkSubmitParameters?: string | undefined;
}

/**
 * The driver that the job runs on.
 *
 * @public
 */
export type JobDriver =
  | JobDriver.HiveMember
  | JobDriver.SparkSubmitMember
  | JobDriver.$UnknownMember;

/**
 * @public
 */
export namespace JobDriver {
  /**
   * The job driver parameters specified for Spark.
   *
   * @public
   */
  export interface SparkSubmitMember {
    sparkSubmit: SparkSubmit;
    hive?: never;
    $unknown?: never;
  }

  /**
   * The job driver parameters specified for Hive.
   *
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
 * The retry policy to use for a job run.
 *
 * @public
 */
export interface RetryPolicy {
  /**
   * Maximum number of attempts for the job run. This parameter is only applicable for `BATCH` mode.
   *
   * @public
   */
  maxAttempts?: number | undefined;

  /**
   * Maximum number of failed attempts per hour. This [arameter is only applicable for `STREAMING` mode.
   *
   * @public
   */
  maxFailedAttemptsPerHour?: number | undefined;
}

/**
 * The aggregate vCPU, memory, and storage resources used from the time job start executing till the time job is terminated, rounded up to the nearest second.
 *
 * @public
 */
export interface TotalResourceUtilization {
  /**
   * The aggregated vCPU used per hour from the time job start executing till the time job is terminated.
   *
   * @public
   */
  vCPUHour?: number | undefined;

  /**
   * The aggregated memory used per hour from the time job start executing till the time job is terminated.
   *
   * @public
   */
  memoryGBHour?: number | undefined;

  /**
   * The aggregated storage used per hour from the time job start executing till the time job is terminated.
   *
   * @public
   */
  storageGBHour?: number | undefined;
}

/**
 * @public
 */
export interface ListJobRunAttemptsRequest {
  /**
   * The ID of the application for which to list job runs.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run to list.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * The token for the next set of job run attempt results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of job run attempts to list.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of attributes associated with a job run attempt.
 *
 * @public
 */
export interface JobRunAttemptSummary {
  /**
   * The ID of the application the job is running on.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run attempt.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the job run attempt.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The mode of the job run attempt.
   *
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job run.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time of when the job run was created.
   *
   * @public
   */
  jobCreatedAt: Date | undefined;

  /**
   * The date and time when the job run attempt was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time of when the job run attempt was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role of the job run..
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The state of the job run attempt.
   *
   * @public
   */
  state: JobRunState | undefined;

  /**
   * The state details of the job run attempt.
   *
   * @public
   */
  stateDetails: string | undefined;

  /**
   * The Amazon EMR release label of the job run attempt.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The type of the job run, such as Spark or Hive.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The attempt number of the job run execution.
   *
   * @public
   */
  attempt?: number | undefined;
}

/**
 * @public
 */
export interface ListJobRunAttemptsResponse {
  /**
   * The array of the listed job run attempt objects.
   *
   * @public
   */
  jobRunAttempts: JobRunAttemptSummary[] | undefined;

  /**
   * The output displays the token for the next set of application results. This is required for pagination and is available as a response of the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * The ID of the application for which to list the job run.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The token for the next set of job run results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of job runs that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The lower bound of the option to filter by creation date and time.
   *
   * @public
   */
  createdAtAfter?: Date | undefined;

  /**
   * The upper bound of the option to filter by creation date and time.
   *
   * @public
   */
  createdAtBefore?: Date | undefined;

  /**
   * An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
   *
   * @public
   */
  states?: JobRunState[] | undefined;

  /**
   * The mode of the job runs to list.
   *
   * @public
   */
  mode?: JobRunMode | undefined;
}

/**
 * The summary of attributes associated with a job run.
 *
 * @public
 */
export interface JobRunSummary {
  /**
   * The ID of the application the job is running on.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The optional job run name. This doesn't have to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The mode of the job run.
   *
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * The ARN of the job run.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time when the job run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the job run was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The execution role ARN of the job run.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The state of the job run.
   *
   * @public
   */
  state: JobRunState | undefined;

  /**
   * The state details of the job run.
   *
   * @public
   */
  stateDetails: string | undefined;

  /**
   * The Amazon EMR release associated with the application your job is running on.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The type of job run, such as Spark or Hive.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The attempt number of the job run execution.
   *
   * @public
   */
  attempt?: number | undefined;

  /**
   * The date and time of when the job run attempt was created.
   *
   * @public
   */
  attemptCreatedAt?: Date | undefined;

  /**
   * The date and time of when the job run attempt was last updated.
   *
   * @public
   */
  attemptUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * The output lists information about the specified job runs.
   *
   * @public
   */
  jobRuns: JobRunSummary[] | undefined;

  /**
   * The output displays the token for the next set of job run results. This is required for pagination and is available as a response of the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * This output displays the application ID on which the job run was submitted.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the ID of the started job run.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * This output displays the ARN of the job run..
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The ID of the application that the session belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointRequest {
  /**
   * The ID of the application that the session belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointResponse {
  /**
   * The output contains the ID of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The endpoint URL for connecting to the session.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The authentication token for connecting to the session endpoint. Call `GetSessionEndpoint` again to obtain a new token before it expires.
   *
   * @public
   */
  authToken: string | undefined;

  /**
   * The expiration time of the authentication token.
   *
   * @public
   */
  authTokenExpiresAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * The ID of the application to list sessions for.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The token for the next set of session results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of sessions to return in each page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional filter for session states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
   *
   * @public
   */
  states?: SessionState[] | undefined;

  /**
   * The lower bound of the option to filter by creation date and time.
   *
   * @public
   */
  createdAtAfter?: Date | undefined;

  /**
   * The upper bound of the option to filter by creation date and time.
   *
   * @public
   */
  createdAtBefore?: Date | undefined;
}

/**
 * The summary of attributes associated with a session.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The ID of the application that the session belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The optional name of the session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The state of the session.
   *
   * @public
   */
  state: SessionState | undefined;

  /**
   * Additional details about the current state of the session.
   *
   * @public
   */
  stateDetails: string | undefined;

  /**
   * The Amazon EMR release label associated with the session.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role for the session.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The IAM principal that created the session.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time that the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the session was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * The output lists information about the specified sessions.
   *
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * The output displays the token for the next set of session results. This is required for pagination and is available as a response of the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * The output contains the application ID on which the session was started.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The output contains the ARN of the session.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionRequest {
  /**
   * The ID of the application that the session belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the session to terminate.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
   * The output contains the application ID on which the session was terminated.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The output contains the ID of the terminated session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is an array of key-value pairs.
   *
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
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
 *
 * @public
 */
export interface Configuration {
  /**
   * The classification within a configuration.
   *
   * @public
   */
  classification: string | undefined;

  /**
   * A set of properties specified within a configuration classification.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * A list of additional configurations to apply within a configuration object.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;
}

/**
 * Information about an application. Amazon EMR Serverless uses applications to run jobs.
 *
 * @public
 */
export interface Application {
  /**
   * The ID of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon EMR release associated with the application.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The type of application, such as Spark or Hive.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The state of the application.
   *
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * The state details of the application.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The initial capacity of the application.
   *
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * The maximum capacity of the application. This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.
   *
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * The date and time when the application run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the application run was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags assigned to the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for an application to automatically start on job submission.
   *
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * The configuration for an application to automatically stop after a certain amount of time being idle.
   *
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * The network configuration for customer VPC connectivity for the application.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The CPU architecture of an application.
   *
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * The image configuration applied to all worker types.
   *
   * @public
   */
  imageConfiguration?: ImageConfiguration | undefined;

  /**
   * The specification applied to each worker type.
   *
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification> | undefined;

  /**
   * The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the [GetApplication](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html) API operation.
   *
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * The configuration setting for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The configuration object that allows encrypting local disks.
   *
   * @public
   */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined;

  /**
   * The interactive configuration object that enables the interactive use cases for an application.
   *
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * The IAM Identity Center configuration applied to enable trusted identity propagation.
   *
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * The configuration object that enables job level cost allocation.
   *
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * A configuration specification to be used to override existing configurations.
 *
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * The override configurations for the application.
   *
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * The override configurations for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The override configuration to encrypt local disks.
   *
   * @public
   */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon EMR release associated with the application.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The type of application you want to start, such as Spark or Hive.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The client idempotency token of the application to create. Its value must be unique for each request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The capacity to initialize when the application is created.
   *
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * The maximum capacity to allocate when the application is created. This is cumulative across all workers at any given point in time, not just when an application is created. No new resources will be created once any one of the defined limits is hit.
   *
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * The tags assigned to the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for an application to automatically start on job submission.
   *
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * The configuration for an application to automatically stop after a certain amount of time being idle.
   *
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * The network configuration for customer VPC connectivity.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The CPU architecture of an application.
   *
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * The image configuration for all worker types. You can either set this parameter or `imageConfiguration` for each worker type in `workerTypeSpecifications`.
   *
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;

  /**
   * The key-value pairs that specify worker type to `WorkerTypeSpecificationInput`. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include `Driver` and `Executor` for Spark applications and `HiveDriver` and `TezTask` for Hive applications. You can either set image details in this parameter for each worker type, or in `imageConfiguration` for all worker types.
   *
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput> | undefined;

  /**
   * The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications to use when creating an application. Each configuration consists of a classification and properties. This configuration is applied to all the job runs submitted under the application.
   *
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * The configuration setting for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The configuration object that allows encrypting local disks.
   *
   * @public
   */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined;

  /**
   * The interactive configuration object that enables the interactive use cases to use when running an application.
   *
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.
   *
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfigurationInput | undefined;

  /**
   * The configuration object that enables job level cost allocation.
   *
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * The configuration overrides for a session.
 *
 * @public
 */
export interface SessionConfigurationOverrides {
  /**
   * The runtime configuration for the session. Contains Spark configuration properties specified at session creation time.
   *
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The ID of the application to update.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The client idempotency token of the application to update. Its value must be unique for each request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The capacity to initialize when the application is updated.
   *
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig> | undefined;

  /**
   * The maximum capacity to allocate when the application is updated. This is cumulative across all workers at any given point in time during the lifespan of the application. No new resources will be created once any one of the defined limits is hit.
   *
   * @public
   */
  maximumCapacity?: MaximumAllowedResources | undefined;

  /**
   * The configuration for an application to automatically start on job submission.
   *
   * @public
   */
  autoStartConfiguration?: AutoStartConfig | undefined;

  /**
   * The configuration for an application to automatically stop after a certain amount of time being idle.
   *
   * @public
   */
  autoStopConfiguration?: AutoStopConfig | undefined;

  /**
   * The network configuration for customer VPC connectivity.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The CPU architecture of an application.
   *
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * The image configuration to be used for all worker types. You can either set this parameter or `imageConfiguration` for each worker type in `WorkerTypeSpecificationInput`.
   *
   * @public
   */
  imageConfiguration?: ImageConfigurationInput | undefined;

  /**
   * The key-value pairs that specify worker type to `WorkerTypeSpecificationInput`. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include `Driver` and `Executor` for Spark applications and `HiveDriver` and `TezTask` for Hive applications. You can either set image details in this parameter for each worker type, or in `imageConfiguration` for all worker types.
   *
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput> | undefined;

  /**
   * The interactive configuration object that contains new interactive use cases when the application is updated.
   *
   * @public
   */
  interactiveConfiguration?: InteractiveConfiguration | undefined;

  /**
   * The Amazon EMR release label for the application. You can change the release label to use a different release of Amazon EMR.
   *
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications to use when updating an application. Each configuration consists of a classification and properties. This configuration is applied across all the job runs submitted under the application.
   *
   * @public
   */
  runtimeConfiguration?: Configuration[] | undefined;

  /**
   * The configuration setting for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The configuration object that allows encrypting local disks.
   *
   * @public
   */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined;

  /**
   * The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * Specifies the IAM Identity Center configuration used to enable or disable trusted identity propagation. When provided, this configuration determines how the application interacts with IAM Identity Center for user authentication and access control.
   *
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfigurationInput | undefined;

  /**
   * The configuration object that enables job level cost allocation.
   *
   * @public
   */
  jobLevelCostAllocationConfiguration?: JobLevelCostAllocationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The output displays information about the specified application.
   *
   * @public
   */
  application: Application | undefined;
}

/**
 * Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive query, or SparkSQL query, that you submit to an Amazon EMR Serverless application.
 *
 * @public
 */
export interface JobRun {
  /**
   * The ID of the application the job is running on.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  jobRunId: string | undefined;

  /**
   * The optional job run name. This doesn't have to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The execution role ARN of the job run.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time when the job run was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the job run was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The execution role ARN of the job run.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * Optional IAM policy. The resulting job IAM role permissions will be an intersection of the policies passed and the policy associated with your job execution role.
   *
   * @public
   */
  executionIamPolicy?: JobRunExecutionIamPolicy | undefined;

  /**
   * The state of the job run.
   *
   * @public
   */
  state: JobRunState | undefined;

  /**
   * The state details of the job run.
   *
   * @public
   */
  stateDetails: string | undefined;

  /**
   * The Amazon EMR release associated with the application your job is running on.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The configuration settings that are used to override default configuration.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * The job driver for the job run.
   *
   * @public
   */
  jobDriver: JobDriver | undefined;

  /**
   * The tags assigned to the job run.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The aggregate vCPU, memory, and storage resources used from the time the job starts to execute, until the time the job terminates, rounded up to the nearest second.
   *
   * @public
   */
  totalResourceUtilization?: TotalResourceUtilization | undefined;

  /**
   * The network configuration for customer VPC connectivity.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The job run total execution duration in seconds. This field is only available for job runs in a `COMPLETED`, `FAILED`, or `CANCELLED` state.
   *
   * @public
   */
  totalExecutionDurationSeconds?: number | undefined;

  /**
   * Returns the job run timeout value from the `StartJobRun` call. If you didn't specify a timeout, this value defaults to 720 minutes.
   *
   * For BATCH mode job runs, the maximum value is 10080 minutes (7 days) starting with Amazon EMR release 7.11.
   *
   * @public
   */
  executionTimeoutMinutes?: number | undefined;

  /**
   * The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the job run. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. Note that billed resources do not include usage for idle pre-initialized workers.
   *
   * @public
   */
  billedResourceUtilization?: ResourceUtilization | undefined;

  /**
   * The mode of the job run.
   *
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * The retry policy of the job run.
   *
   * @public
   */
  retryPolicy?: RetryPolicy | undefined;

  /**
   * The attempt of the job run.
   *
   * @public
   */
  attempt?: number | undefined;

  /**
   * The date and time of when the job run attempt was created.
   *
   * @public
   */
  attemptCreatedAt?: Date | undefined;

  /**
   * The date and time of when the job run attempt was last updated.
   *
   * @public
   */
  attemptUpdatedAt?: Date | undefined;

  /**
   * The date and time when the job moved to the RUNNING state.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time when the job was terminated.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The total time for a job in the QUEUED state in milliseconds.
   *
   * @public
   */
  queuedDurationMilliseconds?: number | undefined;

  /**
   * The applied image configuration.
   *
   * @public
   */
  imageConfiguration?: ImageConfiguration | undefined;

  /**
   * The specification applied to each worker type. Includes the JobRun-level ImageConfiguration when the applicationLevelDigestResolution is false for the application.
   *
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification> | undefined;
}

/**
 * Information about a session, including the session state, configuration, and timestamps.
 *
 * @public
 */
export interface Session {
  /**
   * The ID of the application that the session belongs to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The optional name of the session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The state of the session.
   *
   * @public
   */
  state: SessionState | undefined;

  /**
   * Additional details about the current state of the session.
   *
   * @public
   */
  stateDetails: string | undefined;

  /**
   * The Amazon EMR release label associated with the session.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role for the session.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The IAM principal that created the session.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time that the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the session was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The date and time that the session moved to a running state.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time that the session was terminated or failed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time that the session became idle.
   *
   * @public
   */
  idleSince?: Date | undefined;

  /**
   * The configuration overrides for the session, including runtime configuration properties.
   *
   * @public
   */
  configurationOverrides?: SessionConfigurationOverrides | undefined;

  /**
   * The network configuration for customer VPC connectivity for the session.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The idle timeout in minutes for the session. After the session remains idle for this duration, it is automatically terminated.
   *
   * @public
   */
  idleTimeoutMinutes?: number | undefined;

  /**
   * The tags assigned to the session.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The aggregate vCPU, memory, and storage resources used from the time the session starts to execute, until the time the session terminates, rounded up to the nearest second.
   *
   * @public
   */
  totalResourceUtilization?: TotalResourceUtilization | undefined;

  /**
   * The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the session. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. Note that billed resources do not include usage for idle pre-initialized workers.
   *
   * @public
   */
  billedResourceUtilization?: ResourceUtilization | undefined;

  /**
   * The total execution duration of the session in seconds.
   *
   * @public
   */
  totalExecutionDurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * The ID of the application on which to run the job.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The client idempotency token of the job run to start. Its value must be unique for each request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The execution role ARN for the job run.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * You can pass an optional IAM policy. The resulting job IAM role permissions will be an intersection of this policy and the policy associated with your job execution role.
   *
   * @public
   */
  executionIamPolicy?: JobRunExecutionIamPolicy | undefined;

  /**
   * The job driver for the job run.
   *
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * The configuration overrides for the job run.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * The tags assigned to the job run.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The maximum duration, in minutes, for the job run. If the job run exceeds this duration, Amazon EMR Serverless cancels it automatically.
   *
   * For BATCH mode job runs, the maximum value is 10080 minutes (7 days) starting with Amazon EMR release 7.11. Setting a value of 0 to disable the timeout is no longer supported for BATCH mode job runs.
   *
   * @public
   */
  executionTimeoutMinutes?: number | undefined;

  /**
   * The optional job run name. This doesn't have to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The mode of the job run when it starts.
   *
   * @public
   */
  mode?: JobRunMode | undefined;

  /**
   * The retry policy when job run starts.
   *
   * @public
   */
  retryPolicy?: RetryPolicy | undefined;
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * The ID of the application on which to start the session.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the server returns the successful response without performing the operation again.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The execution role ARN for the session. Amazon EMR Serverless uses this role to access Amazon Web Services resources on your behalf during session execution.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The configuration overrides for the session. Only runtime configuration overrides are supported.
   *
   * @public
   */
  configurationOverrides?: SessionConfigurationOverrides | undefined;

  /**
   * The tags to assign to the session.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The idle timeout in minutes for the session. After the session remains idle for this duration, Amazon EMR Serverless automatically terminates it.
   *
   * @public
   */
  idleTimeoutMinutes?: number | undefined;

  /**
   * The optional name for the session.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * Information about the updated application.
   *
   * @public
   */
  application: Application | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * The output displays information about the job run.
   *
   * @public
   */
  jobRun: JobRun | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The output displays information about the session.
   *
   * @public
   */
  session: Session | undefined;
}
