// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AdditionalInferenceSpecificationDefinition,
  BooleanOperator,
  ModelApprovalStatus,
  Tag,
  UserSettings,
} from "./models_0";
import {
  _InstanceType,
  FeatureDefinition,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InstanceMetadataServiceConfiguration,
  JobType,
  MemberDefinition,
  ModelCardStatus,
  ModelVariantConfig,
  MonitoringScheduleConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OidcConfig,
  OidcConfigFilterSensitiveLog,
  ParallelismConfiguration,
  PipelineDefinitionS3Location,
  Processor,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  RootAccess,
  ShadowModeConfig,
  SourceIpConfig,
  SpaceSettings,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentParameterValueFilterSensitiveLog,
  TrialComponentStatus,
  VendorGuidance,
  WorkforceVpcConfigRequest,
} from "./models_1";
import { FeatureParameter, Filter, ResourceType, Workforce, Workteam } from "./models_2";
import { NestedFilters, ProfilerConfigForUpdate, ResourceConfigForUpdate, SearchSortOrder } from "./models_3";

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

export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export interface UpdateFeatureGroupRequest {
  /**
   * <p>The name of the feature group that you're updating.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Updates the feature group. Updating a feature group is an asynchronous operation. When
   *          you get an HTTP 200 response, you've made a valid request. It takes some time after you've
   *          made a valid request for Feature Store to update the feature group.</p>
   */
  FeatureAdditions?: FeatureDefinition[];
}

export interface UpdateFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that you're updating.</p>
   */
  FeatureGroupArn: string | undefined;
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

export interface UpdateHubRequest {
  /**
   * <p>The name of the hub to update.</p>
   */
  HubName: string | undefined;

  /**
   * <p>A description of the updated hub.</p>
   */
  HubDescription?: string;

  /**
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];
}

export interface UpdateHubResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated hub.</p>
   */
  HubArn: string | undefined;
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
   * <p>The new ARN for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export interface UpdateImageResponse {
  /**
   * <p>The ARN of the image.</p>
   */
  ImageArn?: string;
}

export interface UpdateImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The alias of the image version.</p>
   */
  Alias?: string;

  /**
   * <p>The version of the image.</p>
   */
  Version?: number;

  /**
   * <p>A list of aliases to add.</p>
   */
  AliasesToAdd?: string[];

  /**
   * <p>A list of aliases to delete.</p>
   */
  AliasesToDelete?: string[];

  /**
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
  VendorGuidance?: VendorGuidance | string;

  /**
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
  JobType?: JobType | string;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   */
  MLFramework?: string;

  /**
   * <p>The supported programming language and its version.</p>
   */
  ProgrammingLang?: string;

  /**
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
  Processor?: Processor | string;

  /**
   * <p>Indicates Horovod compatibility.</p>
   */
  Horovod?: boolean;

  /**
   * <p>The maintainer description of the image version.</p>
   */
  ReleaseNotes?: string;
}

export interface UpdateImageVersionResponse {
  /**
   * <p>The ARN of the image version.</p>
   */
  ImageVersionArn?: string;
}

export interface UpdateInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *            The duration for which the inference experiment will run. If the status of the inference experiment is
   *            <code>Created</code>, then you can update both the start and end dates. If the status of the inference
   *            experiment is <code>Running</code>, then you can update only the end date.
   *        </p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant, whose infrastructure
   *            configuration you want to update.
   *        </p>
   */
  ModelVariants?: ModelVariantConfig[];

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type. Use this field to specify a
   *            production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a
   *            percentage of the inference requests. For the shadow variant also specify the percentage of requests that
   *            Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig?: ShadowModeConfig;
}

export interface UpdateInferenceExperimentResponse {
  /**
   * <p>The ARN of the updated inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

export interface UpdateModelCardRequest {
  /**
   * <p>The name of the model card to update.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The updated model card content. Content must be in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-api-json-schema.html">model card JSON schema</a> and provided as a string.</p>
   *          <p>When updating model card content, be sure to include the full content and not just updated content.</p>
   */
  Content?: string;

  /**
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
  ModelCardStatus?: ModelCardStatus | string;
}

export interface UpdateModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated model card.</p>
   */
  ModelCardArn: string | undefined;
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

export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

export interface UpdateMonitoringAlertRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   */
  DatapointsToAlert: number | undefined;

  /**
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   */
  EvaluationPeriod: number | undefined;
}

export interface UpdateMonitoringAlertResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;
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

export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
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
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
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
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
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
   *          <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *          </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export interface UpdateNotebookInstanceOutput {}

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

