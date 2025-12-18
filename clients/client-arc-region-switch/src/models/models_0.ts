// smithy-typescript generated code
import {
  AlarmCondition,
  AlarmType,
  Approval,
  Ec2AsgCapacityMonitoringApproach,
  EcsCapacityMonitoringApproach,
  EksCapacityMonitoringApproach,
  EvaluationStatus,
  ExecutionAction,
  ExecutionBlockType,
  ExecutionEventType,
  ExecutionMode,
  ExecutionState,
  GlobalAuroraDefaultBehavior,
  GlobalAuroraUngracefulBehavior,
  LambdaUngracefulBehavior,
  RecoveryApproach,
  RegionToRunIn,
  ResourceWarningStatus,
  Route53HealthCheckStatus,
  RoutingControlStateChange,
  StepStatus,
  UpdatePlanExecutionAction,
  UpdatePlanExecutionStepAction,
  WorkflowTargetAction,
} from "./enums";

/**
 * <p>A summarized representation of a plan execution. This structure contains key information about an execution without all the detailed step data.</p>
 * @public
 */
export interface AbbreviatedExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The version for the plan.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp when the plan execution was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>An optional comment about the plan execution.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The timestamp when the plan execution was started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp when the plan execution was ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The plan execution mode. Valid values are <code>Practice</code>, for testing without making actual changes, or <code>Recovery</code>, for actual traffic shifting and application recovery.</p>
   * @public
   */
  mode: ExecutionMode | undefined;

  /**
   * <p>The plan execution state. Provides the state of a plan execution, for example, In Progress or Paused by Operator.</p>
   * @public
   */
  executionState: ExecutionState | undefined;

  /**
   * <p>The plan execution action. Valid values are <code>Activate</code>, to activate an Amazon Web Services Region, or <code>Deactivate</code>, to deactivate a Region.</p>
   * @public
   */
  executionAction: ExecutionAction | undefined;

  /**
   * <p>The Amazon Web Services Region for a plan execution.</p>
   * @public
   */
  executionRegion: string | undefined;

  /**
   * <p>The actual recovery time that Region switch calculates for a plan execution. Actual recovery time includes the time for the plan to run added to the time elapsed until the application health alarms that you've specified are healthy again.</p>
   * @public
   */
  actualRecoveryTime?: string | undefined;
}

/**
 * <p>A summarized representation of a Region switch plan. This structure contains key information about a plan without all the detailed workflow and step data.</p>
 * @public
 */
export interface AbbreviatedPlan {
  /**
   * <p>The Amazon Resource Name (ARN) of the Region switch plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The owner of a Region switch plan.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The name of a Region switch plan.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Region specified for a Region switch plan.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).</p>
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * <p>The primary Region for a plan.</p>
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * <p>The version for the plan.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp when the plan execution was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The description of a Region switch plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The execution role is a way to categorize a Region switch plan. </p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>Specifies if this is the active plan execution at this time.</p>
   * @public
   */
  activePlanExecution?: string | undefined;

  /**
   * <p>The recovery time objective that you've specified.</p>
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;
}

/**
 * @public
 */
export interface ApprovePlanExecutionStepRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The name of a step in a plan execution.</p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p>The status of approval for a plan execution step. </p>
   * @public
   */
  approval: Approval | undefined;

  /**
   * <p>A comment that you can enter about a plan execution.</p>
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
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>A comment that you can enter about canceling a plan execution step.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Region switch plan to retrieve evaluation status for.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A simplified representation of a workflow in a Region switch plan.</p>
 * @public
 */
export interface MinimalWorkflow {
  /**
   * <p>The action for a minimal workflow, which can be Activate or Deactivate.</p>
   * @public
   */
  action?: ExecutionAction | undefined;

  /**
   * <p>The name for a minimal workflow</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Represents a warning about a resource in a Region switch plan.</p>
 * @public
 */
export interface ResourceWarning {
  /**
   * <p>The workflow for the resource warning.</p>
   * @public
   */
  workflow?: MinimalWorkflow | undefined;

  /**
   * <p>The version for the resource warning.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The name of the step for the resource warning.</p>
   * @public
   */
  stepName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The status of the resource warning.</p>
   * @public
   */
  warningStatus: ResourceWarningStatus | undefined;

