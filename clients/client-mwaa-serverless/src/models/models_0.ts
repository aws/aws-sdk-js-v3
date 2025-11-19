// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import { EncryptionType, EngineVersion, RunType, TaskInstanceStatus, WorkflowRunStatus, WorkflowStatus } from "./enums";

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of tags that are associated with the resource, where each tag consists of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains information about a field that failed validation, including the field name and a descriptive error message.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A message that describes why the field failed validation.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to add tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A map of tags to add to the resource. Each tag consists of a key-value pair.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface GetTaskInstanceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains the task instance.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The unique identifier of the task instance to retrieve.</p>
   * @public
   */
  TaskInstanceId: string | undefined;

  /**
   * <p>The unique identifier of the workflow run that contains the task instance.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetTaskInstanceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this task instance.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run that contains this task instance.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The unique identifier of this task instance.</p>
   * @public
   */
  TaskInstanceId: string | undefined;

  /**
   * <p>The version of the workflow that contains this task instance.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The current status of the task instance.</p>
   * @public
   */
  Status?: TaskInstanceStatus | undefined;

  /**
   * <p>The duration of the task instance execution in seconds. This value is null if the task is not complete.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * <p>The name of the Apache Airflow operator used for this task instance.</p>
   * @public
   */
  OperatorName?: string | undefined;

  /**
   * <p>The timestamp when the task instance was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The timestamp when the task instance completed execution, in ISO 8601 date-time format. This value is null if the task is not complete.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The timestamp when the task instance started execution, in ISO 8601 date-time format. This value is null if the task has not started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The attempt number for this task instance.</p>
   * @public
   */
  AttemptNumber?: number | undefined;

  /**
   * <p>The error message if the task instance failed. This value is null if the task completed successfully.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The unique identifier of the task definition within the workflow.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The CloudWatch log stream name for this task instance execution.</p>
   * @public
   */
  LogStream?: string | undefined;

  /**
   * <p>Cross-communication data exchanged between tasks in the workflow execution.</p>
   * @public
   */
  Xcom?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTaskInstancesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains the run.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run for which you want a list of task instances.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The maximum number of task instances to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to <code>ListTaskInstances</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a task instance within a workflow run, including its status and execution details.</p>
 * @public
 */
export interface TaskInstanceSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this task instance.</p>
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * <p>The version of the workflow that contains this task instance.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The unique identifier of the workflow run that contains this task instance.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The unique identifier of this task instance.</p>
   * @public
   */
  TaskInstanceId?: string | undefined;

  /**
   * <p>The current status of the task instance.</p>
   * @public
   */
  Status?: TaskInstanceStatus | undefined;

  /**
   * <p>The duration of the task instance execution in seconds. This value is null if the task is not complete.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * <p>The name of the Apache Airflow operator used for this task instance.</p>
   * @public
   */
  OperatorName?: string | undefined;
}

/**
 * @public
 */
export interface ListTaskInstancesResponse {
  /**
   * <p>A list of task instance summaries for the specified workflow run.</p>
   * @public
   */
  TaskInstances?: TaskInstanceSummary[] | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource. Only the keys are required; the values are ignored.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Specifies the Amazon S3 location of a workflow definition file. This structure contains the bucket name, object key, and optional version ID for the workflow definition. Amazon Managed Workflows for Apache Airflow Serverless takes a snapshot of the definition file at the time of workflow creation or update, ensuring that the workflow behavior remains consistent even if the source file is modified. The definition must be a valid YAML file that uses supported Amazon Web Services operators and Amazon Managed Workflows for Apache Airflow Serverless syntax.</p>
 * @public
 */
export interface DefinitionS3Location {
  /**
   * <p>The name of the Amazon S3 bucket that contains the workflow definition file.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The key (name) of the workflow definition file within the S3 bucket.</p>
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * <p>Optional. The version ID of the workflow definition file in Amazon S3. If not specified, the latest version is used.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * <p>Configuration for encrypting workflow data at rest and in transit. Amazon Managed Workflows for Apache Airflow Serverless provides comprehensive encryption capabilities to protect sensitive workflow data, parameters, and execution logs. When using customer-managed keys, the service integrates with Amazon Web Services KMS to provide fine-grained access control and audit capabilities. Encryption is applied consistently across the distributed execution environment including task containers, metadata storage, and log streams.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The type of encryption to use. Values are <code>AWS_MANAGED_KEY</code> (Amazon Web Services manages the encryption key) or <code>CUSTOMER_MANAGED_KEY</code> (you provide a KMS key).</p>
   * @public
   */
  Type: EncryptionType | undefined;

