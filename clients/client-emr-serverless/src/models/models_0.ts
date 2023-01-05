// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { EMRServerlessServiceException as __BaseException } from "./EMRServerlessServiceException";

export enum Architecture {
  ARM64 = "ARM64",
  X86_64 = "X86_64",
}

/**
 * <p>The configuration for an application to automatically start on job submission.</p>
 */
export interface AutoStartConfig {
  /**
   * <p>Enables the application to automatically start on job submission. Defaults to
   *          true.</p>
   */
  enabled?: boolean;
}

/**
 * <p>The configuration for an application to automatically stop after a certain amount of
 *          time being idle.</p>
 */
export interface AutoStopConfig {
  /**
   * <p>Enables the application to automatically stop after a certain amount of time being idle.
   *          Defaults to true.</p>
   */
  enabled?: boolean;

  /**
   * <p>The amount of idle time in minutes after which your application will automatically stop.
   *          Defaults to 15 minutes.</p>
   */
  idleTimeoutMinutes?: number;
}

/**
 * <p>The applied image configuration.</p>
 */
export interface ImageConfiguration {
  /**
   * <p>The image URI.</p>
   */
  imageUri: string | undefined;

  /**
   * <p>The SHA256 digest of the image URI. This indicates which specific image
   *          the application is configured for. The image digest doesn't exist until an application has started.</p>
   */
  resolvedImageDigest?: string;
}

/**
 * <p>The cumulative configuration requirements for every worker instance of the worker
 *          type.</p>
 */
export interface WorkerResourceConfig {
  /**
   * <p>The CPU requirements for every worker instance of the worker type.</p>
   */
  cpu: string | undefined;

  /**
   * <p>The memory requirements for every worker instance of the worker type.</p>
   */
  memory: string | undefined;

  /**
   * <p>The disk requirements for every worker instance of the worker type.</p>
   */
  disk?: string;
}

/**
 * <p>The initial capacity configuration per worker.</p>
 */
export interface InitialCapacityConfig {
  /**
   * <p>The number of workers in the initial capacity configuration.</p>
   */
  workerCount: number | undefined;

  /**
   * <p>The resource configuration of the initial capacity configuration.</p>
   */
  workerConfiguration?: WorkerResourceConfig;
}

/**
 * <p>The maximum allowed cumulative resources for an application. No new resources will be
 *          created once the limit is hit.</p>
 */
export interface MaximumAllowedResources {
  /**
   * <p>The maximum allowed CPU for an application.</p>
   */
  cpu: string | undefined;

  /**
   * <p>The maximum allowed resources for an application.</p>
   */
  memory: string | undefined;

  /**
   * <p>The maximum allowed disk for an application.</p>
   */
  disk?: string;
}

/**
 * <p>The network configuration for customer VPC connectivity.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>The array of subnet Ids for customer VPC connectivity.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The array of security group Ids for customer VPC connectivity.</p>
   */
  securityGroupIds?: string[];
}

export enum ApplicationState {
  CREATED = "CREATED",
  CREATING = "CREATING",
  STARTED = "STARTED",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  TERMINATED = "TERMINATED",
}

/**
 * <p>The specifications for a worker type.</p>
 */
export interface WorkerTypeSpecification {
  /**
   * <p>The image configuration for a worker type.</p>
   */
  imageConfiguration?: ImageConfiguration;
}

/**
 * <p>Information about an application. EMR Serverless uses applications to run jobs.</p>
 */
export interface Application {
  /**
   * <p>The ID of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the application.</p>
   */
  arn: string | undefined;

  /**
   * <p>The EMR release associated with the application.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   */
  state: ApplicationState | string | undefined;

  /**
   * <p>The state details of the application.</p>
   */
  stateDetails?: string;

  /**
   * <p>The initial capacity of the application.</p>
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity of the application. This is cumulative across all workers at any
   *          given point in time during the lifespan of the application is created. No new resources
   *          will be created once any one of the defined limits is hit.</p>
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The date and time when the application run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application run was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags assigned to the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity for the application.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The image configuration applied to all worker types.</p>
   */
  imageConfiguration?: ImageConfiguration;

