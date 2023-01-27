// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSecurityGroupManagement,
  AppSpecification,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobStepMetadata,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchStrategy,
  CacheHitResult,
  CallbackStepMetadata,
  CandidateSortBy,
  CandidateStatus,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CompilationJobStatus,
  CompilationJobSummary,
  ConditionStepMetadata,
  ContainerDefinition,
  ContextSummary,
  DefaultSpaceSettings,
  DeploymentConfig,
  EdgeOutputConfig,
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
  HubContentType,
  InferenceExecutionConfig,
  InferenceExperimentType,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelClientConfig,
  ModelMetrics,
  ModelPackageValidationSpecification,
  ModelVariantConfig,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  RetryStrategy,
  ServiceCatalogProvisioningDetails,
  SourceAlgorithmSpecification,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentParameterValueFilterSensitiveLog,
  TrialComponentStatus,
  UiTemplate,
} from "./models_1";
import {
  DesiredWeightAndCapacity,
  Device,
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceSummary,
  Direction,
  DomainDetails,
  DomainSettingsForUpdate,
  Edge,
  EdgeDeploymentPlanSummary,
  EdgePackagingJobStatus,
  EdgePackagingJobSummary,
  EMRStepMetadata,
  Endpoint,
  EndpointConfigSortKey,
  EndpointConfigSummary,
  EndpointSortKey,
  EndpointStatus,
  EndpointSummary,
  ExecutionStatus,
  Experiment,
  ExperimentSummary,
  FailStepMetadata,
  FeatureGroup,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureGroupSummary,
  FeatureMetadata,
  Filter,
  FlowDefinitionSummary,
  GitConfigForUpdate,
  HubContentInfo,
  HubContentSortBy,
  HubInfo,
  HubSortBy,
  HumanTaskUiSummary,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobSearchEntity,
  HyperParameterTuningJobSortByOptions,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobSummary,
  Image,
  ImageSortBy,
  ImageSortOrder,
  ImageVersion,
  ImageVersionSortBy,
  ImageVersionSortOrder,
  InferenceExperimentStatus,
  InferenceExperimentStopDesiredState,
  InferenceExperimentSummary,
  InferenceRecommendationsJob,
  InferenceRecommendationsJobStep,
  LabelingJobForWorkteamSummary,
  LabelingJobStatus,
  LabelingJobSummary,
  LambdaStepMetadata,
  LineageGroupSummary,
  LineageType,
  MetricData,
  ModelArtifacts,
  ModelCardExportJobStatus,
  ModelPackageGroupStatus,
  ModelPackageStatusDetails,
  MonitoringExecutionSummary,
  NotebookInstanceStatus,
  OfflineStoreStatusValue,
  PipelineExecutionStatus,
  PipelineExperimentConfig,
  PipelineStatus,
  ProcessingJobStatus,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationStepType,
  ScheduleStatus,
  SecondaryStatus,
  SecondaryStatusTransition,
  ServiceCatalogProvisionedProductDetails,
  SortOrder,
  SpaceStatus,
  SubscribedWorkteam,
  TrainingJobStatus,
  TransformJobStatus,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  UserProfileStatus,
  WarmPoolResourceStatus,
  WarmPoolStatus,
  Workforce,
  Workteam,
} from "./models_2";

export interface ListArtifactsResponse {
  /**
   * <p>A list of artifacts and their properties.</p>
   */
  ArtifactSummaries?: ArtifactSummary[];

  /**
   * <p>A token for getting the next set of artifacts, if there are any.</p>
   */
  NextToken?: string;
}

export enum SortAssociationsBy {
  CREATION_TIME = "CreationTime",
  DESTINATION_ARN = "DestinationArn",
  DESTINATION_TYPE = "DestinationType",
  SOURCE_ARN = "SourceArn",
  SOURCE_TYPE = "SourceType",
}

export interface ListAssociationsRequest {
  /**
   * <p>A filter that returns only associations with the specified source ARN.</p>
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only associations with the specified destination Amazon Resource Name (ARN).</p>
   */
  DestinationArn?: string;

  /**
   * <p>A filter that returns only associations with the specified source type.</p>
   */
  SourceType?: string;

  /**
   * <p>A filter that returns only associations with the specified destination type.</p>
   */
  DestinationType?: string;

  /**
   * <p>A filter that returns only associations of the specified type.</p>
   */
  AssociationType?: AssociationEdgeType | string;

  /**
   * <p>A filter that returns only associations created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only associations created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortAssociationsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations,
   *         the call returns a token for getting the next set of associations.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of associations to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export interface ListAssociationsResponse {
  /**
   * <p>A list of associations and their properties.</p>
   */
  AssociationSummaries?: AssociationSummary[];

  /**
   * <p>A token for getting the next set of associations, if there are any.</p>
   */
  NextToken?: string;
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
   * <p>The sort order for the results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is <code>Name</code>.</p>
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

export interface ListCandidatesForAutoMLJobRequest {
  /**
   * <p>List the candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>List the candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus | string;

  /**
   * <p>List the candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>Descending</code>.</p>
   */
  SortBy?: CandidateSortBy | string;

  /**
   * <p>List the job's candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListCandidatesForAutoMLJobResponse {
  /**
   * <p>Summaries about the <code>AutoMLCandidates</code>.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   */
  NextToken?: string;
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

export interface ListCodeRepositoriesOutput {
  /**
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
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
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

export enum SortContextsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListContextsRequest {
  /**
   * <p>A filter that returns only contexts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only contexts of the specified type.</p>
   */
  ContextType?: string;

  /**
   * <p>A filter that returns only contexts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only contexts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortContextsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts,
   *         the call returns a token for getting the next set of contexts.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of contexts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export interface ListContextsResponse {
  /**
   * <p>A list of contexts and their properties.</p>
   */
  ContextSummaries?: ContextSummary[];

  /**
   * <p>A token for getting the next set of contexts, if there are any.</p>
   */
  NextToken?: string;
}

export enum MonitoringJobDefinitionSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListDataQualityJobDefinitionsRequest {
  /**
   * <p>A filter that lists the data quality job definitions associated with the specified
   *          endpoint.</p>
   */
  EndpointName?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          transform jobs, use the token in the next request.></p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of data quality monitoring job definitions to return in the
   *          response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the data quality monitoring job definition name. This filter returns only
   *          data quality monitoring job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * <p>Summary information about a monitoring job.</p>
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * <p>The time that the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint that the job monitors.</p>
   */
  EndpointName: string | undefined;
}

export interface ListDataQualityJobDefinitionsResponse {
  /**
   * <p>A list of data quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data
   *          quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;
}

export enum ListDeviceFleetsSortBy {
  CreationTime = "CREATION_TIME",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  Name = "NAME",
}

export interface ListDeviceFleetsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter fleets where packaging job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter fleets where the edge packaging job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Select fleets where the job was updated after X</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Select fleets where the job was updated before X</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Filter for fleets containing this name in their fleet device name.</p>
   */
  NameContains?: string;

  /**
   * <p>The column to sort by.</p>
   */
  SortBy?: ListDeviceFleetsSortBy | string;

  /**
   * <p>What direction to sort in.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface ListDeviceFleetsResponse {
  /**
   * <p>Summary of the device fleet.</p>
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
}

export interface ListDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Select fleets where the job was updated after X</p>
   */
  LatestHeartbeatAfter?: Date;