  /**
   * <p>The timestamp when the warning was last updated.</p>
   * @public
   */
  warningUpdatedTime: Date | undefined;

  /**
   * <p>The warning message about what needs to be corrected.</p>
   * @public
   */
  warningMessage: string | undefined;
}

/**
 * @public
 */
export interface GetPlanEvaluationStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The time of the last time that Region switch ran an evaluation of the plan.</p>
   * @public
   */
  lastEvaluationTime?: Date | undefined;

  /**
   * <p>The version of the last evaluation of the plan.</p>
   * @public
   */
  lastEvaluatedVersion?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the plan.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The evaluation state for the plan.</p>
   * @public
   */
  evaluationState?: EvaluationStatus | undefined;

  /**
   * <p>The current evaluation warnings for the plan. </p>
   * @public
   */
  warnings?: ResourceWarning[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan with the execution to retrieve.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An Amazon CloudWatch alarm associated with a Region switch plan. These alarms can be used to trigger automatic execution of the plan.</p>
 * @public
 */
export interface AssociatedAlarm {
  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The resource identifier for alarms that you associate with a plan.</p>
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * <p>The alarm type for an associated alarm. An associated CloudWatch alarm can be an application health alarm or a trigger alarm.</p>
   * @public
   */
  alarmType: AlarmType | undefined;
}

/**
 * <p>Defines a condition that must be met for a trigger to fire.</p>
 * @public
 */
export interface TriggerCondition {
  /**
   * <p>The name of the CloudWatch alarm associated with the condition.</p>
   * @public
   */
  associatedAlarmName: string | undefined;

  /**
   * <p>The condition that must be met. Valid values include ALARM and OK.</p>
   * @public
   */
  condition: AlarmCondition | undefined;
}

/**
 * <p>Defines a condition that can automatically trigger the execution of a Region switch plan.</p>
 * @public
 */
export interface Trigger {
  /**
   * <p>The description for a trigger.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for a trigger.</p>
   * @public
   */
  targetRegion: string | undefined;

  /**
   * <p>The action to perform when the trigger fires. Valid values include ACTIVATE and DEACTIVATE.</p>
   * @public
   */
  action: WorkflowTargetAction | undefined;

  /**
   * <p>The conditions that must be met for the trigger to fire.</p>
   * @public
   */
  conditions: TriggerCondition[] | undefined;

  /**
   * <p>The minimum time, in minutes, that must elapse between automatic executions of the plan.</p>
   * @public
   */
  minDelayMinutesBetweenExecutions: number | undefined;
}

/**
 * <p>Represents the state of an ARC routing control.</p>
 * @public
 */
export interface ArcRoutingControlState {
  /**
   * <p>The Amazon Resource Name (ARN) of a routing control.</p>
   * @public
   */
  routingControlArn: string | undefined;

  /**
   * <p>The state of an ARC routing control, On or Off.</p>
   * @public
   */
  state: RoutingControlStateChange | undefined;
}

/**
 * <p>Configuration for ARC routing controls used in a Region switch plan. Routing controls are simple on/off switches that you can use to shift traffic away from an impaired Region.</p>
 * @public
 */
export interface ArcRoutingControlConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Region and ARC routing controls for the configuration.</p>
   * @public
   */
  regionAndRoutingControls: Record<string, ArcRoutingControlState[]> | undefined;
}

/**
 * <p>Configuration for Amazon Web Services Lambda functions used in a Region switch plan.</p>
 * @public
 */
export interface Lambdas {
  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>Configuration for handling failures when invoking Lambda functions.</p>
 * @public
 */
export interface LambdaUngraceful {
  /**
   * <p>The ungraceful behavior for a Lambda function, which must be set to <code>skip</code>.</p>
   * @public
   */
  behavior?: LambdaUngracefulBehavior | undefined;
}

/**
 * <p>Configuration for Amazon Web Services Lambda functions that perform custom actions during a Region switch.</p>
 * @public
 */
export interface CustomActionLambdaConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The Amazon Web Services Lambda functions for the execution block.</p>
   * @public
   */
  lambdas: Lambdas[] | undefined;

