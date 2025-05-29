// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { MWAAServiceException as __BaseException } from "./MWAAServiceException";

/**
 * <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateCliTokenResponse {
  /**
   * <p>An Airflow CLI login token.</p>
   * @public
   */
  CliToken?: string | undefined;

  /**
   * <p>The Airflow web server hostname for the environment.</p>
   * @public
   */
  WebServerHostname?: string | undefined;
}

/**
 * <p>ResourceNotFoundException: The resource is not available.</p>
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
 * @public
 * @enum
 */
export const EndpointManagement = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type EndpointManagement = (typeof EndpointManagement)[keyof typeof EndpointManagement];

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
 * <p>Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).</p>
 * @public
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * <p>Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>).</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Defines the Apache Airflow log level (e.g. <code>INFO</code>) to send to CloudWatch Logs.</p>
   * @public
   */
  LogLevel: LoggingLevel | undefined;
}

/**
 * <p>Defines the Apache Airflow log types to send to CloudWatch Logs.</p>
 * @public
 */
export interface LoggingConfigurationInput {
  /**
   * <p>Publishes Airflow DAG processing logs to CloudWatch Logs.</p>
   * @public
   */
  DagProcessingLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * <p>Publishes Airflow scheduler logs to CloudWatch Logs.</p>
   * @public
   */
  SchedulerLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * <p>Publishes Airflow web server logs to CloudWatch Logs.</p>
   * @public
   */
  WebserverLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * <p>Publishes Airflow worker logs to CloudWatch Logs.</p>
   * @public
   */
  WorkerLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * <p>Publishes Airflow task logs to CloudWatch Logs.</p>
   * @public
   */
  TaskLogs?: ModuleLoggingConfigurationInput | undefined;
}

/**
 * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>A list of subnet IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A list of security group IDs. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
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
 * <p>This section contains the Amazon Managed Workflows for Apache Airflow (Amazon MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.</p>
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   * @public
   */
  SourceBucketArn: string | undefined;

  /**
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   * @public
   */
  DagS3Path: string | undefined;

  /**
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   * @public
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
   * <p>The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
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
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * <p>The environment class type. Valid values: <code>mw1.micro</code>, <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>, <code>mw1.xlarge</code>, and <code>mw1.2xlarge</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.</p>
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * <p>The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version.
   *             For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (Amazon MWAA)</a>.</p>
   *          <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>,
   *                 <code>2.4.3</code>, <code>2.5.1</code>, <code>2.6.3</code>, <code>2.7.2</code>,
   *             <code>2.8.1</code>, <code>2.9.2</code>, <code>2.10.1</code>, and <code>2.10.3</code>.</p>
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * <p>Defines the Apache Airflow logs to send to CloudWatch Logs.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfigurationInput | undefined;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Defines the access mode for the Apache Airflow <i>web server</i>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * <p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>v2 - For environments larger than mw1.micro, accepts values from
   *                         <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all
   *                     environment sizes except mw1.micro, which defaults to <code>1</code>.</p>
   *             </li>
   *             <li>
   *                <p>v1 - Accepts <code>1</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * <p>Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to <code>SERVICE</code>, Amazon MWAA will create and manage the required VPC endpoints in
   *         your VPC. If set to <code>CUSTOMER</code>, you must create, and manage, the VPC endpoints for your VPC. If you choose to create an environment in a shared VPC, you must set this value to <code>CUSTOMER</code>.
   *         In a shared VPC deployment, the environment will remain in <code>PENDING</code> status until you create the VPC endpoints. If you do not take action to
   *             create the endpoints within 72 hours, the status will change to <code>CREATE_FAILED</code>. You can delete the failed environment and create a new one.</p>
   * @public
   */
  EndpointManagement?: EndpointManagement | undefined;

  /**
   * <p>
   *             The minimum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease,
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * <p>
   *             The maximum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS)
   *             rate, Amazon MWAA will increase the number of web servers up to the number set in <code>MaxWebserers</code>. As TPS rates decrease
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MaxWebservers?: number | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) returned in the response for the environment.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>InternalServerException: An internal error has occurred.</p>
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
 * <p>ValidationException: The provided input is not valid.</p>
 * @public
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
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateWebLoginTokenResponse {
  /**
   * <p>An Airflow web server login token.</p>
   * @public
   */
  WebToken?: string | undefined;

  /**
   * <p>The Airflow web server hostname for the environment.</p>
   * @public
   */
  WebServerHostname?: string | undefined;

  /**
   * <p>The name of the IAM identity creating the web login token. This might be an IAM user, or an assumed or federated identity. For example, <code>assumed-role/Admin/your-name</code>.</p>
   * @public
   */
  IamIdentity?: string | undefined;

  /**
   * <p>The user name of the Apache Airflow identity creating the web login token.</p>
   * @public
   */
  AirflowIdentity?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
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
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Describes the error(s) encountered with the last update of the environment.</p>
 * @public
 */
