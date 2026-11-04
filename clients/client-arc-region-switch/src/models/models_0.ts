// smithy-typescript generated code
import type {
  AlarmCondition,
  AlarmType,
  Approval,
  DocumentDbDefaultBehavior,
  DocumentDbUngracefulBehavior,
  Ec2AsgCapacityMonitoringApproach,
  EcsCapacityMonitoringApproach,
  EksCapacityMonitoringApproach,
  EvaluationStatus,
  EventSourceMappingAction,
  ExecutionAction,
  ExecutionBlockType,
  ExecutionEventType,
  ExecutionMode,
  ExecutionState,
  FailedReportErrorCode,
  GlobalAuroraDefaultBehavior,
  GlobalAuroraUngracefulBehavior,
  LambdaEventSourceMappingUngracefulBehavior,
  LambdaUngracefulBehavior,
  NeptuneDefaultBehavior,
  NeptuneUngracefulBehavior,
  RdsUngracefulBehavior,
  RecoveryApproach,
  RegionToRunIn,
  ResourceWarningStatus,
  Route53HealthCheckStatus,
  RoutingControlStateChange,
  ServiceQuotaWarningStatus,
  SsmSendCommandUngracefulBehavior,
  StepStatus,
  UpdatePlanExecutionAction,
  UpdatePlanExecutionStepAction,
  WaitELBTargetGroupHealthy,
  WorkflowTargetAction,
} from "./enums";

/**
 * A summarized representation of a plan execution. This structure contains key information about an execution without all the detailed step data.
 *
 * @public
 */
export interface AbbreviatedExecution {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The version for the plan.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp when the plan execution was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * An optional comment about the plan execution.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The timestamp when the plan execution was started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp when the plan execution was ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The plan execution mode. Valid values are `graceful`, for graceful executions, or `ungraceful`, for ungraceful executions.
   *
   * @public
   */
  mode: ExecutionMode | undefined;

  /**
   * The plan execution state. Provides the state of a plan execution, for example, In Progress or Paused by Operator.
   *
   * @public
   */
  executionState: ExecutionState | undefined;

  /**
   * The plan execution action. Valid values are `activate`, to activate an Amazon Web Services Region, or `deactivate`, to deactivate a Region.
   *
   * @public
   */
  executionAction: ExecutionAction | undefined;

  /**
   * The Amazon Web Services Region for a plan execution.
   *
   * @public
   */
  executionRegion: string | undefined;

  /**
   * The unique identifier of the most recent recovery execution. Required when starting a post-recovery execution.
   *
   * @public
   */
  recoveryExecutionId?: string | undefined;

  /**
   * The actual recovery time that Region switch calculates for a plan execution. Actual recovery time includes the time for the plan to run added to the time elapsed until the application health alarms that you've specified are healthy again.
   *
   * @public
   */
  actualRecoveryTime?: string | undefined;
}

/**
 * A summarized representation of a Region switch plan. This structure contains key information about a plan without all the detailed workflow and step data.
 *
 * @public
 */
export interface AbbreviatedPlan {
  /**
   * The Amazon Resource Name (ARN) of the Region switch plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The owner of a Region switch plan.
   *
   * @public
   */
  owner: string | undefined;

  /**
   * The name of a Region switch plan.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Region specified for a Region switch plan.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).
   *
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * The primary Region for a plan.
   *
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * The version for the plan.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp when the plan execution was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The description of a Region switch plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The execution role is a way to categorize a Region switch plan.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * Specifies if this is the active plan execution at this time.
   *
   * @public
   */
  activePlanExecution?: string | undefined;

  /**
   * The recovery time objective that you've specified.
   *
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;
}

/**
 * @public
 */
export interface ApprovePlanExecutionStepRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The name of a step in a plan execution.
   *
   * @public
   */
  stepName: string | undefined;

  /**
   * The status of approval for a plan execution step.
   *
   * @public
   */
  approval: Approval | undefined;

  /**
   * A comment that you can enter about a plan execution.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface ApprovePlanExecutionStepResponse {}

/**
 * @public
 */
export interface CancelPlanExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * A comment that you can enter about canceling a plan execution step.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface CancelPlanExecutionResponse {}

/**
 * @public
 */
export interface GetPlanEvaluationStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the Region switch plan to retrieve evaluation status for.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A simplified representation of a workflow in a Region switch plan.
 *
 * @public
 */
export interface MinimalWorkflow {
  /**
   * The action for a minimal workflow, which can be Activate or Deactivate.
   *
   * @public
   */
  action?: ExecutionAction | undefined;

  /**
   * The name for a minimal workflow
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Represents a warning about a resource in a Region switch plan.
 *
 * @public
 */
export interface ResourceWarning {
  /**
   * The workflow for the resource warning.
   *
   * @public
   */
  workflow?: MinimalWorkflow | undefined;

  /**
   * The version for the resource warning.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The name of the step for the resource warning.
   *
   * @public
   */
  stepName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The status of the resource warning.
   *
   * @public
   */
  warningStatus: ResourceWarningStatus | undefined;

  /**
   * The timestamp when the warning was last updated.
   *
   * @public
   */
  warningUpdatedTime: Date | undefined;

  /**
   * The warning message about what needs to be corrected.
   *
   * @public
   */
  warningMessage: string | undefined;
}

/**
 * @public
 */
export interface GetPlanEvaluationStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The time of the last time that Region switch ran an evaluation of the plan.
   *
   * @public
   */
  lastEvaluationTime?: Date | undefined;

  /**
   * The version of the last evaluation of the plan.
   *
   * @public
   */
  lastEvaluatedVersion?: string | undefined;

  /**
   * The Amazon Web Services Region for the plan.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The evaluation state for the plan.
   *
   * @public
   */
  evaluationState?: EvaluationStatus | undefined;

