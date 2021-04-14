import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to the Airflow Web UI or CLI has been Denied. Please follow the MWAA user guide to setup permissions to access the Web UI and CLI functionality.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface CreateCliTokenRequest {
  /**
   * <p>Create a CLI token request for a MWAA environment.</p>
   */
  Name: string | undefined;
}

export namespace CreateCliTokenRequest {
  export const filterSensitiveLog = (obj: CreateCliTokenRequest): any => ({
    ...obj,
  });
}

export interface CreateCliTokenResponse {
  /**
   * <p>Create an Airflow CLI login token response for the provided JWT token.</p>
   */
  CliToken?: string;

  /**
   * <p>Create an Airflow CLI login token response for the provided webserver hostname.</p>
   */
  WebServerHostname?: string;
}

export namespace CreateCliTokenResponse {
  export const filterSensitiveLog = (obj: CreateCliTokenResponse): any => ({
    ...obj,
    ...(obj.CliToken && { CliToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>ResourceNotFoundException: The resource is not available.</p>
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

export enum LoggingLevel {
  CRITICAL = "CRITICAL",
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

/**
 * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
 *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * <p>Defines that the logging module is enabled.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Defines the log level, which can be CRITICAL, ERROR, WARNING, or INFO.</p>
   */
  LogLevel: LoggingLevel | string | undefined;
}

export namespace ModuleLoggingConfigurationInput {
  export const filterSensitiveLog = (obj: ModuleLoggingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>The Logging Configuration of your Amazon MWAA environment.</p>
 */
export interface LoggingConfigurationInput {
  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  SchedulerLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  WebserverLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  WorkerLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  TaskLogs?: ModuleLoggingConfigurationInput;
}

export namespace LoggingConfigurationInput {
  export const filterSensitiveLog = (obj: LoggingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provide the security group and subnet IDs for the workers and scheduler.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Provide a JSON list of 2 subnet IDs by name. These must be private subnets, in the same VPC, in two different availability zones.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A JSON list of 1 or more security groups IDs by name, in the same VPC as the subnets.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace NetworkConfiguration {
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj,
  });
}

export enum WebserverAccessMode {
  PRIVATE_ONLY = "PRIVATE_ONLY",
  PUBLIC_ONLY = "PUBLIC_ONLY",
}

/**
 * <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.</p>
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The name of your MWAA environment.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an AWS Identity and Access Management (IAM) role that grants MWAA permission to access AWS services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/manage-access.html">Managing access to Amazon Managed Workflows for Apache Airflow</a>.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, <code>arn:aws:s3:::airflow-mybucketname</code>.</p>
   */
  SourceBucketArn: string | undefined;

  /**
   * <p>The relative path to the DAG folder on your Amazon S3 storage bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.</p>
   */
  DagS3Path: string | undefined;

  /**
   * <p>The VPC networking components you want to use for your environment. At least two private subnet identifiers and one VPC security group identifier are required to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-mwaa.html">Creating the VPC network for a MWAA environment</a>.</p>
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 storage bucket. For example, <code>plugins.zip</code>. If a relative path is provided in the request, then <code>PluginsS3ObjectVersion</code> is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The <code>plugins.zip</code> file version you want to use.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 storage bucket. For example, <code>requirements.txt</code>. If a relative path is provided in the request, then <code>RequirementsS3ObjectVersion</code> is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html">Importing DAGs on Amazon MWAA</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The <code>requirements.txt</code> file version you want to use.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>The Apache Airflow configuration setting you want to override in your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Environment configuration</a>.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The environment class you want to use for your environment. The environment class determines the size of the containers and database used for your Apache Airflow services.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in this field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the one worker that is included with your environment.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. You can use an AWS KMS key managed by MWAA, or a custom KMS key (advanced). For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html?icmpid=docs_console_unmapped#master_keys">Customer master keys (CMKs)</a> in the AWS KMS developer guide.</p>
   */
  KmsKey?: string;

  /**
   * <p>The Apache Airflow version you want to use for your environment.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>The Apache Airflow logs you want to send to Amazon CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * <p>The day and time you want MWAA to start weekly maintenance updates on your environment.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The metadata tags you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The networking access of your Apache Airflow web server. A public network allows your Airflow UI to be accessed over the Internet by users granted access in your IAM policy. A private network limits access of your Airflow UI to users within your VPC. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-mwaa.html">Creating the VPC network for a MWAA environment</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the worker count you specify in the <code>MinWorkers</code> field.</p>
   */
  MinWorkers?: number;
}

export namespace CreateEnvironmentInput {
  export const filterSensitiveLog = (obj: CreateEnvironmentInput): any => ({
    ...obj,
    ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentOutput {
  /**
   * <p>The resulting Amazon MWAA envirnonment ARN.</p>
   */
  Arn?: string;
}

export namespace CreateEnvironmentOutput {
  export const filterSensitiveLog = (obj: CreateEnvironmentOutput): any => ({
    ...obj,
  });
}

/**
 * <p>InternalServerException: An internal error has occurred.</p>
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
 * <p>ValidationException: The provided input is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface CreateWebLoginTokenRequest {
  /**
   * <p>Create an Airflow Web UI login token request for a MWAA environment.</p>
   */
  Name: string | undefined;
}

export namespace CreateWebLoginTokenRequest {
  export const filterSensitiveLog = (obj: CreateWebLoginTokenRequest): any => ({
    ...obj,
  });
}

export interface CreateWebLoginTokenResponse {
  /**
   * <p>Create an Airflow Web UI login token response for the provided JWT token.</p>
   */
  WebToken?: string;

  /**
   * <p>Create an Airflow Web UI login token response for the provided webserver hostname.</p>
   */
  WebServerHostname?: string;
}

export namespace CreateWebLoginTokenResponse {
  export const filterSensitiveLog = (obj: CreateWebLoginTokenResponse): any => ({
    ...obj,
    ...(obj.WebToken && { WebToken: SENSITIVE_STRING }),
  });
}

export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the environment to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEnvironmentInput {
  export const filterSensitiveLog = (obj: DeleteEnvironmentInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentOutput {}

export namespace DeleteEnvironmentOutput {
  export const filterSensitiveLog = (obj: DeleteEnvironmentOutput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentInput {
  /**
   * <p>The name of the environment to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetEnvironmentInput {
  export const filterSensitiveLog = (obj: GetEnvironmentInput): any => ({
    ...obj,
  });
}

/**
 * <p>Error information of update, if applicable.</p>
 */
export interface UpdateError {
  /**
   * <p>Error code of update.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Error message of update.</p>
   */
  ErrorMessage?: string;
}

export namespace UpdateError {
  export const filterSensitiveLog = (obj: UpdateError): any => ({
    ...obj,
  });
}

export enum UpdateStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Last update information for the environment.</p>
 */
export interface LastUpdate {
  /**
   * <p>Status of last update of SUCCESS, FAILED, CREATING, DELETING.</p>
   */
  Status?: UpdateStatus | string;

  /**
   * <p>Time that last update occurred.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Error string of last update, if applicable.</p>
   */
  Error?: UpdateError;
}

export namespace LastUpdate {
  export const filterSensitiveLog = (obj: LastUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
 *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
 */
export interface ModuleLoggingConfiguration {
  /**
   * <p>Defines that the logging module is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Defines the log level, which can be CRITICAL, ERROR, WARNING, or INFO.</p>
   */
  LogLevel?: LoggingLevel | string;

  /**
   * <p>Provides the ARN for the CloudWatch group where the logs will be published.</p>
   */
  CloudWatchLogGroupArn?: string;
}

export namespace ModuleLoggingConfiguration {
  export const filterSensitiveLog = (obj: ModuleLoggingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The Logging Configuration of your Amazon MWAA environment.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfiguration;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  SchedulerLogs?: ModuleLoggingConfiguration;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  WebserverLogs?: ModuleLoggingConfiguration;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  WorkerLogs?: ModuleLoggingConfiguration;

  /**
   * <p>A JSON blob that provides configuration to use for logging with respect to the various Apache Airflow services: DagProcessingLogs,
   *         SchedulerLogs, TaskLogs, WebserverLogs, and WorkerLogs.</p>
   */
  TaskLogs?: ModuleLoggingConfiguration;
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

export enum EnvironmentStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  UNAVAILABLE = "UNAVAILABLE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>An Amazon MWAA environment.</p>
 */
export interface Environment {
  /**
   * <p>The name of the Amazon MWAA Environment.</p>
   */
  Name?: string;

  /**
   * <p>The status of the Amazon MWAA Environment.</p>
   */
  Status?: EnvironmentStatus | string;

  /**
   * <p>The ARN of the Amazon MWAA Environment.</p>
   */
  Arn?: string;

  /**
   * <p>The Created At date of the Amazon MWAA Environment.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Webserver URL of the Amazon MWAA Environment.</p>
   */
  WebserverUrl?: string;

  /**
   * <p>The Execution Role ARN of the Amazon MWAA Environment.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Service Role ARN of the Amazon MWAA Environment.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The Kms Key of the Amazon MWAA Environment.</p>
   */
  KmsKey?: string;

  /**
   * <p>The AirflowV ersion of the Amazon MWAA Environment.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>The Source S3 Bucket ARN of the Amazon MWAA Environment.</p>
   */
  SourceBucketArn?: string;

  /**
   * <p>The Dags S3 Path of the Amazon MWAA Environment.</p>
   */
  DagS3Path?: string;

  /**
   * <p>The Plugins.zip S3 Path of the Amazon MWAA Environment.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The Plugins.zip S3 Object Version of the Amazon MWAA Environment.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The Requirement.txt S3 Path of the Amazon MWAA Environment.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The Requirements.txt file S3 Object Version of the Amazon MWAA Environment.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>The Airflow Configuration Options of the Amazon MWAA Environment.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The Environment Class (size) of the Amazon MWAA Environment.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers to run in your Amazon MWAA Environment.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>Provide the security group and subnet IDs for the workers and scheduler.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>The Logging Configuration of the Amazon MWAA Environment.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * <p>Last update information for the environment.</p>
   */
  LastUpdate?: LastUpdate;

  /**
   * <p>The Weekly Maintenance Window Start of the Amazon MWAA Environment.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The Tags of the Amazon MWAA Environment.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Webserver Access Mode of the Amazon MWAA Environment (public or private only).</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers to run in your Amazon MWAA Environment.</p>
   */
  MinWorkers?: number;
}

export namespace Environment {
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
  });
}

export interface GetEnvironmentOutput {
  /**
   * <p>A JSON blob with environment details.</p>
   */
  Environment?: Environment;
}

export namespace GetEnvironmentOutput {
  export const filterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsInput {
  /**
   * <p>The Next Token when listing MWAA environments.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum results when listing MWAA environments.</p>
   */
  MaxResults?: number;
}

export namespace ListEnvironmentsInput {
  export const filterSensitiveLog = (obj: ListEnvironmentsInput): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsOutput {
  /**
   * <p>The list of Amazon MWAA Environments.</p>
   */
  Environments: string[] | undefined;

  /**
   * <p>The Next Token when listing MWAA environments.</p>
   */
  NextToken?: string;
}

export namespace ListEnvironmentsOutput {
  export const filterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the MWAA environment.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The tags of the MWAA environments.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Internal only API.</p>
 */
export interface Dimension {
  /**
   * <p>Internal only API.</p>
   */
  Name: string | undefined;

  /**
   * <p>Internal only API.</p>
   */
  Value: string | undefined;
}

export namespace Dimension {
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

/**
 * <p>Internal only API.</p>
 */
export interface StatisticSet {
  /**
   * <p>Internal only API.</p>
   */
  SampleCount?: number;

  /**
   * <p>Internal only API.</p>
   */
  Sum?: number;

  /**
   * <p>Internal only API.</p>
   */
  Minimum?: number;

  /**
   * <p>Internal only API.</p>
   */
  Maximum?: number;
}

export namespace StatisticSet {
  export const filterSensitiveLog = (obj: StatisticSet): any => ({
    ...obj,
  });
}

export enum Unit {
  BITS = "Bits",
  BITS_PER_SECOND = "Bits/Second",
  BYTES = "Bytes",
  BYTES_PER_SECOND = "Bytes/Second",
  COUNT = "Count",
  COUNT_PER_SECOND = "Count/Second",
  GIGABITS = "Gigabits",
  GIGABITS_PER_SECOND = "Gigabits/Second",
  GIGABYTES = "Gigabytes",
  GIGABYTES_PER_SECOND = "Gigabytes/Second",
  KILOBITS = "Kilobits",
  KILOBITS_PER_SECOND = "Kilobits/Second",
  KILOBYTES = "Kilobytes",
  KILOBYTES_PER_SECOND = "Kilobytes/Second",
  MEGABITS = "Megabits",
  MEGABITS_PER_SECOND = "Megabits/Second",
  MEGABYTES = "Megabytes",
  MEGABYTES_PER_SECOND = "Megabytes/Second",
  MICROSECONDS = "Microseconds",
  MILLISECONDS = "Milliseconds",
  NONE = "None",
  PERCENT = "Percent",
  SECONDS = "Seconds",
  TERABITS = "Terabits",
  TERABITS_PER_SECOND = "Terabits/Second",
  TERABYTES = "Terabytes",
  TERABYTES_PER_SECOND = "Terabytes/Second",
}

/**
 * <p>Internal only API.</p>
 */
export interface MetricDatum {
  /**
   * <p>Internal only API.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>Internal only API.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>Internal only API.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>Internal only API.</p>
   */
  Value?: number;

  /**
   * Unit
   */
  Unit?: Unit | string;

  /**
   * <p>Internal only API.</p>
   */
  StatisticValues?: StatisticSet;
}

export namespace MetricDatum {
  export const filterSensitiveLog = (obj: MetricDatum): any => ({
    ...obj,
  });
}

export interface PublishMetricsInput {
  /**
   * <p>Publishes environment metric data to Amazon CloudWatch.</p>
   */
  EnvironmentName: string | undefined;

  /**
   * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metrica.</p>
   */
  MetricData: MetricDatum[] | undefined;
}

export namespace PublishMetricsInput {
  export const filterSensitiveLog = (obj: PublishMetricsInput): any => ({
    ...obj,
  });
}

export interface PublishMetricsOutput {}

export namespace PublishMetricsOutput {
  export const filterSensitiveLog = (obj: PublishMetricsOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The tag resource ARN of the MWAA environments.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag resource tag of the MWAA environments.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The tag resource ARN of the MWAA environments.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag resource key of the MWAA environments.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Provide the security group and subnet IDs for the workers and scheduler.</p>
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * <p>Provide a JSON list of 1 or more security groups IDs by name, in the same VPC as the subnets.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace UpdateNetworkConfigurationInput {
  export const filterSensitiveLog = (obj: UpdateNetworkConfigurationInput): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentInput {
  /**
   * <p>The name of your Amazon MWAA environment that you wish to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Executio Role ARN to update of your Amazon MWAA environment.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Airflow Version to update of your Amazon MWAA environment.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>The S3 Source Bucket ARN to update of your Amazon MWAA environment.</p>
   */
  SourceBucketArn?: string;

  /**
   * <p>The Dags folder S3 Path to update of your Amazon MWAA environment.</p>
   */
  DagS3Path?: string;

  /**
   * <p>The Plugins.zip S3 Path to update of your Amazon MWAA environment.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The Plugins.zip S3 Object Version to update of your Amazon MWAA environment.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The Requirements.txt S3 Path to update of your Amazon MWAA environment.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The Requirements.txt S3 ObjectV ersion to update of your Amazon MWAA environment.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>The Airflow Configuration Options to update of your Amazon MWAA environment.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The Environment Class to update of your Amazon MWAA environment.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers to update of your Amazon MWAA environment.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>The Network Configuration to update of your Amazon MWAA environment.</p>
   */
  NetworkConfiguration?: UpdateNetworkConfigurationInput;

  /**
   * <p>The Logging Configuration to update of your Amazon MWAA environment.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * <p>The Weekly Maintenance Window Start to update of your Amazon MWAA environment.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The Webserver Access Mode to update of your Amazon MWAA environment.</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers to update of your Amazon MWAA environment.</p>
   */
  MinWorkers?: number;
}

export namespace UpdateEnvironmentInput {
  export const filterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
    ...obj,
    ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentOutput {
  /**
   * <p>The ARN to update of your Amazon MWAA environment.</p>
   */
  Arn?: string;
}

export namespace UpdateEnvironmentOutput {
  export const filterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
    ...obj,
  });
}
