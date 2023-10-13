// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionSummary,
  AgentVersion,
  AlgorithmSortBy,
  AlgorithmSummary,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppSortKey,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobStepMetadata,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchDataCaptureConfig,
  BatchStrategy,
  CacheHitResult,
  CallbackStepMetadata,
  CandidateSortBy,
  CandidateStatus,
  ClarifyCheckStepMetadata,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CompilationJobStatus,
  CompilationJobSummary,
  ConditionStepMetadata,
  ContainerDefinition,
  ContextSummary,
  ModelApprovalStatus,
  ModelPackageStatus,
  OutputParameter,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  DataProcessing,
  EdgeOutputConfig,
  ExperimentConfig,
  FeatureDefinition,
  FeatureType,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExecutionConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  LabelingJobInputConfig,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelClientConfig,
  MonitoringType,
  OfflineStoreConfig,
  OnlineStoreConfig,
  RecommendationJobType,
  ResourceLimits,
  StudioLifecycleConfigAppType,
  TrialComponentStatus,
} from "./models_1";
import {
  DeploymentRecommendation,
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceStats,
  DeviceSummary,
  DomainDetails,
  DynamicScalingConfiguration,
  EdgeDeploymentPlanSummary,
  EdgeModelStat,
  EdgePackagingJobStatus,
  EdgePackagingJobSummary,
  EMRStepMetadata,
  EndpointConfigSortKey,
  EndpointOutputConfiguration,
  EndpointStatus,
  ExecutionStatus,
  ExperimentSource,
  FeatureGroupStatus,
  FeatureParameter,
  FlowDefinitionStatus,
  HubContentStatus,
  HubContentType,
  HubStatus,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobCompletionDetails,
  HyperParameterTuningJobConsumedResources,
  HyperParameterTuningJobStatus,
  ImageStatus,
  ImageVersionStatus,
  InferenceExperimentStatus,
  InferenceMetrics,
  LabelCounters,
  LabelingJobOutput,
  LabelingJobStatus,
  LastUpdateStatus,
  ModelCardExportJobStatus,
  ModelConfiguration,
  ModelPackageGroupStatus,
  MonitoringExecutionSummary,
  NotebookInstanceStatus,
  ObjectiveStatusCounters,
  OfflineStoreStatus,
  OfflineStoreStatusValue,
  PipelineExecutionStatus,
  ProcessingJobStatus,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationMetrics,
  ScheduleStatus,
  SpaceStatus,
  SubscribedWorkteam,
  TrainingJobStatus,
  TrainingJobStatusCounters,
  TransformJobStatus,
  TrialComponentSource,
  TrialSource,
  UserProfileStatus,
  WarmPoolResourceStatus,
  WarmPoolStatus,
  Workforce,
  Workteam,
} from "./models_2";

/**
 * @public
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * @public
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type EndpointSortKey = (typeof EndpointSortKey)[keyof typeof EndpointSortKey];

/**
 * @public
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Creating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> call or when the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <code>DescribeEndpointOutput$FailureReason</code> for information about the
   *                     failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a
   *                     failed endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>To get a list of endpoints with a specified status, use the <code>StatusEquals</code>
   *             filter with a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListEndpoints.html">ListEndpoints</a>.</p>
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * @public
 * <p>The properties of an experiment as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 */
export interface Experiment {
  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * @public
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * @public
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * @public
   * <p>When the experiment was last modified.</p>
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
   * <p>The list of tags that are associated with the experiment. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * @public
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * @public
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * @public
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The container for the metadata for Fail step.</p>
 */
export interface FailStepMetadata {
  /**
   * @public
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
 *          Feature Group can be visualized as a table which has rows, with a unique identifier for
 *          each row where each column in the table is a feature. In principle, a Feature Group is
 *          composed of features and values per features.</p>
 */
export interface FeatureGroup {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn?: string;

  /**
   * @public
   * <p>The name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName?: string;

  /**
   * @public
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *             <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   */
  RecordIdentifierFeatureName?: string;

  /**
   * @public
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *             <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event occurs that corresponds to
   *          the creation or update of a <code>Record</code> in <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> must have a corresponding
   *             <code>EventTime</code>.</p>
   */
  EventTimeFeatureName?: string;

  /**
   * @public
   * <p>A list of <code>Feature</code>s. Each <code>Feature</code> must include a
   *             <code>FeatureName</code> and a <code>FeatureType</code>. </p>
   *          <p>Valid <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and
   *             <code>String</code>. </p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>.</p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions?: FeatureDefinition[];

  /**
   * @public
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating the last time you updated the feature group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly.</p>
   *          <p>The default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * @public
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *             <code>S3StorageConfig</code>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A <code>FeatureGroup</code> status.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * @public
   * <p>The status of <code>OfflineStore</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * @public
   * <p>A value that indicates whether the feature group was updated successfully.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * @public
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure may be due to a failure to create a
   *             <code>FeatureGroup</code> in or delete a <code>FeatureGroup</code> from the
   *             <code>OfflineStore</code>.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const FeatureGroupSortBy = {
  CREATION_TIME: "CreationTime",
  FEATURE_GROUP_STATUS: "FeatureGroupStatus",
  NAME: "Name",
  OFFLINE_STORE_STATUS: "OfflineStoreStatus",
} as const;

/**
 * @public
 */
export type FeatureGroupSortBy = (typeof FeatureGroupSortBy)[keyof typeof FeatureGroupSortBy];

/**
 * @public
 * @enum
 */
export const FeatureGroupSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type FeatureGroupSortOrder = (typeof FeatureGroupSortOrder)[keyof typeof FeatureGroupSortOrder];

/**
 * @public
 * <p>The name, ARN, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 */
export interface FeatureGroupSummary {
  /**
   * @public
   * <p>The name of <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * @public
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * @public
   * <p>A timestamp indicating the time of creation time of the
   *          <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * @public
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;
}

/**
 * @public
 * <p>The metadata for a feature. It can either be metadata that you specify, or metadata that
 *          is updated automatically.</p>
 */
export interface FeatureMetadata {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the feature group.</p>
   */
  FeatureGroupArn?: string;

  /**
   * @public
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName?: string;

  /**
   * @public
   * <p>The name of feature.</p>
   */
  FeatureName?: string;

  /**
   * @public
   * <p>The data type of the feature.</p>
   */
  FeatureType?: FeatureType;

  /**
   * @public
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp indicating when the feature was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>An optional description that you specify to better describe the feature.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Optional key-value pairs that you specify to better describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

/**
 * @public
 * @enum
 */
export const Operator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  IN: "In",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
  NOT_EQUALS: "NotEquals",
  NOT_EXISTS: "NotExists",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, SageMaker uses the
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
 *                   <code>\{</code>
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
 *                   <code>\}</code>
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
 *                   <code> \{</code>
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
 *                   <code> \}</code>
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
   * @public
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
  Operator?: Operator;

  /**
   * @public
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * @public
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * @public
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface GetDeviceFleetReportRequest {
  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceFleetReportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * @public
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * @public
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Timestamp of when the report was generated.</p>
   */
  ReportGenerated?: Date;