  /**
   * The current evaluation warnings for the plan.
   *
   * @public
   */
  warnings?: ResourceWarning[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan with the execution to retrieve.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a report generation that failed.
 *
 * @public
 */
export interface FailedReportOutput {
  /**
   * The error code for the failed report generation.
   *
   * @public
   */
  errorCode?: FailedReportErrorCode | undefined;

  /**
   * The error message for the failed report generation.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Information about a report delivered to Amazon S3.
 *
 * @public
 */
export interface S3ReportOutput {
  /**
   * The S3 object key where the generated report is stored.
   *
   * @public
   */
  s3ObjectKey?: string | undefined;
}

/**
 * The output location or cause of a failure in report generation.
 *
 * @public
 */
export type ReportOutput =
  | ReportOutput.FailedReportOutputMember
  | ReportOutput.S3ReportOutputMember
  | ReportOutput.$UnknownMember;

/**
 * @public
 */
export namespace ReportOutput {
  /**
   * Information about a report delivered to Amazon S3.
   *
   * @public
   */
  export interface S3ReportOutputMember {
    s3ReportOutput: S3ReportOutput;
    failedReportOutput?: never;
    $unknown?: never;
  }

  /**
   * The details about a failed report generation.
   *
   * @public
   */
  export interface FailedReportOutputMember {
    s3ReportOutput?: never;
    failedReportOutput: FailedReportOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3ReportOutput?: never;
    failedReportOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3ReportOutput: (value: S3ReportOutput) => T;
    failedReportOutput: (value: FailedReportOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about a generated execution report.
 *
 * @public
 */
export interface GeneratedReport {
  /**
   * The timestamp when the report was generated.
   *
   * @public
   */
  reportGenerationTime?: Date | undefined;

  /**
   * The output location or cause of a failure in report generation.
   *
   * @public
   */
  reportOutput?: ReportOutput | undefined;
}

/**
 * An Amazon CloudWatch alarm associated with a Region switch plan. These alarms can be used to trigger automatic execution of the plan.
 *
 * @public
 */
export interface AssociatedAlarm {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The resource identifier for alarms that you associate with a plan.
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The alarm type for an associated alarm. An associated CloudWatch alarm can be an application health alarm or a trigger alarm.
   *
   * @public
   */
  alarmType: AlarmType | undefined;
}

/**
 * Configuration for delivering generated reports to an Amazon S3 bucket.
 *
 * @public
 */
export interface S3ReportOutputConfiguration {
  /**
   * The S3 bucket name and optional prefix where reports are stored. Format: bucket-name or bucket-name/prefix.
   *
   * @public
   */
  bucketPath?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the S3 bucket. Required to ensure the bucket is still owned by the same expected owner at generation time.
   *
   * @public
   */
  bucketOwner?: string | undefined;
}

/**
 * Configuration for report output destinations used in a Region switch plan.
 *
 * @public
 */
export type ReportOutputConfiguration =
  | ReportOutputConfiguration.S3ConfigurationMember
  | ReportOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ReportOutputConfiguration {
  /**
   * Configuration for delivering reports to an Amazon S3 bucket.
   *
   * @public
   */
  export interface S3ConfigurationMember {
    s3Configuration: S3ReportOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Configuration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Configuration: (value: S3ReportOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for automatic report generation for plan executions. When configured, Region switch automatically generates a report after each plan execution that includes execution events, plan configuration, and CloudWatch alarm states.
 *
 * @public
 */
export interface ReportConfiguration {
  /**
   * The output configuration for the report.
   *
   * @public
   */
  reportOutput?: ReportOutputConfiguration[] | undefined;
}

/**
 * Defines a condition that must be met for a trigger to fire.
 *
 * @public
 */
export interface TriggerCondition {
  /**
   * The name of the CloudWatch alarm associated with the condition.
   *
   * @public
   */
  associatedAlarmName: string | undefined;

  /**
   * The condition that must be met. Valid values include `green` and `red`.
   *
   * @public
   */
  condition: AlarmCondition | undefined;
}

/**
 * Defines a condition that can automatically trigger the execution of a Region switch plan.
 *
 * @public
 */
export interface Trigger {
  /**
   * The description for a trigger.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services Region for a trigger.
   *
   * @public
   */
  targetRegion: string | undefined;

  /**
   * The action to perform when the trigger fires. Valid values include `activate` and `deactivate`.
   *
   * @public
   */
  action: WorkflowTargetAction | undefined;

  /**
   * The conditions that must be met for the trigger to fire.
   *
   * @public
   */
  conditions: TriggerCondition[] | undefined;

  /**
   * The minimum time, in minutes, that must elapse between automatic executions of the plan.
   *
   * @public
   */
  minDelayMinutesBetweenExecutions: number | undefined;
}

/**
 * Represents the state of an ARC routing control.
 *
 * @public
 */
export interface ArcRoutingControlState {
  /**
   * The Amazon Resource Name (ARN) of a routing control.
   *
   * @public
   */
  routingControlArn: string | undefined;

  /**
   * The state of an ARC routing control, On or Off.
   *
   * @public
   */
  state: RoutingControlStateChange | undefined;
}

/**
 * Configuration for ARC routing controls used in a Region switch plan. Routing controls are simple on/off switches that you can use to shift traffic away from an impaired Region.
 *
 * @public
 */
export interface ArcRoutingControlConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Region and ARC routing controls for the configuration.
   *
   * @public
   */
  regionAndRoutingControls: Record<string, ArcRoutingControlState[]> | undefined;
}

/**
 * Configuration for Amazon Aurora provisioned cluster scaling used in a Region switch plan.
 *
 * @public
 */
export interface AuroraProvisionedScalingConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The global cluster identifier for a global database.
   *
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * Per-Region configuration that maps each Region to the Aurora database cluster ARN for scaling.
   *
   * @public
   */
  regionDatabaseClusterArns: Record<string, string> | undefined;

  /**
   * Per-Region configuration that maps each Region to the Aurora database instance ARN for scaling.
   *
   * @public
   */
  instanceArns: Record<string, string> | undefined;
}

/**
 * Configuration for Amazon Aurora Serverless scaling used in a Region switch plan.
 *
 * @public
 */
export interface AuroraServerlessScalingConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The global cluster identifier for a global database.
   *
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * Per-Region configuration that maps each Region to the Aurora database cluster ARN for scaling.
   *
   * @public
   */
  regionDatabaseClusterArns: Record<string, string> | undefined;

  /**
   * The target capacity percentage for Aurora Serverless scaling.
   *
   * @public
   */
  targetPercent?: number | undefined;
}

/**
 * Configuration for Amazon Web Services Lambda functions used in a Region switch plan.
 *
 * @public
 */
export interface Lambdas {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The JSON payload to send to the Lambda function invocation. If you don't specify a payload, Region switch invokes the function with only the execution metadata.
   *
   * If you provide a JSON object, Region switch merges execution metadata keys (`InvokedBy`, `PlanArn`, `ExecutionId`, `StepName`) into the top level. If one of your keys has the same name as a metadata key, your key takes precedence.
   *
   * If you provide any other JSON type (string, number, boolean, or array), Region switch forwards it to the Lambda function unchanged, without adding metadata.
   *
   * @public
   */
  payload?: string | undefined;
}

/**
 * Configuration for handling failures when invoking Lambda functions.
 *
 * @public
 */
export interface LambdaUngraceful {
  /**
   * The ungraceful behavior for a Lambda function, which must be set to `skip`.
   *
   * @public
   */
  behavior?: LambdaUngracefulBehavior | undefined;
}

/**
 * Configuration for Amazon Web Services Lambda functions that perform custom actions during a Region switch.
 *
 * @public
 */
export interface CustomActionLambdaConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The Amazon Web Services Lambda functions for the execution block.
   *
   * @public
   */
  lambdas: Lambdas[] | undefined;

  /**
   * The retry interval specified.
   *
   * @public
   */
  retryIntervalMinutes: number | undefined;

  /**
   * The Amazon Web Services Region for the function to run in. For recovery workflows use `activatingRegion` or `deactivatingRegion`. For post-recovery workflows, use `activeRegion` (the Region with customer traffic) or `inactiveRegion` (the Region with no customer traffic).
   *
   * @public
   */
  regionToRun: RegionToRunIn | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: LambdaUngraceful | undefined;
}

/**
 * Configuration for handling failures when performing operations on DocumentDB global clusters.
 *
 * @public
 */
export interface DocumentDbUngraceful {
  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: DocumentDbUngracefulBehavior | undefined;
}

/**
 * Configuration for Amazon DocumentDB global clusters used in a Region switch plan.
 *
 * @public
 */
export interface DocumentDbConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The behavior for a global cluster, that is, only allow switchover or also allow failover.
   *
   * @public
   */
  behavior: DocumentDbDefaultBehavior | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: DocumentDbUngraceful | undefined;

  /**
   * The global cluster identifier for a DocumentDB global cluster.
   *
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * The database cluster Amazon Resource Names (ARNs) for a DocumentDB global cluster.
   *
   * @public
   */
  databaseClusterArns: string[] | undefined;
}

/**
 * Configuration for an Amazon EC2 Auto Scaling group used in a Region switch plan.
 *
 * @public
 */
export interface Asg {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the EC2 Auto Scaling group.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Configuration for handling failures when performing operations on EC2 resources.
 *
 * @public
 */
export interface Ec2Ungraceful {
  /**
   * The minimum success percentage that you specify for EC2 Auto Scaling groups.
   *
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * Configuration for increasing the capacity of Amazon EC2 Auto Scaling groups during a Region switch.
 *
 * @public
 */
export interface Ec2AsgCapacityIncreaseConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The EC2 Auto Scaling groups for the configuration.
   *
   * @public
   */
  asgs: Asg[] | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: Ec2Ungraceful | undefined;

  /**
   * The target percentage that you specify for EC2 Auto Scaling groups. The default is 100.
   *
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * The monitoring approach that you specify EC2 Auto Scaling groups for the configuration.
   *
   * @public
   */
  capacityMonitoringApproach?: Ec2AsgCapacityMonitoringApproach | undefined;

  /**
   * If enabled, the step completes only after each attached ELB target group reports a healthy target count that matches the group's new desired capacity calculated in the step.
   *
   * @public
   */
  waitELBTargetGroupHealthy?: WaitELBTargetGroupHealthy | undefined;
}

/**
 * The service for a cross account role.
 *
 * @public
 */
export interface Service {
  /**
   * The cross account role for a service.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the service.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The cluster Amazon Resource Name (ARN) for a service.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for a service.
   *
   * @public
   */
  serviceArn?: string | undefined;
}

/**
 * The settings for ungraceful execution.
 *
 * @public
 */
export interface EcsUngraceful {
  /**
   * The minimum success percentage specified for the configuration.
   *
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * The configuration for an Amazon Web Services ECS capacity increase.
 *
 * @public
 */
export interface EcsCapacityIncreaseConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The services specified for the configuration.
   *
   * @public
   */
  services: Service[] | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: EcsUngraceful | undefined;

  /**
   * The target percentage specified for the configuration. The default is 100.
   *
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * The monitoring approach specified for the configuration, for example, `Most_Recent`.
   *
   * @public
   */
  capacityMonitoringApproach?: EcsCapacityMonitoringApproach | undefined;

  /**
   * If enabled, the step completes only after each attached ELB target group reports a healthy target count that matches the service's new desired task count calculated in the step.
   *
   * @public
   */
  waitELBTargetGroupHealthy?: WaitELBTargetGroupHealthy | undefined;
}

/**
 * The Amazon Web Services EKS cluster execution block configuration.
 *
 * @public
 */
export interface EksCluster {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services EKS cluster.
   *
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * Defines the type of Kubernetes resource to scale in an Amazon EKS cluster.
 *
 * @public
 */
export interface KubernetesResourceType {
  /**
   * The API version type for the Kubernetes resource.
   *
   * @public
   */
  apiVersion: string | undefined;

  /**
   * The kind for the Kubernetes resource.
   *
   * @public
   */
  kind: string | undefined;
}

/**
 * Defines a Kubernetes resource to scale in an Amazon EKS cluster.
 *
 * @public
 */
export interface KubernetesScalingResource {
  /**
   * The namespace for the Kubernetes resource.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name for the Kubernetes resource.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The hpaname for the Kubernetes resource.
   *
   * @public
   */
  hpaName?: string | undefined;
}

/**
 * The ungraceful settings for Amazon Web Services EKS resource scaling.
 *
 * @public
 */
export interface EksResourceScalingUngraceful {
  /**
   * The minimum success percentage for the configuration.
   *
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * The Amazon Web Services EKS resource scaling configuration.
 *
 * @public
 */
export interface EksResourceScalingConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The Kubernetes resource type for the configuration.
   *
   * @public
   */
  kubernetesResourceType: KubernetesResourceType | undefined;

  /**
   * The scaling resources for the configuration.
   *
   * @public
   */
  scalingResources?: Record<string, Record<string, KubernetesScalingResource>>[] | undefined;

  /**
   * The clusters for the configuration.
   *
   * @public
   */
  eksClusters?: EksCluster[] | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: EksResourceScalingUngraceful | undefined;

  /**
   * The target percentage for the configuration. The default is 100.
   *
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * The monitoring approach for the configuration, that is, whether it was sampled in the last 24 hours or autoscaled in the last 24 hours.
   *
   * @public
   */
  capacityMonitoringApproach?: EksCapacityMonitoringApproach | undefined;
}

/**
 * Configuration for approval steps in a Region switch plan execution. Approval steps require manual intervention before the execution can proceed.
 *
 * @public
 */
export interface ExecutionApprovalConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The IAM approval role for the configuration.
   *
   * @public
   */
  approvalRole: string | undefined;
}

/**
 * Configuration for an Aurora global database execution block in ungraceful mode.
 *
 * @public
 */
export interface GlobalAuroraUngraceful {
  /**
   * The ungraceful behavior. The only valid value is `failover`, which calls `FailoverGlobalCluster` with `AllowDataLoss` set to `true` and might cause data loss.
   *
   * @public
   */
  ungraceful?: GlobalAuroraUngracefulBehavior | undefined;
}

/**
 * Configuration for Amazon Aurora global databases used in a Region switch plan.
 *
 * @public
 */
export interface GlobalAuroraConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The default behavior for the Aurora global database execution block. Valid values:
   *
   * - `switchoverOnly` - Calls `SwitchoverGlobalCluster` for a zero-data-loss switchover during graceful execution.
   * - `failover` - Calls `FailoverGlobalCluster` with `AllowDataLoss` set to `true`. This operation might cause data loss, including during graceful execution.
   *
   * @public
   */
  behavior: GlobalAuroraDefaultBehavior | undefined;

  /**
   * The behavior to use when the plan runs in ungraceful mode. If you omit this value, Region switch uses the value of `behavior`.
   *
   * @public
   */
  ungraceful?: GlobalAuroraUngraceful | undefined;

  /**
   * The global cluster identifier for a global database.
   *
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * The database cluster Amazon Resource Names (ARNs) for a global database.
   *
   * @public
   */
  databaseClusterArns: string[] | undefined;
}

/**
 * The Amazon Web Services Lambda event source mapping configuration, containing the resource ARN and optional cross-account configuration.
 *
 * @public
 */
export interface EventSourceMapping {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda event source mapping.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Specifies whether to skip enabling or disabling an event source mapping during an ungraceful execution.
 *
 * @public
 */
export interface LambdaEventSourceMappingUngraceful {
  /**
   * Set to `skip` to skip executing this event source mapping step during an ungraceful execution.
   *
   * @public
   */
  behavior?: LambdaEventSourceMappingUngracefulBehavior | undefined;
}

/**
 * Configuration for Amazon Web Services Lambda event source mappings used in a Region switch plan.
 *
 * @public
 */
export interface LambdaEventSourceMappingConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The action to take - whether to `enable` or `disable` an event source mapping.
   *
   * @public
   */
  action: EventSourceMappingAction | undefined;

  /**
   * Per-region configuration for which Lambda event source mapping to enable or disable when activating or deactivating a region.
   *
   * @public
   */
  regionEventSourceMappings: Record<string, EventSourceMapping> | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: LambdaEventSourceMappingUngraceful | undefined;
}

/**
 * Configuration for handling failures when performing operations on Neptune global databases.
 *
 * @public
 */
export interface NeptuneUngraceful {
  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: NeptuneUngracefulBehavior | undefined;
}

/**
 * Configuration for Amazon Neptune global databases used in a Region switch plan.
 *
 * @public
 */
export interface NeptuneGlobalDatabaseConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The behavior for a global database, that is, only allow switchover or also allow failover.
   *
   * @public
   */
  behavior: NeptuneDefaultBehavior | undefined;

  /**
   * The settings for ungraceful execution.
   *
   * @public
   */
  ungraceful?: NeptuneUngraceful | undefined;

  /**
   * The global cluster identifier for a Neptune global database.
   *
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * The database cluster Amazon Resource Names (ARNs) for a Neptune global database.
   *
   * @public
   */
  regionDatabaseClusterArns: Record<string, string> | undefined;
}

/**
 * Configuration for creating an Amazon RDS cross-Region read replica during post-recovery in a Region switch.
 *
 * @public
 */
export interface RdsCreateCrossRegionReplicaConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross-account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * A map of database instance ARNs for each Region in the plan.
   *
   * @public
   */
  dbInstanceArnMap: Record<string, string> | undefined;
}

/**
 * Configuration for promoting an Amazon RDS read replica to a standalone database instance during a Region switch.
 *
 * @public
 */
export interface RdsPromoteReadReplicaConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross-account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * A map of database instance ARNs for each Region in the plan.
   *
   * @public
   */
  dbInstanceArnMap: Record<string, string> | undefined;
}

/**
 * The ungraceful execution settings for an Amazon RDS switchover read replica execution block.
 *
 * @public
 */
export interface RdsUngraceful {
  /**
   * The ungraceful behavior to perform if switching to ungraceful execution.
   *
   * @public
   */
  ungraceful?: RdsUngracefulBehavior | undefined;
}

/**
 * Configuration for switching over an Amazon RDS read replica to become the new primary database instance during a Region switch.
 *
 * @public
 */
export interface RdsSwitchoverReadReplicaConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross-account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * A map of database instance ARNs for each Region in the plan.
   *
   * @public
   */
  dbInstanceArnMap: Record<string, string> | undefined;

