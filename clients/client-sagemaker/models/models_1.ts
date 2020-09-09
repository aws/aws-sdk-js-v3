import {
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmSummary,
  AlgorithmValidationSpecification,
  AppDetails,
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
  BooleanOperator,
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
  OidcConfig,
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
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
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
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;
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
   * <p>Whether the algorithm is certified to be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about configurations for one or more training jobs that Amazon SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DescribeAlgorithmOutput {
  export const filterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
    ...obj,
  });
}

export interface DescribeAppRequest {
  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeAppRequest {
  export const filterSensitiveLog = (obj: DescribeAppRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppResponse {
  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The app's Amazon Resource Name (ARN).</p>
   */
  AppArn?: string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

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
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;
}

export namespace DescribeAppResponse {
  export const filterSensitiveLog = (obj: DescribeAppResponse): any => ({
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
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>Applies a metric to minimize or maximize for the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;
}

export namespace ResolvedAttributes {
  export const filterSensitiveLog = (obj: ResolvedAttributes): any => ({
    ...obj,
  });
}

export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the job's creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the job's BestCandidate.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the job's end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the name of a job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the job's ARN.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the job's output from GenerateCandidateDefinitionsOnly.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns the job's FailureReason.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns information on the job's artifacts found in AutoMLJobArtifacts.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>Returns the job's AutoMLJobSecondaryStatus.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>This contains ProblemType, AutoMLJobObjective and CompletionCriteria. They're
   *          auto-inferred values, if not provided by you. If you do provide them, then they'll be the
   *          same as provided.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Returns the job's AutoMLJobStatus.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the job's config.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that has read permission to
   *          the input data location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's input data config.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the AWS Secrets
   *             Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: GitConfig;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;
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
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *         <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

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

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;
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
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
}

export interface DescribeDomainResponse {
  /**
   * <p>Settings which are applied to all UserProfile in this domain, if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>The AWS Key Management Service encryption key ID.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>Security setting to limit to a set of subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud.</p>
   */
  VpcId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The SSO managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;
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
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];
}

export namespace ProductionVariantSummary {
  export const filterSensitiveLog = (obj: ProductionVariantSummary): any => ({
    ...obj,
  });
}

export interface DescribeEndpointOutput {
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
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint. </p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;
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
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Name of the Amazon SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
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
   * <p>The domain associated with the user.</p>
   */
  DomainId?: string;

  /**
   * <p>The name of the user's profile.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user's profile.</p>
   */
  UserProfileArn?: string;
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
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The ARN of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
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
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
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
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;

  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;
}

export namespace UiTemplateInfo {
  export const filterSensitiveLog = (obj: UiTemplateInfo): any => ({
    ...obj,
  });
}

export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The name of the human task user interface (worker task template).</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | string;
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
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;
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
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

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
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

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
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
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

  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;
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
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;
}

export namespace TrainingJobStatusCounters {
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj,
  });
}

export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

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
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

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
   * <p>The Amazon Resource Name (ARN) for the most recent Amazon SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;

  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;
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
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

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
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

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
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

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
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

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
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

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
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;
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
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Configurations for one or more transform jobs that Amazon SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>Whether the model package is certified for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;
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
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of teh endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;
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
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

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
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
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
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The name of the Amazon SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The network interface IDs that Amazon SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

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
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>The AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

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
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

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
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;
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

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;
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
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;
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
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;
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
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;
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

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

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
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;
}

export namespace SecondaryStatusTransition {
  export const filterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
    ...obj,
  });
}

export interface DescribeTrainingJobResponse {
  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

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
   *                         <code>MaxWaitTmeExceeded</code> - The job stopped because it
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
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The billable time in seconds.</p>
   *         <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>Configuration information for debugging rules.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

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
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>Status about the debug rule evaluation.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: { [key: string]: string };
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
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

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
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

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
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

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
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;
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
   * <p>The source job type.</p>
   */
  SourceType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;
}

