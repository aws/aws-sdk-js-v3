// smithy-typescript generated code
import type {
  BatchInferenceJobMode,
  Domain,
  ImportMode,
  IngestionMode,
  ObjectiveSensitivity,
  RankingInfluenceType,
  RecipeProvider,
  TrainingMode,
  TrainingType,
} from "./enums";

/**
 * Describes an algorithm image.
 *
 * @public
 */
export interface AlgorithmImage {
  /**
   * The name of the algorithm image.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The URI of the Docker container for the algorithm image.
   *
   * @public
   */
  dockerURI: string | undefined;
}

/**
 * Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
 *
 * @public
 */
export interface DefaultCategoricalHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A list of the categories for the hyperparameter.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * Whether the hyperparameter is tunable.
   *
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
 *
 * @public
 */
export interface DefaultContinuousHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The minimum allowable value for the hyperparameter.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum allowable value for the hyperparameter.
   *
   * @public
   */
  maxValue?: number | undefined;

  /**
   * Whether the hyperparameter is tunable.
   *
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
 *
 * @public
 */
export interface DefaultIntegerHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The minimum allowable value for the hyperparameter.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum allowable value for the hyperparameter.
   *
   * @public
   */
  maxValue?: number | undefined;

  /**
   * Indicates whether the hyperparameter is tunable.
   *
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
 *
 * @public
 */
export interface DefaultHyperParameterRanges {
  /**
   * The integer-valued hyperparameters and their default ranges.
   *
   * @public
   */
  integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[] | undefined;

  /**
   * The continuous hyperparameters and their default ranges.
   *
   * @public
   */
  continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[] | undefined;

  /**
   * The categorical hyperparameters and their default ranges.
   *
   * @public
   */
  categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[] | undefined;
}

/**
 * Describes a custom algorithm.
 *
 * @public
 */
export interface Algorithm {
  /**
   * The name of the algorithm.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm.
   *
   * @public
   */
  algorithmArn?: string | undefined;

  /**
   * The URI of the Docker container for the algorithm image.
   *
   * @public
   */
  algorithmImage?: AlgorithmImage | undefined;

  /**
   * Specifies the default hyperparameters.
   *
   * @public
   */
  defaultHyperParameters?: Record<string, string> | undefined;

  /**
   * Specifies the default hyperparameters, their ranges, and whether they are tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
   *
   * @public
   */
  defaultHyperParameterRanges?: DefaultHyperParameterRanges | undefined;

  /**
   * Specifies the default maximum number of training jobs and parallel training jobs.
   *
   * @public
   */
  defaultResourceConfig?: Record<string, string> | undefined;

  /**
   * The training input mode.
   *
   * @public
   */
  trainingInputMode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The date and time (in Unix time) that the algorithm was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the algorithm was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * The configuration details of a batch inference job.
 *
 * @public
 */
export interface BatchInferenceJobConfig {
  /**
   * A string to string map specifying the exploration configuration hyperparameters, including `explorationWeight` and `explorationItemAgeCutOff`, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. See [User-Personalization](https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html).
   *
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * A map of ranking influence values for POPULARITY and FRESHNESS. For each key, specify a numerical value between 0.0 and 1.0 that determines how much influence that ranking factor has on the final recommendations. A value closer to 1.0 gives more weight to the factor, while a value closer to 0.0 reduces its influence.
   *
   * @public
   */
  rankingInfluence?: Partial<Record<RankingInfluenceType, number>> | undefined;
}

/**
 * The configuration details of an Amazon S3 input or output bucket.
 *
 * @public
 */
export interface S3DataConfig {
  /**
   * The file path of the Amazon S3 bucket.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key that Amazon Personalize uses to encrypt or decrypt the input and output files.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * The input configuration of a batch inference job.
 *
 * @public
 */
export interface BatchInferenceJobInput {
  /**
   * The URI of the Amazon S3 location that contains your input data. The Amazon S3 bucket must be in the same region as the API endpoint you are calling.
   *
   * @public
   */
  s3DataSource: S3DataConfig | undefined;
}

/**
 * The output configuration parameters of a batch inference job.
 *
 * @public
 */
export interface BatchInferenceJobOutput {
  /**
   * Information on the Amazon S3 bucket in which the batch inference job's output is stored.
   *
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information see [Tagging Amazon Personalize resources](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html).
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  tagKey: string | undefined;

  /**
   * The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category (key).
   *
   * @public
   */
  tagValue: string | undefined;
}

/**
 * A string to string map of the configuration details for theme generation.
 *
 * @public
 */
export interface FieldsForThemeGeneration {
  /**
   * The name of the Items dataset column that stores the name of each item in the dataset.
   *
   * @public
   */
  itemName: string | undefined;
}

/**
 * The configuration details for generating themes with a batch inference job.
 *
 * @public
 */
export interface ThemeGenerationConfig {
  /**
   * Fields used to generate descriptive themes for a batch inference job.
   *
   * @public
   */
  fieldsForThemeGeneration: FieldsForThemeGeneration | undefined;
}

/**
 * @public
 */
export interface CreateBatchInferenceJobRequest {
  /**
   * The name of the batch inference job to create.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version that will be used to generate the batch inference recommendations.
   *
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * The ARN of the filter to apply to the batch inference job. For more information on using filters, see [Filtering batch recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html).
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The number of recommendations to retrieve.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The Amazon S3 path that leads to the input file to base your recommendations on. The input material must be in JSON format.
   *
   * @public
   */
  jobInput: BatchInferenceJobInput | undefined;

  /**
   * The path to the Amazon S3 bucket where the job's output will be stored.
   *
   * @public
   */
  jobOutput: BatchInferenceJobOutput | undefined;

  /**
   * The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The configuration details of a batch inference job.
   *
   * @public
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the batch inference job.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The mode of the batch inference job. To generate descriptive themes for groups of similar items, set the job mode to `THEME_GENERATION`. If you don't want to generate themes, use the default `BATCH_INFERENCE`.
   *
   * When you get batch recommendations with themes, you will incur additional costs. For more information, see [Amazon Personalize pricing](https://aws.amazon.com/personalize/pricing/).
   *
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;

  /**
   * For theme generation jobs, specify the name of the column in your Items dataset that contains each item's name.
   *
   * @public
   */
  themeGenerationConfig?: ThemeGenerationConfig | undefined;
}

/**
 * @public
 */
export interface CreateBatchInferenceJobResponse {
  /**
   * The ARN of the batch inference job.
   *
   * @public
   */
  batchInferenceJobArn?: string | undefined;
}

/**
 * The input configuration of a batch segment job.
 *
 * @public
 */
export interface BatchSegmentJobInput {
  /**
   * The configuration details of an Amazon S3 input or output bucket.
   *
   * @public
   */
  s3DataSource: S3DataConfig | undefined;
}

/**
 * The output configuration parameters of a batch segment job.
 *
 * @public
 */
export interface BatchSegmentJobOutput {
  /**
   * The configuration details of an Amazon S3 input or output bucket.
   *
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * @public
 */
export interface CreateBatchSegmentJobRequest {
  /**
   * The name of the batch segment job to create.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version you want the batch segment job to use to generate batch segments.
   *
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * The ARN of the filter to apply to the batch segment job. For more information on using filters, see [Filtering batch recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html).
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The number of predicted users generated by the batch segment job for each line of input data. The maximum number of users per segment is 5 million.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The Amazon S3 path for the input data used to generate the batch segment job.
   *
   * @public
   */
  jobInput: BatchSegmentJobInput | undefined;

  /**
   * The Amazon S3 path for the bucket where the job's output will be stored.
   *
   * @public
   */
  jobOutput: BatchSegmentJobOutput | undefined;

  /**
   * The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the batch segment job.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBatchSegmentJobResponse {
  /**
   * The ARN of the batch segment job.
   *
   * @public
   */
  batchSegmentJobArn?: string | undefined;
}

/**
 * The configuration details of a campaign.
 *
 * @public
 */
export interface CampaignConfig {
  /**
   * Specifies the exploration configuration hyperparameters, including `explorationWeight` and `explorationItemAgeCutOff`, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. Provide `itemExplorationConfig` data only if your solution uses the [User-Personalization](https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html) recipe.
   *
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * Whether metadata with recommendations is enabled for the campaign. If enabled, you can specify the columns from your Items dataset in your request for recommendations. Amazon Personalize returns this data for each item in the recommendation response. For information about enabling metadata for a campaign, see [Enabling metadata in recommendations for a campaign](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata).
   *
   * If you enable metadata in recommendations, you will incur additional costs. For more information, see [Amazon Personalize pricing](https://aws.amazon.com/personalize/pricing/).
   *
   * @public
   */
  enableMetadataWithRecommendations?: boolean | undefined;