  /**
   * <p>The ID or ARN of the Amazon Web Services KMS key to use for encryption. Required when <code>Type</code> is <code>CUSTOMER_MANAGED_KEY</code>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>Configuration for workflow logging that specifies where you should store your workflow execution logs. Amazon Managed Workflows for Apache Airflow Serverless provides comprehensive logging capabilities that capture workflow execution details, task-level information, and system events. Logs are automatically exported to your specified CloudWatch log group using remote logging functionality, providing centralized observability across the distributed, multi-tenant execution environment. This enables effective debugging, monitoring, and compliance auditing of workflow executions.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>The name of the CloudWatch log group where workflow execution logs are stored.</p>
   * @public
   */
  LogGroupName: string | undefined;
}

/**
 * <p>Network configuration for workflow execution. Specifies VPC security groups and subnets for secure network access. When provided, Amazon Managed Workflows for Apache Airflow Serverless deploys ECS worker tasks in your specified VPC configuration, enabling secure access to VPC-only resources. The service uses a proxy API container architecture where one container handles external communication while the worker container connects to your VPC for task execution. This design provides both security isolation and connectivity flexibility.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>A list of VPC security group IDs to associate with the workflow execution environment.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of VPC subnet IDs where the workflow execution environment is deployed.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>The name of the workflow. You must use unique workflow names within your Amazon Web Services account. The service generates a unique identifier that is appended to ensure temporal uniqueness across the account lifecycle.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token prevents duplicate workflow creation requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The Amazon S3 location where the workflow definition file is stored. This must point to a valid YAML file that defines the workflow structure using supported Amazon Web Services operators and tasks. Amazon Managed Workflows for Apache Airflow Serverless takes a snapshot of the definition at creation time, so subsequent changes to the Amazon S3 object will not affect the workflow unless you create a new version. In your YAML definition, include task dependencies, scheduling information, and operator configurations that are compatible with the Amazon Managed Workflows for Apache Airflow Serverless execution environment.</p>
   * @public
   */
  DefinitionS3Location: DefinitionS3Location | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon Managed Workflows for Apache Airflow Serverless assumes when executing the workflow. This role must have the necessary permissions to access the required Amazon Web Services services and resources that your workflow tasks will interact with. The role is used for task execution in the isolated, multi-tenant environment and should follow the principle of least privilege. Amazon Managed Workflows for Apache Airflow Serverless validates role access during workflow creation but runtime permission checks are performed by the target services.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An optional description of the workflow that you can use to provide additional context about the workflow's purpose and functionality.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for encrypting workflow data at rest and in transit. Specifies the encryption type and optional KMS key for customer-managed encryption.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The configuration for workflow logging. Specifies the CloudWatch log group where workflow execution logs are stored. Amazon Managed Workflows for Apache Airflow Serverless automatically exports worker logs and task-level information to the specified log group in your account using remote logging functionality. This provides comprehensive observability for debugging and monitoring workflow execution across the distributed, serverless environment.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that you want to use for this workflow. This determines the feature set, supported operators, and execution environment capabilities available to your workflow. Amazon Managed Workflows for Apache Airflow Serverless maintains backward compatibility across versions while introducing new features and improvements. Currently supports version 1 with plans for additional versions as the service evolves.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>Network configuration for the workflow execution environment, including VPC security groups and subnets for secure network access. When specified, Amazon Managed Workflows for Apache Airflow Serverless deploys ECS worker tasks in your customer VPC to provide secure connectivity to your resources. If not specified, tasks run in the service's default worker VPC with network isolation from other customers. This configuration enables secure access to VPC-only resources like RDS databases or private endpoints.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>A map of tags to assign to the workflow resource. Tags are key-value pairs that are used for resource organization and cost allocation.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The trigger mode for the workflow execution.</p>
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created workflow. This ARN uniquely identifies the workflow resource.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The timestamp when the workflow was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A unique identifier for this revision of the workflow configuration. This ID changes when the workflow is updated and you can use it for optimistic concurrency control in update operations. The revision ID helps prevent conflicting updates and ensures that updates are applied to the expected version of the workflow configuration.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The current status of the workflow. Possible values are <code>READY</code> (workflow is ready to run) and <code>DELETING</code> (workflow is being deleted).</p>
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * <p>The version identifier of the workflow. This is a service-generated alphanumeric string that uniquely identifies this version of the workflow. Amazon Managed Workflows for Apache Airflow Serverless uses a version-first approach where each workflow can have multiple immutable versions, which allows you to maintain different configurations and roll back to previous versions as needed. The version identifier is used in ARNs and API operations to reference specific workflow versions.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>A Boolean flag that indicates whether this workflow version is the latest version of the workflow.</p>
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * <p>Warning messages generated during workflow creation.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow you want to delete.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>Optional. The specific version of the workflow to delete. If not specified, all versions of the workflow are deleted.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted workflow.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The version of the workflow that was deleted.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow you want to retrieve.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>Optional. The specific version of the workflow to retrieve. If not specified, the latest version is returned.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * <p>The configuration to use to schedule automated workflow execution using cron expressions. Amazon Managed Workflows for Apache Airflow Serverless integrates with EventBridge Scheduler to provide cost-effective, timezone-aware scheduling capabilities. The service supports both time-based and event-based scheduling (event-based scheduling available post-GA). When a workflow definition includes scheduling information, Amazon Managed Workflows for Apache Airflow Serverless automatically configures the appropriate triggers and ensures only one version of a workflow has an active schedule at any time.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>A cron expression that defines when the workflow is automatically executed. Uses standard cron syntax.</p>
   * @public
   */
  CronExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The version identifier of the workflow.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp when the workflow was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the workflow was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The encryption configuration for the workflow.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The logging configuration for the workflow.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that this workflow uses.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>The current status of the workflow.</p>
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * <p>The Amazon S3 location of the workflow definition file.</p>
   * @public
   */
  DefinitionS3Location?: DefinitionS3Location | undefined;

