// smithy-typescript generated code
import {
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSpecification,
  BatchStrategy,
  BooleanOperator,
  CacheHitResult,
  CallbackStepMetadata,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  ConditionStepMetadata,
  DeploymentConfig,
  EdgeOutputConfig,
  FeatureDefinition,
  InferenceSpecification,
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
  UiTemplate,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DriftCheckBaselines,
  ExperimentConfig,
  FeatureParameter,
  InstanceMetadataServiceConfiguration,
  MemberDefinition,
  ModelArtifacts,
  ModelClientConfig,
  ModelMetrics,
  ModelPackageValidationSpecification,
  MonitoringScheduleConfig,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OidcConfig,
  ParallelismConfiguration,
  PipelineDefinitionS3Location,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  RetryStrategy,
  RootAccess,
  ServiceCatalogProvisioningDetails,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkforceVpcConfigRequest,
} from "./models_1";
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
  HyperParameterTrainingJobSummary,
  LambdaStepMetadata,
  LineageType,
  MetricData,
  ModelPackageGroupStatus,
  ModelPackageStatusDetails,
  PipelineExecutionStatus,
  PipelineExperimentConfig,
  PipelineStatus,
  ProcessingJobStatus,
  ProjectStatus,
  ResourceType,
  SecondaryStatus,
  SecondaryStatusTransition,
  ServiceCatalogProvisionedProductDetails,
  SortBy,
  SortOrder,
  SubscribedWorkteam,
  TrainingJobStatus,
  TransformJobStatus,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  UserProfileStatus,
  Workforce,
  Workteam,
} from "./models_2";

export interface ListPipelineExecutionStepsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListPipelineExecutionStepsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionStepsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
}

export namespace ModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a processing job step.</p>
 */
export interface ProcessingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  Arn?: string;
}

export namespace ProcessingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the metadata for a Quality check step. For more information, see
 *          the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *       </p>
 */
export interface QualityCheckStepMetadata {
  /**
   * <p>The type of the Quality check step.</p>
   */
  CheckType?: string;

  /**
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   */
  CalculatedBaselineStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   */
  CalculatedBaselineConstraints?: string;

  /**
   * <p>The model package group name.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   */
  ViolationReport?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   */
  CheckJobArn?: string;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   */
  SkipCheck?: boolean;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *          <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *          These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code>
   *             BaselineUsedForDriftCheckStatistics</code> properties. </p>
   */
  RegisterNewBaseline?: boolean;
}

export namespace QualityCheckStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QualityCheckStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
}

export namespace RegisterModelStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterModelStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a training job step.</p>
 */
export interface TrainingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TrainingJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TransformJobStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobStepMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a tuning step.</p>
 */
export interface TuningJobStepMetaData {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  Arn?: string;
}

export namespace TuningJobStepMetaData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TuningJobStepMetaData): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for a step execution.</p>
 */
export interface PipelineExecutionStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   */
  Model?: ModelStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package the model was registered to by this step execution.</p>
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   */
  Condition?: ConditionStepMetadata;

  /**
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   */
  Callback?: CallbackStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   */
  Lambda?: LambdaStepMetadata;

  /**
   * <p>The configurations and outcomes of the check step execution. This includes: </p>
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
  QualityCheck?: QualityCheckStepMetadata;

  /**
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
   * <p>The configurations and outcomes of an EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

  /**
   * <p>The configurations and outcomes of a Fail step execution.</p>
   */
  Fail?: FailStepMetadata;
}

export namespace PipelineExecutionStepMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStepMetadata): any => ({
    ...obj,
  });
}

export enum StepStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

/**
 * <p>An execution of a step in a pipeline.</p>
 */
export interface PipelineExecutionStep {
  /**
   * <p>The name of the step that is executed.</p>
   */
  StepName?: string;

  /**
   * <p>The display name of the step.</p>
   */
  StepDisplayName?: string;

  /**
   * <p>The description of the step.</p>
   */
  StepDescription?: string;

  /**
   * <p>The time that the step started executing.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the step stopped executing.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the step execution.</p>
   */
  StepStatus?: StepStatus | string;

  /**
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   */
  CacheHitResult?: CacheHitResult;

  /**
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   */
  AttemptCount?: number;

  /**
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   */
  FailureReason?: string;

  /**
   * <p>Metadata for the step execution.</p>
   */
  Metadata?: PipelineExecutionStepMetadata;
}

export namespace PipelineExecutionStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecutionStep): any => ({
    ...obj,
  });
}