  /**
   * Whether the campaign automatically updates to use the latest solution version (trained model) of a solution. If you specify `True`, you must specify the ARN of your *solution* for the `SolutionVersionArn` parameter. It must be in `SolutionArn/$LATEST` format. The default is `False` and you must manually update the campaign to deploy the latest solution version.
   *
   * For more information about automatic campaign updates, see [Enabling automatic campaign updates](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update).
   *
   * @public
   */
  syncWithLatestSolutionVersion?: boolean | undefined;

  /**
   * A map of ranking influence values for POPULARITY and FRESHNESS. For each key, specify a numerical value between 0.0 and 1.0 that determines how much influence that ranking factor has on the final recommendations. A value closer to 1.0 gives more weight to the factor, while a value closer to 0.0 reduces its influence.
   *
   * @public
   */
  rankingInfluence?: Partial<Record<RankingInfluenceType, number>> | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * A name for the new campaign. The campaign name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trained model to deploy with the campaign. To specify the latest solution version of your solution, specify the ARN of your *solution* in `SolutionArn/$LATEST` format. You must use this format if you set `syncWithLatestSolutionVersion` to `True` in the [CampaignConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_CampaignConfig.html).
   *
   * To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.
   *
   * For more information about automatic campaign updates, see [Enabling automatic campaign updates](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update).
   *
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support. A high `minProvisionedTPS` will increase your bill. We recommend starting with 1 for `minProvisionedTPS` (the default). Track your usage using Amazon CloudWatch metrics, and increase the `minProvisionedTPS` as necessary.
   *
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * The configuration details of a campaign.
   *
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the campaign.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  campaignArn?: string | undefined;
}

/**
 * Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.
 *
 * @public
 */
export interface DataSource {
  /**
   * For dataset import jobs, the path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. For data deletion jobs, the path to the Amazon S3 bucket that stores the list of records to delete.
   *
   * For example:
   *
   * `s3://bucket-name/folder-name/fileName.csv`
   *
   * If your CSV files are in a folder in your Amazon S3 bucket and you want your import job or data deletion job to consider multiple files, you can specify the path to the folder. With a data deletion job, Amazon Personalize uses all files in the folder and any sub folder. Use the following syntax with a `/` after the folder name:
   *
   * `s3://bucket-name/folder-name/`
   *
   * @public
   */
  dataLocation?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataDeletionJobRequest {
  /**
   * The name for the data deletion job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to delete records from.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * The Amazon S3 bucket that contains the list of userIds of the users to delete.
   *
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the data deletion job.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDataDeletionJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the data deletion job.
   *
   * @public
   */
  dataDeletionJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The name for the dataset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the schema to associate with the dataset. The schema defines the dataset fields.
   *
   * @public
   */
  schemaArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group to add the dataset to.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * The type of dataset.
   *
   * One of the following (case insensitive) values:
   *
   * - Interactions
   * - Items
   * - Users
   * - Actions
   * - Action_Interactions
   *
   * @public
   */
  datasetType: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the dataset.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The ARN of the dataset.
   *
   * @public
   */
  datasetArn?: string | undefined;
}

/**
 * The output configuration parameters of a dataset export job.
 *
 * @public
 */
export interface DatasetExportJobOutput {
  /**
   * The configuration details of an Amazon S3 input or output bucket.
   *
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * @public
 */
export interface CreateDatasetExportJobRequest {
  /**
   * The name for the dataset export job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that contains the data to export.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The data to export, based on how you imported the data. You can choose to export only `BULK` data that you imported using a dataset import job, only `PUT` data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or `ALL` for both types. The default value is `PUT`.
   *
   * @public
   */
  ingestionMode?: IngestionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The path to the Amazon S3 bucket where the job's output is stored.
   *
   * @public
   */
  jobOutput: DatasetExportJobOutput | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the dataset export job.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset export job.
   *
   * @public
   */
  datasetExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupRequest {
  /**
   * The name for the new dataset group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to encrypt the datasets.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The domain of the dataset group. Specify a domain to create a Domain dataset group. The domain you specify determines the default schemas for datasets and the use cases available for recommenders. If you don't specify a domain, you create a Custom dataset group with solution versions that you deploy with a campaign.
   *
   * @public
   */
  domain?: Domain | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the dataset group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupResponse {
  /**
   * The Amazon Resource Name (ARN) of the new dataset group.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The domain for the new Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobRequest {
  /**
   * The name for the dataset import job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The ARN of the dataset that receives the imported data.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The Amazon S3 bucket that contains the training data to import.
   *
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the dataset import job.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specify how to add the new records to an existing dataset. The default import mode is `FULL`. If you haven't imported bulk records into the dataset previously, you can only specify `FULL`.
   *
   * - Specify `FULL` to overwrite all existing bulk data in your dataset. Data you imported individually is not replaced.
   * - Specify `INCREMENTAL` to append the new records to the existing data in your dataset. Amazon Personalize replaces any record with the same ID with the new one.
   *
   * @public
   */
  importMode?: ImportMode | undefined;

  /**
   * If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3
   *
   * @public
   */
  publishAttributionMetricsToS3?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobResponse {
  /**
   * The ARN of the dataset import job.
   *
   * @public
   */
  datasetImportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventTrackerRequest {
  /**
   * The name for the event tracker.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that receives the event data.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the event tracker.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventTrackerResponse {
  /**
   * The ARN of the event tracker.
   *
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * The ID of the event tracker. Include this ID in requests to the [PutEvents](https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html) API.
   *
   * @public
   */
  trackingId?: string | undefined;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * The name of the filter to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dataset group that the filter will belong to.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules. For information about filter expression structure and syntax, see [Filter expressions](https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html).
   *
   * @public
   */
  filterExpression: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the filter.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * The ARN of the new filter.
   *
   * @public
   */
  filterArn?: string | undefined;
}

/**
 * Contains information on a metric that a metric attribution reports on. For more information, see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
 *
 * @public
 */
export interface MetricAttribute {
  /**
   * The metric's event type.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * The metric's name. The name helps you identify the metric in Amazon CloudWatch or Amazon S3.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The attribute's expression. Available functions are `SUM()` or `SAMPLECOUNT()`. For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * The output configuration details for a metric attribution.
 *
 * @public
 */
export interface MetricAttributionOutput {
  /**
   * The configuration details of an Amazon S3 input or output bucket.
   *
   * @public
   */
  s3DataDestination?: S3DataConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket and add metrics to Amazon CloudWatch. For more information, see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMetricAttributionRequest {
  /**
   * A name for the metric attribution.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function. Available functions are `SUM()` or `SAMPLECOUNT()`. For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).
   *
   * @public
   */
  metrics: MetricAttribute[] | undefined;

  /**
   * The output configuration details for the metric attribution.
   *
   * @public
   */
  metricsOutputConfig: MetricAttributionOutput | undefined;
}

/**
 * @public
 */
export interface CreateMetricAttributionResponse {
  /**
   * The Amazon Resource Name (ARN) for the new metric attribution.
   *
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * The training data configuration to use when creating a domain recommender or custom solution version (trained model).
 *
 * @public
 */
export interface TrainingDataConfig {
  /**
   * Specifies the columns to exclude from training. Each key is a dataset type, and each value is a list of columns. Exclude columns to control what data Amazon Personalize uses to generate recommendations.
   *
   * For example, you might have a column that you want to use only to filter recommendations. You can exclude this column from training and Amazon Personalize considers it only when filtering.
   *
   * @public
   */
  excludedDatasetColumns?: Record<string, string[]> | undefined;

  /**
   * A map that specifies which columns to include from each dataset during training. The map can contain up to 3 entries, where each key is a dataset name (maximum length of 256 characters, must contain only letters and underscores) and each value is an array of up to 50 column names. Column names can be up to 150 characters long, must start with a letter or underscore, and can contain only letters, numbers, and underscores.
   *
   * @public
   */
  includedDatasetColumns?: Record<string, string[]> | undefined;
}

/**
 * The configuration details of the recommender.
 *
 * @public
 */
export interface RecommenderConfig {
  /**
   * Specifies the exploration configuration hyperparameters, including `explorationWeight` and `explorationItemAgeCutOff`, you want to use to configure the amount of item exploration Amazon Personalize uses when recommending items. Provide `itemExplorationConfig` data only if your recommenders generate personalized recommendations for a user (not popular items or similar items).
   *
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * Specifies the requested minimum provisioned recommendation requests per second that Amazon Personalize will support. A high `minRecommendationRequestsPerSecond` will increase your bill. We recommend starting with 1 for `minRecommendationRequestsPerSecond` (the default). Track your usage using Amazon CloudWatch metrics, and increase the `minRecommendationRequestsPerSecond` as necessary.
   *
   * @public
   */
  minRecommendationRequestsPerSecond?: number | undefined;

  /**
   * Specifies the training data configuration to use when creating a domain recommender.
   *
   * @public
   */
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * Whether metadata with recommendations is enabled for the recommender. If enabled, you can specify the columns from your Items dataset in your request for recommendations. Amazon Personalize returns this data for each item in the recommendation response. For information about enabling metadata for a recommender, see [Enabling metadata in recommendations for a recommender](https://docs.aws.amazon.com/personalize/latest/dg/creating-recommenders.html#create-recommender-return-metadata).
   *
   * If you enable metadata in recommendations, you will incur additional costs. For more information, see [Amazon Personalize pricing](https://aws.amazon.com/personalize/pricing/).
   *
   * @public
   */
  enableMetadataWithRecommendations?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderRequest {
  /**
   * The name of the recommender.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see [Choosing recommender use cases](https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html).
   *
   * @public
   */
  recipeArn: string | undefined;

  /**
   * The configuration details of the recommender.
   *
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the recommender.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommender.
   *
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * The name for the schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A schema in Avro JSON format.
   *
   * @public
   */
  schema: string | undefined;

  /**
   * The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify the domain you chose when you created the Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * The Amazon Resource Name (ARN) of the created schema.
   *
   * @public
   */
  schemaArn?: string | undefined;
}

/**
 * When the solution performs AutoML (`performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
 *
 * @public
 */
export interface AutoMLConfig {
  /**
   * The metric to optimize.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The list of candidate recipes.
   *
   * @public
   */
  recipeList?: string[] | undefined;
}

/**
 * The automatic training configuration to use when `performAutoTraining` is true.
 *
 * @public
 */
export interface AutoTrainingConfig {
  /**
   * Specifies how often to automatically train new solution versions. Specify a rate expression in rate(*value* *unit*) format. For value, specify a number between 1 and 30. For unit, specify `day` or `days`. For example, to automatically create a new solution version every 5 days, specify `rate(5 days)`. The default is every 7 days.
   *
   * For more information about auto training, see [Creating and configuring a solution](https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html).
   *
   * @public
   */
  schedulingExpression?: string | undefined;
}

/**
 * Describes the parameters of events, which are used in solution creation.
 *
 * @public
 */
export interface EventParameters {
  /**
   * The name of the event type to be considered for solution creation.
   *
   * @public
   */
  eventType?: string | undefined;

  /**
   * The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.
   *
   * @public
   */
  eventValueThreshold?: number | undefined;

  /**
   * The weight of the event type. A higher weight means higher importance of the event type for the created solution.
   *
   * @public
   */
  weight?: number | undefined;
}

/**
 * Describes the configuration of events, which are used in solution creation.
 *
 * @public
 */
export interface EventsConfig {
  /**
   * A list of event parameters, which includes event types and their event value thresholds and weights.
   *
   * @public
   */
  eventParametersList?: EventParameters[] | undefined;
}

/**
 * Provides the name and range of a categorical hyperparameter.
 *
 * @public
 */
export interface CategoricalHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A list of the categories for the hyperparameter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Provides the name and range of a continuous hyperparameter.
 *
 * @public
 */
export interface ContinuousHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The minimum allowable value for the hyperparameter.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum allowable value for the hyperparameter.
   *
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * Provides the name and range of an integer-valued hyperparameter.
 *
 * @public
 */
export interface IntegerHyperParameterRange {
  /**
   * The name of the hyperparameter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The minimum allowable value for the hyperparameter.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum allowable value for the hyperparameter.
   *
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
 *
 * @public
 */
export interface HyperParameterRanges {
  /**
   * The integer-valued hyperparameters and their ranges.
   *
   * @public
   */
  integerHyperParameterRanges?: IntegerHyperParameterRange[] | undefined;

  /**
   * The continuous hyperparameters and their ranges.
   *
   * @public
   */
  continuousHyperParameterRanges?: ContinuousHyperParameterRange[] | undefined;

  /**
   * The categorical hyperparameters and their ranges.
   *
   * @public
   */
  categoricalHyperParameterRanges?: CategoricalHyperParameterRange[] | undefined;
}

/**
 * The metric to optimize during hyperparameter optimization (HPO).
 *
 * > **Note:** Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
 *
 * @public
 */
export interface HPOObjective {
  /**
   * The type of the metric. Valid values are `Maximize` and `Minimize`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * A regular expression for finding the metric in the training job logs.
   *
   * @public
   */
  metricRegex?: string | undefined;
}

/**
 * Describes the resource configuration for hyperparameter optimization (HPO).
 *
 * @public
 */
export interface HPOResourceConfig {
  /**
   * The maximum number of training jobs when you create a solution version. The maximum value for `maxNumberOfTrainingJobs` is `40`.
   *
   * @public
   */
  maxNumberOfTrainingJobs?: string | undefined;

  /**
   * The maximum number of parallel training jobs when you create a solution version. The maximum value for `maxParallelTrainingJobs` is `10`.
   *
   * @public
   */
  maxParallelTrainingJobs?: string | undefined;
}

/**
 * Describes the properties for hyperparameter optimization (HPO).
 *
 * @public
 */
export interface HPOConfig {
  /**
   * The metric to optimize during HPO.
   *
   * > **Note:** Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
   *
   * @public
   */
  hpoObjective?: HPOObjective | undefined;

  /**
   * Describes the resource configuration for HPO.
   *
   * @public
   */
  hpoResourceConfig?: HPOResourceConfig | undefined;

  /**
   * The hyperparameters and their allowable ranges.
   *
   * @public
   */
  algorithmHyperParameterRanges?: HyperParameterRanges | undefined;
}

/**
 * Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see [Optimizing a solution](https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html).
 *
 * @public
 */
export interface OptimizationObjective {
  /**
   * The numerical metadata column in an Items dataset related to the optimization objective. For example, VIDEO_LENGTH (to maximize streaming minutes), or PRICE (to maximize revenue).
   *
   * @public
   */
  itemAttribute?: string | undefined;

  /**
   * Specifies how Amazon Personalize balances the importance of your optimization objective versus relevance.
   *
   * @public
   */
  objectiveSensitivity?: ObjectiveSensitivity | undefined;
}

/**
 * Describes the configuration properties for the solution.
 *
 * @public
 */
export interface SolutionConfig {
  /**
   * Only events with a value greater than or equal to this threshold are used for training a model.
   *
   * @public
   */
  eventValueThreshold?: string | undefined;

  /**
   * Describes the properties for hyperparameter optimization (HPO).
   *
   * @public
   */
  hpoConfig?: HPOConfig | undefined;

  /**
   * Lists the algorithm hyperparameters and their values.
   *
   * @public
   */
  algorithmHyperParameters?: Record<string, string> | undefined;

  /**
   * Lists the feature transformation parameters.
   *
   * @public
   */
  featureTransformationParameters?: Record<string, string> | undefined;

  /**
   * The [AutoMLConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html) object containing a list of recipes to search when AutoML is performed.
   *
   * @public
   */
  autoMLConfig?: AutoMLConfig | undefined;

  /**
   * Describes the configuration of an event, which includes a list of event parameters. You can specify up to 10 event parameters. Events are used in solution creation.
   *
   * @public
   */
  eventsConfig?: EventsConfig | undefined;

  /**
   * Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see [Optimizing a solution](https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html).
   *
   * @public
   */
  optimizationObjective?: OptimizationObjective | undefined;

  /**
   * Specifies the training data configuration to use when creating a custom solution version (trained model).
   *
   * @public
   */
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * Specifies the automatic training configuration to use.
   *
   * @public
   */
  autoTrainingConfig?: AutoTrainingConfig | undefined;
}

/**
 * @public
 */
export interface CreateSolutionRequest {
  /**
   * The name for the solution.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is `false`.
   *
   * When performing AutoML, this parameter is always `true` and you should not set it to `false`.
   *
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * > **Important:** We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see [Choosing a recipe](https://docs.aws.amazon.com/personalize/latest/dg/working-with-predefined-recipes.html).
   *
   * Whether to perform automated machine learning (AutoML). The default is `false`. For this case, you must specify `recipeArn`.
   *
   * When set to `true`, Amazon Personalize analyzes your training data and selects the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit `recipeArn`. Amazon Personalize determines the optimal recipe by running tests with different values for the hyperparameters. AutoML lengthens the training process as compared to selecting a specific recipe.
   *
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * Whether the solution uses automatic training to create new solution versions (trained models). The default is `True` and the solution automatically creates new solution versions every 7 days. You can change the training frequency by specifying a `schedulingExpression` in the `AutoTrainingConfig` as part of solution configuration. For more information about automatic training, see [Configuring automatic training](https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html).
   *
   * Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training.
   *
   * After training starts, you can get the solution version's Amazon Resource Name (ARN) with the [ListSolutionVersions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html) API operation. To get its status, use the [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html).
   *
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * Whether to perform incremental training updates on your model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.
   *
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe to use for model training. This is required when `performAutoML` is false. For information about different Amazon Personalize recipes and their ARNs, see [Choosing a recipe](https://docs.aws.amazon.com/personalize/latest/dg/working-with-predefined-recipes.html).
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that provides the training data.
   *
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * When your have multiple event types (using an `EVENT_TYPE` schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model.
   *
   * If you do not provide an `eventType`, Amazon Personalize will use all interactions for training with equal weight regardless of type.
   *
   * @public
   */
  eventType?: string | undefined;

  /**
   * The configuration properties for the solution. When `performAutoML` is set to true, Amazon Personalize only evaluates the `autoMLConfig` section of the solution configuration.
   *
   * > **Note:** Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
   *
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the solution.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSolutionResponse {
  /**
   * The ARN of the solution.
   *
   * @public
   */
  solutionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSolutionVersionRequest {
  /**
   * The name of the solution version.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution containing the training configuration information.
   *
   * @public
   */
  solutionArn: string | undefined;

  /**
   * The scope of training to be performed when creating the solution version. The default is `FULL`. This creates a completely new model based on the entirety of the training data from the datasets in your dataset group.
   *
   * If you use [User-Personalization](https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html), you can specify a training mode of `UPDATE`. This updates the model to consider new items for recommendations. It is not a full retraining. You should still complete a full retraining weekly. If you specify `UPDATE`, Amazon Personalize will stop automatic updates for the solution version. To resume updates, create a new solution with training mode set to `FULL` and deploy it in a campaign. For more information about automatic updates, see [Automatic updates](https://docs.aws.amazon.com/personalize/latest/dg/use-case-recipe-features.html#maintaining-with-automatic-updates).
   *
   * The `UPDATE` option can only be used when you already have an active solution version created from the input solution using the `FULL` option and the input solution was trained with the [User-Personalization](https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html) recipe or the legacy [HRNN-Coldstart](https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html) recipe.
   *
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html) to apply to the solution version.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSolutionVersionResponse {
  /**
   * The ARN of the new solution version.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign to delete.
   *
   * @public
   */
  campaignArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to delete.
   *
   * @public
   */
  datasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetGroupRequest {
  /**
   * The ARN of the dataset group to delete.
   *
   * @public
   */
  datasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTrackerRequest {
  /**
   * The Amazon Resource Name (ARN) of the event tracker to delete.
   *
   * @public
   */
  eventTrackerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * The ARN of the filter to delete.
   *
   * @public
   */
  filterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricAttributionRequest {
  /**
   * The metric attribution's Amazon Resource Name (ARN).
   *
   * @public
   */
  metricAttributionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommender to delete.
   *
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) of the schema to delete.
   *
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolutionRequest {
  /**
   * The ARN of the solution to delete.
   *
   * @public
   */
  solutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmRequest {
  /**
   * The Amazon Resource Name (ARN) of the algorithm to describe.
   *
   * @public
   */
  algorithmArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmResponse {
  /**
   * A listing of the properties of the algorithm.
   *
   * @public
   */
  algorithm?: Algorithm | undefined;
}

/**
 * @public
 */
export interface DescribeBatchInferenceJobRequest {
  /**
   * The ARN of the batch inference job to describe.
   *
   * @public
   */
  batchInferenceJobArn: string | undefined;
}

/**
 * Contains information on a batch inference job.
 *
 * @public
 */
export interface BatchInferenceJob {
  /**
   * The name of the batch inference job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  batchInferenceJobArn?: string | undefined;

  /**
   * The ARN of the filter used on the batch inference job.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * If the batch inference job failed, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version from which the batch inference job was created.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The number of recommendations generated by the batch inference job. This number includes the error messages generated for failed input records.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The Amazon S3 path that leads to the input data used to generate the batch inference job.
   *
   * @public
   */
  jobInput?: BatchInferenceJobInput | undefined;

  /**
   * The Amazon S3 bucket that contains the output data generated by the batch inference job.
   *
   * @public
   */
  jobOutput?: BatchInferenceJobOutput | undefined;

  /**
   * A string to string map of the configuration details of a batch inference job.
   *
   * @public
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig | undefined;

  /**
   * The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch inference job.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The job's mode.
   *
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;

  /**
   * The job's theme generation settings.
   *
   * @public
   */
  themeGenerationConfig?: ThemeGenerationConfig | undefined;

  /**
   * The status of the batch inference job. The status is one of the following values:
   *
   * - PENDING
   * - IN PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The time at which the batch inference job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the batch inference job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBatchInferenceJobResponse {
  /**
   * Information on the specified batch inference job.
   *
   * @public
   */
  batchInferenceJob?: BatchInferenceJob | undefined;
}

/**
 * @public
 */
export interface DescribeBatchSegmentJobRequest {
  /**
   * The ARN of the batch segment job to describe.
   *
   * @public
   */
  batchSegmentJobArn: string | undefined;
}

/**
 * Contains information on a batch segment job.
 *
 * @public
 */
export interface BatchSegmentJob {
  /**
   * The name of the batch segment job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the batch segment job.
   *
   * @public
   */
  batchSegmentJobArn?: string | undefined;

  /**
   * The ARN of the filter used on the batch segment job.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * If the batch segment job failed, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The number of predicted users generated by the batch segment job for each line of input data. The maximum number of users per segment is 5 million.
   *
   * @public
   */
  numResults?: number | undefined;

  /**
   * The Amazon S3 path that leads to the input data used to generate the batch segment job.
   *
   * @public
   */
  jobInput?: BatchSegmentJobInput | undefined;

  /**
   * The Amazon S3 bucket that contains the output data generated by the batch segment job.
   *
   * @public
   */
  jobOutput?: BatchSegmentJobOutput | undefined;

  /**
   * The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch segment job.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the batch segment job. The status is one of the following values:
   *
   * - PENDING
   * - IN PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The time at which the batch segment job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the batch segment job last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBatchSegmentJobResponse {
  /**
   * Information on the specified batch segment job.
   *
   * @public
   */
  batchSegmentJob?: BatchSegmentJob | undefined;
}

/**
 * @public
 */
export interface DescribeCampaignRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  campaignArn: string | undefined;
}

/**
 * Provides a summary of the properties of a campaign update. For a complete listing, call the [DescribeCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html) API.
 *
 * @public
 */
export interface CampaignUpdateSummary {
  /**
   * The Amazon Resource Name (ARN) of the deployed solution version.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support.
   *
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * The configuration details of a campaign.
   *
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * The status of the campaign update.
   *
   * A campaign update can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If a campaign update fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date and time (in Unix time) that the campaign update was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the campaign update was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * An object that describes the deployment of a solution version. For more information on campaigns, see [CreateCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html).
 *
 * @public
 */
export interface Campaign {
  /**
   * The name of the campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version the campaign uses.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * Specifies the requested minimum provisioned transactions (recommendations) per second. A high `minProvisionedTPS` will increase your bill. We recommend starting with 1 for `minProvisionedTPS` (the default). Track your usage using Amazon CloudWatch metrics, and increase the `minProvisionedTPS` as necessary.
   *
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * The configuration details of a campaign.
   *
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * The status of the campaign.
   *
   * A campaign can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If a campaign fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date and time (in Unix format) that the campaign was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix format) that the campaign was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Provides a summary of the properties of a campaign update. For a complete listing, call the [DescribeCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html) API.
   *
   * > **Note:** The `latestCampaignUpdate` field is only returned when the campaign has had at least one `UpdateCampaign` call.
   *
   * @public
   */
  latestCampaignUpdate?: CampaignUpdateSummary | undefined;
}

/**
 * @public
 */
export interface DescribeCampaignResponse {
  /**
   * > **Note:** The `latestCampaignUpdate` field is only returned when the campaign has had at least one `UpdateCampaign` call.
   *
   * The properties of the campaign.
   *
   * > **Note:** The `latestCampaignUpdate` field is only returned when the campaign has had at least one `UpdateCampaign` call.
   *
   * @public
   */
  campaign?: Campaign | undefined;
}

/**
 * @public
 */
export interface DescribeDataDeletionJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the data deletion job.
   *
   * @public
   */
  dataDeletionJobArn: string | undefined;
}

/**
 * Describes a job that deletes all references to specific users from an Amazon Personalize dataset group in batches. For information about creating a data deletion job, see [Deleting users](https://docs.aws.amazon.com/personalize/latest/dg/delete-records.html).
 *
 * @public
 */
export interface DataDeletionJob {
  /**
   * The name of the data deletion job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data deletion job.
   *
   * @public
   */
  dataDeletionJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group the job deletes records from.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the data deletion job.
   *
   * A data deletion job can have one of the following statuses:
   *
   * - PENDING > IN_PROGRESS > COMPLETED -or- FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The number of records deleted by a COMPLETED job.
   *
   * @public
   */
  numDeleted?: number | undefined;

  /**
   * The creation date and time (in Unix time) of the data deletion job.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) the data deletion job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a data deletion job fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataDeletionJobResponse {
  /**
   * Information about the data deletion job, including the status.
   *
   * The status is one of the following values:
   *
   * - PENDING
   * - IN_PROGRESS
   * - COMPLETED
   * - FAILED
   *
   * @public
   */
  dataDeletionJob?: DataDeletionJob | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to describe.
   *
   * @public
   */
  datasetArn: string | undefined;
}

/**
 * Describes an update to a dataset.
 *
 * @public
 */
export interface DatasetUpdateSummary {
  /**
   * The Amazon Resource Name (ARN) of the schema that replaced the previous schema of the dataset.
   *
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * The status of the dataset update.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If updating a dataset fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the dataset update.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The last update date and time (in Unix time) of the dataset.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * Provides metadata for a dataset.
 *
 * @public
 */
export interface Dataset {
  /**
   * The name of the dataset.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that you want metadata for.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * One of the following values:
   *
   * - Interactions
   * - Items
   * - Users
   * - Actions
   * - Action_Interactions
   *
   * @public
   */
  datasetType?: string | undefined;

  /**
   * The ARN of the associated schema.
   *
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * The status of the dataset.
   *
   * A dataset can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the dataset.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A time stamp that shows when the dataset was updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Describes the latest update to the dataset.
   *
   * @public
   */
  latestDatasetUpdate?: DatasetUpdateSummary | undefined;

  /**
   * The ID of the event tracker for an Action interactions dataset. You specify the tracker's ID in the `PutActionInteractions` API operation. Amazon Personalize uses it to direct new data to the Action interactions dataset in your dataset group.
   *
   * @public
   */
  trackingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * A listing of the dataset's properties.
   *
   * @public
   */
  dataset?: Dataset | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset export job to describe.
   *
   * @public
   */
  datasetExportJobArn: string | undefined;
}

/**
 * Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see [CreateDatasetExportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html).
 *
 * A dataset export job can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 *
 * @public
 */
export interface DatasetExportJob {
  /**
   * The name of the export job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset export job.
   *
   * @public
   */
  datasetExportJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset to export.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The data to export, based on how you imported the data. You can choose to export `BULK` data that you imported using a dataset import job, `PUT` data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or `ALL` for both types. The default value is `PUT`.
   *
   * @public
   */
  ingestionMode?: IngestionMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the dataset export job.
   *
   * A dataset export job can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The path to the Amazon S3 bucket where the job's output is stored. For example:
   *
   * `s3://bucket-name/folder-name/`
   *
   * @public
   */
  jobOutput?: DatasetExportJobOutput | undefined;

  /**
   * The creation date and time (in Unix time) of the dataset export job.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) the status of the dataset export job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a dataset export job fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetExportJobResponse {
  /**
   * Information about the dataset export job, including the status.
   *
   * The status is one of the following values:
   *
   * - CREATE PENDING
   * - CREATE IN_PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  datasetExportJob?: DatasetExportJob | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group to describe.
   *
   * @public
   */
  datasetGroupArn: string | undefined;
}

/**
 * A dataset group is a collection of related datasets (Item interactions, Users, Items, Actions, Action interactions). You create a dataset group by calling [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html). You then create a dataset and add it to a dataset group by calling [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html). The dataset group is used to create and train a solution by calling [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html). A dataset group can contain only one of each type of dataset.
 *
 * You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.
 *
 * @public
 */
export interface DatasetGroup {
  /**
   * The name of the dataset group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The current status of the dataset group.
   *
   * A dataset group can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the datasets.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the dataset group.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The last update date and time (in Unix time) of the dataset group.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If creating a dataset group fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The domain of a Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupResponse {
  /**
   * A listing of the dataset group's properties.
   *
   * @public
   */
  datasetGroup?: DatasetGroup | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job to describe.
   *
   * @public
   */
  datasetImportJobArn: string | undefined;
}

/**
 * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html).
 *
 * A dataset import job can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 *
 * @public
 */
export interface DatasetImportJob {
  /**
   * The name of the import job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The ARN of the dataset import job.
   *
   * @public
   */
  datasetImportJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that receives the imported data.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The Amazon S3 bucket that contains the training data to import.
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the dataset import job.
   *
   * A dataset import job can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the dataset import job.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) the dataset was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a dataset import job fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The import mode used by the dataset import job to import new records.
   *
   * @public
   */
  importMode?: ImportMode | undefined;

  /**
   * Whether the job publishes metrics to Amazon S3 for a metric attribution.
   *
   * @public
   */
  publishAttributionMetricsToS3?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * Information about the dataset import job, including the status.
   *
   * The status is one of the following values:
   *
   * - CREATE PENDING
   * - CREATE IN_PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  datasetImportJob?: DatasetImportJob | undefined;
}

/**
 * @public
 */
export interface DescribeEventTrackerRequest {
  /**
   * The Amazon Resource Name (ARN) of the event tracker to describe.
   *
   * @public
   */
  eventTrackerArn: string | undefined;
}

/**
 * Provides information about an event tracker.
 *
 * @public
 */
export interface EventTracker {
  /**
   * The name of the event tracker.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the event tracker.
   *
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * The Amazon Web Services account that owns the event tracker.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The ID of the event tracker. Include this ID in requests to the [PutEvents](https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html) API.
   *
   * @public
   */
  trackingId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that receives the event data.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The status of the event tracker.
   *
   * An event tracker can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix format) that the event tracker was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the event tracker was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventTrackerResponse {
  /**
   * An object that describes the event tracker.
   *
   * @public
   */
  eventTracker?: EventTracker | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureTransformationRequest {
  /**
   * The Amazon Resource Name (ARN) of the feature transformation to describe.
   *
   * @public
   */
  featureTransformationArn: string | undefined;
}

/**
 * Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
 *
 * @public
 */
export interface FeatureTransformation {
  /**
   * The name of the feature transformation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the FeatureTransformation object.
   *
   * @public
   */
  featureTransformationArn?: string | undefined;

  /**
   * Provides the default parameters for feature transformation.
   *
   * @public
   */
  defaultParameters?: Record<string, string> | undefined;

  /**
   * The creation date and time (in Unix time) of the feature transformation.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The last update date and time (in Unix time) of the feature transformation.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The status of the feature transformation.
   *
   * A feature transformation can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureTransformationResponse {
  /**
   * A listing of the FeatureTransformation properties.
   *
   * @public
   */
  featureTransformation?: FeatureTransformation | undefined;
}

/**
 * @public
 */
export interface DescribeFilterRequest {
  /**
   * The ARN of the filter to describe.
   *
   * @public
   */
  filterArn: string | undefined;
}

/**
 * Contains information on a recommendation filter, including its ARN, status, and filter expression.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the filter.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The time at which the filter was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the filter was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The ARN of the dataset group to which the filter belongs.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * If the filter failed, the reason for its failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Specifies the type of item interactions to filter out of recommendation results. The filter expression must follow specific format rules. For information about filter expression structure and syntax, see [Filter expressions](https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html).
   *
   * @public
   */
  filterExpression?: string | undefined;

  /**
   * The status of the filter.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFilterResponse {
  /**
   * The filter's details.
   *
   * @public
   */
  filter?: Filter | undefined;
}

/**
 * @public
 */
export interface DescribeMetricAttributionRequest {
  /**
   * The metric attribution's Amazon Resource Name (ARN).
   *
   * @public
   */
  metricAttributionArn: string | undefined;
}

/**
 * Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
 *
 * @public
 */
export interface MetricAttribution {
  /**
   * The metric attribution's name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The metric attribution's Amazon Resource Name (ARN).
   *
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * The metric attribution's dataset group Amazon Resource Name (ARN).
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The metric attribution's output configuration.
   *
   * @public
   */
  metricsOutputConfig?: MetricAttributionOutput | undefined;

  /**
   * The metric attribution's status.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The metric attribution's creation date time.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The metric attribution's last updated date time.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The metric attribution's failure reason.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricAttributionResponse {
  /**
   * The details of the metric attribution.
   *
   * @public
   */
  metricAttribution?: MetricAttribution | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeRequest {
  /**
   * The Amazon Resource Name (ARN) of the recipe to describe.
   *
   * @public
   */
  recipeArn: string | undefined;
}

/**
 * Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html) operation.
 *
 * @public
 */
export interface Recipe {
  /**
   * The name of the recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train the model.
   *
   * @public
   */
  algorithmArn?: string | undefined;

  /**
   * The ARN of the FeatureTransformation object.
   *
   * @public
   */
  featureTransformationArn?: string | undefined;

  /**
   * The status of the recipe.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The description of the recipe.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time (in Unix format) that the recipe was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * One of the following values:
   *
   * - PERSONALIZED_RANKING
   * - RELATED_ITEMS
   * - USER_PERSONALIZATION
   *
   * @public
   */
  recipeType?: string | undefined;

  /**
   * The date and time (in Unix format) that the recipe was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeResponse {
  /**
   * An object that describes the recipe.
   *
   * @public
   */
  recipe?: Recipe | undefined;
}

/**
 * @public
 */
export interface DescribeRecommenderRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommender to describe.
   *
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * Provides a summary of the properties of a recommender update. For a complete listing, call the [DescribeRecommender](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html) API.
 *
 * @public
 */
export interface RecommenderUpdateSummary {
  /**
   * The configuration details of the recommender update.
   *
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * The date and time (in Unix format) that the recommender update was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the recommender update was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The status of the recommender update. A recommender update can be in one of the following states:
   *
   * CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If a recommender update fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a [GetRecommendations](https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html) request.
 *
 * @public
 */
export interface Recommender {
  /**
   * The Amazon Resource Name (ARN) of the recommender.
   *
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The name of the recommender.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The configuration details of the recommender.
   *
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * The date and time (in Unix format) that the recommender was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix format) that the recommender was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The status of the recommender.
   *
   * A recommender can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If a recommender fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Provides a summary of the latest updates to the recommender.
   *
   * @public
   */
  latestRecommenderUpdate?: RecommenderUpdateSummary | undefined;

  /**
   * Provides evaluation metrics that help you determine the performance of a recommender. For more information, see [Evaluating a recommender](https://docs.aws.amazon.com/personalize/latest/dg/evaluating-recommenders.html).
   *
   * @public
   */
  modelMetrics?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface DescribeRecommenderResponse {
  /**
   * The properties of the recommender.
   *
   * @public
   */
  recommender?: Recommender | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) of the schema to retrieve.
   *
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * Describes the schema for a dataset. For more information on schemas, see [CreateSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html).
 *
 * @public
 */
export interface DatasetSchema {
  /**
   * The name of the schema.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * The schema.
   *
   * @public
   */
  schema?: string | undefined;

  /**
   * The date and time (in Unix time) that the schema was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the schema was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The domain of a schema that you created for a dataset in a Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaResponse {
  /**
   * The requested schema.
   *
   * @public
   */
  schema?: DatasetSchema | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution to describe.
   *
   * @public
   */
  solutionArn: string | undefined;
}

/**
 * When the solution performs AutoML (`performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)), specifies the recipe that best optimized the specified metric.
 *
 * @public
 */
export interface AutoMLResult {
  /**
   * The Amazon Resource Name (ARN) of the best recipe.
   *
   * @public
   */
  bestRecipeArn?: string | undefined;
}

/**
 * The configuration details of the solution update.
 *
 * @public
 */
export interface SolutionUpdateConfig {
  /**
   * The automatic training configuration to use when `performAutoTraining` is true.
   *
   * @public
   */
  autoTrainingConfig?: AutoTrainingConfig | undefined;

  /**
   * Describes the configuration of an event, which includes a list of event parameters. You can specify up to 10 event parameters. Events are used in solution creation.
   *
   * @public
   */
  eventsConfig?: EventsConfig | undefined;
}

/**
 * Provides a summary of the properties of a solution update. For a complete listing, call the [DescribeSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html) API.
 *
 * @public
 */
export interface SolutionUpdateSummary {
  /**
   * The configuration details of the solution.
   *
   * @public
   */
  solutionUpdateConfig?: SolutionUpdateConfig | undefined;

  /**
   * The status of the solution update. A solution update can be in one of the following states:
   *
   * CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Whether the solution automatically creates solution versions.
   *
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * A Boolean value that indicates whether incremental training updates are performed on the model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.
   *
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * The date and time (in Unix format) that the solution update was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the solution update was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a solution update fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Provides a summary of the properties of a solution version. For a complete listing, call the [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html) API.
 *
 * @public
 */
export interface SolutionVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the solution version.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The status of the solution version.
   *
   * A solution version can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The scope of training to be performed when creating the solution version. A `FULL` training considers all of the data in your dataset group. An `UPDATE` processes only the data that has changed since the latest training. Only solution versions created with the User-Personalization recipe can use `UPDATE`.
   *
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * Whether the solution version was created automatically or manually.
   *
   * @public
   */
  trainingType?: TrainingType | undefined;

  /**
   * The date and time (in Unix time) that this version of a solution was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the solution version was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a solution version fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * > **Important:** By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. To avoid unnecessary costs, when you are finished you can [update the solution](https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html) to turn off automatic training. For information about training costs, see [Amazon Personalize pricing](https://aws.amazon.com/personalize/pricing/).
 *
 * An object that provides information about a solution. A solution includes the custom recipe, customized parameters, and trained models (Solution Versions) that Amazon Personalize uses to generate recommendations.
 *
 * After you create a solution, you can’t change its configuration. If you need to make changes, you can [clone the solution](https://docs.aws.amazon.com/personalize/latest/dg/cloning-solution.html) with the Amazon Personalize console or create a new one.
 *
 * @public
 */
export interface Solution {
  /**
   * The name of the solution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the solution.
   *
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is `false`.
   *
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * > **Important:** We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see [Determining your use case.](https://docs.aws.amazon.com/personalize/latest/dg/determining-use-case.html)
   *
   * When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration (`recipeArn` must not be specified). When false (the default), Amazon Personalize uses `recipeArn` for training.
   *
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * Specifies whether the solution automatically creates solution versions. The default is `True` and the solution automatically creates new solution versions every 7 days.
   *
   * For more information about auto training, see [Creating and configuring a solution](https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html).
   *
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * A Boolean value that indicates whether incremental training updates are performed on the model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe
   *
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * The ARN of the recipe used to create the solution. This is required when `performAutoML` is false.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that provides the training data.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The event type (for example, 'click' or 'like') that is used for training the model. If no `eventType` is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.
   *
   * @public
   */
  eventType?: string | undefined;

  /**
   * Describes the configuration properties for the solution.
   *
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * When `performAutoML` is true, specifies the best recipe found.
   *
   * @public
   */
  autoMLResult?: AutoMLResult | undefined;

  /**
   * The status of the solution.
   *
   * A solution can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the solution.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the solution was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Describes the latest version of the solution, including the status and the ARN.
   *
   * @public
   */
  latestSolutionVersion?: SolutionVersionSummary | undefined;

  /**
   * Provides a summary of the latest updates to the solution.
   *
   * @public
   */
  latestSolutionUpdate?: SolutionUpdateSummary | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionResponse {
  /**
   * An object that describes the solution.
   *
   * @public
   */
  solution?: Solution | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution version.
   *
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
 *
 * @public
 */
export interface TunedHPOParams {
  /**
   * A list of the hyperparameter values of the best performing model.
   *
   * @public
   */
  algorithmHyperParameters?: Record<string, string> | undefined;
}

/**
 * An object that provides information about a specific version of a [Solution](https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html) in a Custom dataset group.
 *
 * @public
 */
export interface SolutionVersion {
  /**
   * The name of the solution version.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the solution version.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The ARN of the solution.
   *
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is `false`.
   *
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * When true, Amazon Personalize searches for the most optimal recipe according to the solution configuration. When false (the default), Amazon Personalize uses `recipeArn`.
   *
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * Whether the solution version should perform an incremental update. When set to true, the training will process only the data that has changed since the latest training, similar to when trainingMode is set to UPDATE. This can only be used with solution versions that use the User-Personalization recipe.
   *
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * The ARN of the recipe used in the solution.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The event type (for example, 'click' or 'like') that is used for training the model.
   *
   * @public
   */
  eventType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group providing the training data.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * Describes the configuration properties for the solution.
   *
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * The time used to train the model. You are billed for the time it takes to train a model. This field is visible only after Amazon Personalize successfully trains a model.
   *
   * @public
   */
  trainingHours?: number | undefined;

  /**
   * The scope of training to be performed when creating the solution version. A `FULL` training considers all of the data in your dataset group. An `UPDATE` processes only the data that has changed since the latest training. Only solution versions created with the User-Personalization recipe can use `UPDATE`.
   *
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * If hyperparameter optimization was performed, contains the hyperparameter values of the best performing model.
   *
   * @public
   */
  tunedHPOParams?: TunedHPOParams | undefined;

  /**
   * The status of the solution version.
   *
   * A solution version can be in one of the following states:
   *
   * - CREATE PENDING
   * - CREATE IN_PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   * - CREATE STOPPING
   * - CREATE STOPPED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * If training a solution version fails, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date and time (in Unix time) that this version of the solution was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the solution was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Whether the solution version was created automatically or manually.
   *
   * @public
   */
  trainingType?: TrainingType | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionVersionResponse {
  /**
   * The solution version.
   *
   * @public
   */
  solutionVersion?: SolutionVersion | undefined;
}

/**
 * @public
 */
export interface GetSolutionMetricsRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution version for which to get metrics.
   *
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * @public
 */
export interface GetSolutionMetricsResponse {
  /**
   * The same solution version ARN as specified in the request.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The metrics for the solution version. For more information, see [Evaluating a solution version with metrics](https://docs.aws.amazon.com/personalize/latest/dg/working-with-training-metrics.html).
   *
   * @public
   */
  metrics?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface ListBatchInferenceJobsRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs were created.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of batch inference job results to return in each page. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A truncated version of the [BatchInferenceJob](https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html). The [ListBatchInferenceJobs](https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html) operation returns a list of batch inference job summaries.
 *
 * @public
 */
export interface BatchInferenceJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the batch inference job.
   *
   * @public
   */
  batchInferenceJobArn?: string | undefined;

  /**
   * The name of the batch inference job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The status of the batch inference job. The status is one of the following values:
   *
   * - PENDING
   * - IN PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The time at which the batch inference job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the batch inference job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If the batch inference job failed, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The ARN of the solution version used by the batch inference job.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The job's mode.
   *
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;
}

/**
 * @public
 */
export interface ListBatchInferenceJobsResponse {
  /**
   * A list containing information on each job that is returned.
   *
   * @public
   */
  batchInferenceJobs?: BatchInferenceJobSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchSegmentJobsRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution version that the batch segment jobs used to generate batch segments.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of batch segment job results to return in each page. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A truncated version of the [BatchSegmentJob](https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html) datatype. [ListBatchSegmentJobs](https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html) operation returns a list of batch segment job summaries.
 *
 * @public
 */
export interface BatchSegmentJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the batch segment job.
   *
   * @public
   */
  batchSegmentJobArn?: string | undefined;

  /**
   * The name of the batch segment job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The status of the batch segment job. The status is one of the following values:
   *
   * - PENDING
   * - IN PROGRESS
   * - ACTIVE
   * - CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The time at which the batch segment job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the batch segment job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If the batch segment job failed, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.
   *
   * @public
   */
  solutionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchSegmentJobsResponse {
  /**
   * A list containing information on each job that is returned.
   *
   * @public
   */
  batchSegmentJobs?: BatchSegmentJobSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution to list the campaigns for. When a solution is not specified, all the campaigns associated with the account are listed.
   *
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * A token returned from the previous call to [ListCampaigns](https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html) for getting the next set of campaigns (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of campaigns to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a campaign. For a complete listing, call the [DescribeCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html) API.
 *
 * @public
 */
export interface CampaignSummary {
  /**
   * The name of the campaign.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * The status of the campaign.
   *
   * A campaign can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the campaign was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the campaign was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a campaign fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * A list of the campaigns.
   *
   * @public
   */
  campaigns?: CampaignSummary[] | undefined;

  /**
   * A token for getting the next set of campaigns (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataDeletionJobsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group to list data deletion jobs for.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListDataDeletionJobs` for getting the next set of jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of data deletion jobs to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a data deletion job. For a complete listing, call the [DescribeDataDeletionJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html) API operation.
 *
 * @public
 */
export interface DataDeletionJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the data deletion job.
   *
   * @public
   */
  dataDeletionJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group the job deleted records from.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The name of the data deletion job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The status of the data deletion job.
   *
   * A data deletion job can have one of the following statuses:
   *
   * - PENDING > IN_PROGRESS > COMPLETED -or- FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The creation date and time (in Unix time) of the data deletion job.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) the data deletion job was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a data deletion job fails, provides the reason why.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListDataDeletionJobsResponse {
  /**
   * The list of data deletion jobs.
   *
   * @public
   */
  dataDeletionJobs?: DataDeletionJobSummary[] | undefined;

  /**
   * A token for getting the next set of data deletion jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetExportJobsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to list the dataset export jobs for.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListDatasetExportJobs` for getting the next set of dataset export jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of dataset export jobs to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a dataset export job. For a complete listing, call the [DescribeDatasetExportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html) API.
 *
 * @public
 */
export interface DatasetExportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset export job.
   *
   * @public
   */
  datasetExportJobArn?: string | undefined;

  /**
   * The name of the dataset export job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The status of the dataset export job.
   *
   * A dataset export job can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the dataset export job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the dataset export job status was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a dataset export job fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetExportJobsResponse {
  /**
   * The list of dataset export jobs.
   *
   * @public
   */
  datasetExportJobs?: DatasetExportJobSummary[] | undefined;

  /**
   * A token for getting the next set of dataset export jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsRequest {
  /**
   * A token returned from the previous call to `ListDatasetGroups` for getting the next set of dataset groups (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of dataset groups to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a dataset group. For a complete listing, call the [DescribeDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html) API.
 *
 * @public
 */
export interface DatasetGroupSummary {
  /**
   * The name of the dataset group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The status of the dataset group.
   *
   * A dataset group can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the dataset group was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the dataset group was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If creating a dataset group fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The domain of a Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsResponse {
  /**
   * The list of your dataset groups.
   *
   * @public
   */
  datasetGroups?: DatasetGroupSummary[] | undefined;

  /**
   * A token for getting the next set of dataset groups (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to list the dataset import jobs for.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListDatasetImportJobs` for getting the next set of dataset import jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of dataset import jobs to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the [DescribeDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html) API.
 *
 * @public
 */
export interface DatasetImportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job.
   *
   * @public
   */
  datasetImportJobArn?: string | undefined;

  /**
   * The name of the dataset import job.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * The status of the dataset import job.
   *
   * A dataset import job can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the dataset import job was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the dataset import job status was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * If a dataset import job fails, the reason behind the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The import mode the dataset import job used to update the data in the dataset. For more information see [Updating existing bulk data](https://docs.aws.amazon.com/personalize/latest/dg/updating-existing-bulk-data.html).
   *
   * @public
   */
  importMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsResponse {
  /**
   * The list of dataset import jobs.
   *
   * @public
   */
  datasetImportJobs?: DatasetImportJobSummary[] | undefined;

  /**
   * A token for getting the next set of dataset import jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group that contains the datasets to list.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListDatasets` for getting the next set of dataset import jobs (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of datasets to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a dataset. For a complete listing, call the [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html) API.
 *
 * @public
 */
export interface DatasetSummary {
  /**
   * The name of the dataset.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The dataset type. One of the following values:
   *
   * - Interactions
   * - Items
   * - Users
   * - Event-Interactions
   *
   * @public
   */
  datasetType?: string | undefined;

  /**
   * The status of the dataset.
   *
   * A dataset can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the dataset was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the dataset was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * An array of `Dataset` objects. Each object provides metadata information.
   *
   * @public
   */
  datasets?: DatasetSummary[] | undefined;

  /**
   * A token for getting the next set of datasets (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventTrackersRequest {
  /**
   * The ARN of a dataset group used to filter the response.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListEventTrackers` for getting the next set of event trackers (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of event trackers to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of an event tracker. For a complete listing, call the [DescribeEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html) API.
 *
 * @public
 */
export interface EventTrackerSummary {
  /**
   * The name of the event tracker.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the event tracker.
   *
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * The status of the event tracker.
   *
   * An event tracker can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the event tracker was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the event tracker was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventTrackersResponse {
  /**
   * A list of event trackers.
   *
   * @public
   */
  eventTrackers?: EventTrackerSummary[] | undefined;

  /**
   * A token for getting the next set of event trackers (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * The ARN of the dataset group that contains the filters.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListFilters` for getting the next set of filters (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of filters to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A short summary of a filter's attributes.
 *
 * @public
 */
export interface FilterSummary {
  /**
   * The name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the filter.
   *
   * @public
   */
  filterArn?: string | undefined;

  /**
   * The time at which the filter was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The time at which the filter was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The ARN of the dataset group to which the filter belongs.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * If the filter failed, the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The status of the filter.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * A list of returned filters.
   *
   * @public
   */
  Filters?: FilterSummary[] | undefined;

  /**
   * A token for getting the next set of filters (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionMetricsRequest {
  /**
   * The Amazon Resource Name (ARN) of the metric attribution to retrieve attributes for.
   *
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of metrics to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionMetricsResponse {
  /**
   * The metrics for the specified metric attribution.
   *
   * @public
   */
  metrics?: MetricAttribute[] | undefined;

  /**
   * Specify the pagination token from a previous `ListMetricAttributionMetricsResponse` request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionsRequest {
  /**
   * The metric attributions' dataset group Amazon Resource Name (ARN).
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of metric attributions to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a metric attribution. For a complete listing, call the [DescribeMetricAttribution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html).
 *
 * @public
 */
export interface MetricAttributionSummary {
  /**
   * The name of the metric attribution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The metric attribution's Amazon Resource Name (ARN).
   *
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * The metric attribution's status.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The metric attribution's creation date time.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The metric attribution's last updated date time.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The metric attribution's failure reason.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionsResponse {
  /**
   * The list of metric attributions.
   *
   * @public
   */
  metricAttributions?: MetricAttributionSummary[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesRequest {
  /**
   * The default is `SERVICE`.
   *
   * @public
   */
  recipeProvider?: RecipeProvider | undefined;

  /**
   * A token returned from the previous call to `ListRecipes` for getting the next set of recipes (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of recipes to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters returned recipes by domain for a Domain dataset group. Only recipes (Domain dataset group use cases) for this domain are included in the response. If you don't specify a domain, all recipes are returned.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * Provides a summary of the properties of a recipe. For a complete listing, call the [DescribeRecipe](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html) API.
 *
 * @public
 */
export interface RecipeSummary {
  /**
   * The name of the recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The status of the recipe.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the recipe was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the recipe was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The domain of the recipe (if the recipe is a Domain dataset group use case).
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListRecipesResponse {
  /**
   * The list of available recipes.
   *
   * @public
   */
  recipes?: RecipeSummary[] | undefined;

  /**
   * A token for getting the next set of recipes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendersRequest {
  /**
   * The Amazon Resource Name (ARN) of the Domain dataset group to list the recommenders for. When a Domain dataset group is not specified, all the recommenders associated with the account are listed.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListRecommenders` for getting the next set of recommenders (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of recommenders to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of the recommender.
 *
 * @public
 */
export interface RecommenderSummary {
  /**
   * The name of the recommender.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommender.
   *
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.
   *
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * The configuration details of the recommender.
   *
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * The status of the recommender. A recommender can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix format) that the recommender was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix format) that the recommender was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRecommendersResponse {
  /**
   * A list of the recommenders.
   *
   * @public
   */
  recommenders?: RecommenderSummary[] | undefined;

  /**
   * A token for getting the next set of recommenders (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasRequest {
  /**
   * A token returned from the previous call to `ListSchemas` for getting the next set of schemas (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of schemas to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a dataset schema. For a complete listing, call the [DescribeSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html) API.
 *
 * @public
 */
export interface DatasetSchemaSummary {
  /**
   * The name of the schema.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * The date and time (in Unix time) that the schema was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the schema was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The domain of a schema that you created for a dataset in a Domain dataset group.
   *
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * A list of schemas.
   *
   * @public
   */
  schemas?: DatasetSchemaSummary[] | undefined;

  /**
   * A token used to get the next set of schemas (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListSolutions` for getting the next set of solutions (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of solutions to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of the properties of a solution. For a complete listing, call the [DescribeSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html) API.
 *
 * @public
 */
export interface SolutionSummary {
  /**
   * The name of the solution.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the solution.
   *
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * The status of the solution.
   *
   * A solution can be in one of the following states:
   *
   * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
   * - DELETE PENDING > DELETE IN_PROGRESS
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time (in Unix time) that the solution was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time (in Unix time) that the solution was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recipe used by the solution.
   *
   * @public
   */
  recipeArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionsResponse {
  /**
   * A list of the current solutions.
   *
   * @public
   */
  solutions?: SolutionSummary[] | undefined;

  /**
   * A token for getting the next set of solutions (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution.
   *
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * A token returned from the previous call to `ListSolutionVersions` for getting the next set of solution versions (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of solution versions to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSolutionVersionsResponse {
  /**
   * A list of solution versions describing the version properties.
   *
   * @public
   */
  solutionVersions?: SolutionVersionSummary[] | undefined;

  /**
   * A token for getting the next set of solution versions (if they exist).
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource's Amazon Resource Name (ARN).
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
   * The resource's tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartRecommenderRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommender to start.
   *
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface StartRecommenderResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommender you started.
   *
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface StopRecommenderRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommender to stop.
   *
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface StopRecommenderResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommender you stopped.
   *
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface StopSolutionVersionCreationRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution version you want to stop creating.
   *
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource's Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags to apply to the resource. For more information see [Tagging Amazon Personalize resources](https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html).
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The resource's Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * The Amazon Resource Name (ARN) of the campaign.
   *
   * @public
   */
  campaignArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a new model to deploy. To specify the latest solution version of your solution, specify the ARN of your *solution* in `SolutionArn/$LATEST` format. You must use this format if you set `syncWithLatestSolutionVersion` to `True` in the [CampaignConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_CampaignConfig.html).
   *
   * To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.
   *
   * For more information about automatic campaign updates, see [Enabling automatic campaign updates](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update).
   *
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support. A high `minProvisionedTPS` will increase your bill. We recommend starting with 1 for `minProvisionedTPS` (the default). Track your usage using Amazon CloudWatch metrics, and increase the `minProvisionedTPS` as necessary.
   *
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * The configuration details of a campaign.
   *
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * The same campaign ARN as given in the request.
   *
   * @public
   */
  campaignArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset that you want to update.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new schema you want use.
   *
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset you updated.
   *
   * @public
   */
  datasetArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricAttributionRequest {
  /**
   * Add new metric attributes to the metric attribution.
   *
   * @public
   */
  addMetrics?: MetricAttribute[] | undefined;

  /**
   * Remove metric attributes from the metric attribution.
   *
   * @public
   */
  removeMetrics?: string[] | undefined;

  /**
   * An output config for the metric attribution.
   *
   * @public
   */
  metricsOutputConfig?: MetricAttributionOutput | undefined;

  /**
   * The Amazon Resource Name (ARN) for the metric attribution to update.
   *
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricAttributionResponse {
  /**
   * The Amazon Resource Name (ARN) for the metric attribution that you updated.
   *
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommender to modify.
   *
   * @public
   */
  recommenderArn: string | undefined;

  /**
   * The configuration details of the recommender.
   *
   * @public
   */
  recommenderConfig: RecommenderConfig | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderResponse {
  /**
   * The same recommender Amazon Resource Name (ARN) as given in the request.
   *
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSolutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the solution to update.
   *
   * @public
   */
  solutionArn: string | undefined;

  /**
   * Whether the solution uses automatic training to create new solution versions (trained models). You can change the training frequency by specifying a `schedulingExpression` in the `AutoTrainingConfig` as part of solution configuration.
   *
   * If you turn on automatic training, the first automatic training starts within one hour after the solution update completes. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information about automatic training, see [Configuring automatic training](https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html).
   *
   * After training starts, you can get the solution version's Amazon Resource Name (ARN) with the [ListSolutionVersions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html) API operation. To get its status, use the [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html).
   *
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * Whether to perform incremental training updates on your model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.
   *
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * The new configuration details of the solution.
   *
   * @public
   */
  solutionUpdateConfig?: SolutionUpdateConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSolutionResponse {
  /**
   * The same solution Amazon Resource Name (ARN) as given in the request.
   *
   * @public
   */
  solutionArn?: string | undefined;
}
