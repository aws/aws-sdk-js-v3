// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MWAAServiceException as __BaseException } from "./MWAAServiceException";

/**
 * @public
 * <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateCliTokenRequest {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateCliTokenResponse {
  /**
   * @public
   * <p>An Airflow CLI login token.</p>
   */
  CliToken?: string;

  /**
   * @public
   * <p>The Airflow web server hostname for the environment.</p>
   */
  WebServerHostname?: string;
}

/**
 * @public
 * <p>ResourceNotFoundException: The resource is not available.</p>
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
 * @enum
 */
export const LoggingLevel = {
  CRITICAL: "CRITICAL",
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * <p>Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).</p>
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * @public
   * <p>Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>).</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>Defines the Apache Airflow log level (e.g. <code>INFO</code>) to send to CloudWatch Logs.</p>
   */
  LogLevel: LoggingLevel | undefined;
}

/**
 * @public
 * <p>Defines the Apache Airflow log types to send to CloudWatch Logs.</p>
 */
export interface LoggingConfigurationInput {
  /**
   * @public
   * <p>Publishes Airflow DAG processing logs to CloudWatch Logs.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfigurationInput;

  /**
   * @public
   * <p>Publishes Airflow scheduler logs to CloudWatch Logs.</p>
   */
  SchedulerLogs?: ModuleLoggingConfigurationInput;

  /**
   * @public
   * <p>Publishes Airflow web server logs to CloudWatch Logs.</p>
   */
  WebserverLogs?: ModuleLoggingConfigurationInput;

  /**
   * @public
   * <p>Publishes Airflow worker logs to CloudWatch Logs.</p>
   */
  WorkerLogs?: ModuleLoggingConfigurationInput;

  /**
   * @public
   * <p>Publishes Airflow task logs to CloudWatch Logs.</p>
   */
  TaskLogs?: ModuleLoggingConfigurationInput;
}

/**
 * @public
 * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface NetworkConfiguration {
  /**
   * @public
   * <p>A list of subnet IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>A list of security group IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * @enum
 */
export const WebserverAccessMode = {
  PRIVATE_ONLY: "PRIVATE_ONLY",
  PUBLIC_ONLY: "PUBLIC_ONLY",
} as const;

/**
 * @public
 */
export type WebserverAccessMode = (typeof WebserverAccessMode)[keyof typeof WebserverAccessMode];

/**
 * @public
 * <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.</p>
 */
export interface CreateEnvironmentInput {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn: string | undefined;

  /**
   * @public
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path: string | undefined;

  /**
   * @public
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * @public
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * @public
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * @public
   * <p>The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3Path?: string;

  /**
   * @public
   * <p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file
   *             every time you update the script.
   *         </p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3ObjectVersion?: string;

  /**
   * @public
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: Record<string, string>;

  /**
   * @public
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * @public
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.</p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values:
   *             <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.</p>
   */
  AirflowVersion?: string;

  /**
   * @public
   * <p>Defines the Apache Airflow logs to send to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * @public
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * @public
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode;

  /**
   * @public
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * @public
   * <p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>v2 - Accepts between 2 to 5. Defaults to 2.</p>
   *             </li>
   *             <li>
   *                <p>v1 - Accepts 1.</p>
   *             </li>
   *          </ul>
   */
  Schedulers?: number;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) returned in the response for the environment.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>InternalServerException: An internal error has occurred.</p>
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
 * <p>ValidationException: The provided input is not valid.</p>
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

/**
 * @public
 */
export interface CreateWebLoginTokenRequest {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateWebLoginTokenResponse {
  /**
   * @public
   * <p>An Airflow web server login token.</p>
   */
  WebToken?: string;

  /**
   * @public
   * <p>The Airflow web server hostname for the environment.</p>
   */
  WebServerHostname?: string;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentOutput {}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Describes the error(s) encountered with the last update of the environment.</p>
 */
export interface UpdateError {
  /**
   * @public
   * <p>The error code that corresponds to the error with the last update.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that corresponds to the error code.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * <p>Describes the status of the last update on the environment, and any errors that were encountered.</p>
 */
export interface LastUpdate {
  /**
   * @public
   * <p>The status of the last update on the environment.</p>
   */
  Status?: UpdateStatus;

  /**
   * @public
   * <p>The day and time of the last update on the environment.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The error that was encountered during the last update of the environment.</p>
   */
  Error?: UpdateError;