  /**
   * @public
   * <p>Status of devices.</p>
   */
  DeviceStats?: DeviceStats;

  /**
   * @public
   * <p>The versions of Edge Manager agent deployed on the fleet.</p>
   */
  AgentVersions?: AgentVersion[];

  /**
   * @public
   * <p>Status of model on device.</p>
   */
  ModelStats?: EdgeModelStat[];
}

/**
 * @public
 */
export interface GetLineageGroupPolicyRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The resource policy that gives access to the lineage group in another account.</p>
   */
  ResourcePolicy?: string;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyInput {
  /**
   * @public
   * <p>The name of the model group for which to get the resource policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyOutput {
  /**
   * @public
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusInput {}

/**
 * @public
 * @enum
 */
export const SagemakerServicecatalogStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type SagemakerServicecatalogStatus =
  (typeof SagemakerServicecatalogStatus)[keyof typeof SagemakerServicecatalogStatus];

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * @public
   * <p>Whether Service Catalog is enabled or disabled in SageMaker.</p>
   */
  Status?: SagemakerServicecatalogStatus;
}

/**
 * @public
 * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
 */
export interface ScalingPolicyObjective {
  /**
   * @public
   * <p>The minimum number of expected requests to your endpoint per minute.</p>
   */
  MinInvocationsPerMinute?: number;

  /**
   * @public
   * <p>The maximum number of expected requests to your endpoint per minute.</p>
   */
  MaxInvocationsPerMinute?: number;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationRequest {
  /**
   * @public
   * <p>The name of a previously completed Inference Recommender job.</p>
   */
  InferenceRecommendationsJobName: string | undefined;

  /**
   * @public
   * <p>The recommendation ID of a previously completed inference recommendation. This ID should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>EndpointName</code> field.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The name of an endpoint benchmarked during a previously completed inference recommendation job. This name should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>RecommendationId</code> field.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The percentage of how much utilization you want an instance to use before autoscaling. The default value is 50%.</p>
   */
  TargetCpuUtilizationPerCore?: number;

  /**
   * @public
   * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
   */
  ScalingPolicyObjective?: ScalingPolicyObjective;
}

/**
 * @public
 * <p>The metric for a scaling policy.</p>
 */
export interface ScalingPolicyMetric {
  /**
   * @public
   * <p>The number of invocations sent to a model, normalized by <code>InstanceCount</code>
   *          in each ProductionVariant. <code>1/numberOfInstances</code> is sent as the value on each
   *          request, where <code>numberOfInstances</code> is the number of active instances for the
   *          ProductionVariant behind the endpoint at the time of the request.</p>
   */
  InvocationsPerInstance?: number;