export interface UpdateError {
  /**
   * <p>The error code that corresponds to the error with the last update.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that corresponds to the error code.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
 * @enum
 */
export const WorkerReplacementStrategy = {
  FORCED: "FORCED",
  GRACEFUL: "GRACEFUL",
} as const;

/**
 * @public
 */
export type WorkerReplacementStrategy = (typeof WorkerReplacementStrategy)[keyof typeof WorkerReplacementStrategy];

/**
 * <p>Describes the status of the last update on the environment, and any errors that were encountered.</p>
 * @public
 */
export interface LastUpdate {
  /**
   * <p>The status of the last update on the environment.</p>
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * <p>The day and time of the last update on the environment.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The error that was encountered during the last update of the environment.</p>
   * @public
   */
  Error?: UpdateError | undefined;

  /**
   * <p>The source of the last update to the environment. Includes internal processes by Amazon MWAA, such as an environment maintenance update.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The worker replacement strategy used in the last update of the environment.</p>
   * @public
   */
  WorkerReplacementStrategy?: WorkerReplacementStrategy | undefined;
}

/**
 * <p>Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).</p>
 * @public
 */
export interface ModuleLoggingConfiguration {
  /**
   * <p>Indicates whether the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Apache Airflow log level for the log type (e.g. <code>DagProcessingLogs</code>). </p>
   * @public
   */
  LogLevel?: LoggingLevel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is published. For example, <code>arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*</code>.</p>
   * @public
   */
  CloudWatchLogGroupArn?: string | undefined;
}

/**
 * <p>Describes the Apache Airflow log types that are published to CloudWatch Logs.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>The Airflow DAG processing logs published to CloudWatch Logs and the log level.</p>
   * @public
   */
  DagProcessingLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * <p>The Airflow scheduler logs published to CloudWatch Logs and the log level.</p>
   * @public
   */
  SchedulerLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * <p>The Airflow web server logs published to CloudWatch Logs and the log level.</p>
   * @public
   */
  WebserverLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * <p>The Airflow worker logs published to CloudWatch Logs and the log level.</p>
   * @public
   */
  WorkerLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * <p>The Airflow task logs published to CloudWatch Logs and the log level.</p>
   * @public
   */
  TaskLogs?: ModuleLoggingConfiguration | undefined;
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
  MAINTENANCE: "MAINTENANCE",
  PENDING: "PENDING",
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
 * <p>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the Amazon MWAA environment.</p>
   *          <p>Valid values:</p>
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
   *                   <code>PENDING</code> - Indicates the request was successful, but the process to create the environment is paused until you create the required
   *                     VPC endpoints in your VPC. After you create the VPC endpoints, the process resumes.</p>
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
   *                   <code>UNAVAILABLE</code> - Indicates the request failed, but the environment did not return to its previous state and is not stable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code> - Indicates the request to update the environment failed, and the environment was restored to its previous state successfully and is ready to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAINTENANCE</code> - Indicates that the environment is undergoing maintenance. Depending on the type of work Amazon MWAA is performing,
   *               your environment might become unavailable during this process. After all operations are done, your environment will return to its status prior to mainteneace operations.
   *             </p>
   *             </li>
   *          </ul>
   *          <p>We recommend reviewing our troubleshooting guide for a list of common errors and their solutions. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html">Amazon MWAA troubleshooting</a>.</p>
   * @public
   */
  Status?: EnvironmentStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The day and time the environment was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Apache Airflow <i>web server</i> host name for the Amazon MWAA environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html">Accessing the Apache Airflow UI</a>.</p>
   * @public
   */
  WebserverUrl?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the service-linked role of the environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html">Amazon MWAA Service-linked role</a>.</p>
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * <p>The KMS encryption key used to encrypt the data in your environment.</p>
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * <p>The Apache Airflow version on your environment.</p>
   *          <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>,
   *                 <code>2.4.3</code>, <code>2.5.1</code>, <code>2.6.3</code>, <code>2.7.2</code>,
   *             <code>2.8.1</code>, <code>2.9.2</code>, <code>2.10.1</code>, and <code>2.10.3</code>.</p>
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   * @public
   */
  SourceBucketArn?: string | undefined;

  /**
   * <p>The relative path to the DAGs folder in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   * @public
   */
  DagS3Path?: string | undefined;