export interface ListPipelineExecutionStepsResponse {
  /**
   * <p>A list of <code>PipeLineExecutionStep</code> objects. Each
   *             <code>PipeLineExecutionStep</code> consists of StepName, StartTime, EndTime, StepStatus,
   *          and Metadata. Metadata is an object with properties for each job that contains relevant
   *          information about the job created by the step.</p>
   */
  PipelineExecutionSteps?: PipelineExecutionStep[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelineExecutionStepsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineExecutionStepsResponse): any => ({
    ...obj,
  });
}

export interface ListPipelineParametersForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of parameters to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListPipelineParametersForExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineParametersForExecutionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Assigns a value to a named Pipeline parameter.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter to assign a value to. This
   *          parameter name must match a named parameter in the
   *          pipeline definition.</p>
   */
  Name: string | undefined;

  /**
   * <p>The literal value for the parameter.</p>
   */
  Value: string | undefined;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

export interface ListPipelineParametersForExecutionResponse {
  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelineParametersForExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelineParametersForExecutionResponse): any => ({
    ...obj,
  });
}

export enum SortPipelinesBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListPipelinesRequest {
  /**
   * <p>The prefix of the pipeline name.</p>
   */
  PipelineNamePrefix?: string;

  /**
   * <p>A filter that returns the pipelines that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipelines that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelinesBy | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipelines to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListPipelinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The last time that a pipeline execution began.</p>
   */
  LastExecutionTime?: Date;
}

export namespace PipelineSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineSummary): any => ({
    ...obj,
  });
}

export interface ListPipelinesResponse {
  /**
   * <p>Contains a sorted list of <code>PipelineSummary</code> objects matching the specified
   *          filters. Each <code>PipelineSummary</code> consists of PipelineArn, PipelineName,
   *          ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and
   *          RoleArn. This list can be empty. </p>
   */
  PipelineSummaries?: PipelineSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPipelinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesResponse): any => ({
    ...obj,
  });
}

export interface ListProcessingJobsRequest {
  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   */
  StatusEquals?: ProcessingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of processing
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of processing jobs to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListProcessingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProcessingJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of information about a processing job.</p>
 */
export interface ProcessingJobSummary {
  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;
}

export namespace ProcessingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJobSummary): any => ({
    ...obj,
  });
}

export interface ListProcessingJobsResponse {
  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListProcessingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
    ...obj,
  });
}

export enum ProjectSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ProjectSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListProjectsInput {
  /**
   * <p>A filter that returns the projects that were created after a specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the projects that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of projects to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the projects whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListProjects</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of projects, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ProjectSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: ProjectSortOrder | string;
}

export namespace ListProjectsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * <p>The time that the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | string | undefined;
}

export namespace ProjectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
}

export interface ListProjectsOutput {
  /**
   * <p>A list of summaries of projects.</p>
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListProjectsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsOutput): any => ({
    ...obj,
  });
}

export interface ListStageDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to neeed tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of requests to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>Toggle for excluding devices deployed in other stages.</p>
   */
  ExcludeDevicesDeployedInOtherStage?: boolean;

  /**
   * <p>The name of the stage in the deployment.</p>
   */
  StageName: string | undefined;
}

export namespace ListStageDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStageDevicesRequest): any => ({
    ...obj,
  });
}

export interface ListStageDevicesResponse {
  /**
   * <p>List of summaries of devices allocated to the stage.</p>
   */
  DeviceDeploymentSummaries: DeviceDeploymentSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListStageDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStageDevicesResponse): any => ({
    ...obj,
  });
}

export enum StudioLifecycleConfigSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
  Name = "Name",
}

export interface ListStudioLifecycleConfigsRequest {
  /**
   * <p>The maximum number of Studio Lifecycle Configurations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A parameter to search for the App Type to which the Lifecycle Configuration is attached.</p>
   */
  AppTypeEquals?: StudioLifecycleConfigAppType | string;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is CreationTime.</p>
   */
  SortBy?: StudioLifecycleConfigSortKey | string;

  /**
   * <p>The sort order. The default value is Descending.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListStudioLifecycleConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioLifecycleConfigsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the Studio Lifecycle Configuration.</p>
 */
export interface StudioLifecycleConfigDetails {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * <p>The name of the Studio Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The App type to which the Lifecycle Configuration is attached.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | string;
}

export namespace StudioLifecycleConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioLifecycleConfigDetails): any => ({
    ...obj,
  });
}

export interface ListStudioLifecycleConfigsResponse {
  /**
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of Lifecycle Configurations and their properties.</p>
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}

export namespace ListStudioLifecycleConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioLifecycleConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListSubscribedWorkteamsRequest {
  /**
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

export namespace ListSubscribedWorkteamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSubscribedWorkteamsRequest): any => ({
    ...obj,
  });
}

export interface ListSubscribedWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListSubscribedWorkteamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSubscribedWorkteamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             retrieve.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of tags to return.</p>
   */
  MaxResults?: number;
}

