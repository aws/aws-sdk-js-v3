// smithy-typescript generated code
import type {
  _InstanceType,
  AccessBudgetType,
  AudienceExportJobStatus,
  AudienceGenerationJobStatus,
  AudienceModelStatus,
  AudienceSizeType,
  AutoRefreshMode,
  ColumnType,
  ConfiguredAudienceModelStatus,
  DatasetType,
  EntityType,
  InferenceInstanceType,
  LogsStatus,
  LogType,
  MembershipInferenceAttackVersion,
  MetricsStatus,
  MLInputChannelStatus,
  NoiseLevelType,
  PolicyExistenceCondition,
  ResultFormat,
  S3DataDistributionType,
  SharedAudienceMetrics,
  SyntheticDataColumnType,
  TagOnCreatePolicy,
  TrainedModelArtifactMaxSizeUnitType,
  TrainedModelExportFileType,
  TrainedModelExportJobStatus,
  TrainedModelExportsMaxSizeUnitType,
  TrainedModelInferenceJobStatus,
  TrainedModelInferenceMaxOutputSizeUnitType,
  TrainedModelStatus,
  TrainingDatasetStatus,
  TrainingInputMode,
  WorkerComputeType,
} from "./enums";

/**
 * The detailed information for a specific budget period, including time boundaries and budget amounts.
 *
 * @public
 */
export interface AccessBudgetDetails {
  /**
   * The start time of this budget period.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of this budget period. If not specified, the budget period continues indefinitely.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The amount of budget remaining in this period.
   *
   * @public
   */
  remainingBudget: number | undefined;

  /**
   * The total budget amount allocated for this period.
   *
   * @public
   */
  budget: number | undefined;

  /**
   * The type of budget period. Calendar-based types reset automatically at regular intervals, while LIFETIME budgets never reset.
   *
   * @public
   */
  budgetType: AccessBudgetType | undefined;

  /**
   * Specifies whether this budget automatically refreshes when the current period ends.
   *
   * @public
   */
  autoRefresh?: AutoRefreshMode | undefined;
}

/**
 * An access budget that defines consumption limits for a specific resource within defined time periods.
 *
 * @public
 */
export interface AccessBudget {
  /**
   * The Amazon Resource Name (ARN) of the resource that this access budget applies to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of budget details for this resource. Contains active budget periods that apply to the resource.
   *
   * @public
   */
  details: AccessBudgetDetails[] | undefined;

  /**
   * The total remaining budget across all active budget periods for this resource.
   *
   * @public
   */
  aggregateRemainingBudget: number | undefined;
}

/**
 * Provides information about an Amazon S3 bucket and path.
 *
 * @public
 */
export interface S3ConfigMap {
  /**
   * The Amazon S3 location URI.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Defines the Amazon S3 bucket where the configured audience is stored.
 *
 * @public
 */
export interface AudienceDestination {
  /**
   * The Amazon S3 bucket and path for the configured audience.
   *
   * @public
   */
  s3Destination: S3ConfigMap | undefined;
}

/**
 * @public
 */
export interface ListAudienceExportJobsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience generation job that you are interested in.
   *
   * @public
   */
  audienceGenerationJobArn?: string | undefined;
}

/**
 * The size of the generated audience. Must match one of the sizes in the configured audience model.
 *
 * @public
 */
export interface AudienceSize {
  /**
   * Whether the audience size is defined in absolute terms or as a percentage. You can use the `ABSOLUTE` AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the `Percentage` AudienceSize to configure sizes in the range 1-100 percent.
   *
   * @public
   */
  type: AudienceSizeType | undefined;

