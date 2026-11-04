// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  EncryptionType,
  EngineVersion,
  RunType,
  TaskInstanceStatus,
  WorkflowRunStatus,
  WorkflowStatus,
} from "./enums";

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to list tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of tags that are associated with the resource, where each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains information about a field that failed validation, including the field name and a descriptive error message.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A message that describes why the field failed validation.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which to add tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A map of tags to add to the resource. Each tag consists of a key-value pair.
   *
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
   * The Amazon Resource Name (ARN) of the workflow that contains the task instance.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The unique identifier of the task instance to retrieve.
   *
   * @public
   */
  TaskInstanceId: string | undefined;

  /**
   * The unique identifier of the workflow run that contains the task instance.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetTaskInstanceResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this task instance.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The unique identifier of the workflow run that contains this task instance.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * The unique identifier of this task instance.
   *
   * @public
   */
  TaskInstanceId: string | undefined;

  /**
   * The version of the workflow that contains this task instance.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The current status of the task instance.
   *
   * @public
   */
  Status?: TaskInstanceStatus | undefined;

  /**
   * The duration of the task instance execution in seconds. This value is null if the task is not complete.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * The name of the Apache Airflow operator used for this task instance.
   *
   * @public
   */
  OperatorName?: string | undefined;

  /**
   * The timestamp when the task instance was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The timestamp when the task instance completed execution, in ISO 8601 date-time format. This value is null if the task is not complete.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The timestamp when the task instance started execution, in ISO 8601 date-time format. This value is null if the task has not started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The attempt number for this task instance.
   *
   * @public
   */
  AttemptNumber?: number | undefined;

  /**
   * The error message if the task instance failed. This value is null if the task completed successfully.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The unique identifier of the task definition within the workflow.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The CloudWatch log stream name for this task instance execution.
   *
   * @public
   */
  LogStream?: string | undefined;

  /**
   * Cross-communication data exchanged between tasks in the workflow execution.
   *
   * @public
   */
  Xcom?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTaskInstancesRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains the run.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The unique identifier of the workflow run for which you want a list of task instances.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * The maximum number of task instances to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to `ListTaskInstances`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a task instance within a workflow run, including its status and execution details.
 *
 * @public
 */
export interface TaskInstanceSummary {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this task instance.
   *
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * The version of the workflow that contains this task instance.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The unique identifier of the workflow run that contains this task instance.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The unique identifier of this task instance.
   *
   * @public
   */
  TaskInstanceId?: string | undefined;

  /**
   * The current status of the task instance.
   *
   * @public
   */
  Status?: TaskInstanceStatus | undefined;

  /**
   * The duration of the task instance execution in seconds. This value is null if the task is not complete.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * The name of the Apache Airflow operator used for this task instance.
   *
   * @public
   */
  OperatorName?: string | undefined;
}

/**
 * @public
 */
export interface ListTaskInstancesResponse {
  /**
   * A list of task instance summaries for the specified workflow run.
   *
   * @public
   */
  TaskInstances?: TaskInstanceSummary[] | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource from which to remove tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the resource. Only the keys are required; the values are ignored.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Specifies the Amazon S3 location of code artifacts that workflows use during execution.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key of the code artifact within the Amazon S3 bucket.
   *
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * The version ID of the object in Amazon S3. If not specified, the latest version is used.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Specifies the Amazon S3 location of code artifacts that workflows use during execution.
 *
 * @public
 */
export type Code =
  | Code.S3LocationMember
  | Code.$UnknownMember;

/**
 * @public
 */
export namespace Code {
  /**
   * The Amazon S3 location of the code artifacts that your workflow tasks use during execution.
   *
   * @public
   */
  export interface S3LocationMember {
    S3Location: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the Amazon S3 location of a workflow definition file. This structure contains the bucket name, object key, and optional version ID for the workflow definition. Amazon Managed Workflows for Apache Airflow Serverless takes a snapshot of the definition file at the time of workflow creation or update, ensuring that the workflow behavior remains consistent even if the source file is modified. The definition must be a valid YAML file that uses supported Amazon Web Services operators and Amazon Managed Workflows for Apache Airflow Serverless syntax.
 *
 * @public
 */
export interface DefinitionS3Location {
  /**
   * The name of the Amazon S3 bucket that contains the workflow definition file.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The key (name) of the workflow definition file within the S3 bucket.
   *
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * Optional. The version ID of the workflow definition file in Amazon S3. If not specified, the latest version is used.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Configuration for encrypting workflow data at rest and in transit. Amazon Managed Workflows for Apache Airflow Serverless provides comprehensive encryption capabilities to protect sensitive workflow data, parameters, and execution logs. When using customer-managed keys, the service integrates with Amazon Web Services KMS to provide fine-grained access control and audit capabilities. Encryption is applied consistently across the distributed execution environment including task containers, metadata storage, and log streams.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The type of encryption to use. Values are `AWS_MANAGED_KEY` (Amazon Web Services manages the encryption key) or `CUSTOMER_MANAGED_KEY` (you provide a KMS key).
   *
   * @public
   */
  Type: EncryptionType | undefined;

