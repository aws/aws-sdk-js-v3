import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export interface CreateCliTokenRequest {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateCliTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCliTokenRequest): any => ({
    ...obj,
  });
}

export interface CreateCliTokenResponse {
  /**
   * <p>An Airflow CLI login token.</p>
   */
  CliToken?: string;

  /**
   * <p>The Airflow web server hostname for the environment.</p>
   */
  WebServerHostname?: string;
}

export namespace CreateCliTokenResponse {
  /**
   * @internal
   */
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

export enum LoggingLevel {
  CRITICAL = "CRITICAL",
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

/**
 * <p>Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).</p>
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * <p>Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>).</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Defines the Apache Airflow log level (e.g. <code>INFO</code>) to send to CloudWatch Logs.</p>
   */
  LogLevel: LoggingLevel | string | undefined;
}

export namespace ModuleLoggingConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModuleLoggingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the Apache Airflow log types to send to CloudWatch Logs.</p>
 */
export interface LoggingConfigurationInput {
  /**
   * <p>Publishes Airflow DAG processing logs to CloudWatch Logs.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>Publishes Airflow scheduler logs to CloudWatch Logs.</p>
   */
  SchedulerLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>Publishes Airflow web server logs to CloudWatch Logs.</p>
   */
  WebserverLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>Publishes Airflow worker logs to CloudWatch Logs.</p>
   */
  WorkerLogs?: ModuleLoggingConfigurationInput;

  /**
   * <p>Publishes Airflow task logs to CloudWatch Logs.</p>
   */
  TaskLogs?: ModuleLoggingConfigurationInput;
}

export namespace LoggingConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>A list of subnet IDs. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of security group IDs. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace NetworkConfiguration {
  /**
   * @internal
   */
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
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn: string | undefined;

  /**
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path: string | undefined;

  /**
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.</p>
   */
  KmsKey?: string;

  /**
   * <p>The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>Defines the Apache Airflow logs to send to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * <p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>v2.0.2 - Accepts between 2 to 5. Defaults to 2.</p>
   *             </li>
   *             <li>
   *                 <p>v1.10.12 - Accepts 1.</p>
   *             </li>
   *          </ul>
   */
  Schedulers?: number;
}

export namespace CreateEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentInput): any => ({
    ...obj,
    ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) returned in the response for the environment.</p>
   */
  Arn?: string;
}

export namespace CreateEnvironmentOutput {
  /**
   * @internal
   */
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

/**
 * <p>ValidationException: The provided input is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export interface CreateWebLoginTokenRequest {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

export namespace CreateWebLoginTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWebLoginTokenRequest): any => ({
    ...obj,
  });
}

export interface CreateWebLoginTokenResponse {
  /**
   * <p>An Airflow web server login token.</p>
   */
  WebToken?: string;

  /**
   * <p>The Airflow web server hostname for the environment.</p>
   */
  WebServerHostname?: string;
}

export namespace CreateWebLoginTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWebLoginTokenResponse): any => ({
    ...obj,
    ...(obj.WebToken && { WebToken: SENSITIVE_STRING }),
  });
}

export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentInput): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentOutput {}

export namespace DeleteEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentOutput): any => ({
    ...obj,
  });
}

export interface GetEnvironmentInput {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

export namespace GetEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the error(s) encountered with the last update of the environment.</p>
 */
export interface UpdateError {
  /**
   * <p>The error code that corresponds to the error with the last update.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that corresponds to the error code.</p>
   */
  ErrorMessage?: string;
}

export namespace UpdateError {
  /**
   * @internal
   */
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
 * <p>Describes the status of the last update on the environment, and any errors that were encountered.</p>
 */
export interface LastUpdate {
  /**
   * <p>The status of the last update on the environment.</p>
   */
  Status?: UpdateStatus | string;

  /**
   * <p>The day and time of the last update on the environment.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The error that was encountered during the last update of the environment.</p>
   */
  Error?: UpdateError;

  /**
   * <p>The source of the last update to the environment. Includes internal processes by Amazon MWAA, such as an environment maintenance update.</p>
   */
  Source?: string;
}

export namespace LastUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).</p>
 */
export interface ModuleLoggingConfiguration {
  /**
   * <p>Indicates whether the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Apache Airflow log level for the log type (e.g. <code>DagProcessingLogs</code>). </p>
   */
  LogLevel?: LoggingLevel | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is published. For example, <code>arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*</code>.</p>
   */
  CloudWatchLogGroupArn?: string;
}

export namespace ModuleLoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModuleLoggingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Apache Airflow log types that are published to CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>The Airflow DAG processing logs published to CloudWatch Logs and the log level.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfiguration;

  /**
   * <p>The Airflow scheduler logs published to CloudWatch Logs and the log level.</p>
   */
  SchedulerLogs?: ModuleLoggingConfiguration;

  /**
   * <p>The Airflow web server logs published to CloudWatch Logs and the log level.</p>
   */
  WebserverLogs?: ModuleLoggingConfiguration;

  /**
   * <p>The Airflow worker logs published to CloudWatch Logs and the log level.</p>
   */
  WorkerLogs?: ModuleLoggingConfiguration;

  /**
   * <p>The Airflow task logs published to CloudWatch Logs and the log level.</p>
   */
  TaskLogs?: ModuleLoggingConfiguration;
}