  /**
   * <p>The specification applied to each worker type.</p>
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification>;
}

/**
 * <p>The summary of attributes associated with an application.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the application.</p>
   */
  arn: string | undefined;

  /**
   * <p>The EMR release associated with the application.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   */
  state: ApplicationState | string | undefined;

  /**
   * <p>The state details of the application.</p>
   */
  stateDetails?: string;

  /**
   * <p>The date and time when the application was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   */
  architecture?: Architecture | string;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The image configuration.</p>
 */
export interface ImageConfigurationInput {
  /**
   * <p>The URI of an image in the Amazon ECR registry. This field is required when you create a new
   *          application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.</p>
   */
  imageUri?: string;
}

/**
 * <p>The specifications for a worker type.</p>
 */
export interface WorkerTypeSpecificationInput {
  /**
   * <p>The image configuration for a worker type.</p>
   */
  imageConfiguration?: ImageConfigurationInput;
}

export interface CreateApplicationRequest {
  /**
   * <p>The name of the application.</p>
   */
  name?: string;

  /**
   * <p>The EMR release associated with the application.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application you want to start, such as Spark or Hive.</p>
   */
  type: string | undefined;

  /**
   * <p>The client idempotency token of the application to create. Its value must be unique for
   *          each request.</p>
   */
  clientToken?: string;

  /**
   * <p>The capacity to initialize when the application is created.</p>
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity to allocate when the application is created. This is cumulative
   *          across all workers at any given point in time, not just when an application is created. No
   *          new resources will be created once any one of the defined limits is hit.</p>
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The tags assigned to the application.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The image configuration for all worker types. You can either set this parameter or <code>imageConfiguration</code>
   *          for each worker type in <code>workerTypeSpecifications</code>.</p>
   */
  imageConfiguration?: ImageConfigurationInput;

  /**
   * <p>The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid
   *          worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for
   *          Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set
   *          image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.</p>
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;
}

export interface CreateApplicationResponse {
  /**
   * <p>The output contains the application ID.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the name of the application.</p>
   */
  name?: string;

  /**
   * <p>The output contains the ARN of the application.</p>
   */
  arn: string | undefined;
}

/**
 * <p>Request processing failed because of an error or failure with the service.</p>
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
 * <p>The specified resource was not found.</p>
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
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application that will be deleted.</p>
   */
  applicationId: string | undefined;
}

export interface DeleteApplicationResponse {}

export interface GetApplicationRequest {
  /**
   * <p>The ID of the application that will be described.</p>
   */
  applicationId: string | undefined;
}

export interface GetApplicationResponse {
  /**
   * <p>The output displays information about the specified application.</p>
   */
  application: Application | undefined;
}

export interface ListApplicationsRequest {
  /**
   * <p>The token for the next set of application results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of applications that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p>An optional filter for application states. Note that if this filter contains multiple
   *          states, the resulting list will be grouped by the state.</p>
   */
  states?: (ApplicationState | string)[];
}

export interface ListApplicationsResponse {
  /**
   * <p>The output lists the specified applications.</p>
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of application results. This is required
   *          for pagination and is available as a response of the previous request.</p>
   */
  nextToken?: string;
}

/**
 * <p>The maximum number of resources per account has been reached.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

export interface StartApplicationRequest {
  /**
   * <p>The ID of the application to start.</p>
   */
  applicationId: string | undefined;
}

export interface StartApplicationResponse {}

export interface StopApplicationRequest {
  /**
   * <p>The ID of the application to stop.</p>
   */
  applicationId: string | undefined;
}

export interface StopApplicationResponse {}

export interface UpdateApplicationRequest {
  /**
   * <p>The ID of the application to update.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the application to update. Its value must be unique for
   *          each request.</p>
   */
  clientToken?: string;

  /**
   * <p>The capacity to initialize when the application is updated.</p>
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity to allocate when the application is updated. This is cumulative
   *          across all workers at any given point in time during the lifespan of the application. No
   *          new resources will be created once any one of the defined limits is hit.</p>
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The image configuration to be used for all worker types. You can either set this parameter or <code>imageConfiguration</code>
   *          for each worker type in <code>WorkerTypeSpecificationInput</code>.</p>
   */
  imageConfiguration?: ImageConfigurationInput;