  /**
   * The ID or ARN of the Amazon Web Services KMS key to use for encryption. Required when `Type` is `CUSTOMER_MANAGED_KEY`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Configuration for workflow logging that specifies where you should store your workflow execution logs. Amazon Managed Workflows for Apache Airflow Serverless provides comprehensive logging capabilities that capture workflow execution details, task-level information, and system events. Logs are automatically exported to your specified CloudWatch log group using remote logging functionality, providing centralized observability across the distributed, multi-tenant execution environment. This enables effective debugging, monitoring, and compliance auditing of workflow executions.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * The name of the CloudWatch log group where workflow execution logs are stored.
   *
   * @public
   */
  LogGroupName: string | undefined;
}

/**
 * Network configuration for workflow execution. Specifies VPC security groups and subnets for secure network access. When provided, Amazon Managed Workflows for Apache Airflow Serverless deploys ECS worker tasks in your specified VPC configuration, enabling secure access to VPC-only resources. The service uses a proxy API container architecture where one container handles external communication while the worker container connects to your VPC for task execution. This design provides both security isolation and connectivity flexibility.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * A list of VPC security group IDs to associate with the workflow execution environment.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of VPC subnet IDs where the workflow execution environment is deployed.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * The name of the workflow. You must use unique workflow names within your Amazon Web Services account. The service generates a unique identifier that is appended to ensure temporal uniqueness across the account lifecycle.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token prevents duplicate workflow creation requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon S3 location where the workflow definition file is stored. This must point to a valid YAML file that defines the workflow structure using supported Amazon Web Services operators and tasks. Amazon Managed Workflows for Apache Airflow Serverless takes a snapshot of the definition at creation time, so subsequent changes to the Amazon S3 object will not affect the workflow unless you create a new version. In your YAML definition, include task dependencies, scheduling information, and operator configurations that are compatible with the Amazon Managed Workflows for Apache Airflow Serverless execution environment.
   *
   * @public
   */
  DefinitionS3Location: DefinitionS3Location | undefined;

  /**
   * The location of code artifacts in Amazon S3 for the workflow. The service copies the code from this location at the time of the request.
   *
   * @public
   */
  Code?: Code | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Managed Workflows for Apache Airflow Serverless assumes when executing the workflow. This role must have the necessary permissions to access the required Amazon Web Services services and resources that your workflow tasks will interact with. The role is used for task execution in the isolated, multi-tenant environment and should follow the principle of least privilege. Amazon Managed Workflows for Apache Airflow Serverless validates role access during workflow creation but runtime permission checks are performed by the target services.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An optional description of the workflow that you can use to provide additional context about the workflow's purpose and functionality.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for encrypting workflow data at rest and in transit. Specifies the encryption type and optional KMS key for customer-managed encryption.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The configuration for workflow logging. Specifies the CloudWatch log group where workflow execution logs are stored. Amazon Managed Workflows for Apache Airflow Serverless automatically exports worker logs and task-level information to the specified log group in your account using remote logging functionality. This provides comprehensive observability for debugging and monitoring workflow execution across the distributed, serverless environment.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that you want to use for this workflow. This determines the feature set, supported operators, and execution environment capabilities available to your workflow. Amazon Managed Workflows for Apache Airflow Serverless maintains backward compatibility across versions while introducing new features and improvements. Currently supports version 1 with plans for additional versions as the service evolves.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * Network configuration for the workflow execution environment, including VPC security groups and subnets for secure network access. When specified, Amazon Managed Workflows for Apache Airflow Serverless deploys ECS worker tasks in your customer VPC to provide secure connectivity to your resources. If not specified, tasks run in the service's default worker VPC with network isolation from other customers. This configuration enables secure access to VPC-only resources like RDS databases or private endpoints.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * A map of tags to assign to the workflow resource. Tags are key-value pairs that are used for resource organization and cost allocation.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The trigger mode for the workflow execution.
   *
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the newly created workflow. This ARN uniquely identifies the workflow resource.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The timestamp when the workflow was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A unique identifier for this revision of the workflow configuration. This ID changes when the workflow is updated and you can use it for optimistic concurrency control in update operations. The revision ID helps prevent conflicting updates and ensures that updates are applied to the expected version of the workflow configuration.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The current status of the workflow. Possible values are `READY` (workflow is ready to run) and `DELETING` (workflow is being deleted).
   *
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * The version identifier of the workflow. This is a service-generated alphanumeric string that uniquely identifies this version of the workflow. Amazon Managed Workflows for Apache Airflow Serverless uses a version-first approach where each workflow can have multiple immutable versions, which allows you to maintain different configurations and roll back to previous versions as needed. The version identifier is used in ARNs and API operations to reference specific workflow versions.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * A Boolean flag that indicates whether this workflow version is the latest version of the workflow.
   *
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * Warning messages generated during workflow creation.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow you want to delete.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * Optional. The specific version of the workflow to delete. If not specified, all versions of the workflow are deleted.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted workflow.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The version of the workflow that was deleted.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow you want to retrieve.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * Optional. The specific version of the workflow to retrieve. If not specified, the latest version is returned.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * The configuration to use to schedule automated workflow execution using cron expressions. Amazon Managed Workflows for Apache Airflow Serverless integrates with EventBridge Scheduler to provide cost-effective, timezone-aware scheduling capabilities. The service supports both time-based and event-based scheduling (event-based scheduling available post-GA). When a workflow definition includes scheduling information, Amazon Managed Workflows for Apache Airflow Serverless automatically configures the appropriate triggers and ensures only one version of a workflow has an active schedule at any time.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * A cron expression that defines when the workflow is automatically executed. Uses standard cron syntax.
   *
   * @public
   */
  CronExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The version identifier of the workflow.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when the workflow was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the workflow was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The encryption configuration for the workflow.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The logging configuration for the workflow.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that this workflow uses.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * The current status of the workflow.
   *
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * The Amazon S3 location of the workflow definition file.
   *
   * @public
   */
  DefinitionS3Location?: DefinitionS3Location | undefined;