export namespace LoggingConfiguration {
  /**
   * @internal
   */
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
 * <p>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 */
export interface Environment {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name?: string;

  /**
   * <p>The status of the Amazon MWAA environment. Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATING</code> - Indicates the request to create the environment is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_FAILED</code> - Indicates the request to create the environment failed, and the environment could not be created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AVAILABLE</code> - Indicates the request was successful and the environment is ready to use.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UPDATING</code> - Indicates the request to update the environment is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - Indicates the request to delete the environment is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETED</code> - Indicates the request to delete the environment is complete, and the environment has been deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UNAVAILABLE</code> - Indicates the request failed, but the environment was unable to rollback and is not in a stable state.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UPDATE_FAILED</code> - Indicates the request to update the environment failed, and the environment has rolled back successfully and is ready to use.</p>
   *             </li>
   *          </ul>
   *         <p>We recommend reviewing our troubleshooting guide for a list of common errors and their solutions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html">Amazon MWAA troubleshooting</a>.</p>
   */
  Status?: EnvironmentStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment.</p>
   */
  Arn?: string;

  /**
   * <p>The day and time the environment was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Apache Airflow <i>Web server</i> host name for the Amazon MWAA environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html">Accessing the Apache Airflow UI</a>.</p>
   */
  WebserverUrl?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the service-linked role of the environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html">Amazon MWAA Service-linked role</a>.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) encryption key used to encrypt the data in your environment.</p>
   */
  KmsKey?: string;

  /**
   * <p>The Apache Airflow version on your environment. Valid values: <code>1.10.12</code>, <code>2.0.2</code>.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn?: string;

  /**
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path?: string;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The version of the requirements.txt file on your Amazon S3 bucket. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers that run in your environment. For example, <code>20</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>The Apache Airflow logs published to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * <p>The status of the last update on the environment.</p>
   */
  LastUpdate?: LastUpdate;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: <code>TUE:03:30</code>.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The key-value tag pairs associated to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers that run in your environment. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * <p>The number of Apache Airflow schedulers that run in your Amazon MWAA environment.</p>
   */
  Schedulers?: number;
}

export namespace Environment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
  });
}

export interface GetEnvironmentOutput {
  /**
   * <p>An object containing all available details about the environment.</p>
   */
  Environment?: Environment;
}

export namespace GetEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsInput {
  /**
   * <p>Retrieves the next page of the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.</p>
   */
  MaxResults?: number;
}

export namespace ListEnvironmentsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsInput): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsOutput {
  /**
   * <p>Returns a list of Amazon MWAA environments.</p>
   */
  Environments: string[] | undefined;

  /**
   * <p>Retrieves the next page of the results.</p>
   */
  NextToken?: string;
}

export namespace ListEnvironmentsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The key-value tag pairs associated to your environment. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface Dimension {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the dimension.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The value of the dimension.</p>
   */
  Value: string | undefined;
}

export namespace Dimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dimension): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface StatisticSet {
  /**
   * <p>
   *             <b>Internal only</b>. The number of samples used for the statistic set.</p>
   */
  SampleCount?: number;

  /**
   * <p>
   *             <b>Internal only</b>. The sum of values for the sample set.</p>
   */
  Sum?: number;

  /**
   * <p>
   *             <b>Internal only</b>. The minimum value of the sample set.</p>
   */
  Minimum?: number;

  /**
   * <p>
   *             <b>Internal only</b>. The maximum value of the sample set.</p>
   */
  Maximum?: number;
}

export namespace StatisticSet {
  /**
   * @internal
   */
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
 * <p>
 *             <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface MetricDatum {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The time the metric data was received.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The dimensions associated with the metric.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>
   *             <b>Internal only</b>. The value for the metric.</p>
   */
  Value?: number;

  /**
   * <p>
   *             <b>Internal only</b>. The unit used to store the metric.</p>
   */
  Unit?: Unit | string;

  /**
   * <p>
   *             <b>Internal only</b>. The statistical values for the metric.</p>
   */
  StatisticValues?: StatisticSet;
}

export namespace MetricDatum {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDatum): any => ({
    ...obj,
  });
}

export interface PublishMetricsInput {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the environment.</p>
   */
  EnvironmentName: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
   */
  MetricData: MetricDatum[] | undefined;
}

export namespace PublishMetricsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishMetricsInput): any => ({
    ...obj,
  });
}

export interface PublishMetricsOutput {}

export namespace PublishMetricsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishMetricsOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. </p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * <p>A list of security group IDs. A security group must be attached to the same VPC as the subnets. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace UpdateNetworkConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkConfigurationInput): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentInput {
  /**
   * <p>The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>.</p>
   */
  AirflowVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn?: string;

  /**
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path?: string;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * <p>The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: { [key: string]: string };

  /**
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration?: UpdateNetworkConfigurationInput;

  /**
   * <p>The Apache Airflow log types to send to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode | string;

  /**
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * <p>The number of Apache Airflow schedulers to run in your Amazon MWAA environment.</p>
   */
  Schedulers?: number;
}

export namespace UpdateEnvironmentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
    ...obj,
    ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  Arn?: string;
}

export namespace UpdateEnvironmentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentOutput): any => ({
    ...obj,
  });
}