  /**
   * The ungraceful execution settings for the configuration.
   *
   * @public
   */
  ungraceful?: RdsUngraceful | undefined;
}

/**
 * Configuration for nested Region switch plans. This allows one Region switch plan to trigger another plan as part of its execution.
 *
 * @public
 */
export interface RegionSwitchPlanConfiguration {
  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the plan configuration.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The Amazon Route 53 record set.
 *
 * @public
 */
export interface Route53ResourceRecordSet {
  /**
   * The Amazon Route 53 record set identifier.
   *
   * @public
   */
  recordSetIdentifier?: string | undefined;

  /**
   * The Amazon Route 53 record set Region.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * The Amazon Route 53 health check configuration.
 *
 * @public
 */
export interface Route53HealthCheckConfiguration {
  /**
   * The Amazon Route 53 health check configuration time out (in minutes).
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The cross account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Route 53 health check configuration hosted zone ID.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The Amazon Route 53 health check configuration record name.
   *
   * @public
   */
  recordName: string | undefined;

  /**
   * The Amazon Route 53 health check configuration record sets.
   *
   * @public
   */
  recordSets?: Route53ResourceRecordSet[] | undefined;
}

/**
 * A single `SendCommand` target filter, consisting of a target key and the values matched by that key.
 *
 * @public
 */
export interface SsmTarget {
  /**
   * The target key, such as `tag:Environment` or `InstanceIds`.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The values matched by this target key. Multiple values combine with a logical OR.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * The Systems Manager document to run and the managed nodes to target for a single Amazon Web Services Region.
 *
 * @public
 */
export interface SsmDocumentConfig {
  /**
   * The cross-account role for the configuration.
   *
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * The external ID (secret key) for the configuration.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Systems Manager document to run.
   *
   * @public
   */
  documentArn: string | undefined;