export namespace ListTagsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj,
  });
}

export interface ListTagsOutput {
  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   */
  Tags?: Tag[];

  /**
   * <p> If response is truncated, SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;
}

export namespace ListTagsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsRequest {
  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrainingJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a training job.</p>
 */
export interface TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;
}

export namespace TrainingJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJobSummary): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsResponse {
  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListTrainingJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsResponse): any => ({
    ...obj,
  });
}

export enum TrainingJobSortByOptions {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Name = "Name",
  Status = "Status",
}

export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs with the specified status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsForHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * <p>A list of <a>TrainingJobSummary</a> objects that
   *             describe
   *             the training jobs that the
   *                 <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request
   *             was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *             of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrainingJobsForHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface ListTransformJobsRequest {
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?: TransformJobStatus | string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of transform
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
   */
  MaxResults?: number;
}

export namespace ListTransformJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransformJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a>ListTransformJobs</a> call.</p>
 */
export interface TransformJobSummary {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
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
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace TransformJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJobSummary): any => ({
    ...obj,
  });
}

export interface ListTransformJobsResponse {
  /**
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListTransformJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransformJobsResponse): any => ({
    ...obj,
  });
}

export enum SortTrialComponentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListTrialComponentsRequest {
  /**
   * <p>A filter that returns only components that are part of the specified experiment. If you
   *       specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or
   *         <code>TrialName</code>.</p>
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only components that are part of the specified trial. If you specify
   *         <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or
   *         <code>SourceArn</code>.</p>
   */
  TrialName?: string;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource Name
   *       (ARN). If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
   *       or <code>TrialName</code>.</p>
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only components created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialComponentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of components to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   */
  NextToken?: string;
}

export namespace ListTrialComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialComponentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of a trial component. To get all the properties, call the
 *         <a>DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 */
export interface TrialComponentSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
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
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace TrialComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSummary): any => ({
    ...obj,
  });
}

export interface ListTrialComponentsResponse {
  /**
   * <p>A list of the summaries of your trial components.</p>
   */
  TrialComponentSummaries?: TrialComponentSummary[];

  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListTrialComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialComponentsResponse): any => ({
    ...obj,
  });
}

export enum SortTrialsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListTrialsRequest {
  /**
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only trials that are associated with the specified trial
   *       component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the
   *       call returns a token for getting the next set of trials.</p>
   */
  NextToken?: string;
}

export namespace ListTrialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the
 *         <a>DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 */
export interface TrialSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  TrialSource?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace TrialSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialSummary): any => ({
    ...obj,
  });
}

export interface ListTrialsResponse {
  /**
   * <p>A list of the summaries of your trials.</p>
   */
  TrialSummaries?: TrialSummary[];

  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListTrialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrialsResponse): any => ({
    ...obj,
  });
}

export enum UserProfileSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
}

export interface ListUserProfilesRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: UserProfileSortKey | string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  UserProfileNameContains?: string;
}

export namespace ListUserProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The user profile details.</p>
 */
export interface UserProfileDetails {
  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;
}

export namespace UserProfileDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserProfileDetails): any => ({
    ...obj,
  });
}

export interface ListUserProfilesResponse {
  /**
   * <p>The list of user profiles.</p>
   */
  UserProfiles?: UserProfileDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUserProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserProfilesResponse): any => ({
    ...obj,
  });
}

export enum ListWorkforcesSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
}

export interface ListWorkforcesRequest {
  /**
   * <p>Sort workforces using the workforce name or creation date.</p>
   */
  SortBy?: ListWorkforcesSortByOptions | string;

  /**
   * <p>Sort workforces in ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter you can use to search for workforces using part of the workforce name.</p>
   */
  NameContains?: string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workforces returned in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkforcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkforcesRequest): any => ({
    ...obj,
  });
}

export interface ListWorkforcesResponse {
  /**
   * <p>A list containing information about your workforce.</p>
   */
  Workforces: Workforce[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListWorkforcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkforcesResponse): any => ({
    ...obj,
  });
}

export enum ListWorkteamsSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name",
}

export interface ListWorkteamsRequest {
  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListWorkteamsSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the work team's name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkteamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkteamsRequest): any => ({
    ...obj,
  });
}

export interface ListWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  Workteams: Workteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListWorkteamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkteamsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A versioned model that can be deployed for SageMaker inference.</p>
 */
export interface ModelPackage {
  /**
   * <p>The name of the model.</p>
   */
  ModelPackageName?: string;