  /**
   * @public
   * <p>The source of the last update to the environment. Includes internal processes by Amazon MWAA, such as an environment maintenance update.</p>
   */
  Source?: string;
}

/**
 * @public
 * <p>Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).</p>
 */
export interface ModuleLoggingConfiguration {
  /**
   * @public
   * <p>Indicates whether the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Apache Airflow log level for the log type (e.g. <code>DagProcessingLogs</code>). </p>
   */
  LogLevel?: LoggingLevel;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is published. For example, <code>arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*</code>.</p>
   */
  CloudWatchLogGroupArn?: string;
}

/**
 * @public
 * <p>Describes the Apache Airflow log types that are published to CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * @public
   * <p>The Airflow DAG processing logs published to CloudWatch Logs and the log level.</p>
   */
  DagProcessingLogs?: ModuleLoggingConfiguration;

  /**
   * @public
   * <p>The Airflow scheduler logs published to CloudWatch Logs and the log level.</p>
   */
  SchedulerLogs?: ModuleLoggingConfiguration;

  /**
   * @public
   * <p>The Airflow web server logs published to CloudWatch Logs and the log level.</p>
   */
  WebserverLogs?: ModuleLoggingConfiguration;

  /**
   * @public
   * <p>The Airflow worker logs published to CloudWatch Logs and the log level.</p>
   */
  WorkerLogs?: ModuleLoggingConfiguration;

  /**
   * @public
   * <p>The Airflow task logs published to CloudWatch Logs and the log level.</p>
   */
  TaskLogs?: ModuleLoggingConfiguration;
}

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ROLLING_BACK: "ROLLING_BACK",
  UNAVAILABLE: "UNAVAILABLE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * <p>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 */
export interface Environment {
  /**
   * @public
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the Amazon MWAA environment. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Indicates the request to create the environment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING_SNAPSHOT</code> - Indicates the request to update environment details, or upgrade the environment version, is in progress and Amazon MWAA is creating a storage volume snapshot of the Amazon RDS
   *                     database cluster associated with the environment. A database snapshot is a backup created at a specific point in time. Amazon MWAA uses snapshots to recover environment metadata if the process to update or upgrade
   *                     an environment fails.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - Indicates the request to create the environment failed, and the environment could not be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Indicates the request was successful and the environment is ready to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - Indicates the request to update the environment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLING_BACK</code> - Indicates the request to update environment details, or upgrade the environment version, failed and Amazon MWAA is restoring the environment using the latest storage volume snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Indicates the request to delete the environment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates the request to delete the environment is complete, and the environment has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAVAILABLE</code> - Indicates the request failed, but the environment was unable to rollback and is not in a stable state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> - Indicates the request to update the environment failed, and the environment has rolled back successfully and is ready to use.</p>
   *             </li>
   *          </ul>
   *          <p>We recommend reviewing our troubleshooting guide for a list of common errors and their solutions. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html">Amazon MWAA troubleshooting</a>.</p>
   */
  Status?: EnvironmentStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The day and time the environment was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The Apache Airflow <i>Web server</i> host name for the Amazon MWAA environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html">Accessing the Apache Airflow UI</a>.</p>
   */
  WebserverUrl?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the service-linked role of the environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html">Amazon MWAA Service-linked role</a>.</p>
   */
  ServiceRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (KMS) encryption key used to encrypt the data in your environment.</p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>The Apache Airflow version on your environment. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>.</p>
   */
  AirflowVersion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn?: string;

  /**
   * @public
   * <p>The relative path to the DAGs folder in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path?: string;

  /**
   * @public
   * <p>The relative path to the file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/plugins.zip</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * @public
   * <p>The version of the <code>plugins.zip</code> file in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the <code>requirements.txt</code> file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/requirements.txt</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * @public
   * <p>The version of the <code>requirements.txt </code> file on your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
   *         </p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3Path?: string;

  /**
   * @public
   * <p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3ObjectVersion?: string;

  /**
   * @public
   * <p>A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: Record<string, string>;

  /**
   * @public
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * @public
   * <p>The maximum number of workers that run in your environment. For example, <code>20</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * @public
   * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>The Apache Airflow logs published to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;

  /**
   * @public
   * <p>The status of the last update on the environment.</p>
   */
  LastUpdate?: LastUpdate;

