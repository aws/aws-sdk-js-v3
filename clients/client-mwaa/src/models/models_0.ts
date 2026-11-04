// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  EndpointManagement,
  EnvironmentStatus,
  LoggingLevel,
  RestApiMethod,
  Unit,
  UpdateStatus,
  WebserverAccessMode,
  WorkerReplacementStrategy,
} from "./enums";

/**
 * @public
 */
export interface CreateCliTokenRequest {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateCliTokenResponse {
  /**
   * An Airflow CLI login token.
   *
   * @public
   */
  CliToken?: string | undefined;

  /**
   * The Airflow web server hostname for the environment.
   *
   * @public
   */
  WebServerHostname?: string | undefined;
}

/**
 * Enables the Apache Airflow log type (e.g. `DagProcessingLogs`) and defines the log level to send to CloudWatch Logs (e.g. `INFO`).
 *
 * @public
 */
export interface ModuleLoggingConfigurationInput {
  /**
   * Indicates whether to enable the Apache Airflow log type (e.g. `DagProcessingLogs`).
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Defines the Apache Airflow log level (e.g. `INFO`) to send to CloudWatch Logs.
   *
   * @public
   */
  LogLevel: LoggingLevel | undefined;
}

/**
 * Defines the Apache Airflow log types to send to CloudWatch Logs.
 *
 * @public
 */
export interface LoggingConfigurationInput {
  /**
   * Publishes Airflow DAG processing logs to CloudWatch Logs.
   *
   * @public
   */
  DagProcessingLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * Publishes Airflow scheduler logs to CloudWatch Logs.
   *
   * @public
   */
  SchedulerLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * Publishes Airflow web server logs to CloudWatch Logs.
   *
   * @public
   */
  WebserverLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * Publishes Airflow worker logs to CloudWatch Logs.
   *
   * @public
   */
  WorkerLogs?: ModuleLoggingConfigurationInput | undefined;

  /**
   * Publishes Airflow task logs to CloudWatch Logs.
   *
   * @public
   */
  TaskLogs?: ModuleLoggingConfigurationInput | undefined;
}

/**
 * Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * A list of subnet IDs. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of security group IDs. For more information, refer to [Security in your VPC on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html).
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * This section contains the Amazon Managed Workflows for Apache Airflow (Amazon MWAA) API reference documentation to create an environment. For more information, refer to [Get started with Amazon Managed Workflows for Apache Airflow](https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html).
 *
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, `arn:aws:iam::123456789:role/my-execution-role`. For more information, refer to [Amazon MWAA Execution role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html).
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, `arn:aws:s3:::my-airflow-bucket-unique-name`. For more information, refer to [Create an Amazon S3 bucket for Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html).
   *
   * @public
   */
  SourceBucketArn: string | undefined;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, `dags`. For more information, refer to [Adding or updating DAGs](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html).
   *
   * @public
   */
  DagS3Path: string | undefined;

  /**
   * The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * @public
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * The relative path to the `plugins.zip` file on your Amazon S3 bucket. For example, `plugins.zip`. If specified, then the `plugins.zip` version is required. For more information, refer to [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, refer to [How S3 Versioning works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html).
   *
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * The relative path to the `requirements.txt` file on your Amazon S3 bucket. For example, `requirements.txt`. If specified, then a version is required. For more information, refer to [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
   * The version of the `requirements.txt` file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, refer to [How S3 Versioning works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html).
   *
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket. For example, `s3://mwaa-environment/startup.sh`.
   *
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
   * The version of the startup shell script in your Amazon S3 bucket. You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file every time you update the script.
   *
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *
   * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
   *
   * For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, refer to [Apache Airflow configuration options](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html).
   *
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * The environment class type. Valid values: `mw1.micro`, `mw1.small`, `mw1.medium`, `mw1.large`, `mw1.xlarge`, and `mw1.2xlarge`. For more information, refer to [Amazon MWAA environment class](https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html).
   *
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. For example, `20`. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in `MinWorkers`.
   *
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, refer to [Create an Amazon MWAA environment](https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html).
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. For more information, refer to [Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (Amazon MWAA)](https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html).
   *
   * Valid values: `2.7.2`, `2.8.1`, `2.9.2`, `2.10.1`, `2.10.3`, `2.11.0`, and `3.0.6`.
   *
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * Defines the Apache Airflow logs to send to CloudWatch Logs.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfigurationInput | undefined;

  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: `DAY:HH:MM`. For example: `TUE:03:30`. You can specify a start time in 30 minute increments only.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * The key-value tag pairs you want to associate to your environment. For example, `"Environment": "Staging"`. For more information, refer to [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Defines the access mode for the Apache Airflow *web server*. For more information, refer to [Apache Airflow access modes](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html).
   *
   * If set to `PUBLIC_AND_PRIVATE`, creates both a public network load balancer (NLB) for browser access and a private VPC endpoint (VPCE) for worker-to-webserver communication. This mode is only available for Apache Airflow version 3.2 and later.
   *
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the `MinWorkers` field. For example, `2`.
   *
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * The number of Apache Airflow schedulers to run in your environment. Valid values:
   *
   * - v2 - For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   * - v1 - Accepts `1`.
   *
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to `SERVICE`, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER`, you must create, and manage, the VPC endpoints for your VPC. If you choose to create an environment in a shared VPC, you must set this value to `CUSTOMER`. In a shared VPC deployment, the environment will remain in `PENDING` status until you create the VPC endpoints. If you do not take action to create the endpoints within 72 hours, the status will change to `CREATE_FAILED`. You can delete the failed environment and create a new one.
   *
   * @public
   */
  EndpointManagement?: EndpointManagement | undefined;