  /**
   * <p>The model group to which the model belongs.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version number of a versioned model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn?: string;

  /**
   * <p>The description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The time that the model package was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>A list of algorithms that were used to create a model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The status of the model package. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model package is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model package is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model package was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model package failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model package is in the process of being deleted.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageStatus?: ModelPackageStatus | string;

  /**
   * <p>Specifies the validation and image scan statuses of the model package.</p>
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;

  /**
   * <p>Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For
   *             information about listing model packages on Amazon Web Services Marketplace, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html">List Your
   *                 Algorithm or Model Package on Amazon Web Services Marketplace</a>.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The approval status of the model. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>APPROVED</code> - The model is approved</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REJECTED</code> - The model is rejected.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual
   *                     approval.</p>
   *             </li>
   *          </ul>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided when the model approval is set.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The machine learning domain of your model package and its components. Common
   *            machine learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task your model package accomplishes. Common machine
   *      learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service path where the sample payload are stored. This path must point to
   *            a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * <p>A list of the tags associated with the model package. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The metadata properties for the model package. </p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.</p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;
}

export namespace ModelPackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackage): any => ({
    ...obj,
  });
}

/**
 * <p>A group of versioned models in the model registry.</p>
 */
export interface ModelPackageGroup {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn?: string;

  /**
   * <p>The description for the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The status of the model group. This can be one of the following values.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The model group is pending being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> - The model group is in the process of being
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code> - The model group was successfully created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> - The model group failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - The model group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_FAILED</code> - SageMaker failed to delete the model group.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus | string;

  /**
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ModelPackageGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelPackageGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions
 *       of all filters to be included in the results returned from the <a>Search</a> API.</p>
 *          <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a
 *       specific channel name and <code>S3Uri</code> prefix, define the following filters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains",
 *             "Value":"mybucket/catdata"}'</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface NestedFilters {
  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;

  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;
}

export namespace NestedFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedFilters): any => ({
    ...obj,
  });
}

/**
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be associated with
 *       multiple trials.</p>
 */
export interface Parent {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;
}

export namespace Parent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parent): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker Model Building Pipeline instance.</p>
 */
export interface Pipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that created the pipeline.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline.</p>
   */
  PipelineStatus?: PipelineStatus | string;

  /**
   * <p>The creation time of the pipeline.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>A list of tags that apply to the pipeline.</p>
   */
  Tags?: Tag[];
}

export namespace Pipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Pipeline): any => ({
    ...obj,
  });
}

/**
 * <p>An execution of a pipeline.</p>
 */
export interface PipelineExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline that was executed.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>The status of the pipeline status.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * <p>The creation time of the pipeline execution.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline execution was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline execution.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];
}

export namespace PipelineExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineExecution): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process
 *                 Data and Evaluate Models</a>.</p>
 */
export interface ProcessingJob {
  /**
   * <p>List of input configurations for the processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Configuration for uploading output from the processing container.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName?: string;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources?: ProcessingResources;

  /**
   * <p>Configures conditions under which the processing job should be stopped, such as how long
   *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The ARN of the role used to create the processing job.</p>
   */
  RoleArn?: string;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The ARN of the processing job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus?: ProcessingJobStatus | string;

  /**
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the processing job ended.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time that the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time the processing job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of the training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ProcessingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingJob): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and
 *             storage paths.</p>
 */
export interface ProfilerConfigForUpdate {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * <p>To disable Debugger monitoring and profiling, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
}

export namespace ProfilerConfigForUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfilerConfigForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a project as returned by the Search API.</p>
 */
export interface Project {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName?: string;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId?: string;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>Details that you specify to provision a service catalog product. For information about
   *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;

  /**
   * <p>Details of a provisioned service catalog product. For information about service catalog,
   *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus?: ProjectStatus | string;

  /**
   * <p>Who created the project.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>A timestamp specifying when the project was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A timestamp container for when the project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace Project {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
}

export interface PutModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group to add a resource policy to.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

export namespace PutModelPackageGroupPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutModelPackageGroupPolicyInput): any => ({
    ...obj,
  });
}

export interface PutModelPackageGroupPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package group.</p>
   */
  ModelPackageGroupArn: string | undefined;
}

export namespace PutModelPackageGroupPolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutModelPackageGroupPolicyOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A set of filters to narrow the set of lineage entities connected to the <code>StartArn</code>(s) returned by the
 *          <code>QueryLineage</code> API action.</p>
 */
export interface QueryFilters {
  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code> by type. For example: <code>DataSet</code>,
   *          <code>Model</code>, <code>Endpoint</code>, or <code>ModelDeployment</code>.</p>
   */
  Types?: string[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by the type of the lineage entity.</p>
   */
  LineageTypes?: (LineageType | string)[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by created date.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the create date.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) before the last modified date.</p>
   */
  ModifiedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the last modified date.</p>
   */
  ModifiedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by a set if property key value pairs.
   *          If multiple pairs are provided, an entity is included in the results if it matches any of the provided pairs.</p>
   */
  Properties?: Record<string, string>;
}

export namespace QueryFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryFilters): any => ({
    ...obj,
  });
}