  /**
   * @public
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: <code>TUE:03:30</code>.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * @public
   * <p>The key-value tag pairs associated to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode;

  /**
   * @public
   * <p>The minimum number of workers that run in your environment. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * @public
   * <p>The number of Apache Airflow schedulers that run in your Amazon MWAA environment.</p>
   */
  Schedulers?: number;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * @public
   * <p>An object containing all available details about the environment.</p>
   */
  Environment?: Environment;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * @public
   * <p>Retrieves the next page of the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * @public
   * <p>Returns a list of Amazon MWAA environments.</p>
   */
  Environments: string[] | undefined;

  /**
   * @public
   * <p>Retrieves the next page of the results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The key-value tag pairs associated to your environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>
 *             <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface Dimension {
  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The name of the dimension.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The value of the dimension.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>
 *             <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface StatisticSet {
  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The number of samples used for the statistic set.</p>
   */
  SampleCount?: number;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The sum of values for the sample set.</p>
   */
  Sum?: number;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The minimum value of the sample set.</p>
   */
  Minimum?: number;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The maximum value of the sample set.</p>
   */
  Maximum?: number;
}

/**
 * @public
 * @enum
 */
export const Unit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * <p>
 *             <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 */
export interface MetricDatum {
  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The time the metric data was received.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The dimensions associated with the metric.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The value for the metric.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The unit used to store the metric.</p>
   */
  Unit?: Unit;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The statistical values for the metric.</p>
   */
  StatisticValues?: StatisticSet;
}

/**
 * @public
 */
export interface PublishMetricsInput {
  /**
   * @public
   * <p>
   *             <b>Internal only</b>. The name of the environment.</p>
   */
  EnvironmentName: string | undefined;

  /**
   * @public
   * <p>
   *             <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
   */
  MetricData: MetricDatum[] | undefined;
}

/**
 * @public
 */
export interface PublishMetricsOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. </p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * @public
   * <p>A list of security group IDs. A security group must be attached to the same VPC as the subnets. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * @public
   * <p>The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA.</p>
   *          <p>Before you upgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating
   *             your resources, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/upgrading-environment.html">Upgrading an Amazon MWAA environment</a>.</p>
   *          <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>.</p>
   */
  AirflowVersion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   */
  SourceBucketArn?: string;

  /**
   * @public
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   */
  DagS3Path?: string;

  /**
   * @public
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   */
  PluginsS3Path?: string;

  /**
   * @public
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  PluginsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   */
  RequirementsS3Path?: string;

  /**
   * @public
   * <p>The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   */
  RequirementsS3ObjectVersion?: string;

  /**
   * @public
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3Path?: string;

  /**
   * @public
   * <p>
   *             The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file
   *             every time you update the script.
   *         </p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   */
  StartupScriptS3ObjectVersion?: string;

  /**
   * @public
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   */
  AirflowConfigurationOptions?: Record<string, string>;

  /**
   * @public
   * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   */
  EnvironmentClass?: string;

  /**
   * @public
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   */
  MaxWorkers?: number;

  /**
   * @public
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   */
  NetworkConfiguration?: UpdateNetworkConfigurationInput;

  /**
   * @public
   * <p>The Apache Airflow log types to send to CloudWatch Logs.</p>
   */
  LoggingConfiguration?: LoggingConfigurationInput;

  /**
   * @public
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * @public
   * <p>The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   */
  WebserverAccessMode?: WebserverAccessMode;

  /**
   * @public
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   */
  MinWorkers?: number;

  /**
   * @public
   * <p>The number of Apache Airflow schedulers to run in your Amazon MWAA environment.</p>
   */
  Schedulers?: number;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   */
  Arn?: string;
}

/**
 * @internal
 */
export const CreateCliTokenResponseFilterSensitiveLog = (obj: CreateCliTokenResponse): any => ({
  ...obj,
  ...(obj.CliToken && { CliToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentInputFilterSensitiveLog = (obj: CreateEnvironmentInput): any => ({
  ...obj,
  ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWebLoginTokenResponseFilterSensitiveLog = (obj: CreateWebLoginTokenResponse): any => ({
  ...obj,
  ...(obj.WebToken && { WebToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
  ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
  ...obj,
  ...(obj.Environment && { Environment: EnvironmentFilterSensitiveLog(obj.Environment) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentInputFilterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
  ...obj,
  ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
});