  /**
   * <p>A filter that searches devices that contains this name in any of their models.</p>
   */
  ModelName?: string;

  /**
   * <p>Filter for fleets containing this name in their device fleet name.</p>
   */
  DeviceFleetName?: string;
}

export interface ListDevicesResponse {
  /**
   * <p>Summary of devices.</p>
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;
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

export enum ListEdgeDeploymentPlansSortBy {
  CreationTime = "CREATION_TIME",
  DeviceFleetName = "DEVICE_FLEET_NAME",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  Name = "NAME",
}

export interface ListEdgeDeploymentPlansRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;

  /**
   * <p>Selects edge deployment plans created after this time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Selects edge deployment plans created before this time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Selects edge deployment plans that were last updated after this time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Selects edge deployment plans that were last updated before this time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Selects edge deployment plans with names containing this name.</p>
   */
  NameContains?: string;

  /**
   * <p>Selects edge deployment plans with a device fleet name containing this name.</p>
   */
  DeviceFleetNameContains?: string;

  /**
   * <p>The column by which to sort the edge deployment plans. Can be one of <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>, <code>LASTMODIFIEDTIME</code>.</p>
   */
  SortBy?: ListEdgeDeploymentPlansSortBy | string;

  /**
   * <p>The direction of the sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder | string;
}

export interface ListEdgeDeploymentPlansResponse {
  /**
   * <p>List of summaries of edge deployment plans.</p>
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

export enum ListEdgePackagingJobsSortBy {
  CreationTime = "CREATION_TIME",
  EdgePackagingJobStatus = "STATUS",
  LastModifiedTime = "LAST_MODIFIED_TIME",
  ModelName = "MODEL_NAME",
  Name = "NAME",
}

export interface ListEdgePackagingJobsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to select.</p>
   */
  MaxResults?: number;

  /**
   * <p>Select jobs where the job was created after specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Select jobs where the job was created before specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Select jobs where the job was updated after specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Select jobs where the job was updated before specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Filter for jobs containing this name in their packaging job name.</p>
   */
  NameContains?: string;

  /**
   * <p>Filter for jobs where the model name contains this string.</p>
   */
  ModelNameContains?: string;

  /**
   * <p>The job status to filter for.</p>
   */
  StatusEquals?: EdgePackagingJobStatus | string;

  /**
   * <p>Use to specify what column to sort by.</p>
   */
  SortBy?: ListEdgePackagingJobsSortBy | string;

  /**
   * <p>What direction to sort by.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface ListEdgePackagingJobsResponse {
  /**
   * <p>Summaries of edge packaging jobs.</p>
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * <p>Token to use when calling the next page of results.</p>
   */
  NextToken?: string;
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

export interface ListEndpointConfigsOutput {
  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
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
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *             10.</p>
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

export interface ListEndpointsOutput {
  /**
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
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

export interface ListFeatureGroupsRequest {
  /**
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters
   *             <code>FeatureGroup</code>s by name. </p>
   */
  NameContains?: string;

  /**
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus | string;

  /**
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status. </p>
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue | string;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific
   *          date and time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific
   *          date and time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The order in which feature groups are listed.</p>
   */
  SortOrder?: FeatureGroupSortOrder | string;

  /**
   * <p>The value on which the feature group list is sorted.</p>
   */
  SortBy?: FeatureGroupSortBy | string;

  /**
   * <p>The maximum number of results returned by <code>ListFeatureGroups</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken?: string;
}

export interface ListFeatureGroupsResponse {
  /**
   * <p>A summary of feature groups.</p>
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   */
  NextToken: string | undefined;
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

export interface ListHubContentsRequest {
  /**
   * <p>The name of the hub to list the contents of.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content to list.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>Only list hub content if the name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>The upper bound of the hub content schema verion.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * <p>Only list hub content that was created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Only list hub content that was created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy | string;

  /**
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum amount of hub content to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the response to a previous <code>ListHubContents</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content, use the token in the next request.</p>
   */
  NextToken?: string;
}

export interface ListHubContentsResponse {
  /**
   * <p>The summaries of the listed hub content.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListHubContentVersionsRequest {
  /**
   * <p>The name of the hub to list the content versions of.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content to list versions of.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * <p>The lower bound of the hub content versions to list.</p>
   */
  MinVersion?: string;

  /**
   * <p>The upper bound of the hub content schema version.</p>
   */
  MaxSchemaVersion?: string;

  /**
   * <p>Only list hub content versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Only list hub content versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Sort hub content versions by either name or creation time.</p>
   */
  SortBy?: HubContentSortBy | string;

  /**
   * <p>Sort hub content versions by ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of hub content versions to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the response to a previous <code>ListHubContentVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content versions, use the token in the next request.</p>
   */
  NextToken?: string;
}

export interface ListHubContentVersionsResponse {
  /**
   * <p>The summaries of the listed hub content versions.</p>
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListHubsRequest {
  /**
   * <p>Only list hubs with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>Only list hubs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Only list hubs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list hubs that were last modified before the time specified.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Only list hubs that were last modified after the time specified.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Sort hubs by either name or creation time.</p>
   */
  SortBy?: HubSortBy | string;

  /**
   * <p>Sort hubs by ascending or descending order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of hubs to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the response to a previous <code>ListHubs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hubs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export interface ListHubsResponse {
  /**
   * <p>The summaries of the listed hubs.</p>
   */
  HubSummaries: HubInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request.</p>
   */
  NextToken?: string;
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
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only tuning jobs that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were created before the specified
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
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus | string;
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

export enum SortInferenceExperimentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListInferenceExperimentsRequest {
  /**
   * <p>Selects inference experiments whose names contain this name.</p>
   */
  NameContains?: string;

  /**
   * <p>
   *            Selects inference experiments of this type. For the possible types of inference experiments, see <a>CreateInferenceExperimentRequest$Type</a>.
   *        </p>
   */
  Type?: InferenceExperimentType | string;

  /**
   * <p>
   *            Selects inference experiments which are in this status. For the possible statuses, see <a>DescribeInferenceExperimentResponse$Status</a>.
   *        </p>
   */
  StatusEquals?: InferenceExperimentStatus | string;

  /**
   * <p>Selects inference experiments which were created after this timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Selects inference experiments which were created before this timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Selects inference experiments which were last modified after this timestamp.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Selects inference experiments which were last modified before this timestamp.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The column by which to sort the listed inference experiments.</p>
   */
  SortBy?: SortInferenceExperimentsBy | string;

  /**
   * <p>The direction of sorting (ascending or descending).</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>
   *            The response from the last list when returning a list large enough to need tokening.
   *        </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select.</p>
   */
  MaxResults?: number;
}

export interface ListInferenceExperimentsResponse {
  /**
   * <p>List of inference experiments.</p>
   */
  InferenceExperiments?: InferenceExperimentSummary[];

  /**
   * <p>The token to use when calling the next page of results.</p>
   */
  NextToken?: string;
}

export enum ListInferenceRecommendationsJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export interface ListInferenceRecommendationsJobsRequest {
  /**
   * <p>A filter that returns only jobs created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before the specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only jobs that were last modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs that were last modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>A string in the job name. This filter returns only recommendations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that retrieves only inference recommendations jobs with a specific status.</p>
   */
  StatusEquals?: RecommendationJobStatus | string;