export interface QueryLineageRequest {
  /**
   * <p>A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query.</p>
   */
  StartArns?: string[];

  /**
   * <p>Associations between lineage entities have a direction.  This parameter determines the direction from the
   *          StartArn(s) that the query traverses.</p>
   */
  Direction?: Direction | string;

  /**
   * <p> Setting this value to <code>True</code> retrieves not only the entities of interest but also the
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking-entities.html">Associations</a> and
   *          lineage entities on the path. Set to <code>False</code> to only return lineage entities that match your query.</p>
   */
  IncludeEdges?: boolean;

  /**
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
   * <p>The maximum depth in lineage relationships from the <code>StartArns</code> that are traversed. Depth is a measure of the number
   *          of <code>Associations</code> from the <code>StartArn</code> entity to the matched results.</p>
   */
  MaxDepth?: number;

  /**
   * <p>Limits the number of vertices in the results. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Limits the number of vertices in the request. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace QueryLineageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLineageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A lineage entity connected to the starting entity(ies).</p>
 */
export interface Vertex {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage entity resource.</p>
   */
  Arn?: string;

  /**
   * <p>The type of the lineage entity resource. For example: <code>DataSet</code>, <code>Model</code>, <code>Endpoint</code>,
   *          etc...</p>
   */
  Type?: string;

  /**
   * <p>The type of resource of the lineage entity.</p>
   */
  LineageType?: LineageType | string;
}

export namespace Vertex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vertex): any => ({
    ...obj,
  });
}

export interface QueryLineageResponse {
  /**
   * <p>A list of vertices connected to the start entity(ies) in the lineage graph.</p>
   */
  Vertices?: Vertex[];

  /**
   * <p>A list of edges that connect vertices in the response.</p>
   */
  Edges?: Edge[];

  /**
   * <p>Limits the number of vertices in the response. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace QueryLineageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryLineageResponse): any => ({
    ...obj,
  });
}

export interface RegisterDevicesRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>A list of devices to register with SageMaker Edge Manager.</p>
   */
  Devices: Device[] | undefined;

  /**
   * <p>The tags associated with devices.</p>
   */
  Tags?: Tag[];
}

export namespace RegisterDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains input values for a task.</p>
 */
export interface RenderableTask {
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string | undefined;
}

export namespace RenderableTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderableTask): any => ({
    ...obj,
  });
}

/**
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface RenderingError {
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;
}

export namespace RenderingError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderingError): any => ({
    ...obj,
  });
}

export interface RenderUiTemplateRequest {
  /**
   * <p>A <code>Template</code> object containing the worker UI template to render.</p>
   */
  UiTemplate?: UiTemplate;

  /**
   * <p>A <code>RenderableTask</code> object containing a representative task to
   *             render.</p>
   */
  Task: RenderableTask | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the
   *             template.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The <code>HumanTaskUiArn</code> of the worker UI that you want to render. Do not
   *             provide a <code>HumanTaskUiArn</code> if you use the <code>UiTemplate</code>
   *             parameter.</p>
   *         <p>See a list of available Human Ui Amazon Resource Names (ARNs) in <a>UiConfig</a>.</p>
   */
  HumanTaskUiArn?: string;
}

export namespace RenderUiTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderUiTemplateRequest): any => ({
    ...obj,
  });
}

export interface RenderUiTemplateResponse {
  /**
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   */
  RenderedContent: string | undefined;

  /**
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered
   *             while rendering the template. If there were no errors, the list is empty.</p>
   */
  Errors: RenderingError[] | undefined;
}

export namespace RenderUiTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderUiTemplateResponse): any => ({
    ...obj,
  });
}

export interface RetryPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace RetryPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface RetryPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace RetryPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryPipelineExecutionResponse): any => ({
    ...obj,
  });
}

export enum SearchSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
 * <p>Contains information about a training job.</p>
 */
export interface TrainingJob {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *         <p>Training job statuses are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *         <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus | string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p>
   *         <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *         </important>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus?: SecondaryStatus | string;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace TrainingJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingJob): any => ({
    ...obj,
  });
}