  /**
   * <p>The relative path to the file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/plugins.zip</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * <p>The version of the <code>plugins.zip</code> file in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file.</p>
   *          <p>
   *             Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *         </p>
   *          <p>
   *             <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/requirements.txt</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
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
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
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
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * <p>The environment class type. Valid values: <code>mw1.micro</code>, <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>, <code>mw1.xlarge</code>, and <code>mw1.2xlarge</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * <p>The maximum number of workers that run in your environment. For example, <code>20</code>.</p>
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * <p>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The Apache Airflow logs published to CloudWatch Logs.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>The status of the last update on the environment.</p>
   * @public
   */
  LastUpdate?: LastUpdate | undefined;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: <code>TUE:03:30</code>.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * <p>The key-value tag pairs associated to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Apache Airflow <i>web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * <p>The minimum number of workers that run in your environment. For example, <code>2</code>.</p>
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * <p>The number of Apache Airflow schedulers that run in your Amazon MWAA environment.</p>
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * <p>The VPC endpoint for the environment's web server.</p>
   * @public
   */
  WebserverVpcEndpointService?: string | undefined;

  /**
   * <p>The VPC endpoint for the environment's Amazon RDS database.</p>
   * @public
   */
  DatabaseVpcEndpointService?: string | undefined;

  /**
   * <p>The queue ARN for the environment's <a href="https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/celery.html">Celery Executor</a>. Amazon MWAA uses a Celery Executor
   *             to distribute tasks across multiple workers. When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.</p>
   * @public
   */
  CeleryExecutorQueue?: string | undefined;

  /**
   * <p>Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to <code>SERVICE</code>, Amazon MWAA will create and manage the required VPC endpoints in
   *             your VPC. If set to <code>CUSTOMER</code>, you must create, and manage, the VPC endpoints in your VPC.</p>
   * @public
   */
  EndpointManagement?: EndpointManagement | undefined;

  /**
   * <p>
   *             The minimum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease,
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * <p>
   *             The maximum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS)
   *             rate, Amazon MWAA will increase the number of web servers up to the number set in <code>MaxWebserers</code>. As TPS rates decrease
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MaxWebservers?: number | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * <p>An object containing all available details about the environment.</p>
   * @public
   */
  Environment?: Environment | undefined;
}

/**
 * @public
 * @enum
 */