  /**
   * Specify an audience size value.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Details about the status of a resource.
 *
 * @public
 */
export interface StatusDetails {
  /**
   * The status code that was returned. The status code is intended for programmatic error handling. Clean Rooms ML will not change the status code for existing error conditions.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * The error message that was returned. The message is intended for human consumption and can change at any time. Use the `statusCode` for programmatic error handling.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Provides information about the audience export job.
 *
 * @public
 */
export interface AudienceExportJobSummary {
  /**
   * The time at which the audience export job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the audience export job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The name of the audience export job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience generation job that was exported.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * The size of the generated audience. Must match one of the sizes in the configured audience model.
   *
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * The description of the audience export job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the audience export job.
   *
   * @public
   */
  status: AudienceExportJobStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The Amazon S3 bucket where the audience export is stored.
   *
   * @public
   */
  outputLocation?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceExportJobsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The audience export jobs that match the request.
   *
   * @public
   */
  audienceExportJobs: AudienceExportJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartAudienceExportJobRequest {
  /**
   * The name of the audience export job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience generation job that you want to export.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * The size of the generated audience. Must match one of the sizes in the configured audience model.
   *
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * The description of the audience export job.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAudienceGenerationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the audience generation job that you want to delete.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceGenerationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the audience generation job that you are interested in.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * The relevance score of a generated audience.
 *
 * @public
 */
export interface RelevanceMetric {
  /**
   * The size of the generated audience. Must match one of the sizes in the configured audience model.
   *
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * The relevance score of the generated audience.
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * Metrics that describe the quality of the generated audience.
 *
 * @public
 */
export interface AudienceQualityMetrics {
  /**
   * The relevance scores of the generated audience.
   *
   * @public
   */
  relevanceMetrics: RelevanceMetric[] | undefined;

  /**
   * The recall score of the generated audience. Recall is the percentage of the most similar users (by default, the most similar 20%) from a sample of the training data that are included in the seed audience by the audience generation job. Values range from 0-1, larger values indicate a better audience. A recall value approximately equal to the maximum bin size indicates that the audience model is equivalent to random selection.
   *
   * @public
   */
  recallMetric?: number | undefined;
}

/**
 * The configuration properties for the worker compute environment. These properties allow you to customize the compute settings for your Clean Rooms workloads.
 *
 * @public
 */
export type WorkerComputeConfigurationProperties =
  | WorkerComputeConfigurationProperties.SparkMember
  | WorkerComputeConfigurationProperties.$UnknownMember;

/**
 * @public
 */
export namespace WorkerComputeConfigurationProperties {
  /**
   * The Spark configuration properties for SQL workloads. This map contains key-value pairs that configure Apache Spark settings to optimize performance for your data processing jobs. You can specify up to 50 Spark properties, with each key being 1-200 characters and each value being 0-500 characters. These properties allow you to adjust compute capacity for large datasets and complex workloads.
   *
   * @public
   */
  export interface SparkMember {
    spark: Record<string, string>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    spark?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    spark: (value: Record<string, string>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information about the compute workers that perform the transform job.
 *
 * @public
 */
export interface WorkerComputeConfiguration {
  /**
   * The instance type of the compute workers that are used.
   *
   * @public
   */
  type?: WorkerComputeType | undefined;

  /**
   * The number of compute workers that are used.
   *
   * @public
   */
  number?: number | undefined;

  /**
   * The configuration properties for the worker compute environment. These properties allow you to customize the compute settings for your Clean Rooms workloads.
   *
   * @public
   */
  properties?: WorkerComputeConfigurationProperties | undefined;
}

/**
 * Provides configuration information for the instances that will perform the compute work.
 *
 * @public
 */
export type ComputeConfiguration =
  | ComputeConfiguration.WorkerMember
  | ComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ComputeConfiguration {
  /**
   * The worker instances that will perform the compute work.
   *
   * @public
   */
  export interface WorkerMember {
    worker: WorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    worker: (value: WorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The parameters for the SQL type Protected Query.
 *
 * @public
 */
export interface ProtectedQuerySQLParameters {
  /**
   * The query string to be submitted.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
   *
   * @public
   */
  analysisTemplateArn?: string | undefined;

  /**
   * The protected query SQL parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * Defines the Amazon S3 bucket where the seed audience for the generating audience is stored.
 *
 * @public
 */
export interface AudienceGenerationJobDataSource {
  /**
   * Defines the Amazon S3 bucket where the seed audience for the generating audience is stored. A valid data source is a JSON line file in the following format:
   *
   * `\{"user_id": "111111"\}`
   *
   * `\{"user_id": "222222"\}`
   *
   * `...`
   *
   * @public
   */
  dataSource?: S3ConfigMap | undefined;

  /**
   * The ARN of the IAM role that can read the Amazon S3 bucket where the seed audience is stored.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The protected SQL query parameters.
   *
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters | undefined;

  /**
   * Provides configuration information for the instances that will perform the compute work.
   *
   * @public
   */
  sqlComputeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAudienceGenerationJobResponse {
  /**
   * The time at which the audience generation job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the audience generation job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience generation job.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * The name of the audience generation job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the audience generation job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the audience generation job.
   *
   * @public
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * Details about the status of the audience generation job.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job.
   *
   * @public
   */
  seedAudience?: AudienceGenerationJobDataSource | undefined;

  /**
   * Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify `TRUE`, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first `minimumSeedSize` count of users are from the seed.
   *
   * @public
   */
  includeSeedInOutput?: boolean | undefined;

  /**
   * The identifier of the collaboration that this audience generation job is associated with.
   *
   * @public
   */
  collaborationId?: string | undefined;

  /**
   * The relevance scores for different audience sizes and the recall score of the generated audience.
   *
   * @public
   */
  metrics?: AudienceQualityMetrics | undefined;

  /**
   * The AWS account that started this audience generation job.
   *
   * @public
   */
  startedBy?: string | undefined;

  /**
   * The tags that are associated to this audience generation job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The unique identifier of the protected query for this audience generation job.
   *
   * @public
   */
  protectedQueryIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.
   *
   * @public
   */
  configuredAudienceModelArn?: string | undefined;

  /**
   * The identifier of the collaboration that contains the audience generation jobs that you are interested in.
   *
   * @public
   */
  collaborationId?: string | undefined;
}

/**
 * Provides information about the configured audience generation job.
 *
 * @public
 */
export interface AudienceGenerationJobSummary {
  /**
   * The time at which the audience generation job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the audience generation job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience generation job.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * The name of the audience generation job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the audience generation job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the audience generation job.
   *
   * @public
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that was used for this audience generation job.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The identifier of the collaboration that contains this audience generation job.
   *
   * @public
   */
  collaborationId?: string | undefined;

  /**
   * The AWS Account that submitted the job.
   *
   * @public
   */
  startedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The audience generation jobs that match the request.
   *
   * @public
   */
  audienceGenerationJobs: AudienceGenerationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobRequest {
  /**
   * The name of the audience generation job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that is used for this audience generation job.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The seed audience that is used to generate the audience.
   *
   * @public
   */
  seedAudience: AudienceGenerationJobDataSource | undefined;

  /**
   * Whether the seed audience is included in the audience generation output.
   *
   * @public
   */
  includeSeedInOutput?: boolean | undefined;

  /**
   * The identifier of the collaboration that contains the audience generation job.
   *
   * @public
   */
  collaborationId?: string | undefined;

  /**
   * The description of the audience generation job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the audience generation job.
   *
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAudienceModelRequest {
  /**
   * The start date and time of the training window.
   *
   * @public
   */
  trainingDataStartTime?: Date | undefined;

  /**
   * The end date and time of the training window.
   *
   * @public
   */
  trainingDataEndTime?: Date | undefined;

  /**
   * The name of the audience model resource.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training dataset for this audience model.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the audience model.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateAudienceModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAudienceModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the audience model that you want to delete.
   *
   * @public
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the audience model that you are interested in.
   *
   * @public
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceModelResponse {
  /**
   * The time at which the audience model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the audience model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The start date specified for the training window.
   *
   * @public
   */
  trainingDataStartTime?: Date | undefined;

  /**
   * The end date specified for the training window.
   *
   * @public
   */
  trainingDataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * The name of the audience model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training dataset that was used for this audience model.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * The status of the audience model.
   *
   * @public
   */
  status: AudienceModelStatus | undefined;

  /**
   * Details about the status of the audience model.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The KMS key ARN used for the audience model.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The tags that are assigned to the audience model.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the audience model.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceModelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the audience model.
 *
 * @public
 */
export interface AudienceModelSummary {
  /**
   * The time at which the audience model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the audience model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * The name of the audience model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training dataset that was used for the audience model.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * The status of the audience model.
   *
   * @public
   */
  status: AudienceModelStatus | undefined;

  /**
   * The description of the audience model.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceModelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The audience models that match the request.
   *
   * @public
   */
  audienceModels: AudienceModelSummary[] | undefined;
}

/**
 * Returns the relevance scores at these audience sizes when used in the GetAudienceGenerationJob for a specified audience generation job and configured audience model.
 *
 * Specifies the list of allowed `audienceSize` values when used in the StartAudienceExportJob for an audience generation job. You can use the `ABSOLUTE` AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the `Percentage` AudienceSize to configure sizes in the range 1-100 percent.
 *
 * @public
 */
export interface AudienceSizeConfig {
  /**
   * Whether the audience output sizes are defined as an absolute number or a percentage.
   *
   * @public
   */
  audienceSizeType: AudienceSizeType | undefined;

  /**
   * An array of the different audience output sizes.
   *
   * @public
   */
  audienceSizeBins: number[] | undefined;
}

/**
 * Configuration information necessary for the configure audience model output.
 *
 * @public
 */
export interface ConfiguredAudienceModelOutputConfig {
  /**
   * Defines the Amazon S3 bucket where the configured audience is stored.
   *
   * @public
   */
  destination: AudienceDestination | undefined;

  /**
   * The ARN of the IAM role that can write the Amazon S3 bucket.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelRequest {
  /**
   * The name of the configured audience model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience model to use for the configured audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * Configure the Amazon S3 location and IAM Role for audiences created using this configured audience model. Each audience will have a unique location. The IAM Role must have `s3:PutObject` permission on the destination Amazon S3 location. If the destination is protected with Amazon S3 KMS-SSE, then the Role must also have the required KMS permissions.
   *
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * The description of the configured audience model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether audience metrics are shared.
   *
   * @public
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * The minimum number of users from the seed audience that must match with users in the training data of the audience model. The default value is 500.
   *
   * @public
   */
  minMatchingSeedSize?: number | undefined;

  /**
   * Configure the list of output sizes of audiences that can be created using this configured audience model. A request to StartAudienceGenerationJob that uses this configured audience model must have an `audienceSize` selected from this list. You can use the `ABSOLUTE` AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the `Percentage` AudienceSize to configure sizes in the range 1-100 percent.
   *
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Configure how the service tags audience generation jobs created using this configured audience model. If you specify `NONE`, the tags from the StartAudienceGenerationJob request determine the tags of the audience generation job. If you specify `FROM_PARENT_RESOURCE`, the audience generation job inherits the tags from the configured audience model, by default. Tags in the StartAudienceGenerationJob will override the default.
   *
   * When the client is in a different account than the configured audience model, the tags from the client are never applied to a resource in the caller's account.
   *
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that you want to delete.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelResponse {
  /**
   * The time at which the configured audience model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured audience model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The name of the configured audience model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience model used for this configured audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * The output configuration of the configured audience model
   *
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * The description of the configured audience model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the configured audience model.
   *
   * @public
   */
  status: ConfiguredAudienceModelStatus | undefined;

  /**
   * Whether audience metrics are shared.
   *
   * @public
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * The minimum number of users from the seed audience that must match with users in the training data of the audience model.
   *
   * @public
   */
  minMatchingSeedSize?: number | undefined;

  /**
   * The list of output sizes of audiences that can be created using this configured audience model. A request to StartAudienceGenerationJob that uses this configured audience model must have an `audienceSize` selected from this list. You can use the `ABSOLUTE` AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the `Percentage` AudienceSize to configure sizes in the range 1-100 percent.
   *
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * The tags that are associated to this configured audience model.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Provides the `childResourceTagOnCreatePolicy` that was used for this configured audience model.
   *
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the configured audience model.
 *
 * @public
 */
export interface ConfiguredAudienceModelSummary {
  /**
   * The time at which the configured audience model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured audience model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The name of the configured audience model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the audience model that was used to create the configured audience model.
   *
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * The output configuration of the configured audience model.
   *
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * The description of the configured audience model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The status of the configured audience model.
   *
   * @public
   */
  status: ConfiguredAudienceModelStatus | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The configured audience models.
   *
   * @public
   */
  configuredAudienceModels: ConfiguredAudienceModelSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that you want to update.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The new output configuration.
   *
   * @public
   */
  outputConfig?: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new audience model that you want to use.
   *
   * @public
   */
  audienceModelArn?: string | undefined;

  /**
   * The new value for whether to share audience metrics.
   *
   * @public
   */
  sharedAudienceMetrics?: SharedAudienceMetrics[] | undefined;

  /**
   * The minimum number of users from the seed audience that must match with users in the training data of the audience model.
   *
   * @public
   */
  minMatchingSeedSize?: number | undefined;

  /**
   * The new audience size configuration.
   *
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * The new description of the configured audience model.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that was updated.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model policy that you want to delete.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that you are interested in.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The configured audience model policy. This is a JSON IAM resource policy.
   *
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
   *
   * @public
   */
  policyHash: string | undefined;
}

/**
 * @public
 */
export interface PutConfiguredAudienceModelPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured audience model that the resource policy will govern.
   *
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * The IAM resource policy.
   *
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
   *
   * @public
   */
  previousPolicyHash?: string | undefined;

  /**
   * Use this to prevent unexpected concurrent modification of the policy.
   *
   * @public
   */
  policyExistenceCondition?: PolicyExistenceCondition | undefined;
}

/**
 * @public
 */
export interface PutConfiguredAudienceModelPolicyResponse {
  /**
   * The IAM resource policy.
   *
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.
   *
   * @public
   */
  policyHash: string | undefined;
}

/**
 * Provides configuration information for the inference container.
 *
 * @public
 */
export interface InferenceContainerConfig {
  /**
   * The registry path of the docker image that contains the inference algorithm. Clean Rooms ML currently only supports the `registry/repository[:tag]` image path format. For more information about using images in Clean Rooms ML, see the [Sagemaker API reference](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html#sagemaker-Type-AlgorithmSpecification-TrainingImage).
   *
   * @public
   */
  imageUri: string | undefined;
}

/**
 * Information about the model metric that is reported for a trained model.
 *
 * @public
 */
export interface MetricDefinition {
  /**
   * The name of the model metric.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The regular expression statement that defines how the model metric is reported.
   *
   * @public
   */
  regex: string | undefined;
}

/**
 * Provides configuration information for the dockerized container where the model algorithm is stored.
 *
 * @public
 */
export interface ContainerConfig {
  /**
   * The registry path of the docker image that contains the algorithm. Clean Rooms ML currently only supports the `registry/repository[:tag]` image path format. For more information about using images in Clean Rooms ML, see the [Sagemaker API reference](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html#sagemaker-Type-AlgorithmSpecification-TrainingImage).
   *
   * @public
   */
  imageUri: string | undefined;

  /**
   * The entrypoint script for a Docker container used to run a training job. This script takes precedence over the default train processing instructions. See How Amazon SageMaker Runs Your Training Image for additional information. For more information, see [How Sagemaker runs your training image](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html).
   *
   * @public
   */
  entrypoint?: string[] | undefined;

  /**
   * The arguments for a container used to run a training job. See How Amazon SageMaker Runs Your Training Image for additional information. For more information, see [How Sagemaker runs your training image](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html).
   *
   * @public
   */
  arguments?: string[] | undefined;

  /**
   * A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. Amazon Web Services Clean Rooms ML publishes each metric to all members' Amazon CloudWatch using IAM role configured in PutMLConfiguration.
   *
   * @public
   */
  metricDefinitions?: MetricDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmRequest {
  /**
   * The name of the configured model algorithm.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that is used to access the repository.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Configuration information for the training container, including entrypoints and arguments.
   *
   * @public
   */
  trainingContainerConfig?: ContainerConfig | undefined;

  /**
   * Configuration information for the inference container that is used when you run an inference job on a configured model algorithm.
   *
   * @public
   */
  inferenceContainerConfig?: InferenceContainerConfig | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the configured ML model algorithm and associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmResponse {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredModelAlgorithmRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that you want to delete.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that you want to return information about.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmResponse {
  /**
   * The time at which the configured model algorithm was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configuration information of the training container for the configured model algorithm.
   *
   * @public
   */
  trainingContainerConfig?: ContainerConfig | undefined;

  /**
   * Configuration information for the inference container.
   *
   * @public
   */
  inferenceContainerConfig?: InferenceContainerConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service role that was used to create the configured model algorithm.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The description of the configured model algorithm.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the configured ML model and associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides summary information about a configured model algorithm.
 *
 * @public
 */
export interface ConfiguredModelAlgorithmSummary {
  /**
   * The time at which the configured model algorithm was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of configured model algorithms.
   *
   * @public
   */
  configuredModelAlgorithms: ConfiguredModelAlgorithmSummary[] | undefined;
}

/**
 * The maximum size of the trained model metrics that can be exported. If the trained model metrics dataset is larger than this value, it will not be exported.
 *
 * @public
 */
export interface TrainedModelExportsMaxSize {
  /**
   * The unit of measurement for the data size.
   *
   * @public
   */
  unit: TrainedModelExportsMaxSizeUnitType | undefined;

  /**
   * The maximum size of the dataset to export.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Information about how the trained model exports are configured.
 *
 * @public
 */
export interface TrainedModelExportsConfigurationPolicy {
  /**
   * The maximum size of the data that can be exported.
   *
   * @public
   */
  maxSize: TrainedModelExportsMaxSize | undefined;

  /**
   * The files that are exported during the trained model export job.
   *
   * @public
   */
  filesToExport: TrainedModelExportFileType[] | undefined;
}

/**
 * The configuration for defining custom patterns to be redacted from logs and error messages. This is for the CUSTOM config under entitiesToRedact. Both CustomEntityConfig and entitiesToRedact need to be present or not present.
 *
 * @public
 */
export interface CustomEntityConfig {
  /**
   * Defines data identifiers for the custom entity configuration. Provide this only if CUSTOM redaction is configured.
   *
   * @public
   */
  customDataIdentifiers: string[] | undefined;
}

/**
 * The configuration for log redaction.
 *
 * @public
 */
export interface LogRedactionConfiguration {
  /**
   * Specifies the entities to be redacted from logs. Entities to redact are "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION", "NUMBERS","CUSTOM". If CUSTOM is supplied or configured, custom patterns (customDataIdentifiers) should be provided, and the patterns will be redacted in logs or error messages.
   *
   * @public
   */
  entitiesToRedact: EntityType[] | undefined;

  /**
   * Specifies the configuration for custom entities in the context of log redaction.
   *
   * @public
   */
  customEntityConfig?: CustomEntityConfig | undefined;
}

/**
 * Provides the information necessary for a user to access the logs.
 *
 * @public
 */
export interface LogsConfigurationPolicy {
  /**
   * A list of account IDs that are allowed to access the logs.
   *
   * @public
   */
  allowedAccountIds: string[] | undefined;

  /**
   * A regular expression pattern that is used to parse the logs and return information that matches the pattern.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * Specifies the type of log this policy applies to. The currently supported policies are ALL or ERROR_SUMMARY.
   *
   * @public
   */
  logType?: LogType | undefined;

  /**
   * Specifies the log redaction configuration for this policy.
   *
   * @public
   */
  logRedactionConfiguration?: LogRedactionConfiguration | undefined;
}

/**
 * Information about the maximum output size for a trained model inference job.
 *
 * @public
 */
export interface TrainedModelInferenceMaxOutputSize {
  /**
   * The measurement unit to use.
   *
   * @public
   */
  unit: TrainedModelInferenceMaxOutputSizeUnitType | undefined;

  /**
   * The maximum output size value.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * Provides configuration information for the trained model inference job.
 *
 * @public
 */
export interface TrainedModelInferenceJobsConfigurationPolicy {
  /**
   * The logs container for the trained model inference job.
   *
   * @public
   */
  containerLogs?: LogsConfigurationPolicy[] | undefined;

  /**
   * The maximum allowed size of the output of the trained model inference job.
   *
   * @public
   */
  maxOutputSize?: TrainedModelInferenceMaxOutputSize | undefined;
}

/**
 * Provides the configuration policy for metrics generation.
 *
 * @public
 */
export interface MetricsConfigurationPolicy {
  /**
   * The noise level for the generated metrics.
   *
   * @public
   */
  noiseLevel: NoiseLevelType | undefined;
}

/**
 * Specifies the maximum size limit for trained model artifacts. This configuration helps control storage costs and ensures that trained models don't exceed specified size constraints. The size limit applies to the total size of all artifacts produced by the training job.
 *
 * @public
 */
export interface TrainedModelArtifactMaxSize {
  /**
   * The unit of measurement for the maximum artifact size. Valid values include common storage units such as bytes, kilobytes, megabytes, gigabytes, and terabytes.
   *
   * @public
   */
  unit: TrainedModelArtifactMaxSizeUnitType | undefined;

  /**
   * The numerical value for the maximum artifact size limit. This value is interpreted according to the specified unit.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * The configuration policy for the trained models.
 *
 * @public
 */
export interface TrainedModelsConfigurationPolicy {
  /**
   * The container for the logs of the trained model.
   *
   * @public
   */
  containerLogs?: LogsConfigurationPolicy[] | undefined;

  /**
   * The container for the metrics of the trained model.
   *
   * @public
   */
  containerMetrics?: MetricsConfigurationPolicy | undefined;

  /**
   * The maximum size limit for trained model artifacts as defined in the configuration policy. This setting helps enforce consistent size limits across trained models in the collaboration.
   *
   * @public
   */
  maxArtifactSize?: TrainedModelArtifactMaxSize | undefined;
}

/**
 * Information about the privacy configuration policies for a configured model algorithm association.
 *
 * @public
 */
export interface PrivacyConfigurationPolicies {
  /**
   * Specifies who will receive the trained models.
   *
   * @public
   */
  trainedModels?: TrainedModelsConfigurationPolicy | undefined;

  /**
   * Specifies who will receive the trained model export.
   *
   * @public
   */
  trainedModelExports?: TrainedModelExportsConfigurationPolicy | undefined;

  /**
   * Specifies who will receive the trained model inference jobs.
   *
   * @public
   */
  trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy | undefined;
}

/**
 * Information about the privacy configuration for a configured model algorithm association.
 *
 * @public
 */
export interface PrivacyConfiguration {
  /**
   * The privacy configuration policies for a configured model algorithm association.
   *
   * @public
   */
  policies: PrivacyConfigurationPolicies | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmAssociationRequest {
  /**
   * The membership ID of the member who is associating this configured model algorithm.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that you want to associate.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the privacy configuration information for the configured model algorithm association. This information includes the maximum data size that can be exported.
   *
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmAssociationResponse {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredModelAlgorithmAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that you want to delete.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The membership ID of the member that is deleting the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that you want to return information about.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The collaboration ID for the collaboration that contains the configured model algorithm association that you want to return information about.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationResponse {
  /**
   * The time at which the configured model algorithm association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the configured model algorithm association.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The account ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * Information about the privacy configuration for a configured model algorithm association.
   *
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that you want to return information about.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmAssociationResponse {
  /**
   * The time at which the configured model algorithm association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the configured model algorithm association.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that was associated to the collaboration.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The privacy configuration information for the configured model algorithm association.
   *
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;

  /**
   * The description of the configured model algorithm association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmAssociationsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm associations you are interested in.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * Provides summary information about the configured model algorithm association.
 *
 * @public
 */
export interface ConfiguredModelAlgorithmAssociationSummary {
  /**
   * The time at which the configured model algorithm association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that is being associated.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The name of the configured model algorithm association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the configured model algorithm association.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmAssociationsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of configured model algorithm associations.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The collaboration ID of the collaboration that contains the configured model algorithm associations that you are interested in.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * Provides summary information about a configured model algorithm in a collaboration.
 *
 * @public
 */
export interface CollaborationConfiguredModelAlgorithmAssociationSummary {
  /**
   * The time at which the configured model algorithm association was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the configured model algorithm association was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The name of the configured model algorithm association.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the configured model algorithm association.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The membership ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the configured model algorithm association.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm that is associated to the collaboration.
   *
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * The account ID of the member that created the configured model algorithm association.
   *
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The configured model algorithm associations that belong to this collaboration.
   *
   * @public
   */
  collaborationConfiguredModelAlgorithmAssociations: CollaborationConfiguredModelAlgorithmAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationMLInputChannelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channels that you want to list.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * Specifies which member accounts are responsible for paying for compute and synthetic data generation costs in a Clean Rooms ML collaboration.
 *
 * @public
 */
export interface PayerConfiguration {
  /**
   * The account ID of the member that is responsible for paying compute costs.
   *
   * @public
   */
  computePayerAccountId?: string | undefined;

  /**
   * The account ID of the member that is responsible for paying synthetic data generation costs.
   *
   * @public
   */
  syntheticDataPayerAccountId?: string | undefined;
}

/**
 * Provides summary information about an ML input channel in a collaboration.
 *
 * @public
 */
export interface CollaborationMLInputChannelSummary {
  /**
   * The time at which the ML input channel was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ML input channel was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The membership ID of the membership that contains the ML input channel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channel.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The name of the ML input channel.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The associated configured model algorithms used to create the ML input channel.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ML input channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The status of the ML input channel.
   *
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * The account ID of the member who created the ML input channel.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The description of the ML input channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The payer configuration for the ML input channel.
   *
   * @public
   */
  payerConfiguration?: PayerConfiguration | undefined;
}

/**
 * @public
 */
export interface ListCollaborationMLInputChannelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of ML input channels that you wanted.
   *
   * @public
   */
  collaborationMLInputChannelsList: CollaborationMLInputChannelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelExportJobsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model export jobs that you are interested in.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that was used to create the export jobs that you are interested in.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model to filter export jobs by. When specified, only export jobs for this specific version of the trained model are returned.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * Provides information about the member who will receive trained model exports.
 *
 * @public
 */
export interface TrainedModelExportReceiverMember {
  /**
   * The account ID of the member who will receive trained model exports.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Information about the output of the trained model export job.
 *
 * @public
 */
export interface TrainedModelExportOutputConfiguration {
  /**
   * The members that will received the exported trained model output.
   *
   * @public
   */
  members: TrainedModelExportReceiverMember[] | undefined;
}

/**
 * Provides summary information about a trained model export job in a collaboration.
 *
 * @public
 */
export interface CollaborationTrainedModelExportJobSummary {
  /**
   * The time at which the trained model export job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model export job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The name of the trained model export job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Information about the output of the trained model export job.
   *
   * @public
   */
  outputConfiguration: TrainedModelExportOutputConfiguration | undefined;

  /**
   * The status of the trained model.
   *
   * @public
   */
  status: TrainedModelExportJobStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The account ID of the member that created the trained model.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that is being exported.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model that was exported in this job.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The membership ID of the member that created the trained model export job.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model export job.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelExportJobsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The exports jobs that exist for the requested trained model in the requested collaboration.
   *
   * @public
   */
  collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelInferenceJobsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model inference jobs that you are interested in.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that was used to create the trained model inference jobs that you are interested in.
   *
   * @public
   */
  trainedModelArn?: string | undefined;

  /**
   * The version identifier of the trained model to filter inference jobs by. When specified, only inference jobs that used this specific version of the trained model are returned.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * Defines who will receive inference results.
 *
 * @public
 */
export interface InferenceReceiverMember {
  /**
   * The account ID of the member that can receive inference results.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Configuration information about how the inference output is stored.
 *
 * @public
 */
export interface InferenceOutputConfiguration {
  /**
   * The MIME type used to specify the output data.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * Defines the members that can receive inference output.
   *
   * @public
   */
  members: InferenceReceiverMember[] | undefined;
}

/**
 * Provides summary information about a trained model inference job in a collaboration.
 *
 * @public
 */
export interface CollaborationTrainedModelInferenceJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the trained model inference job.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * The membership ID of the membership that contains the trained model inference job.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model that was used for inference in this job.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model inference job.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The status of the trained model inference job.
   *
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * Returns output configuration information for the trained model inference job.
   *
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * The name of the trained model inference job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the trained model inference job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * the trained model inference job metrics status.
   *
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * Details about the metrics status for trained model inference job.
   *
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * The trained model inference job logs status.
   *
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * Details about the logs status for the trained model inference job.
   *
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model inference costs.
   *
   * @public
   */
  mlModelInferencePayerAccountId?: string | undefined;

  /**
   * The time at which the trained model inference job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model inference job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The account ID that created the trained model inference job.
   *
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelInferenceJobsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The trained model inference jobs that you are interested in.
   *
   * @public
   */
  collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained models you are interested in.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * Contains information about an incremental training data channel that was used to create a trained model. This structure provides details about the base model and channel configuration used during incremental training.
 *
 * @public
 */
export interface IncrementalTrainingDataChannelOutput {
  /**
   * The name of the incremental training data channel that was used.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * The version identifier of the trained model that was used for incremental training.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * The name of the base trained model that was used for incremental training.
   *
   * @public
   */
  modelName: string | undefined;
}

/**
 * Provides summary information about a trained model in a collaboration.
 *
 * @public
 */
export interface CollaborationTrainedModelSummary {
  /**
   * The time at which the trained model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The name of the trained model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version identifier of this trained model version.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * Information about the incremental training data channels used to create this version of the trained model.
   *
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The membership ID of the member that created the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The status of the trained model.
   *
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that is used for this trained model.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The account ID of the member that created the trained model.
   *
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model training costs.
   *
   * @public
   */
  mlModelTrainingPayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The trained models in the collaboration that you requested.
   *
   * @public
   */
  collaborationTrainedModels: CollaborationTrainedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you are interested in.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are associated with the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMLConfigurationRequest {
  /**
   * The membership ID of the of the member that is deleting the ML modeling configuration.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMLConfigurationRequest {
  /**
   * The membership ID of the member that owns the ML configuration you want to return information about.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * The Amazon S3 location where the exported model artifacts are stored.
 *
 * @public
 */
export interface Destination {
  /**
   * Provides information about an Amazon S3 bucket and path.
   *
   * @public
   */
  s3Destination: S3ConfigMap | undefined;
}

/**
 * Configuration information about how the exported model artifacts are stored.
 *
 * @public
 */
export interface MLOutputConfiguration {
  /**
   * The Amazon S3 location where exported model artifacts are stored.
   *
   * @public
   */
  destination?: Destination | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service access role that is used to store the model artifacts.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface GetMLConfigurationResponse {
  /**
   * The membership ID of the member that owns the ML configuration you requested.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon S3 location where ML model output is stored.
   *
   * @public
   */
  defaultOutputLocation: MLOutputConfiguration | undefined;

  /**
   * The time at which the ML configuration was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ML configuration was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface PutMLConfigurationRequest {
  /**
   * The membership ID of the member that is being configured.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The default Amazon S3 location where ML output is stored for the specified member.
   *
   * @public
   */
  defaultOutputLocation: MLOutputConfiguration | undefined;
}

/**
 * Provides information necessary to perform the protected query.
 *
 * @public
 */
export interface ProtectedQueryInputParameters {
  /**
   * The parameters for the SQL type Protected Query.
   *
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * Provides configuration information for the workers that will perform the protected query.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The format in which the query results should be returned. If not specified, defaults to `CSV`.
   *
   * @public
   */
  resultFormat?: ResultFormat | undefined;
}

/**
 * Provides the data source that is used to define an input channel.
 *
 * @public
 */
export type InputChannelDataSource =
  | InputChannelDataSource.ProtectedQueryInputParametersMember
  | InputChannelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace InputChannelDataSource {
  /**
   * Provides information necessary to perform the protected query.
   *
   * @public
   */
  export interface ProtectedQueryInputParametersMember {
    protectedQueryInputParameters: ProtectedQueryInputParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    protectedQueryInputParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    protectedQueryInputParameters: (value: ProtectedQueryInputParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provides information about the data source that is used to create an ML input channel.
 *
 * @public
 */
export interface InputChannel {
  /**
   * The data source that is used to create the ML input channel.
   *
   * @public
   */
  dataSource: InputChannelDataSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role used to run the query specified in the `dataSource` field of the input channel.
   *
   * Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an `AccessDeniedException` error.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMLInputChannelRequest {
  /**
   * The membership ID of the member that is creating the ML input channel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The associated configured model algorithms that are necessary to create this ML input channel.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * The input data that is used to create this ML input channel.
   *
   * @public
   */
  inputChannel: InputChannel | undefined;

  /**
   * The name of the ML input channel.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The number of days that the data in the ML input channel is retained.
   *
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * The description of the ML input channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that is used to access the input channel.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The payer configuration for the ML input channel. Determines which member account pays for compute and synthetic data costs.
   *
   * @public
   */
  payerConfiguration?: PayerConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMLInputChannelResponse {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLInputChannelDataRequest {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel that you want to delete.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The membership ID of the membership that contains the ML input channel you want to delete.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationMLInputChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel that you want to get.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channel that you want to get.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * The privacy budget information that controls access to Clean Rooms ML input channels.
 *
 * @public
 */
export type PrivacyBudgets =
  | PrivacyBudgets.AccessBudgetsMember
  | PrivacyBudgets.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgets {
  /**
   * A list of access budgets that apply to resources associated with this Clean Rooms ML input channel.
   *
   * @public
   */
  export interface AccessBudgetsMember {
    accessBudgets: AccessBudget[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accessBudgets?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accessBudgets: (value: AccessBudget[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A score that measures the vulnerability of synthetic data to membership inference attacks and provides both the numerical score and the version of the attack methodology used for evaluation.
 *
 * @public
 */
export interface MembershipInferenceAttackScore {
  /**
   * The version of the membership inference attack, which consists of the attack type and its version number, used to generate this privacy score.
   *
   * @public
   */
  attackVersion: MembershipInferenceAttackVersion | undefined;

  /**
   * The numerical score representing the vulnerability to membership inference attacks.
   *
   * @public
   */
  score: number | undefined;
}

/**
 * Privacy evaluation scores that measure the privacy characteristics of the generated synthetic data, including assessments of potential privacy risks such as membership inference attacks.
 *
 * @public
 */
export interface DataPrivacyScores {
  /**
   * Scores that evaluate the vulnerability of the synthetic data to membership inference attacks, which attempt to determine whether a specific individual was a member of the original dataset.
   *
   * @public
   */
  membershipInferenceAttackScores: MembershipInferenceAttackScore[] | undefined;
}

/**
 * Comprehensive evaluation metrics for synthetic data that assess both the utility of the generated data for machine learning tasks and its privacy preservation characteristics.
 *
 * @public
 */
export interface SyntheticDataEvaluationScores {
  /**
   * Privacy-specific evaluation scores that measure how well the synthetic data protects individual privacy, including assessments of potential privacy risks such as membership inference attacks.
   *
   * @public
   */
  dataPrivacyScores: DataPrivacyScores | undefined;
}

/**
 * Properties that define how a specific data column should be handled during synthetic data generation, including its name, type, and role in predictive modeling.
 *
 * @public
 */
export interface SyntheticDataColumnProperties {
  /**
   * The name of the data column as it appears in the dataset.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The data type of the column, which determines how the synthetic data generation algorithm processes and synthesizes values for this column.
   *
   * @public
   */
  columnType: SyntheticDataColumnType | undefined;

  /**
   * Indicates if this column contains predictive values that should be treated as target variables in machine learning models. This affects how the synthetic data generation preserves statistical relationships.
   *
   * @public
   */
  isPredictiveValue: boolean | undefined;
}

/**
 * Contains classification information for data columns, including mappings that specify how columns should be handled during synthetic data generation and privacy analysis.
 *
 * @public
 */
export interface ColumnClassificationDetails {
  /**
   * A mapping that defines the classification of data columns for synthetic data generation and specifies how each column should be handled during the privacy-preserving data synthesis process.
   *
   * @public
   */
  columnMapping: SyntheticDataColumnProperties[] | undefined;
}

/**
 * Parameters that control the generation of synthetic data for custom model training, including privacy settings and column classification details.
 *
 * @public
 */
export interface MLSyntheticDataParameters {
  /**
   * The epsilon value for differential privacy, which controls the privacy-utility tradeoff in synthetic data generation. Lower values provide stronger privacy guarantees but may reduce data utility.
   *
   * @public
   */
  epsilon: number | undefined;

  /**
   * The maximum acceptable score for membership inference attack vulnerability. Synthetic data generation fails if the score for the resulting data exceeds this threshold.
   *
   * @public
   */
  maxMembershipInferenceAttackScore: number | undefined;

  /**
   * Classification details for data columns that specify how each column should be treated during synthetic data generation.
   *
   * @public
   */
  columnClassification?: ColumnClassificationDetails | undefined;
}

/**
 * Configuration settings for synthetic data generation, including the parameters that control data synthesis and the evaluation scores that measure the quality and privacy characteristics of the generated synthetic data.
 *
 * @public
 */
export interface SyntheticDataConfiguration {
  /**
   * The parameters that control how synthetic data is generated, including privacy settings, column classifications, and other configuration options that affect the data synthesis process.
   *
   * @public
   */
  syntheticDataParameters: MLSyntheticDataParameters | undefined;

  /**
   * Evaluation scores that assess the quality and privacy characteristics of the generated synthetic data, providing metrics on data utility and privacy preservation.
   *
   * @public
   */
  syntheticDataEvaluationScores?: SyntheticDataEvaluationScores | undefined;
}

/**
 * @public
 */
export interface GetCollaborationMLInputChannelResponse {
  /**
   * The membership ID of the membership that contains the ML input channel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channel.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ML input channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The name of the ML input channel.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configured model algorithm associations that were used to create the ML input channel.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * The status of the ML input channel.
   *
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The number of days to retain the data for the ML input channel.
   *
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * The number of records in the ML input channel.
   *
   * @public
   */
  numberOfRecords?: number | undefined;

  /**
   * Returns the privacy budgets that control access to this Clean Rooms ML input channel. Use these budgets to monitor and limit resource consumption over specified time periods.
   *
   * @public
   */
  privacyBudgets?: PrivacyBudgets | undefined;

  /**
   * The description of the ML input channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The synthetic data configuration for this ML input channel, including parameters for generating privacy-preserving synthetic data and evaluation scores for measuring the privacy of the generated data.
   *
   * @public
   */
  syntheticDataConfiguration?: SyntheticDataConfiguration | undefined;

  /**
   * The payer configuration for the ML input channel.
   *
   * @public
   */
  payerConfiguration?: PayerConfiguration | undefined;

  /**
   * The time at which the ML input channel was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ML input channel was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The account ID of the member who created the ML input channel.
   *
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface GetMLInputChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel that you want to get.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The membership ID of the membership that contains the ML input channel that you want to get.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMLInputChannelResponse {
  /**
   * The membership ID of the membership that contains the ML input channel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channel.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ML input channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The name of the ML input channel.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configured model algorithm associations that were used to create the ML input channel.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * The status of the ML input channel.
   *
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The number of days to keep the data in the ML input channel.
   *
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * The number of records in the ML input channel.
   *
   * @public
   */
  numberOfRecords?: number | undefined;

  /**
   * Returns the privacy budgets that control access to this Clean Rooms ML input channel. Use these budgets to monitor and limit resource consumption over specified time periods.
   *
   * @public
   */
  privacyBudgets?: PrivacyBudgets | undefined;

  /**
   * The description of the ML input channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The synthetic data configuration for this ML input channel, including parameters for generating privacy-preserving synthetic data and evaluation scores for measuring the privacy of the generated data.
   *
   * @public
   */
  syntheticDataConfiguration?: SyntheticDataConfiguration | undefined;

  /**
   * The payer configuration for the ML input channel.
   *
   * @public
   */
  payerConfiguration?: PayerConfiguration | undefined;

  /**
   * The time at which the ML input channel was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ML input channel was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The input channel that was used to create the ML input channel.
   *
   * @public
   */
  inputChannel: InputChannel | undefined;

  /**
   * The ID of the protected query that was used to create the ML input channel.
   *
   * @public
   */
  protectedQueryIdentifier?: string | undefined;

  /**
   * The number of files in the ML input channel.
   *
   * @public
   */
  numberOfFiles?: number | undefined;

  /**
   * The size, in GB, of the ML input channel.
   *
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that was used to create the ML input channel.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMLInputChannelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of ML input channels to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The membership ID of the membership that contains the ML input channels that you want to list.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * Provides summary information about the ML input channel.
 *
 * @public
 */
export interface MLInputChannelSummary {
  /**
   * The time at which the ML input channel was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the ML input channel was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The membership ID of the membership that contains the ML input channel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the ML input channel.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The name of the ML input channel.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The associated configured model algorithms used to create the ML input channel.
   *
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * The ID of the protected query that was used to create the ML input channel.
   *
   * @public
   */
  protectedQueryIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ML input channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The status of the ML input channel.
   *
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * The description of the ML input channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The payer configuration for the ML input channel.
   *
   * @public
   */
  payerConfiguration?: PayerConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMLInputChannelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of ML input channels that you wanted.
   *
   * @public
   */
  mlInputChannelsList: MLInputChannelSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to assign tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
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
export interface CancelTrainedModelRequest {
  /**
   * The membership ID of the trained model job that you want to cancel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model job that you want to cancel.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model to cancel. This parameter allows you to specify which version of the trained model you want to cancel when multiple versions exist.
   *
   * If `versionIdentifier` is not specified, the base model will be cancelled.
   *
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * Information about the model training data channel. A training data channel is a named data source that the training algorithms can consume.
 *
 * @public
 */
export interface ModelTrainingDataChannel {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel for this model training data channel.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * The name of the training data channel.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * Specifies how the training data stored in Amazon S3 should be distributed to training instances. This parameter controls the data distribution strategy for the training job:
   *
   * - `FullyReplicated` - The entire dataset is replicated on each training instance. This is suitable for smaller datasets and algorithms that require access to the complete dataset.
   * - `ShardedByS3Key` - The dataset is distributed across training instances based on Amazon S3 key names. This is suitable for larger datasets and distributed training scenarios where each instance processes a subset of the data.
   *
   * @public
   */
  s3DataDistributionType?: S3DataDistributionType | undefined;
}

/**
 * Defines an incremental training data channel that references a previously trained model. Incremental training allows you to update an existing trained model with new data, building upon the knowledge from a base model rather than training from scratch. This can significantly reduce training time and computational costs while improving model performance with additional data.
 *
 * @public
 */
export interface IncrementalTrainingDataChannel {
  /**
   * The Amazon Resource Name (ARN) of the base trained model to use for incremental training. This model serves as the starting point for the incremental training process.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the base trained model to use for incremental training. If not specified, the latest version of the trained model is used.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * The name of the incremental training data channel. This name is used to identify the channel during the training process and must be unique within the training job.
   *
   * @public
   */
  channelName: string | undefined;
}

/**
 * Information about the EC2 resources that are used to train the model.
 *
 * @public
 */
export interface ResourceConfig {
  /**
   * The number of resources that are used to train the model.
   *
   * @public
   */
  instanceCount?: number | undefined;

  /**
   * The instance type that is used to train the model.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The volume size of the instance that is used to train the model. Please see [EC2 volume limit](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-volumes.html) for volume size limitations on different instance types.
   *
   * @public
   */
  volumeSizeInGB: number | undefined;
}

/**
 * The criteria used to stop model training.
 *
 * @public
 */
export interface StoppingCondition {
  /**
   * The maximum amount of time, in seconds, that model training can run before it is terminated.
   *
   * @public
   */
  maxRuntimeInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateTrainedModelRequest {
  /**
   * The membership ID of the member that is creating the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The name of the trained model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The associated configured model algorithm used to train this model.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process.
   *
   * @public
   */
  hyperparameters?: Record<string, string> | undefined;

  /**
   * The environment variables to set in the Docker container.
   *
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * Information about the EC2 resources that are used to train this model.
   *
   * @public
   */
  resourceConfig: ResourceConfig | undefined;

  /**
   * The criteria that is used to stop model training.
   *
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * Specifies the incremental training data channels for the trained model.
   *
   * Incremental training allows you to create a new trained model with updates without retraining from scratch. You can specify up to one incremental training data channel that references a previously trained model and its version.
   *
   * Limit: Maximum of 20 channels total (including both `incrementalTrainingDataChannels` and `dataChannels`).
   *
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannel[] | undefined;

  /**
   * Defines the data channels that are used as input for the trained model request.
   *
   * Limit: Maximum of 20 channels total (including both `dataChannels` and `incrementalTrainingDataChannels`).
   *
   * @public
   */
  dataChannels: ModelTrainingDataChannel[] | undefined;

  /**
   * The input mode for accessing the training data. This parameter determines how the training data is made available to the training algorithm. Valid values are:
   *
   * - `File` - The training data is downloaded to the training instance and made available as files.
   * - `FastFile` - The training data is streamed directly from Amazon S3 to the training algorithm, providing faster access for large datasets.
   * - `Pipe` - The training data is streamed to the training algorithm using named pipes, which can improve performance for certain algorithms.
   *
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The account ID of the member that is responsible for paying for model training costs.
   *
   * @public
   */
  mlModelTrainingPayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainedModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the trained model.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The unique version identifier assigned to the newly created trained model. This identifier can be used to reference this specific version of the trained model in subsequent operations such as inference jobs or incremental training.
   *
   * The initial version identifier for the base version of the trained model is "NULL".
   *
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainedModelOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the trained model whose output you want to delete.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The membership ID of the member that is deleting the trained model output.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The version identifier of the trained model to delete. If not specified, the operation will delete the base version of the trained model. When specified, only the particular version will be deleted.
   *
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationTrainedModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the trained model that you want to return information about.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The collaboration ID that contains the trained model that you want to return information about.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The version identifier of the trained model to retrieve. If not specified, the operation returns information about the latest version of the trained model.
   *
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationTrainedModelResponse {
  /**
   * The membership ID of the member that created the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.
   *
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * The name of the trained model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the trained model.
   *
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The EC2 resource configuration that was used to train this model.
   *
   * @public
   */
  resourceConfig?: ResourceConfig | undefined;

  /**
   * The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm.
   *
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * The stopping condition that determined when model training ended.
   *
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * The status of the model metrics.
   *
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * Details about the status information for the model metrics.
   *
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * Status information for the logs.
   *
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * Details about the status information for the logs.
   *
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * Information about the training container image.
   *
   * @public
   */
  trainingContainerImageDigest?: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model training costs.
   *
   * @public
   */
  mlModelTrainingPayerAccountId?: string | undefined;

  /**
   * The time at which the trained model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The account ID of the member that created the trained model.
   *
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelRequest {
  /**
   * The Amazon Resource Name (ARN) of the trained model that you are interested in.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The membership ID of the member that created the trained model that you are interested in.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The version identifier of the trained model to retrieve. If not specified, the operation returns information about the latest version of the trained model.
   *
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelResponse {
  /**
   * The membership ID of the member that created the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.
   *
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * The name of the trained model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the trained model.
   *
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create the trained model.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The EC2 resource configuration that was used to create the trained model.
   *
   * @public
   */
  resourceConfig?: ResourceConfig | undefined;

  /**
   * The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm.
   *
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * The stopping condition that was used to terminate model training.
   *
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * The status of the model metrics.
   *
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * Details about the metrics status for the trained model.
   *
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * The logs status for the trained model.
   *
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * Details about the logs status for the trained model.
   *
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * Information about the training image container.
   *
   * @public
   */
  trainingContainerImageDigest?: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model training costs.
   *
   * @public
   */
  mlModelTrainingPayerAccountId?: string | undefined;

  /**
   * The time at which the trained model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The hyperparameters that were used to create the trained model.
   *
   * @public
   */
  hyperparameters?: Record<string, string> | undefined;

  /**
   * The EC2 environment that was used to create the trained model.
   *
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The data channels that were used for the trained model.
   *
   * @public
   */
  dataChannels: ModelTrainingDataChannel[] | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The membership ID of the member that created the trained models you are interested in.
   *
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * Summary information about the trained model.
 *
 * @public
 */
export interface TrainedModelSummary {
  /**
   * The time at which the trained model was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of this trained model version.
   *
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * Information about the incremental training data channels used to create this version of the trained model.
   *
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * The name of the trained model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the trained model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The membership ID of the member that created the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The status of the trained model.
   *
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model training costs.
   *
   * @public
   */
  mlModelTrainingPayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of trained models.
   *
   * @public
   */
  trainedModels: TrainedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelVersionsRequest {
  /**
   * The pagination token from a previous `ListTrainedModelVersions` request. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of trained model versions to return in a single page. The default value is 10, and the maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The membership identifier for the collaboration that contains the trained model.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model for which to list versions.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * Filter the results to only include trained model versions with the specified status. Valid values include `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `ACTIVE`, `CREATE_FAILED`, and others.
   *
   * @public
   */
  status?: TrainedModelStatus | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelVersionsResponse {
  /**
   * The pagination token to use in a subsequent `ListTrainedModelVersions` request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of trained model versions that match the specified criteria. Each entry contains summary information about a trained model version, including its version identifier, status, and creation details.
   *
   * @public
   */
  trainedModels: TrainedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelExportJobRequest {
  /**
   * The name of the trained model export job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that you want to export.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model to export. This specifies which version of the trained model should be exported to the specified destination.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The membership ID of the member that is receiving the exported trained model artifacts.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The output configuration information for the trained model export job.
   *
   * @public
   */
  outputConfiguration: TrainedModelExportOutputConfiguration | undefined;

  /**
   * The description of the trained model export job.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CancelTrainedModelInferenceJobRequest {
  /**
   * The membership ID of the trained model inference job that you want to cancel.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model inference job that you want to cancel.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelInferenceJobRequest {
  /**
   * Provides the membership ID of the membership that contains the trained model inference job that you are interested in.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * Provides the Amazon Resource Name (ARN) of the trained model inference job that you are interested in.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

/**
 * Provides execution parameters for the inference container.
 *
 * @public
 */
export interface InferenceContainerExecutionParameters {
  /**
   * The maximum size of the inference container payload, specified in MB.
   *
   * @public
   */
  maxPayloadInMB?: number | undefined;
}

/**
 * Defines information about the data source used for model inference.
 *
 * @public
 */
export interface ModelInferenceDataSource {
  /**
   * The Amazon Resource Name (ARN) of the ML input channel for this model inference data source.
   *
   * @public
   */
  mlInputChannelArn: string | undefined;
}

/**
 * Defines the resources used to perform model inference.
 *
 * @public
 */
export interface InferenceResourceConfig {
  /**
   * The type of instance that is used to perform model inference.
   *
   * @public
   */
  instanceType: InferenceInstanceType | undefined;

  /**
   * The number of instances to use.
   *
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelInferenceJobResponse {
  /**
   * The time at which the trained model inference job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model inference job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model inference job.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that was used for the trained model inference job.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * The name of the trained model inference job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the trained model inference job.
   *
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) for the trained model that was used for the trained model inference job.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model used for this inference job. This identifies the specific version of the trained model that was used to generate the inference results.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The resource configuration information for the trained model inference job.
   *
   * @public
   */
  resourceConfig: InferenceResourceConfig | undefined;

  /**
   * The output configuration information for the trained model inference job.
   *
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * The membership ID of the membership that contains the trained model inference job.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The data source that was used for the trained model inference job.
   *
   * @public
   */
  dataSource: ModelInferenceDataSource | undefined;

  /**
   * The execution parameters for the model inference job container.
   *
   * @public
   */
  containerExecutionParameters?: InferenceContainerExecutionParameters | undefined;

  /**
   * Details about the status of a resource.
   *
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * The description of the trained model inference job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the training container image.
   *
   * @public
   */
  inferenceContainerImageDigest?: string | undefined;

  /**
   * The environment variables to set in the Docker container.
   *
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the ML inference job and associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The metrics status for the trained model inference job.
   *
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * Details about the metrics status for the trained model inference job.
   *
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * The logs status for the trained model inference job.
   *
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * Details about the logs status for the trained model inference job.
   *
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The account ID of the member that is responsible for paying for model inference costs.
   *
   * @public
   */
  mlModelInferencePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelInferenceJobsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The membership
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a trained model that was used to create the trained model inference jobs that you are interested in.
   *
   * @public
   */
  trainedModelArn?: string | undefined;

  /**
   * The version identifier of the trained model to filter inference jobs by. When specified, only inference jobs that used this specific version of the trained model are returned.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * Provides information about the trained model inference job.
 *
 * @public
 */
export interface TrainedModelInferenceJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the trained model inference job.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * The membership ID of the membership that contains the trained model inference job.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model that was used for inference in this job.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The collaboration ID of the collaboration that contains the trained model inference job.
   *
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * The status of the trained model inference job.
   *
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * The output configuration information of the trained model job.
   *
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * The name of the trained model inference job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the trained model inference job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The metric status of the trained model inference job.
   *
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * Details about the metrics status for the trained model inference job.
   *
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * The log status of the trained model inference job.
   *
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * Details about the log status for the trained model inference job.
   *
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * The account ID of the member that is responsible for paying for model inference costs.
   *
   * @public
   */
  mlModelInferencePayerAccountId?: string | undefined;

  /**
   * The time at which the trained model inference job was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the trained model inference job was updated.
   *
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelInferenceJobsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Returns the requested trained model inference jobs.
   *
   * @public
   */
  trainedModelInferenceJobs: TrainedModelInferenceJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelInferenceJobRequest {
  /**
   * The membership ID of the membership that contains the trained model inference job.
   *
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * The name of the trained model inference job.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model that is used for this trained model inference job.
   *
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * The version identifier of the trained model to use for inference. This specifies which version of the trained model should be used to generate predictions on the input data.
   *
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the configured model algorithm association that is used for this trained model inference job.
   *
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * Defines the resource configuration for the trained model inference job.
   *
   * @public
   */
  resourceConfig: InferenceResourceConfig | undefined;

  /**
   * Defines the output configuration information for the trained model inference job.
   *
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * Defines the data source that is used for the trained model inference job.
   *
   * @public
   */
  dataSource: ModelInferenceDataSource | undefined;

  /**
   * The description of the trained model inference job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The execution parameters for the container.
   *
   * @public
   */
  containerExecutionParameters?: InferenceContainerExecutionParameters | undefined;

  /**
   * The environment variables to set in the Docker container.
   *
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the ML inference job and associated data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The account ID of the member that is responsible for paying for model inference costs.
   *
   * @public
   */
  mlModelInferencePayerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelInferenceJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the trained model inference job.
   *
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

/**
 * Defines the Glue data source that contains the training data.
 *
 * @public
 */
export interface GlueDataSource {
  /**
   * The Glue table that contains the training data.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The Glue database that contains the training data.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The Glue catalog that contains the training data.
   *
   * @public
   */
  catalogId?: string | undefined;
}

/**
 * Defines information about the Glue data source that contains the training data.
 *
 * @public
 */
export interface DataSource {
  /**
   * A GlueDataSource object that defines the catalog ID, database name, and table name for the training data.
   *
   * @public
   */
  glueDataSource: GlueDataSource | undefined;
}

/**
 * Metadata for a column.
 *
 * @public
 */
export interface ColumnSchema {
  /**
   * The name of a column.
   *
   * @public
   */
  columnName: string | undefined;

  /**
   * The data type of column.
   *
   * @public
   */
  columnTypes: ColumnType[] | undefined;
}

/**
 * Defines the Glue data source and schema mapping information.
 *
 * @public
 */
export interface DatasetInputConfig {
  /**
   * The schema information for the training data.
   *
   * @public
   */
  schema: ColumnSchema[] | undefined;

  /**
   * A DataSource object that specifies the Glue data source for the training data.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * Defines where the training dataset is located, what type of data it contains, and how to access the data.
 *
 * @public
 */
export interface Dataset {
  /**
   * What type of information is found in the dataset.
   *
   * @public
   */
  type: DatasetType | undefined;

  /**
   * A DatasetInputConfig object that defines the data source and schema mapping.
   *
   * @public
   */
  inputConfig: DatasetInputConfig | undefined;
}

/**
 * @public
 */
export interface CreateTrainingDatasetRequest {
  /**
   * The name of the training dataset. This name must be unique in your account and region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the `dataSource` field of each dataset.
   *
   * Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an `AccessDeniedException` error.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema. You must provide a role that has read access to these tables.
   *
   * @public
   */
  trainingData: Dataset[] | undefined;

  /**
   * The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the training dataset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainingDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the training dataset resource.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainingDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the training dataset that you want to delete.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the training dataset that you are interested in.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingDatasetResponse {
  /**
   * The time at which the training dataset was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the training dataset was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training dataset.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * The name of the training dataset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Metadata about the requested training data.
   *
   * @public
   */
  trainingData: Dataset[] | undefined;

  /**
   * The status of the training dataset.
   *
   * @public
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * The IAM role used to read the training data.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The tags that are assigned to this training dataset.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The description of the training dataset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingDatasetsRequest {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum size of the results that is returned per call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides information about the training dataset.
 *
 * @public
 */
export interface TrainingDatasetSummary {
  /**
   * The time at which the training dataset was created.
   *
   * @public
   */
  createTime: Date | undefined;

  /**
   * The most recent time at which the training dataset was updated.
   *
   * @public
   */
  updateTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training dataset.
   *
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * The name of the training dataset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the training dataset.
   *
   * @public
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * The description of the training dataset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingDatasetsResponse {
  /**
   * The token value used to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The training datasets that match the request.
   *
   * @public
   */
  trainingDatasets: TrainingDatasetSummary[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key values of tags that you want to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