/**
 * <p>A short summary of a trial component.</p>
 */
export interface TrialComponentSimpleSummary {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  CreatedBy?: UserContext;
}

export namespace TrialComponentSimpleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSimpleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial as returned by the <a>Search</a> API.</p>
 */
export interface Trial {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The list of tags that are associated with the trial. You can use <a>Search</a>
   *       API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

export namespace Trial {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trial): any => ({
    ...obj,
  });
}

/**
 * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
 *         Transform</a>.</p>
 */
export interface TransformJob {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn?: string;

  /**
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
  TransformJobStatus?: TransformJobStatus | string;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model associated with the transform job.</p>
   */
  ModelName?: string;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
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
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   */
  TransformInput?: TransformInput;

  /**
   * <p>Describes the results of a transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   */
  TransformResources?: TransformResources;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
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
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>A list of tags associated with the transform job.</p>
   */
  Tags?: Tag[];
}

export namespace TransformJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformJob): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the source of a trial component. Either
 *         <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.</p>
 */
export interface TrialComponentSourceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>Information about a training job that's the source of a trial component.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>Information about a processing job that's the source of a trial component.</p>
   */
  ProcessingJob?: ProcessingJob;

  /**
   * <p>Information about a transform job that's the source of a trial component.</p>
   */
  TransformJob?: TransformJob;
}

export namespace TrialComponentSourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponentSourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a trial component as returned by the <a>Search</a>
 *       API.</p>
 */
export interface TrialComponent {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, or project.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The list of tags that are associated with the component. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];
}

export namespace TrialComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrialComponent): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>A single resource returned as part of the <a>Search</a> API response.</p>
 */
export interface SearchRecord {
  /**
   * <p>The properties of a training job.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>The properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * <p>The properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * <p>The properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;

  /**
   * <p>A hosted endpoint for real-time inference.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>A versioned model that can be deployed for SageMaker inference.</p>
   */
  ModelPackage?: ModelPackage;

  /**
   * <p>A group of versioned models in the model registry.</p>
   */
  ModelPackageGroup?: ModelPackageGroup;

  /**
   * <p>A SageMaker Model Building Pipeline instance.</p>
   */
  Pipeline?: Pipeline;

  /**
   * <p>An execution of a pipeline.</p>
   */
  PipelineExecution?: PipelineExecution;

  /**
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
   *          A Feature Group can be visualized as a table which has rows,
   *          with a unique identifier for each row where each column in the table is a feature.
   *          In principle, a Feature Group is composed of features and values per features.</p>
   */
  FeatureGroup?: FeatureGroup;

  /**
   * <p>The properties of a project.</p>
   */
  Project?: Project;

  /**
   * <p>The feature metadata used to search through the features.</p>
   */
  FeatureMetadata?: FeatureMetadata;
}

export namespace SearchRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRecord): any => ({
    ...obj,
    ...(obj.TrialComponent && { TrialComponent: TrialComponent.filterSensitiveLog(obj.TrialComponent) }),
  });
}

export interface SearchResponse {
  /**
   * <p>A list of <code>SearchRecord</code> objects.</p>
   */
  Results?: SearchRecord[];

  /**
   * <p>If the result of the previous <code>Search</code> request was truncated, the response
   *       includes a NextToken. To retrieve the next set of results, use the token in the next
   *       request.</p>
   */
  NextToken?: string;
}

export namespace SearchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchResponse): any => ({
    ...obj,
    ...(obj.Results && { Results: obj.Results.map((item) => SearchRecord.filterSensitiveLog(item)) }),
  });
}

export interface SendPipelineExecutionStepFailureRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * <p>A message describing why the step failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

export namespace SendPipelineExecutionStepFailureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepFailureRequest): any => ({
    ...obj,
  });
}

export interface SendPipelineExecutionStepFailureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace SendPipelineExecutionStepFailureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepFailureResponse): any => ({
    ...obj,
  });
}

export interface SendPipelineExecutionStepSuccessRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   */
  CallbackToken: string | undefined;

  /**
   * <p>A list of the output parameters of the callback step.</p>
   */
  OutputParameters?: OutputParameter[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   */
  ClientRequestToken?: string;
}

export namespace SendPipelineExecutionStepSuccessRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepSuccessRequest): any => ({
    ...obj,
  });
}

export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace SendPipelineExecutionStepSuccessResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendPipelineExecutionStepSuccessResponse): any => ({
    ...obj,
  });
}

export interface StartEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to start.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to start.</p>
   */
  StageName: string | undefined;
}

export namespace StartEdgeDeploymentStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEdgeDeploymentStageRequest): any => ({
    ...obj,
  });
}