  /**
   * <p>The schedule configuration for the workflow, including cron expressions for automated execution. Amazon Managed Workflows for Apache Airflow Serverless uses EventBridge Scheduler for cost-effective, timezone-aware scheduling. When a workflow includes schedule information in its YAML definition, the service automatically configures the appropriate triggers for automated execution. Only one version of a workflow can have an active schedule at any given time.</p>
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for workflow execution.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The network configuration for the workflow execution environment.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The trigger mode for the workflow execution.</p>
   * @public
   */
  TriggerMode?: string | undefined;

  /**
   * <p>The workflow definition content.</p>
   * @public
   */
  WorkflowDefinition?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>The maximum number of workflows you want to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to <code>ListWorkflows</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a workflow, including basic identification and metadata.</p>
 * @public
 */
export interface WorkflowSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The version identifier of the workflow.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp when the workflow was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the workflow was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The current status of the workflow.</p>
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * <p>The trigger mode for the workflow execution.</p>
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>A list of workflow summaries for all workflows in your account.</p>
   * @public
   */
  Workflows: WorkflowSummary[] | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow you want to update.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The Amazon S3 location where the updated workflow definition file is stored.</p>
   * @public
   */
  DefinitionS3Location: DefinitionS3Location | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon Managed Workflows for Apache Airflow Serverless assumes when it executes the updated workflow.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An updated description for the workflow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Updated logging configuration for the workflow.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that you want to use for the updated workflow.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>Updated network configuration for the workflow execution environment.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The trigger mode for the workflow execution.</p>
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated workflow.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The timestamp when the workflow was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The version identifier of the updated workflow.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>Warning messages generated during workflow update.</p>
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains the run.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to retrieve.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>Detailed information about a workflow run execution, including timing, status, error information, and associated task instances. This structure provides comprehensive visibility into the workflow execution lifecycle within the Amazon Managed Workflows for Apache Airflow Serverless serverless environment. The service tracks execution across distributed ECS worker tasks and provides detailed timing information, error diagnostics, and task instance relationships to support effective monitoring and troubleshooting of complex workflow executions.</p>
 * @public
 */
export interface WorkflowRunDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this run.</p>
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * <p>The version of the workflow used for this run.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The unique identifier of this workflow run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The type of workflow run.</p>
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * <p>The timestamp when the workflow run started execution, in ISO 8601 date-time format.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The timestamp when the workflow run was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the workflow run completed execution, in ISO 8601 date-time format. This value is null if the run is not complete.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The timestamp when the workflow run was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The total duration of the workflow run execution in seconds. This value is null if the run is not complete.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The error message if the workflow run failed. This value is null if the run completed successfully.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>A list of task instance IDs that are part of this workflow run.</p>
   * @public
   */
  TaskInstances?: string[] | undefined;

