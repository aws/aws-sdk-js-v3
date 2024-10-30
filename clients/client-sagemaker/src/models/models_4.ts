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
  CacheHitResult,
  CallbackStepMetadata,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  ClusterInstanceGroupSpecification,
  ClusterNodeRecovery,
  CodeEditorAppImageConfig,
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
  DefaultSpaceSettings,
  DeploymentConfig,
  DriftCheckBaselines,
  EdgeOutputConfig,
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
  ModelLifeCycle,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageModelCardFilterSensitiveLog,
  ModelPackageSecurityConfig,
  ModelPackageValidationSpecification,
  ModelVariantConfig,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  OptimizationJobDeploymentInstanceType,
  ParallelismConfiguration,
  PipelineDefinitionS3Location,
  Processor,
  RetryStrategy,
  RootAccess,
  ShadowModeConfig,
  SkipModelValidation,
  SourceAlgorithmSpecification,
  TagPropagation,
  ThroughputMode,
  TrackingServerSize,
  TtlDuration,
  UiTemplate,
  UserSettings,
  VendorGuidance,
} from "./models_1";

import {
  CrossAccountFilterOption,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentRecommendation,
  EndpointStatus,
  ExperimentConfig,
  FeatureParameter,
  HyperParameterTrainingJobSummary,
  ModelArtifacts,
  ModelClientConfig,
  OidcConfig,
  OidcConfigFilterSensitiveLog,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  ServiceCatalogProvisioningDetails,
  SharingType,
  SourceIpConfig,
  SpaceSettings,
  SpaceStorageSettings,
  StudioLifecycleConfigAppType,
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
  EndpointConfigStepMetadata,
  EndpointStepMetadata,
  ExecutionStatus,
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
  ModelCardExportJobStatus,
  ModelPackageGroupStatus,
  ModelPackageStatusDetails,
  MonitoringExecutionSummary,
  MonitoringJobDefinitionSortKey,
  MonitoringJobDefinitionSummary,
  NotebookInstanceStatus,
  OptimizationJobStatus,
  OrderKey,
  PipelineExecutionStatus,
  PipelineExperimentConfig,
  PipelineStatus,
  ProcessingJobStatus,
  ProjectStatus,
  ScheduleStatus,
  SecondaryStatus,
  SecondaryStatusTransition,
  SelectiveExecutionConfig,
  ServiceCatalogProvisionedProductDetails,
  SortBy,
  SortOrder,
  SpaceStatus,
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
 */
export interface ListModelBiasJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model bias.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model bias jobs to return in the response. The default value is
   *          10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
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
   * <p>List export jobs for the model card with the specified name.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>List export jobs for the model card with the specified version.</p>
   * @public
   */
  ModelCardVersion?: number;

  /**
   * <p>Only list model card export jobs that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model card export jobs that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Only list model card export jobs with names that contain the specified string.</p>
   * @public
   */
  ModelCardExportJobNameContains?: string;

  /**
   * <p>Only list model card export jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: ModelCardExportJobStatus;

  /**
   * <p>Sort model card export jobs by either name or creation time. Sorts by creation time by default.</p>
   * @public
   */
  SortBy?: ModelCardExportJobSortBy;

  /**
   * <p>Sort model card export jobs by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardExportJobSortOrder;

  /**
   * <p>If the response to a previous <code>ListModelCardExportJobs</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model card export jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model card export jobs to list.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The summary of the Amazon SageMaker Model Card export job.</p>
 * @public
 */
export interface ModelCardExportJobSummary {
  /**
   * <p>The name of the model card export job.</p>
   * @public
   */
  ModelCardExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   * @public
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * <p>The completion status of the model card export job.</p>
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * <p>The name of the model card that the export job exports.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the export job exports.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card export job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model card export job was last modified..</p>
   * @public
   */
  LastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsResponse {
  /**
   * <p>The summaries of the listed model card export jobs.</p>
   * @public
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card export jobs, use it in the subsequent request.</p>
   * @public
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
   * <p>Only list model cards that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model cards that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model cards to list.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Only list model cards with names that contain the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>Only list model cards with the specified approval status.</p>
   * @public
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * <p>If the response to a previous <code>ListModelCards</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of model cards, use
   *          the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Sort model cards by either name or creation time. Sorts by creation time by default.</p>
   * @public
   */
  SortBy?: ModelCardSortBy;

  /**
   * <p>Sort model cards by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * <p>A summary of the model card.</p>
 * @public
 */
export interface ModelCardSummary {
  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

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
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>The date and time that the model card was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the model card was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardsResponse {
  /**
   * <p>The summaries of the listed model cards.</p>
   * @public
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          cards, use it in the subsequent request.</p>
   * @public
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
   * <p>Only list model card versions that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model card versions that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model card versions to list.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>List model card versions for the model card with the specified name or Amazon Resource Name (ARN).</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>Only list model card versions with the specified approval status.</p>
   * @public
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * <p>If the response to a previous <code>ListModelCardVersions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of model card
   *          versions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Sort listed model card versions by version. Sorts by version by default.</p>
   * @public
   */
  SortBy?: ModelCardVersionSortBy;

  /**
   * <p>Sort model card versions by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardSortOrder;
}

/**
 * <p>A summary of a specific version of the model card.</p>
 * @public
 */
export interface ModelCardVersionSummary {
  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

  /**
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
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>A version of the model card.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card version was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time date and time that the model card version was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListModelCardVersionsResponse {
  /**
   * <p>The summaries of the listed versions of the model card.</p>
   * @public
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card versions, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model explainability.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field.
   *    The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model explainability jobs created before a specified
   *          time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model explainability jobs created after a specified
   *          time.</p>
   * @public
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
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
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 * @public
 */
export interface ModelMetadataFilter {
  /**
   * <p>The name of the of the model to filter by.</p>
   * @public
   */
  Name: ModelMetadataFilterType | undefined;

  /**
   * <p>The value to filter the model metadata.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 * @public
 */
export interface ModelMetadataSearchExpression {
  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  Filters?: ModelMetadataFilter[];
}

/**
 * @public
 */
export interface ListModelMetadataRequest {
  /**
   * <p>One or more filters that searches for the specified resource or resources
   *           in a search. All resource objects that satisfy the expression's condition are
   *           included in the search results. Specify the  Framework, FrameworkVersion, Domain
   *           or Task to filter supported. Filter names and values are case-sensitive.</p>
   * @public
   */
  SearchExpression?: ModelMetadataSearchExpression;

  /**
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated,
   *            the response includes a NextToken. To retrieve the next set of model metadata,
   *            use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A summary of the model metadata.</p>
 * @public
 */
export interface ModelMetadataSummary {
  /**
   * <p>The machine learning domain of the model.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The machine learning framework of the model.</p>
   * @public
   */
  Framework: string | undefined;

  /**
   * <p>The machine learning task of the model.</p>
   * @public
   */
  Task: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  Model: string | undefined;

  /**
   * <p>The framework version of the model.</p>
   * @public
   */
  FrameworkVersion: string | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataResponse {
  /**
   * <p>A structure that holds model metadata.</p>
   * @public
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   * @public
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
   * <p>A filter that returns only model groups created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model groups created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A string in the model group name. This filter returns only model groups whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             model groups, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelPackageGroupSortBy;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>A filter that returns either model groups shared with you or model groups in
   * 	  your own account. When the value is <code>CrossAccount</code>, the results show
   * 	  the resources made discoverable to you from other accounts. When the value is
   *           <code>SameAccount</code> or <code>null</code>, the results show resources from your
   *  	  account. The default is <code>SameAccount</code>.</p>
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption;
}

/**
 * <p>Summary information about a model group.</p>
 * @public
 */
export interface ModelPackageGroupSummary {
  /**
   * <p>The name of the model group.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   * @public
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   * @public
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the model group.</p>
   * @public
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListModelPackageGroupsOutput {
  /**
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   * @public
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set
   *             of model groups, use it in the subsequent request.</p>
   * @public
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
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model packages to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only the model packages with the specified approval
   *             status.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
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
   * @public
   */
  ModelPackageType?: ModelPackageType;

  /**
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelPackageSortBy;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * <p>Provides summary information about a model package.</p>
 * @public
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   * @public
   */
  ModelPackageName?: string;

  /**
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>If the model package is a versioned model, the version of the model.</p>
   * @public
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the model package.</p>
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
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
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;
}

/**
 * @public
 */
export interface ListModelPackagesOutput {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   * @public
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsRequest {
  /**
   * <p>A filter that returns only model quality monitoring job definitions that are associated
   *          with the specified endpoint.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model quality monitoring job definitions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a call to
   *             <code>ListModelQualityJobDefinitions</code>.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A string in the transform job name. This filter returns only model quality monitoring
   *          job definitions whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created before the
   *          specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created after the
   *          specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsResponse {
  /**
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the
   *          next set of model quality monitoring job definitions, use it in the next request.</p>
   * @public
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
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelSortKey;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A string in the model name. This filter returns only models whose name contains the
   *             specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date;
}

/**
 * <p>Provides summary information about a model.</p>
 * @public
 */
export interface ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsOutput {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   * @public
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   * @public
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
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName?: string;

  /**
   * <p>The field used to sort results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringAlertHistorySortKey;

  /**
   * <p>The sort order, whether <code>Ascending</code> or <code>Descending</code>, of the alert
   *          history. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlertHistory</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          alerts in the history, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only alerts created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only alerts created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only alerts with a specific status.</p>
   * @public
   */
  StatusEquals?: MonitoringAlertStatus;
}

/**
 * <p>Provides summary information of an alert's history.</p>
 * @public
 */
export interface MonitoringAlertHistorySummary {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when the first alert transition occurred in an alert history.
   *       An alert transition can be from status <code>InAlert</code> to <code>OK</code>,
   *       or from <code>OK</code> to <code>InAlert</code>.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The current alert status of an alert.</p>
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryResponse {
  /**
   * <p>An alert history for a model monitoring schedule.</p>
   * @public
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMonitoringAlertsRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlerts</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the
   *          history, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into
 *             <code>InAlert</code> status.</p>
 * @public
 */
export interface ModelDashboardIndicatorAction {
  /**
   * <p>Indicates whether the alert action is turned on.</p>
   * @public
   */
  Enabled?: boolean;
}

/**
 * <p>A list of alert actions taken in response to an alert going into
 *             <code>InAlert</code> status.</p>
 * @public
 */
export interface MonitoringAlertActions {
  /**
   * <p>An alert action taken to light up an icon on the Model Dashboard when an alert goes into
   *          <code>InAlert</code> status.</p>
   * @public
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction;
}

/**
 * <p>Provides summary information about a monitor alert.</p>
 * @public
 */
export interface MonitoringAlertSummary {
  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of an alert.</p>
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;

  /**
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   * @public
   */
  DatapointsToAlert: number | undefined;

  /**
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   * @public
   */
  EvaluationPeriod: number | undefined;

  /**
   * <p>A list of alert actions taken in response to an alert going into
   *             <code>InAlert</code> status.</p>
   * @public
   */
  Actions: MonitoringAlertActions | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsResponse {
  /**
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   * @public
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   * @public
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
   * <p>Name of a specific schedule to fetch jobs for.</p>
   * @public
   */
  MonitoringScheduleName?: string;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringExecutionSortKey;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   * @public
   */
  ScheduledTimeBefore?: Date;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   * @public
   */
  ScheduledTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: ExecutionStatus;

  /**
   * <p>Gets a list of the monitoring job runs of the specified monitoring job
   *          definitions.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring job runs of the specified monitoring
   *          type.</p>
   * @public
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   * @public
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
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
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or
   *    <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringScheduleSortKey;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   * @public
   */
  StatusEquals?: ScheduleStatus;

  /**
   * <p>Gets a list of the monitoring schedules for the specified monitoring job
   *          definition.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring schedules for the specified monitoring
   *          type.</p>
   * @public
   */
  MonitoringTypeEquals?: MonitoringType;
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 * @public
 */
export interface MonitoringScheduleSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   * @public
   */
  MonitoringType?: MonitoringType;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use
   *    it in the next request.</p>
   * @public
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
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 * @public
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>If the response is truncated, SageMaker returns this token. To get the next
   *             set of lifecycle configurations, use it in the next request. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   * @public
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
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *          <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *          </note>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   * @public
   */
  SortBy?: NotebookInstanceSortKey;

  /**
   * <p>The sort order for results. </p>
   * @public
   */
  SortOrder?: NotebookInstanceSortOrder;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   * @public
   */
  StatusEquals?: NotebookInstanceStatus;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   * @public
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   * @public
   */
  AdditionalCodeRepositoryEquals?: string;
}

/**
 * <p>Provides summary information for an SageMaker notebook instance.</p>
 * @public
 */
export interface NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   * @public
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
   * @public
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   * @public
   */
  InstanceType?: _InstanceType;

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  AdditionalCodeRepositories?: string[];
}

/**
 * @public
 */
export interface ListNotebookInstancesOutput {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, SageMaker returns this token. To retrieve the next set of notebook
   *             instances, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   * @public
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

/**
 * @public
 * @enum
 */
export const ListOptimizationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListOptimizationJobsSortBy = (typeof ListOptimizationJobsSortBy)[keyof typeof ListOptimizationJobsSortBy];

/**
 * @public
 */
export interface ListOptimizationJobsRequest {
  /**
   * <p>A token that you use to get the next set of results following a truncated response. If
   *          the response to the previous request was truncated, that response provides the value for
   *          this token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of optimization jobs to return in the response. The default is
   *          50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters the results to only those optimization jobs that were created after the
   *          specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filters the results to only those optimization jobs that were created before the
   *          specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Filters the results to only those optimization jobs that were updated after the
   *          specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Filters the results to only those optimization jobs that were updated before the
   *          specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Filters the results to only those optimization jobs that apply the specified
   *          optimization techniques. You can specify either <code>Quantization</code> or
   *             <code>Compilation</code>.</p>
   * @public
   */
  OptimizationContains?: string;

  /**
   * <p>Filters the results to only those optimization jobs with a name that contains the
   *          specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>Filters the results to only those optimization jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: OptimizationJobStatus;

  /**
   * <p>The field by which to sort the optimization jobs in the response. The default is
   *             <code>CreationTime</code>
   *          </p>
   * @public
   */
  SortBy?: ListOptimizationJobsSortBy;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>
   *          </p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * <p>Summarizes an optimization job by providing some of its key properties.</p>
 * @public
 */
export interface OptimizationJobSummary {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the optimization job.</p>
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * <p>The time when you created the optimization job.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The current status of the optimization job.</p>
   * @public
   */
  OptimizationJobStatus: OptimizationJobStatus | undefined;

  /**
   * <p>The time when the optimization job started.</p>
   * @public
   */
  OptimizationStartTime?: Date;

  /**
   * <p>The time when the optimization job finished processing.</p>
   * @public
   */
  OptimizationEndTime?: Date;

  /**
   * <p>The time when the optimization job was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The type of instance that hosts the optimized model that you create with the optimization job.</p>
   * @public
   */
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType | undefined;

  /**
   * <p>The optimization techniques that are applied by the optimization job.</p>
   * @public
   */
  OptimizationTypes: string[] | undefined;
}

/**
 * @public
 */
export interface ListOptimizationJobsResponse {
  /**
   * <p>A list of optimization jobs and their properties that matches any of the filters you
   *          specified in the request.</p>
   * @public
   */
  OptimizationJobSummaries: OptimizationJobSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results following a
   *          truncated response.</p>
   * @public
   */
  NextToken?: string;
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
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>A filter that returns the pipeline executions that were created after a specified
   *          time.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipeline executions that were created before a specified
   *          time.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortBy?: SortPipelineExecutionsBy;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline executions to return in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A pipeline execution summary.</p>
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The start time of the pipeline execution.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The status of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionStatus?: PipelineExecutionStatus;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   * @public
   */
  PipelineExecutionFailureReason?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified
   *          filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date,
   *          and the status. This list can be empty. </p>
   * @public
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * <p>Metadata for Model steps.</p>
 * @public
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Metadata for a processing job step.</p>
 * @public
 */
export interface ProcessingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Container for the metadata for a Quality check step. For more information, see
 *          the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 *       </p>
 * @public
 */
export interface QualityCheckStepMetadata {
  /**
   * <p>The type of the Quality check step.</p>
   * @public
   */
  CheckType?: string;

  /**
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   * @public
   */
  BaselineUsedForDriftCheckStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   * @public
   */
  BaselineUsedForDriftCheckConstraints?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   * @public
   */
  CalculatedBaselineStatistics?: string;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   * @public
   */
  CalculatedBaselineConstraints?: string;

  /**
   * <p>The model package group name.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   * @public
   */
  ViolationReport?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   * @public
   */
  CheckJobArn?: string;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   * @public
   */
  SkipCheck?: boolean;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties
   *          <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>.
   *          If it is set to <code>False</code>, the previous baseline of the configured check type must also be available.
   *          These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code>
   *             BaselineUsedForDriftCheckStatistics</code> properties. </p>
   * @public
   */
  RegisterNewBaseline?: boolean;
}

/**
 * <p>Metadata for a register model job step.</p>
 * @public
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Metadata for a training job step.</p>
 * @public
 */
export interface TrainingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Metadata for a transform job step.</p>
 * @public
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Metadata for a tuning step.</p>
 * @public
 */
export interface TuningJobStepMetaData {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Metadata for a step execution.</p>
 * @public
 */
export interface PipelineExecutionStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   * @public
   */
  TrainingJob?: TrainingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   * @public
   */
  ProcessingJob?: ProcessingJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   * @public
   */
  TransformJob?: TransformJobStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   * @public
   */
  TuningJob?: TuningJobStepMetaData;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   * @public
   */
  Model?: ModelStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.</p>
   * @public
   */
  RegisterModel?: RegisterModelStepMetadata;

  /**
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   * @public
   */
  Condition?: ConditionStepMetadata;

  /**
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token,
   *         and a list of output parameters.</p>
   * @public
   */
  Callback?: CallbackStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of
   *         output parameters.</p>
   * @public
   */
  Lambda?: LambdaStepMetadata;

  /**
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   * @public
   */
  EMR?: EMRStepMetadata;

  /**
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
   * @public
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
   * @public
   */
  ClarifyCheck?: ClarifyCheckStepMetadata;

  /**
   * <p>The configurations and outcomes of a Fail step execution.</p>
   * @public
   */
  Fail?: FailStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that was run by this step.</p>
   * @public
   */
  AutoMLJob?: AutoMLJobStepMetadata;

  /**
   * <p>The endpoint that was invoked during this step execution.</p>
   * @public
   */
  Endpoint?: EndpointStepMetadata;

  /**
   * <p>The endpoint configuration used to create an endpoint during this step execution.</p>
   * @public
   */
  EndpointConfig?: EndpointConfigStepMetadata;
}

/**
 * <p>The ARN from an execution of the current pipeline.</p>
 * @public
 */
export interface SelectiveExecutionResult {
  /**
   * <p>The ARN from an execution of the current pipeline.</p>
   * @public
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
 * <p>An execution of a step in a pipeline.</p>
 * @public
 */
export interface PipelineExecutionStep {
  /**
   * <p>The name of the step that is executed.</p>
   * @public
   */
  StepName?: string;

  /**
   * <p>The display name of the step.</p>
   * @public
   */
  StepDisplayName?: string;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  StepDescription?: string;

  /**
   * <p>The time that the step started executing.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The time that the step stopped executing.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The status of the step execution.</p>
   * @public
   */
  StepStatus?: StepStatus;

  /**
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   * @public
   */
  CacheHitResult?: CacheHitResult;

  /**
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Metadata to run the pipeline step.</p>
   * @public
   */
  Metadata?: PipelineExecutionStepMetadata;

  /**
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   * @public
   */
  AttemptCount?: number;

  /**
   * <p>The ARN from an execution of the current pipeline from which
   *            results are reused for this step.</p>
   * @public
   */
  SelectiveExecutionResult?: SelectiveExecutionResult;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsResponse {
  /**
   * <p>A list of <code>PipeLineExecutionStep</code> objects. Each
   *             <code>PipeLineExecutionStep</code> consists of StepName, StartTime, EndTime, StepStatus,
   *          and Metadata. Metadata is an object with properties for each job that contains relevant
   *          information about the job created by the step.</p>
   * @public
   */
  PipelineExecutionSteps?: PipelineExecutionStep[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of parameters to return in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Assigns a value to a named Pipeline parameter.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter to assign a value to. This
   *          parameter name must match a named parameter in the
   *          pipeline definition.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The literal value for the parameter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionResponse {
  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   * @public
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   * @public
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
   * <p>The prefix of the pipeline name.</p>
   * @public
   */
  PipelineNamePrefix?: string;

  /**
   * <p>A filter that returns the pipelines that were created after a specified
   *          time.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipelines that were created before a specified
   *          time.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortBy?: SortPipelinesBy;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipelines to return in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A summary of a pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The creation time of the pipeline.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The last time that a pipeline execution began.</p>
   * @public
   */
  LastExecutionTime?: Date;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>Contains a sorted list of <code>PipelineSummary</code> objects matching the specified
   *          filters. Each <code>PipelineSummary</code> consists of PipelineArn, PipelineName,
   *          ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and
   *          RoleArn. This list can be empty. </p>
   * @public
   */
  PipelineSummaries?: PipelineSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProcessingJobsRequest {
  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: ProcessingJobStatus;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortBy;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of processing
   *             jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of processing jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Summary of information about a processing job.</p>
 * @public
 */
export interface ProcessingJobSummary {
  /**
   * <p>The name of the processing job.</p>
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   * @public
   */
  ProcessingEndTime?: Date;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the processing job.</p>
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   * @public
   */
  ExitMessage?: string;
}

/**
 * @public
 */
export interface ListProcessingJobsResponse {
  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   * @public
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   * @public
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
   * <p>A filter that returns the projects that were created after a specified
   *             time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the projects that were created before a specified
   *             time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of projects to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the projects whose name contains a specified
   *             string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListProjects</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of projects, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ProjectSortBy;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: ProjectSortOrder;
}

/**
 * <p>Information about a project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  ProjectDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The time that the project was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * <p>A list of summaries of projects.</p>
   * @public
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   * @public
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
   * <p> A string that partially matches one or more <code>ResourceCatalog</code>s names.
   *             Filters <code>ResourceCatalog</code> by name. </p>
   * @public
   */
  NameContains?: string;

  /**
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created after a
   *             specific date and time. </p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created before a
   *             specific date and time. </p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p> The order in which the resource catalogs are listed. </p>
   * @public
   */
  SortOrder?: ResourceCatalogSortOrder;

  /**
   * <p> The value on which the resource catalog list is sorted. </p>
   * @public
   */
  SortBy?: ResourceCatalogSortBy;

  /**
   * <p> The maximum number of results returned by <code>ListResourceCatalogs</code>. </p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p> A resource catalog containing all of the resources of a specific resource type within
 *             a resource owner account. For an example on sharing the Amazon SageMaker Feature Store
 *                 <code>DefaultFeatureGroupCatalog</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/feature-store-cross-account-discoverability-share-sagemaker-catalog.html">Share Amazon SageMaker Catalog resource type</a> in the Amazon SageMaker Developer Guide.
 *         </p>
 * @public
 */
export interface ResourceCatalog {
  /**
   * <p> The Amazon Resource Name (ARN) of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  ResourceCatalogArn: string | undefined;

  /**
   * <p> The name of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  ResourceCatalogName: string | undefined;

  /**
   * <p> A free form description of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p> The time the <code>ResourceCatalog</code> was created. </p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceCatalogsResponse {
  /**
   * <p> A list of the requested <code>ResourceCatalog</code>s. </p>
   * @public
   */
  ResourceCatalogs?: ResourceCatalog[];

  /**
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   * @public
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single
   *       response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are
   *       more results available than the value specified, a <code>NextToken</code> is provided in the
   *       response. The <code>NextToken</code> indicates that the user should get the next set of
   *       results by providing this token as a part of a subsequent call. The default value for
   *         <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The parameter by which to sort the results. The default is
   *       <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SpaceSortKey;

  /**
   * <p>A parameter to search for the domain ID.</p>
   * @public
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter by which to filter the results.</p>
   * @public
   */
  SpaceNameContains?: string;
}

/**
 * <p>Specifies summary information about the ownership settings.</p>
 * @public
 */
export interface OwnershipSettingsSummary {
  /**
   * <p>The user profile who is the owner of the space.</p>
   * @public
   */
  OwnerUserProfileName?: string;
}

/**
 * <p>Specifies summary information about the space settings.</p>
 * @public
 */
export interface SpaceSettingsSummary {
  /**
   * <p>The type of app created within the space.</p>
   * @public
   */
  AppType?: AppType;

  /**
   * <p>The storage settings for a space.</p>
   * @public
   */
  SpaceStorageSettings?: SpaceStorageSettings;
}

/**
 * <p>Specifies summary information about the space sharing settings.</p>
 * @public
 */
export interface SpaceSharingSettingsSummary {
  /**
   * <p>Specifies the sharing type of the space.</p>
   * @public
   */
  SharingType?: SharingType;
}

/**
 * <p>The space's details.</p>
 * @public
 */
export interface SpaceDetails {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: SpaceStatus;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Specifies summary information about the space settings.</p>
   * @public
   */
  SpaceSettingsSummary?: SpaceSettingsSummary;

  /**
   * <p>Specifies summary information about the space sharing settings.</p>
   * @public
   */
  SpaceSharingSettingsSummary?: SpaceSharingSettingsSummary;

  /**
   * <p>Specifies summary information about the ownership settings.</p>
   * @public
   */
  OwnershipSettingsSummary?: OwnershipSettingsSummary;

  /**
   * <p>The name of the space that appears in the Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>The list of spaces.</p>
   * @public
   */
  Spaces?: SpaceDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStageDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to neeed
   *             tokening.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of requests to select.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>Toggle for excluding devices deployed in other stages.</p>
   * @public
   */
  ExcludeDevicesDeployedInOtherStage?: boolean;

  /**
   * <p>The name of the stage in the deployment.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface ListStageDevicesResponse {
  /**
   * <p>List of summaries of devices allocated to the stage.</p>
   * @public
   */
  DeviceDeploymentSummaries: DeviceDeploymentSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   * @public
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
   * <p>The total number of items to return in the response. If the total number of items
   *       available is more than the value specified, a <code>NextToken</code> is provided in the
   *       response. To resume pagination, provide the <code>NextToken</code> value in the as part of a
   *       subsequent call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle
   *       Configurations, the call returns a token for getting the next set of Lifecycle
   *       Configurations.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A string in the Lifecycle Configuration name. This filter returns only Lifecycle
   *       Configurations whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A parameter to search for the App Type to which the Lifecycle Configuration is
   *       attached.</p>
   * @public
   */
  AppTypeEquals?: StudioLifecycleConfigAppType;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or before the specified
   *       time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or after the specified
   *       time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified before the specified
   *       time.</p>
   * @public
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified after the specified
   *       time.</p>
   * @public
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is CreationTime.</p>
   * @public
   */
  SortBy?: StudioLifecycleConfigSortKey;

  /**
   * <p>The sort order. The default value is Descending.</p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * <p>Details of the Amazon SageMaker Studio Lifecycle Configuration.</p>
 * @public
 */
export interface StudioLifecycleConfigDetails {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   * @public
   */
  StudioLifecycleConfigArn?: string;

  /**
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration.</p>
   * @public
   */
  StudioLifecycleConfigName?: string;

  /**
   * <p>The creation time of the Amazon SageMaker Studio Lifecycle Configuration.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>This value is equivalent to CreationTime because Amazon SageMaker Studio Lifecycle
   *       Configurations are immutable.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The App type to which the Lifecycle Configuration is attached.</p>
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType;
}

/**
 * @public
 */
export interface ListStudioLifecycleConfigsResponse {
  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of Lifecycle Configurations and their properties.</p>
   * @public
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsRequest {
  /**
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   * @public
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             retrieve.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Maximum number of tags to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p> If response is truncated, SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrainingJobsRequest {
  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: TrainingJobStatus;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortBy;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>A filter that retrieves only training jobs with a specific warm pool status.</p>
   * @public
   */
  WarmPoolStatusEquals?: WarmPoolResourceStatus;
}

/**
 * <p>Provides summary information about a training job.</p>
 * @public
 */
export interface TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   * @public
   */
  TrainingEndTime?: Date;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the training job.</p>
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus;
}

/**
 * @public
 */
export interface ListTrainingJobsResponse {
  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   * @public
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   * @public
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
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: TrainingJobStatus;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   *          <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   * @public
   */
  SortBy?: TrainingJobSortByOptions;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that
   *             describe
   *             the training jobs that the
   *                 <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   * @public
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request
   *             was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *             of training jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTransformJobsRequest {
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: TransformJobStatus;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortBy;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of transform
   *             jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTransformJobs.html">ListTransformJobs</a> call.</p>
 * @public
 */
export interface TransformJobSummary {
  /**
   * <p>The name of the transform job.</p>
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   * @public
   */
  TransformJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   * @public
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
   * @public
   */
  TransformEndTime?: Date;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status of the transform job.</p>
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface ListTransformJobsResponse {
  /**
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   * @public
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   * @public
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
   * <p>A filter that returns only components that are part of the specified experiment. If you
   *       specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or
   *         <code>TrialName</code>.</p>
   * @public
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only components that are part of the specified trial. If you specify
   *         <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or
   *         <code>SourceArn</code>.</p>
   * @public
   */
  TrialName?: string;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource Name (ARN).
   *       If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
   *       or <code>TrialName</code>.</p>
   * @public
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only components created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortTrialComponentsBy;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The maximum number of components to return in the response. The default value is
   *       10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A summary of the properties of a trial component. To get all the properties, call the
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 * @public
 */
export interface TrialComponentSummary {
  /**
   * <p>The name of the trial component.</p>
   * @public
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   * @public
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
   * @public
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the component.</p>
   * @public
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface ListTrialComponentsResponse {
  /**
   * <p>A list of the summaries of your trial components.</p>
   * @public
   */
  TrialComponentSummaries?: TrialComponentSummary[];

  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   * @public
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
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   * @public
   */
  ExperimentName?: string;

  /**
   * <p>A filter that returns only trials that are associated with the specified trial
   *       component.</p>
   * @public
   */
  TrialComponentName?: string;

  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortTrialsBy;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the
   *       call returns a token for getting the next set of trials.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 * @public
 */
export interface TrialSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The source of the trial.</p>
   * @public
   */
  TrialSource?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the trial was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListTrialsResponse {
  /**
   * <p>A list of the summaries of your trials.</p>
   * @public
   */
  TrialSummaries?: TrialSummary[];

  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   * @public
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single
   *       response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are
   *       more results available than the value specified, a <code>NextToken</code> is provided in the
   *       response. The <code>NextToken</code> indicates that the user should get the next set of
   *       results by providing this token as a part of a subsequent call. The default value for
   *         <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   * @public
   */
  SortBy?: UserProfileSortKey;

  /**
   * <p>A parameter by which to filter the results.</p>
   * @public
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter by which to filter the results.</p>
   * @public
   */
  UserProfileNameContains?: string;
}

/**
 * <p>The user profile details.</p>
 * @public
 */
export interface UserProfileDetails {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: UserProfileStatus;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListUserProfilesResponse {
  /**
   * <p>The list of user profiles.</p>
   * @public
   */
  UserProfiles?: UserProfileDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
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
   * <p>Sort workforces using the workforce name or creation date.</p>
   * @public
   */
  SortBy?: ListWorkforcesSortByOptions;

  /**
   * <p>Sort workforces in ascending or descending order.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>A filter you can use to search for workforces using part of the workforce name.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>A token to resume pagination.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workforces returned in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkforcesResponse {
  /**
   * <p>A list containing information about your workforce.</p>
   * @public
   */
  Workforces: Workforce[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   * @public
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
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ListWorkteamsSortByOptions;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder;

  /**
   * <p>A string in the work team's name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   * @public
   */
  Workteams: Workteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The properties of a model as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 * @public
 */
export interface Model {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>Describes the container, as part of model definition.</p>
   * @public
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   * @public
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
   * @public
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   * @public
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
   *             have access to. You can control access to and from your resources by configuring a VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to
   *                 Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelArn?: string;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>A list of key-value pairs associated with the model. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A set of recommended deployment configurations for the model.</p>
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation;
}

/**
 * <p>An Amazon SageMaker Model Card.</p>
 * @public
 */
export interface ModelCard {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn?: string;

  /**
   * <p>The unique name of the model card.</p>
   * @public
   */
  ModelCardName?: string;

  /**
   * <p>The version of the model card.</p>
   * @public
   */
  ModelCardVersion?: number;

  /**
   * <p>The content of the model card. Content uses the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
   * @public
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
   * @public
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * <p>The security configuration used to protect model card data.</p>
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>The date and time that the model card was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>The date and time that the model card was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Key-value pairs used to manage metadata for the model card.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The unique name (ID) of the model.</p>
   * @public
   */
  ModelId?: string;

  /**
   * <p>The risk rating of the model. Different organizations might have different criteria for model card risk ratings. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-risk-rating.html">Risk ratings</a>.</p>
   * @public
   */
  RiskRating?: string;

  /**
   * <p>The model package group that contains the model package. Only relevant for model cards created for model packages in the Amazon SageMaker Model Registry.
   *       </p>
   * @public
   */
  ModelPackageGroupName?: string;
}

/**
 * <p>An endpoint that hosts a model displayed in the Amazon SageMaker Model Dashboard.</p>
 * @public
 */
export interface ModelDashboardEndpoint {
  /**
   * <p>The endpoint name.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the endpoint was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The endpoint status.</p>
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
 *         Transform</a>.</p>
 * @public
 */
export interface TransformJob {
  /**
   * <p>The name of the transform job.</p>
   * @public
   */
  TransformJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   * @public
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
   * @public
   */
  TransformJobStatus?: TransformJobStatus;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The name of the model associated with the transform job.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a transform
   *       job. If <code>MaxConcurrentTransforms</code> is set to 0 or left unset, SageMaker checks the
   *       optional execution-parameters to determine the settings for your chosen algorithm. If the
   *       execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms,
   *       you don't need to set a value for <code>MaxConcurrentTransforms</code>.</p>
   * @public
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   * @public
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
   * @public
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference request.
   *       A record is a single unit of input data that inference can be made on. For example, a single
   *       line in a CSV file is a record.</p>
   * @public
   */
  BatchStrategy?: BatchStrategy;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *       values entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source of a transform job and the way the transform job consumes
   *             it.</p>
   * @public
   */
  TransformInput?: TransformInput;

  /**
   * <p>Describes the results of a transform job.</p>
   * @public
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Configuration to control how SageMaker captures inference data for batch transform jobs.</p>
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * <p>Describes the resources, including ML instance types and ML instance count, to use for
   *             transform job.</p>
   * @public
   */
  TransformResources?: TransformResources;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Indicates when the transform job starts on ML instances. You are billed for the time
   *       interval between this time and the value of <code>TransformEndTime</code>.</p>
   * @public
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been completed, or has stopped or failed. You are
   *       billed for the time interval between this time and the value of
   *         <code>TransformStartTime</code>.</p>
   * @public
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the  labeling job that created the transform job.</p>
   * @public
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that created the transform job.</p>
   * @public
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
   * @public
   */
  DataProcessing?: DataProcessing;

  /**
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
   * @public
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>A list of tags associated with the transform job.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>The model card for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 * @public
 */
export interface ModelDashboardModelCard {
  /**
   * <p>The Amazon Resource Name (ARN) for a model card.</p>
   * @public
   */
  ModelCardArn?: string;

  /**
   * <p>The name of a model card.</p>
   * @public
   */
  ModelCardName?: string;

  /**
   * <p>The model card version.</p>
   * @public
   */
  ModelCardVersion?: number;

  /**
   * <p>The model card status.</p>
   * @public
   */
  ModelCardStatus?: ModelCardStatus;

  /**
   * <p>The KMS Key ID (<code>KMSKeyId</code>) for encryption of model card information.</p>
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>A timestamp that indicates when the model card was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>A timestamp that indicates when the model card was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The tags associated with a model card.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>For models created in SageMaker, this is the model ARN. For models created
   *          outside of SageMaker, this is a user-customized string.</p>
   * @public
   */
  ModelId?: string;

  /**
   * <p>A model card's risk rating. Can be low, medium, or high.</p>
   * @public
   */
  RiskRating?: string;
}

/**
 * <p>A monitoring schedule for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 * @public
 */
export interface ModelDashboardMonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The status of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleStatus?: ScheduleStatus;

  /**
   * <p>The monitor type of a model monitor.</p>
   * @public
   */
  MonitoringType?: MonitoringType;

  /**
   * <p>If a monitoring job failed, provides the reason.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that indicates when the monitoring schedule was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that indicates when the monitoring schedule was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   * @public
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * <p>The endpoint which is monitored.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   * @public
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>Input object for the batch transform job.</p>
   * @public
   */
  BatchTransformInput?: BatchTransformInput;
}

/**
 * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
 * @public
 */
export interface ModelDashboardModel {
  /**
   * <p>A model displayed in the Model Dashboard.</p>
   * @public
   */
  Model?: Model;

  /**
   * <p>The endpoints that host a model.</p>
   * @public
   */
  Endpoints?: ModelDashboardEndpoint[];

  /**
   * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
   *         Transform</a>.</p>
   * @public
   */
  LastBatchTransformJob?: TransformJob;

  /**
   * <p>The monitoring schedules for a model.</p>
   * @public
   */
  MonitoringSchedules?: ModelDashboardMonitoringSchedule[];

  /**
   * <p>The model card for a model.</p>
   * @public
   */
  ModelCard?: ModelDashboardModelCard;
}

/**
 * <p>A versioned model that can be deployed for SageMaker inference.</p>
 * @public
 */
export interface ModelPackage {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelPackageName?: string;

  /**
   * <p>The model group to which the model belongs.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version number of a versioned model.</p>
   * @public
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn?: string;

  /**
   * <p>The description of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string;

  /**
   * <p>The time that the model package was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Defines how to perform inference generation after a training job is run.</p>
   * @public
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>A list of algorithms that were used to create a model package.</p>
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies batch transform jobs that SageMaker runs to validate your model package.</p>
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
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
   * @public
   */
  ModelPackageStatus?: ModelPackageStatus;

  /**
   * <p>Specifies the validation and image scan statuses of the model package.</p>
   * @public
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;

  /**
   * <p>Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For
   *             information about listing model packages on Amazon Web Services Marketplace, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html">List Your
   *                 Algorithm or Model Package on Amazon Web Services Marketplace</a>.</p>
   * @public
   */
  CertifyForMarketplace?: boolean;

  /**
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
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   * @public
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time the model package was modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided when the model approval is set.</p>
   * @public
   */
  ApprovalDescription?: string;

  /**
   * <p>The machine learning domain of your model package and its components. Common
   *             machine learning domains include computer vision and natural language processing.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>The machine learning task your model package accomplishes. Common machine
   *             learning tasks include object detection and image classification.</p>
   * @public
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service path where the sample payload are stored. This path must point to
   *            a single gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects.</p>
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * <p>The URI of the source for the model package.</p>
   * @public
   */
  SourceUri?: string;

  /**
   * <p>An optional Key Management Service
   *          key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with
   *          highly sensitive data.</p>
   * @public
   */
  SecurityConfig?: ModelPackageSecurityConfig;

  /**
   * <p>The model card associated with the model package. Since <code>ModelPackageModelCard</code> is
   *             tied to a model package, it is a specific usage of a model card and its schema is
   *             simplified compared to the schema of <code>ModelCard</code>. The
   *             <code>ModelPackageModelCard</code> schema does not include <code>model_package_details</code>,
   *             and <code>model_overview</code> is composed of the <code>model_creator</code> and
   *             <code>model_artifact</code> properties. For more information about the model package model
   *             card schema, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema">Model
   *                 package model card schema</a>. For more information about
   *             the model card associated with the model package, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html">View
   *                 the Details of a Model Version</a>.</p>
   * @public
   */
  ModelCard?: ModelPackageModelCard;

  /**
   * <p>
   *             A structure describing the current state of the model in its life cycle.
   *         </p>
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle;

  /**
   * <p>A list of the tags associated with the model package. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The metadata properties for the model package. </p>
   * @public
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.</p>
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>Indicates if you want to skip model validation.</p>
   * @public
   */
  SkipModelValidation?: SkipModelValidation;
}

/**
 * <p>A group of versioned models in the model registry.</p>
 * @public
 */
export interface ModelPackageGroup {
  /**
   * <p>The name of the model group.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   * @public
   */
  ModelPackageGroupArn?: string;

  /**
   * <p>The description for the model group.</p>
   * @public
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
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
   * @public
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus;

  /**
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
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
 * @public
 */
export interface NestedFilters {
  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   * @public
   */
  NestedPropertyName: string | undefined;

  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   * @public
   */
  Filters: Filter[] | undefined;
}

/**
 * <p>Updates the feature group online store configuration.</p>
 * @public
 */
export interface OnlineStoreConfigUpdate {
  /**
   * <p>Time to live duration, where the record is hard deleted after the expiration time is
   *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
   *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
   * @public
   */
  TtlDuration?: TtlDuration;
}

/**
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be associated with
 *       multiple trials.</p>
 * @public
 */
export interface Parent {
  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string;

  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string;
}

/**
 * <p>A SageMaker Model Building Pipeline instance.</p>
 * @public
 */
export interface Pipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that created the pipeline.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline.</p>
   * @public
   */
  PipelineStatus?: PipelineStatus;

  /**
   * <p>The creation time of the pipeline.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   * @public
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>A list of tags that apply to the pipeline.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>An execution of a pipeline.</p>
 * @public
 */
export interface PipelineExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline that was executed.</p>
   * @public
   */
  PipelineArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>The status of the pipeline status.</p>
   * @public
   */
  PipelineExecutionStatus?: PipelineExecutionStatus;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   * @public
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * <p>If the execution failed, a message describing why.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The creation time of the pipeline execution.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time that the pipeline execution was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline execution.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>The selective execution configuration applied to the pipeline run.</p>
   * @public
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   * @public
   */
  PipelineParameters?: Parameter[];
}

/**
 * <p>An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process
 *                 Data and Evaluate Models</a>.</p>
 * @public
 */
export interface ProcessingJob {
  /**
   * <p>List of input configurations for the processing job.</p>
   * @public
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Configuration for uploading output from the processing container.</p>
   * @public
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job.</p>
   * @public
   */
  ProcessingJobName?: string;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   * @public
   */
  ProcessingResources?: ProcessingResources;

  /**
   * <p>Configures conditions under which the processing job should be stopped, such as how long
   *             the processing job has been running. After the condition is met, the processing job is stopped.</p>
   * @public
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configuration to run a processing job in a specified container image.</p>
   * @public
   */
  AppSpecification?: AppSpecification;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a job, such as network traffic encryption between containers,
   *          whether to allow inbound and outbound network calls to and from containers, and the VPC
   *          subnets and security groups to use for VPC-enabled jobs.</p>
   * @public
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The ARN of the role used to create the processing job.</p>
   * @public
   */
  RoleArn?: string;

  /**
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
   * @public
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The ARN of the processing job.</p>
   * @public
   */
  ProcessingJobArn?: string;

  /**
   * <p>The status of the processing job.</p>
   * @public
   */
  ProcessingJobStatus?: ProcessingJobStatus;

  /**
   * <p>A string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   * @public
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The time that the processing job ended.</p>
   * @public
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time that the processing job started.</p>
   * @public
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time the processing job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time the processing job was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   * @public
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.</p>
   * @public
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of the training job associated with this processing job.</p>
   * @public
   */
  TrainingJobArn?: string;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management
   *                 User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Configuration information for updating the Amazon SageMaker Debugger profile parameters, system and framework metrics configurations, and
 *             storage paths.</p>
 * @public
 */
export interface ProfilerConfigForUpdate {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   * @public
   */
  S3OutputPath?: string;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   * @public
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   * @public
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * <p>To turn off Amazon SageMaker Debugger monitoring and profiling while a training job is in progress, set to <code>True</code>.</p>
   * @public
   */
  DisableProfiler?: boolean;
}

/**
 * <p>The properties of a project as returned by the Search API.</p>
 * @public
 */
export interface Project {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName?: string;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  ProjectId?: string;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  ProjectDescription?: string;

  /**
   * <p>Details that you specify to provision a service catalog product. For information about
   *             service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   * @public
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;

  /**
   * <p>Details of a provisioned service catalog product. For information about service catalog,
   *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *                 Catalog</a>.</p>
   * @public
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  ProjectStatus?: ProjectStatus;

  /**
   * <p>Who created the project.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>A timestamp specifying when the project was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A timestamp container for when the project was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface PutModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group to add a resource policy to.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The resource policy for the model group.</p>
   * @public
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutModelPackageGroupPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package group.</p>
   * @public
   */
  ModelPackageGroupArn: string | undefined;
}

/**
 * <p>A set of filters to narrow the set of lineage entities connected to the <code>StartArn</code>(s) returned by the
 *          <code>QueryLineage</code> API action.</p>
 * @public
 */
export interface QueryFilters {
  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code> by type. For example: <code>DataSet</code>,
   *          <code>Model</code>, <code>Endpoint</code>, or <code>ModelDeployment</code>.</p>
   * @public
   */
  Types?: string[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by the type of the lineage entity.</p>
   * @public
   */
  LineageTypes?: LineageType[];

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by created date.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the create date.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) before the last modified date.</p>
   * @public
   */
  ModifiedBefore?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) after the last modified date.</p>
   * @public
   */
  ModifiedAfter?: Date;

  /**
   * <p>Filter the lineage entities connected to the <code>StartArn</code>(s) by a set if property key value pairs.
   *          If multiple pairs are provided, an entity is included in the results if it matches any of the provided pairs.</p>
   * @public
   */
  Properties?: Record<string, string>;
}

/**
 * @public
 */
export interface QueryLineageRequest {
  /**
   * <p>A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query.</p>
   * @public
   */
  StartArns?: string[];

  /**
   * <p>Associations between lineage entities have a direction.  This parameter determines the direction from the
   *          StartArn(s) that the query traverses.</p>
   * @public
   */
  Direction?: Direction;

  /**
   * <p> Setting this value to <code>True</code> retrieves not only the entities of interest but also the
   *          <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking-entities.html">Associations</a> and
   *          lineage entities on the path. Set to <code>False</code> to only return lineage entities that match your query.</p>
   * @public
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
   * @public
   */
  Filters?: QueryFilters;

  /**
   * <p>The maximum depth in lineage relationships from the <code>StartArns</code> that are traversed. Depth is a measure of the number
   *          of <code>Associations</code> from the <code>StartArn</code> entity to the matched results.</p>
   * @public
   */
  MaxDepth?: number;

  /**
   * <p>Limits the number of vertices in the results. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Limits the number of vertices in the request. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A lineage entity connected to the starting entity(ies).</p>
 * @public
 */
export interface Vertex {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage entity resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The type of the lineage entity resource. For example: <code>DataSet</code>, <code>Model</code>, <code>Endpoint</code>,
   *          etc...</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The type of resource of the lineage entity.</p>
   * @public
   */
  LineageType?: LineageType;
}

/**
 * @public
 */
export interface QueryLineageResponse {
  /**
   * <p>A list of vertices connected to the start entity(ies) in the lineage graph.</p>
   * @public
   */
  Vertices?: Vertex[];

  /**
   * <p>A list of edges that connect vertices in the response.</p>
   * @public
   */
  Edges?: Edge[];

  /**
   * <p>Limits the number of vertices in the response. Use the <code>NextToken</code> in a response to to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RegisterDevicesRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>A list of devices to register with SageMaker Edge Manager.</p>
   * @public
   */
  Devices: Device[] | undefined;

  /**
   * <p>The tags associated with devices.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Configuration for remote debugging for the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateTrainingJob.html">UpdateTrainingJob</a> API. To learn more about the remote debugging
 *             functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container
 *                 through Amazon Web Services Systems Manager (SSM) for remote
 *             debugging</a>.</p>
 * @public
 */
export interface RemoteDebugConfigForUpdate {
  /**
   * <p>If set to True, enables remote debugging.</p>
   * @public
   */
  EnableRemoteDebug?: boolean;
}

/**
 * <p>Contains input values for a task.</p>
 * @public
 */
export interface RenderableTask {
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   * @public
   */
  Input: string | undefined;
}

/**
 * <p>A description of an error that occurred while rendering the template.</p>
 * @public
 */
export interface RenderingError {
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface RenderUiTemplateRequest {
  /**
   * <p>A <code>Template</code> object containing the worker UI template to render.</p>
   * @public
   */
  UiTemplate?: UiTemplate;

  /**
   * <p>A <code>RenderableTask</code> object containing a representative task to
   *             render.</p>
   * @public
   */
  Task: RenderableTask | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the
   *             template.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The <code>HumanTaskUiArn</code> of the worker UI that you want to render. Do not
   *             provide a <code>HumanTaskUiArn</code> if you use the <code>UiTemplate</code>
   *             parameter.</p>
   *          <p>See a list of available Human Ui Amazon Resource Names (ARNs) in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UiConfig.html">UiConfig</a>.</p>
   * @public
   */
  HumanTaskUiArn?: string;
}

/**
 * @public
 */
export interface RenderUiTemplateResponse {
  /**
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   * @public
   */
  RenderedContent: string | undefined;

  /**
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered
   *             while rendering the template. If there were no errors, the list is empty.</p>
   * @public
   */
  Errors: RenderingError[] | undefined;
}

/**
 * <p>The <code>ResourceConfig</code> to update <code>KeepAlivePeriodInSeconds</code>. Other
 *             fields in the <code>ResourceConfig</code> cannot be updated.</p>
 * @public
 */
export interface ResourceConfigForUpdate {
  /**
   * <p>The <code>KeepAlivePeriodInSeconds</code> value specified in the
   *                 <code>ResourceConfig</code> to update.</p>
   * @public
   */
  KeepAlivePeriodInSeconds: number | undefined;
}

/**
 * @public
 */
export interface RetryPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface RetryPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
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
 * <p>The list of key-value pairs used to filter your search results. If a search result contains a key from your list, it is included in the final search response if the value associated with the key in the result matches the value you specified.
 *       If the value doesn't match, the result is excluded from the search response. Any resources that don't have a key from the list that you've provided will also be included in the search response.</p>
 * @public
 */
export interface VisibilityConditions {
  /**
   * <p>The key that specifies the tag that you're using to filter the search results. It must be in the following format: <code>Tags.<key></code>.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The value for the tag that you're using to filter the search results.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Contains information about a training job.</p>
 * @public
 */
export interface TrainingJob {
  /**
   * <p>The name of the training job.</p>
   * @public
   */
  TrainingJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   * @public
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   * @public
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   * @public
   */
  ModelArtifacts?: ModelArtifacts;

  /**
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
   * @public
   */
  TrainingJobStatus?: TrainingJobStatus;

  /**
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
   * @public
   */
  SecondaryStatus?: SecondaryStatus;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters.</p>
   * @public
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   * @public
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the
   *             training job.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   *          <p>Your input must be in the same Amazon Web Services region as your training job.</p>
   * @public
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts.</p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   * @public
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   * @public
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   * @public
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   * @public
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   * @public
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   * @public
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>.</p>
   * @public
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   * @public
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The training time in seconds.</p>
   * @public
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The billable time in seconds.</p>
   * @public
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   * @public
   */
  DebugHookConfig?: DebugHookConfig;

  /**
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
   * @public
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Information about the debug rule configuration.</p>
   * @public
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   * @public
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   * @public
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   * @public
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>A short summary of a trial component.</p>
 * @public
 */
export interface TrialComponentSimpleSummary {
  /**
   * <p>The name of the trial component.</p>
   * @public
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   * @public
   */
  TrialComponentSource?: TrialComponentSource;

  /**
   * <p>When the component was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;
}

/**
 * <p>The properties of a trial as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 * @public
 */
export interface Trial {
  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   * @public
   */
  ExperimentName?: string;

  /**
   * <p>The source of the trial.</p>
   * @public
   */
  Source?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The list of tags that are associated with the trial. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
   *       API to search on the tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   * @public
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];
}

/**
 * <p>Detailed information about the source of a trial component. Either
 *         <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.</p>
 * @public
 */
export interface TrialComponentSourceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn?: string;

  /**
   * <p>Information about a training job that's the source of a trial component.</p>
   * @public
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>Information about a processing job that's the source of a trial component.</p>
   * @public
   */
  ProcessingJob?: ProcessingJob;

  /**
   * <p>Information about a transform job that's the source of a trial component.</p>
   * @public
   */
  TransformJob?: TransformJob;
}

/**
 * <p>The properties of a trial component as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a>
 *       API.</p>
 * @public
 */
export interface TrialComponent {
  /**
   * <p>The name of the trial component.</p>
   * @public
   */
  TrialComponentName?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of the component.</p>
   * @public
   */
  Source?: TrialComponentSource;

  /**
   * <p>The status of the trial component.</p>
   * @public
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts of the component.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts of the component.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The metrics for the component.</p>
   * @public
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Details of the source of the component.</p>
   * @public
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   * @public
   */
  LineageGroupArn?: string;

  /**
   * <p>The list of tags that are associated with the component. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is associated
   *       with and the experiment the trial is part of. A component might not have any parents.</p>
   * @public
   */
  Parents?: Parent[];

  /**
   * <p>The name of the experiment run.</p>
   * @public
   */
  RunName?: string;
}

/**
 * <p>A single resource returned as part of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API response.</p>
 * @public
 */
export interface SearchRecord {
  /**
   * <p>The properties of a training job.</p>
   * @public
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>The properties of an experiment.</p>
   * @public
   */
  Experiment?: Experiment;

  /**
   * <p>The properties of a trial.</p>
   * @public
   */
  Trial?: Trial;

  /**
   * <p>The properties of a trial component.</p>
   * @public
   */
  TrialComponent?: TrialComponent;

  /**
   * <p>A hosted endpoint for real-time inference.</p>
   * @public
   */
  Endpoint?: Endpoint;

  /**
   * <p>A versioned model that can be deployed for SageMaker inference.</p>
   * @public
   */
  ModelPackage?: ModelPackage;

  /**
   * <p>A group of versioned models in the model registry.</p>
   * @public
   */
  ModelPackageGroup?: ModelPackageGroup;

  /**
   * <p>A SageMaker Model Building Pipeline instance.</p>
   * @public
   */
  Pipeline?: Pipeline;

  /**
   * <p>An execution of a pipeline.</p>
   * @public
   */
  PipelineExecution?: PipelineExecution;

  /**
   * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
   *          Feature Group can be visualized as a table which has rows, with a unique identifier for
   *          each row where each column in the table is a feature. In principle, a Feature Group is
   *          composed of features and values per features.</p>
   * @public
   */
  FeatureGroup?: FeatureGroup;

  /**
   * <p>The feature metadata used to search through the features.</p>
   * @public
   */
  FeatureMetadata?: FeatureMetadata;

  /**
   * <p>The properties of a project.</p>
   * @public
   */
  Project?: Project;

  /**
   * <p>The properties of a hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;

  /**
   * <p>An Amazon SageMaker Model Card that documents details about a machine learning model.</p>
   * @public
   */
  ModelCard?: ModelCard;

  /**
   * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
   * @public
   */
  Model?: ModelDashboardModel;
}

/**
 * @public
 */
export interface SearchResponse {
  /**
   * <p>A list of <code>SearchRecord</code> objects.</p>
   * @public
   */
  Results?: SearchRecord[];

  /**
   * <p>If the result of the previous <code>Search</code> request was truncated, the response
   *       includes a NextToken. To retrieve the next set of results, use the token in the next
   *       request.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   * @public
   */
  CallbackToken: string | undefined;

  /**
   * <p>A message describing why the step failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessRequest {
  /**
   * <p>The pipeline generated token from the Amazon SQS queue.</p>
   * @public
   */
  CallbackToken: string | undefined;

  /**
   * <p>A list of the output parameters of the callback step.</p>
   * @public
   */
  OutputParameters?: OutputParameter[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StartEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to start.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to start.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentResponse {
  /**
   * <p>The ARN of the started inference experiment to start.</p>
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StartMlflowTrackingServerRequest {
  /**
   * <p>The name of the tracking server to start.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface StartMlflowTrackingServerResponse {
  /**
   * <p>The ARN of the started tracking server.</p>
   * @public
   */
  TrackingServerArn?: string;
}

/**
 * @public
 */
export interface StartMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to start.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to start.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   * @public
   */
  PipelineParameters?: Parameter[];

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;

  /**
   * <p>The selective execution configuration applied to the pipeline run.</p>
   * @public
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig;
}

/**
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopAutoMLJobRequest {
  /**
   * <p>The name of the object you are requesting.</p>
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface StopCompilationJobRequest {
  /**
   * <p>The name of the model compilation job to stop.</p>
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan to stop.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage to stop.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job to stop.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to stop.</p>
   * @public
   */
  Name: string | undefined;

  /**
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
   * @public
   */
  ModelVariantActions: Record<string, ModelVariantAction> | undefined;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant that you want to deploy
   *            after the inference experiment stops. Each <code>ModelVariantConfig</code> describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   * @public
   */
  DesiredModelVariants?: ModelVariantConfig[];

  /**
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
   * @public
   */
  DesiredState?: InferenceExperimentStopDesiredState;

  /**
   * <p>The reason for stopping the experiment.</p>
   * @public
   */
  Reason?: string;
}

/**
 * @public
 */
export interface StopInferenceExperimentResponse {
  /**
   * <p>The ARN of the stopped inference experiment.</p>
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job you want to stop.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface StopLabelingJobRequest {
  /**
   * <p>The name of the labeling job to stop.</p>
   * @public
   */
  LabelingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopMlflowTrackingServerRequest {
  /**
   * <p>The name of the tracking server to stop.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface StopMlflowTrackingServerResponse {
  /**
   * <p>The ARN of the stopped tracking server.</p>
   * @public
   */
  TrackingServerArn?: string;
}

/**
 * @public
 */
export interface StopMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to stop.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StopNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to terminate.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StopOptimizationJobRequest {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StopPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;
}

/**
 * @public
 */
export interface StopProcessingJobRequest {
  /**
   * <p>The name of the processing job to stop.</p>
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingJobRequest {
  /**
   * <p>The name of the training job to stop.</p>
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTransformJobRequest {
  /**
   * <p>The name of the batch transform job to stop.</p>
   * @public
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionRequest {
  /**
   * <p>The name of the action to update.</p>
   * @public
   */
  ActionName: string | undefined;

  /**
   * <p>The new description for the action.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The new status for the action.</p>
   * @public
   */
  Status?: ActionStatus;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   * @public
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string;
}

/**
 * @public
 */
export interface UpdateAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to update.</p>
   * @public
   */
  AppImageConfigName: string | undefined;

  /**
   * <p>The new KernelGateway app to run on the image.</p>
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;

  /**
   * <p>The JupyterLab app running on the image.</p>
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;

  /**
   * <p>The Code Editor app running on the image.</p>
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}

/**
 * @public
 */
export interface UpdateAppImageConfigResponse {
  /**
   * <p>The ARN for the AppImageConfig.</p>
   * @public
   */
  AppImageConfigArn?: string;
}

/**
 * @public
 */
export interface UpdateArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to update.</p>
   * @public
   */
  ArtifactArn: string | undefined;

  /**
   * <p>The new name for the artifact.</p>
   * @public
   */
  ArtifactName?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   * @public
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>Specify the name of the SageMaker HyperPod cluster you want to update.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>Specify the instance groups to update.</p>
   * @public
   */
  InstanceGroups: ClusterInstanceGroupSpecification[] | undefined;

  /**
   * <p>The node recovery mode to be applied to the SageMaker HyperPod cluster.</p>
   * @public
   */
  NodeRecovery?: ClusterNodeRecovery;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSoftwareRequest {
  /**
   * <p>Specify the name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster you want to update for security
   *          patching.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSoftwareResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster being updated for security patching.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   * @public
   */
  GitConfig?: GitConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   * @public
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateContextRequest {
  /**
   * <p>The name of the context to update.</p>
   * @public
   */
  ContextName: string | undefined;

  /**
   * <p>The new description for the context.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>A list of properties to remove.</p>
   * @public
   */
  PropertiesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string;
}

/**
 * @public
 */
export interface UpdateDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>Description of the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Output configuration  for storing sample data collected by the fleet.</p>
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *       The name of the role alias generated will match this pattern:
   *       "SageMakerEdge-\{DeviceFleetName\}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   * @public
   */
  EnableIotRoleAlias?: boolean;
}

/**
 * @public
 */
export interface UpdateDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>List of devices to register with Edge Manager agent.</p>
   * @public
   */
  Devices: Device[] | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * <p>The ID of the domain to be updated.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>A collection of <code>DomainSettings</code> configuration values to update.</p>
   * @public
   */
  DomainSettingsForUpdate?: DomainSettingsForUpdate;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *       communication in <code>VPCOnly</code> mode. Required when
   *         <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *         <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *       provided. If setting up the domain for use with RStudio, this value must be set to
   *         <code>Service</code>.</p>
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement;

  /**
   * <p>The default settings for shared spaces that users create in the domain.</p>
   * @public
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   *          <p>If removing subnets, ensure there are no apps in the <code>InService</code>,
   *         <code>Pending</code>, or <code>Deleting</code> state.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>Specifies the VPC used for non-EFS traffic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by Amazon SageMaker, which allows direct internet access.</p>
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
   *         <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is already
   *       set or <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *       provided as part of the same request.</p>
   * @public
   */
  AppNetworkAccessType?: AppNetworkAccessType;

  /**
   * <p>Indicates whether custom tag propagation is supported for the domain. Defaults to
   *         <code>DISABLED</code>.</p>
   * @public
   */
  TagPropagation?: TagPropagation;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   * @public
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
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *          <p>If you are updating an endpoint with the <code>RetainAllVariantProperties</code>
 *             option of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> set to <code>true</code>, the
 *                 <code>VariantProperty</code> objects listed in the
 *                 <code>ExcludeRetainedVariantProperties</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpointInput</a> override the existing variant properties of the
 *             endpoint.</p>
 * @public
 */
export interface VariantProperty {
  /**
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
   * @public
   */
  VariantPropertyType: VariantPropertyType | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointInput {
  /**
   * <p>The name of the endpoint whose configuration you want to update.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the new endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>When updating endpoint resources, enables or disables the retention of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">variant properties</a>, such as the instance count or the variant weight. To
   *             retain the variant properties of an endpoint when updating it, set
   *                 <code>RetainAllVariantProperties</code> to <code>true</code>. To use the variant
   *             properties specified in a new <code>EndpointConfig</code> call when updating an
   *             endpoint, set <code>RetainAllVariantProperties</code> to <code>false</code>. The default
   *             is <code>false</code>.</p>
   * @public
   */
  RetainAllVariantProperties?: boolean;

  /**
   * <p>When you are updating endpoint resources with <code>RetainAllVariantProperties</code>,
   *             whose value is set to <code>true</code>, <code>ExcludeRetainedVariantProperties</code>
   *             specifies the list of type <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">VariantProperty</a>
   *             to override with the values provided by <code>EndpointConfig</code>. If you don't
   *             specify a value for <code>ExcludeRetainedVariantProperties</code>, no variant properties
   *             are overridden. </p>
   * @public
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   * @public
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   * @public
   */
  RetainDeploymentConfig?: boolean;
}

/**
 * @public
 */
export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * <p>The name of an existing SageMaker endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   * @public
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentRequest {
  /**
   * <p>The name of the experiment to update.</p>
   * @public
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the experiment.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  ExperimentArn?: string;
}

/**
 * <p>The new throughput configuration for the feature group. You can switch between on-demand
 *          and provisioned modes or update the read / write capacity of provisioned feature groups.
 *          You can switch a feature group to on-demand only once in a 24 hour period. </p>
 * @public
 */
export interface ThroughputConfigUpdate {
  /**
   * <p>Target throughput mode of the feature group. Throughput update is an asynchronous
   *          operation, and the outcome should be monitored by polling <code>LastUpdateStatus</code>
   *          field in <code>DescribeFeatureGroup</code> response. You cannot update a feature group's
   *          throughput while another update is in progress. </p>
   * @public
   */
  ThroughputMode?: ThroughputMode;

  /**
   * <p>For provisioned feature groups with online store enabled, this indicates the read
   *          throughput you are billed for and can consume without throttling. </p>
   * @public
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>For provisioned feature groups, this indicates the write throughput you are billed for
   *          and can consume without throttling. </p>
   * @public
   */
  ProvisionedWriteCapacityUnits?: number;
}

/**
 * @public
 */
export interface UpdateFeatureGroupRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group that you're updating.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Updates the feature group. Updating a feature group is an asynchronous operation. When
   *          you get an HTTP 200 response, you've made a valid request. It takes some time after you've
   *          made a valid request for Feature Store to update the feature group.</p>
   * @public
   */
  FeatureAdditions?: FeatureDefinition[];

  /**
   * <p>Updates the feature group online store configuration.</p>
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfigUpdate;

  /**
   * <p>The new throughput configuration for the feature group. You can switch between on-demand
   *          and provisioned modes or update the read / write capacity of provisioned feature groups.
   *          You can switch a feature group to on-demand only once in a 24 hour period. </p>
   * @public
   */
  ThroughputConfig?: ThroughputConfigUpdate;
}

/**
 * @public
 */
export interface UpdateFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that you're updating.</p>
   * @public
   */
  FeatureGroupArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateFeatureMetadataRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the feature that
   *          you're updating.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you're updating.</p>
   * @public
   */
  FeatureName: string | undefined;

  /**
   * <p>A description that you can write to better describe the feature.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of key-value pairs that you can add to better describe the feature.</p>
   * @public
   */
  ParameterAdditions?: FeatureParameter[];

  /**
   * <p>A list of parameter keys that you can specify to remove parameters that describe your
   *          feature.</p>
   * @public
   */
  ParameterRemovals?: string[];
}

/**
 * @public
 */
export interface UpdateHubRequest {
  /**
   * <p>The name of the hub to update.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>A description of the updated hub.</p>
   * @public
   */
  HubDescription?: string;

  /**
   * <p>The display name of the hub.</p>
   * @public
   */
  HubDisplayName?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   * @public
   */
  HubSearchKeywords?: string[];
}

/**
 * @public
 */
export interface UpdateHubResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated hub.</p>
   * @public
   */
  HubArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateImageRequest {
  /**
   * <p>A list of properties to delete. Only the <code>Description</code> and
   *         <code>DisplayName</code> properties can be deleted.</p>
   * @public
   */
  DeleteProperties?: string[];

  /**
   * <p>The new description for the image.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The new display name for the image.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The name of the image to update.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The new ARN for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateImageResponse {
  /**
   * <p>The ARN of the image.</p>
   * @public
   */
  ImageArn?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The alias of the image version.</p>
   * @public
   */
  Alias?: string;

  /**
   * <p>The version of the image.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>A list of aliases to add.</p>
   * @public
   */
  AliasesToAdd?: string[];

  /**
   * <p>A list of aliases to delete.</p>
   * @public
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
   * @public
   */
  VendorGuidance?: VendorGuidance;

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
   * @public
   */
  JobType?: JobType;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   * @public
   */
  MLFramework?: string;

  /**
   * <p>The supported programming language and its version.</p>
   * @public
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
   * @public
   */
  Processor?: Processor;

  /**
   * <p>Indicates Horovod compatibility.</p>
   * @public
   */
  Horovod?: boolean;

  /**
   * <p>The maintainer description of the image version.</p>
   * @public
   */
  ReleaseNotes?: string;
}

/**
 * @public
 */
export interface UpdateImageVersionResponse {
  /**
   * <p>The ARN of the image version.</p>
   * @public
   */
  ImageVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateInferenceComponentInput {
  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * <p>Details about the resources to deploy with this inference component, including the
   *          model, container, and compute resources.</p>
   * @public
   */
  Specification?: InferenceComponentSpecification;

  /**
   * <p>Runtime settings for a model that is deployed with an inference component.</p>
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfig;
}

/**
 * @public
 */
export interface UpdateInferenceComponentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   * @public
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigInput {
  /**
   * <p>The name of the inference component to update.</p>
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * <p>Runtime settings for a model that is deployed with an inference component.</p>
   * @public
   */
  DesiredRuntimeConfig: InferenceComponentRuntimeConfig | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceComponentRuntimeConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   * @public
   */
  InferenceComponentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *            The duration for which the inference experiment will run. If the status of the inference experiment is
   *            <code>Created</code>, then you can update both the start and end dates. If the status of the inference
   *            experiment is <code>Running</code>, then you can update only the end date.
   *        </p>
   * @public
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * <p>The description of the inference experiment.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant, whose infrastructure
   *            configuration you want to update.
   *        </p>
   * @public
   */
  ModelVariants?: ModelVariantConfig[];

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type. Use this field to specify a
   *            production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a
   *            percentage of the inference requests. For the shadow variant also specify the percentage of requests that
   *            Amazon SageMaker replicates.
   *        </p>
   * @public
   */
  ShadowModeConfig?: ShadowModeConfig;
}

/**
 * @public
 */
export interface UpdateInferenceExperimentResponse {
  /**
   * <p>The ARN of the updated inference experiment.</p>
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMlflowTrackingServerRequest {
  /**
   * <p>The name of the MLflow Tracking Server to update.</p>
   * @public
   */
  TrackingServerName: string | undefined;

  /**
   * <p>The new S3 URI for the general purpose bucket to use as the artifact store for the MLflow
   *       Tracking Server.</p>
   * @public
   */
  ArtifactStoreUri?: string;

  /**
   * <p>The new size for the MLflow Tracking Server.</p>
   * @public
   */
  TrackingServerSize?: TrackingServerSize;

  /**
   * <p>Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.
   *       To enable automatic model registration, set this value to <code>True</code>.
   *       To disable automatic model registration, set this value to <code>False</code>.
   *       If not specified, <code>AutomaticModelRegistration</code> defaults to <code>False</code>
   *          </p>
   * @public
   */
  AutomaticModelRegistration?: boolean;

  /**
   * <p>The new weekly maintenance window start day and time to update. The maintenance window day and time should be
   *       in Coordinated Universal Time (UTC) 24-hour standard time. For example: TUE:03:30.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string;
}

/**
 * @public
 */
export interface UpdateMlflowTrackingServerResponse {
  /**
   * <p>The ARN of the updated MLflow Tracking Server.</p>
   * @public
   */
  TrackingServerArn?: string;
}

/**
 * @public
 */
export interface UpdateModelCardRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model card to update.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The updated model card content. Content must be in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema">model card JSON schema</a> and provided as a string.</p>
   *          <p>When updating model card content, be sure to include the full content and not just updated content.</p>
   * @public
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
   * @public
   */
  ModelCardStatus?: ModelCardStatus;
}

/**
 * @public
 */
export interface UpdateModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelPackageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The approval status of the model.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * <p>A description for the approval status of the model.</p>
   * @public
   */
  ApprovalDescription?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   * @public
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>The metadata properties associated with the model package versions to remove.</p>
   * @public
   */
  CustomerMetadataPropertiesToRemove?: string[];

  /**
   * <p>An array of additional Inference Specification objects to be added to the
   *     existing array additional Inference Specification. Total number of additional
   *     Inference Specifications can not exceed 15. Each additional Inference Specification
   *     specifies artifacts based on this model package that can be used on inference endpoints.
   *     Generally used with SageMaker Neo to store the compiled artifacts.</p>
   * @public
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];

  /**
   * <p>Specifies details about inference jobs that you can run with models based on this model
   *             package, including the following information:</p>
   *          <ul>
   *             <li>
   *                <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>The URI of the source for the model package.</p>
   * @public
   */
  SourceUri?: string;

  /**
   * <p>The model card associated with the model package. Since <code>ModelPackageModelCard</code> is
   *             tied to a model package, it is a specific usage of a model card and its schema is
   *             simplified compared to the schema of <code>ModelCard</code>. The
   *             <code>ModelPackageModelCard</code> schema does not include <code>model_package_details</code>,
   *             and <code>model_overview</code> is composed of the <code>model_creator</code> and
   *             <code>model_artifact</code> properties. For more information about the model package model
   *             card schema, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema">Model
   *                 package model card schema</a>. For more information about
   *             the model card associated with the model package, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html">View
   *                 the Details of a Model Version</a>.</p>
   * @public
   */
  ModelCard?: ModelPackageModelCard;

  /**
   * <p>
   *             A structure describing the current state of the model in its life cycle.
   *         </p>
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle;

  /**
   * <p>
   *             A unique token that guarantees that the call to this API is idempotent.
   *         </p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelPackageArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an
   *          alert.</p>
   * @public
   */
  DatapointsToAlert: number | undefined;

  /**
   * <p>The number of most recent monitoring executions to consider when evaluating alert
   *          status.</p>
   * @public
   */
  EvaluationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringAlertResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName?: string;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services
   *    Region within an Amazon Web Services account.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring
   *    job.</p>
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to update.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon ML compute instance type.</p>
   * @public
   */
  InstanceType?: _InstanceType;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to
   *             access the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must
   *                 have the <code>iam:PassRole</code> permission.</p>
   *          </note>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   * @public
   */
  LifecycleConfigName?: string;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   * @public
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so SageMaker can't
   *             determine the amount of available free space on the volume. Because of this, you can
   *             increase the volume size when you update a notebook instance, but you can't decrease the
   *             volume size. If you want to decrease the size of the ML storage volume in use, create a
   *             new notebook instance with the desired size.</p>
   * @public
   */
  VolumeSizeInGB?: number;

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>This parameter is no longer supported. Elastic Inference (EI) is no longer
   *             available.</p>
   *          <p>This parameter was used to specify a list of the EI instance types to associate with
   *             this notebook instance.</p>
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[];

  /**
   * <p>This parameter is no longer supported. Elastic Inference (EI) is no longer
   *             available.</p>
   *          <p>This parameter was used to specify a list of the EI instance types to remove from this notebook
   *             instance.</p>
   * @public
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   * @public
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   * @public
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
   * @public
   */
  RootAccess?: RootAccess;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   * @public
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
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   * @public
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
   * <p>The name of the pipeline to update.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string;

  /**
   * <p>The location of the pipeline definition stored in Amazon S3. If specified,
   *             SageMaker will retrieve the pipeline definition from this location.</p>
   * @public
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>If specified, it applies to all executions of this pipeline by default.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   * @public
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>This configuration, if specified, overrides the parallelism configuration
   *             of the parent pipeline for this specific run.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 */
export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string;
}

/**
 * <p>Details that you specify to provision a service catalog product.
 *             For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
 *         </p>
 * @public
 */
export interface ServiceCatalogProvisioningUpdateDetails {
  /**
   * <p>The ID of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>A list of key value pairs that you specify when you provision a product.</p>
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[];
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The description for the project.</p>
   * @public
   */
  ProjectDescription?: string;

  /**
   * <p>The product ID and provisioning artifact ID to provision a service catalog.
   *             The provisioning artifact ID will default to the latest provisioning artifact
   *             ID of the product, if you don't provide the provisioning artifact ID. For more
   *             information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
   *         </p>
   * @public
   */
  ServiceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your
   *             Amazon Web Services resources in different ways, for example, by purpose, owner, or
   *             environment. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.
   *             In addition, the project must have tag update constraints set in order to include this
   *             parameter in the request.  For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-resourceupdate.html">Amazon Web Services Service
   *                 Catalog Tag Update Constraints</a>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   * @public
   */
  SpaceSettings?: SpaceSettings;

  /**
   * <p>The name of the space that appears in the Amazon SageMaker Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   * @public
   */
  SpaceArn?: string;
}

/**
 * @public
 */
export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The training job <code>ResourceConfig</code> to update warm pool retention
   *             length.</p>
   * @public
   */
  ResourceConfig?: ResourceConfigForUpdate;

  /**
   * <p>Configuration for remote debugging while the training job is running. You can update
   *             the remote debugging configuration when the <code>SecondaryStatus</code> of the job is
   *                 <code>Downloading</code> or <code>Training</code>.To learn more about the remote
   *             debugging functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container
   *                 through Amazon Web Services Systems Manager (SSM) for remote
   *             debugging</a>.</p>
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfigForUpdate;
}

/**
 * @public
 */
export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrialRequest {
  /**
   * <p>The name of the trial to update.</p>
   * @public
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string;
}

/**
 * @public
 */
export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The new status of the component.</p>
   * @public
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters or add new hyperparameters. Existing hyperparameters are replaced if the trial component is updated with an identical hyperparameter key.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The hyperparameters to remove from the component.</p>
   * @public
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts or adds new input artifacts. Existing input artifacts are replaced if the trial component is updated with an identical input artifact key.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The input artifacts to remove from the component.</p>
   * @public
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts or adds new output artifacts. Existing output artifacts are replaced if the trial component is updated with an identical output artifact key.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts to remove from the component.</p>
   * @public
   */
  OutputArtifactsToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *             name by using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html">ListWorkforces</a> operation.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *          <p>Maximum: Ten CIDR values</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   * @public
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   * @public
   */
  Workforce: Workforce | undefined;
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
export const ModelPackageFilterSensitiveLog = (obj: ModelPackage): any => ({
  ...obj,
  ...(obj.ModelCard && { ModelCard: ModelPackageModelCardFilterSensitiveLog(obj.ModelCard) }),
});

/**
 * @internal
 */
export const SearchRecordFilterSensitiveLog = (obj: SearchRecord): any => ({
  ...obj,
  ...(obj.TrialComponent && { TrialComponent: obj.TrialComponent }),
  ...(obj.ModelPackage && { ModelPackage: ModelPackageFilterSensitiveLog(obj.ModelPackage) }),
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
export const UpdateModelPackageInputFilterSensitiveLog = (obj: UpdateModelPackageInput): any => ({
  ...obj,
  ...(obj.ModelCard && { ModelCard: ModelPackageModelCardFilterSensitiveLog(obj.ModelCard) }),
});

/**
 * @internal
 */
export const UpdateWorkforceRequestFilterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});