export interface StartMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StartMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface StartNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StartNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface StartPipelineExecutionRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace StartPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface StartPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace StartPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface StopAutoMLJobRequest {
  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace StopAutoMLJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface StopCompilationJobRequest {
  /**
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace StopCompilationJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCompilationJobRequest): any => ({
    ...obj,
  });
}

export interface StopEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to stop.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to stop.</p>
   */
  StageName: string | undefined;
}

export namespace StopEdgeDeploymentStageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEdgeDeploymentStageRequest): any => ({
    ...obj,
  });
}

export interface StopEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export namespace StopEdgePackagingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEdgePackagingJobRequest): any => ({
    ...obj,
  });
}

export interface StopHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace StopHyperParameterTuningJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

export interface StopInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job you want to stop.</p>
   */
  JobName: string | undefined;
}

export namespace StopInferenceRecommendationsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInferenceRecommendationsJobRequest): any => ({
    ...obj,
  });
}

export interface StopLabelingJobRequest {
  /**
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace StopLabelingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLabelingJobRequest): any => ({
    ...obj,
  });
}

export interface StopMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StopMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface StopNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StopNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface StopPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   */
  ClientRequestToken?: string;
}

export namespace StopPipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface StopPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace StopPipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface StopProcessingJobRequest {
  /**
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace StopProcessingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopProcessingJobRequest): any => ({
    ...obj,
  });
}

export interface StopTrainingJobRequest {
  /**
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace StopTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface StopTransformJobRequest {
  /**
   * <p>The name of the batch transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

export namespace StopTransformJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTransformJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionRequest {
  /**
   * <p>The name of the action to update.</p>
   */
  ActionName: string | undefined;

  /**
   * <p>The new description for the action.</p>
   */
  Description?: string;

  /**
   * <p>The new status for the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

export namespace UpdateActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
}

export namespace UpdateActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionResponse): any => ({
    ...obj,
  });
}

export interface UpdateAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to update.</p>
   */
  AppImageConfigName: string | undefined;

  /**
   * <p>The new KernelGateway app to run on the image.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export namespace UpdateAppImageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
}

export namespace UpdateAppImageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppImageConfigResponse): any => ({
    ...obj,
  });
}

export interface UpdateArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to update.</p>
   */
  ArtifactArn: string | undefined;

  /**
   * <p>The new name for the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

export namespace UpdateArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactRequest): any => ({
    ...obj,
  });
}

export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export namespace UpdateArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactResponse): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to
   *             access the repository. The secret must have a staging label of <code>AWSCURRENT</code>
   *             and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  GitConfig?: GitConfigForUpdate;
}

export namespace UpdateCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace UpdateCodeRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
    ...obj,
  });
}

export interface UpdateContextRequest {
  /**
   * <p>The name of the context to update.</p>
   */
  ContextName: string | undefined;

  /**
   * <p>The new description for the context.</p>
   */
  Description?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

export namespace UpdateContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextRequest): any => ({
    ...obj,
  });
}

export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export namespace UpdateContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  RoleArn?: string;

  /**
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Output configuration  for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *       The name of the role alias generated will match this pattern:
   *       "SageMakerEdge-{DeviceFleetName}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

export namespace UpdateDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceFleetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>List of devices to register with Edge Manager agent.</p>
   */
  Devices: Device[] | undefined;
}

export namespace UpdateDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevicesRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainRequest {
  /**
   * <p>The ID of the domain to be updated.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>A collection of <code>DomainSettings</code> configuration values to update.</p>
   */
  DomainSettingsForUpdate?: DomainSettingsForUpdate;
}

export namespace UpdateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

export namespace UpdateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj,
  });
}

export enum VariantPropertyType {
  DataCaptureConfig = "DataCaptureConfig",
  DesiredInstanceCount = "DesiredInstanceCount",
  DesiredWeight = "DesiredWeight",
}

/**
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *         <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to
 *                 <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the
 *             existing variant properties of the endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <a>ProductionVariant$InitialInstanceCount</a> values
   *                     in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <a>ProductionVariant$InitialVariantWeight</a> values in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
}

export namespace VariantProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariantProperty): any => ({
    ...obj,
  });
}

export interface UpdateEndpointInput {
  /**
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>When updating endpoint resources, enables or disables the retention of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">variant properties</a>, such as the instance count or the variant weight. To
   *             retain the variant properties of an endpoint when updating it, set
   *                 <code>RetainAllVariantProperties</code> to <code>true</code>. To use the variant
   *             properties specified in a new <code>EndpointConfig</code> call when updating an
   *             endpoint, set <code>RetainAllVariantProperties</code> to <code>false</code>. The default
   *             is <code>false</code>.</p>
   */
  RetainAllVariantProperties?: boolean;

  /**
   * <p>When you are updating endpoint resources with <a>UpdateEndpointInput$RetainAllVariantProperties</a>, whose value is set to
   *                 <code>true</code>, <code>ExcludeRetainedVariantProperties</code> specifies the list
   *             of type <a>VariantProperty</a> to override with the values provided by
   *                 <code>EndpointConfig</code>. If you don't specify a value for
   *                 <code>ExcludeAllVariantProperties</code>, no variant properties are overridden.
   *         </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   */
  RetainDeploymentConfig?: boolean;
}