  /**
   * The Amazon S3 location of the code artifacts provided during workflow creation or update.
   *
   * @public
   */
  Code?: Code | undefined;

  /**
   * The time at which the code artifacts were copied for this workflow, in ISO 8601 date-time format.
   *
   * @public
   */
  CodeSnapshottedAt?: Date | undefined;

  /**
   * The schedule configuration for the workflow, including cron expressions for automated execution. Amazon Managed Workflows for Apache Airflow Serverless uses EventBridge Scheduler for cost-effective, timezone-aware scheduling. When a workflow includes schedule information in its YAML definition, the service automatically configures the appropriate triggers for automated execution. Only one version of a workflow can have an active schedule at any given time.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for workflow execution.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The network configuration for the workflow execution environment.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The trigger mode for the workflow execution.
   *
   * @public
   */
  TriggerMode?: string | undefined;

  /**
   * The workflow definition content.
   *
   * @public
   */
  WorkflowDefinition?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * The maximum number of workflows you want to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to `ListWorkflows`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a workflow, including basic identification and metadata.
 *
 * @public
 */
export interface WorkflowSummary {
  /**
   * The Amazon Resource Name (ARN) of the workflow.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The version identifier of the workflow.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when the workflow was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the workflow was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The current status of the workflow.
   *
   * @public
   */
  WorkflowStatus?: WorkflowStatus | undefined;

  /**
   * The trigger mode for the workflow execution.
   *
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * A list of workflow summaries for all workflows in your account.
   *
   * @public
   */
  Workflows: WorkflowSummary[] | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow you want to update.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The Amazon S3 location where the updated workflow definition file is stored.
   *
   * @public
   */
  DefinitionS3Location: DefinitionS3Location | undefined;

  /**
   * The location of code artifacts in Amazon S3 for the updated workflow. The service copies the code from this location at the time of the request.
   *
   * @public
   */
  Code?: Code | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Managed Workflows for Apache Airflow Serverless assumes when it executes the updated workflow.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An updated description for the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updated logging configuration for the workflow.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that you want to use for the updated workflow.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * Updated network configuration for the workflow execution environment.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The trigger mode for the workflow execution.
   *
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated workflow.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The timestamp when the workflow was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The version identifier of the updated workflow.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * Warning messages generated during workflow update.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains the run.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The unique identifier of the workflow run to retrieve.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * Detailed information about a workflow run execution, including timing, status, error information, and associated task instances. This structure provides comprehensive visibility into the workflow execution lifecycle within the Amazon Managed Workflows for Apache Airflow Serverless serverless environment. The service tracks execution across distributed ECS worker tasks and provides detailed timing information, error diagnostics, and task instance relationships to support effective monitoring and troubleshooting of complex workflow executions.
 *
 * @public
 */
export interface WorkflowRunDetail {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this run.
   *
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * The version of the workflow used for this run.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The unique identifier of this workflow run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The type of workflow run.
   *
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * The timestamp when the workflow run started execution, in ISO 8601 date-time format.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The timestamp when the workflow run was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the workflow run completed execution, in ISO 8601 date-time format. This value is null if the run is not complete.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The timestamp when the workflow run was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The total duration of the workflow run execution in seconds. This value is null if the run is not complete.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The error message if the workflow run failed. This value is null if the run completed successfully.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * A list of task instance IDs that are part of this workflow run.
   *
   * @public
   */
  TaskInstances?: string[] | undefined;