  /**
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy | string;

  /**
   * <p>The sort order for the results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request
   *          was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *          of recommendations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of recommendations to return in the response.</p>
   */
  MaxResults?: number;
}

export interface ListInferenceRecommendationsJobsResponse {
  /**
   * <p>The recommendations created from the Amazon SageMaker Inference Recommender job.</p>
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

export interface ListInferenceRecommendationsJobStepsRequest {
  /**
   * <p>The name for the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned.</p>
   */
  Status?: RecommendationJobStatus | string;

  /**
   * <p>A filter to return details about the specified type of subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType?: RecommendationStepType | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request.</p>
   */
  NextToken?: string;
}

export interface ListInferenceRecommendationsJobStepsResponse {
  /**
   * <p>A list of all subtask details in Inference Recommender.</p>
   */
  Steps?: InferenceRecommendationsJobStep[];

  /**
   * <p>A token that you can specify in your next request to return more results from the list.</p>
   */
  NextToken?: string;
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

export interface ListLabelingJobsResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
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

export interface ListLabelingJobsForWorkteamResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum SortLineageGroupsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListLineageGroupsRequest {
  /**
   * <p>A timestamp to filter against lineage groups created after a certain point in time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A timestamp to filter against lineage groups created before a certain point in time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>CreationTime</code>.</p>
   */
  SortBy?: SortLineageGroupsBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *          10.</p>
   */
  MaxResults?: number;
}

export interface ListLineageGroupsResponse {
  /**
   * <p>A list of lineage groups and their properties.</p>
   */
  LineageGroupSummaries?: LineageGroupSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListModelBiasJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model bias.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The
   *          default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

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
   * <p>The maximum number of model bias jobs to return in the response. The default value is
   *          10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;
}

export interface ListModelBiasJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum ModelCardExportJobSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status",
}

export enum ModelCardExportJobSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListModelCardExportJobsRequest {
  /**
   * <p>List export jobs for the model card with the specified name.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>List export jobs for the model card with the specified version.</p>
   */
  ModelCardVersion?: number;

  /**
   * <p>Only list model card export jobs that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model card export jobs that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Only list model card export jobs with names that contain the specified string.</p>
   */
  ModelCardExportJobNameContains?: string;

  /**
   * <p>Only list model card export jobs with the specified status.</p>
   */
  StatusEquals?: ModelCardExportJobStatus | string;

  /**
   * <p>Sort model card export jobs by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardExportJobSortBy | string;

  /**
   * <p>Sort model card export jobs by ascending or descending order.</p>
   */
  SortOrder?: ModelCardExportJobSortOrder | string;

  /**
   * <p>If the response to a previous <code>ListModelCardExportJobs</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model card export jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of model card export jobs to list.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary of the Amazon SageMaker Model Card export job.</p>
 */
export interface ModelCardExportJobSummary {
  /**
   * <p>The name of the model card export job.</p>
   */
  ModelCardExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * <p>The completion status of the model card export job.</p>
   */
  Status: ModelCardExportJobStatus | string | undefined;

  /**
   * <p>The name of the model card that the export job exports.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the export job exports.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card export job was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model card export job was last modified..</p>
   */
  LastModifiedAt: Date | undefined;
}

export interface ListModelCardExportJobsResponse {
  /**
   * <p>The summaries of the listed model card export jobs.</p>
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card export jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum ModelCardSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum ModelCardSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListModelCardsRequest {
  /**
   * <p>Only list model cards that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model cards that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model cards to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>Only list model cards with names that contain the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>Only list model cards with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus | string;

  /**
   * <p>If the response to a previous <code>ListModelCards</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of model cards, use
   *          the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Sort model cards by either name or creation time. Sorts by creation time by default.</p>
   */
  SortBy?: ModelCardSortBy | string;

  /**
   * <p>Sort model cards by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder | string;
}

/**
 * <p>A summary of the model card.</p>
 */
export interface ModelCardSummary {
  /**
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
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
   */
  ModelCardStatus: ModelCardStatus | string | undefined;

  /**
   * <p>The date and time that the model card was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the model card was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface ListModelCardsResponse {
  /**
   * <p>The summaries of the listed model cards.</p>
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          cards, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum ModelCardVersionSortBy {
  VERSION = "Version",
}

export interface ListModelCardVersionsRequest {
  /**
   * <p>Only list model card versions that were created after the time specified.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Only list model card versions that were created before the time specified.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model card versions to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>List model card versions for the model card with the specified name.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>Only list model card versions with the specified approval status.</p>
   */
  ModelCardStatus?: ModelCardStatus | string;

  /**
   * <p>If the response to a previous <code>ListModelCardVersions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of model card
   *          versions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Sort listed model card versions by version. Sorts by version by default.</p>
   */
  SortBy?: ModelCardVersionSortBy | string;

  /**
   * <p>Sort model card versions by ascending or descending order.</p>
   */
  SortOrder?: ModelCardSortOrder | string;
}

/**
 * <p>A summary of a specific version of the model card.</p>
 */
export interface ModelCardVersionSummary {
  /**
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
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
   */
  ModelCardStatus: ModelCardStatus | string | undefined;

  /**
   * <p>A version of the model card.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time date and time that the model card version was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface ListModelCardVersionsResponse {
  /**
   * <p>The summaries of the listed versions of the model card.</p>
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model
   *          card versions, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model explainability.</p>
   */
  EndpointName?: string;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The
   *          default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

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
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model explainability jobs created before a specified
   *          time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model explainability jobs created after a specified
   *          time.</p>
   */
  CreationTimeAfter?: Date;
}

export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum ModelMetadataFilterType {
  DOMAIN = "Domain",
  FRAMEWORK = "Framework",
  FRAMEWORKVERSION = "FrameworkVersion",
  TASK = "Task",
}

/**
 * <p>Part of the search expression. You can specify the name and value
 *           (domain, task, framework, framework version, task, and model).</p>
 */
export interface ModelMetadataFilter {
  /**
   * <p>The name of the of the model to filter by.</p>
   */
  Name: ModelMetadataFilterType | string | undefined;

  /**
   * <p>The value to filter the model metadata.</p>
   */
  Value: string | undefined;
}

/**
 * <p>One or more filters that searches for the specified resource or resources in
 *           a search. All resource objects that satisfy the expression's condition are
 *           included in the search results</p>
 */
export interface ModelMetadataSearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: ModelMetadataFilter[];
}

export interface ListModelMetadataRequest {
  /**
   * <p>One or more filters that searches for the specified resource or resources
   *           in a search. All resource objects that satisfy the expression's condition are
   *           included in the search results. Specify the  Framework, FrameworkVersion, Domain
   *           or Task to filter supported. Filter names and values are case-sensitive.</p>
   */
  SearchExpression?: ModelMetadataSearchExpression;

  /**
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated,
   *            the response includes a NextToken. To retrieve the next set of model metadata,
   *            use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A summary of the model metadata.</p>
 */
export interface ModelMetadataSummary {
  /**
   * <p>The machine learning domain of the model.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The machine learning framework of the model.</p>
   */
  Framework: string | undefined;

  /**
   * <p>The machine learning task of the model.</p>
   */
  Task: string | undefined;

  /**
   * <p>The name of the model.</p>
   */
  Model: string | undefined;

