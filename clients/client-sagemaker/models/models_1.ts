import {
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmSummary,
  AlgorithmValidationSpecification,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppNetworkAccessType,
  AppSortKey,
  AppSpecification,
  AppStatus,
  AppType,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLJobArtifacts,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLJobSummary,
  AutoMLOutputDataConfig,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchStrategy,
  CandidateSortBy,
  CandidateStatus,
  Channel,
  CheckpointConfig,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CognitoConfig,
  CompilationJobStatus,
  CompilationJobSummary,
  ContainerDefinition,
  DataCaptureConfig,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DirectInternetAccess,
  ExperimentConfig,
  FlowDefinitionOutputConfig,
  GitConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceSpecification,
  InputConfig,
  KernelGatewayImageConfig,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  MemberDefinition,
  ModelClientConfig,
  ModelPackageValidationSpecification,
  MonitoringScheduleConfig,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  ObjectiveStatus,
  OutputConfig,
  OutputDataConfig,
  ProblemType,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariant,
  ResourceConfig,
  ResourceLimits,
  ResourceSpec,
  RetentionPolicy,
  RootAccess,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  StoppingCondition,
  Tag,
  TensorBoardOutputConfig,
  TrainingSpecification,
  TransformInput,
  TransformOutput,
  TransformResources,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UiTemplate,
  UserSettings,
  VpcConfig,
  _InstanceType,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface DeleteDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteEndpointInput {
  export const filterSensitiveLog = (obj: DeleteEndpointInput): any => ({
    ...obj,
  });
}

export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DeleteEndpointConfigInput {
  export const filterSensitiveLog = (obj: DeleteEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DeleteExperimentRequest {
  export const filterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
    ...obj,
  });
}

export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

export namespace DeleteExperimentResponse {
  export const filterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DeleteFlowDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowDefinitionResponse {}

export namespace DeleteFlowDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteFlowDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DeleteHumanTaskUiRequest {
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export interface DeleteHumanTaskUiResponse {}

export namespace DeleteHumanTaskUiResponse {
  export const filterSensitiveLog = (obj: DeleteHumanTaskUiResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageRequest {
  /**
   * <p>The name of the image to delete.</p>
   */
  ImageName: string | undefined;
}

export namespace DeleteImageRequest {
  export const filterSensitiveLog = (obj: DeleteImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageResponse {}

export namespace DeleteImageResponse {
  export const filterSensitiveLog = (obj: DeleteImageResponse): any => ({
    ...obj,
  });
}

export interface DeleteImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version to delete.</p>
   */
  Version: number | undefined;
}

export namespace DeleteImageVersionRequest {
  export const filterSensitiveLog = (obj: DeleteImageVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteImageVersionResponse {}

export namespace DeleteImageVersionResponse {
  export const filterSensitiveLog = (obj: DeleteImageVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

export namespace DeleteModelInput {
  export const filterSensitiveLog = (obj: DeleteModelInput): any => ({
    ...obj,
  });
}

export interface DeleteModelPackageInput {
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DeleteModelPackageInput {
  export const filterSensitiveLog = (obj: DeleteModelPackageInput): any => ({
    ...obj,
  });
}

export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DeleteMonitoringScheduleRequest {
  export const filterSensitiveLog = (obj: DeleteMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the Amazon SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DeleteNotebookInstanceInput {
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DeleteNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (obj: DeleteNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface DeleteTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsInput {
  export const filterSensitiveLog = (obj: DeleteTagsInput): any => ({
    ...obj,
  });
}

export interface DeleteTagsOutput {}

export namespace DeleteTagsOutput {
  export const filterSensitiveLog = (obj: DeleteTagsOutput): any => ({
    ...obj,
  });
}

export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

export namespace DeleteTrialRequest {
  export const filterSensitiveLog = (obj: DeleteTrialRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   */
  TrialArn?: string;
}

export namespace DeleteTrialResponse {
  export const filterSensitiveLog = (obj: DeleteTrialResponse): any => ({
    ...obj,
  });
}

export interface DeleteTrialComponentRequest {
  /**
   * <p>The name of the component to delete.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DeleteTrialComponentRequest {
  export const filterSensitiveLog = (obj: DeleteTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   */
  TrialComponentArn?: string;
}

export namespace DeleteTrialComponentResponse {
  export const filterSensitiveLog = (obj: DeleteTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DeleteUserProfileRequest {
  export const filterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkforceRequest {
  /**
   * <p>The name of the workforce.</p>
   */
  WorkforceName: string | undefined;
}

export namespace DeleteWorkforceRequest {
  export const filterSensitiveLog = (obj: DeleteWorkforceRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkforceResponse {}

export namespace DeleteWorkforceResponse {
  export const filterSensitiveLog = (obj: DeleteWorkforceResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkteamRequest {
  /**
   * <p>The name of the work team to delete.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DeleteWorkteamRequest {
  export const filterSensitiveLog = (obj: DeleteWorkteamRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkteamResponse {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   */
  Success: boolean | undefined;
}

export namespace DeleteWorkteamResponse {
  export const filterSensitiveLog = (obj: DeleteWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p>
 *         <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;
}

export namespace DeployedImage {
  export const filterSensitiveLog = (obj: DeployedImage): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DescribeAlgorithmInput {
  export const filterSensitiveLog = (obj: DescribeAlgorithmInput): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that Amazon SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export namespace DescribeAlgorithmOutput {
  export const filterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
    ...obj,
  });
}

export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;
}

export namespace DescribeAppRequest {
  export const filterSensitiveLog = (obj: DescribeAppRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

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
  Status?: AppStatus | string;

  /**
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity.</p>
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;
}

export namespace DescribeAppResponse {
  export const filterSensitiveLog = (obj: DescribeAppResponse): any => ({
    ...obj,
  });
}

export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   */
  AppImageConfigName: string | undefined;
}

export namespace DescribeAppImageConfigRequest {
  export const filterSensitiveLog = (obj: DescribeAppImageConfigRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export namespace DescribeAppImageConfigResponse {
  export const filterSensitiveLog = (obj: DescribeAppImageConfigResponse): any => ({
    ...obj,
  });
}

export interface DescribeAutoMLJobRequest {
  /**
   * <p>Request information about a job using that job's unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace DescribeAutoMLJobRequest {
  export const filterSensitiveLog = (obj: DescribeAutoMLJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

export namespace ResolvedAttributes {
  export const filterSensitiveLog = (obj: ResolvedAttributes): any => ({
    ...obj,
  });
}

export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of a job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the job's ARN.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the job's input data config.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that has read permission to
   *          the input data location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Returns the job's config.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the job's creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the job's end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the job's FailureReason.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns the job's BestCandidate.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the job's AutoMLJobStatus.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the job's AutoMLJobSecondaryStatus.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>Returns the job's output from GenerateCandidateDefinitionsOnly.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns information on the job's artifacts found in AutoMLJobArtifacts.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>This contains ProblemType, AutoMLJobObjective and CompletionCriteria. They're
   *          auto-inferred values, if not provided by you. If you do provide them, then they'll be the
   *          same as provided.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;
}

export namespace DescribeAutoMLJobResponse {
  export const filterSensitiveLog = (obj: DescribeAutoMLJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DescribeCodeRepositoryInput {
  export const filterSensitiveLog = (obj: DescribeCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the AWS Secrets
   *             Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: GitConfig;
}

export namespace DescribeCodeRepositoryOutput {
  export const filterSensitiveLog = (obj: DescribeCodeRepositoryOutput): any => ({
    ...obj,
  });
}

export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace DescribeCompilationJobRequest {
  export const filterSensitiveLog = (obj: DescribeCompilationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *         <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model defintion that desribes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

export namespace ModelArtifacts {
  export const filterSensitiveLog = (obj: ModelArtifacts): any => ({
    ...obj,
  });
}

export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *         <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;
}

export namespace DescribeCompilationJobResponse {
  export const filterSensitiveLog = (obj: DescribeCompilationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeDomainRequest {
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj,
  });
}

export enum DomainStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The SSO managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>Settings which are applied to all UserProfiles in this domain, if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType | string;

  /**
   * <p>This member is deprecated and replaced with <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The AWS KMS customer managed CMK used to encrypt
   *          the EFS volume attached to the domain.</p>
   */
  KmsKeyId?: string;
}

export namespace DescribeDomainResponse {
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj,
  });
}

export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

export namespace DescribeEndpointInput {
  export const filterSensitiveLog = (obj: DescribeEndpointInput): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating",
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;
}

export namespace ProductionVariantSummary {
  export const filterSensitiveLog = (obj: ProductionVariantSummary): any => ({
    ...obj,
  });
}

export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint. </p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace DescribeEndpointOutput {
  export const filterSensitiveLog = (obj: DescribeEndpointOutput): any => ({
    ...obj,
  });
}

export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DescribeEndpointConfigInput {
  export const filterSensitiveLog = (obj: DescribeEndpointConfigInput): any => ({
    ...obj,
  });
}

export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the Amazon SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace DescribeEndpointConfigOutput {
  export const filterSensitiveLog = (obj: DescribeEndpointConfigOutput): any => ({
    ...obj,
  });
}

export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DescribeExperimentRequest {
  export const filterSensitiveLog = (obj: DescribeExperimentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user who created or modified an experiment, trial, or trial
 *       component.</p>
 */
export interface UserContext {
  /**
   * <p>The Amazon Resource Name (ARN) of the user's profile.</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The name of the user's profile.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The domain associated with the user.</p>
   */
  DomainId?: string;
}

export namespace UserContext {
  export const filterSensitiveLog = (obj: UserContext): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export namespace ExperimentSource {
  export const filterSensitiveLog = (obj: ExperimentSource): any => ({
    ...obj,
  });
}

export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ARN of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace DescribeExperimentResponse {
  export const filterSensitiveLog = (obj: DescribeExperimentResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DescribeFlowDefinitionRequest {
  export const filterSensitiveLog = (obj: DescribeFlowDefinitionRequest): any => ({
    ...obj,
  });
}

export enum FlowDefinitionStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
}

export interface DescribeFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   */
  FailureReason?: string;
}

export namespace DescribeFlowDefinitionResponse {
  export const filterSensitiveLog = (obj: DescribeFlowDefinitionResponse): any => ({
    ...obj,
  });
}

export interface DescribeHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface
   *       (worker task template) you want information about.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DescribeHumanTaskUiRequest {
  export const filterSensitiveLog = (obj: DescribeHumanTaskUiRequest): any => ({
    ...obj,
  });
}

export enum HumanTaskUiStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
}

/**
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;
}

export namespace UiTemplateInfo {
  export const filterSensitiveLog = (obj: UiTemplateInfo): any => ({
    ...obj,
  });
}

export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface (worker task template).</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | string;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;
}

export namespace DescribeHumanTaskUiResponse {
  export const filterSensitiveLog = (obj: DescribeHumanTaskUiResponse): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace DescribeHyperParameterTuningJobRequest {
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalHyperParameterTuningJobObjectiveMetric {
  export const filterSensitiveLog = (obj: FinalHyperParameterTuningJobObjectiveMetric): any => ({
    ...obj,
  });
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Specifies
 *             summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: { [key: string]: string } | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *         <ul>
   *             <li>
   *                 <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus | string;
}

export namespace HyperParameterTrainingJobSummary {
  export const filterSensitiveLog = (obj: HyperParameterTrainingJobSummary): any => ({
    ...obj,
  });
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

export namespace ObjectiveStatusCounters {
  export const filterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
    ...obj,
  });
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export namespace TrainingJobStatusCounters {
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;
}

export namespace DescribeHyperParameterTuningJobResponse {
  export const filterSensitiveLog = (obj: DescribeHyperParameterTuningJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   */
  ImageName: string | undefined;
}

export namespace DescribeImageRequest {
  export const filterSensitiveLog = (obj: DescribeImageRequest): any => ({
    ...obj,
  });
}

export enum ImageStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The name of the image.</p>
   */
  ImageName?: string;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus?: ImageStatus | string;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace DescribeImageResponse {
  export const filterSensitiveLog = (obj: DescribeImageResponse): any => ({
    ...obj,
  });
}

export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionRequest {
  export const filterSensitiveLog = (obj: DescribeImageVersionRequest): any => ({
    ...obj,
  });
}

export enum ImageVersionStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   */
  BaseImage?: string;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   */
  ContainerImage?: string;

  /**
   * <p>When the version was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn?: string;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn?: string;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus?: ImageVersionStatus | string;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The version number.</p>
   */
  Version?: number;
}

export namespace DescribeImageVersionResponse {
  export const filterSensitiveLog = (obj: DescribeImageVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeLabelingJobRequest {
  /**
   * <p>The name of the labeling job to return information for.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace DescribeLabelingJobRequest {
  export const filterSensitiveLog = (obj: DescribeLabelingJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

export namespace LabelCounters {
  export const filterSensitiveLog = (obj: LabelCounters): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent Amazon SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

export namespace LabelingJobOutput {
  export const filterSensitiveLog = (obj: LabelingJobOutput): any => ({
    ...obj,
  });
}

export enum LabelingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeLabelingJobResponse {
  /**
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the job's output data and the AWS Key Management Service key ID for the key used to
   *             encrypt the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data
   *             objects. Please note the following label-category limits:</p>
   *         <ul>
   *             <li>
   *                 <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p>
   *             </li>
   *             <li>
   *                 <p>Box bounding labeling jobs (all): 10 labels</p>
   *             </li>
   *          </ul>
   *         <p>The file is a JSON structure in the following format:</p>
   *         <p>
   *             <code>{</code>
   *         </p>
   *         <p>
   *             <code> "document-version": "2018-11-28"</code>
   *         </p>
   *         <p>
   *             <code> "labels": [</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> ...</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label n</i>"</code>
   *         </p>
   *         <p>
   *             <code> }</code>
   *         </p>
   *         <p>
   *             <code> ]</code>
   *         </p>
   *         <p>
   *             <code>}</code>
   *         </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;
}

export namespace DescribeLabelingJobResponse {
  export const filterSensitiveLog = (obj: DescribeLabelingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelInput {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;
}

export namespace DescribeModelInput {
  export const filterSensitiveLog = (obj: DescribeModelInput): any => ({
    ...obj,
  });
}

export interface DescribeModelOutput {
  /**
   * <p>Name of the Amazon SageMaker model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export namespace DescribeModelOutput {
  export const filterSensitiveLog = (obj: DescribeModelOutput): any => ({
    ...obj,
  });
}

export interface DescribeModelPackageInput {
  /**
   * <p>The name of the model package to describe.</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DescribeModelPackageInput {
  export const filterSensitiveLog = (obj: DescribeModelPackageInput): any => ({
    ...obj,
  });
}

export enum ModelPackageStatus {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

export enum DetailedModelPackageStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted",
}

/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

export namespace ModelPackageStatusItem {
  export const filterSensitiveLog = (obj: ModelPackageStatusItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

export namespace ModelPackageStatusDetails {
  export const filterSensitiveLog = (obj: ModelPackageStatusDetails): any => ({
    ...obj,
  });
}

export interface DescribeModelPackageOutput {
  /**
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that Amazon SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Whether the model package is certified for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export namespace DescribeModelPackageOutput {
  export const filterSensitiveLog = (obj: DescribeModelPackageOutput): any => ({
    ...obj,
  });
}

export interface DescribeMonitoringScheduleRequest {
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DescribeMonitoringScheduleRequest {
  export const filterSensitiveLog = (obj: DescribeMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export enum ExecutionStatus {
  COMPLETED = "Completed",
  COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The name of teh endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;
}

export namespace MonitoringExecutionSummary {
  export const filterSensitiveLog = (obj: MonitoringExecutionSummary): any => ({
    ...obj,
  });
}

export enum ScheduleStatus {
  FAILED = "Failed",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  STOPPED = "Stopped",
}

export interface DescribeMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}

export namespace DescribeMonitoringScheduleResponse {
  export const filterSensitiveLog = (obj: DescribeMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DescribeNotebookInstanceInput {
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceInput): any => ({
    ...obj,
  });
}

export enum NotebookInstanceStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Updating = "Updating",
}

export interface DescribeNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>The name of the Amazon SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * <p>The AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The network interface IDs that Amazon SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *         </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>Describes whether Amazon SageMaker provides internet access to the notebook instance. If this
   *             value is set to <i>Disabled</i>, the notebook instance does not have
   *             internet access, and cannot connect to Amazon SageMaker training and endpoint services.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;
}

export namespace DescribeNotebookInstanceOutput {
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceOutput): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DescribeNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (obj: DescribeNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

export interface DescribeProcessingJobRequest {
  /**
   * <p>The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace DescribeProcessingJobRequest {
  export const filterSensitiveLog = (obj: DescribeProcessingJobRequest): any => ({
    ...obj,
  });
}

export enum ProcessingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeProcessingJobResponse {
  /**
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;
}

export namespace DescribeProcessingJobResponse {
  export const filterSensitiveLog = (obj: DescribeProcessingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeSubscribedWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace DescribeSubscribedWorkteamRequest {
  export const filterSensitiveLog = (obj: DescribeSubscribedWorkteamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;
}

export namespace SubscribedWorkteam {
  export const filterSensitiveLog = (obj: SubscribedWorkteam): any => ({
    ...obj,
  });
}

export interface DescribeSubscribedWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

export namespace DescribeSubscribedWorkteamResponse {
  export const filterSensitiveLog = (obj: DescribeSubscribedWorkteamResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrainingJobRequest {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace DescribeTrainingJobRequest {
  export const filterSensitiveLog = (obj: DescribeTrainingJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}

export namespace MetricData {
  export const filterSensitiveLog = (obj: MetricData): any => ({
    ...obj,
  });
}

export enum SecondaryStatus {
  COMPLETED = "Completed",
  DOWNLOADING = "Downloading",
  DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage",
  FAILED = "Failed",
  INTERRUPTED = "Interrupted",
  LAUNCHING_ML_INSTANCES = "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded",
  PREPARING_TRAINING_STACK = "PreparingTrainingStack",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  TRAINING = "Training",
  UPLOADING = "Uploading",
}

/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides
 *             additional details about a status that the training job has transitioned through. A
 *             training job can be in one of several states, for example, starting, downloading,
 *             training, or uploading. Within each state, there are a number of intermediate states.
 *             For example, within the starting state, Amazon SageMaker could be starting the training job or
 *             launching the ML instances. These transitional states are referred to as the job's
 *             secondary
 *             status.
 *             </p>
 *         <p></p>
 */
export interface SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *         <p>Status might be one of the following secondary statuses:</p>
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
  Status: SecondaryStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *         <p>Amazon SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>Launching
   *                                 requested ML instances.</p>
   *                         </li>
   *                   <li>
   *                             <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                         </li>
   *                   <li>
   *                             <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                         </li>
   *                   <li>
   *                             <p>Preparing the instances for training.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Downloading the training image.</p>
   *                         </li>
   *                   <li>
   *                             <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *         </important>
   *         <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For
   *             example, at the start of a training job, you might see the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

export namespace SecondaryStatusTransition {
  export const filterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
    ...obj,
  });
}

export interface DescribeTrainingJobResponse {
  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *         <p>Amazon SageMaker provides the following training job statuses:</p>
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
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a>SecondaryStatusTransition</a>.</p>
   *         <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of
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
   *                         <code>Interrupted</code> - The job stopped because the managed
   *                                 spot training instances were interrupted. </p>
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
   *                         <code>MaxWaitTimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed wait time.</p>
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
   *
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
  SecondaryStatus: SecondaryStatus | string | undefined;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies the
   *             maximum time to wait for a spot instance. When the job reaches the time limit, Amazon SageMaker ends
   *             the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
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
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
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
   *         <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
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
   * <p>Configuration information for debugging rules.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Status about the debug rule evaluation.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];
}

export namespace DescribeTrainingJobResponse {
  export const filterSensitiveLog = (obj: DescribeTrainingJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTransformJobRequest {
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   */
  TransformJobName: string | undefined;
}

export namespace DescribeTransformJobRequest {
  export const filterSensitiveLog = (obj: DescribeTransformJobRequest): any => ({
    ...obj,
  });
}

export enum TransformJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeTransformJobResponse {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes
   *             why
   *             it failed. A transform job creates a log file, which includes error
   *             messages, and stores it
   *             as
   *             an Amazon S3 object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with
   *                 Amazon CloudWatch</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request.
   *             A <i>record</i>
   *             <i></i> is a single unit of input data that inference
   *             can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set <code>SplitType</code>
   *             to
   *                 <code>Line</code>, <code>RecordIO</code>, or
   *             <code>TFRecord</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
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
}

export namespace DescribeTransformJobResponse {
  export const filterSensitiveLog = (obj: DescribeTransformJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrialRequest {
  /**
   * <p>The name of the trial to describe.</p>
   */
  TrialName: string | undefined;
}

export namespace DescribeTrialRequest {
  export const filterSensitiveLog = (obj: DescribeTrialRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialSource {
  export const filterSensitiveLog = (obj: TrialSource): any => ({
    ...obj,
  });
}

export interface DescribeTrialResponse {
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
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
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
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;
}

export namespace DescribeTrialResponse {
  export const filterSensitiveLog = (obj: DescribeTrialResponse): any => ({
    ...obj,
  });
}

export interface DescribeTrialComponentRequest {
  /**
   * <p>The name of the trial component to describe.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DescribeTrialComponentRequest {
  export const filterSensitiveLog = (obj: DescribeTrialComponentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;
}

export namespace TrialComponentMetricSummary {
  export const filterSensitiveLog = (obj: TrialComponentMetricSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 */
export interface TrialComponentSource {
  /**
   * <p>The source ARN.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialComponentSource {
  export const filterSensitiveLog = (obj: TrialComponentSource): any => ({
    ...obj,
  });
}

export interface DescribeTrialComponentResponse {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialComponentSource;

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
   * <p>Who created the component.</p>
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

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];
}

export namespace DescribeTrialComponentResponse {
  export const filterSensitiveLog = (obj: DescribeTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DescribeUserProfileRequest {
  export const filterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
    ...obj,
  });
}

export enum UserProfileStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeUserProfileResponse {
  /**
   * <p>The ID of the domain that contains the profile.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System (EFS) volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The SSO user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The SSO user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace DescribeUserProfileResponse {
  export const filterSensitiveLog = (obj: DescribeUserProfileResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorkforceRequest {
  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

export namespace DescribeWorkforceRequest {
  export const filterSensitiveLog = (obj: DescribeWorkforceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId?: string;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer?: string;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;
}

export namespace OidcConfigForResponse {
  export const filterSensitiveLog = (obj: OidcConfigForResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each AWS Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   */
  SubDomain?: string;

  /**
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;
}

export namespace Workforce {
  export const filterSensitiveLog = (obj: Workforce): any => ({
    ...obj,
  });
}

export interface DescribeWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each AWS Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace DescribeWorkforceResponse {
  export const filterSensitiveLog = (obj: DescribeWorkforceResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorkteamRequest {
  /**
   * <p>The name of the work team to return a description of.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DescribeWorkteamRequest {
  export const filterSensitiveLog = (obj: DescribeWorkteamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace Workteam {
  export const filterSensitiveLog = (obj: Workteam): any => ({
    ...obj,
  });
}

export interface DescribeWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   */
  Workteam: Workteam | undefined;
}

export namespace DescribeWorkteamResponse {
  export const filterSensitiveLog = (obj: DescribeWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  /**
   * <p>The name of the
   *             variant
   *             to update.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;
}

export namespace DesiredWeightAndCapacity {
  export const filterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
    ...obj,
  });
}

export interface DisassociateTrialComponentRequest {
  /**
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;
}

export namespace DisassociateTrialComponentRequest {
  export const filterSensitiveLog = (obj: DisassociateTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTrialComponentResponse {
  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace DisassociateTrialComponentResponse {
  export const filterSensitiveLog = (obj: DisassociateTrialComponentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

export namespace DomainDetails {
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
}

export enum EndpointConfigSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace EndpointConfigSummary {
  export const filterSensitiveLog = (obj: EndpointConfigSummary): any => ({
    ...obj,
  });
}

export enum EndpointSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   *         <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;
}

export namespace EndpointSummary {
  export const filterSensitiveLog = (obj: EndpointSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of an experiment as returned by the <a>Search</a> API.</p>
 */
export interface Experiment {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The list of tags that are associated with the experiment. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace Experiment {
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a>DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ExperimentSummary {
  export const filterSensitiveLog = (obj: ExperimentSummary): any => ({
    ...obj,
  });
}

export enum Operator {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo",
  IN = "In",
  LESS_THAN = "LessThan",
  LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo",
  NOT_EQUALS = "NotEquals",
  NOT_EXISTS = "NotExists",
}

/**
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a>Search</a> API.</p>
 *
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the
 *       equals operator.</p>
 *          <p>In search, there are several property types:</p>
 *          <dl>
 *             <dt>Metrics</dt>
 *             <dd>
 *                <p>To define a metric filter, enter a value using the form
 *             <code>"Metrics.<name>"</code>, where <code><name></code> is
 *             a metric name. For example, the following filter searches for training jobs
 *             with an <code>"accuracy"</code> metric greater than
 *             <code>"0.9"</code>:</p>
 *                <p>
 *                   <code>{</code>
 *                </p>
 *                <p>
 *                   <code>"Name": "Metrics.accuracy",</code>
 *                </p>
 *                <p>
 *                   <code>"Operator": "GreaterThan",</code>
 *                </p>
 *                <p>
 *                   <code>"Value": "0.9"</code>
 *                </p>
 *                <p>
 *                   <code>}</code>
 *                </p>
 *             </dd>
 *             <dt>HyperParameters</dt>
 *             <dd>
 *                <p>To define a hyperparameter filter, enter a value with the form
 *             <code>"HyperParameters.<name>"</code>. Decimal hyperparameter
 *             values are treated as a decimal in a comparison if the specified
 *             <code>Value</code> is also a decimal value. If the specified
 *             <code>Value</code> is an integer, the decimal hyperparameter values are
 *             treated as integers. For example, the following filter is satisfied by
 *             training jobs with a <code>"learning_rate"</code> hyperparameter that is
 *             less than <code>"0.5"</code>:</p>
 *                <p>
 *                   <code> {</code>
 *                </p>
 *                <p>
 *                   <code> "Name": "HyperParameters.learning_rate",</code>
 *                </p>
 *                <p>
 *                   <code> "Operator": "LessThan",</code>
 *                </p>
 *                <p>
 *                   <code> "Value": "0.5"</code>
 *                </p>
 *                <p>
 *                   <code> }</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>Tags.<key></code>.</p>
 *             </dd>
 *          </dl>
 */
export interface Filter {
  /**
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a>SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>A Boolean binary operator that is used to evaluate the filter. The operator field
   *       contains one of the following values:</p>
   *          <dl>
   *             <dt>Equals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> equals <code>Value</code>.</p>
   *             </dd>
   *             <dt>NotEquals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> doesn't equal <code>Value</code>.</p>
   *             </dd>
   *             <dt>Exists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property exists.</p>
   *             </dd>
   *             <dt>NotExists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property does not exist.</p>
   *             </dd>
   *             <dt>GreaterThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>GreaterThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>In</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is one of the comma delimited strings in
   *             <code>Value</code>. Only supported for text properties.</p>
   *             </dd>
   *             <dt>Contains</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> contains the string <code>Value</code>.
   *             Only supported for text properties.</p>
   *                <p>A <code>SearchExpression</code> can include the <code>Contains</code> operator
   *             multiple times when the value of <code>Name</code> is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.ExperimentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.TrialName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.TrialComponentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.InputArtifacts</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.OutputArtifacts</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>A <code>SearchExpression</code> can include only one <code>Contains</code> operator
   *             for all other values of <code>Name</code>. In these cases, if you include multiple
   *             <code>Contains</code> operators in the <code>SearchExpression</code>, the result is
   *             the following error message: "<code>'CONTAINS' operator usage limit of 1
   *             exceeded.</code>"</p>
   *             </dd>
   *          </dl>
   */
  Operator?: Operator | string;

  /**
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

export namespace FlowDefinitionSummary {
  export const filterSensitiveLog = (obj: FlowDefinitionSummary): any => ({
    ...obj,
  });
}

export enum ResourceType {
  EXPERIMENT = "Experiment",
  EXPERIMENT_TRIAL = "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent",
  TRAINING_JOB = "TrainingJob",
}

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

export namespace PropertyNameQuery {
  export const filterSensitiveLog = (obj: PropertyNameQuery): any => ({
    ...obj,
  });
}

/**
 * <p>Specified in the <a>GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

export namespace SuggestionQuery {
  export const filterSensitiveLog = (obj: SuggestionQuery): any => ({
    ...obj,
  });
}

export interface GetSearchSuggestionsRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

export namespace GetSearchSuggestionsRequest {
  export const filterSensitiveLog = (obj: GetSearchSuggestionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the Amazon SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

export namespace PropertyNameSuggestion {
  export const filterSensitiveLog = (obj: PropertyNameSuggestion): any => ({
    ...obj,
  });
}

export interface GetSearchSuggestionsResponse {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

export namespace GetSearchSuggestionsResponse {
  export const filterSensitiveLog = (obj: GetSearchSuggestionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;
}

export namespace GitConfigForUpdate {
  export const filterSensitiveLog = (obj: GitConfigForUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

export namespace HumanTaskUiSummary {
  export const filterSensitiveLog = (obj: HumanTaskUiSummary): any => ({
    ...obj,
  });
}

export enum HyperParameterTuningJobSortByOptions {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             use
   *             for each iteration. Currently, the only valid value is
   *             Bayesian.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

export namespace HyperParameterTuningJobSummary {
  export const filterSensitiveLog = (obj: HyperParameterTuningJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | string | undefined;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace Image {
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export enum ImageSortBy {
  CREATION_TIME = "CREATION_TIME",
  IMAGE_NAME = "IMAGE_NAME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
}

export enum ImageSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | string | undefined;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

export namespace ImageVersion {
  export const filterSensitiveLog = (obj: ImageVersion): any => ({
    ...obj,
  });
}

export enum ImageVersionSortBy {
  CREATION_TIME = "CREATION_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  VERSION = "VERSION",
}

export enum ImageVersionSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

export namespace LabelCountersForWorkteam {
  export const filterSensitiveLog = (obj: LabelCountersForWorkteam): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p></p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

export namespace LabelingJobForWorkteamSummary {
  export const filterSensitiveLog = (obj: LabelingJobForWorkteamSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

export namespace LabelingJobSummary {
  export const filterSensitiveLog = (obj: LabelingJobSummary): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListAlgorithmsInput {
  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListAlgorithmsInput {
  export const filterSensitiveLog = (obj: ListAlgorithmsInput): any => ({
    ...obj,
  });
}

export interface ListAlgorithmsOutput {
  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListAlgorithmsOutput {
  export const filterSensitiveLog = (obj: ListAlgorithmsOutput): any => ({
    ...obj,
  });
}

export interface ListAppImageConfigsRequest {
  /**
   * <p>The maximum number of AppImageConfigs to return in the response. The default value is
   *         10. </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *         AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: AppImageConfigSortKey | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListAppImageConfigsRequest {
  export const filterSensitiveLog = (obj: ListAppImageConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListAppImageConfigsResponse {
  /**
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of AppImageConfigs and their properties.</p>
   */
  AppImageConfigs?: AppImageConfigDetails[];
}

export namespace ListAppImageConfigsResponse {
  export const filterSensitiveLog = (obj: ListAppImageConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListAppsRequest {
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
  SortBy?: AppSortKey | string;

  /**
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter to search by user profile name.</p>
   */
  UserProfileNameEquals?: string;
}

export namespace ListAppsRequest {
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj,
  });
}

export interface ListAppsResponse {
  /**
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAppsResponse {
  export const filterSensitiveLog = (obj: ListAppsResponse): any => ({
    ...obj,
  });
}

export interface ListAutoMLJobsRequest {
  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus | string;

  /**
   * <p>The sort order for the results. The default is Descending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is AutoMLJobName.</p>
   */
  SortBy?: AutoMLSortBy | string;

  /**
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAutoMLJobsRequest {
  export const filterSensitiveLog = (obj: ListAutoMLJobsRequest): any => ({
    ...obj,
  });
}

export interface ListAutoMLJobsResponse {
  /**
   * <p>Returns a summary list of jobs.</p>
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAutoMLJobsResponse {
  export const filterSensitiveLog = (obj: ListAutoMLJobsResponse): any => ({
    ...obj,
  });
}

export interface ListCandidatesForAutoMLJobRequest {
  /**
   * <p>List the Candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>List the Candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus | string;

  /**
   * <p>List the Candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is Descending.</p>
   */
  SortBy?: CandidateSortBy | string;

  /**
   * <p>List the job's Candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListCandidatesForAutoMLJobRequest {
  export const filterSensitiveLog = (obj: ListCandidatesForAutoMLJobRequest): any => ({
    ...obj,
  });
}

export interface ListCandidatesForAutoMLJobResponse {
  /**
   * <p>Summaries about the Candidates.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListCandidatesForAutoMLJobResponse {
  export const filterSensitiveLog = (obj: ListCandidatesForAutoMLJobResponse): any => ({
    ...obj,
  });
}

export interface ListCodeRepositoriesInput {
  /**
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder | string;
}

export namespace ListCodeRepositoriesInput {
  export const filterSensitiveLog = (obj: ListCodeRepositoriesInput): any => ({
    ...obj,
  });
}

export interface ListCodeRepositoriesOutput {
  /**
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *         <ul>
   *             <li>
   *                 <p>Name</p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                 <p>Creation time</p>
   *             </li>
   *             <li>
   *                 <p>Last modified time</p>
   *             </li>
   *             <li>
   *                 <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the AWS Secrets Manager secret that contains the credentials used
   *                     to access the repository.</p>
   *             </li>
   *          </ul>
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCodeRepositoriesOutput {
  export const filterSensitiveLog = (obj: ListCodeRepositoriesOutput): any => ({
    ...obj,
  });
}

export enum ListCompilationJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListCompilationJobsRequest {
  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <a>DescribeCompilationJobResponse$CompilationJobStatus</a> status.</p>
   */
  StatusEquals?: CompilationJobStatus | string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListCompilationJobsRequest {
  export const filterSensitiveLog = (obj: ListCompilationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListCompilationJobsResponse {
  /**
   * <p>An array of <a>CompilationJobSummary</a> objects, each describing a model
   *             compilation job. </p>
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCompilationJobsResponse {
  export const filterSensitiveLog = (obj: ListCompilationJobsResponse): any => ({
    ...obj,
  });
}

export interface ListDomainsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;
}

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
}

export interface ListDomainsResponse {
  /**
   * <p>The list of domains.</p>
   */
  Domains?: DomainDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
}

export enum OrderKey {
  Ascending = "Ascending",
  Descending = "Descending",
}

export interface ListEndpointConfigsInput {
  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListEndpointConfigsInput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsInput): any => ({
    ...obj,
  });
}

export interface ListEndpointConfigsOutput {
  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
}

export namespace ListEndpointConfigsOutput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsOutput): any => ({
    ...obj,
  });
}

export interface ListEndpointsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus | string;
}

export namespace ListEndpointsInput {
  export const filterSensitiveLog = (obj: ListEndpointsInput): any => ({
    ...obj,
  });
}

export interface ListEndpointsOutput {
  /**
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListEndpointsOutput {
  export const filterSensitiveLog = (obj: ListEndpointsOutput): any => ({
    ...obj,
  });
}

export enum SortExperimentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListExperimentsRequest {
  /**
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of experiments to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;
}

export namespace ListExperimentsRequest {
  export const filterSensitiveLog = (obj: ListExperimentsRequest): any => ({
    ...obj,
  });
}

export interface ListExperimentsResponse {
  /**
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];

  /**
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListExperimentsResponse {
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsRequest {
  /**
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

export namespace ListFlowDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListFlowDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsResponse {
  /**
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListFlowDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListFlowDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListHumanTaskUisRequest {
  /**
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

export namespace ListHumanTaskUisRequest {
  export const filterSensitiveLog = (obj: ListHumanTaskUisRequest): any => ({
    ...obj,
  });
}

export interface ListHumanTaskUisResponse {
  /**
   * <p>An array of objects describing the human task user interfaces.</p>
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListHumanTaskUisResponse {
  export const filterSensitiveLog = (obj: ListHumanTaskUisResponse): any => ({
    ...obj,
  });
}

export interface ListHyperParameterTuningJobsRequest {
  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The
   *             field
   *             to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions | string;

  /**
   * <p>The sort
   *             order
   *             for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created after the
   *             specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were created before the
   *             specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus | string;
}

export namespace ListHyperParameterTuningJobsRequest {
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsRequest): any => ({
    ...obj,
  });
}

export interface ListHyperParameterTuningJobsResponse {
  /**
   * <p>A list of <a>HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListHyperParameterTuningJobsResponse {
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsResponse): any => ({
    ...obj,
  });
}

export interface ListImagesRequest {
  /**
   * <p>A filter that returns only images created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only images created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only images modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only images modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of images to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only images whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images,
   *         the call returns a token for getting the next set of images.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageSortBy | string;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageSortOrder | string;
}

export namespace ListImagesRequest {
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj,
  });
}

export interface ListImagesResponse {
  /**
   * <p>A list of images and their properties.</p>
   */
  Images?: Image[];

  /**
   * <p>A token for getting the next set of images, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListImagesResponse {
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj,
  });
}

export interface ListImageVersionsRequest {
  /**
   * <p>A filter that returns only versions created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only versions created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The name of the image to list the versions of.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>A filter that returns only versions modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only versions modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of versions to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of
   *         versions, the call returns a token for getting the next set of versions.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageVersionSortBy | string;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageVersionSortOrder | string;
}

export namespace ListImageVersionsRequest {
  export const filterSensitiveLog = (obj: ListImageVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListImageVersionsResponse {
  /**
   * <p>A list of versions and their properties.</p>
   */
  ImageVersions?: ImageVersion[];

  /**
   * <p>A token for getting the next set of versions, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListImageVersionsResponse {
  export const filterSensitiveLog = (obj: ListImageVersionsResponse): any => ({
    ...obj,
  });
}

export enum SortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListLabelingJobsRequest {
  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   */
  StatusEquals?: LabelingJobStatus | string;
}

export namespace ListLabelingJobsRequest {
  export const filterSensitiveLog = (obj: ListLabelingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListLabelingJobsResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsResponse {
  export const filterSensitiveLog = (obj: ListLabelingJobsResponse): any => ({
    ...obj,
  });
}

export enum ListLabelingJobsForWorkteamSortByOptions {
  CREATION_TIME = "CreationTime",
}

export interface ListLabelingJobsForWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListLabelingJobsForWorkteamRequest {
  export const filterSensitiveLog = (obj: ListLabelingJobsForWorkteamRequest): any => ({
    ...obj,
  });
}

export interface ListLabelingJobsForWorkteamResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsForWorkteamResponse {
  export const filterSensitiveLog = (obj: ListLabelingJobsForWorkteamResponse): any => ({
    ...obj,
  });
}

export enum ModelPackageSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListModelPackagesInput {
  /**
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListModelPackagesInput {
  export const filterSensitiveLog = (obj: ListModelPackagesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;
}

export namespace ModelPackageSummary {
  export const filterSensitiveLog = (obj: ModelPackageSummary): any => ({
    ...obj,
  });
}

export interface ListModelPackagesOutput {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelPackagesOutput {
  export const filterSensitiveLog = (obj: ListModelPackagesOutput): any => ({
    ...obj,
  });
}

export enum ModelSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

export interface ListModelsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the training job name. This filter returns only models in the training
   *             job whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

export namespace ListModelsInput {
  export const filterSensitiveLog = (obj: ListModelsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace ModelSummary {
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj,
  });
}

export interface ListModelsOutput {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListModelsOutput {
  export const filterSensitiveLog = (obj: ListModelsOutput): any => ({
    ...obj,
  });
}

export enum MonitoringExecutionSortKey {
  CREATION_TIME = "CreationTime",
  SCHEDULED_TIME = "ScheduledTime",
  STATUS = "Status",
}

export interface ListMonitoringExecutionsRequest {
  /**
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus | string;
}

export namespace ListMonitoringExecutionsRequest {
  export const filterSensitiveLog = (obj: ListMonitoringExecutionsRequest): any => ({
    ...obj,
  });
}

export interface ListMonitoringExecutionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent reques</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringExecutionsResponse {
  export const filterSensitiveLog = (obj: ListMonitoringExecutionsResponse): any => ({
    ...obj,
  });
}

export enum MonitoringScheduleSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListMonitoringSchedulesRequest {
  /**
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringScheduleSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus | string;
}

export namespace ListMonitoringSchedulesRequest {
  export const filterSensitiveLog = (obj: ListMonitoringSchedulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;
}

export namespace MonitoringScheduleSummary {
  export const filterSensitiveLog = (obj: MonitoringScheduleSummary): any => ({
    ...obj,
  });
}

export interface ListMonitoringSchedulesResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent reques</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringSchedulesResponse {
  export const filterSensitiveLog = (obj: ListMonitoringSchedulesResponse): any => ({
    ...obj,
  });
}

export enum NotebookInstanceLifecycleConfigSortKey {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name",
}

export enum NotebookInstanceLifecycleConfigSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | string;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;
}

export namespace ListNotebookInstanceLifecycleConfigsInput {
  export const filterSensitiveLog = (obj: ListNotebookInstanceLifecycleConfigsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace NotebookInstanceLifecycleConfigSummary {
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleConfigSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}

export namespace ListNotebookInstanceLifecycleConfigsOutput {
  export const filterSensitiveLog = (obj: ListNotebookInstanceLifecycleConfigsOutput): any => ({
    ...obj,
  });
}

export enum NotebookInstanceSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum NotebookInstanceSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListNotebookInstancesInput {
  /**
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *         <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *         </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey | string;

  /**
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder | string;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus | string;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;
}

export namespace ListNotebookInstancesInput {
  export const filterSensitiveLog = (obj: ListNotebookInstancesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an Amazon SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The
   *             URL that you use to connect to the Jupyter instance running in your notebook instance.
   *             </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

export namespace NotebookInstanceSummary {
  export const filterSensitiveLog = (obj: NotebookInstanceSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookInstancesOutput {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

export namespace ListNotebookInstancesOutput {
  export const filterSensitiveLog = (obj: ListNotebookInstancesOutput): any => ({
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
  export const filterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
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
   * <p> If the response to the previous <code>ListTags</code> request is truncated, Amazon SageMaker
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
   * <p> If response is truncated, Amazon SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;
}

export namespace ListTagsOutput {
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
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListTrainingJobsResponse {
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
   * <p>A filter that returns only training jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>The field to sort
   *             results
   *             by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order
   *             for
   *             results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobRequest {
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
   * <p>The maximum number of
   *             transform
   *             jobs to return in the response. The default value is
   *             <code>10</code>.</p>
   */
  MaxResults?: number;
}

export namespace ListTransformJobsRequest {
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
   * <p>Who created the component.</p>
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
  export const filterSensitiveLog = (obj: ListWorkteamsResponse): any => ({
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
  export const filterSensitiveLog = (obj: Parent): any => ({
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
   * <p>For each input, data is downloaded from S3 into the processing container before the
   *             processing job begins running if "S3InputMode" is set to <code>File</code>.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>The output configuration for the processing job.</p>
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
   * <p>Specifies a time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

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
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace ProcessingJob {
  export const filterSensitiveLog = (obj: ProcessingJob): any => ({
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
  export const filterSensitiveLog = (obj: RenderUiTemplateResponse): any => ({
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
   *         <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of
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
  HyperParameters?: { [key: string]: string };

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts.</p>
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
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
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
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
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
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
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
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace TrainingJob {
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;
}

export namespace TrialComponentSimpleSummary {
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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

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
  Environment?: { [key: string]: string };

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
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

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
  export const filterSensitiveLog = (obj: TrialComponent): any => ({
    ...obj,
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
}

export namespace SearchRecord {
  export const filterSensitiveLog = (obj: SearchRecord): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: SearchResponse): any => ({
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
  export const filterSensitiveLog = (obj: StartNotebookInstanceInput): any => ({
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
  export const filterSensitiveLog = (obj: StopCompilationJobRequest): any => ({
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
  export const filterSensitiveLog = (obj: StopHyperParameterTuningJobRequest): any => ({
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
  export const filterSensitiveLog = (obj: StopNotebookInstanceInput): any => ({
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
  export const filterSensitiveLog = (obj: StopTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface StopTransformJobRequest {
  /**
   * <p>The name of the transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

export namespace StopTransformJobRequest {
  export const filterSensitiveLog = (obj: StopTransformJobRequest): any => ({
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
  export const filterSensitiveLog = (obj: UpdateAppImageConfigResponse): any => ({
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
   *             Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to
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
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
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
}

export namespace UpdateDomainRequest {
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
  export const filterSensitiveLog = (obj: VariantProperty): any => ({
    ...obj,
  });
}