export interface UpdateNotebookInstanceLifecycleConfigOutput {}

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

export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
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

export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
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
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.
   *             In addition, the project must have tag update constraints set in order to include this
   *             parameter in the request.  For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html">Amazon Web Services Service
   *                 Catalog Tag Update Constraints</a>.</p>
   */
  Tags?: Tag[];
}

export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;
}

export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;
}

export interface UpdateSpaceResponse {
  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;
}

export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The training job <code>ResourceConfig</code> to update warm pool retention
   *             length.</p>
   */
  ResourceConfig?: ResourceConfigForUpdate;
}

export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
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

export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
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

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
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

export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
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
   *          <p>Maximum: Ten CIDR values</p>
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

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
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
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
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

/**
 * @internal
 */
export const UpdateExperimentRequestFilterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentResponseFilterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFeatureGroupRequestFilterSensitiveLog = (obj: UpdateFeatureGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFeatureGroupResponseFilterSensitiveLog = (obj: UpdateFeatureGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFeatureMetadataRequestFilterSensitiveLog = (obj: UpdateFeatureMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHubRequestFilterSensitiveLog = (obj: UpdateHubRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHubResponseFilterSensitiveLog = (obj: UpdateHubResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImageRequestFilterSensitiveLog = (obj: UpdateImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImageResponseFilterSensitiveLog = (obj: UpdateImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImageVersionRequestFilterSensitiveLog = (obj: UpdateImageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImageVersionResponseFilterSensitiveLog = (obj: UpdateImageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInferenceExperimentRequestFilterSensitiveLog = (obj: UpdateInferenceExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInferenceExperimentResponseFilterSensitiveLog = (obj: UpdateInferenceExperimentResponse): any => ({
  ...obj,
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
export const UpdateModelCardResponseFilterSensitiveLog = (obj: UpdateModelCardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateModelPackageInputFilterSensitiveLog = (obj: UpdateModelPackageInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateModelPackageOutputFilterSensitiveLog = (obj: UpdateModelPackageOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringAlertRequestFilterSensitiveLog = (obj: UpdateMonitoringAlertRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringAlertResponseFilterSensitiveLog = (obj: UpdateMonitoringAlertResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringScheduleRequestFilterSensitiveLog = (obj: UpdateMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringScheduleResponseFilterSensitiveLog = (obj: UpdateMonitoringScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookInstanceInputFilterSensitiveLog = (obj: UpdateNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookInstanceOutputFilterSensitiveLog = (obj: UpdateNotebookInstanceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookInstanceLifecycleConfigInputFilterSensitiveLog = (
  obj: UpdateNotebookInstanceLifecycleConfigInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookInstanceLifecycleConfigOutputFilterSensitiveLog = (
  obj: UpdateNotebookInstanceLifecycleConfigOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineRequestFilterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineResponseFilterSensitiveLog = (obj: UpdatePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineExecutionRequestFilterSensitiveLog = (obj: UpdatePipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipelineExecutionResponseFilterSensitiveLog = (obj: UpdatePipelineExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceCatalogProvisioningUpdateDetailsFilterSensitiveLog = (
  obj: ServiceCatalogProvisioningUpdateDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectInputFilterSensitiveLog = (obj: UpdateProjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectOutputFilterSensitiveLog = (obj: UpdateProjectOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSpaceRequestFilterSensitiveLog = (obj: UpdateSpaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSpaceResponseFilterSensitiveLog = (obj: UpdateSpaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrainingJobRequestFilterSensitiveLog = (obj: UpdateTrainingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrainingJobResponseFilterSensitiveLog = (obj: UpdateTrainingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrialRequestFilterSensitiveLog = (obj: UpdateTrialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrialResponseFilterSensitiveLog = (obj: UpdateTrialResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrialComponentRequestFilterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
  ...obj,
  ...(obj.Parameters && {
    Parameters: Object.entries(obj.Parameters).reduce(
      (acc: any, [key, value]: [string, TrialComponentParameterValue]) => (
        (acc[key] = TrialComponentParameterValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const UpdateTrialComponentResponseFilterSensitiveLog = (obj: UpdateTrialComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserProfileRequestFilterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserProfileResponseFilterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkforceRequestFilterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});

/**
 * @internal
 */
export const UpdateWorkforceResponseFilterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkteamRequestFilterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkteamResponseFilterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchExpressionFilterSensitiveLog = (obj: SearchExpression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchRequestFilterSensitiveLog = (obj: SearchRequest): any => ({
  ...obj,
});