  /**
   * <p>The framework version of the model.</p>
   */
  FrameworkVersion: string | undefined;
}

export interface ListModelMetadataResponse {
  /**
   * <p>A structure that holds model metadata.</p>
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   */
  NextToken?: string;
}

export enum ModelPackageGroupSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export interface ListModelPackageGroupsInput {
  /**
   * <p>A filter that returns only model groups created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model groups created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model group name. This filter returns only model groups whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             model groups, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageGroupSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

/**
 * <p>Summary information about a model group.</p>
 */
export interface ModelPackageGroupSummary {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | string | undefined;
}

export interface ListModelPackageGroupsOutput {
  /**
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set
   *             of model groups, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export enum ModelPackageType {
  BOTH = "Both",
  UNVERSIONED = "Unversioned",
  VERSIONED = "Versioned",
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
   * <p>A filter that returns only the model packages with the specified approval
   *             status.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
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
   */
  ModelPackageType?: ModelPackageType | string;

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

/**
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model package is a versioned model, the model group that the versioned model
   *             belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>If the model package is a versioned model, the version of the model.</p>
   */
  ModelPackageVersion?: number;

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
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;
}

export interface ListModelPackagesOutput {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListModelQualityJobDefinitionsRequest {
  /**
   * <p>A filter that returns only model quality monitoring job definitions that are associated
   *          with the specified endpoint.</p>
   */
  EndpointName?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringJobDefinitionSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          model quality monitoring job definitions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a call to
   *             <code>ListModelQualityJobDefinitions</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the transform job name. This filter returns only model quality monitoring
   *          job definitions whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created before the
   *          specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created after the
   *          specified time.</p>
   */
  CreationTimeAfter?: Date;
}

export interface ListModelQualityJobDefinitionsResponse {
  /**
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of model
   *          quality monitoring job definitions, use it in the next request.</p>
   */
  NextToken?: string;
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
   * <p>A string in the model name. This filter returns only models whose name contains the
   *             specified string.</p>
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

export interface ListModelsOutput {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export enum MonitoringAlertHistorySortKey {
  CreationTime = "CreationTime",
  Status = "Status",
}

export enum MonitoringAlertStatus {
  IN_ALERT = "InAlert",
  OK = "OK",
}

export interface ListMonitoringAlertHistoryRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName?: string;

  /**
   * <p>The field used to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringAlertHistorySortKey | string;

  /**
   * <p>The sort order, whether <code>Ascending</code> or <code>Descending</code>, of the alert
   *          history. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlertHistory</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          alerts in the history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only alerts created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only alerts created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that retrieves only alerts with a specific status.</p>
   */
  StatusEquals?: MonitoringAlertStatus | string;
}

/**
 * <p>Provides summary information of an alert's history.</p>
 */
export interface MonitoringAlertHistorySummary {
  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when the first alert transition occurred in an alert history.
   *       An alert transition can be from status <code>InAlert</code> to <code>OK</code>,
   *       or from <code>OK</code> to <code>InAlert</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The current alert status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | string | undefined;
}

export interface ListMonitoringAlertHistoryResponse {
  /**
   * <p>An alert history for a model monitoring schedule.</p>
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListMonitoringAlertsRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlerts</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the
   *          history, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * <p>An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into
 *             <code>InAlert</code> status.</p>
 */
export interface ModelDashboardIndicatorAction {
  /**
   * <p>Indicates whether the alert action is turned on.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>A list of alert actions taken in response to an alert going into
 *             <code>InAlert</code> status.</p>
 */
export interface MonitoringAlertActions {
  /**
   * <p>An alert action taken to light up an icon on the Model Dashboard when an alert goes into
   *          <code>InAlert</code> status.</p>
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction;
}

/**
 * <p>Provides summary information about a monitor alert.</p>
 */
export interface MonitoringAlertSummary {
  /**
   * <p>The name of a monitoring alert.</p>
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of an alert.</p>
   */
  AlertStatus: MonitoringAlertStatus | string | undefined;

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

  /**
   * <p>A list of alert actions taken in response to an alert going into
   *             <code>InAlert</code> status.</p>
   */
  Actions: MonitoringAlertActions | undefined;
}

export interface ListMonitoringAlertsResponse {
  /**
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          alerts, use it in the subsequent request.</p>
   */
  NextToken?: string;
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

  /**
   * <p>Gets a list of the monitoring job runs of the specified monitoring job
   *          definitions.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring job runs of the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType | string;
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

  /**
   * <p>Gets a list of the monitoring schedules for the specified monitoring job
   *          definition.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>A filter that returns only the monitoring schedules for the specified monitoring
   *          type.</p>
   */
  MonitoringTypeEquals?: MonitoringType | string;
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

  /**
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export interface ListMonitoringSchedulesResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent request.</p>
   */
  NextToken?: string;
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

export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>If the response is truncated, SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
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
   *          <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *          </note>
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

/**
 * <p>Provides summary information for an SageMaker notebook instance.</p>
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
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook
   *             instance. </p>
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
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];
}

export interface ListNotebookInstancesOutput {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

export enum SortPipelineExecutionsBy {
  CREATION_TIME = "CreationTime",
  PIPELINE_EXECUTION_ARN = "PipelineExecutionArn",
}

export interface ListPipelineExecutionsRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>A filter that returns the pipeline executions that were created after a specified
   *          time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns the pipeline executions that were created before a specified
   *          time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   */
  SortBy?: SortPipelineExecutionsBy | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipeline executions to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A pipeline execution summary.</p>
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The start time of the pipeline execution.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   */
  PipelineExecutionFailureReason?: string;
}

export interface ListPipelineExecutionsResponse {
  /**
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified
   *          filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date,
   *          and the status. This list can be empty. </p>
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[];

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated,
   *          the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   */
  NextToken?: string;
}

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

/**
 * <p>Metadata for Model steps.</p>
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   */
  Arn?: string;
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

/**
 * <p>Metadata for a register model job step.</p>
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  Arn?: string;
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

/**
 * <p>Metadata for a transform job step.</p>
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   */
  Arn?: string;
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
   * <p>The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.</p>
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
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   */
  EMR?: EMRStepMetadata;

  /**
   * <p>The configurations and outcomes of a Fail step execution.</p>
   */
  Fail?: FailStepMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that was run by this step.</p>
   */
  AutoMLJob?: AutoMLJobStepMetadata;
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
   * <p>Metadata to run the pipeline step.</p>
   */
  Metadata?: PipelineExecutionStepMetadata;
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

export enum SpaceSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime",
}

export interface ListSpacesRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *             Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SpaceSortKey | string;

  /**
   * <p>A parameter to search for the Domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  SpaceNameContains?: string;
}

/**
 * <p>The space's details.</p>
 */
export interface SpaceDetails {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId?: string;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: SpaceStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;
}

export interface ListSpacesResponse {
  /**
   * <p>The list of spaces.</p>
   */
  Spaces?: SpaceDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *             Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
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

