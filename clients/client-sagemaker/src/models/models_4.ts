// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSecurityGroupManagement,
  BooleanOperator,
  Channel,
  CheckpointConfig,
  DefaultSpaceSettings,
  EdgeOutputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  StoppingCondition,
  Tag,
  UserContext,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  CrossAccountFilterOption,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentConfig,
  ExperimentConfig,
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
  ProfilerConfig,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  RetryStrategy,
  RootAccess,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  SourceIpConfig,
  SpaceSettings,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  UiTemplate,
  UserSettings,
  VendorGuidance,
  WorkforceVpcConfigRequest,
} from "./models_1";
import {
  DesiredWeightAndCapacity,
  Device,
  Direction,
  DomainSettingsForUpdate,
  Edge,
  Endpoint,
  Experiment,
  FeatureGroup,
  FeatureMetadata,
  FeatureParameter,
  Filter,
  MetricData,
  ModelArtifacts,
  ProjectStatus,
  SecondaryStatus,
  SecondaryStatusTransition,
  SelectiveExecutionConfig,
  ServiceCatalogProvisionedProductDetails,
  TrainingJobStatus,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  Workforce,
  Workteam,
} from "./models_2";
import {
  GitConfigForUpdate,
  HyperParameterTuningJobSearchEntity,
  InferenceExperimentStopDesiredState,
  LineageType,
  ModelCard,
  ModelCardFilterSensitiveLog,
  ModelDashboardModel,
  ModelPackage,
  ModelPackageGroup,
  ModelVariantAction,
  NestedFilters,
  OnlineStoreConfigUpdate,
  Parameter,
  Parent,
  Pipeline,
  PipelineExecution,
  ProcessingJob,
  ProfilerConfigForUpdate,
  ResourceType,
  TransformJob,
} from "./models_3";

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
  ProjectStatus?: ProjectStatus | string;

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
  LineageTypes?: (LineageType | string)[];

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
  Direction?: Direction | string;

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
  LineageType?: LineageType | string;
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
  TrainingJobStatus?: TrainingJobStatus | string;

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
  SecondaryStatus?: SecondaryStatus | string;

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
   * <p>The properties of a project.</p>
   */
  Project?: Project;

  /**
   * @public
   * <p>The feature metadata used to search through the features.</p>
   */
  FeatureMetadata?: FeatureMetadata;

  /**
   * @public
   * <p>The properties of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;

  /**
   * @public
   * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
   */
  Model?: ModelDashboardModel;

  /**
   * @public
   * <p>An Amazon SageMaker Model Card that documents details about a machine learning model.</p>
   */
  ModelCard?: ModelCard;
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
  ModelVariantActions: Record<string, ModelVariantAction | string> | undefined;

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
  DesiredState?: InferenceExperimentStopDesiredState | string;

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
  Status?: ActionStatus | string;

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
   * <p>The default settings used to create a space within the Domain.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;

  /**
   * @public
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided. If setting up the domain for use with RStudio, this value must be set to
   *                 <code>Service</code>.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;
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
  VariantPropertyType: VariantPropertyType | string | undefined;
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
  VendorGuidance?: VendorGuidance | string;

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
  JobType?: JobType | string;

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
  Processor?: Processor | string;

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
  ModelCardStatus?: ModelCardStatus | string;
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
  ModelApprovalStatus?: ModelApprovalStatus | string;

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
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
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
  InstanceType?: _InstanceType | string;

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
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

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
  RootAccess?: RootAccess | string;

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
  Operator?: BooleanOperator | string;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * @public
   * <p>The name of the SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

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
  SortOrder?: SearchSortOrder | string;

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
  CrossAccountFilterOption?: CrossAccountFilterOption | string;
}

/**
 * @internal
 */
export const SearchRecordFilterSensitiveLog = (obj: SearchRecord): any => ({
  ...obj,
  ...(obj.TrialComponent && { TrialComponent: obj.TrialComponent }),
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