  /**
   * @public
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *          This interval includes the local communication times taken to send the request
   *          and to fetch the response from the container of a model and the time taken to
   *          complete the inference in the container.</p>
   */
  ModelLatency?: number;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationResponse {
  /**
   * @public
   * <p>The name of a previously completed Inference Recommender job.</p>
   */
  InferenceRecommendationsJobName?: string;

  /**
   * @public
   * <p>The recommendation ID of a previously completed inference recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The name of an endpoint benchmarked during a previously completed Inference Recommender job.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The percentage of how much utilization you want an instance to use before autoscaling, which you specified in the request. The default value is 50%.</p>
   */
  TargetCpuUtilizationPerCore?: number;

  /**
   * @public
   * <p>An object representing the anticipated traffic pattern for an endpoint that you specified in the request.</p>
   */
  ScalingPolicyObjective?: ScalingPolicyObjective;

  /**
   * @public
   * <p>An object with a list of metrics that were benchmarked during the previously completed Inference Recommender job.</p>
   */
  Metric?: ScalingPolicyMetric;

  /**
   * @public
   * <p>An object with the recommended values for you to specify when creating an autoscaling policy.</p>
   */
  DynamicScalingConfiguration?: DynamicScalingConfiguration;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ENDPOINT: "Endpoint",
  EXPERIMENT: "Experiment",
  EXPERIMENT_TRIAL: "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT: "ExperimentTrialComponent",
  FEATURE_GROUP: "FeatureGroup",
  FEATURE_METADATA: "FeatureMetadata",
  HYPER_PARAMETER_TUNING_JOB: "HyperParameterTuningJob",
  MODEL: "Model",
  MODEL_CARD: "ModelCard",
  MODEL_PACKAGE: "ModelPackage",
  MODEL_PACKAGE_GROUP: "ModelPackageGroup",
  PIPELINE: "Pipeline",
  PIPELINE_EXECUTION: "PipelineExecution",
  PROJECT: "Project",
  TRAINING_JOB: "TrainingJob",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * @public
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

/**
 * @public
 * <p>Specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_GetSearchSuggestions.html">GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * @public
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

/**
 * @public
 */
export interface GetSearchSuggestionsRequest {
  /**
   * @public
   * <p>The name of the SageMaker resource to search for.</p>
   */
  Resource: ResourceType | undefined;

  /**
   * @public
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

/**
 * @public
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * @public
   * <p>A suggested property name based on what you entered in the search textbox in the SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

/**
 * @public
 */
export interface GetSearchSuggestionsResponse {
  /**
   * @public
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

/**
 * @public
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   */
  SecretArn?: string;
}

/**
 * @public
 * <p>Information about hub content.</p>
 */
export interface HubContentInfo {
  /**
   * @public
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   */
  HubContentArn: string | undefined;

  /**
   * @public
   * <p>The version of the hub content.</p>
   */
  HubContentVersion: string | undefined;

  /**
   * @public
   * <p>The type of hub content.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The version of the hub content document schema.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * @public
   * <p>The display name of the hub content.</p>
   */
  HubContentDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub content.</p>
   */
  HubContentDescription?: string;

  /**
   * @public
   * <p>The searchable keywords for the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * @public
   * <p>The status of the hub content.</p>
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * @public
   * <p>The date and time that the hub content was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const HubContentSortBy = {
  CREATION_TIME: "CreationTime",
  HUB_CONTENT_NAME: "HubContentName",
  HUB_CONTENT_STATUS: "HubContentStatus",
} as const;

/**
 * @public
 */
export type HubContentSortBy = (typeof HubContentSortBy)[keyof typeof HubContentSortBy];

/**
 * @public
 * <p>Information about a hub.</p>
 */
export interface HubInfo {
  /**
   * @public
   * <p>The name of the hub.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   */
  HubArn: string | undefined;

  /**
   * @public
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub.</p>
   */
  HubDescription?: string;

  /**
   * @public
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];

  /**
   * @public
   * <p>The status of the hub.</p>
   */
  HubStatus: HubStatus | undefined;

  /**
   * @public
   * <p>The date and time that the hub was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the hub was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const HubSortBy = {
  ACCOUNT_ID_OWNER: "AccountIdOwner",
  CREATION_TIME: "CreationTime",
  HUB_NAME: "HubName",
  HUB_STATUS: "HubStatus",
} as const;

/**
 * @public
 */
export type HubSortBy = (typeof HubSortBy)[keyof typeof HubSortBy];

/**
 * @public
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * @public
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * @public
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * <p>An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API
 *             containing the properties of a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSearchEntity {
  /**
   * @public
   * <p>The name of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobArn?: string;

  /**
   * @public
   * <p>Configures a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig;

  /**
   * @public
   * <p>Defines
   *             the training jobs launched by a hyperparameter tuning job.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * @public
   * <p>The job definitions included in a hyperparameter tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * @public
   * <p>The status of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * @public
   * <p>The time that a hyperparameter tuning job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
   *             status.</p>
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters;

  /**
   * @public
   * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
   *             categorized by the status of their objective metric. The objective metric status shows
   *             whether the
   *             final
   *             objective metric for the training job has been evaluated by the
   *             tuning job and used in the hyperparameter tuning process.</p>
   */
  ObjectiveStatusCounters?: ObjectiveStatusCounters;

  /**
   * @public
   * <p>The container for the summary information about a training job.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>The container for the summary information about a training job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @public
   * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
   *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
   *             jobs are used to inform which combinations of hyperparameters to search over in the new
   *             tuning job.</p>
   *          <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric, and the training job that performs the best is compared to the
   *             best training jobs from the parent tuning jobs. From these, the training job that
   *             performs the best as measured by the objective metric is returned as the overall best
   *             training job.</p>
   *          <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *          </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @public
   * <p>The error that was created when a hyperparameter tuning job failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The tags associated with a hyperparameter tuning job. For more information see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Information about either a current or completed hyperparameter tuning job.</p>
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;

  /**
   * @public
   * <p>The total amount of resources consumed by a hyperparameter tuning job.</p>
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobSortByOptions = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobSortByOptions =
  (typeof HyperParameterTuningJobSortByOptions)[keyof typeof HyperParameterTuningJobSortByOptions];

/**
 * @public
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * @public
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * @public
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * @public
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * @public
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             evaluate
   *             at each iteration.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * @public
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the numbers of training
   *             jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the numbers of training jobs,
   *             categorized by objective metric status, that this tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>
   *             object that specifies the maximum number of training jobs and parallel training jobs
   *             allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

/**
 * @public
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * @public
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * @public
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | undefined;

  /**
   * @public
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageSortBy = {
  CREATION_TIME: "CREATION_TIME",
  IMAGE_NAME: "IMAGE_NAME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
} as const;

/**
 * @public
 */
export type ImageSortBy = (typeof ImageSortBy)[keyof typeof ImageSortBy];

/**
 * @public
 * @enum
 */
export const ImageSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageSortOrder = (typeof ImageSortOrder)[keyof typeof ImageSortOrder];

/**
 * @public
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * @public
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * @public
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | undefined;

  /**
   * @public
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageVersionSortBy = {
  CREATION_TIME: "CREATION_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ImageVersionSortBy = (typeof ImageVersionSortBy)[keyof typeof ImageVersionSortBy];

/**
 * @public
 * @enum
 */
export const ImageVersionSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageVersionSortOrder = (typeof ImageVersionSortOrder)[keyof typeof ImageVersionSortOrder];

/**
 * @public
 */
export interface ImportHubContentRequest {
  /**
   * @public
   * <p>The name of the hub content to import.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The version of the hub content to import.</p>
   */
  HubContentVersion?: string;

  /**
   * @public
   * <p>The type of hub content to import.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The version of the hub content schema to import.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * @public
   * <p>The name of the hub to import content into.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The display name of the hub content to import.</p>
   */
  HubContentDisplayName?: string;

  /**
   * @public
   * <p>A description of the hub content to import.</p>
   */
  HubContentDescription?: string;

  /**
   * @public
   * <p>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</p>
   */
  HubContentMarkdown?: string;

  /**
   * @public
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   */
  HubContentDocument: string | undefined;

  /**
   * @public
   * <p>The searchable keywords of the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * @public
   * <p>Any tags associated with the hub content.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportHubContentResponse {
  /**
   * @public
   * <p>The ARN of the hub that the content was imported into.</p>
   */
  HubArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the hub content that was imported.</p>
   */
  HubContentArn: string | undefined;
}

/**
 * @public
 * <p>Lists a summary of properties of an inference experiment.</p>
 */
export interface InferenceExperimentSummary {
  /**
   * @public
   * <p>The name of the inference experiment.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the inference experiment.</p>
   */
  Type: InferenceExperimentType | undefined;

  /**
   * @public
   * <p>The duration for which the inference experiment ran or will run.</p>
   *          <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * @public
   * <p>The status of the inference experiment.</p>
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * @public
   * <p>The error message for the inference experiment status result.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp at which the inference experiment was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp at which the inference experiment was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The timestamp when you last modified the inference experiment.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentStopDesiredState = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
} as const;

/**
 * @public
 */
export type InferenceExperimentStopDesiredState =
  (typeof InferenceExperimentStopDesiredState)[keyof typeof InferenceExperimentStopDesiredState];

/**
 * @public
 * <p>A structure that contains a list of recommendation jobs.</p>
 */
export interface InferenceRecommendationsJob {
  /**
   * @public
   * <p>The name of the job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The job description.</p>
   */
  JobDescription: string | undefined;

  /**
   * @public
   * <p>The recommendation job type.</p>
   */
  JobType: RecommendationJobType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;

  /**
   * @public
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The name of the created model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored.
   *          This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   */
  ModelPackageVersionArn?: string;
}

/**
 * @public
 * <p>The details for a specific benchmark from an Inference Recommender job.</p>
 */
export interface RecommendationJobInferenceBenchmark {
  /**
   * @public
   * <p>The metrics of recommendations.</p>
   */
  Metrics?: RecommendationMetrics;

  /**
   * @public
   * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
   */
  EndpointConfiguration?: EndpointOutputConfiguration;

  /**
   * @public
   * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * @public
   * <p>The reason why a benchmark failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
   */
  EndpointMetrics?: InferenceMetrics;

  /**
   * @public
   * <p>A timestamp that shows when the benchmark completed.</p>
   */
  InvocationEndTime?: Date;

  /**
   * @public
   * <p>A timestamp that shows when the benchmark started.</p>
   */
  InvocationStartTime?: Date;
}

/**
 * @public
 * @enum
 */
export const RecommendationStepType = {
  BENCHMARK: "BENCHMARK",
} as const;

/**
 * @public
 */
export type RecommendationStepType = (typeof RecommendationStepType)[keyof typeof RecommendationStepType];

/**
 * @public
 * <p>A returned array object for the <code>Steps</code> response field in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html">ListInferenceRecommendationsJobSteps</a> API command.</p>
 */
export interface InferenceRecommendationsJobStep {
  /**
   * @public
   * <p>The type of the subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType: RecommendationStepType | undefined;

  /**
   * @public
   * <p>The name of the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The current status of the benchmark.</p>
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * @public
   * <p>The details for a specific benchmark.</p>
   */
  InferenceBenchmark?: RecommendationJobInferenceBenchmark;
}

/**
 * @public
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * @public
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * @public
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * @public
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

/**
 * @public
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * @public
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * @public
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account used to start the labeling
   *             job.</p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * @public
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * @public
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

/**
 * @public
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * @public
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * @public
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * @public
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * @public
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

/**
 * @public
 * <p>Metadata for a Lambda step.</p>
 */
export interface LambdaStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A list of the output parameters of the Lambda step.</p>
   */
  OutputParameters?: OutputParameter[];
}

/**
 * @public
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 */
export interface LineageGroupSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * @public
   * <p>The display name of the lineage group summary.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The creation time of the lineage group summary.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last modified time of the lineage group summary.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const LineageType = {
  ACTION: "Action",
  ARTIFACT: "Artifact",
  CONTEXT: "Context",
  TRIAL_COMPONENT: "TrialComponent",
} as const;

/**
 * @public
 */
export type LineageType = (typeof LineageType)[keyof typeof LineageType];

/**
 * @public
 * @enum
 */
export const SortActionsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortActionsBy = (typeof SortActionsBy)[keyof typeof SortActionsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * @public
   * <p>A filter that returns only actions with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only actions of the specified type.</p>
   */
  ActionType?: string;

  /**
   * @public
   * <p>A filter that returns only actions created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only actions created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortActionsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions,
   *         the call returns a token for getting the next set of actions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of actions to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * @public
   * <p>A list of actions and their properties.</p>
   */
  ActionSummaries?: ActionSummary[];

  /**
   * @public
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAlgorithmsInput {
  /**
   * @public
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListAlgorithmsOutput {
  /**
   * @public
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesRequest {
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
   * <p>The version of the image. If image version is not specified, the aliases of all versions of the image are listed.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The maximum number of aliases to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListAliases</code> didn't return the full set of
   *          aliases, the call returns a token for retrieving the next set of aliases.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * @public
   * <p>A list of SageMaker image version aliases.</p>
   */
  SageMakerImageVersionAliases?: string[];

  /**
   * @public
   * <p>A token for getting the next set of aliases, if more aliases exist.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppImageConfigsRequest {
  /**
   * @public
   * <p>The total number of items to return in the response. If the total
   *          number of items available is more than the value specified, a <code>NextToken</code>
   *          is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *          value in the as part of a subsequent call. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *         AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: AppImageConfigSortKey;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListAppImageConfigsResponse {
  /**
   * @public
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of AppImageConfigs and their properties.</p>
   */
  AppImageConfigs?: AppImageConfigDetails[];
}

/**
 * @public
 */
export interface ListAppsRequest {
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
  SortBy?: AppSortKey;

  /**
   * @public
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * @public
   * <p>A parameter to search by user profile name. If <code>SpaceNameEquals</code> is set, then this value cannot be set.</p>
   */
  UserProfileNameEquals?: string;

  /**
   * @public
   * <p>A parameter to search by space name. If <code>UserProfileNameEquals</code> is set, then this value cannot be set.</p>
   */
  SpaceNameEquals?: string;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * @public
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

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
export const SortArtifactsBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortArtifactsBy = (typeof SortArtifactsBy)[keyof typeof SortArtifactsBy];

/**
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * @public
   * <p>A filter that returns only artifacts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only artifacts of the specified type.</p>
   */
  ArtifactType?: string;

  /**
   * @public
   * <p>A filter that returns only artifacts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only artifacts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortArtifactsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts,
   *         the call returns a token for getting the next set of artifacts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of artifacts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListArtifactsResponse {
  /**
   * @public
   * <p>A list of artifacts and their properties.</p>
   */
  ArtifactSummaries?: ArtifactSummary[];

  /**
   * @public
   * <p>A token for getting the next set of artifacts, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortAssociationsBy = {
  CREATION_TIME: "CreationTime",
  DESTINATION_ARN: "DestinationArn",
  DESTINATION_TYPE: "DestinationType",
  SOURCE_ARN: "SourceArn",
  SOURCE_TYPE: "SourceType",
} as const;

/**
 * @public
 */
export type SortAssociationsBy = (typeof SortAssociationsBy)[keyof typeof SortAssociationsBy];

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * @public
   * <p>A filter that returns only associations with the specified source ARN.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified destination Amazon Resource Name (ARN).</p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified source type.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A filter that returns only associations with the specified destination type.</p>
   */
  DestinationType?: string;

  /**
   * @public
   * <p>A filter that returns only associations of the specified type.</p>
   */
  AssociationType?: AssociationEdgeType;

  /**
   * @public
   * <p>A filter that returns only associations created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only associations created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortAssociationsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations,
   *         the call returns a token for getting the next set of associations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of associations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAssociationsResponse {
  /**
   * @public
   * <p>A list of associations and their properties.</p>
   */
  AssociationSummaries?: AssociationSummary[];

  /**
   * @public
   * <p>A token for getting the next set of associations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAutoMLJobsRequest {
  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is <code>Name</code>.</p>
   */
  SortBy?: AutoMLSortBy;

  /**
   * @public
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAutoMLJobsResponse {
  /**
   * @public
   * <p>Returns a summary list of jobs.</p>
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobRequest {
  /**
   * @public
   * <p>List the candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * @public
   * <p>List the candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus;

  /**
   * @public
   * <p>List the candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *          <code>Descending</code>.</p>
   */
  SortBy?: CandidateSortBy;

  /**
   * @public
   * <p>List the job's candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobResponse {
  /**
   * @public
   * <p>Summaries about the <code>AutoMLCandidates</code>.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * @public
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCodeRepositoriesInput {
  /**
   * @public
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder;
}

/**
 * @public
 */
export interface ListCodeRepositoriesOutput {
  /**
   * @public
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *          <ul>
   *             <li>
   *                <p>Name</p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Creation time</p>
   *             </li>
   *             <li>
   *                <p>Last modified time</p>
   *             </li>
   *             <li>
   *                <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the Amazon Web Services Secrets Manager secret that contains the
   *                     credentials used to access the repository.</p>
   *             </li>
   *          </ul>
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * @public
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListCompilationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListCompilationJobsSortBy = (typeof ListCompilationJobsSortBy)[keyof typeof ListCompilationJobsSortBy];

/**
 * @public
 */
export interface ListCompilationJobsRequest {
  /**
   * @public
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves model compilation jobs with a specific
   *                 <code>CompilationJobStatus</code> status.</p>
   */
  StatusEquals?: CompilationJobStatus;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListCompilationJobsResponse {
  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html">CompilationJobSummary</a> objects, each describing a model compilation job.
   *         </p>
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortContextsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortContextsBy = (typeof SortContextsBy)[keyof typeof SortContextsBy];

/**
 * @public
 */
export interface ListContextsRequest {
  /**
   * @public
   * <p>A filter that returns only contexts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * @public
   * <p>A filter that returns only contexts of the specified type.</p>
   */
  ContextType?: string;

  /**
   * @public
   * <p>A filter that returns only contexts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only contexts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortContextsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts,
   *         the call returns a token for getting the next set of contexts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of contexts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListContextsResponse {
  /**
   * @public
   * <p>A list of contexts and their properties.</p>
   */
  ContextSummaries?: ContextSummary[];

  /**
   * @public
   * <p>A token for getting the next set of contexts, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringJobDefinitionSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type MonitoringJobDefinitionSortKey =
  (typeof MonitoringJobDefinitionSortKey)[keyof typeof MonitoringJobDefinitionSortKey];

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsRequest {
  /**
   * @public
   * <p>A filter that lists the data quality job definitions associated with the specified
   *          endpoint.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          transform jobs, use the token in the next request.></p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of data quality monitoring job definitions to return in the
   *          response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the data quality monitoring job definition name. This filter returns only
   *          data quality monitoring job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only data quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only data quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 * <p>Summary information about a monitoring job.</p>
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * @public
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The time that the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The name of the endpoint that the job monitors.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsResponse {
  /**
   * @public
   * <p>A list of data quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data
   *          quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListDeviceFleetsSortBy = {
  CreationTime: "CREATION_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListDeviceFleetsSortBy = (typeof ListDeviceFleetsSortBy)[keyof typeof ListDeviceFleetsSortBy];

/**
 * @public
 */
export interface ListDeviceFleetsRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter fleets where packaging job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Filter fleets where the edge packaging job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Select fleets where the job was updated after X</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Select fleets where the job was updated before X</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for fleets containing this name in their fleet device name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>The column to sort by.</p>
   */
  SortBy?: ListDeviceFleetsSortBy;

  /**
   * @public
   * <p>What direction to sort in.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListDeviceFleetsResponse {
  /**
   * @public
   * <p>Summary of the device fleet.</p>
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Select fleets where the job was updated after X</p>
   */
  LatestHeartbeatAfter?: Date;

  /**
   * @public
   * <p>A filter that searches devices that contains this name in any of their models.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>Filter for fleets containing this name in their device fleet name.</p>
   */
  DeviceFleetName?: string;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * @public
   * <p>Summary of devices.</p>
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDomainsRequest {
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
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * @public
   * <p>The list of domains.</p>
   */
  Domains?: DomainDetails[];

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
export const ListEdgeDeploymentPlansSortBy = {
  CreationTime: "CREATION_TIME",
  DeviceFleetName: "DEVICE_FLEET_NAME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgeDeploymentPlansSortBy =
  (typeof ListEdgeDeploymentPlansSortBy)[keyof typeof ListEdgeDeploymentPlansSortBy];

/**
 * @public
 */
export interface ListEdgeDeploymentPlansRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need
   *             tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Selects edge deployment plans created after this time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans created before this time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans that were last updated after this time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans that were last updated before this time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Selects edge deployment plans with names containing this name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Selects edge deployment plans with a device fleet name containing this name.</p>
   */
  DeviceFleetNameContains?: string;

  /**
   * @public
   * <p>The column by which to sort the edge deployment plans. Can be one of
   *             <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>,
   *                 <code>LASTMODIFIEDTIME</code>.</p>
   */
  SortBy?: ListEdgeDeploymentPlansSortBy;

  /**
   * @public
   * <p>The direction of the sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListEdgeDeploymentPlansResponse {
  /**
   * @public
   * <p>List of summaries of edge deployment plans.</p>
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

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
export const ListEdgePackagingJobsSortBy = {
  CreationTime: "CREATION_TIME",
  EdgePackagingJobStatus: "STATUS",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  ModelName: "MODEL_NAME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgePackagingJobsSortBy =
  (typeof ListEdgePackagingJobsSortBy)[keyof typeof ListEdgePackagingJobsSortBy];

/**
 * @public
 */
export interface ListEdgePackagingJobsRequest {
  /**
   * @public
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Select jobs where the job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Select jobs where the job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Select jobs where the job was updated after specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Select jobs where the job was updated before specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for jobs containing this name in their packaging job name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Filter for jobs where the model name contains this string.</p>
   */
  ModelNameContains?: string;

  /**
   * @public
   * <p>The job status to filter for.</p>
   */
  StatusEquals?: EdgePackagingJobStatus;

  /**
   * @public
   * <p>Use to specify what column to sort by.</p>
   */
  SortBy?: ListEdgePackagingJobsSortBy;

  /**
   * @public
   * <p>What direction to sort by.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListEdgePackagingJobsResponse {
  /**
   * @public
   * <p>Summaries of edge packaging jobs.</p>
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * @public
   * <p>Token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OrderKey = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type OrderKey = (typeof OrderKey)[keyof typeof OrderKey];

/**
 * @public
 */
export interface ListEndpointConfigsInput {
  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEndpointConfigsOutput {
  /**
   * @public
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEndpointsInput {
  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus;
}

/**
 * @public
 */
export interface ListEndpointsOutput {
  /**
   * @public
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortExperimentsBy = (typeof SortExperimentsBy)[keyof typeof SortExperimentsBy];

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * @public
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of experiments to return in the response. The default value is
   *       10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * @public
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];

  /**
   * @public
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFeatureGroupsRequest {
  /**
   * @public
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters
   *             <code>FeatureGroup</code>s by name. </p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus;

  /**
   * @public
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status.
   *       </p>
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue;

  /**
   * @public
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific
   *          date and time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific
   *          date and time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The order in which feature groups are listed.</p>
   */
  SortOrder?: FeatureGroupSortOrder;

  /**
   * @public
   * <p>The value on which the feature group list is sorted.</p>
   */
  SortBy?: FeatureGroupSortBy;

  /**
   * @public
   * <p>The maximum number of results returned by <code>ListFeatureGroups</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFeatureGroupsResponse {
  /**
   * @public
   * <p>A summary of feature groups.</p>
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 */
export interface ListFlowDefinitionsRequest {
  /**
   * @public
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFlowDefinitionsResponse {
  /**
   * @public
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentsRequest {
  /**
   * @public
   * <p>The name of the hub to list the contents of.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of hub content to list.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>Only list hub content if the name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>The upper bound of the hub content schema verion.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * @public
   * <p>Only list hub content that was created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hub content that was created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy;

  /**
   * @public
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum amount of hub content to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubContents</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentsResponse {
  /**
   * @public
   * <p>The summaries of the listed hub content.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentVersionsRequest {
  /**
   * @public
   * <p>The name of the hub to list the content versions of.</p>
   */
  HubName: string | undefined;

  /**
   * @public
   * <p>The type of hub content to list versions of.</p>
   */
  HubContentType: HubContentType | undefined;

  /**
   * @public
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * @public
   * <p>The lower bound of the hub content versions to list.</p>
   */
  MinVersion?: string;

  /**
   * @public
   * <p>The upper bound of the hub content schema version.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * @public
   * <p>Only list hub content versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hub content versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy;

  /**
   * @public
   * <p>Sort hub content versions by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of hub content versions to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubContentVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content versions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubContentVersionsResponse {
  /**
   * @public
   * <p>The summaries of the listed hub content versions.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubsRequest {
  /**
   * @public
   * <p>Only list hubs with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Only list hubs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hubs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list hubs that were last modified before the time specified.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>Only list hubs that were last modified after the time specified.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Sort hubs by either name or creation time.</p>
   */
  SortBy?: HubSortBy;

  /**
   * @public
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The maximum number of hubs to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response to a previous <code>ListHubs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hubs, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHubsResponse {
  /**
   * @public
   * <p>The summaries of the listed hubs.</p>
   */
  HubSummaries: HubInfo[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHumanTaskUisRequest {
  /**
   * @public
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListHumanTaskUisResponse {
  /**
   * @public
   * <p>An array of objects describing the human task user interfaces.</p>
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * @public
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsRequest {
  /**
   * @public
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsResponse {
  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * @public
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * @public
   * <p>A filter that returns only images created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only images created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only images modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only images modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of images to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only images whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images,
   *         the call returns a token for getting the next set of images.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageSortBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageSortOrder;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * @public
   * <p>A list of images and their properties.</p>
   */
  Images?: Image[];

  /**
   * @public
   * <p>A token for getting the next set of images, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImageVersionsRequest {
  /**
   * @public
   * <p>A filter that returns only versions created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only versions created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The name of the image to list the versions of.</p>
   */
  ImageName: string | undefined;

  /**
   * @public
   * <p>A filter that returns only versions modified on or after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only versions modified on or before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of versions to return in the response. The default value is 10. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of
   *         versions, the call returns a token for getting the next set of versions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   */
  SortBy?: ImageVersionSortBy;

  /**
   * @public
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: ImageVersionSortOrder;
}

/**
 * @public
 */
export interface ListImageVersionsResponse {
  /**
   * @public
   * <p>A list of versions and their properties.</p>
   */
  ImageVersions?: ImageVersion[];

  /**
   * @public
   * <p>A token for getting the next set of versions, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortInferenceExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortInferenceExperimentsBy = (typeof SortInferenceExperimentsBy)[keyof typeof SortInferenceExperimentsBy];

/**
 * @public
 */
export interface ListInferenceExperimentsRequest {
  /**
   * @public
   * <p>Selects inference experiments whose names contain this name.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>
   *            Selects inference experiments of this type. For the possible types of inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>.
   *        </p>
   */
  Type?: InferenceExperimentType;

  /**
   * @public
   * <p>
   *            Selects inference experiments which are in this status. For the possible statuses, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>.
   *        </p>
   */
  StatusEquals?: InferenceExperimentStatus;

  /**
   * @public
   * <p>Selects inference experiments which were created after this timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were created before this timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were last modified after this timestamp.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>Selects inference experiments which were last modified before this timestamp.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The column by which to sort the listed inference experiments.</p>
   */
  SortBy?: SortInferenceExperimentsBy;

  /**
   * @public
   * <p>The direction of sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>
   *            The response from the last list when returning a list large enough to need tokening.
   *        </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInferenceExperimentsResponse {
  /**
   * @public
   * <p>List of inference experiments.</p>
   */
  InferenceExperiments?: InferenceExperimentSummary[];

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
export const ListInferenceRecommendationsJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListInferenceRecommendationsJobsSortBy =
  (typeof ListInferenceRecommendationsJobsSortBy)[keyof typeof ListInferenceRecommendationsJobsSortBy];

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsRequest {
  /**
   * @public
   * <p>A filter that returns only jobs created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs that were last modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs that were last modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A string in the job name. This filter returns only recommendations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that retrieves only inference recommendations jobs with a specific status.</p>
   */
  StatusEquals?: RecommendationJobStatus;

  /**
   * @public
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy;

  /**
   * @public
   * <p>The sort order for the results.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request
   *          was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *          of recommendations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of recommendations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only jobs that were created for this model.</p>
   */
  ModelNameEquals?: string;

  /**
   * @public
   * <p>A filter that returns only jobs that were created for this versioned model package.</p>
   */
  ModelPackageVersionArnEquals?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsResponse {
  /**
   * @public
   * <p>The recommendations created from the Amazon SageMaker Inference Recommender job.</p>
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * @public
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsRequest {
  /**
   * @public
   * <p>The name for the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned.</p>
   */
  Status?: RecommendationJobStatus;

  /**
   * @public
   * <p>A filter to return details about the specified type of subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType?: RecommendationStepType;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsResponse {
  /**
   * @public
   * <p>A list of all subtask details in Inference Recommender.</p>
   */
  Steps?: InferenceRecommendationsJobStep[];

  /**
   * @public
   * <p>A token that you can specify in your next request to return more results from the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 */
export interface ListLabelingJobsRequest {
  /**
   * @public
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

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
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   */
  StatusEquals?: LabelingJobStatus;
}

/**
 * @public
 */
export interface ListLabelingJobsResponse {
  /**
   * @public
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListLabelingJobsForWorkteamSortByOptions = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type ListLabelingJobsForWorkteamSortByOptions =
  (typeof ListLabelingJobsForWorkteamSortByOptions)[keyof typeof ListLabelingJobsForWorkteamSortByOptions];

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamResponse {
  /**
   * @public
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortLineageGroupsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortLineageGroupsBy = (typeof SortLineageGroupsBy)[keyof typeof SortLineageGroupsBy];

/**
 * @public
 */
export interface ListLineageGroupsRequest {
  /**
   * @public
   * <p>A timestamp to filter against lineage groups created after a certain point in time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A timestamp to filter against lineage groups created before a certain point in time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *          <code>CreationTime</code>.</p>
   */
  SortBy?: SortLineageGroupsBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *          10.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLineageGroupsResponse {
  /**
   * @public
   * <p>A list of lineage groups and their properties.</p>
   */
  LineageGroupSummaries?: LineageGroupSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsRequest {
  /**
   * @public
   * <p>Name of the endpoint to monitor for model bias.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model bias jobs to return in the response. The default value is
   *          10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortBy = (typeof ModelCardExportJobSortBy)[keyof typeof ModelCardExportJobSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortOrder =
  (typeof ModelCardExportJobSortOrder)[keyof typeof ModelCardExportJobSortOrder];

/**
 * @public
 */
export interface ListModelCardExportJobsRequest {
  /**
   * @public
   * <p>List export jobs for the model card with the specified name.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>List export jobs for the model card with the specified version.</p>
   */
  ModelCardVersion?: number;

  /**
   * @public
   * <p>Only list model card export jobs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model card export jobs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>Only list model card export jobs with names that contain the specified string.</p>
   */
  ModelCardExportJobNameContains?: string;

  /**
   * @public
   * <p>Only list model card export jobs with the specified status.</p>
   */
  StatusEquals?: ModelCardExportJobStatus;

  /**
   * @public
   * <p>Sort model card export jobs by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardExportJobSortBy;

  /**
   * @public
   * <p>Sort model card export jobs by ascending or descending order.</p>
   */
  SortOrder?: ModelCardExportJobSortOrder;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCardExportJobs</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model card export jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of model card export jobs to list.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the Amazon SageMaker Model Card export job.</p>
 */
export interface ModelCardExportJobSummary {
  /**
   * @public
   * <p>The name of the model card export job.</p>
   */
  ModelCardExportJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * @public
   * <p>The completion status of the model card export job.</p>
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * @public
   * <p>The name of the model card that the export job exports.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The version of the model card that the export job exports.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The date and time that the model card export job was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the model card export job was last modified..</p>
   */
  LastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsResponse {
  /**
   * @public
   * <p>The summaries of the listed model card export jobs.</p>
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card export jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelCardSortBy = (typeof ModelCardSortBy)[keyof typeof ModelCardSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardSortOrder = (typeof ModelCardSortOrder)[keyof typeof ModelCardSortOrder];

/**
 * @public
 */
export interface ListModelCardsRequest {
  /**
   * @public
   * <p>Only list model cards that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model cards that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model cards to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Only list model cards with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>Only list model cards with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCards</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of model cards, use
   *          the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Sort model cards by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardSortBy;

  /**
   * @public
   * <p>Sort model cards by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * @public
 * <p>A summary of the model card.</p>
 */
export interface ModelCardSummary {
  /**
   * @public
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

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
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * @public
   * <p>The date and time that the model card was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The date and time that the model card was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardsResponse {
  /**
   * @public
   * <p>The summaries of the listed model cards.</p>
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          cards, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelCardVersionSortBy = {
  VERSION: "Version",
} as const;

/**
 * @public
 */
export type ModelCardVersionSortBy = (typeof ModelCardVersionSortBy)[keyof typeof ModelCardVersionSortBy];

/**
 * @public
 */
export interface ListModelCardVersionsRequest {
  /**
   * @public
   * <p>Only list model card versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>Only list model card versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model card versions to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>List model card versions for the model card with the specified name or Amazon Resource Name (ARN).</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>Only list model card versions with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelCardVersions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of model card
   *          versions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Sort listed model card versions by version. Sorts by version by default.</p>
   */
  SortBy?: ModelCardVersionSortBy;

  /**
   * @public
   * <p>Sort model card versions by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * @public
 * <p>A summary of a specific version of the model card.</p>
 */
export interface ModelCardVersionSummary {
  /**
   * @public
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

  /**
   * @public
   * <p>The approval status of the model card version within your organization. Different organizations might have different criteria for model card review and approval.</p>
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
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * @public
   * <p>A version of the model card.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * @public
   * <p>The date and time that the model card version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time date and time that the model card version was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardVersionsResponse {
  /**
   * @public
   * <p>The summaries of the listed versions of the model card.</p>
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * @public
   * <p>Name of the endpoint to monitor for model explainability.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model explainability jobs created before a specified
   *          time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model explainability jobs created after a specified
   *          time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelMetadataFilterType = {
  DOMAIN: "Domain",
  FRAMEWORK: "Framework",
  FRAMEWORKVERSION: "FrameworkVersion",
  TASK: "Task",
} as const;

/**
 * @public
 */
export type ModelMetadataFilterType = (typeof ModelMetadataFilterType)[keyof typeof ModelMetadataFilterType];

/**
 * @public
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 */
export interface ModelMetadataFilter {
  /**
   * @public
   * <p>The name of the of the model to filter by.</p>
   */
  Name: ModelMetadataFilterType | undefined;

  /**
   * @public
   * <p>The value to filter the model metadata.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 */
export interface ModelMetadataSearchExpression {
  /**
   * @public
   * <p>A list of filter objects.</p>
   */
  Filters?: ModelMetadataFilter[];
}

/**
 * @public
 */
export interface ListModelMetadataRequest {
  /**
   * @public
   * <p>One or more filters that searches for the specified resource or resources
   *           in a search. All resource objects that satisfy the expression's condition are
   *           included in the search results. Specify the  Framework, FrameworkVersion, Domain
   *           or Task to filter supported. Filter names and values are case-sensitive.</p>
   */
  SearchExpression?: ModelMetadataSearchExpression;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated,
   *            the response includes a NextToken. To retrieve the next set of model metadata,
   *            use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of the model metadata.</p>
 */
export interface ModelMetadataSummary {
  /**
   * @public
   * <p>The machine learning domain of the model.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The machine learning framework of the model.</p>
   */
  Framework: string | undefined;

  /**
   * @public
   * <p>The machine learning task of the model.</p>
   */
  Task: string | undefined;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  Model: string | undefined;

  /**
   * @public
   * <p>The framework version of the model.</p>
   */
  FrameworkVersion: string | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataResponse {
  /**
   * @public
   * <p>A structure that holds model metadata.</p>
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * @public
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelPackageGroupSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageGroupSortBy = (typeof ModelPackageGroupSortBy)[keyof typeof ModelPackageGroupSortBy];

/**
 * @public
 */
export interface ListModelPackageGroupsInput {
  /**
   * @public
   * <p>A filter that returns only model groups created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only model groups created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model group name. This filter returns only model groups whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             model groups, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageGroupSortBy;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Summary information about a model group.</p>
 */
export interface ModelPackageGroupSummary {
  /**
   * @public
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * @public
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * @public
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListModelPackageGroupsOutput {
  /**
   * @public
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set
   *             of model groups, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelPackageType = {
  BOTH: "Both",
  UNVERSIONED: "Unversioned",
  VERSIONED: "Versioned",
} as const;

/**
 * @public
 */
export type ModelPackageType = (typeof ModelPackageType)[keyof typeof ModelPackageType];

/**
 * @public
 * @enum
 */
export const ModelPackageSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageSortBy = (typeof ModelPackageSortBy)[keyof typeof ModelPackageSortBy];

/**
 * @public
 */
export interface ListModelPackagesInput {
  /**
   * @public
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only the model packages with the specified approval
   *             status.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * @public
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>A filter that returns only the model packages of the specified type. This can be one
   *             of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNVERSIONED</code> - List only unversioined models.
   *                     This is the default value if no <code>ModelPackageType</code> is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERSIONED</code> - List only versioned models.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOTH</code> - List both versioned and unversioned models.</p>
   *             </li>
   *          </ul>
   */
  ModelPackageType?: ModelPackageType;

  /**
   * @public
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy;

  /**
   * @public
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * @public
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * @public
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * @public
   * <p>If the model package is a versioned model, the version of the model.</p>
   */
  ModelPackageVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * @public
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * @public
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

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
}

/**
 * @public
 */
export interface ListModelPackagesOutput {
  /**
   * @public
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsRequest {
  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions that are associated
   *          with the specified endpoint.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a call to
   *             <code>ListModelQualityJobDefinitions</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the transform job name. This filter returns only model quality monitoring
   *          job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only model quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsResponse {
  /**
   * @public
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * @public
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the
   *          next set of model quality monitoring job definitions, use it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type ModelSortKey = (typeof ModelSortKey)[keyof typeof ModelSortKey];

/**
 * @public
 */
export interface ListModelsInput {
  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey;

  /**
   * @public
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey;

  /**
   * @public
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A string in the model name. This filter returns only models whose name contains the
   *             specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  /**
   * @public
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsOutput {
  /**
   * @public
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * @public
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringAlertHistorySortKey = {
  CreationTime: "CreationTime",
  Status: "Status",
} as const;

/**
 * @public
 */
export type MonitoringAlertHistorySortKey =
  (typeof MonitoringAlertHistorySortKey)[keyof typeof MonitoringAlertHistorySortKey];

/**
 * @public
 * @enum
 */
export const MonitoringAlertStatus = {
  IN_ALERT: "InAlert",
  OK: "OK",
} as const;

/**
 * @public
 */
export type MonitoringAlertStatus = (typeof MonitoringAlertStatus)[keyof typeof MonitoringAlertStatus];

/**
 * @public
 */
export interface ListMonitoringAlertHistoryRequest {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;

  /**
   * @public
   * <p>The field used to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringAlertHistorySortKey;

  /**
   * @public
   * <p>The sort order, whether <code>Ascending</code> or <code>Descending</code>, of the alert
   *          history. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListMonitoringAlertHistory</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          alerts in the history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A filter that returns only alerts created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only alerts created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that retrieves only alerts with a specific status.</p>
   */
  StatusEquals?: MonitoringAlertStatus;
}

/**
 * @public
 * <p>Provides summary information of an alert's history.</p>
 */
export interface MonitoringAlertHistorySummary {
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
   * <p>A timestamp that indicates when the first alert transition occurred in an alert history.
   *       An alert transition can be from status <code>InAlert</code> to <code>OK</code>,
   *       or from <code>OK</code> to <code>InAlert</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The current alert status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryResponse {
  /**
   * @public
   * <p>An alert history for a model monitoring schedule.</p>
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMonitoringAlertsRequest {
  /**
   * @public
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>If the result of the previous <code>ListMonitoringAlerts</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the
   *          history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into
 *             <code>InAlert</code> status.</p>
 */
export interface ModelDashboardIndicatorAction {
  /**
   * @public
   * <p>Indicates whether the alert action is turned on.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>A list of alert actions taken in response to an alert going into
 *             <code>InAlert</code> status.</p>
 */
export interface MonitoringAlertActions {
  /**
   * @public
   * <p>An alert action taken to light up an icon on the Model Dashboard when an alert goes into
   *          <code>InAlert</code> status.</p>
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction;
}

/**
 * @public
 * <p>Provides summary information about a monitor alert.</p>
 */
export interface MonitoringAlertSummary {
  /**
   * @public
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when a monitor alert was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>A timestamp that indicates when a monitor alert was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The current status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | undefined;

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

  /**
   * @public
   * <p>A list of alert actions taken in response to an alert going into
   *             <code>InAlert</code> status.</p>
   */
  Actions: MonitoringAlertActions | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsResponse {
  /**
   * @public
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringExecutionSortKey = {
  CREATION_TIME: "CreationTime",
  SCHEDULED_TIME: "ScheduledTime",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringExecutionSortKey = (typeof MonitoringExecutionSortKey)[keyof typeof MonitoringExecutionSortKey];

/**
 * @public
 */
export interface ListMonitoringExecutionsRequest {
  /**
   * @public
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * @public
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * @public
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus;

  /**
   * @public
   * <p>Gets a list of the monitoring job runs of the specified monitoring job
   *          definitions.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>A filter that returns only the monitoring job runs of the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const MonitoringScheduleSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringScheduleSortKey = (typeof MonitoringScheduleSortKey)[keyof typeof MonitoringScheduleSortKey];

/**
 * @public
 */
export interface ListMonitoringSchedulesRequest {
  /**
   * @public
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringScheduleSortKey;

  /**
   * @public
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus;

  /**
   * @public
   * <p>Gets a list of the monitoring schedules for the specified monitoring job
   *          definition.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>A filter that returns only the monitoring schedules for the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * @public
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  /**
   * @public
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * @public
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * @public
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * @public
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * @public
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringType?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * @public
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * @public
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortKey = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortKey =
  (typeof NotebookInstanceLifecycleConfigSortKey)[keyof typeof NotebookInstanceLifecycleConfigSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortOrder =
  (typeof NotebookInstanceLifecycleConfigSortOrder)[keyof typeof NotebookInstanceLifecycleConfigSortOrder];

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * @public
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey;

  /**
   * @public
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder;

  /**
   * @public
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;
}

/**
 * @public
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * @public
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * @public
   * <p>If the response is truncated, SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortKey = (typeof NotebookInstanceSortKey)[keyof typeof NotebookInstanceSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortOrder = (typeof NotebookInstanceSortOrder)[keyof typeof NotebookInstanceSortOrder];

/**
 * @public
 */
export interface ListNotebookInstancesInput {
  /**
   * @public
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *          <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *          </note>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey;

  /**
   * @public
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder;

  /**
   * @public
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * @public
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus;

  /**
   * @public
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * @public
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * @public
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;
}

/**
 * @public
 * <p>Provides summary information for an SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  /**
   * @public
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * @public
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus;

  /**
   * @public
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
   */
  Url?: string;

  /**
   * @public
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType;

  /**
   * @public
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * @public
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * @public
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

/**
 * @public
 */
export interface ListNotebookInstancesOutput {
  /**
   * @public
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

/**
 * @public
 * @enum
 */
export const SortPipelineExecutionsBy = {
  CREATION_TIME: "CreationTime",
  PIPELINE_EXECUTION_ARN: "PipelineExecutionArn",
} as const;

/**
 * @public
 */
export type SortPipelineExecutionsBy = (typeof SortPipelineExecutionsBy)[keyof typeof SortPipelineExecutionsBy];

/**
 * @public
 */
export interface ListPipelineExecutionsRequest {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>A filter that returns the pipeline executions that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>A filter that returns the pipeline executions that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelineExecutionsBy;

  /**
   * @public
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipeline executions to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A pipeline execution summary.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>The start time of the pipeline execution.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus;

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
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   */
  PipelineExecutionFailureReason?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * @public
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified
   *          filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date,
   *          and the status. This list can be empty. </p>
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * @public
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Metadata for a processing job step.</p>
 */
export interface ProcessingJobStepMetadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  Arn?: string;
}

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
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

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
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   */
  AttemptCount?: number;

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
   * <p>If the previous response was truncated, you will receive this token.
   *             Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

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
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
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
   * <p>If the previous response was truncated, you will receive this token.
   *             Use it in your next request to receive the next set of results.</p>
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
 * <p>Details of the Studio Lifecycle Configuration.</p>
 */
export interface StudioLifecycleConfigDetails {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * @public
   * <p>The name of the Studio Lifecycle Configuration.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * @public
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
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
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
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

  /**
   * @public
   * <p>Configuration to control how SageMaker captures inference data for batch transform jobs.</p>
   */
  DataCaptureConfig?: BatchDataCaptureConfig;
}

/**
 * @internal
 */
export const ModelCardFilterSensitiveLog = (obj: ModelCard): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});