  /**
   * The current execution state of the workflow run.
   *
   * @public
   */
  RunState?: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this run.
   *
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * The version of the workflow that is used for this run.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The unique identifier of this workflow run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The type of workflow run. Values are `ON_DEMAND` (manually triggered) or `SCHEDULED` (automatically triggered by schedule).
   *
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * Parameters that were overridden for this specific workflow run.
   *
   * @public
   */
  OverrideParameters?: Record<string, __DocumentType> | undefined;

  /**
   * Detailed information about the workflow run execution, including timing, status, and task instances.
   *
   * @public
   */
  RunDetail?: WorkflowRunDetail | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * The maximum number of workflow runs to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to `ListWorkflowRuns`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow for which you want a list of runs.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * Optional. The specific version of the workflow for which you want a list of runs. If not specified, runs for all versions are returned.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * Summary information about a workflow run's execution details, including status and timing information.
 *
 * @public
 */
export interface RunDetailSummary {
  /**
   * The current status of the workflow run.
   *
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * The timestamp when the workflow run was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The timestamp when the workflow run started execution, in ISO 8601 date-time format.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The timestamp when the workflow run completed execution, in ISO 8601 date-time format. This value is null if the run is not complete.
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * Summary information about a workflow run, including basic identification and status information.
 *
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * The unique identifier of the workflow run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this run.
   *
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * The version of the workflow used for this run.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The type of workflow run.
   *
   * @public
   */
  RunType?: RunType | undefined;

  /**
   * Summary details about the workflow run execution.
   *
   * @public
   */
  RunDetailSummary?: RunDetailSummary | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * A list of workflow run summaries for the specified workflow.
   *
   * @public
   */
  WorkflowRuns?: WorkflowRunSummary[] | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow you want to run.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token prevents duplicate workflow run requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Optional parameters to override default workflow parameters for this specific run. These parameters are passed to the workflow during execution and can be used to customize behavior without modifying the workflow definition. Parameters are made available as environment variables to tasks and you can reference them within the YAML workflow definition using standard parameter substitution syntax.
   *
   * @public
   */
  OverrideParameters?: Record<string, __DocumentType> | undefined;

  /**
   * Optional. The specific version of the workflow to execute. If not specified, the latest version is used.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * The unique identifier of the newly started workflow run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The initial status of the workflow run. This is typically `STARTING` when you first create the run.
   *
   * @public
   */
  Status?: WorkflowRunStatus | undefined;

  /**
   * The timestamp when the workflow run was started, in ISO 8601 date-time format.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains the run you want to stop.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * The unique identifier of the workflow run to stop.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow that contains the stopped run.
   *
   * @public
   */
  WorkflowArn?: string | undefined;

  /**
   * The version of the workflow that was stopped.
   *
   * @public
   */
  WorkflowVersion?: string | undefined;

  /**
   * The unique identifier of the stopped workflow run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The status of the workflow run after the stop operation. This is typically `STOPPING` or `STOPPED`.
   *
   * @public
   */
  Status?: WorkflowRunStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsRequest {
  /**
   * The maximum number of workflow versions to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is returned from a previous call to `ListWorkflowVersions`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow for which you want to list versions.
   *
   * @public
   */
  WorkflowArn: string | undefined;
}

/**
 * Summary information about a workflow version, including identification and configuration details.
 *
 * @public
 */
export interface WorkflowVersionSummary {
  /**
   * The version identifier of the workflow version.
   *
   * @public
   */
  WorkflowVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow that contains this version.
   *
   * @public
   */
  WorkflowArn: string | undefined;

  /**
   * Boolean flag that indicates whether this is the latest version of the workflow.
   *
   * @public
   */
  IsLatestVersion?: boolean | undefined;

  /**
   * The timestamp when the workflow version was created, in ISO 8601 date-time format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the workflow version was last modified, in ISO 8601 date-time format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The Amazon S3 location of the workflow definition file for this version.
   *
   * @public
   */
  DefinitionS3Location?: DefinitionS3Location | undefined;

  /**
   * The schedule configuration for this workflow version.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * The trigger mode for the workflow execution.
   *
   * @public
   */
  TriggerMode?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowVersionsResponse {
  /**
   * A list of workflow version summaries for the specified workflow.
   *
   * @public
   */
  WorkflowVersions?: WorkflowVersionSummary[] | undefined;

  /**
   * The pagination token you need to use to retrieve the next set of results. This value is null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}