  /**
   * <p>The retry interval specified.</p>
   * @public
   */
  retryIntervalMinutes: number | undefined;

  /**
   * <p>The Amazon Web Services Region for the function to run in.</p>
   * @public
   */
  regionToRun: RegionToRunIn | undefined;

  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: LambdaUngraceful | undefined;
}

/**
 * <p>Configuration for an Amazon EC2 Auto Scaling group used in a Region switch plan.</p>
 * @public
 */
export interface Asg {
  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the EC2 Auto Scaling group.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>Configuration for handling failures when performing operations on EC2 resources.</p>
 * @public
 */
export interface Ec2Ungraceful {
  /**
   * <p>The minimum success percentage that you specify for EC2 Auto Scaling groups.</p>
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * <p>Configuration for increasing the capacity of Amazon EC2 Auto Scaling groups during a Region switch.</p>
 * @public
 */
export interface Ec2AsgCapacityIncreaseConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The EC2 Auto Scaling groups for the configuration.</p>
   * @public
   */
  asgs: Asg[] | undefined;

  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: Ec2Ungraceful | undefined;

  /**
   * <p>The target percentage that you specify for EC2 Auto Scaling groups.</p>
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * <p>The monitoring approach that you specify EC2 Auto Scaling groups for the configuration.</p>
   * @public
   */
  capacityMonitoringApproach?: Ec2AsgCapacityMonitoringApproach | undefined;
}

/**
 * <p>The service for a cross account role.</p>
 * @public
 */
export interface Service {
  /**
   * <p>The cross account role for a service.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the service.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The cluster Amazon Resource Name (ARN) for a service.</p>
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a service.</p>
   * @public
   */
  serviceArn?: string | undefined;
}

/**
 * <p>The settings for ungraceful execution.</p>
 * @public
 */
export interface EcsUngraceful {
  /**
   * <p>The minimum success percentage specified for the configuration.</p>
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * <p>The configuration for an Amazon Web Services ECS capacity increase.</p>
 * @public
 */
export interface EcsCapacityIncreaseConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The services specified for the configuration.</p>
   * @public
   */
  services: Service[] | undefined;

  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: EcsUngraceful | undefined;

  /**
   * <p>The target percentage specified for the configuration.</p>
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * <p>The monitoring approach specified for the configuration, for example, <code>Most_Recent</code>.</p>
   * @public
   */
  capacityMonitoringApproach?: EcsCapacityMonitoringApproach | undefined;
}

/**
 * <p>The Amazon Web Services EKS cluster execution block configuration.</p>
 * @public
 */
export interface EksCluster {
  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services EKS cluster.</p>
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * <p>Defines the type of Kubernetes resource to scale in an Amazon EKS cluster.</p>
 * @public
 */
export interface KubernetesResourceType {
  /**
   * <p>The API version type for the Kubernetes resource.</p>
   * @public
   */
  apiVersion: string | undefined;

  /**
   * <p>The kind for the Kubernetes resource.</p>
   * @public
   */
  kind: string | undefined;
}

/**
 * <p>Defines a Kubernetes resource to scale in an Amazon EKS cluster.</p>
 * @public
 */
export interface KubernetesScalingResource {
  /**
   * <p>The namespace for the Kubernetes resource.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name for the Kubernetes resource.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The hpaname for the Kubernetes resource.</p>
   * @public
   */
  hpaName?: string | undefined;
}

/**
 * <p>The ungraceful settings for Amazon Web Services EKS resource scaling.</p>
 * @public
 */
export interface EksResourceScalingUngraceful {
  /**
   * <p>The minimum success percentage for the configuration.</p>
   * @public
   */
  minimumSuccessPercentage: number | undefined;
}

/**
 * <p>The Amazon Web Services EKS resource scaling configuration.</p>
 * @public
 */
export interface EksResourceScalingConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The Kubernetes resource type for the configuration.</p>
   * @public
   */
  kubernetesResourceType: KubernetesResourceType | undefined;

  /**
   * <p>The scaling resources for the configuration.</p>
   * @public
   */
  scalingResources?: Record<string, Record<string, KubernetesScalingResource>>[] | undefined;