  /**
   * <p>A filter that retrieves only training jobs with a specific warm pool status.</p>
   */
  WarmPoolStatusEquals?: WarmPoolResourceStatus | string;
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

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   */
  WarmPoolStatus?: WarmPoolStatus;
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
   *          <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
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
   * <p>A filter that returns only components that have the specified source Amazon Resource Name (ARN).
   *       If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code>
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
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
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

/**
 * <p>The properties of a model as returned by the <a>Search</a> API.</p>
 */
export interface Model {
  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>Describes the container, as part of model definition.</p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details about how containers in a multi-container endpoint are run.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn?: string;

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>A list of key-value pairs associated with the model. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>An Amazon SageMaker Model Card.</p>
 */
export interface ModelCard {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn?: string;

  /**
   * <p>The unique name of the model card.</p>
   */
  ModelCardName?: string;

  /**
   * <p>The version of the model card.</p>
   */
  ModelCardVersion?: number;

  /**
   * <p>The content of the model card. Content uses the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-api-json-schema.html">model card JSON schema</a> and provided as a string.</p>
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

  /**
   * <p>The security configuration used to protect model card data.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>The date and time that the model card was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The date and time that the model card was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Key-value pairs used to manage metadata for the model card.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The unique name (ID) of the model.</p>
   */
  ModelId?: string;

  /**
   * <p>The risk rating of the model. Different organizations might have different criteria for model card risk ratings. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-risk-rating.html">Risk ratings</a>.</p>
   */
  RiskRating?: string;
}

/**
 * <p>An endpoint that hosts a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardEndpoint {
  /**
   * <p>The endpoint name.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The endpoint status.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;
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

/**
 * <p>The model card for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardModelCard {
  /**
   * <p>The Amazon Resource Name (ARN) for a model card.</p>
   */
  ModelCardArn?: string;

  /**
   * <p>The name of a model card.</p>
   */
  ModelCardName?: string;

  /**
   * <p>The model card version.</p>
   */
  ModelCardVersion?: number;

  /**
   * <p>The model card status.</p>
   */
  ModelCardStatus?: ModelCardStatus | string;

  /**
   * <p>The KMS Key ID (<code>KMSKeyId</code>) for encryption of model card information.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>A timestamp that indicates when the model card was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>A timestamp that indicates when the model card was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The tags associated with a model card.</p>
   */
  Tags?: Tag[];

  /**
   * <p>For models created in SageMaker, this is the model ARN. For models created
   *          outside of SageMaker, this is a user-customized string.</p>
   */
  ModelId?: string;

  /**
   * <p>A model card's risk rating. Can be low, medium, or high.</p>
   */
  RiskRating?: string;
}

/**
 * <p>A monitoring schedule for a model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardMonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of a monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The name of a monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus?: ScheduleStatus | string;

  /**
   * <p>The monitor type of a model monitor.</p>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>If a monitoring job failed, provides the reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that indicates when the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that indicates when the monitoring schedule was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * <p>The endpoint which is monitored.</p>
   */
  EndpointName?: string;

  /**
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[];

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}

/**
 * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
 */
export interface ModelDashboardModel {
  /**
   * <p>A model displayed in the Model Dashboard.</p>
   */
  Model?: Model;

  /**
   * <p>The endpoints that host a model.</p>
   */
  Endpoints?: ModelDashboardEndpoint[];

  /**
   * <p>A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch
   *         Transform</a>.</p>
   */
  LastBatchTransformJob?: TransformJob;

  /**
   * <p>The monitoring schedules for a model.</p>
   */
  MonitoringSchedules?: ModelDashboardMonitoringSchedule[];

  /**
   * <p>The model card for a model.</p>
   */
  ModelCard?: ModelDashboardModelCard;
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
   *       component, lineage group, project, or model card.</p>
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
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus | string;

  /**
   * <p>A list of the tags associated with the model group. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

export enum ModelVariantAction {
  PROMOTE = "Promote",
  REMOVE = "Remove",
  RETAIN = "Retain",
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
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
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
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
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

/**
 * <p>Configuration information for updating the Amazon SageMaker Debugger profile parameters, system and framework metrics configurations, and
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
   * <p>To turn off Amazon SageMaker Debugger monitoring and profiling while a training job is in progress, set to <code>True</code>.</p>
   */
  DisableProfiler?: boolean;
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
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A timestamp container for when the project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
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

export interface PutModelPackageGroupPolicyOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package group.</p>
   */
  ModelPackageGroupArn: string | undefined;
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
   *          <p>See a list of available Human Ui Amazon Resource Names (ARNs) in <a>UiConfig</a>.</p>
   */
  HumanTaskUiArn?: string;
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

/**
 * <p>The <code>ResourceConfig</code> to update <code>KeepAlivePeriodInSeconds</code>. Other
 *             fields in the <code>ResourceConfig</code> cannot be updated.</p>
 */
export interface ResourceConfigForUpdate {
  /**
   * <p>The <code>KeepAlivePeriodInSeconds</code> value specified in the
   *                 <code>ResourceConfig</code> to update.</p>
   */
  KeepAlivePeriodInSeconds: number | undefined;
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

export interface RetryPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
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
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p>
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
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for the
   *             training job.</p>
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
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
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
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
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
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
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
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];
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
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;
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
   *       component, lineage group, project, or model card.</p>
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
   *       component, lineage group, project, or model card.</p>
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

  /**
   * <p>The name of the experiment run.</p>
   */
  RunName?: string;
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

  /**
   * <p>The properties of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;

  /**
   * <p>A model displayed in the Amazon SageMaker Model Dashboard.</p>
   */
  Model?: ModelDashboardModel;

  /**
   * <p>An Amazon SageMaker Model Card that documents details about a machine learning model.</p>
   */
  ModelCard?: ModelCard;
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

export interface SendPipelineExecutionStepFailureResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
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

export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
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

export interface StartInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to start.</p>
   */
  Name: string | undefined;
}

export interface StartInferenceExperimentResponse {
  /**
   * <p>The ARN of the started inference experiment to start.</p>
   */
  InferenceExperimentArn: string | undefined;
}

export interface StartMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export interface StartNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
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

export interface StartPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export interface StopAutoMLJobRequest {
  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

export interface StopCompilationJobRequest {
  /**
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
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

export interface StopEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export interface StopHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export interface StopInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to stop.</p>
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
   */
  ModelVariantActions: Record<string, ModelVariantAction | string> | undefined;

  /**
   * <p>
   *            An array of <code>ModelVariantConfig</code> objects. There is one for each variant that you want to deploy
   *            after the inference experiment stops. Each <code>ModelVariantConfig</code> describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
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
   */
  DesiredState?: InferenceExperimentStopDesiredState | string;

  /**
   * <p>The reason for stopping the experiment.</p>
   */
  Reason?: string;
}

export interface StopInferenceExperimentResponse {
  /**
   * <p>The ARN of the stopped inference experiment.</p>
   */
  InferenceExperimentArn: string | undefined;
}

export interface StopInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job you want to stop.</p>
   */
  JobName: string | undefined;
}

export interface StopLabelingJobRequest {
  /**
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

export interface StopMonitoringScheduleRequest {
  /**
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export interface StopNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
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

export interface StopPipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export interface StopProcessingJobRequest {
  /**
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

export interface StopTrainingJobRequest {
  /**
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

export interface StopTransformJobRequest {
  /**
   * <p>The name of the batch transform job to stop.</p>
   */
  TransformJobName: string | undefined;
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

export interface UpdateActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;
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

export interface UpdateAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;
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

export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials used to access the repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *          </p>
   */
  GitConfig?: GitConfigForUpdate;
}

export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
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

export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
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

