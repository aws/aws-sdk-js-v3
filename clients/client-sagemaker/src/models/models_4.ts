// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSpecification,
  AppType,
  AutoMLJobStepMetadata,
  BatchDataCaptureConfig,
  BatchStrategy,
  BatchTransformInput,
  BooleanOperator,
  CacheHitResult,
  CallbackStepMetadata,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  ClusterInstanceGroupSpecification,
  ConditionStepMetadata,
  ContainerDefinition,
  InferenceSpecification,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  ModelPackageStatus,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";

import {
  _InstanceType,
  DebugHookConfig,
  DefaultSpaceSettings,
  DeploymentConfig,
  DriftCheckBaselines,
  EdgeOutputConfig,
  ExperimentConfig,
  FeatureDefinition,
  InferenceComponentRuntimeConfig,
  InferenceComponentSpecification,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InstanceMetadataServiceConfiguration,
  JobType,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelMetrics,
  ModelPackageValidationSpecification,
  ModelVariantConfig,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  ParallelismConfiguration,
  PipelineDefinitionS3Location,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  Processor,
  ProvisioningParameter,
  RetryStrategy,
  RootAccess,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  SharingType,
  SkipModelValidation,
  SourceAlgorithmSpecification,
  SpaceSettings,
  SpaceStorageSettings,
  StudioLifecycleConfigAppType,
  ThroughputMode,
  TtlDuration,
  UiTemplate,
  UserSettings,
  VendorGuidance,
} from "./models_1";

import {
  CrossAccountFilterOption,
  DataProcessing,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentRecommendation,
  EndpointStatus,
  FeatureParameter,
  HyperParameterTrainingJobSummary,
  MemberDefinition,
  ModelArtifacts,
  ModelClientConfig,
  ModelPackageGroupStatus,
  ModelPackageStatusDetails,
  MonitoringExecutionSummary,
  NotificationConfiguration,
  OidcConfig,
  OidcConfigFilterSensitiveLog,
  PipelineExecutionStatus,
  PipelineExperimentConfig,
  PipelineStatus,
  ProcessingJobStatus,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  ProjectStatus,
  ScheduleStatus,
  SelectiveExecutionConfig,
  ServiceCatalogProvisionedProductDetails,
  SourceIpConfig,
  SpaceStatus,
  TensorBoardOutputConfig,
  TrainingJobStatus,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkforceVpcConfigRequest,
} from "./models_2";

import {
  DesiredWeightAndCapacity,
  Device,
  DeviceDeploymentSummary,
  Direction,
  DomainSettingsForUpdate,
  Edge,
  EMRStepMetadata,
  Endpoint,
  Experiment,
  FailStepMetadata,
  FeatureGroup,
  FeatureMetadata,
  Filter,
  GitConfigForUpdate,
  HyperParameterTuningJobSearchEntity,
  InferenceExperimentStopDesiredState,
  LambdaStepMetadata,
  LineageType,
  MetricData,
  ModelStepMetadata,
  MonitoringAlertSummary,
  ProcessingJobStepMetadata,
  ResourceType,
  SecondaryStatus,
  SecondaryStatusTransition,
  SortBy,
  SortOrder,
  SubscribedWorkteam,
  TransformJobStatus,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  UserProfileStatus,
  WarmPoolResourceStatus,
  WarmPoolStatus,
  Workforce,
  Workteam,
} from "./models_3";

/**
 * @public
 * <p>Container for the metadata for a Quality check step. For more information, see
 *          the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *       </p>
 */
export interface QualityCheckStepMetadata {
  /**
   * @public
   * <p>The type of the Quality check step.</p>
   */
  CheckType?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckStatistics?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   */
  CalculatedBaselineStatistics?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   */
  CalculatedBaselineConstraints?: string;

  /**
   * @public
   * <p>The model package group name.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   */
  ViolationReport?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   */
  CheckJobArn?: string;

  /**
   * @public
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   */
  SkipCheck?: boolean;

  /**
   * @public
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *          <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *          These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code>
   *             BaselineUsedForDriftCheckStatistics</code> properties. </p>
   */
  RegisterNewBaseline?: boolean;
}

/**
 * @public
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a training job step.</p>
 */
export interface TrainingJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a tuning step.</p>
 */
export interface TuningJobStepMetaData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a step execution.</p>
 */
export interface PipelineExecutionStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   */
  Model?: ModelStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.</p>
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * @public
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   */
  Condition?: ConditionStepMetadata;

  /**
   * @public
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   */
  Callback?: CallbackStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   */
  Lambda?: LambdaStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The Boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  QualityCheck?: QualityCheckStepMetadata;

  /**
   * @public
   * <p>Container for the metadata for a Clarify check step. The configurations
   *          and outcomes of the check step execution. This includes: </p>
   *          <ul>
   *             <li>
   *                <p>The type of the check conducted,</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p>
   *             </li>
   *             <li>
   *                <p>The model package group name provided.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon S3 URI of the violation report if violations detected.</p>
   *             </li>
   *             <li>
   *                <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p>
   *             </li>
   *             <li>
   *                <p>The boolean flags indicating if the drift check is skipped.</p>
   *             </li>
   *             <li>
   *                <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as
   *             <code>CalculatedBaseline</code>.</p>
   *             </li>
   *          </ul>
   */
  ClarifyCheck?: ClarifyCheckStepMetadata;

  /**
   * @public
   * <p>The configurations and outcomes of a Fail step execution.</p>
   */
  Fail?: FailStepMetadata;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AutoML job that was run by this step.</p>
   */
  AutoMLJob?: AutoMLJobStepMetadata;
}

/**
 * @public
 * <p>The ARN from an execution of the current pipeline.</p>
 */
export interface SelectiveExecutionResult {
  /**
   * @public
   * <p>The ARN from an execution of the current pipeline.</p>
   */
  SourcePipelineExecutionArn?: string;
}

/**
 * @public
 * @enum
 */
export const StepStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * <p>An execution of a step in a pipeline.</p>
 */
export interface PipelineExecutionStep {
  /**
   * @public
   * <p>The name of the step that is executed.</p>
   */
  StepName?: string;

  /**
   * @public
   * <p>The display name of the step.</p>
   */
  StepDisplayName?: string;

  /**
   * @public
   * <p>The description of the step.</p>
   */
  StepDescription?: string;

  /**
   * @public
   * <p>The time that the step started executing.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time that the step stopped executing.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The status of the step execution.</p>
   */
  StepStatus?: StepStatus;

  /**
   * @public
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   */
  CacheHitResult?: CacheHitResult;

  /**
   * @public
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Metadata to run the pipeline step.</p>
   */
  Metadata?: PipelineExecutionStepMetadata;

  /**
   * @public
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   */
  AttemptCount?: number;