  /**
   * <p>The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid
   *          worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for
   *          Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set
   *          image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types.</p>
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;
}

export interface UpdateApplicationResponse {
  /**
   * <p>Information about the updated application.</p>
   */
  application: Application | undefined;
}

export interface CancelJobRunRequest {
  /**
   * <p>The ID of the application on which the job run will be canceled.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run to cancel.</p>
   */
  jobRunId: string | undefined;
}

export interface CancelJobRunResponse {
  /**
   * <p>The output contains the application ID on which the job run is cancelled.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the cancelled job run.</p>
   */
  jobRunId: string | undefined;
}

export interface GetDashboardForJobRunRequest {
  /**
   * <p>The ID of the application.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  jobRunId: string | undefined;
}

export interface GetDashboardForJobRunResponse {
  /**
   * <p>The URL to view job run's dashboard.</p>
   */
  url?: string;
}

export interface GetJobRunRequest {
  /**
   * <p>The ID of the application on which the job run is submitted.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  jobRunId: string | undefined;
}

/**
 * <p>The managed log persistence configuration for a job run.</p>
 */
export interface ManagedPersistenceMonitoringConfiguration {
  /**
   * <p>Enables managed logging and defaults to true. If set to false, managed logging will be
   *          turned off.</p>
   */
  enabled?: boolean;

  /**
   * <p>The KMS key ARN to encrypt the logs stored in managed log persistence.</p>
   */
  encryptionKeyArn?: string;
}

/**
 * <p>The Amazon S3 configuration for monitoring log publishing. You can configure your jobs
 *          to send log information to Amazon S3.</p>
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>The Amazon S3 destination URI for log publishing.</p>
   */
  logUri?: string;

  /**
   * <p>The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.</p>
   */
  encryptionKeyArn?: string;
}

/**
 * <p>The configuration setting for monitoring.</p>
 */
export interface MonitoringConfiguration {
  /**
   * <p>The Amazon S3 configuration for monitoring log publishing.</p>
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration;

  /**
   * <p>The managed log persistence configuration for a job run.</p>
   */
  managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
}

/**
 * <p>The configurations for the Hive job driver.</p>
 */
export interface Hive {
  /**
   * <p>The query for the Hive job run.</p>
   */
  query: string | undefined;

  /**
   * <p>The query file for the Hive job run.</p>
   */
  initQueryFile?: string;

  /**
   * <p>The parameters for the Hive job run.</p>
   */
  parameters?: string;
}

/**
 * <p>The configurations for the Spark submit job driver.</p>
 */
export interface SparkSubmit {
  /**
   * <p>The entry point for the Spark submit job run.</p>
   */
  entryPoint: string | undefined;

  /**
   * <p>The arguments for the Spark submit job run.</p>
   */
  entryPointArguments?: string[];

  /**
   * <p>The parameters for the Spark submit job run.</p>
   */
  sparkSubmitParameters?: string;
}

/**
 * <p>The driver that the job runs on.</p>
 */
export type JobDriver = JobDriver.HiveMember | JobDriver.SparkSubmitMember | JobDriver.$UnknownMember;

export namespace JobDriver {
  /**
   * <p>The job driver parameters specified for Spark.</p>
   */
  export interface SparkSubmitMember {
    sparkSubmit: SparkSubmit;
    hive?: never;
    $unknown?: never;
  }

  /**
   * <p>The job driver parameters specified for Hive.</p>
   */
  export interface HiveMember {
    sparkSubmit?: never;
    hive: Hive;
    $unknown?: never;
  }