export namespace TrialSource {
  export const filterSensitiveLog = (obj: TrialSource): any => ({
    ...obj,
  });
}

export interface DescribeTrialResponse {
  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialSource;
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
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;
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
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>Who created the component.</p>
   */
  CreatedBy?: UserContext;

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
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace DescribeTrialComponentResponse {
  export const filterSensitiveLog = (obj: DescribeTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserProfileRequest {
  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeUserProfileRequest {
  export const filterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
    ...obj,
  });
}

export enum UserProfileStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
}

export interface DescribeUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The SSO user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System (EFS) volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;

  /**
   * <p>The SSO user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The ID of the domain that contains the profile.</p>
   */
  DomainId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;
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
 * <p>Your Amazon Cognito workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

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
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

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
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;
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
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * <p>The Amazon Cognito user groups that make up the work team.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;
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
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;
}

export namespace DesiredWeightAndCapacity {
  export const filterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
    ...obj,
  });
}

export interface DisassociateTrialComponentRequest {
  /**
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;
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
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

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

  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;
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
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;
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
   * <p>The list of tags that are associated with the experiment. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

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
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;
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
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;
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
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;

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
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
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
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;

  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

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
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

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
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace HyperParameterTuningJobSummary {
  export const filterSensitiveLog = (obj: HyperParameterTuningJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;

  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;
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
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;

  /**
   * <p></p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;
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
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;

  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;
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
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

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
}

export namespace ListAlgorithmsInput {
  export const filterSensitiveLog = (obj: ListAlgorithmsInput): any => ({
    ...obj,
  });
}

export interface ListAlgorithmsOutput {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;
}

export namespace ListAlgorithmsOutput {
  export const filterSensitiveLog = (obj: ListAlgorithmsOutput): any => ({
    ...obj,
  });
}

export interface ListAppsRequest {
  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A parameter to search by user profile name.</p>
   */
  UserProfileNameEquals?: string;

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
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: AppSortKey | string;

  /**
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;
}

export namespace ListAppsRequest {
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj,
  });
}

export interface ListAppsResponse {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];
}

export namespace ListAppsResponse {
  export const filterSensitiveLog = (obj: ListAppsResponse): any => ({
    ...obj,
  });
}

export interface ListAutoMLJobsRequest {
  /**
   * <p>The parameter by which to sort the results. The default is AutoMLJobName.</p>
   */
  SortBy?: AutoMLSortBy | string;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus | string;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * <p>The sort order for the results. The default is Descending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
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
   * <p>List the Candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus | string;

  /**
   * <p>The parameter by which to sort the results. The default is Descending.</p>
   */
  SortBy?: CandidateSortBy | string;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>List the job's Candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>List the Candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List the Candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
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
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder | string;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy | string;
}

export namespace ListCodeRepositoriesInput {
  export const filterSensitiveLog = (obj: ListCodeRepositoriesInput): any => ({
    ...obj,
  });
}

export interface ListCodeRepositoriesOutput {
  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

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
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy | string;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <a>DescribeCompilationJobResponse$CompilationJobStatus</a> status.</p>
   */
  StatusEquals?: CompilationJobStatus | string;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;
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
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
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
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

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
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;
}

export namespace ListEndpointConfigsInput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsInput): any => ({
    ...obj,
  });
}

export interface ListEndpointConfigsOutput {
  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;

  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;
}

export namespace ListEndpointConfigsOutput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsOutput): any => ({
    ...obj,
  });
}