export namespace UpdateEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * <p>The name of an existing SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesOutput): any => ({
    ...obj,
  });
}

export interface UpdateExperimentRequest {
  /**
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;
}

export namespace UpdateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
    ...obj,
  });
}

export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace UpdateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj,
  });
}

export interface UpdateFeatureGroupRequest {
  /**
   * <p>The name of the feature group that you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A list of the features that you're adding to the feature group.</p>
   */
  FeatureAdditions?: FeatureDefinition[];
}

export namespace UpdateFeatureGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFeatureGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupArn: string | undefined;
}

export namespace UpdateFeatureGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFeatureGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateFeatureMetadataRequest {
  /**
   * <p>The name of the feature group containing the feature that you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you're updating.</p>
   */
  FeatureName: string | undefined;

  /**
   * <p>A description that you can write to better describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>A list of key-value pairs that you can add to better describe the feature.</p>
   */
  ParameterAdditions?: FeatureParameter[];

  /**
   * <p>A list of parameter keys that you can specify to remove parameters that describe your feature.</p>
   */
  ParameterRemovals?: string[];
}

export namespace UpdateFeatureMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFeatureMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateImageRequest {
  /**
   * <p>A list of properties to delete. Only the <code>Description</code> and
   *         <code>DisplayName</code> properties can be deleted.</p>
   */
  DeleteProperties?: string[];

  /**
   * <p>The new description for the image.</p>
   */
  Description?: string;

  /**
   * <p>The new display name for the image.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the image to update.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The new Amazon Resource Name (ARN) for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace UpdateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageRequest): any => ({
    ...obj,
  });
}

export interface UpdateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export namespace UpdateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageResponse): any => ({
    ...obj,
  });
}

export interface UpdateModelPackageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The approval status of the model.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>A description for the approval status of the model.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>The metadata properties associated with the model package versions to remove.</p>
   */
  CustomerMetadataPropertiesToRemove?: string[];

  /**
   * <p>An array of additional Inference Specification objects to be added to the
   *     existing array additional Inference Specification. Total number of additional
   *     Inference Specifications can not exceed 15. Each additional Inference Specification
   *     specifies artifacts based on this model package that can be used on inference endpoints.
   *     Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];
}

export namespace UpdateModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageInput): any => ({
    ...obj,
  });
}

export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace UpdateModelPackageOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageOutput): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

export namespace UpdateMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace UpdateMonitoringScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn?: string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAdditionalCodeRepositories?: boolean;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export namespace UpdateNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceOutput {}

export namespace UpdateNotebookInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigOutput {}

export namespace UpdateNotebookInstanceLifecycleConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>If specified, it applies to all executions of this pipeline by default.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace UpdatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
}

export namespace UpdatePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineResponse): any => ({
    ...obj,
  });
}

export interface UpdatePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace UpdatePipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace UpdatePipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Details that you specify to provision a service catalog product.
 *             For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
 *         </p>
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * <p>The ID of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

export namespace ServiceCatalogProvisioningUpdateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCatalogProvisioningUpdateDetails): any => ({
    ...obj,
  });
}

export interface UpdateProjectInput {
  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The description for the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog.
   *             The provisioning artifact ID will default to the latest provisioning artifact
   *             ID of the product, if you don't provide the provisioning artifact ID. For more
   *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
   *         </p>
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your
   *             Amazon Web Services resources in different ways, for example, by purpose, owner, or
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
}

export namespace UpdateProjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectInput): any => ({
    ...obj,
  });
}

export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;
}

export namespace UpdateProjectOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectOutput): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];
}

export namespace UpdateTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace UpdateTrainingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialRequest {
  /**
   * <p>The name of the trial to update.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;
}

export namespace UpdateTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace UpdateTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

export namespace UpdateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace UpdateUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace UpdateUserProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *         name by using the  operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

export namespace UpdateWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace UpdateWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

export namespace UpdateWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;
}

export namespace SearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj,
  });
}

export interface SearchRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace SearchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj,
  });
}