  /**
   * <p>The clusters for the configuration.</p>
   * @public
   */
  eksClusters?: EksCluster[] | undefined;

  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: EksResourceScalingUngraceful | undefined;

  /**
   * <p>The target percentage for the configuration.</p>
   * @public
   */
  targetPercent?: number | undefined;

  /**
   * <p>The monitoring approach for the configuration, that is, whether it was sampled in the last 24 hours or autoscaled in the last 24 hours.</p>
   * @public
   */
  capacityMonitoringApproach?: EksCapacityMonitoringApproach | undefined;
}

/**
 * <p>Configuration for approval steps in a Region switch plan execution. Approval steps require manual intervention before the execution can proceed.</p>
 * @public
 */
export interface ExecutionApprovalConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The IAM approval role for the configuration.</p>
   * @public
   */
  approvalRole: string | undefined;
}

/**
 * <p>Configuration for handling failures when performing operations on Aurora global databases.</p>
 * @public
 */
export interface GlobalAuroraUngraceful {
  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: GlobalAuroraUngracefulBehavior | undefined;
}

/**
 * <p>Configuration for Amazon Aurora global databases used in a Region switch plan.</p>
 * @public
 */
export interface GlobalAuroraConfiguration {
  /**
   * <p>The timeout value specified for the configuration.</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The behavior for a global database, that is, only allow switchover or also allow failover.</p>
   * @public
   */
  behavior: GlobalAuroraDefaultBehavior | undefined;

  /**
   * <p>The settings for ungraceful execution.</p>
   * @public
   */
  ungraceful?: GlobalAuroraUngraceful | undefined;

  /**
   * <p>The global cluster identifier for a global database.</p>
   * @public
   */
  globalClusterIdentifier: string | undefined;

  /**
   * <p>The database cluster Amazon Resource Names (ARNs) for a global database.</p>
   * @public
   */
  databaseClusterArns: string[] | undefined;
}

/**
 * <p>Configuration for nested Region switch plans. This allows one Region switch plan to trigger another plan as part of its execution.</p>
 * @public
 */
export interface RegionSwitchPlanConfiguration {
  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the plan configuration.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The Amazon Route 53 record set.</p>
 * @public
 */
export interface Route53ResourceRecordSet {
  /**
   * <p>The Amazon Route 53 record set identifier.</p>
   * @public
   */
  recordSetIdentifier?: string | undefined;

  /**
   * <p>The Amazon Route 53 record set Region.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>The Amazon Route 53 health check configuration.</p>
 * @public
 */
export interface Route53HealthCheckConfiguration {
  /**
   * <p>The Amazon Route 53 health check configuration time out (in minutes).</p>
   * @public
   */
  timeoutMinutes?: number | undefined;

  /**
   * <p>The cross account role for the configuration.</p>
   * @public
   */
  crossAccountRole?: string | undefined;

  /**
   * <p>The external ID (secret key) for the configuration.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The Amazon Route 53 health check configuration hosted zone ID.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The Amazon Route 53 health check configuration record name.</p>
   * @public
   */
  recordName: string | undefined;

  /**
   * <p>The Amazon Route 53 health check configuration record sets.</p>
   * @public
   */
  recordSets?: Route53ResourceRecordSet[] | undefined;
}

/**
 * <p>Represents the state of a step in a plan execution.</p>
 * @public
 */
export interface StepState {
  /**
   * <p>The name of a step in a workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of a step in a workflow. For example, a status might be Completed or Pending Approval.</p>
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * <p>The timestamp when a step started execution.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The timestamp when a step endeded execution.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The mode for a step execution. The mode can be Graceful or Ungraceful.</p>
   * @public
   */
  stepMode?: ExecutionMode | undefined;
}

/**
 * @public
 */
export interface GetPlanInRegionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan in Region.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionEventsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the plan execution event.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Represents an event that occurred during a plan execution. These events provide a detailed timeline of the execution process.</p>
 * @public
 */
export interface ExecutionEvent {
  /**
   * <p>The timestamp for an execution event.</p>
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>The type of an execution event.</p>
   * @public
   */
  type?: ExecutionEventType | undefined;

  /**
   * <p>The step name for an execution event.</p>
   * @public
   */
  stepName?: string | undefined;