  /**
   * The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in `MaxWebserers`. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MaxWebservers?: number | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * The Amazon Resource Name (ARN) returned in the response for the environment.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWebLoginTokenRequest {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateWebLoginTokenResponse {
  /**
   * An Airflow web server login token.
   *
   * @public
   */
  WebToken?: string | undefined;

  /**
   * The Airflow web server hostname for the environment.
   *
   * @public
   */
  WebServerHostname?: string | undefined;

  /**
   * The name of the IAM identity creating the web login token. This might be an IAM user, or an assumed or federated identity. For example, `assumed-role/Admin/your-name`.
   *
   * @public
   */
  IamIdentity?: string | undefined;

  /**
   * The user name of the Apache Airflow identity creating the web login token.
   *
   * @public
   */
  AirflowIdentity?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
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
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Describes the error(s) encountered with the last update of the environment.
 *
 * @public
 */
export interface UpdateError {
  /**
   * The error code that corresponds to the error with the last update.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that corresponds to the error code.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes the status of the last update on the environment, and any errors that were encountered.
 *
 * @public
 */
export interface LastUpdate {
  /**
   * The status of the last update on the environment.
   *
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * The day and time of the last update on the environment.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The error that was encountered during the last update of the environment.
   *
   * @public
   */
  Error?: UpdateError | undefined;

  /**
   * The source of the last update to the environment. Includes internal processes by Amazon MWAA, such as an environment maintenance update.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The worker replacement strategy used in the last update of the environment.
   *
   * @public
   */
  WorkerReplacementStrategy?: WorkerReplacementStrategy | undefined;
}

/**
 * Describes the Apache Airflow log details for the log type (e.g. `DagProcessingLogs`).
 *
 * @public
 */
export interface ModuleLoggingConfiguration {
  /**
   * Indicates whether the Apache Airflow log type (e.g. `DagProcessingLogs`) is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Apache Airflow log level for the log type (e.g. `DagProcessingLogs`).
   *
   * @public
   */
  LogLevel?: LoggingLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. `DagProcessingLogs`) is published. For example, `arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*`.
   *
   * @public
   */
  CloudWatchLogGroupArn?: string | undefined;
}

/**
 * Describes the Apache Airflow log types that are published to CloudWatch Logs.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * The Airflow DAG processing logs published to CloudWatch Logs and the log level.
   *
   * @public
   */
  DagProcessingLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * The Airflow scheduler logs published to CloudWatch Logs and the log level.
   *
   * @public
   */
  SchedulerLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * The Airflow web server logs published to CloudWatch Logs and the log level.
   *
   * @public
   */
  WebserverLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * The Airflow worker logs published to CloudWatch Logs and the log level.
   *
   * @public
   */
  WorkerLogs?: ModuleLoggingConfiguration | undefined;

  /**
   * The Airflow task logs published to CloudWatch Logs and the log level.
   *
   * @public
   */
  TaskLogs?: ModuleLoggingConfiguration | undefined;
}

/**
 * Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
 *
 * @public
 */