export interface ListEndpointsInput {
  /**
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus | string;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey | string;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

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
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

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
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy | string;

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
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];
}

export namespace ListExperimentsResponse {
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsRequest {
  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;
}

export namespace ListFlowDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListFlowDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface ListFlowDefinitionsResponse {
  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;
}

export namespace ListFlowDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListFlowDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListHumanTaskUisRequest {
  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

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
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;
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
   * <p>A filter that returns only tuning jobs that were created after the
   *             specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created before the
   *             specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only tuning jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus | string;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

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
}

export namespace ListHyperParameterTuningJobsRequest {
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsRequest): any => ({
    ...obj,
  });
}

export interface ListHyperParameterTuningJobsResponse {
  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <a>HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;
}

export namespace ListHyperParameterTuningJobsResponse {
  export const filterSensitiveLog = (obj: ListHyperParameterTuningJobsResponse): any => ({
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
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

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

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;
}

export namespace ListLabelingJobsRequest {
  export const filterSensitiveLog = (obj: ListLabelingJobsRequest): any => ({
    ...obj,
  });
}

export interface ListLabelingJobsResponse {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];
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
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | string;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;
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
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy | string;

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
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;
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
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;
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
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

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
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;
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
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;
}

export namespace ModelSummary {
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj,
  });
}

export interface ListModelsOutput {
  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;
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
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey | string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus | string;

  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;
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
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

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
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus | string;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;
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
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
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
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | string;
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
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;
}

export namespace NotebookInstanceLifecycleConfigSummary {
  export const filterSensitiveLog = (obj: NotebookInstanceLifecycleConfigSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;
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
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

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
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey | string;

  /**
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder | string;

  /**
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus | string;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

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
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

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
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The
   *             URL that you use to connect to the Jupyter instance running in your notebook instance.
   *             </p>
   */
  Url?: string;
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
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   */
  StatusEquals?: ProcessingJobStatus | string;

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

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;
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
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;
}

export namespace ProcessingJobSummary {
  export const filterSensitiveLog = (obj: ProcessingJobSummary): any => ({
    ...obj,
  });
}

export interface ListProcessingJobsResponse {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;
}

export namespace ListProcessingJobsResponse {
  export const filterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
    ...obj,
  });
}

export interface ListSubscribedWorkteamsRequest {
  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

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
   * <p>Maximum number of tags to return.</p>
   */
  MaxResults?: number;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, Amazon SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListTagsInput {
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj,
  });
}

export interface ListTagsOutput {
  /**
   * <p> If response is truncated, Amazon SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsOutput {
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsRequest {
  /**
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;

  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;
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
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

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
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace TrainingJobSummary {
  export const filterSensitiveLog = (obj: TrainingJobSummary): any => ({
    ...obj,
  });
}

export interface ListTrainingJobsResponse {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;
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
   * <p>The field to sort
   *             results
   *             by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order
   *             for
   *             results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>A filter that returns only training jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;
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
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?: TransformJobStatus | string;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

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

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;
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
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

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
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;
}

export namespace TransformJobSummary {
  export const filterSensitiveLog = (obj: TransformJobSummary): any => ({
    ...obj,
  });
}

export interface ListTransformJobsResponse {
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;
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
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource Name
   *       (ARN). If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
   *       or <code>TrialName</code>.</p>
   */
  SourceArn?: string;

  /**
   * <p>The maximum number of components to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;

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
   * <p>A filter that returns only components created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialComponentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
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
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Who created the component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;
}

export namespace TrialComponentSummary {
  export const filterSensitiveLog = (obj: TrialComponentSummary): any => ({
    ...obj,
  });
}

export interface ListTrialComponentsResponse {
  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the summaries of your trial components.</p>
   */
  TrialComponentSummaries?: TrialComponentSummary[];
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
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the
   *       call returns a token for getting the next set of trials.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only trials that are associated with the specified trial
   *       component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   */
  CreatedBefore?: Date;
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
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;
}

export namespace TrialSummary {
  export const filterSensitiveLog = (obj: TrialSummary): any => ({
    ...obj,
  });
}

export interface ListTrialsResponse {
  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the summaries of your trials.</p>
   */
  TrialSummaries?: TrialSummary[];
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
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  UserProfileNameContains?: string;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: UserProfileSortKey | string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;
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
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;
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
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>Sort workforces using the workforce name or creation date.</p>
   */
  SortBy?: ListWorkforcesSortByOptions | string;