  /**
   * The target filters that Systems Manager resolves to managed nodes when the command runs. To target specific managed nodes, use the `InstanceIds` key. You can specify up to five target filters.
   *
   * @public
   */
  targets: SsmTarget[] | undefined;

  /**
   * The parameters that are passed to this Region's Systems Manager document. You set parameters for each document, so each Region can run its document with its own parameters.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;

  /**
   * The version of the Systems Manager document to run for this Region. When you omit it, Systems Manager runs the document's default version.
   *
   * @public
   */
  documentVersion?: string | undefined;
}

/**
 * The ungraceful execution settings for an AWS Systems Manager `SendCommand` execution block.
 *
 * @public
 */
export interface SsmSendCommandUngraceful {
  /**
   * Specifies whether to skip running this command during an ungraceful execution. Set to `skip` to skip the command.
   *
   * @public
   */
  behavior?: SsmSendCommandUngracefulBehavior | undefined;
}

/**
 * Configuration for an AWS Systems Manager `SendCommand` execution block in a Region switch plan. This execution block runs a Systems Manager document on the managed nodes that you target in each Amazon Web Services Region of the plan.
 *
 * @public
 */
export interface SsmSendCommandConfiguration {
  /**
   * The timeout value specified for the configuration.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * The Systems Manager document and target configuration for each Amazon Web Services Region in the plan. Provide an entry for each Amazon Web Services Region that you want the command to run in.
   *
   * @public
   */
  regionDocuments: Record<string, SsmDocumentConfig> | undefined;