  /**
   * @public
   * <p>The ARN from an execution of the current pipeline from which
   *            results are reused for this step.</p>
   */
  SelectiveExecutionResult?: SelectiveExecutionResult;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsResponse {
  /**
   * @public
   * <p>A list of <code>PipeLineExecutionStep</code> objects. Each
   *             <code>PipeLineExecutionStep</code> consists of StepName, StartTime, EndTime, StepStatus,
   *          and Metadata. Metadata is an object with properties for each job that contains relevant
   *          information about the job created by the step.</p>
   */
  PipelineExecutionSteps?: PipelineExecutionStep[];

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of parameters to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Assigns a value to a named Pipeline parameter.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>The name of the parameter to assign a value to. This
   *          parameter name must match a named parameter in the
   *          pipeline definition.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The literal value for the parameter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionResponse {
  /**
   * @public
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortPipelinesBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortPipelinesBy = (typeof SortPipelinesBy)[keyof typeof SortPipelinesBy];

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * @public
   * <p>The prefix of the pipeline name.</p>
   */
  PipelineNamePrefix?: string;

  /**
   * @public
   * <p>A filter that returns the pipelines that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the pipelines that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelinesBy;

  /**
   * @public
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipelines to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * @public
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * @public
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The last time that a pipeline execution began.</p>
   */
  LastExecutionTime?: Date;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * @public
   * <p>Contains a sorted list of <code>PipelineSummary</code> objects matching the specified
   *          filters. Each <code>PipelineSummary</code> consists of PipelineArn, PipelineName,
   *          ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and
   *          RoleArn. This list can be empty. </p>
   */
  PipelineSummaries?: PipelineSummary[];

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProcessingJobsRequest {
  /**
   * @public
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   */
  StatusEquals?: ProcessingJobStatus;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of processing
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of processing jobs to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary of information about a processing job.</p>
 */
export interface ProcessingJobSummary {
  /**
   * @public
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * @public
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * @public
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;
}

/**
 * @public
 */
export interface ListProcessingJobsResponse {
  /**
   * @public
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ProjectSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ProjectSortBy = (typeof ProjectSortBy)[keyof typeof ProjectSortBy];

/**
 * @public
 * @enum
 */
export const ProjectSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ProjectSortOrder = (typeof ProjectSortOrder)[keyof typeof ProjectSortOrder];

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * @public
   * <p>A filter that returns the projects that were created after a specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the projects that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of projects to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns the projects whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListProjects</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of projects, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ProjectSortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: ProjectSortOrder;
}

/**
 * @public
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * @public
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * @public
   * <p>The time that the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * @public
   * <p>A list of summaries of projects.</p>
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type ResourceCatalogSortBy = (typeof ResourceCatalogSortBy)[keyof typeof ResourceCatalogSortBy];

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ResourceCatalogSortOrder = (typeof ResourceCatalogSortOrder)[keyof typeof ResourceCatalogSortOrder];

/**
 * @public
 */
export interface ListResourceCatalogsRequest {
  /**
   * @public
   * <p> A string that partially matches one or more <code>ResourceCatalog</code>s names.
   *             Filters <code>ResourceCatalog</code> by name. </p>
   */
  NameContains?: string;

  /**
   * @public
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created after a
   *             specific date and time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created before a
   *             specific date and time. </p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p> The order in which the resource catalogs are listed. </p>
   */
  SortOrder?: ResourceCatalogSortOrder;

  /**
   * @public
   * <p> The value on which the resource catalog list is sorted. </p>
   */
  SortBy?: ResourceCatalogSortBy;

  /**
   * @public
   * <p> The maximum number of results returned by <code>ListResourceCatalogs</code>. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> A resource catalog containing all of the resources of a specific resource type within
 *             a resource owner account. For an example on sharing the Amazon SageMaker Feature Store
 *                 <code>DefaultFeatureGroupCatalog</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/feature-store-cross-account-discoverability-share-sagemaker-catalog.html">Share Amazon SageMaker Catalog resource type</a> in the Amazon SageMaker Developer Guide.
 *         </p>
 */
export interface ResourceCatalog {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the <code>ResourceCatalog</code>. </p>
   */
  ResourceCatalogArn: string | undefined;

  /**
   * @public
   * <p> The name of the <code>ResourceCatalog</code>. </p>
   */
  ResourceCatalogName: string | undefined;

  /**
   * @public
   * <p> A free form description of the <code>ResourceCatalog</code>. </p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p> The time the <code>ResourceCatalog</code> was created. </p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceCatalogsResponse {
  /**
   * @public
   * <p> A list of the requested <code>ResourceCatalog</code>s. </p>
   */
  ResourceCatalogs?: ResourceCatalog[];

  /**
   * @public
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SpaceSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
} as const;

/**
 * @public
 */
export type SpaceSortKey = (typeof SpaceSortKey)[keyof typeof SpaceSortKey];

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token. Use it in your
   *             next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the response. If the total number of items
   *             available is more than the value specified, a <code>NextToken</code> is provided in the
   *             response. To resume pagination, provide the <code>NextToken</code> value in the as part
   *             of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: SpaceSortKey;

  /**
   * @public
   * <p>A parameter to search for the Domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * @public
   * <p>A parameter by which to filter the results.</p>
   */
  SpaceNameContains?: string;
}

/**
 * @public
 * <p>Specifies summary information about the ownership settings.</p>
 */
export interface OwnershipSettingsSummary {
  /**
   * @public
   * <p>The user profile who is the owner of the private space.</p>
   */
  OwnerUserProfileName?: string;
}

/**
 * @public
 * <p>Specifies summary information about the space settings.</p>
 */
export interface SpaceSettingsSummary {
  /**
   * @public
   * <p>The type of app created within the space.</p>
   */
  AppType?: AppType;

  /**
   * @public
   * <p>The storage settings for a private space.</p>
   */
  SpaceStorageSettings?: SpaceStorageSettings;
}

/**
 * @public
 * <p>Specifies summary information about the space sharing settings.</p>
 */
export interface SpaceSharingSettingsSummary {
  /**
   * @public
   * <p>Specifies the sharing type of the space.</p>
   */
  SharingType?: SharingType;
}

/**
 * @public
 * <p>The space's details.</p>
 */
export interface SpaceDetails {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: SpaceStatus;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Specifies summary information about the space settings.</p>
   */
  SpaceSettingsSummary?: SpaceSettingsSummary;

  /**
   * @public
   * <p>Specifies summary information about the space sharing settings.</p>
   */
  SpaceSharingSettingsSummary?: SpaceSharingSettingsSummary;

  /**
   * @public
   * <p>Specifies summary information about the ownership settings.</p>
   */
  OwnershipSettingsSummary?: OwnershipSettingsSummary;

  /**
   * @public
   * <p>The name of the space that appears in the Studio UI.</p>
   */
  SpaceDisplayName?: string;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * @public
   * <p>The list of spaces.</p>
   */
  Spaces?: SpaceDetails[];

  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token. Use it in your
   *             next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStageDevicesRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to neeed
   *             tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of requests to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>Toggle for excluding devices deployed in other stages.</p>
   */
  ExcludeDevicesDeployedInOtherStage?: boolean;

  /**
   * @public
   * <p>The name of the stage in the deployment.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface ListStageDevicesResponse {
  /**
   * @public
   * <p>List of summaries of devices allocated to the stage.</p>
   */
  DeviceDeploymentSummaries: DeviceDeploymentSummary[] | undefined;

  /**
   * @public
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const StudioLifecycleConfigSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type StudioLifecycleConfigSortKey =
  (typeof StudioLifecycleConfigSortKey)[keyof typeof StudioLifecycleConfigSortKey];

/**
 * @public
 */
export interface ListStudioLifecycleConfigsRequest {
  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *             number of items available is more than the value specified, a <code>NextToken</code>
   *             is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *             value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A parameter to search for the App Type to which the Lifecycle Configuration is attached.</p>
   */
  AppTypeEquals?: StudioLifecycleConfigAppType;

  /**
   * @public
   * <p>A filter that returns only Lifecycle Configurations created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only Lifecycle Configurations created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only Lifecycle Configurations modified before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only Lifecycle Configurations modified after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is CreationTime.</p>
   */
  SortBy?: StudioLifecycleConfigSortKey;

  /**
   * @public
   * <p>The sort order. The default value is Descending.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Details of the Amazon SageMaker Studio Lifecycle Configuration.</p>
 */
export interface StudioLifecycleConfigDetails {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * @public
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * @public
   * <p>The creation time of the Amazon SageMaker Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>This value is equivalent to CreationTime because Amazon SageMaker Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The App type to which the Lifecycle Configuration is attached.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType;
}

/**
 * @public
 */
export interface ListStudioLifecycleConfigsResponse {
  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *             Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of Lifecycle Configurations and their properties.</p>
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsRequest {
  /**
   * @public
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsResponse {
  /**
   * @public
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             retrieve.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p> If the response to the previous <code>ListTags</code> request is truncated, SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of tags to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * @public
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p> If response is truncated, SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrainingJobsRequest {
  /**
   * @public
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   */
  StatusEquals?: TrainingJobStatus;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A filter that retrieves only training jobs with a specific warm pool status.</p>
   */
  WarmPoolStatusEquals?: WarmPoolResourceStatus;
}

/**
 * @public
 * <p>Provides summary information about a training job.</p>
 */
export interface TrainingJobSummary {
  /**
   * @public
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * @public
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * @public
   * <p>The status of the warm pool associated with the training job.</p>
   */
  WarmPoolStatus?: WarmPoolStatus;
}

/**
 * @public
 */
export interface ListTrainingJobsResponse {
  /**
   * @public
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TrainingJobSortByOptions = {
  CreationTime: "CreationTime",
  FinalObjectiveMetricValue: "FinalObjectiveMetricValue",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type TrainingJobSortByOptions = (typeof TrainingJobSortByOptions)[keyof typeof TrainingJobSortByOptions];

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * @public
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only training jobs with the specified status.</p>
   */
  StatusEquals?: TrainingJobStatus;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   *          <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that
   *             describe
   *             the training jobs that the
   *                 <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * @public
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request
   *             was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *             of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTransformJobsRequest {
  /**
   * @public
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?: TransformJobStatus;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of transform
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTransformJobs.html">ListTransformJobs</a> call.</p>
 */
export interface TransformJobSummary {
  /**
   * @public
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Indicates when the transform
   *             job
   *             ends on compute instances. For successful jobs and stopped jobs, this
   *             is the exact time
   *             recorded
   *             after the results are uploaded. For failed jobs, this is when Amazon SageMaker
   *             detected that the job failed.</p>
   */
  TransformEndTime?: Date;

  /**
   * @public
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * @public
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface ListTransformJobsResponse {
  /**
   * @public
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortTrialComponentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortTrialComponentsBy = (typeof SortTrialComponentsBy)[keyof typeof SortTrialComponentsBy];

/**
 * @public
 */
export interface ListTrialComponentsRequest {
  /**
   * @public
   * <p>A filter that returns only components that are part of the specified experiment. If you
   *       specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or
   *         <code>TrialName</code>.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>A filter that returns only components that are part of the specified trial. If you specify
   *         <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or
   *         <code>SourceArn</code>.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>A filter that returns only components that have the specified source Amazon Resource Name (ARN).
   *       If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
   *       or <code>TrialName</code>.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>A filter that returns only components created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only components created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialComponentsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of components to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A summary of the properties of a trial component. To get all the properties, call the
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 */
export interface TrialComponentSummary {
  /**
   * @public
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * @public
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * @public
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * @public
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface ListTrialComponentsResponse {
  /**
   * @public
   * <p>A list of the summaries of your trial components.</p>
   */
  TrialComponentSummaries?: TrialComponentSummary[];

  /**
   * @public
   * <p>A token for getting the next set of components, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortTrialsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortTrialsBy = (typeof SortTrialsBy)[keyof typeof SortTrialsBy];

/**
 * @public
 */
export interface ListTrialsRequest {
  /**
   * @public
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>A filter that returns only trials that are associated with the specified trial
   *       component.</p>
   */
  TrialComponentName?: string;

  /**
   * @public
   * <p>A filter that returns only trials created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only trials created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the
   *       call returns a token for getting the next set of trials.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 */
export interface TrialSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * @public
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The source of the trial.</p>
   */
  TrialSource?: TrialSource;

  /**
   * @public
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListTrialsResponse {
  /**
   * @public
   * <p>A list of the summaries of your trials.</p>
   */
  TrialSummaries?: TrialSummary[];

  /**
   * @public
   * <p>A token for getting the next set of trials, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const UserProfileSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
} as const;

/**
 * @public
 */
export type UserProfileSortKey = (typeof UserProfileSortKey)[keyof typeof UserProfileSortKey];

/**
 * @public
 */
export interface ListUserProfilesRequest {
  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *           number of items available is more than the value specified, a <code>NextToken</code>
   *           is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *           value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: UserProfileSortKey;

  /**
   * @public
   * <p>A parameter by which to filter the results.</p>
   */
  DomainIdEquals?: string;

  /**
   * @public
   * <p>A parameter by which to filter the results.</p>
   */
  UserProfileNameContains?: string;
}

/**
 * @public
 * <p>The user profile details.</p>
 */
export interface UserProfileDetails {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * @public
   * <p>The status.</p>
   */
  Status?: UserProfileStatus;

  /**
   * @public
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListUserProfilesResponse {
  /**
   * @public
   * <p>The list of user profiles.</p>
   */
  UserProfiles?: UserProfileDetails[];

  /**
   * @public
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListWorkforcesSortByOptions = {
  CreateDate: "CreateDate",
  Name: "Name",
} as const;

/**
 * @public
 */
export type ListWorkforcesSortByOptions =
  (typeof ListWorkforcesSortByOptions)[keyof typeof ListWorkforcesSortByOptions];

/**
 * @public
 */
export interface ListWorkforcesRequest {
  /**
   * @public
   * <p>Sort workforces using the workforce name or creation date.</p>
   */
  SortBy?: ListWorkforcesSortByOptions;

  /**
   * @public
   * <p>Sort workforces in ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A filter you can use to search for workforces using part of the workforce name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of workforces returned in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkforcesResponse {
  /**
   * @public
   * <p>A list containing information about your workforce.</p>
   */
  Workforces: Workforce[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListWorkteamsSortByOptions = {
  CreateDate: "CreateDate",
  Name: "Name",
} as const;

/**
 * @public
 */
export type ListWorkteamsSortByOptions = (typeof ListWorkteamsSortByOptions)[keyof typeof ListWorkteamsSortByOptions];

/**
 * @public
 */
export interface ListWorkteamsRequest {
  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListWorkteamsSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A string in the work team's name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkteamsResponse {
  /**
   * @public
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  Workteams: Workteam[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The properties of a model as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 */
export interface Model {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>Describes the container, as part of model definition.</p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * @public
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * @public
   * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
   *             have access to. You can control access to and from your resources by configuring a VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>A list of key-value pairs associated with the model. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A set of recommended deployment configurations for the model.</p>
   */
  DeploymentRecommendation?: DeploymentRecommendation;
}

/**
 * @public
 * <p>An Amazon SageMaker Model Card.</p>
 */
export interface ModelCard {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn?: string;

  /**
   * @public
   * <p>The unique name of the model card.</p>
   */
  ModelCardName?: string;

  /**
   * @public
   * <p>The version of the model card.</p>
   */
  ModelCardVersion?: number;

  /**
   * @public
   * <p>The content of the model card. Content uses the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draft</code>: The model card is a work in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingReview</code>: The model card is pending review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approved</code>: The model card is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>: The model card is archived. No more updates should be made to the model
   *                card, but it can still be exported.</p>
   *             </li>
   *          </ul>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>The security configuration used to protect model card data.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * @public
   * <p>The date and time that the model card was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>The date and time that the model card was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>Key-value pairs used to manage metadata for the model card.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The unique name (ID) of the model.</p>
   */
  ModelId?: string;

  /**
   * @public
   * <p>The risk rating of the model. Different organizations might have different criteria for model card risk ratings. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-risk-rating.html">Risk ratings</a>.</p>
   */
  RiskRating?: string;

  /**
   * @public
   * <p>The model package group that contains the model package. Only relevant for model cards created for model packages in the Amazon SageMaker Model Registry.
   *       </p>
   */
  ModelPackageGroupName?: string;
}

/**
 * @public
 * <p>An endpoint that hosts a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardEndpoint {
  /**
   * @public
   * <p>The endpoint name.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The endpoint status.</p>
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * @public
 * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
 *         Transform</a>.</p>
 */
export interface TransformJob {
  /**
   * @public
   * <p>The name of the transform job.</p>
   */
  TransformJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn?: string;

  /**
   * @public
   * <p>The status of the transform job.</p>
   *          <p>Transform job statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The job is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The transform job has failed. To see the reason for the failure,
   *           see the <code>FailureReason</code> field in the response to a
   *             <code>DescribeTransformJob</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The transform job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The transform job has stopped.</p>
   *             </li>
   *          </ul>
   */
  TransformJobStatus?: TransformJobStatus;

  /**
   * @public
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The name of the model associated with the transform job.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * @public
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * @public
   * <p>The maximum allowed size of the payload, in MB. A payload is the data portion of a record
   *       (without metadata). The value in <code>MaxPayloadInMB</code> must be greater than, or equal
   *       to, the size of a single record. To estimate the size of a record in MB, divide the size of
   *       your dataset by the number of records. To ensure that the records fit within the maximum
   *       payload size, we recommend using a slightly larger value. The default value is 6 MB. For cases
   *       where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding,
   *       set the value to 0. This feature works only in supported algorithms. Currently, SageMaker built-in
   *       algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * @public
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   */
  BatchStrategy?: BatchStrategy;

  /**
   * @public
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   */
  TransformInput?: TransformInput;

  /**
   * @public
   * <p>Describes the results of a transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data for batch transform jobs.</p>
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * @public
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   */
  TransformResources?: TransformResources;

  /**
   * @public
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * @public
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   */
  LabelingJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * @public
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * @public
   * <p>A list of tags associated with the transform job.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The model card for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardModelCard {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a model card.</p>
   */
  ModelCardArn?: string;

  /**
   * @public
   * <p>The name of a model card.</p>
   */
  ModelCardName?: string;

  /**
   * @public
   * <p>The model card version.</p>
   */
  ModelCardVersion?: number;

  /**
   * @public
   * <p>The model card status.</p>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>The KMS Key ID (<code>KMSKeyId</code>) for encryption of model card information.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * @public
   * <p>A timestamp that indicates when the model card was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>A timestamp that indicates when the model card was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The tags associated with a model card.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>For models created in SageMaker, this is the model ARN. For models created
   *          outside of SageMaker, this is a user-customized string.</p>
   */
  ModelId?: string;

  /**
   * @public
   * <p>A model card's risk rating. Can be low, medium, or high.</p>
   */
  RiskRating?: string;
}

/**
 * @public
 * <p>A monitoring schedule for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardMonitoringSchedule {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus?: ScheduleStatus;

  /**
   * @public
   * <p>The monitor type of a model monitor.</p>
   */
  MonitoringType?: MonitoringType;

  /**
   * @public
   * <p>If a monitoring job failed, provides the reason.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A timestamp that indicates when the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the monitoring schedule was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * @public
   * <p>The endpoint which is monitored.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * @public
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * @public
   * <p>Input object for the batch transform job.</p>
   */
  BatchTransformInput?: BatchTransformInput;
}

/**
 * @public
 * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardModel {
  /**
   * @public
   * <p>A model displayed in the Model Dashboard.</p>
   */
  Model?: Model;

  /**
   * @public
   * <p>The endpoints that host a model.</p>
   */
  Endpoints?: ModelDashboardEndpoint[];

  /**
   * @public
   * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
   *         Transform</a>.</p>
   */
  LastBatchTransformJob?: TransformJob;

  /**
   * @public
   * <p>The monitoring schedules for a model.</p>
   */
  MonitoringSchedules?: ModelDashboardMonitoringSchedule[];

  /**
   * @public
   * <p>The model card for a model.</p>
   */
  ModelCard?: ModelDashboardModelCard;
}

/**
 * @public
 * <p>A versioned model that can be deployed for SageMaker inference.</p>
 */
export interface ModelPackage {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelPackageName?: string;

  /**
   * @public
   * <p>The model group to which the model belongs.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>The version number of a versioned model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn?: string;

  /**
   * @public
   * <p>The description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * @public
   * <p>The time that the model package was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Defines how to perform inference generation after a training job is run.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * @public
   * <p>A list of algorithms that were used to create a model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * @public
   * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * @public
   * <p>The status of the model package. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The model package is pending being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The model package is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The model package was successfully created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The model package failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The model package is in the process of being deleted.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageStatus?: ModelPackageStatus;

  /**
   * @public
   * <p>Specifies the validation and image scan statuses of the model package.</p>
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;

  /**
   * @public
   * <p>Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For
   *             information about listing model packages on Amazon Web Services Marketplace, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html">List Your
   *                 Algorithm or Model Package on Amazon Web Services Marketplace</a>.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * @public
   * <p>The approval status of the model. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * @public
   * <p>The last time the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>A description provided when the model approval is set.</p>
   */
  ApprovalDescription?: string;

  /**
   * @public
   * <p>The machine learning domain of your model package and its components. Common
   *             machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The machine learning task your model package accomplishes. Common machine
   *             learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * @public
   * <p>The Amazon Simple Storage Service path where the sample payload are stored. This path must point to
   *            a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>An array of additional Inference Specification objects.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * @public
   * <p>A list of the tags associated with the model package. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The metadata properties for the model package. </p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * @public
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.</p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * @public
   * <p>Indicates if you want to skip model validation.</p>
   */
  SkipModelValidation?: SkipModelValidation;
}

/**
 * @public
 * <p>A group of versioned models in the model registry.</p>
 */
export interface ModelPackageGroup {
  /**
   * @public
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn?: string;

  /**
   * @public
   * <p>The description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * @public
   * <p>The time that the model group was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>The status of the model group. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The model group is pending being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The model group is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The model group was successfully created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The model group failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The model group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> - SageMaker failed to delete the model group.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus;

  /**
   * @public
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ModelVariantAction = {
  PROMOTE: "Promote",
  REMOVE: "Remove",
  RETAIN: "Retain",
} as const;

/**
 * @public
 */
export type ModelVariantAction = (typeof ModelVariantAction)[keyof typeof ModelVariantAction];

/**
 * @public
 * <p>A list of nested <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Filter.html">Filter</a> objects. A resource must satisfy the conditions
 *       of all filters to be included in the results returned from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 *          <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a
 *       specific channel name and <code>S3Uri</code> prefix, define the following filters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>'\{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"\}',</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>'\{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains",
 *             "Value":"mybucket/catdata"\}'</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface NestedFilters {
  /**
   * @public
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;

  /**
   * @public
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;
}

/**
 * @public
 * <p>Updates the feature group online store configuration.</p>
 */
export interface OnlineStoreConfigUpdate {
  /**
   * @public
   * <p>Time to live duration, where the record is hard deleted after the expiration time is
   *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
   *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
   */
  TtlDuration?: TtlDuration;
}

/**
 * @public
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be associated with
 *       multiple trials.</p>
 */
export interface Parent {
  /**
   * @public
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;
}

/**
 * @public
 * <p>A SageMaker Model Building Pipeline instance.</p>
 */
export interface Pipeline {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * @public
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * @public
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that created the pipeline.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The status of the pipeline.</p>
   */
  PipelineStatus?: PipelineStatus;

  /**
   * @public
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * @public
   * <p>A list of tags that apply to the pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>An execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline that was executed.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * @public
   * <p>The status of the pipeline status.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus;

  /**
   * @public
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * @public
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * @public
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The creation time of the pipeline execution.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that the pipeline execution was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The parallelism configuration applied to the pipeline execution.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * @public
   * <p>The selective execution configuration applied to the pipeline run.</p>
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;

  /**
   * @public
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];
}

/**
 * @public
 * <p>An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process
 *                 Data and Evaluate Models</a>.</p>
 */
export interface ProcessingJob {
  /**
   * @public
   * <p>List of input configurations for the processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * @public
   * <p>Configuration for uploading output from the processing container.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * @public
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName?: string;

  /**
   * @public
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources?: ProcessingResources;

  /**
   * @public
   * <p>Configures conditions under which the processing job should be stopped, such as how long
   *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * @public
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * @public
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * @public
   * <p>The ARN of the role used to create the processing job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * @public
   * <p>The ARN of the processing job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * @public
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus?: ProcessingJobStatus;

  /**
   * @public
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * @public
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The time that the processing job ended.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * @public
   * <p>The time that the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * @public
   * <p>The time the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The time the processing job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>The ARN of the training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * @public
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Configuration information for updating the Amazon SageMaker Debugger profile parameters, system and framework metrics configurations, and
 *             storage paths.</p>
 */
export interface ProfilerConfigForUpdate {
  /**
   * @public
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath?: string;

  /**
   * @public
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * @public
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * @public
   * <p>To turn off Amazon SageMaker Debugger monitoring and profiling while a training job is in progress, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
}

/**
 * @public
 * <p>The properties of a project as returned by the Search API.</p>
 */
export interface Project {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>The ID of the project.</p>
   */
  ProjectId?: string;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * @public
   * <p>Details that you specify to provision a service catalog product. For information about
   *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;

  /**
   * @public
   * <p>Details of a provisioned service catalog product. For information about service catalog,
   *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * @public
   * <p>The status of the project.</p>
   */
  ProjectStatus?: ProjectStatus;

  /**
   * @public
   * <p>Who created the project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>A timestamp specifying when the project was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A timestamp container for when the project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface PutModelPackageGroupPolicyInput {
  /**
   * @public
   * <p>The name of the model group to add a resource policy to.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * @public
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutModelPackageGroupPolicyOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

/**
 * @public
 * <p>A set of filters to narrow the set of lineage entities connected to the <code>StartArn</code>(s) returned by the
 *          <code>QueryLineage</code> API action.</p>
 */
export interface QueryFilters {
  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code> by type. For example: <code>DataSet</code>,
   *          <code>Model</code>, <code>Endpoint</code>, or <code>ModelDeployment</code>.</p>
   */
  Types?: string[];

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by the type of the lineage entity.</p>
   */
  LineageTypes?: LineageType[];

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by created date.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the create date.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) before the last modified date.</p>
   */
  ModifiedBefore?: Date;

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the last modified date.</p>
   */
  ModifiedAfter?: Date;

  /**
   * @public
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by a set if property key value pairs.
   *          If multiple pairs are provided, an entity is included in the results if it matches any of the provided pairs.</p>
   */
  Properties?: Record<string, string>;
}

/**
 * @public
 */
export interface QueryLineageRequest {
  /**
   * @public
   * <p>A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query.</p>
   */
  StartArns?: string[];

  /**
   * @public
   * <p>Associations between lineage entities have a direction.  This parameter determines the direction from the
   *          StartArn(s) that the query traverses.</p>
   */
  Direction?: Direction;

  /**
   * @public
   * <p> Setting this value to <code>True</code> retrieves not only the entities of interest but also the
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking-entities.html">Associations</a> and
   *          lineage entities on the path. Set to <code>False</code> to only return lineage entities that match your query.</p>
   */
  IncludeEdges?: boolean;

  /**
   * @public
   * <p>A set of filtering parameters that allow you to specify which entities should be returned.</p>
   *          <ul>
   *             <li>
   *                <p>Properties - Key-value pairs to match on the lineage entities' properties.</p>
   *             </li>
   *             <li>
   *                <p>LineageTypes - A set of lineage entity types to match on. For example: <code>TrialComponent</code>,
   *             <code>Artifact</code>, or <code>Context</code>.</p>
   *             </li>
   *             <li>
   *                <p>CreatedBefore - Filter entities created before this date.</p>
   *             </li>
   *             <li>
   *                <p>ModifiedBefore - Filter entities modified before this date.</p>
   *             </li>
   *             <li>
   *                <p>ModifiedAfter - Filter entities modified after this date.</p>
   *             </li>
   *          </ul>
   */
  Filters?: QueryFilters;

  /**
   * @public
   * <p>The maximum depth in lineage relationships from the <code>StartArns</code> that are traversed. Depth is a measure of the number
   *          of <code>Associations</code> from the <code>StartArn</code> entity to the matched results.</p>
   */
  MaxDepth?: number;

  /**
   * @public
   * <p>Limits the number of vertices in the results. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Limits the number of vertices in the request. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A lineage entity connected to the starting entity(ies).</p>
 */
export interface Vertex {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage entity resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The type of the lineage entity resource. For example: <code>DataSet</code>, <code>Model</code>, <code>Endpoint</code>,
   *          etc...</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The type of resource of the lineage entity.</p>
   */
  LineageType?: LineageType;
}

/**
 * @public
 */
export interface QueryLineageResponse {
  /**
   * @public
   * <p>A list of vertices connected to the start entity(ies) in the lineage graph.</p>
   */
  Vertices?: Vertex[];

  /**
   * @public
   * <p>A list of edges that connect vertices in the response.</p>
   */
  Edges?: Edge[];

  /**
   * @public
   * <p>Limits the number of vertices in the response. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RegisterDevicesRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>A list of devices to register with SageMaker Edge Manager.</p>
   */
  Devices: Device[] | undefined;

  /**
   * @public
   * <p>The tags associated with devices.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Configuration for remote debugging for the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateTrainingJob.html">UpdateTrainingJob</a> API. To learn more about the remote
 *             debugging functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container through Amazon Web Services Systems Manager (SSM)
 *                 for remote debugging</a>.</p>
 */
export interface RemoteDebugConfigForUpdate {
  /**
   * @public
   * <p>If set to True, enables remote debugging.</p>
   */
  EnableRemoteDebug?: boolean;
}

/**
 * @public
 * <p>Contains input values for a task.</p>
 */
export interface RenderableTask {
  /**
   * @public
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string | undefined;
}

/**
 * @public
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface RenderingError {
  /**
   * @public
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface RenderUiTemplateRequest {
  /**
   * @public
   * <p>A <code>Template</code> object containing the worker UI template to render.</p>
   */
  UiTemplate?: UiTemplate;

  /**
   * @public
   * <p>A <code>RenderableTask</code> object containing a representative task to
   *             render.</p>
   */
  Task: RenderableTask | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the
   *             template.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The <code>HumanTaskUiArn</code> of the worker UI that you want to render. Do not
   *             provide a <code>HumanTaskUiArn</code> if you use the <code>UiTemplate</code>
   *             parameter.</p>
   *          <p>See a list of available Human Ui Amazon Resource Names (ARNs) in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UiConfig.html">UiConfig</a>.</p>
   */
  HumanTaskUiArn?: string;
}

/**
 * @public
 */
export interface RenderUiTemplateResponse {
  /**
   * @public
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   */
  RenderedContent: string | undefined;

  /**
   * @public
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered
   *             while rendering the template. If there were no errors, the list is empty.</p>
   */
  Errors: RenderingError[] | undefined;
}

/**
 * @public
 * <p>The <code>ResourceConfig</code> to update <code>KeepAlivePeriodInSeconds</code>. Other
 *             fields in the <code>ResourceConfig</code> cannot be updated.</p>
 */
export interface ResourceConfigForUpdate {
  /**
   * @public
   * <p>The <code>KeepAlivePeriodInSeconds</code> value specified in the
   *                 <code>ResourceConfig</code> to update.</p>
   */
  KeepAlivePeriodInSeconds: number | undefined;
}

/**
 * @public
 */
export interface RetryPipelineExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface RetryPipelineExecutionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 * @enum
 */
export const SearchSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SearchSortOrder = (typeof SearchSortOrder)[keyof typeof SearchSortOrder];

/**
 * @public
 * <p>The list of key-value pairs that you specify for your resources.</p>
 */
export interface VisibilityConditions {
  /**
   * @public
   * <p>The key for that specifies the tag that you're using to filter the search results. The key must start with <code>Tags.</code>.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value for the tag that you're using to filter the search results.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains information about a training job.</p>
 */
export interface TrainingJob {
  /**
   * @public
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * @public
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * @public
   * <p>The status of the
   *             training
   *             job.</p>
   *          <p>Training job statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *          <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus;

  /**
   * @public
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html">SecondaryStatusTransition</a>.</p>
   *          <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *          <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *          </important>
   *          <p>We no longer support the following secondary statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LaunchingMLInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreparingTrainingStack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DownloadingTrainingImage</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus?: SecondaryStatus;

  /**
   * @public
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * @public
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the
   *             training job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   *          <p>Your input must be in the same Amazon Web Services region as your training job.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * @public
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * @public
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * @public
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * @public
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * @public
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * @public
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * @public
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * @public
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * @public
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * @public
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * @public
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * @public
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * @public
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * @public
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * @public
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * @public
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * @public
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A short summary of a trial component.</p>
 */
export interface TrialComponentSimpleSummary {
  /**
   * @public
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * @public
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;
}

/**
 * @public
 * <p>The properties of a trial as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 */
export interface Trial {
  /**
   * @public
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * @public
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * @public
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>The list of tags that are associated with the trial. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
   *       API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

/**
 * @public
 * <p>Detailed information about the source of a trial component. Either
 *         <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.</p>
 */
export interface TrialComponentSourceDetail {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>Information about a training job that's the source of a trial component.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * @public
   * <p>Information about a processing job that's the source of a trial component.</p>
   */
  ProcessingJob?: ProcessingJob;

  /**
   * @public
   * <p>Information about a transform job that's the source of a trial component.</p>
   */
  TransformJob?: TransformJob;
}

/**
 * @public
 * <p>The properties of a trial component as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
 *       API.</p>
 */
export interface TrialComponent {
  /**
   * @public
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * @public
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * @public
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * @public
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * @public
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * @public
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * @public
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * @public
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The list of tags that are associated with the component. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];

  /**
   * @public
   * <p>The name of the experiment run.</p>
   */
  RunName?: string;
}

/**
 * @public
 * <p>A single resource returned as part of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API response.</p>
 */
export interface SearchRecord {
  /**
   * @public
   * <p>The properties of a training job.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * @public
   * <p>The properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * @public
   * <p>The properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * @public
   * <p>The properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;

  /**
   * @public
   * <p>A hosted endpoint for real-time inference.</p>
   */
  Endpoint?: Endpoint;

  /**
   * @public
   * <p>A versioned model that can be deployed for SageMaker inference.</p>
   */
  ModelPackage?: ModelPackage;

  /**
   * @public
   * <p>A group of versioned models in the model registry.</p>
   */
  ModelPackageGroup?: ModelPackageGroup;

  /**
   * @public
   * <p>A SageMaker Model Building Pipeline instance.</p>
   */
  Pipeline?: Pipeline;

  /**
   * @public
   * <p>An execution of a pipeline.</p>
   */
  PipelineExecution?: PipelineExecution;

  /**
   * @public
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
   *          Feature Group can be visualized as a table which has rows, with a unique identifier for
   *          each row where each column in the table is a feature. In principle, a Feature Group is
   *          composed of features and values per features.</p>
   */
  FeatureGroup?: FeatureGroup;

  /**
   * @public
   * <p>The feature metadata used to search through the features.</p>
   */
  FeatureMetadata?: FeatureMetadata;

  /**
   * @public
   * <p>The properties of a project.</p>
   */
  Project?: Project;

  /**
   * @public
   * <p>The properties of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;

  /**
   * @public
   * <p>An Amazon SageMaker Model Card that documents details about a machine learning model.</p>
   */
  ModelCard?: ModelCard;

  /**
   * @public
   * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
   */
  Model?: ModelDashboardModel;
}

/**
 * @public
 */
export interface SearchResponse {
  /**
   * @public
   * <p>A list of <code>SearchRecord</code> objects.</p>
   */
  Results?: SearchRecord[];

  /**
   * @public
   * <p>If the result of the previous <code>Search</code> request was truncated, the response
   *       includes a NextToken. To retrieve the next set of results, use the token in the next
   *       request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureRequest {
  /**
   * @public
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * @public
   * <p>A message describing why the step failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessRequest {
  /**
   * @public
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * @public
   * <p>A list of the output parameters of the callback step.</p>
   */
  OutputParameters?: OutputParameter[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StartEdgeDeploymentStageRequest {
  /**
   * @public
   * <p>The name of the edge deployment plan to start.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>The name of the stage to start.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentRequest {
  /**
   * @public
   * <p>The name of the inference experiment to start.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN of the started inference experiment to start.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringScheduleRequest {
  /**
   * @public
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * @public
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * @public
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * @public
   * <p>The selective execution configuration applied to the pipeline run.</p>
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}

/**
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopAutoMLJobRequest {
  /**
   * @public
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface StopCompilationJobRequest {
  /**
   * @public
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgeDeploymentStageRequest {
  /**
   * @public
   * <p>The name of the edge deployment plan to stop.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * @public
   * <p>The name of the stage to stop.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgePackagingJobRequest {
  /**
   * @public
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopHyperParameterTuningJobRequest {
  /**
   * @public
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceExperimentRequest {
  /**
   * @public
   * <p>The name of the inference experiment to stop.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *            Array of key-value pairs, with names of variants mapped to actions. The possible actions are the following:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Promote</code> - Promote the shadow variant to a production variant</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Remove</code> - Delete the variant</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retain</code> - Keep the variant as it is</p>
   *             </li>
   *          </ul>
   */
  ModelVariantActions: Record<string, ModelVariantAction> | undefined;

  /**
   * @public
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant that you want to deploy
   *            after the inference experiment stops. Each <code>ModelVariantConfig</code> describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   */
  DesiredModelVariants?: ModelVariantConfig[];

  /**
   * @public
   * <p>
   *            The desired state of the experiment after stopping. The possible states are the following:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The experiment completed successfully</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelled</code>: The experiment was canceled</p>
   *             </li>
   *          </ul>
   */
  DesiredState?: InferenceExperimentStopDesiredState;

  /**
   * @public
   * <p>The reason for stopping the experiment.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface StopInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN of the stopped inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceRecommendationsJobRequest {
  /**
   * @public
   * <p>The name of the job you want to stop.</p>
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface StopLabelingJobRequest {
  /**
   * @public
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopMonitoringScheduleRequest {
  /**
   * @public
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StopNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StopPipelineExecutionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopProcessingJobRequest {
  /**
   * @public
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingJobRequest {
  /**
   * @public
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTransformJobRequest {
  /**
   * @public
   * <p>The name of the batch transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionRequest {
  /**
   * @public
   * <p>The name of the action to update.</p>
   */
  ActionName: string | undefined;

  /**
   * @public
   * <p>The new description for the action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new status for the action.</p>
   */
  Status?: ActionStatus;

  /**
   * @public
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateActionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

/**
 * @public
 */
export interface UpdateAppImageConfigRequest {
  /**
   * @public
   * <p>The name of the AppImageConfig to update.</p>
   */
  AppImageConfigName: string | undefined;

  /**
   * @public
   * <p>The new KernelGateway app to run on the image.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;

  /**
   * @public
   * <p>The JupyterLab app running on the image.</p>
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;
}

/**
 * @public
 */
export interface UpdateAppImageConfigResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

/**
 * @public
 */
export interface UpdateArtifactRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact to update.</p>
   */
  ArtifactArn: string | undefined;

  /**
   * @public
   * <p>The new name for the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * @public
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateArtifactResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * @public
   * <p>Specify the name of the SageMaker HyperPod cluster you want to update.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>Specify the instance groups to update.</p>
   */
  InstanceGroups: ClusterInstanceGroupSpecification[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated SageMaker HyperPod cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryInput {
  /**
   * @public
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * @public
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   */
  GitConfig?: GitConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryOutput {
  /**
   * @public
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateContextRequest {
  /**
   * @public
   * <p>The name of the context to update.</p>
   */
  ContextName: string | undefined;

  /**
   * @public
   * <p>The new description for the context.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateContextResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

/**
 * @public
 */
export interface UpdateDeviceFleetRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Output configuration  for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * @public
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *       The name of the role alias generated will match this pattern:
   *       "SageMakerEdge-\{DeviceFleetName\}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

/**
 * @public
 */
export interface UpdateDevicesRequest {
  /**
   * @public
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>List of devices to register with Edge Manager agent.</p>
   */
  Devices: Device[] | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * @public
   * <p>The ID of the domain to be updated.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>A collection of settings.</p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * @public
   * <p>A collection of <code>DomainSettings</code> configuration values to update.</p>
   */
  DomainSettingsForUpdate?: DomainSettingsForUpdate;

  /**
   * @public
   * <p>The entity that creates and manages the required security groups for inter-app
   *       communication in <code>VPCOnly</code> mode. Required when
   *       <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *       <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *       provided. If setting up the domain for use with RStudio, this value must be set to
   *       <code>Service</code>.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement;

  /**
   * @public
   * <p>The default settings used to create a space within the Domain.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;

  /**
   * @public
   * <p>The VPC subnets that Studio uses for communication.</p>
   *          <p>If removing subnets, ensure there are no apps in the <code>InService</code>,
   *       <code>Pending</code>, or <code>Deleting</code> state.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Specifies the VPC used for non-EFS traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *           Amazon SageMaker, which allows direct internet access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and
   *           subnets.</p>
   *             </li>
   *          </ul>
   *          <p>This configuration can only be modified if there are no apps in the
   *       <code>InService</code>, <code>Pending</code>, or <code>Deleting</code> state. The
   *       configuration cannot be updated if
   *       <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is already
   *       set or <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *       provided as part of the same request.</p>
   */
  AppNetworkAccessType?: AppNetworkAccessType;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

/**
 * @public
 * @enum
 */
export const VariantPropertyType = {
  DataCaptureConfig: "DataCaptureConfig",
  DesiredInstanceCount: "DesiredInstanceCount",
  DesiredWeight: "DesiredWeight",
} as const;

/**
 * @public
 */
export type VariantPropertyType = (typeof VariantPropertyType)[keyof typeof VariantPropertyType];

/**
 * @public
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *          <p>If you are updating an endpoint with the <code>RetainAllVariantProperties</code>
 *             option of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> set to <code>true</code>, the
 *                 <code>VariantProperty</code> objects listed in the
 *                 <code>ExcludeRetainedVariantProperties</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> override the existing variant properties of the
 *             endpoint.</p>
 */
export interface VariantProperty {
  /**
   * @public
   * <p>The type of variant property. The supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <code>InitialInstanceCount</code> values in the
   *                         <code>ProductionVariants</code> of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <code>InitialVariantWeight</code> values in the
   *                         <code>ProductionVariants</code> of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointInput {
  /**
   * @public
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>When updating endpoint resources, enables or disables the retention of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">variant properties</a>, such as the instance count or the variant weight. To
   *             retain the variant properties of an endpoint when updating it, set
   *                 <code>RetainAllVariantProperties</code> to <code>true</code>. To use the variant
   *             properties specified in a new <code>EndpointConfig</code> call when updating an
   *             endpoint, set <code>RetainAllVariantProperties</code> to <code>false</code>. The default
   *             is <code>false</code>.</p>
   */
  RetainAllVariantProperties?: boolean;

  /**
   * @public
   * <p>When you are updating endpoint resources with <code>RetainAllVariantProperties</code>,
   *             whose value is set to <code>true</code>, <code>ExcludeRetainedVariantProperties</code>
   *             specifies the list of type <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">VariantProperty</a>
   *             to override with the values provided by <code>EndpointConfig</code>. If you don't
   *             specify a value for <code>ExcludeRetainedVariantProperties</code>, no variant properties
   *             are overridden. </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * @public
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * @public
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   */
  RetainDeploymentConfig?: boolean;
}

/**
 * @public
 */
export interface UpdateEndpointOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @public
   * <p>The name of an existing SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * @public
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;

  /**
   * @public
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The description of the experiment.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

/**
 * @public
 * <p>The new throughput configuration for the feature group. You can switch between on-demand
 *          and provisioned modes or update the read / write capacity of provisioned feature groups.
 *          You can switch a feature group to on-demand only once in a 24 hour period. </p>
 */
export interface ThroughputConfigUpdate {
  /**
   * @public
   * <p>Target throughput mode of the feature group. Throughput update is an asynchronous
   *          operation, and the outcome should be monitored by polling <code>LastUpdateStatus</code>
   *          field in <code>DescribeFeatureGroup</code> response. You cannot update a feature group's
   *          throughput while another update is in progress. </p>
   */
  ThroughputMode?: ThroughputMode;

  /**
   * @public
   * <p>For provisioned feature groups with online store enabled, this indicates the read
   *          throughput you are billed for and can consume without throttling. </p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * @public
   * <p>For provisioned feature groups, this indicates the write throughput you are billed for
   *          and can consume without throttling. </p>
   */
  ProvisionedWriteCapacityUnits?: number;
}

/**
 * @public
 */
export interface UpdateFeatureGroupRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>Updates the feature group. Updating a feature group is an asynchronous operation. When
   *          you get an HTTP 200 response, you've made a valid request. It takes some time after you've
   *          made a valid request for Feature Store to update the feature group.</p>
   */
  FeatureAdditions?: FeatureDefinition[];

  /**
   * @public
   * <p>Updates the feature group online store configuration.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfigUpdate;

  /**
   * @public
   * <p>The new throughput configuration for the feature group. You can switch between on-demand
   *          and provisioned modes or update the read / write capacity of provisioned feature groups.
   *          You can switch a feature group to on-demand only once in a 24 hour period. </p>
   */
  ThroughputConfig?: ThroughputConfigUpdate;
}

/**
 * @public
 */
export interface UpdateFeatureGroupResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureMetadataRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the feature that
   *          you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the feature that you're updating.</p>
   */
  FeatureName: string | undefined;

  /**
   * @public
   * <p>A description that you can write to better describe the feature.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of key-value pairs that you can add to better describe the feature.</p>
   */
  ParameterAdditions?: FeatureParameter[];

  /**
   * @public
   * <p>A list of parameter keys that you can specify to remove parameters that describe your
   *          feature.</p>
   */
  ParameterRemovals?: string[];
}

/**
 * @public
 */
export interface UpdateHubRequest {
  /**
   * @public
   * <p>The name of the hub to update.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>A description of the updated hub.</p>
   */
  HubDescription?: string;

  /**
   * @public
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * @public
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];
}

/**
 * @public
 */
export interface UpdateHubResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated hub.</p>
   */
  HubArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageRequest {
  /**
   * @public
   * <p>A list of properties to delete. Only the <code>Description</code> and
   *         <code>DisplayName</code> properties can be deleted.</p>
   */
  DeleteProperties?: string[];

  /**
   * @public
   * <p>The new description for the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new display name for the image.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The name of the image to update.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The new ARN for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateImageResponse {
  /**
   * @public
   * <p>The ARN of the image.</p>
   */
  ImageArn?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionRequest {
  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The alias of the image version.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The version of the image.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>A list of aliases to add.</p>
   */
  AliasesToAdd?: string[];

  /**
   * @public
   * <p>A list of aliases to delete.</p>
   */
  AliasesToDelete?: string[];

  /**
   * @public
   * <p>The availability of the image version specified by the maintainer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOT_PROVIDED</code>: The maintainers did not provide a status for image version stability.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STABLE</code>: The image version is stable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TO_BE_ARCHIVED</code>: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: The image version is archived. Archived image versions are not searchable and are no longer actively supported. </p>
   *             </li>
   *          </ul>
   */
  VendorGuidance?: VendorGuidance;

  /**
   * @public
   * <p>Indicates SageMaker job type compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TRAINING</code>: The image version is compatible with SageMaker training jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFERENCE</code>: The image version is compatible with SageMaker inference jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK_KERNEL</code>: The image version is compatible with SageMaker notebook kernels.</p>
   *             </li>
   *          </ul>
   */
  JobType?: JobType;

  /**
   * @public
   * <p>The machine learning framework vended in the image version.</p>
   */
  MLFramework?: string;

  /**
   * @public
   * <p>The supported programming language and its version.</p>
   */
  ProgrammingLang?: string;

  /**
   * @public
   * <p>Indicates CPU or GPU compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CPU</code>: The image version is compatible with CPU.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU</code>: The image version is compatible with GPU.</p>
   *             </li>
   *          </ul>
   */
  Processor?: Processor;

  /**
   * @public
   * <p>Indicates Horovod compatibility.</p>
   */
  Horovod?: boolean;

  /**
   * @public
   * <p>The maintainer description of the image version.</p>
   */
  ReleaseNotes?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionResponse {
  /**
   * @public
   * <p>The ARN of the image version.</p>
   */
  ImageVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateInferenceComponentInput {
  /**
   * @public
   * <p>The name of the inference component.</p>
   */
  InferenceComponentName: string | undefined;

  /**
   * @public
   * <p>Details about the resources to deploy with this inference component, including the
   *          model, container, and compute resources.</p>
   */
  Specification?: InferenceComponentSpecification;

  /**
   * @public
   * <p>Runtime settings for a model that is deployed with an inference component.</p>
   */
  RuntimeConfig?: InferenceComponentRuntimeConfig;
}

/**
 * @public
 */
export interface UpdateInferenceComponentOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigInput {
  /**
   * @public
   * <p>The name of the inference component to update.</p>
   */
  InferenceComponentName: string | undefined;

  /**
   * @public
   * <p>Runtime settings for a model that is deployed with an inference component.</p>
   */
  DesiredRuntimeConfig: InferenceComponentRuntimeConfig | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentRequest {
  /**
   * @public
   * <p>The name of the inference experiment to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *            The duration for which the inference experiment will run. If the status of the inference experiment is
   *            <code>Created</code>, then you can update both the start and end dates. If the status of the inference
   *            experiment is <code>Running</code>, then you can update only the end date.
   *        </p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * @public
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant, whose infrastructure
   *            configuration you want to update.
   *        </p>
   */
  ModelVariants?: ModelVariantConfig[];

  /**
   * @public
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * @public
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type. Use this field to specify a
   *            production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a
   *            percentage of the inference requests. For the shadow variant also specify the percentage of requests that
   *            Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig?: ShadowModeConfig;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentResponse {
  /**
   * @public
   * <p>The ARN of the updated inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelCardRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the model card to update.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The updated model card content. Content must be in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
   *          <p>When updating model card content, be sure to include the full content and not just updated content.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draft</code>: The model card is a work in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingReview</code>: The model card is pending review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approved</code>: The model card is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>: The model card is archived. No more updates should be made to the model
   *                card, but it can still be exported.</p>
   *             </li>
   *          </ul>
   */
  ModelCardStatus?: ModelCardStatus;
}

/**
 * @public
 */
export interface UpdateModelCardResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated model card.</p>
   */
  ModelCardArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelPackageInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * @public
   * <p>The approval status of the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>A description for the approval status of the model.</p>
   */
  ApprovalDescription?: string;

  /**
   * @public
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * @public
   * <p>The metadata properties associated with the model package versions to remove.</p>
   */
  CustomerMetadataPropertiesToRemove?: string[];

  /**
   * @public
   * <p>An array of additional Inference Specification objects to be added to the
   *     existing array additional Inference Specification. Total number of additional
   *     Inference Specifications can not exceed 15. Each additional Inference Specification
   *     specifies artifacts based on this model package that can be used on inference endpoints.
   *     Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];
}

/**
 * @public
 */
export interface UpdateModelPackageOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertRequest {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * @public
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   */
  DatapointsToAlert: number | undefined;

  /**
   * @public
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   */
  EvaluationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleRequest {
  /**
   * @public
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services
   *    Region within an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring
   *    job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceInput {
  /**
   * @public
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * @public
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * @public
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * @public
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * @public
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in
   *             Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[];

  /**
   * @public
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * @public
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * @public
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAdditionalCodeRepositories?: boolean;

  /**
   * @public
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *          <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *          </note>
   */
  RootAccess?: RootAccess;

  /**
   * @public
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceOutput {}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @public
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * @public
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @public
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

/**
 * @public
 */
export interface UpdateNotebookInstanceLifecycleConfigOutput {}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to update.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * @public
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * @public
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * @public
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>If specified, it applies to all executions of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * @public
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * @public
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * @public
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 * <p>Details that you specify to provision a service catalog product.
 *             For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
 *         </p>
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * @public
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * @public
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * @public
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * @public
   * <p>The description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * @public
   * <p>The product ID and provisioning artifact ID to provision a service catalog.
   *             The provisioning artifact ID will default to the latest provisioning artifact
   *             ID of the product, if you don't provide the provisioning artifact ID. For more
   *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
   *         </p>
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;

  /**
   * @public
   * <p>An array of key-value pairs. You can use tags to categorize your
   *             Amazon Web Services resources in different ways, for example, by purpose, owner, or
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.
   *             In addition, the project must have tag update constraints set in order to include this
   *             parameter in the request.  For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html">Amazon Web Services Service
   *                 Catalog Tag Update Constraints</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * @public
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;

  /**
   * @public
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;

  /**
   * @public
   * <p>The name of the space that appears in the Amazon SageMaker Studio UI.</p>
   */
  SpaceDisplayName?: string;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * @public
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;
}

/**
 * @public
 */
export interface UpdateTrainingJobRequest {
  /**
   * @public
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * @public
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * @public
   * <p>The training job <code>ResourceConfig</code> to update warm pool retention
   *             length.</p>
   */
  ResourceConfig?: ResourceConfigForUpdate;

  /**
   * @public
   * <p>Configuration for remote debugging while the training job is running. You can
   *             update the remote debugging configuration when the <code>SecondaryStatus</code> of the job
   *             is <code>Downloading</code> or <code>Training</code>.To learn more about the remote
   *             debugging functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container through Amazon Web Services Systems Manager (SSM)
   *                 for remote debugging</a>.</p>
   */
  RemoteDebugConfig?: RemoteDebugConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateTrainingJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialRequest {
  /**
   * @public
   * <p>The name of the trial to update.</p>
   */
  TrialName: string | undefined;

  /**
   * @public
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface UpdateTrialResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * @public
 */
export interface UpdateTrialComponentRequest {
  /**
   * @public
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * @public
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * @public
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * @public
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * @public
   * <p>Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * @public
   * <p>Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * @public
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateTrialComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * @public
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * @public
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * @public
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * @public
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *             name by using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html">ListWorkforces</a> operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * @public
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *          <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * @public
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * @public
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * @public
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamRequest {
  /**
   * @public
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * @public
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *          <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *          <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * @public
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * @public
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

/**
 * @public
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 */
export interface SearchExpression {
  /**
   * @public
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * @public
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * @public
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * @public
   * <p>The name of the SageMaker resource to search for.</p>
   */
  Resource: ResourceType | undefined;

  /**
   * @public
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * @public
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * @public
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder;

  /**
   * @public
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       A cross account filter option. When the value is <code>"CrossAccount"</code> the
   *       search results will only include resources made discoverable to you from other
   *       accounts. When the value is <code>"SameAccount"</code> or <code>null</code> the
   *       search results will only include resources from your account. Default is
   *       <code>null</code>. For more information on searching for resources made
   *       discoverable to your account, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html">
   *         Search discoverable resources</a> in the SageMaker Developer Guide.
   *       The maximum number of <code>ResourceCatalog</code>s viewable is 1000.
   *     </p>
   */
  CrossAccountFilterOption?: CrossAccountFilterOption;

  /**
   * @public
   * <p>
   *       Limits the results of your search request to the resources that you can access.
   *     </p>
   */
  VisibilityConditions?: VisibilityConditions[];
}

/**
 * @internal
 */
export const ModelCardFilterSensitiveLog = (obj: ModelCard): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchRecordFilterSensitiveLog = (obj: SearchRecord): any => ({
  ...obj,
  ...(obj.TrialComponent && { TrialComponent: obj.TrialComponent }),
  ...(obj.FeatureGroup && { FeatureGroup: obj.FeatureGroup }),
  ...(obj.ModelCard && { ModelCard: ModelCardFilterSensitiveLog(obj.ModelCard) }),
});

/**
 * @internal
 */
export const SearchResponseFilterSensitiveLog = (obj: SearchResponse): any => ({
  ...obj,
  ...(obj.Results && { Results: obj.Results.map((item) => SearchRecordFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateModelCardRequestFilterSensitiveLog = (obj: UpdateModelCardRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateWorkforceRequestFilterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});