  /**
   * <p>The execution block type for an execution event.</p>
   * @public
   */
  executionBlockType?: ExecutionBlockType | undefined;

  /**
   * <p>The resources for an execution event.</p>
   * @public
   */
  resources?: string[] | undefined;

  /**
   * <p>Errors for an execution event.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The description for an execution event.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The event ID for an execution event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event ID of the previous execution event.</p>
   * @public
   */
  previousEventId?: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionEventsResponse {
  /**
   * <p>The items in the plan execution event.</p>
   * @public
   */
  items?: ExecutionEvent[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionsRequest {
  /**
   * <p>The ARN for the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The state of the plan execution. For example, the plan execution might be In Progress.</p>
   * @public
   */
  state?: ExecutionState | undefined;
}

/**
 * @public
 */
export interface ListPlanExecutionsResponse {
  /**
   * <p>The items in the plan execution to return.</p>
   * @public
   */
  items?: AbbreviatedExecution[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansInRegionRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansInRegionResponse {
  /**
   * <p>The plans that were requested.</p>
   * @public
   */
  plans?: AbbreviatedPlan[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Route 53 health check request.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The hosted zone ID for the health checks.</p>
   * @public
   */
  hostedZoneId?: string | undefined;

  /**
   * <p>The record name for the health checks.</p>
   * @public
   */
  recordName?: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The Amazon Route 53 health check.</p>
 * @public
 */
export interface Route53HealthCheck {
  /**
   * <p>The Amazon Route 53 health check hosted zone ID.</p>
   * @public
   */
  hostedZoneId: string | undefined;

  /**
   * <p>The Amazon Route 53 record name.</p>
   * @public
   */
  recordName: string | undefined;

  /**
   * <p>The Amazon Route 53 health check ID.</p>
   * @public
   */
  healthCheckId?: string | undefined;

  /**
   * <p>The Amazon Route 53 health check status.</p>
   * @public
   */
  status?: Route53HealthCheckStatus | undefined;

  /**
   * <p>The Amazon Route 53 Region.</p>
   * @public
   */
  region: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksResponse {
  /**
   * <p>List of the health checks requested.</p>
   * @public
   */
  healthChecks?: Route53HealthCheck[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksInRegionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Arc Region Switch Plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The hosted zone ID for the health checks.</p>
   * @public
   */
  hostedZoneId?: string | undefined;

  /**
   * <p>The record name for the health checks.</p>
   * @public
   */
  recordName?: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoute53HealthChecksInRegionResponse {
  /**
   * <p>List of the health checks requested.</p>
   * @public
   */
  healthChecks?: Route53HealthCheck[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePlanRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
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
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListPlansRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlansResponse {
  /**
   * <p>The plans that were requested.</p>
   * @public
   */
  plans?: AbbreviatedPlan[] | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for a resource.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a tag that you add to a resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Tags that you add to a resource. You can add a maximum of 50 tags in Region switch.</p>
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
   * <p>The Amazon Resource Name (ARN) for a tag you remove a resource from.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Tag keys that you remove from a resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the plan to execute.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The Amazon Web Services Region to target with this execution. This is the Region that traffic will be shifted to or from, depending on the action.</p>
   * @public
   */
  targetRegion: string | undefined;

  /**
   * <p>The action to perform. Valid values are ACTIVATE (to shift traffic to the target Region) or DEACTIVATE (to shift traffic away from the target Region).</p>
   * @public
   */
  action: ExecutionAction | undefined;

  /**
   * <p>The plan execution mode. Valid values are <code>Practice</code>, for testing without making actual changes, or <code>Recovery</code>, for actual traffic shifting and application recovery.</p>
   * @public
   */
  mode?: ExecutionMode | undefined;

  /**
   * <p>An optional comment explaining why the plan execution is being started.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>A boolean value indicating whether to use the latest version of the plan. If set to false, you must specify a specific version.</p>
   * @public
   */
  latestVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartPlanExecutionResponse {
  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The details of the Region switch plan.</p>
   * @public
   */
  plan?: string | undefined;

  /**
   * <p>The version of the plan, a unique number generated by Region switch.</p>
   * @public
   */
  planVersion?: string | undefined;

  /**
   * <p>The Amazon Web Services Region to activate.</p>
   * @public
   */
  activateRegion?: string | undefined;

  /**
   * <p>The Amazon Web Services Region to deactivate.</p>
   * @public
   */
  deactivateRegion?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePlanExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan with the execution to update.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The action specified for a plan execution, for example, Switch to Graceful or Pause.</p>
   * @public
   */
  action: UpdatePlanExecutionAction | undefined;

  /**
   * <p>An optional comment about the plan execution.</p>
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
   * <p>The Amazon Resource Name (ARN) of the plan containing the execution step to update.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The unique identifier of the plan execution containing the step to update.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>An optional comment about the plan execution.</p>
   * @public
   */
  comment: string | undefined;

  /**
   * <p>The name of the execution step to update.</p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p>The updated action to take for the step. This can be used to skip or retry a step.</p>
   * @public
   */
  actionToTake: UpdatePlanExecutionStepAction | undefined;
}

/**
 * @public
 */
export interface UpdatePlanExecutionStepResponse {}

/**
 * <p>Execution block configurations for a workflow in a Region switch plan. An execution block represents a specific type of action to perform during a Region switch.</p>
 * @public
 */
export type ExecutionBlockConfiguration =
  | ExecutionBlockConfiguration.ArcRoutingControlConfigMember
  | ExecutionBlockConfiguration.CustomActionLambdaConfigMember
  | ExecutionBlockConfiguration.Ec2AsgCapacityIncreaseConfigMember
  | ExecutionBlockConfiguration.EcsCapacityIncreaseConfigMember
  | ExecutionBlockConfiguration.EksResourceScalingConfigMember
  | ExecutionBlockConfiguration.ExecutionApprovalConfigMember
  | ExecutionBlockConfiguration.GlobalAuroraConfigMember
  | ExecutionBlockConfiguration.ParallelConfigMember
  | ExecutionBlockConfiguration.RegionSwitchPlanConfigMember
  | ExecutionBlockConfiguration.Route53HealthCheckConfigMember
  | ExecutionBlockConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExecutionBlockConfiguration {
  /**
   * <p>An Amazon Web Services Lambda execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An EC2 Auto Scaling group execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>A manual approval execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An ARC routing control execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An Aurora Global Database execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>A parallel configuration execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>A Region switch plan execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The capacity increase specified for the configuration.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An Amazon Web Services EKS resource scaling execution block.</p>
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
    $unknown?: never;
  }

  /**
   * <p>The Amazon Route 53 health check configuration.</p>
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for steps that should be executed in parallel during a Region switch.</p>
 * @public
 */
export interface ParallelExecutionBlockConfiguration {
  /**
   * <p>The steps for a parallel execution block.</p>
   * @public
   */
  steps: Step[] | undefined;
}

/**
 * <p>Represents a step in a Region switch plan workflow. Each step performs a specific action during the Region switch process.</p>
 * @public
 */
export interface Step {
  /**
   * <p>The name of a step in a workflow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of a step in a workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for an execution block in a workflow.</p>
   * @public
   */
  executionBlockConfiguration: ExecutionBlockConfiguration | undefined;

  /**
   * <p>The type of an execution block in a workflow.</p>
   * @public
   */
  executionBlockType: ExecutionBlockType | undefined;
}

/**
 * <p>Represents a workflow in a Region switch plan. A workflow defines a sequence of steps to execute during a Region switch.</p>
 * @public
 */
export interface Workflow {
  /**
   * <p>The steps that make up the workflow.</p>
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * <p>The action that the workflow performs. Valid values include ACTIVATE and DEACTIVATE.</p>
   * @public
   */
  workflowTargetAction: WorkflowTargetAction | undefined;

  /**
   * <p>The Amazon Web Services Region that the workflow targets.</p>
   * @public
   */
  workflowTargetRegion?: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   * @public
   */
  workflowDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreatePlanRequest {
  /**
   * <p>The description of a Region switch plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of workflows included in a Region switch plan.</p>
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * <p>An execution role is a way to categorize a Region switch plan.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>Optionally, you can specify an recovery time objective for a Region switch plan, in minutes.</p>
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * <p>The alarms associated with a Region switch plan.</p>
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * <p>The triggers associated with a Region switch plan.</p>
   * @public
   */
  triggers?: Trigger[] | undefined;

  /**
   * <p>The name of a Region switch plan.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An array that specifies the Amazon Web Services Regions for a Region switch plan. Specify two Regions.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).</p>
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * <p>The primary Amazon Web Services Region for the application. This is the Region where the application normally runs before any Region switch occurs.</p>
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * <p>The tags to apply to the Region switch plan.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents a Region switch plan. A plan defines the steps required to shift traffic from one Amazon Web Services Region to another.</p>
 * @public
 */
export interface Plan {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description for a plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The workflows for a plan.</p>
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * <p>The execution role for a plan.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The recovery time objective for a plan.</p>
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * <p>The associated application health alarms for a plan.</p>
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * <p>The triggers for a plan.</p>
   * @public
   */
  triggers?: Trigger[] | undefined;

  /**
   * <p>The name for a plan.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Regions for a plan.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).</p>
   * @public
   */
  recoveryApproach: RecoveryApproach | undefined;

  /**
   * <p>The primary Region for a plan.</p>
   * @public
   */
  primaryRegion?: string | undefined;

  /**
   * <p>The owner of a plan.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The version for the plan.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp when the plan was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePlanRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The updated description for the Region switch plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated workflows for the Region switch plan.</p>
   * @public
   */
  workflows: Workflow[] | undefined;

  /**
   * <p>The updated IAM role ARN that grants Region switch the permissions needed to execute the plan steps.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The updated target recovery time objective (RTO) in minutes for the plan.</p>
   * @public
   */
  recoveryTimeObjectiveMinutes?: number | undefined;

  /**
   * <p>The updated CloudWatch alarms associated with the plan.</p>
   * @public
   */
  associatedAlarms?: Record<string, AssociatedAlarm> | undefined;

  /**
   * <p>The updated conditions that can automatically trigger the execution of the plan.</p>
   * @public
   */
  triggers?: Trigger[] | undefined;
}

/**
 * @public
 */
export interface CreatePlanResponse {
  /**
   * <p>The details of the created Region switch plan.</p>
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface GetPlanExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the plan.</p>
   * @public
   */
  planArn: string | undefined;

  /**
   * <p>The execution identifier of a plan execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The version for the plan.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp when the plan execution was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>A comment included on the plan execution.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The time (UTC) when the plan execution started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time (UTC) when the plan execution ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The plan execution mode. Valid values are <code>Practice</code>, for testing without making actual changes, or <code>Recovery</code>, for actual traffic shifting and application recovery.</p>
   * @public
   */
  mode: ExecutionMode | undefined;

  /**
   * <p>The plan execution state. Provides the state of a plan execution, for example, In Progress or Paused by Operator.</p>
   * @public
   */
  executionState: ExecutionState | undefined;

  /**
   * <p>The plan execution action. Valid values are <code>Activate</code>, to activate an Amazon Web Services Region, or <code>Deactivate</code>, to deactivate a Region.</p>
   * @public
   */
  executionAction: ExecutionAction | undefined;

  /**
   * <p>The Amazon Web Services Region for a plan execution.</p>
   * @public
   */
  executionRegion: string | undefined;

  /**
   * <p>The states of the steps in the plan execution.</p>
   * @public
   */
  stepStates?: StepState[] | undefined;

  /**
   * <p>The details of the Region switch plan.</p>
   * @public
   */
  plan?: Plan | undefined;

  /**
   * <p>The actual recovery time that Region switch calculates for a plan execution. Actual recovery time includes the time for the plan to run added to the time elapsed until the application health alarms that you've specified are healthy again.</p>
   * @public
   */
  actualRecoveryTime?: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid only if you received a <code>nextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>nextToken</code> response to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanInRegionResponse {
  /**
   * <p>The details of the Region switch plan.</p>
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * <p>The detailed information about the requested Region switch plan.</p>
   * @public
   */
  plan?: Plan | undefined;
}

/**
 * @public
 */
export interface UpdatePlanResponse {
  /**
   * <p>The details of the updated Region switch plan.</p>
   * @public
   */
  plan?: Plan | undefined;
}