  /**
   * How often, in minutes, Region switch retries the command if it returns a failure.
   *
   * @public
   */
  retryIntervalMinutes: number | undefined;

  /**
   * Specifies the settings that determine how the execution block behaves when the plan runs ungracefully, such as whether to skip the command.
   *
   * @public
   */
  ungraceful?: SsmSendCommandUngraceful | undefined;
}

/**
 * Represents the state of a step in a plan execution.
 *
 * @public
 */
export interface StepState {
  /**
   * The name of a step in a workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of a step in a workflow. For example, a status might be Completed or Pending Approval.
   *
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * The timestamp when a step started execution.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The timestamp when a step endeded execution.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The mode for a step execution. The mode can be Graceful or Ungraceful.
   *
   * @public
   */
  stepMode?: ExecutionMode | undefined;
}

/**
 * @public
 */
export interface GetPlanInRegionRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan in Region.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionEventsRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the plan execution event.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Represents an event that occurred during a plan execution. These events provide a detailed timeline of the execution process.
 *
 * @public
 */
export interface ExecutionEvent {
  /**
   * The timestamp for an execution event.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * The type of an execution event.
   *
   * @public
   */
  type?: ExecutionEventType | undefined;

  /**
   * The step name for an execution event.
   *
   * @public
   */
  stepName?: string | undefined;

  /**
   * The execution block type for an execution event.
   *
   * @public
   */
  executionBlockType?: ExecutionBlockType | undefined;

  /**
   * The resources for an execution event.
   *
   * @public
   */
  resources?: string[] | undefined;