  /**
   * <p>Sort workforces in ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of workforces returned in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter you can use to search for workforces using part of the workforce name.</p>
   */
  NameContains?: string;
}

export namespace ListWorkforcesRequest {
  export const filterSensitiveLog = (obj: ListWorkforcesRequest): any => ({
    ...obj,
  });
}

export interface ListWorkforcesResponse {
  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>A list containing information about your workforce.</p>
   */
  Workforces: Workforce[] | undefined;
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
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;

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
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;
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
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
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
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName?: string;

  /**
   * <p>The ARN of the role used to create the processing job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The ARN of the training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The time that the processing job ended.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The ARN of the processing job.</p>
   */
  ProcessingJobArn?: string;

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
   * <p>The time that the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources?: ProcessingResources;

  /**
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus?: ProcessingJobStatus | string;

  /**
   * <p>The time the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time the processing job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Specifies a time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;
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
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;
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
   * <p>The <code>HumanTaskUiArn</code> of the worker UI that you want to render.
   *       Do not provide a <code>HumanTaskUiArn</code> if you use the <code>UiTemplate</code> parameter.</p>
   *          <p>See a list
   *       of available Human Ui Amazon Resource Names (ARNs) in <a>UiConfig</a>.</p>
   */
  HumanTaskUiArn?: string;

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
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

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
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

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
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

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
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;
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
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

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
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

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

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;
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
   * <p>Describes the results of a transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>The name of the model associated with the transform job.</p>
   */
  ModelName?: string;

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
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName?: string;

  /**
   * <p>A list of tags associated with the transform job.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   */
  TransformResources?: TransformResources;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   */
  LabelingJobArn?: string;

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
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   */
  TransformInput?: TransformInput;

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
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn?: string;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

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
   * <p>Information about a processing job that's the source of a trial component.</p>
   */
  ProcessingJob?: ProcessingJob;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>Information about a training job that's the source of a trial component.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>Information about a transform job that's the source of the trial component.</p>
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
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

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
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   */
  Parents?: Parent[];

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>Details of the source of the component.</p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>The list of tags that are associated with the component. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;
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
   * <p>The properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * <p>The properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * <p>The properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;

  /**
   * <p>The properties of a training job.</p>
   */
  TrainingJob?: TrainingJob;
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

export interface UpdateEndpointInput {
  /**
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>When updating endpoint resources, enables or disables the retention of variant
   *             properties, such as the instance count or the variant weight. To retain the variant
   *             properties of an endpoint when updating it, set <code>RetainAllVariantProperties</code>
   *             to <code>true</code>. To use the variant properties specified in a new
   *                 <code>EndpointConfig</code> call when updating an endpoint, set
   *                 <code>RetainAllVariantProperties</code> to <code>false</code>.</p>
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
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;
}

export namespace UpdateEndpointInput {
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
  export const filterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * <p>The name of an existing Amazon SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesInput {
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
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesOutput): any => ({
    ...obj,
  });
}

export interface UpdateExperimentRequest {
  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;
}

export namespace UpdateExperimentRequest {
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
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an AWS Region within
   *          an AWS account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

export namespace UpdateMonitoringScheduleRequest {
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
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceInput {
  /**
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn?: string;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
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
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

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
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so Amazon SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;
}

export namespace UpdateNotebookInstanceInput {
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceOutput {}

export namespace UpdateNotebookInstanceOutput {
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace UpdateNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigOutput {}

export namespace UpdateNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigOutput): any => ({
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
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialComponentRequest {
  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;
}

export namespace UpdateTrialComponentRequest {
  export const filterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
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
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkforceRequest {
  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;
}

export namespace UpdateWorkforceRequest {
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each AWS Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamRequest {
  /**
   * <p>A list of <code>MemberDefinition</code> objects that contain the updated work team
   *             members.</p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

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

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];
}

export namespace SearchExpression {
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
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;

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
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj,
  });
}