  /**
   * <p>The default settings used to create a space within the Domain.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;
}

export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

export enum VariantPropertyType {
  DataCaptureConfig = "DataCaptureConfig",
  DesiredInstanceCount = "DesiredInstanceCount",
  DesiredWeight = "DesiredWeight",
}

/**
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *          <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to
 *                 <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the
 *             existing variant properties of the endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <a>ProductionVariant$InitialInstanceCount</a> values
   *                     in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <a>ProductionVariant$InitialVariantWeight</a> values in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
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
   *                 <code>ExcludeRetainedVariantProperties</code>, no variant properties are overridden.
   *         </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for an endpoint, which contains the desired deployment
   *             strategy and rollback configurations.</p>
   */
  DeploymentConfig?: DeploymentConfig;

  /**
   * <p>Specifies whether to reuse the last deployment configuration. The default value is
   *             false (the configuration is not reused).</p>
   */
  RetainDeploymentConfig?: boolean;
}

export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
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

export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @internal
 */
export const ListArtifactsResponseFilterSensitiveLog = (obj: ListArtifactsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociationsRequestFilterSensitiveLog = (obj: ListAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociationsResponseFilterSensitiveLog = (obj: ListAssociationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAutoMLJobsRequestFilterSensitiveLog = (obj: ListAutoMLJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAutoMLJobsResponseFilterSensitiveLog = (obj: ListAutoMLJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCandidatesForAutoMLJobRequestFilterSensitiveLog = (obj: ListCandidatesForAutoMLJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCandidatesForAutoMLJobResponseFilterSensitiveLog = (obj: ListCandidatesForAutoMLJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCodeRepositoriesInputFilterSensitiveLog = (obj: ListCodeRepositoriesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCodeRepositoriesOutputFilterSensitiveLog = (obj: ListCodeRepositoriesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCompilationJobsRequestFilterSensitiveLog = (obj: ListCompilationJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCompilationJobsResponseFilterSensitiveLog = (obj: ListCompilationJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContextsRequestFilterSensitiveLog = (obj: ListContextsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContextsResponseFilterSensitiveLog = (obj: ListContextsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityJobDefinitionsRequestFilterSensitiveLog = (
  obj: ListDataQualityJobDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringJobDefinitionSummaryFilterSensitiveLog = (obj: MonitoringJobDefinitionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityJobDefinitionsResponseFilterSensitiveLog = (
  obj: ListDataQualityJobDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceFleetsRequestFilterSensitiveLog = (obj: ListDeviceFleetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceFleetsResponseFilterSensitiveLog = (obj: ListDeviceFleetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsRequestFilterSensitiveLog = (obj: ListDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsResponseFilterSensitiveLog = (obj: ListDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEdgeDeploymentPlansRequestFilterSensitiveLog = (obj: ListEdgeDeploymentPlansRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEdgeDeploymentPlansResponseFilterSensitiveLog = (obj: ListEdgeDeploymentPlansResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEdgePackagingJobsRequestFilterSensitiveLog = (obj: ListEdgePackagingJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEdgePackagingJobsResponseFilterSensitiveLog = (obj: ListEdgePackagingJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointConfigsInputFilterSensitiveLog = (obj: ListEndpointConfigsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointConfigsOutputFilterSensitiveLog = (obj: ListEndpointConfigsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsInputFilterSensitiveLog = (obj: ListEndpointsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsOutputFilterSensitiveLog = (obj: ListEndpointsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsRequestFilterSensitiveLog = (obj: ListExperimentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsResponseFilterSensitiveLog = (obj: ListExperimentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFeatureGroupsRequestFilterSensitiveLog = (obj: ListFeatureGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFeatureGroupsResponseFilterSensitiveLog = (obj: ListFeatureGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowDefinitionsRequestFilterSensitiveLog = (obj: ListFlowDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowDefinitionsResponseFilterSensitiveLog = (obj: ListFlowDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubContentsRequestFilterSensitiveLog = (obj: ListHubContentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubContentsResponseFilterSensitiveLog = (obj: ListHubContentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubContentVersionsRequestFilterSensitiveLog = (obj: ListHubContentVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubContentVersionsResponseFilterSensitiveLog = (obj: ListHubContentVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubsRequestFilterSensitiveLog = (obj: ListHubsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHubsResponseFilterSensitiveLog = (obj: ListHubsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHumanTaskUisRequestFilterSensitiveLog = (obj: ListHumanTaskUisRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHumanTaskUisResponseFilterSensitiveLog = (obj: ListHumanTaskUisResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHyperParameterTuningJobsRequestFilterSensitiveLog = (
  obj: ListHyperParameterTuningJobsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHyperParameterTuningJobsResponseFilterSensitiveLog = (
  obj: ListHyperParameterTuningJobsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesRequestFilterSensitiveLog = (obj: ListImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesResponseFilterSensitiveLog = (obj: ListImagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageVersionsRequestFilterSensitiveLog = (obj: ListImageVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageVersionsResponseFilterSensitiveLog = (obj: ListImageVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceExperimentsRequestFilterSensitiveLog = (obj: ListInferenceExperimentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceExperimentsResponseFilterSensitiveLog = (obj: ListInferenceExperimentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceRecommendationsJobsRequestFilterSensitiveLog = (
  obj: ListInferenceRecommendationsJobsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceRecommendationsJobsResponseFilterSensitiveLog = (
  obj: ListInferenceRecommendationsJobsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceRecommendationsJobStepsRequestFilterSensitiveLog = (
  obj: ListInferenceRecommendationsJobStepsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceRecommendationsJobStepsResponseFilterSensitiveLog = (
  obj: ListInferenceRecommendationsJobStepsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelingJobsRequestFilterSensitiveLog = (obj: ListLabelingJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelingJobsResponseFilterSensitiveLog = (obj: ListLabelingJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelingJobsForWorkteamRequestFilterSensitiveLog = (obj: ListLabelingJobsForWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelingJobsForWorkteamResponseFilterSensitiveLog = (
  obj: ListLabelingJobsForWorkteamResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLineageGroupsRequestFilterSensitiveLog = (obj: ListLineageGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLineageGroupsResponseFilterSensitiveLog = (obj: ListLineageGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelBiasJobDefinitionsRequestFilterSensitiveLog = (obj: ListModelBiasJobDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelBiasJobDefinitionsResponseFilterSensitiveLog = (
  obj: ListModelBiasJobDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardExportJobsRequestFilterSensitiveLog = (obj: ListModelCardExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelCardExportJobSummaryFilterSensitiveLog = (obj: ModelCardExportJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardExportJobsResponseFilterSensitiveLog = (obj: ListModelCardExportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardsRequestFilterSensitiveLog = (obj: ListModelCardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelCardSummaryFilterSensitiveLog = (obj: ModelCardSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardsResponseFilterSensitiveLog = (obj: ListModelCardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardVersionsRequestFilterSensitiveLog = (obj: ListModelCardVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelCardVersionSummaryFilterSensitiveLog = (obj: ModelCardVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelCardVersionsResponseFilterSensitiveLog = (obj: ListModelCardVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelExplainabilityJobDefinitionsRequestFilterSensitiveLog = (
  obj: ListModelExplainabilityJobDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelExplainabilityJobDefinitionsResponseFilterSensitiveLog = (
  obj: ListModelExplainabilityJobDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelMetadataFilterFilterSensitiveLog = (obj: ModelMetadataFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelMetadataSearchExpressionFilterSensitiveLog = (obj: ModelMetadataSearchExpression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelMetadataRequestFilterSensitiveLog = (obj: ListModelMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelMetadataSummaryFilterSensitiveLog = (obj: ModelMetadataSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelMetadataResponseFilterSensitiveLog = (obj: ListModelMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackageGroupsInputFilterSensitiveLog = (obj: ListModelPackageGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageGroupSummaryFilterSensitiveLog = (obj: ModelPackageGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackageGroupsOutputFilterSensitiveLog = (obj: ListModelPackageGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackagesInputFilterSensitiveLog = (obj: ListModelPackagesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageSummaryFilterSensitiveLog = (obj: ModelPackageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackagesOutputFilterSensitiveLog = (obj: ListModelPackagesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelQualityJobDefinitionsRequestFilterSensitiveLog = (
  obj: ListModelQualityJobDefinitionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelQualityJobDefinitionsResponseFilterSensitiveLog = (
  obj: ListModelQualityJobDefinitionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsInputFilterSensitiveLog = (obj: ListModelsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelSummaryFilterSensitiveLog = (obj: ModelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsOutputFilterSensitiveLog = (obj: ListModelsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringAlertHistoryRequestFilterSensitiveLog = (obj: ListMonitoringAlertHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringAlertHistorySummaryFilterSensitiveLog = (obj: MonitoringAlertHistorySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringAlertHistoryResponseFilterSensitiveLog = (obj: ListMonitoringAlertHistoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringAlertsRequestFilterSensitiveLog = (obj: ListMonitoringAlertsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDashboardIndicatorActionFilterSensitiveLog = (obj: ModelDashboardIndicatorAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringAlertActionsFilterSensitiveLog = (obj: MonitoringAlertActions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringAlertSummaryFilterSensitiveLog = (obj: MonitoringAlertSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringAlertsResponseFilterSensitiveLog = (obj: ListMonitoringAlertsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringExecutionsRequestFilterSensitiveLog = (obj: ListMonitoringExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringExecutionsResponseFilterSensitiveLog = (obj: ListMonitoringExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringSchedulesRequestFilterSensitiveLog = (obj: ListMonitoringSchedulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringScheduleSummaryFilterSensitiveLog = (obj: MonitoringScheduleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMonitoringSchedulesResponseFilterSensitiveLog = (obj: ListMonitoringSchedulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookInstanceLifecycleConfigsInputFilterSensitiveLog = (
  obj: ListNotebookInstanceLifecycleConfigsInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotebookInstanceLifecycleConfigSummaryFilterSensitiveLog = (
  obj: NotebookInstanceLifecycleConfigSummary
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookInstanceLifecycleConfigsOutputFilterSensitiveLog = (
  obj: ListNotebookInstanceLifecycleConfigsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookInstancesInputFilterSensitiveLog = (obj: ListNotebookInstancesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotebookInstanceSummaryFilterSensitiveLog = (obj: NotebookInstanceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookInstancesOutputFilterSensitiveLog = (obj: ListNotebookInstancesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionsRequestFilterSensitiveLog = (obj: ListPipelineExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionSummaryFilterSensitiveLog = (obj: PipelineExecutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionsResponseFilterSensitiveLog = (obj: ListPipelineExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionStepsRequestFilterSensitiveLog = (obj: ListPipelineExecutionStepsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelStepMetadataFilterSensitiveLog = (obj: ModelStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingJobStepMetadataFilterSensitiveLog = (obj: ProcessingJobStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QualityCheckStepMetadataFilterSensitiveLog = (obj: QualityCheckStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterModelStepMetadataFilterSensitiveLog = (obj: RegisterModelStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingJobStepMetadataFilterSensitiveLog = (obj: TrainingJobStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformJobStepMetadataFilterSensitiveLog = (obj: TransformJobStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TuningJobStepMetaDataFilterSensitiveLog = (obj: TuningJobStepMetaData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionStepMetadataFilterSensitiveLog = (obj: PipelineExecutionStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionStepFilterSensitiveLog = (obj: PipelineExecutionStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineExecutionStepsResponseFilterSensitiveLog = (obj: ListPipelineExecutionStepsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineParametersForExecutionRequestFilterSensitiveLog = (
  obj: ListPipelineParametersForExecutionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterFilterSensitiveLog = (obj: Parameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelineParametersForExecutionResponseFilterSensitiveLog = (
  obj: ListPipelineParametersForExecutionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelinesRequestFilterSensitiveLog = (obj: ListPipelinesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineSummaryFilterSensitiveLog = (obj: PipelineSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipelinesResponseFilterSensitiveLog = (obj: ListPipelinesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProcessingJobsRequestFilterSensitiveLog = (obj: ListProcessingJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingJobSummaryFilterSensitiveLog = (obj: ProcessingJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProcessingJobsResponseFilterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsInputFilterSensitiveLog = (obj: ListProjectsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsOutputFilterSensitiveLog = (obj: ListProjectsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSpacesRequestFilterSensitiveLog = (obj: ListSpacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpaceDetailsFilterSensitiveLog = (obj: SpaceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSpacesResponseFilterSensitiveLog = (obj: ListSpacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStageDevicesRequestFilterSensitiveLog = (obj: ListStageDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStageDevicesResponseFilterSensitiveLog = (obj: ListStageDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudioLifecycleConfigsRequestFilterSensitiveLog = (obj: ListStudioLifecycleConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StudioLifecycleConfigDetailsFilterSensitiveLog = (obj: StudioLifecycleConfigDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudioLifecycleConfigsResponseFilterSensitiveLog = (obj: ListStudioLifecycleConfigsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscribedWorkteamsRequestFilterSensitiveLog = (obj: ListSubscribedWorkteamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscribedWorkteamsResponseFilterSensitiveLog = (obj: ListSubscribedWorkteamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsInputFilterSensitiveLog = (obj: ListTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsOutputFilterSensitiveLog = (obj: ListTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrainingJobsRequestFilterSensitiveLog = (obj: ListTrainingJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingJobSummaryFilterSensitiveLog = (obj: TrainingJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrainingJobsResponseFilterSensitiveLog = (obj: ListTrainingJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrainingJobsForHyperParameterTuningJobRequestFilterSensitiveLog = (
  obj: ListTrainingJobsForHyperParameterTuningJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrainingJobsForHyperParameterTuningJobResponseFilterSensitiveLog = (
  obj: ListTrainingJobsForHyperParameterTuningJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTransformJobsRequestFilterSensitiveLog = (obj: ListTransformJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformJobSummaryFilterSensitiveLog = (obj: TransformJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTransformJobsResponseFilterSensitiveLog = (obj: ListTransformJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrialComponentsRequestFilterSensitiveLog = (obj: ListTrialComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentSummaryFilterSensitiveLog = (obj: TrialComponentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrialComponentsResponseFilterSensitiveLog = (obj: ListTrialComponentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrialsRequestFilterSensitiveLog = (obj: ListTrialsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialSummaryFilterSensitiveLog = (obj: TrialSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrialsResponseFilterSensitiveLog = (obj: ListTrialsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserProfilesRequestFilterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserProfileDetailsFilterSensitiveLog = (obj: UserProfileDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserProfilesResponseFilterSensitiveLog = (obj: ListUserProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkforcesRequestFilterSensitiveLog = (obj: ListWorkforcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkforcesResponseFilterSensitiveLog = (obj: ListWorkforcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkteamsRequestFilterSensitiveLog = (obj: ListWorkteamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkteamsResponseFilterSensitiveLog = (obj: ListWorkteamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelFilterSensitiveLog = (obj: Model): any => ({
  ...obj,
});

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
export const ModelDashboardEndpointFilterSensitiveLog = (obj: ModelDashboardEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformJobFilterSensitiveLog = (obj: TransformJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDashboardModelCardFilterSensitiveLog = (obj: ModelDashboardModelCard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDashboardMonitoringScheduleFilterSensitiveLog = (obj: ModelDashboardMonitoringSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDashboardModelFilterSensitiveLog = (obj: ModelDashboardModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageFilterSensitiveLog = (obj: ModelPackage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageGroupFilterSensitiveLog = (obj: ModelPackageGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NestedFiltersFilterSensitiveLog = (obj: NestedFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParentFilterSensitiveLog = (obj: Parent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineFilterSensitiveLog = (obj: Pipeline): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExecutionFilterSensitiveLog = (obj: PipelineExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessingJobFilterSensitiveLog = (obj: ProcessingJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfilerConfigForUpdateFilterSensitiveLog = (obj: ProfilerConfigForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectFilterSensitiveLog = (obj: Project): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutModelPackageGroupPolicyInputFilterSensitiveLog = (obj: PutModelPackageGroupPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutModelPackageGroupPolicyOutputFilterSensitiveLog = (obj: PutModelPackageGroupPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryFiltersFilterSensitiveLog = (obj: QueryFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryLineageRequestFilterSensitiveLog = (obj: QueryLineageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VertexFilterSensitiveLog = (obj: Vertex): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryLineageResponseFilterSensitiveLog = (obj: QueryLineageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterDevicesRequestFilterSensitiveLog = (obj: RegisterDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenderableTaskFilterSensitiveLog = (obj: RenderableTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenderingErrorFilterSensitiveLog = (obj: RenderingError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenderUiTemplateRequestFilterSensitiveLog = (obj: RenderUiTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RenderUiTemplateResponseFilterSensitiveLog = (obj: RenderUiTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceConfigForUpdateFilterSensitiveLog = (obj: ResourceConfigForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryPipelineExecutionRequestFilterSensitiveLog = (obj: RetryPipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryPipelineExecutionResponseFilterSensitiveLog = (obj: RetryPipelineExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingJobFilterSensitiveLog = (obj: TrainingJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentSimpleSummaryFilterSensitiveLog = (obj: TrialComponentSimpleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialFilterSensitiveLog = (obj: Trial): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentSourceDetailFilterSensitiveLog = (obj: TrialComponentSourceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentFilterSensitiveLog = (obj: TrialComponent): any => ({
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
export const SearchRecordFilterSensitiveLog = (obj: SearchRecord): any => ({
  ...obj,
  ...(obj.TrialComponent && { TrialComponent: TrialComponentFilterSensitiveLog(obj.TrialComponent) }),
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
export const SendPipelineExecutionStepFailureRequestFilterSensitiveLog = (
  obj: SendPipelineExecutionStepFailureRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendPipelineExecutionStepFailureResponseFilterSensitiveLog = (
  obj: SendPipelineExecutionStepFailureResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendPipelineExecutionStepSuccessRequestFilterSensitiveLog = (
  obj: SendPipelineExecutionStepSuccessRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendPipelineExecutionStepSuccessResponseFilterSensitiveLog = (
  obj: SendPipelineExecutionStepSuccessResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartEdgeDeploymentStageRequestFilterSensitiveLog = (obj: StartEdgeDeploymentStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInferenceExperimentRequestFilterSensitiveLog = (obj: StartInferenceExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInferenceExperimentResponseFilterSensitiveLog = (obj: StartInferenceExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMonitoringScheduleRequestFilterSensitiveLog = (obj: StartMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartNotebookInstanceInputFilterSensitiveLog = (obj: StartNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPipelineExecutionRequestFilterSensitiveLog = (obj: StartPipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPipelineExecutionResponseFilterSensitiveLog = (obj: StartPipelineExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAutoMLJobRequestFilterSensitiveLog = (obj: StopAutoMLJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCompilationJobRequestFilterSensitiveLog = (obj: StopCompilationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopEdgeDeploymentStageRequestFilterSensitiveLog = (obj: StopEdgeDeploymentStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopEdgePackagingJobRequestFilterSensitiveLog = (obj: StopEdgePackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopHyperParameterTuningJobRequestFilterSensitiveLog = (obj: StopHyperParameterTuningJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInferenceExperimentRequestFilterSensitiveLog = (obj: StopInferenceExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInferenceExperimentResponseFilterSensitiveLog = (obj: StopInferenceExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInferenceRecommendationsJobRequestFilterSensitiveLog = (
  obj: StopInferenceRecommendationsJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopLabelingJobRequestFilterSensitiveLog = (obj: StopLabelingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMonitoringScheduleRequestFilterSensitiveLog = (obj: StopMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopNotebookInstanceInputFilterSensitiveLog = (obj: StopNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipelineExecutionRequestFilterSensitiveLog = (obj: StopPipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipelineExecutionResponseFilterSensitiveLog = (obj: StopPipelineExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopProcessingJobRequestFilterSensitiveLog = (obj: StopProcessingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTrainingJobRequestFilterSensitiveLog = (obj: StopTrainingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTransformJobRequestFilterSensitiveLog = (obj: StopTransformJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionRequestFilterSensitiveLog = (obj: UpdateActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionResponseFilterSensitiveLog = (obj: UpdateActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppImageConfigRequestFilterSensitiveLog = (obj: UpdateAppImageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppImageConfigResponseFilterSensitiveLog = (obj: UpdateAppImageConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateArtifactRequestFilterSensitiveLog = (obj: UpdateArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateArtifactResponseFilterSensitiveLog = (obj: UpdateArtifactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCodeRepositoryInputFilterSensitiveLog = (obj: UpdateCodeRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCodeRepositoryOutputFilterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContextRequestFilterSensitiveLog = (obj: UpdateContextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContextResponseFilterSensitiveLog = (obj: UpdateContextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceFleetRequestFilterSensitiveLog = (obj: UpdateDeviceFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDevicesRequestFilterSensitiveLog = (obj: UpdateDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainRequestFilterSensitiveLog = (obj: UpdateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainResponseFilterSensitiveLog = (obj: UpdateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantPropertyFilterSensitiveLog = (obj: VariantProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointInputFilterSensitiveLog = (obj: UpdateEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointOutputFilterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointWeightsAndCapacitiesInputFilterSensitiveLog = (
  obj: UpdateEndpointWeightsAndCapacitiesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointWeightsAndCapacitiesOutputFilterSensitiveLog = (
  obj: UpdateEndpointWeightsAndCapacitiesOutput
): any => ({
  ...obj,
});