  /**
   * Errors for an execution event.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The description for an execution event.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The event ID for an execution event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event ID of the previous execution event.
   *
   * @public
   */
  previousEventId?: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionEventsResponse {
  /**
   * The items in the plan execution event.
   *
   * @public
   */
  items?: ExecutionEvent[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionsRequest {
  /**
   * The ARN for the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The state of the plan execution. For example, the plan execution might be In Progress.
   *
   * @public
   */
  state?: ExecutionState | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionsResponse {
  /**
   * The items in the plan execution to return.
   *
   * @public
   */
  items?: AbbreviatedExecution[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansInRegionRequest {
  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansInRegionResponse {
  /**
   * The plans that were requested.
   *
   * @public
   */
  plans?: AbbreviatedPlan[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Route 53 health check request.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The hosted zone ID for the health checks.
   *
   * @public
   */
  hostedZoneId?: string | undefined;

  /**
   * The record name for the health checks.
   *
   * @public
   */
  recordName?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The Amazon Route 53 health check.
 *
 * @public
 */
export interface Route53HealthCheck {
  /**
   * The Amazon Route 53 health check hosted zone ID.
   *
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * The Amazon Route 53 record name.
   *
   * @public
   */
  recordName: string | undefined;

  /**
   * The Amazon Route 53 health check ID.
   *
   * @public
   */
  healthCheckId?: string | undefined;

  /**
   * The Amazon Route 53 health check status.
   *
   * @public
   */
  status?: Route53HealthCheckStatus | undefined;

  /**
   * The Amazon Route 53 Region.
   *
   * @public
   */
  region: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksResponse {
  /**
   * List of the health checks requested.
   *
   * @public
   */
  healthChecks?: Route53HealthCheck[] | undefined;

  /**
   * A pagination token. A response may contain no results while still including a `nextToken`. Continue paginating until `nextToken` is null to retrieve all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksInRegionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Arc Region Switch Plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The hosted zone ID for the health checks.
   *
   * @public
   */
  hostedZoneId?: string | undefined;

  /**
   * The record name for the health checks.
   *
   * @public
   */
  recordName?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksInRegionResponse {
  /**
   * List of the health checks requested.
   *
   * @public
   */
  healthChecks?: Route53HealthCheck[] | undefined;

  /**
   * A pagination token. A response may contain no results while still including a `nextToken`. Continue paginating until `nextToken` is null to retrieve all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotaWarningsRequest {
  /**
   * The Amazon Resource Names (ARNs) of the plans to return service quota warnings for. You can specify up to 100 plan ARNs. Region switch ignores any plan ARN that you can't access. If you omit this parameter, Region switch returns the warnings for all of your accessible plans.
   *
   * @public
   */
  planArns?: string[] | undefined;

  /**
   * The maximum number of results to return with this call. Valid values are `1` to `100`. If you don't specify a value, the operation returns up to the maximum number of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A service quota warning for a plan. Region switch creates a warning when the applied quota value in one Region of a plan is lower than the value for the matching resource in another Region or account in the plan, or when it can't complete a service quota check.
 *
 * @public
 */
export interface ServiceQuotaWarningSummary {
  /**
   * The Amazon Web Services account ID that owns the plan that the warning applies to.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Amazon Web Services Region that the quota applies to.
   *
   * @public
   */
  quotaRegion: string | undefined;

  /**
   * The service code of the service that the quota belongs to, as defined in Service Quotas. For example, `ec2`.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The quota code of the quota that the warning applies to, as defined in Service Quotas.
   *
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * The name of the quota that the warning applies to, as defined in Service Quotas.
   *
   * @public
   */
  quotaName?: string | undefined;

  /**
   * The status of the service quota warning.
   *
   * @public
   */
  status: ServiceQuotaWarningStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the plan that the warning applies to.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The ID of the quota increase request that Region switch submitted, if it submitted one for this quota.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The ID of the support case associated with the quota increase request, if Region switch submitted one for this quota.
   *
   * @public
   */
  caseId?: string | undefined;

  /**
   * A message that describes the service quota warning.
   *
   * @public
   */
  warningMessage?: string | undefined;

  /**
   * The time (UTC) when Region switch last checked this quota.
   *
   * @public
   */
  lastCheckedAt?: Date | undefined;

  /**
   * The time (UTC) when Region switch created this warning.
   *
   * @public
   */
  warningCreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotaWarningsResponse {
  /**
   * The service quota warnings for the plans that you can access.
   *
   * @public
   */
  serviceQuotaWarningSummaries: ServiceQuotaWarningSummary[] | undefined;

  /**
   * A pagination token. A response may contain no results while still including a `nextToken`. Continue paginating until `nextToken` is null to retrieve all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePlanRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlanResponse {}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListPlansRequest {
  /**
   * The number of objects that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansResponse {
  /**
   * The plans that were requested.
   *
   * @public
   */
  plans?: AbbreviatedPlan[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for a resource.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for a tag that you add to a resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Tags that you add to a resource. You can add a maximum of 50 tags in Region switch.
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
   * The Amazon Resource Name (ARN) for a tag you remove a resource from.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Tag keys that you remove from a resource.
   *
   * @public
   */
  resourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface StartPlanExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan to execute.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The Amazon Web Services Region to target with this execution. This is the Region that traffic will be shifted to or from, depending on the action.
   *
   * @public
   */
  targetRegion: string | undefined;

  /**
   * The action to perform. Valid values are `activate` (to shift traffic to the target Region) or `deactivate` (to shift traffic away from the target Region).
   *
   * @public
   */
  action: ExecutionAction | undefined;

  /**
   * The plan execution mode. Valid values are `graceful`, for starting the execution in graceful mode, or `ungraceful`, for starting the execution in ungraceful mode.
   *
   * @public
   */
  mode?: ExecutionMode | undefined;

  /**
   * An optional comment explaining why the plan execution is being started.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * A boolean value indicating whether to use the latest version of the plan. If set to false, you must specify a specific version.
   *
   * @public
   */
  latestVersion?: string | undefined;

  /**
   * The execution identifier of the recovery execution that ran in the opposite region post-recovery is ran in. Required when starting a post-recovery execution.
   *
   * @public
   */
  recoveryExecutionId?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request and returns the result of the original successful request. If you don't provide a client token, the service automatically generates one. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPlanExecutionResponse {
  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The details of the Region switch plan.
   *
   * @public
   */
  plan?: string | undefined;

  /**
   * The version of the plan, a unique number generated by Region switch.
   *
   * @public
   */
  planVersion?: string | undefined;

  /**
   * The Amazon Web Services Region to activate.
   *
   * @public
   */
  activateRegion?: string | undefined;

  /**
   * The Amazon Web Services Region to deactivate.
   *
   * @public
   */
  deactivateRegion?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePlanExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan with the execution to update.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The action specified for a plan execution, for example, Switch to Graceful or Pause.
   *
   * @public
   */
  action: UpdatePlanExecutionAction | undefined;

  /**
   * An optional comment about the plan execution.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePlanExecutionResponse {}

/**
 * @public
 */
export interface UpdatePlanExecutionStepRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan containing the execution step to update.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The unique identifier of the plan execution containing the step to update.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * An optional comment about the plan execution.
   *
   * @public
   */
  comment: string | undefined;

  /**
   * The name of the execution step to update.
   *
   * @public
   */
  stepName: string | undefined;

  /**
   * The updated action to take for the step. This can be used to skip or retry a step.
   *
   * @public
   */
  actionToTake: UpdatePlanExecutionStepAction | undefined;
}

/**
 * @public
 */
export interface UpdatePlanExecutionStepResponse {}

/**
 * Execution block configurations for a workflow in a Region switch plan. An execution block represents a specific type of action to perform during a Region switch.
 *
 * @public
 */
export type ExecutionBlockConfiguration =
  | ExecutionBlockConfiguration.ArcRoutingControlConfigMember
  | ExecutionBlockConfiguration.AuroraProvisionedScalingConfigMember
  | ExecutionBlockConfiguration.AuroraServerlessScalingConfigMember
  | ExecutionBlockConfiguration.CustomActionLambdaConfigMember
  | ExecutionBlockConfiguration.DocumentDbConfigMember
  | ExecutionBlockConfiguration.Ec2AsgCapacityIncreaseConfigMember
  | ExecutionBlockConfiguration.EcsCapacityIncreaseConfigMember
  | ExecutionBlockConfiguration.EksResourceScalingConfigMember
  | ExecutionBlockConfiguration.ExecutionApprovalConfigMember
  | ExecutionBlockConfiguration.GlobalAuroraConfigMember
  | ExecutionBlockConfiguration.LambdaEventSourceMappingConfigMember
  | ExecutionBlockConfiguration.NeptuneGlobalDatabaseConfigMember
  | ExecutionBlockConfiguration.ParallelConfigMember
  | ExecutionBlockConfiguration.RdsCreateCrossRegionReadReplicaConfigMember
  | ExecutionBlockConfiguration.RdsPromoteReadReplicaConfigMember
  | ExecutionBlockConfiguration.RdsSwitchoverReadReplicaConfigMember
  | ExecutionBlockConfiguration.RegionSwitchPlanConfigMember
  | ExecutionBlockConfiguration.Route53HealthCheckConfigMember
  | ExecutionBlockConfiguration.SsmSendCommandConfigMember
  | ExecutionBlockConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionBlockConfiguration {
  /**
   * An Amazon Web Services Lambda execution block.
   *
   * @public
   */
  export interface CustomActionLambdaConfigMember {
    customActionLambdaConfig: CustomActionLambdaConfiguration;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An EC2 Auto Scaling group execution block.
   *
   * @public
   */
  export interface Ec2AsgCapacityIncreaseConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig: Ec2AsgCapacityIncreaseConfiguration;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * A manual approval execution block.
   *
   * @public
   */
  export interface ExecutionApprovalConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig: ExecutionApprovalConfiguration;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An ARC routing control execution block.
   *
   * @public
   */
  export interface ArcRoutingControlConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig: ArcRoutingControlConfiguration;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Aurora Global Database execution block.
   *
   * @public
   */
  export interface GlobalAuroraConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig: GlobalAuroraConfiguration;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * A parallel configuration execution block.
   *
   * @public
   */
  export interface ParallelConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig: ParallelExecutionBlockConfiguration;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * A Region switch plan execution block.
   *
   * @public
   */
  export interface RegionSwitchPlanConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig: RegionSwitchPlanConfiguration;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * The capacity increase specified for the configuration.
   *
   * @public
   */
  export interface EcsCapacityIncreaseConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig: EcsCapacityIncreaseConfiguration;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Amazon Web Services EKS resource scaling execution block.
   *
   * @public
   */
  export interface EksResourceScalingConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig: EksResourceScalingConfiguration;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Route 53 health check configuration.
   *
   * @public
   */
  export interface Route53HealthCheckConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig: Route53HealthCheckConfiguration;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration for Amazon DocumentDB global clusters used in a Region switch plan.
   *
   * @public
   */
  export interface DocumentDbConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig: DocumentDbConfiguration;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Amazon RDS promote read replica execution block.
   *
   * @public
   */
  export interface RdsPromoteReadReplicaConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig: RdsPromoteReadReplicaConfiguration;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Amazon RDS create cross-Region replica execution block.
   *
   * @public
   */
  export interface RdsCreateCrossRegionReadReplicaConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig: RdsCreateCrossRegionReplicaConfiguration;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * A Lambda event source mapping execution block.
   *
   * @public
   */
  export interface LambdaEventSourceMappingConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig: LambdaEventSourceMappingConfiguration;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Aurora Serverless scaling execution block.
   *
   * @public
   */
  export interface AuroraServerlessScalingConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig: AuroraServerlessScalingConfiguration;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Aurora provisioned cluster scaling execution block.
   *
   * @public
   */
  export interface AuroraProvisionedScalingConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig: AuroraProvisionedScalingConfiguration;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * A Neptune global database execution block.
   *
   * @public
   */
  export interface NeptuneGlobalDatabaseConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig: NeptuneGlobalDatabaseConfiguration;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * An Amazon RDS switchover read replica execution block.
   *
   * @public
   */
  export interface RdsSwitchoverReadReplicaConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig: RdsSwitchoverReadReplicaConfiguration;
    ssmSendCommandConfig?: never;
    $unknown?: never;
  }

  /**
   * Specifies an AWS Systems Manager `SendCommand` execution block.
   *
   * @public
   */
  export interface SsmSendCommandConfigMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig: SsmSendCommandConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customActionLambdaConfig?: never;
    ec2AsgCapacityIncreaseConfig?: never;
    executionApprovalConfig?: never;
    arcRoutingControlConfig?: never;
    globalAuroraConfig?: never;
    parallelConfig?: never;
    regionSwitchPlanConfig?: never;
    ecsCapacityIncreaseConfig?: never;
    eksResourceScalingConfig?: never;
    route53HealthCheckConfig?: never;
    documentDbConfig?: never;
    rdsPromoteReadReplicaConfig?: never;
    rdsCreateCrossRegionReadReplicaConfig?: never;
    lambdaEventSourceMappingConfig?: never;
    auroraServerlessScalingConfig?: never;
    auroraProvisionedScalingConfig?: never;
    neptuneGlobalDatabaseConfig?: never;
    rdsSwitchoverReadReplicaConfig?: never;
    ssmSendCommandConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customActionLambdaConfig: (value: CustomActionLambdaConfiguration) => T;
    ec2AsgCapacityIncreaseConfig: (value: Ec2AsgCapacityIncreaseConfiguration) => T;
    executionApprovalConfig: (value: ExecutionApprovalConfiguration) => T;
    arcRoutingControlConfig: (value: ArcRoutingControlConfiguration) => T;
    globalAuroraConfig: (value: GlobalAuroraConfiguration) => T;
    parallelConfig: (value: ParallelExecutionBlockConfiguration) => T;
    regionSwitchPlanConfig: (value: RegionSwitchPlanConfiguration) => T;
    ecsCapacityIncreaseConfig: (value: EcsCapacityIncreaseConfiguration) => T;
    eksResourceScalingConfig: (value: EksResourceScalingConfiguration) => T;
    route53HealthCheckConfig: (value: Route53HealthCheckConfiguration) => T;
    documentDbConfig: (value: DocumentDbConfiguration) => T;
    rdsPromoteReadReplicaConfig: (value: RdsPromoteReadReplicaConfiguration) => T;
    rdsCreateCrossRegionReadReplicaConfig: (value: RdsCreateCrossRegionReplicaConfiguration) => T;
    lambdaEventSourceMappingConfig: (value: LambdaEventSourceMappingConfiguration) => T;
    auroraServerlessScalingConfig: (value: AuroraServerlessScalingConfiguration) => T;
    auroraProvisionedScalingConfig: (value: AuroraProvisionedScalingConfiguration) => T;
    neptuneGlobalDatabaseConfig: (value: NeptuneGlobalDatabaseConfiguration) => T;
    rdsSwitchoverReadReplicaConfig: (value: RdsSwitchoverReadReplicaConfiguration) => T;
    ssmSendCommandConfig: (value: SsmSendCommandConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for steps that should be executed in parallel during a Region switch.
 *
 * @public
 */
export interface ParallelExecutionBlockConfiguration {
  /**
   * The steps for a parallel execution block.
   *
   * @public
   */
  steps: Step[] | undefined;
}

/**
 * Represents a step in a Region switch plan workflow. Each step performs a specific action during the Region switch process.
 *
 * @public
 */
export interface Step {
  /**
   * The name of a step in a workflow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of a step in a workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for an execution block in a workflow.
   *
   * @public
   */
  executionBlockConfiguration: ExecutionBlockConfiguration | undefined;

  /**
   * The type of an execution block in a workflow.
   *
   * @public
   */
  executionBlockType: ExecutionBlockType | undefined;
}

/**
 * Represents a workflow in a Region switch plan. A workflow defines a sequence of steps to execute during a Region switch.
 *
 * @public
 */
export interface Workflow {
  /**
   * The steps that make up the workflow.
   *
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * The action that the workflow performs. Valid values include `activate` and `deactivate`.
   *
   * @public
   */
  workflowTargetAction: WorkflowTargetAction | undefined;

  /**
   * The Amazon Web Services Region that the workflow targets.
   *
   * @public
   */
  workflowTargetRegion?: string | undefined;

  /**
   * The description of the workflow.
   *
   * @public
   */
  workflowDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreatePlanRequest {
  /**
   * The description of a Region switch plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of workflows included in a Region switch plan.
   *
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * An execution role is a way to categorize a Region switch plan.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * Optionally, you can specify an recovery time objective for a Region switch plan, in minutes.
   *
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * The alarms associated with a Region switch plan.
   *
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * The triggers associated with a Region switch plan.
   *
   * @public
   */
  triggers?: Trigger[] | undefined;

  /**
   * Configuration for automatic report generation for plan executions. When configured, Region switch automatically generates a report after each plan execution that includes execution events, plan configuration, and CloudWatch alarm states.
   *
   * @public
   */
  reportConfiguration?: ReportConfiguration | undefined;

  /**
   * Specifies whether to enable service quota checks for the Region switch plan.
   *
   * @public
   */
  serviceQuotaChecksEnabled?: boolean | undefined;

  /**
   * The name of a Region switch plan.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An array that specifies the Amazon Web Services Regions for a Region switch plan. Specify two Regions.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).
   *
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * The primary Amazon Web Services Region for the application. This is the Region where the application normally runs before any Region switch occurs.
   *
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * The tags to apply to the Region switch plan.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents a Region switch plan. A plan defines the steps required to shift traffic from one Amazon Web Services Region to another.
 *
 * @public
 */
export interface Plan {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description for a plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The workflows for a plan.
   *
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * The execution role for a plan.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The recovery time objective for a plan.
   *
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * The associated application health alarms for a plan.
   *
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * The triggers for a plan.
   *
   * @public
   */
  triggers?: Trigger[] | undefined;

  /**
   * The report configuration for a plan.
   *
   * @public
   */
  reportConfiguration?: ReportConfiguration | undefined;

  /**
   * Indicates whether service quota checks are enabled for the Region switch plan. When enabled, Region switch compares the applied service quota values across the plan's Amazon Web Services Regions and creates a warning when a quota in one Region is lower than the value required for the matching resource in another Region. Service quota checks are advisory and don't prevent you from creating, evaluating, or executing a plan.
   *
   * @public
   */
  serviceQuotaChecksEnabled?: boolean | undefined;

  /**
   * The name for a plan.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Regions for a plan.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).
   *
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * The primary Region for a plan.
   *
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * The owner of a plan.
   *
   * @public
   */
  owner: string | undefined;

  /**
   * The version for the plan.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp when the plan was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePlanRequest {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The updated description for the Region switch plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated workflows for the Region switch plan.
   *
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * The updated IAM role ARN that grants Region switch the permissions needed to execute the plan steps.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The updated target recovery time objective (RTO) in minutes for the plan.
   *
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * The updated CloudWatch alarms associated with the plan.
   *
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * The updated conditions that can automatically trigger the execution of the plan.
   *
   * @public
   */
  triggers?: Trigger[] | undefined;

  /**
   * The updated report configuration for the plan.
   *
   * @public
   */
  reportConfiguration?: ReportConfiguration | undefined;

  /**
   * Specifies whether service quota checks are enabled for the Region switch plan.
   *
   * @public
   */
  serviceQuotaChecksEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePlanResponse {
  /**
   * The details of the created Region switch plan.
   *
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface GetPlanExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the plan.
   *
   * @public
   */
  planArn: string | undefined;

  /**
   * The execution identifier of a plan execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The version for the plan.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp when the plan execution was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A comment included on the plan execution.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The time (UTC) when the plan execution started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time (UTC) when the plan execution ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The plan execution mode. Valid values are `graceful`, for graceful executions, or `ungraceful`, for ungraceful executions.
   *
   * @public
   */
  mode: ExecutionMode | undefined;

  /**
   * The plan execution state. Provides the state of a plan execution, for example, In Progress or Paused by Operator.
   *
   * @public
   */
  executionState: ExecutionState | undefined;

  /**
   * The plan execution action. Valid values are `activate`, to activate an Amazon Web Services Region, or `deactivate`, to deactivate a Region.
   *
   * @public
   */
  executionAction: ExecutionAction | undefined;

  /**
   * The Amazon Web Services Region for a plan execution.
   *
   * @public
   */
  executionRegion: string | undefined;

  /**
   * The unique identifier of the most recent recovery execution. Required when starting a post-recovery execution.
   *
   * @public
   */
  recoveryExecutionId?: string | undefined;

  /**
   * The states of the steps in the plan execution.
   *
   * @public
   */
  stepStates?: StepState[] | undefined;

  /**
   * The details of the Region switch plan.
   *
   * @public
   */
  plan?: Plan | undefined;

  /**
   * The actual recovery time that Region switch calculates for a plan execution. Actual recovery time includes the time for the plan to run added to the time elapsed until the application health alarms that you've specified are healthy again.
   *
   * @public
   */
  actualRecoveryTime?: string | undefined;

  /**
   * Information about the location of a generated report, or the cause of its failure.
   *
   * @public
   */
  generatedReportDetails?: GeneratedReport[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `nextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `nextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanInRegionResponse {
  /**
   * The details of the Region switch plan.
   *
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * The detailed information about the requested Region switch plan.
   *
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface UpdatePlanResponse {
  /**
   * The details of the updated Region switch plan.
   *
   * @public
   */
  plan?: Plan | undefined;
}