export const RestApiMethod = {
  DELETE: "DELETE",
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type RestApiMethod = (typeof RestApiMethod)[keyof typeof RestApiMethod];

/**
 * @public
 */
export interface InvokeRestApiRequest {
  /**
   * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Apache Airflow REST API endpoint path to be called. For example,
   *             <code>/dags/123456/clearTaskInstances</code>. For more information, see <a href="https://airflow.apache.org/docs/apache-airflow/stable/stable-rest-api-ref.html">Apache Airflow API</a>
   *          </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The HTTP method used for making Airflow REST API calls. For example,
   *             <code>POST</code>. </p>
   * @public
   */
  Method: RestApiMethod | undefined;

  /**
   * <p>Query parameters to be included in the Apache Airflow REST API call, provided as a
   *             JSON object. </p>
   * @public
   */
  QueryParameters?: __DocumentType | undefined;

  /**
   * <p>The request body for the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  Body?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface InvokeRestApiResponse {
  /**
   * <p>The HTTP status code returned by the Apache Airflow REST API call.</p>
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * <p>The response data from the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
}

/**
 * <p>An exception indicating that a client-side error occurred during the Apache Airflow
 *             REST API call.</p>
 * @public
 */
export class RestApiClientException extends __BaseException {
  readonly name: "RestApiClientException" = "RestApiClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>The HTTP status code returned by the Apache Airflow REST API call.</p>
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * <p>The error response data from the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RestApiClientException, __BaseException>) {
    super({
      name: "RestApiClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RestApiClientException.prototype);
    this.RestApiStatusCode = opts.RestApiStatusCode;
    this.RestApiResponse = opts.RestApiResponse;
  }
}

/**
 * <p>An exception indicating that a server-side error occurred during the Apache Airflow
 *             REST API call.</p>
 * @public
 */
export class RestApiServerException extends __BaseException {
  readonly name: "RestApiServerException" = "RestApiServerException";
  readonly $fault: "client" = "client";
  /**
   * <p>The HTTP status code returned by the Apache Airflow REST API call.</p>
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * <p>The error response data from the Apache Airflow REST API call, provided as a JSON
   *             object.</p>
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RestApiServerException, __BaseException>) {
    super({
      name: "RestApiServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RestApiServerException.prototype);
    this.RestApiStatusCode = opts.RestApiStatusCode;
    this.RestApiResponse = opts.RestApiResponse;
  }
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * <p>Retrieves the next page of the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * <p>Returns a list of Amazon MWAA environments.</p>
   * @public
   */
  Environments: string[] | undefined;

  /**
   * <p>Retrieves the next page of the results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The key-value tag pairs associated to your environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>
 *             <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface Dimension {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the dimension.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The value of the dimension.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>
 *             <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface StatisticSet {
  /**
   * <p>
   *             <b>Internal only</b>. The number of samples used for the statistic set.</p>
   * @public
   */
  SampleCount?: number | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The sum of values for the sample set.</p>
   * @public
   */
  Sum?: number | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The minimum value of the sample set.</p>
   * @public
   */
  Minimum?: number | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The maximum value of the sample set.</p>
   * @public
   */
  Maximum?: number | undefined;
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
 * <p>
 *             <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface MetricDatum {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the metric.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The time the metric data was received.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The dimensions associated with the metric.</p>
   *
   * @deprecated
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The value for the metric.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The unit used to store the metric.</p>
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. The statistical values for the metric.</p>
   *
   * @deprecated
   * @public
   */
  StatisticValues?: StatisticSet | undefined;
}

/**
 * @public
 */
export interface PublishMetricsInput {
  /**
   * <p>
   *             <b>Internal only</b>. The name of the environment.</p>
   * @public
   */
  EnvironmentName: string | undefined;

  /**
   * <p>
   *             <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.</p>
   *
   * @deprecated
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. </p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 * @public
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * <p>A list of security group IDs. A security group must be attached to the same VPC as the subnets. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * <p>The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * <p>The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA.</p>
   *          <p>Before you upgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating
   *             your resources, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/upgrading-environment.html">Upgrading an Amazon MWAA environment</a>.</p>
   *          <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>,
   *                 <code>2.4.3</code>, <code>2.5.1</code>, <code>2.6.3</code>, <code>2.7.2</code>,
   *             <code>2.8.1</code>, <code>2.9.2</code>, <code>2.10.1</code>, and <code>2.10.3</code>.</p>
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
   * @public
   */
  DagS3Path?: string | undefined;

  /**
   * <p>The environment class type. Valid values: <code>mw1.micro</code>,
   *                 <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>,
   *                 <code>mw1.xlarge</code>, and <code>mw1.2xlarge</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>. </p>
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * <p>The Apache Airflow log types to send to CloudWatch Logs.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfigurationInput | undefined;

  /**
   * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * <p>
   *             The maximum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS)
   *             rate, Amazon MWAA will increase the number of web servers up to the number set in <code>MaxWebserers</code>. As TPS rates decrease
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MaxWebservers?: number | undefined;

  /**
   * <p>
   *             The minimum number of web servers that you want to run in your environment.
   *             Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for <code>MaxWebservers</code>
   *             when you interact with your Apache Airflow environment using Apache Airflow REST API, or
   *             the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease,
   *             Amazon MWAA disposes of the additional web servers, and scales down to the number set in <code>MinxWebserers</code>.
   *         </p>
   *          <p>Valid values: For environments larger than mw1.micro, accepts values from
   *                 <code>2</code> to <code>5</code>. Defaults to <code>2</code> for all environment
   *             sizes except mw1.micro, which defaults to <code>1</code>.</p>
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * <p>The worker replacement strategy to use when updating the environment.</p>
   *          <p>You can select one of the following strategies:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Forced -</b> Stops and replaces Apache Airflow workers without waiting for tasks to
   *                     complete before an update.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Graceful -</b> Allows Apache Airflow workers to complete running tasks for up to 12 hours during an update before
   *                     they're stopped and replaced.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerReplacementStrategy?: WorkerReplacementStrategy | undefined;

  /**
   * <p>The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
   * @public
   */
  NetworkConfiguration?: UpdateNetworkConfigurationInput | undefined;

  /**
   * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * <p>The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
   * <p>The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * <p>The number of Apache Airflow schedulers to run in your Amazon MWAA environment.</p>
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
   * @public
   */
  SourceBucketArn?: string | undefined;

  /**
   * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p>
   *          <p>
   *             Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   *             You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see
   *             <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>.
   *         </p>
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
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
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * <p>The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * <p>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
   * @public
   */
  Arn?: string | undefined;
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
export const InvokeRestApiRequestFilterSensitiveLog = (obj: InvokeRestApiRequest): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeRestApiResponseFilterSensitiveLog = (obj: InvokeRestApiResponse): any => ({
  ...obj,
  ...(obj.RestApiResponse && { RestApiResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentInputFilterSensitiveLog = (obj: UpdateEnvironmentInput): any => ({
  ...obj,
  ...(obj.AirflowConfigurationOptions && { AirflowConfigurationOptions: SENSITIVE_STRING }),
});