  /**
   * <p>The current execution state of the workflow run.</p>
   * @public
   */
  RunState?: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this run.</p>
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * <p>The version of the workflow that is used for this run.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The unique identifier of this workflow run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The type of workflow run. Values are <code>ON_DEMAND</code> (manually triggered) or <code>SCHEDULED</code> (automatically triggered by schedule).</p>
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * <p>Parameters that were overridden for this specific workflow run.</p>
   * @public
   */
  OverrideParameters?: Record<string, __DocumentType> | undefined;

  /**
   * <p>Detailed information about the workflow run execution, including timing, status, and task instances.</p>
   * @public
   */
  RunDetail?: WorkflowRunDetail | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * <p>The maximum number of workflow runs to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to <code>ListWorkflowRuns</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow for which you want a list of runs.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>Optional. The specific version of the workflow for which you want a list of runs. If not specified, runs for all versions are returned.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * <p>Summary information about a workflow run's execution details, including status and timing information.</p>
 * @public
 */
export interface RunDetailSummary {
  /**
   * <p>The current status of the workflow run.</p>
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * <p>The timestamp when the workflow run was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The timestamp when the workflow run started execution, in ISO 8601 date-time format.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The timestamp when the workflow run completed execution, in ISO 8601 date-time format. This value is null if the run is not complete.</p>
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * <p>Summary information about a workflow run, including basic identification and status information.</p>
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * <p>The unique identifier of the workflow run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this run.</p>
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * <p>The version of the workflow used for this run.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The type of workflow run.</p>
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * <p>Summary details about the workflow run execution.</p>
   * @public
   */
  RunDetailSummary?: RunDetailSummary | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * <p>A list of workflow run summaries for the specified workflow.</p>
   * @public
   */
  WorkflowRuns?: WorkflowRunSummary[] | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow you want to run.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token prevents duplicate workflow run requests.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Optional parameters to override default workflow parameters for this specific run. These parameters are passed to the workflow during execution and can be used to customize behavior without modifying the workflow definition. Parameters are made available as environment variables to tasks and you can reference them within the YAML workflow definition using standard parameter substitution syntax.</p>
   * @public
   */
  OverrideParameters?: Record<string, __DocumentType> | undefined;

  /**
   * <p>Optional. The specific version of the workflow to execute. If not specified, the latest version is used.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * <p>The unique identifier of the newly started workflow run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The initial status of the workflow run. This is typically <code>STARTING</code> when you first create the run.</p>
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * <p>The timestamp when the workflow run was started, in ISO 8601 date-time format.</p>
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains the run you want to stop.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>The unique identifier of the workflow run to stop.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains the stopped run.</p>
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * <p>The version of the workflow that was stopped.</p>
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * <p>The unique identifier of the stopped workflow run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The status of the workflow run after the stop operation. This is typically <code>STOPPING</code> or <code>STOPPED</code>.</p>
   * @public
   */
  Status?: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsRequest {
  /**
   * <p>The maximum number of workflow versions to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to <code>ListWorkflowVersions</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow for which you want to list versions.</p>
   * @public
   */
  WorkflowArn: string | undefined;
}

/**
 * <p>Summary information about a workflow version, including identification and configuration details.</p>
 * @public
 */
export interface WorkflowVersionSummary {
  /**
   * <p>The version identifier of the workflow version.</p>
   * @public
   */
  WorkflowVersion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow that contains this version.</p>
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * <p>Boolean flag that indicates whether this is the latest version of the workflow.</p>
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * <p>The timestamp when the workflow version was created, in ISO 8601 date-time format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the workflow version was last modified, in ISO 8601 date-time format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The Amazon S3 location of the workflow definition file for this version.</p>
   * @public
   */
  DefinitionS3Location?: DefinitionS3Location | undefined;

  /**
   * <p>The schedule configuration for this workflow version.</p>
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * <p>The trigger mode for the workflow execution.</p>
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsResponse {
  /**
   * <p>A list of workflow version summaries for the specified workflow.</p>
   * @public
   */
  WorkflowVersions?: WorkflowVersionSummary[] | undefined;

  /**
   * <p>The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}