export interface Environment {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the Amazon MWAA environment.
   *
   * Valid values:
   *
   * - `CREATING` - The request to create the environment is in progress.
   * - `CREATING_SNAPSHOT` - The request to update environment details, or upgrade the environment version, is in progress and Amazon MWAA is creating a storage volume snapshot of the Amazon RDS database cluster associated with the environment. A database snapshot is a backup created at a specific point in time. Amazon MWAA uses snapshots to recover environment metadata if the process to update or upgrade an environment fails.
   * - `CREATE_FAILED` - The request to create the environment failed and the environment was not created.
   * - `AVAILABLE` - The request was successful and the environment is ready to use.
   * - `PENDING` - The request was successful, but the process to create the environment is paused until you create the required VPC endpoints in your VPC. After you create the VPC endpoints, the process resumes.
   * - `UPDATING` - The request to update the environment is in progress.
   * - `ROLLING_BACK` - The request to update environment details or upgrade the environment version failed and Amazon MWAA is restoring the environment using the latest storage volume snapshot.
   * - `DELETING` - The request to delete the environment is in progress.
   * - `DELETED` - The request to delete the environment is complete, and the environment has been deleted.
   * - `UNAVAILABLE` - The request failed, but the environment did not return to its previous state and is not stable.
   * - `UPDATE_FAILED` - The request to update the environment failed and the environment was restored to its previous state successfully and is ready to use.
   * - `MAINTENANCE` - The environment is undergoing maintenance. Depending on the type of work Amazon MWAA is performing, your environment might be unavailable during this process. Note that as part of the maintenance work, Amazon MWAA performs with a `GRACEFUL` [`workerReplacementStrategy`](https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html#mwaa-UpdateEnvironment-request-WorkerReplacementStrategy).
   *
   * You can review our troubleshooting guide for a list of common errors and their solutions. For more information, refer to [Amazon MWAA troubleshooting](https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html).
   *
   * @public
   */
  Status?: EnvironmentStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon MWAA environment.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The day and time the environment was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Apache Airflow *web server* host name for the Amazon MWAA environment. For more information, refer to [Accessing the Apache Airflow UI](https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html).
   *
   * @public
   */
  WebserverUrl?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, `arn:aws:iam::123456789:role/my-execution-role`. For more information, refer to [Amazon MWAA Execution role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html).
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the service-linked role of the environment. For more information, refer to [Amazon MWAA Service-linked role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html).
   *
   * @public
   */
  ServiceRoleArn?: string | undefined;

  /**
   * The KMS encryption key used to encrypt the data in your environment.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The Apache Airflow version on your environment.
   *
   * Valid values: `2.7.2`, `2.8.1`, `2.9.2`, `2.10.1`, `2.10.3`, `2.11.0`, and `3.0.6`.
   *
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, `arn:aws:s3:::my-airflow-bucket-unique-name`. For more information, refer to [Create an Amazon S3 bucket for Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html).
   *
   * @public
   */
  SourceBucketArn?: string | undefined;

  /**
   * The relative path to the DAGs folder in your Amazon S3 bucket. For example, `s3://mwaa-environment/dags`. For more information, refer to [Adding or updating DAGs](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html).
   *
   * @public
   */
  DagS3Path?: string | undefined;

  /**
   * The relative path to the file in your Amazon S3 bucket. For example, `s3://mwaa-environment/plugins.zip`. For more information, refer to [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * The version of the `plugins.zip` file in your Amazon S3 bucket. You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file.
   *
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *
   * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
   *
   * For more information, refer to [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * The relative path to the `requirements.txt` file in your Amazon S3 bucket. For example, `s3://mwaa-environment/requirements.txt`. For more information, refer to [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
   * The version of the `requirements.txt` file on your Amazon S3 bucket. You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file.
   *
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *
   * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
   *
   * For more information, refer to [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket. For example, `s3://mwaa-environment/startup.sh`.
   *
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
   * The version of the startup shell script in your Amazon S3 bucket. You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file.
   *
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *
   * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
   *
   * For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. For more information, refer to [Apache Airflow configuration options](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html).
   *
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * The environment class type. Valid values: `mw1.micro`, `mw1.small`, `mw1.medium`, `mw1.large`, `mw1.xlarge`, and `mw1.2xlarge`. For more information, refer to [Amazon MWAA environment class](https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html).
   *
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * The maximum number of workers that run in your environment. For example, `20`.
   *
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The Apache Airflow logs published to CloudWatch Logs.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The status of the last update on the environment.
   *
   * @public
   */
  LastUpdate?: LastUpdate | undefined;

  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: `TUE:03:30`.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * The key-value tag pairs associated to your environment. For example, `"Environment": "Staging"`. For more information, refer to [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Apache Airflow *web server* access mode. For more information, refer to [Apache Airflow access modes](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html).
   *
   * If set to `PUBLIC_AND_PRIVATE`, creates both a public network load balancer (NLB) for browser access and a private VPC endpoint (VPCE) for worker-to-webserver communication. This mode is only available for Apache Airflow version 3.2 and later.
   *
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * The minimum number of workers that run in your environment. For example, `2`.
   *
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * The number of Apache Airflow schedulers that run in your Amazon MWAA environment.
   *
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * The VPC endpoint for the environment's web server.
   *
   * @public
   */
  WebserverVpcEndpointService?: string | undefined;

  /**
   * The VPC endpoint for the environment's Amazon RDS database.
   *
   * @public
   */
  DatabaseVpcEndpointService?: string | undefined;

  /**
   * The queue ARN for the environment's [Celery Executor](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/celery.html). Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers. When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.
   *
   * @public
   */
  CeleryExecutorQueue?: string | undefined;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to `SERVICE`, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER`, you must create, and manage, the VPC endpoints in your VPC.
   *
   * @public
   */
  EndpointManagement?: EndpointManagement | undefined;

  /**
   * The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in `MaxWebserers`. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MaxWebservers?: number | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * An object containing all available details about the environment.
   *
   * @public
   */
  Environment?: Environment | undefined;
}

/**
 * @public
 */
export interface InvokeRestApiRequest {
  /**
   * The name of the Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Apache Airflow REST API endpoint path to be called. For example, `/dags/123456/clearTaskInstances`. For more information, see [Apache Airflow API](https://airflow.apache.org/docs/apache-airflow/stable/stable-rest-api-ref.html)
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The HTTP method used for making Airflow REST API calls. For example, `POST`.
   *
   * @public
   */
  Method: RestApiMethod | undefined;

  /**
   * Query parameters to be included in the Apache Airflow REST API call, provided as a JSON object.
   *
   * @public
   */
  QueryParameters?: __DocumentType | undefined;

  /**
   * The request body for the Apache Airflow REST API call, provided as a JSON object.
   *
   * @public
   */
  Body?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface InvokeRestApiResponse {
  /**
   * The HTTP status code returned by the Apache Airflow REST API call.
   *
   * @public
   */
  RestApiStatusCode?: number | undefined;

  /**
   * The response data from the Apache Airflow REST API call, provided as a JSON object.
   *
   * @public
   */
  RestApiResponse?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * Retrieves the next page of the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve per page. For example, `5` environments per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * Returns a list of Amazon MWAA environments.
   *
   * @public
   */
  Environments: string[] | undefined;

  /**
   * Retrieves the next page of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, `arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment`.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The key-value tag pairs associated to your environment. For more information, refer to [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * **Internal only**. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see [Amazon MWAA performance metrics in Amazon CloudWatch](https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html).
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface Dimension {
  /**
   * **Internal only**. The name of the dimension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * **Internal only**. The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * **Internal only**. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see [Amazon MWAA performance metrics in Amazon CloudWatch](https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html).
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface StatisticSet {
  /**
   * **Internal only**. The number of samples used for the statistic set.
   *
   * @public
   */
  SampleCount?: number | undefined;

  /**
   * **Internal only**. The sum of values for the sample set.
   *
   * @public
   */
  Sum?: number | undefined;

  /**
   * **Internal only**. The minimum value of the sample set.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * **Internal only**. The maximum value of the sample set.
   *
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * **Internal only**. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see [Amazon MWAA performance metrics in Amazon CloudWatch](https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html).
 *
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface MetricDatum {
  /**
   * **Internal only**. The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * **Internal only**. The time the metric data was received, expressed as an ISO 8601 datetime string.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * **Internal only**. The dimensions associated with the metric.
   *
   * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * **Internal only**. The value for the metric.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * **Internal only**. The unit used to store the metric.
   *
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * **Internal only**. The statistical values for the metric.
   *
   * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
   * @public
   */
  StatisticValues?: StatisticSet | undefined;
}

/**
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface PublishMetricsInput {
  /**
   * **Internal only**. The name of the environment.
   *
   * @public
   */
  EnvironmentName: string | undefined;

  /**
   * **Internal only**. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see [Amazon MWAA performance metrics in Amazon CloudWatch](https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html).
   *
   * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
   * @public
   */
  MetricData: MetricDatum[] | undefined;
}

/**
 * @deprecated This type is for internal use and not meant for public use. Data set for this type will be ignored.
 * @public
 */
export interface PublishMetricsOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, `arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value tag pairs you want to associate to your environment. For example, `"Environment": "Staging"`. For more information, refer to [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
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
   * The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, `arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value tag pair you want to remove. For example, `"Environment": "Staging"`.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
 *
 * @public
 */
export interface UpdateNetworkConfigurationInput {
  /**
   * A list of security group IDs. A security group must be attached to the same VPC as the subnets. For more information, refer to [Security in your VPC on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html).
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * The name of your Amazon MWAA environment. For example, `MyMWAAEnvironment`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, `arn:aws:iam::123456789:role/my-execution-role`. For more information, refer to [Amazon MWAA Execution role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html).
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, refer to [Apache Airflow configuration options](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html).
   *
   * @public
   */
  AirflowConfigurationOptions?: Record<string, string> | undefined;

  /**
   * The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA. To downgrade your environment, specify an older version of Apache Airflow supported by Amazon MWAA.
   *
   * Before you upgrade or downgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating your resources, see [Upgrading and downgrading an Amazon MWAA environment](https://docs.aws.amazon.com/mwaa/latest/userguide/upgrading-environment.html).
   *
   * Valid values: `2.7.2`, `2.8.1`, `2.9.2`, `2.10.1`, `2.10.3`, `2.11.0`, and `3.0.6`.
   *
   * @public
   */
  AirflowVersion?: string | undefined;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, `dags`. For more information, refer to [Adding or updating DAGs](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html).
   *
   * @public
   */
  DagS3Path?: string | undefined;

  /**
   * The environment class type. Valid values: `mw1.micro`, `mw1.small`, `mw1.medium`, `mw1.large`, `mw1.xlarge`, and `mw1.2xlarge`. For more information, refer to [Amazon MWAA environment class](https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html).
   *
   * @public
   */
  EnvironmentClass?: string | undefined;

  /**
   * The Apache Airflow log types to send to CloudWatch Logs.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfigurationInput | undefined;

  /**
   * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. For example, `20`. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in `MinWorkers`.
   *
   * @public
   */
  MaxWorkers?: number | undefined;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the `MinWorkers` field. For example, `2`.
   *
   * @public
   */
  MinWorkers?: number | undefined;

  /**
   * The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in `MaxWebserers`. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MaxWebservers?: number | undefined;

  /**
   * The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers`.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5`. Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1`.
   *
   * @public
   */
  MinWebservers?: number | undefined;

  /**
   * The worker replacement strategy to use when updating the environment.
   *
   * You can select one of the following strategies:
   *
   * - **Forced -** Stops and replaces Apache Airflow workers without waiting for tasks to complete before an update.
   * - **Graceful -** Allows Apache Airflow workers to complete running tasks for up to 12 hours during an update before they're stopped and replaced.
   *
   * @public
   */
  WorkerReplacementStrategy?: WorkerReplacementStrategy | undefined;

  /**
   * The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * @public
   */
  NetworkConfiguration?: UpdateNetworkConfigurationInput | undefined;

  /**
   * The relative path to the `plugins.zip` file on your Amazon S3 bucket. For example, `plugins.zip`. If specified, then the plugins.zip version is required. For more information, refer to [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * @public
   */
  PluginsS3Path?: string | undefined;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a `plugins.zip` file is updated. For more information, refer to [How S3 Versioning works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html).
   *
   * @public
   */
  PluginsS3ObjectVersion?: string | undefined;

  /**
   * The relative path to the `requirements.txt` file on your Amazon S3 bucket. For example, `requirements.txt`. If specified, then a file version is required. For more information, refer to [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * @public
   */
  RequirementsS3Path?: string | undefined;

  /**
   * The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a `requirements.txt` file is updated. For more information, refer to [How S3 Versioning works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html).
   *
   * @public
   */
  RequirementsS3ObjectVersion?: string | undefined;

  /**
   * The number of Apache Airflow schedulers to run in your Amazon MWAA environment.
   *
   * @public
   */
  Schedulers?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, `arn:aws:s3:::my-airflow-bucket-unique-name`. For more information, refer to [Create an Amazon S3 bucket for Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html).
   *
   * @public
   */
  SourceBucketArn?: string | undefined;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket. For example, `s3://mwaa-environment/startup.sh`.
   *
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3Path?: string | undefined;

  /**
   * The version of the startup shell script in your Amazon S3 bucket. You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file every time you update the script.
   *
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
   *
   * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
   *
   * For more information, refer to [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html).
   *
   * @public
   */
  StartupScriptS3ObjectVersion?: string | undefined;

  /**
   * The Apache Airflow *Web server* access mode. For more information, refer to [Apache Airflow access modes](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html).
   *
   * If set to `PUBLIC_AND_PRIVATE`, creates both a public network load balancer (NLB) for browser access and a private VPC endpoint (VPCE) for worker-to-webserver communication. This mode is only available for Apache Airflow version 3.2 and later.
   *
   * @public
   */
  WebserverAccessMode?: WebserverAccessMode | undefined;

  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: `DAY:HH:MM`. For example: `TUE:03:30`. You can specify a start time in 30 minute increments only.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, `arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment`.
   *
   * @public
   */
  Arn?: string | undefined;
}