  export interface $UnknownMember {
    sparkSubmit?: never;
    hive?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sparkSubmit: (value: SparkSubmit) => T;
    hive: (value: Hive) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobDriver, visitor: Visitor<T>): T => {
    if (value.sparkSubmit !== undefined) return visitor.sparkSubmit(value.sparkSubmit);
    if (value.hive !== undefined) return visitor.hive(value.hive);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum JobRunState {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SCHEDULED = "SCHEDULED",
  SUBMITTED = "SUBMITTED",
  SUCCESS = "SUCCESS",
}

/**
 * <p>The aggregate vCPU, memory, and storage resources used from the time job start executing
 *          till the time job is terminated, rounded up to the nearest second.</p>
 */
export interface TotalResourceUtilization {
  /**
   * <p>The aggregated vCPU used per hour from the time job start executing till the time job is
   *          terminated.</p>
   */
  vCPUHour?: number;

  /**
   * <p>The aggregated memory used per hour from the time job start executing till the time job
   *          is terminated.</p>
   */
  memoryGBHour?: number;

  /**
   * <p>The aggregated storage used per hour from the time job start executing till the time job
   *          is terminated.</p>
   */
  storageGBHour?: number;
}

export interface ListJobRunsRequest {
  /**
   * <p>The ID of the application for which to list the job run.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The token for the next set of job run results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of job runs that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p>The lower bound of the option to filter by creation date and time.</p>
   */
  createdAtAfter?: Date;

  /**
   * <p>The upper bound of the option to filter by creation date and time.</p>
   */
  createdAtBefore?: Date;

  /**
   * <p>An optional filter for job run states. Note that if this filter contains multiple
   *          states, the resulting list will be grouped by the state.</p>
   */
  states?: (JobRunState | string)[];
}

/**
 * <p>The summary of attributes associated with a job run.</p>
 */
export interface JobRunSummary {
  /**
   * <p>The ID of the application the job is running on.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  id: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the job run.</p>
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run.</p>
   */
  state: JobRunState | string | undefined;

  /**
   * <p>The state details of the job run.</p>
   */
  stateDetails: string | undefined;

  /**
   * <p>The EMR release associated with the application your job is running on.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of job run, such as Spark or Hive.</p>
   */
  type?: string;
}

export interface ListJobRunsResponse {
  /**
   * <p>The output lists information about the specified job runs.</p>
   */
  jobRuns: JobRunSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of job run results. This is required for
   *          pagination and is available as a response of the previous request.</p>
   */
  nextToken?: string;
}

export interface StartJobRunResponse {
  /**
   * <p>This output displays the application ID on which the job run was submitted.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the started job run.</p>
   */
  jobRunId: string | undefined;

  /**
   * <p>The output lists the execution role ARN of the job run.</p>
   */
  arn: string | undefined;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>A configuration specification to be used when provisioning an application. A
 *          configuration consists of a classification, properties, and optional nested configurations.
 *          A classification refers to an application-specific configuration file. Properties are the
 *          settings you want to change in that file.</p>
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  properties?: Record<string, string>;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  configurations?: Configuration[];
}

/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 */
export interface ConfigurationOverrides {
  /**
   * <p>The override configurations for the application.</p>
   */
  applicationConfiguration?: Configuration[];

  /**
   * <p>The override configurations for monitoring.</p>
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * <p>Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive
 *          query, or SparkSQL query, that you submit to an EMR Serverless application.</p>
 */
export interface JobRun {
  /**
   * <p>The ID of the application the job is running on.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  jobRunId: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   */
  name?: string;

  /**
   * <p>The execution role ARN of the job run.</p>
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run.</p>
   */
  state: JobRunState | string | undefined;

  /**
   * <p>The state details of the job run.</p>
   */
  stateDetails: string | undefined;

  /**
   * <p>The EMR release associated with the application your job is running on.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The configuration settings that are used to override default configuration.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The job driver for the job run.</p>
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The tags assigned to the job run.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The aggregate vCPU, memory, and storage resources used from the time job start executing
   *          till the time job is terminated, rounded up to the nearest second.</p>
   */
  totalResourceUtilization?: TotalResourceUtilization;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The job run total execution duration in seconds. This field is only available for job
   *          runs in a <code>COMPLETED</code>, <code>FAILED</code>, or <code>CANCELLED</code>
   *          state.</p>
   */
  totalExecutionDurationSeconds?: number;
}

export interface StartJobRunRequest {
  /**
   * <p>The ID of the application on which to run the job.</p>
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the job run to start. Its value must be unique for each
   *          request.</p>
   */
  clientToken?: string;

  /**
   * <p>The execution role ARN for the job run.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The job driver for the job run.</p>
   */
  jobDriver?: JobDriver;

  /**
   * <p>The configuration overrides for the job run.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The tags assigned to the job run.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The maximum duration for the job run to run. If the job run runs beyond this duration,
   *          it will be automatically cancelled.</p>
   */
  executionTimeoutMinutes?: number;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   */
  name?: string;
}

export interface GetJobRunResponse {
  /**
   * <p>The output displays information about the job run.</p>
   */
  jobRun: JobRun | undefined;
}

/**
 * @internal
 */
export const AutoStartConfigFilterSensitiveLog = (obj: AutoStartConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoStopConfigFilterSensitiveLog = (obj: AutoStopConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageConfigurationFilterSensitiveLog = (obj: ImageConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerResourceConfigFilterSensitiveLog = (obj: WorkerResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitialCapacityConfigFilterSensitiveLog = (obj: InitialCapacityConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaximumAllowedResourcesFilterSensitiveLog = (obj: MaximumAllowedResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerTypeSpecificationFilterSensitiveLog = (obj: WorkerTypeSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageConfigurationInputFilterSensitiveLog = (obj: ImageConfigurationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerTypeSpecificationInputFilterSensitiveLog = (obj: WorkerTypeSpecificationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationRequestFilterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationResponseFilterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationRequestFilterSensitiveLog = (obj: GetApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsRequestFilterSensitiveLog = (obj: ListApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartApplicationRequestFilterSensitiveLog = (obj: StartApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartApplicationResponseFilterSensitiveLog = (obj: StartApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopApplicationRequestFilterSensitiveLog = (obj: StopApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopApplicationResponseFilterSensitiveLog = (obj: StopApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRunRequestFilterSensitiveLog = (obj: CancelJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRunResponseFilterSensitiveLog = (obj: CancelJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDashboardForJobRunRequestFilterSensitiveLog = (obj: GetDashboardForJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDashboardForJobRunResponseFilterSensitiveLog = (obj: GetDashboardForJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobRunRequestFilterSensitiveLog = (obj: GetJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedPersistenceMonitoringConfigurationFilterSensitiveLog = (
  obj: ManagedPersistenceMonitoringConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3MonitoringConfigurationFilterSensitiveLog = (obj: S3MonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConfigurationFilterSensitiveLog = (obj: MonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HiveFilterSensitiveLog = (obj: Hive): any => ({
  ...obj,
  ...(obj.query && { query: SENSITIVE_STRING }),
  ...(obj.initQueryFile && { initQueryFile: SENSITIVE_STRING }),
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SparkSubmitFilterSensitiveLog = (obj: SparkSubmit): any => ({
  ...obj,
  ...(obj.entryPoint && { entryPoint: SENSITIVE_STRING }),
  ...(obj.entryPointArguments && { entryPointArguments: SENSITIVE_STRING }),
  ...(obj.sparkSubmitParameters && { sparkSubmitParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobDriverFilterSensitiveLog = (obj: JobDriver): any => {
  if (obj.sparkSubmit !== undefined) return { sparkSubmit: SparkSubmitFilterSensitiveLog(obj.sparkSubmit) };
  if (obj.hive !== undefined) return { hive: HiveFilterSensitiveLog(obj.hive) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TotalResourceUtilizationFilterSensitiveLog = (obj: TotalResourceUtilization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobRunsRequestFilterSensitiveLog = (obj: ListJobRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobRunSummaryFilterSensitiveLog = (obj: JobRunSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobRunsResponseFilterSensitiveLog = (obj: ListJobRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRunResponseFilterSensitiveLog = (obj: StartJobRunResponse): any => ({
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
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
  ...(obj.configurations && {
    configurations: obj.configurations.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ConfigurationOverridesFilterSensitiveLog = (obj: ConfigurationOverrides): any => ({
  ...obj,
  ...(obj.applicationConfiguration && {
    applicationConfiguration: obj.applicationConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const JobRunFilterSensitiveLog = (obj: JobRun): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
});

/**
 * @internal
 */
export const StartJobRunRequestFilterSensitiveLog = (obj: StartJobRunRequest): any => ({
  ...obj,
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
});

/**
 * @internal
 */
export const GetJobRunResponseFilterSensitiveLog = (obj: GetJobRunResponse): any => ({
  ...obj,
  ...(obj.jobRun && { jobRun: JobRunFilterSensitiveLog(obj.jobRun) }),
});
