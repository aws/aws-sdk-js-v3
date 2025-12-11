// smithy-typescript generated code
import {
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
 * <p>Describes an algorithm image.</p>
 * @public
 */
export interface AlgorithmImage {
  /**
   * <p>The name of the algorithm image.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   * @public
   */
  dockerURI: string | undefined;
}

/**
 * <p>Provides the name and default range of a categorical hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 * @public
 */
export interface DefaultCategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * <p>Provides the name and default range of a continuous hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 * @public
 */
export interface DefaultContinuousHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   * @public
   */
  maxValue?: number | undefined;

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * <p>Provides the name and default range of a integer-valued hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 * @public
 */
export interface DefaultIntegerHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   * @public
   */
  maxValue?: number | undefined;

  /**
   * <p>Indicates whether the hyperparameter is tunable.</p>
   * @public
   */
  isTunable?: boolean | undefined;
}

/**
 * <p>Specifies the hyperparameters and their default ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 * @public
 */
export interface DefaultHyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their default ranges.</p>
   * @public
   */
  integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[] | undefined;

  /**
   * <p>The continuous hyperparameters and their default ranges.</p>
   * @public
   */
  continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[] | undefined;

  /**
   * <p>The categorical hyperparameters and their default ranges.</p>
   * @public
   */
  categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[] | undefined;
}

/**
 * <p>Describes a custom algorithm.</p>
 * @public
 */
export interface Algorithm {
  /**
   * <p>The name of the algorithm.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   * @public
   */
  algorithmArn?: string | undefined;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   * @public
   */
  algorithmImage?: AlgorithmImage | undefined;

  /**
   * <p>Specifies the default hyperparameters.</p>
   * @public
   */
  defaultHyperParameters?: Record<string, string> | undefined;

  /**
   * <p>Specifies the default hyperparameters, their ranges, and whether they
   *       are tunable. A tunable hyperparameter can
   *       have its value determined during hyperparameter optimization (HPO).</p>
   * @public
   */
  defaultHyperParameterRanges?: DefaultHyperParameterRanges | undefined;

  /**
   * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
   * @public
   */
  defaultResourceConfig?: Record<string, string> | undefined;

  /**
   * <p>The training input mode.</p>
   * @public
   */
  trainingInputMode?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the algorithm was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the algorithm was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * <p>The configuration details of a batch inference job.</p>
 * @public
 */
export interface BatchInferenceJobConfig {
  /**
   * <p>A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items.
   *       See <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>.</p>
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * <p>A map of ranking influence values for POPULARITY and FRESHNESS. For each key, specify a numerical value between 0.0 and 1.0 that determines how much influence that ranking factor has on the final recommendations. A value closer to 1.0 gives more weight to the factor, while a value closer to 0.0 reduces its influence.</p>
   * @public
   */
  rankingInfluence?: Partial<Record<RankingInfluenceType, number>> | undefined;
}

/**
 * <p>The configuration details of an Amazon S3 input or output bucket.</p>
 * @public
 */
export interface S3DataConfig {
  /**
   * <p>The file path of the Amazon S3 bucket.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key that Amazon Personalize uses to
   *       encrypt or decrypt the input and output files.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>The input configuration of a batch inference job.</p>
 * @public
 */
export interface BatchInferenceJobInput {
  /**
   * <p>The URI of the Amazon S3 location that contains your input data. The Amazon S3 bucket must be in the
   *       same region as the API endpoint you are calling.</p>
   * @public
   */
  s3DataSource: S3DataConfig | undefined;
}

/**
 * <p>The output configuration parameters of a batch inference job.</p>
 * @public
 */
export interface BatchInferenceJobOutput {
  /**
   * <p>Information on the Amazon S3 bucket in which the batch inference job's output is stored.</p>
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * <p>The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
 *       For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">Tagging Amazon Personalize resources</a>.
 *     </p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   * @public
   */
  tagKey: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category (key).</p>
   * @public
   */
  tagValue: string | undefined;
}

/**
 * <p>A string to string map of the configuration details for theme generation.</p>
 * @public
 */
export interface FieldsForThemeGeneration {
  /**
   * <p>The name of the Items dataset column that stores the name of each item in the dataset.</p>
   * @public
   */
  itemName: string | undefined;
}

/**
 * <p>The configuration details for generating themes with a batch inference job.</p>
 * @public
 */
export interface ThemeGenerationConfig {
  /**
   * <p>Fields used to generate descriptive themes for a batch inference job.</p>
   * @public
   */
  fieldsForThemeGeneration: FieldsForThemeGeneration | undefined;
}

/**
 * @public
 */
export interface CreateBatchInferenceJobRequest {
  /**
   * <p>The name of the batch inference job to create.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version that will be used to generate the
   *       batch inference recommendations.</p>
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>The ARN of the filter to apply to the batch inference job. For more information on using
   *       filters, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The number of recommendations to retrieve.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The Amazon S3 path that leads to the input file to base your recommendations on. The input
   *       material must be in JSON format.</p>
   * @public
   */
  jobInput: BatchInferenceJobInput | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output will be stored.</p>
   * @public
   */
  jobOutput: BatchInferenceJobOutput | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output
   *       Amazon S3 buckets respectively.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The configuration details of a batch inference job.</p>
   * @public
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the batch inference job.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The mode of the batch inference job. To generate descriptive themes for groups of similar items, set the
   *       job mode to <code>THEME_GENERATION</code>. If you don't want to generate themes, use the default <code>BATCH_INFERENCE</code>.</p>
   *          <p>
   *       When you get batch recommendations with themes, you will incur additional costs. For more information, see <a href="https://aws.amazon.com/personalize/pricing/">Amazon Personalize pricing</a>.
   *     </p>
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;

  /**
   * <p>For theme generation jobs, specify the name of the column in your Items
   *       dataset that contains each item's name.</p>
   * @public
   */
  themeGenerationConfig?: ThemeGenerationConfig | undefined;
}

/**
 * @public
 */
export interface CreateBatchInferenceJobResponse {
  /**
   * <p>The ARN of the batch inference job.</p>
   * @public
   */
  batchInferenceJobArn?: string | undefined;
}

/**
 * <p>The input configuration of a batch segment job.</p>
 * @public
 */
export interface BatchSegmentJobInput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   * @public
   */
  s3DataSource: S3DataConfig | undefined;
}

/**
 * <p>The output configuration parameters of a batch segment job.</p>
 * @public
 */
export interface BatchSegmentJobOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * @public
 */
export interface CreateBatchSegmentJobRequest {
  /**
   * <p>The name of the batch segment job to create.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version you want the batch segment job to use to generate
   *       batch segments.</p>
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>The ARN of the filter to apply to the batch segment job. For more information on using
   *       filters, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The number of predicted users generated by the batch segment job for each line of input data. The maximum number of users per segment is 5 million.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The Amazon S3 path for the input data used to generate the batch segment job.</p>
   * @public
   */
  jobInput: BatchSegmentJobInput | undefined;

  /**
   * <p>The Amazon S3 path for the bucket where the job's output will be stored.</p>
   * @public
   */
  jobOutput: BatchSegmentJobOutput | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output
   *       Amazon S3 buckets respectively.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the batch segment job.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBatchSegmentJobResponse {
  /**
   * <p>The ARN of the batch segment job.</p>
   * @public
   */
  batchSegmentJobArn?: string | undefined;
}

/**
 * <p>The configuration details of a campaign.</p>
 * @public
 */
export interface CampaignConfig {
  /**
   * <p>Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items. Provide <code>itemExplorationConfig</code> data only if your solution uses the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe.</p>
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * <p>Whether metadata with recommendations is enabled for the campaign.
   *       If enabled, you can specify the columns from your Items dataset in your request for recommendations. Amazon Personalize returns this data for each item in the recommendation response.
   *     For information about enabling metadata for a campaign, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-return-metadata">Enabling metadata in recommendations for a campaign</a>.</p>
   *          <p>
   *       If you enable metadata in recommendations, you will incur additional costs. For more information, see <a href="https://aws.amazon.com/personalize/pricing/">Amazon Personalize pricing</a>.
   *     </p>
   * @public
   */
  enableMetadataWithRecommendations?: boolean | undefined;

  /**
   * <p>Whether the campaign automatically updates to use the latest solution version (trained model) of a solution. If you specify <code>True</code>,
   *       you must specify the ARN of your <i>solution</i> for the <code>SolutionVersionArn</code> parameter. It must be in <code>SolutionArn/$LATEST</code> format.
   *       The default is <code>False</code> and you must manually update the campaign to deploy the latest solution version.
   *     </p>
   *          <p>
   *       For more information about automatic campaign updates, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update">Enabling automatic campaign updates</a>.
   *     </p>
   * @public
   */
  syncWithLatestSolutionVersion?: boolean | undefined;

  /**
   * <p>A map of ranking influence values for POPULARITY and FRESHNESS. For each key, specify a numerical value between 0.0 and 1.0 that determines how much influence that ranking factor has on the final recommendations. A value closer to 1.0 gives more weight to the factor, while a value closer to 0.0 reduces its influence. </p>
   * @public
   */
  rankingInfluence?: Partial<Record<RankingInfluenceType, number>> | undefined;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * <p>A name for the new campaign. The campaign name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model to deploy with the campaign. To specify the latest solution version of your solution,
   *       specify the ARN of your <i>solution</i> in <code>SolutionArn/$LATEST</code> format.
   *       You must use this format if you set <code>syncWithLatestSolutionVersion</code> to <code>True</code> in the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CampaignConfig.html">CampaignConfig</a>.
   *     </p>
   *          <p>
   *       To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.
   *     </p>
   *          <p>
   *       For more information about automatic campaign updates, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update">Enabling automatic campaign updates</a>.
   *     </p>
   * @public
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support.  A high <code>minProvisionedTPS</code> will increase your bill. We recommend starting with 1 for <code>minProvisionedTPS</code> (the default). Track
   *       your usage using Amazon CloudWatch metrics, and increase the <code>minProvisionedTPS</code> as necessary.</p>
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * <p>The configuration details of a campaign.</p>
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the campaign.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   * @public
   */
  campaignArn?: string | undefined;
}

/**
 * <p>Describes the data source that contains the data to upload to a dataset, or the list of
 *       records to delete from Amazon Personalize.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>For dataset import jobs, the path to the Amazon S3 bucket where the data that you want to upload to
   *       your dataset is stored. For data deletion jobs, the path to the Amazon S3 bucket that stores the list of records to delete.
   *     </p>
   *          <p>
   *       For example: </p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/fileName.csv</code>
   *          </p>
   *          <p>If your CSV files are in a folder in your Amazon S3 bucket and you want your import job or data deletion job
   *       to consider multiple files, you can specify the path to the folder.  With a data deletion job, Amazon Personalize uses all files in the folder and any sub folder. Use the following syntax with a <code>/</code> after the folder
   *       name:</p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   * @public
   */
  dataLocation?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataDeletionJobRequest {
  /**
   * <p>The name for the data deletion job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to
   *     delete records from.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the list of userIds of the users to delete.</p>
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the data deletion job.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDataDeletionJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data deletion job.</p>
   * @public
   */
  dataDeletionJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The name for the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the schema to associate with the dataset. The schema
   *       defines the dataset fields.</p>
   * @public
   */
  schemaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to add the dataset
   *       to.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The type of dataset.</p>
   *          <p>One of the following (case insensitive) values:</p>
   *          <ul>
   *             <li>
   *                <p>Interactions</p>
   *             </li>
   *             <li>
   *                <p>Items</p>
   *             </li>
   *             <li>
   *                <p>Users</p>
   *             </li>
   *             <li>
   *                <p>Actions</p>
   *             </li>
   *             <li>
   *                <p>Action_Interactions</p>
   *             </li>
   *          </ul>
   * @public
   */
  datasetType: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the dataset.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  datasetArn?: string | undefined;
}

/**
 * <p>The output configuration parameters of a dataset export job.</p>
 * @public
 */
export interface DatasetExportJobOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   * @public
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * @public
 */
export interface CreateDatasetExportJobRequest {
  /**
   * <p>The name for the dataset export job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains the data
   *       to export.</p>
   * @public
   */
  datasetArn: string | undefined;

  /**
   * <p>The data to export, based on how you imported the data. You can choose
   *       to export only <code>BULK</code> data that you imported using a dataset
   *       import job, only <code>PUT</code> data that you imported incrementally
   *       (using the console, PutEvents, PutUsers and PutItems operations), or
   *         <code>ALL</code> for both types. The default value is <code>PUT</code>.
   *     </p>
   * @public
   */
  ingestionMode?: IngestionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has
   *       permissions to add data to your output Amazon S3 bucket.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored.</p>
   * @public
   */
  jobOutput: DatasetExportJobOutput | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the dataset export job.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   * @public
   */
  datasetExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupRequest {
  /**
   * <p>The name for the new dataset group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that has permissions to access
   *       the Key Management Service (KMS) key. Supplying an IAM role is only valid when also
   *       specifying a KMS key.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to
   *       encrypt the datasets.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The domain of the dataset group. Specify a domain to create a
   *       Domain dataset group. The domain you specify determines the default
   *       schemas for datasets and the use cases available for recommenders. If you
   *       don't specify a domain, you create a Custom dataset group with solution
   *       versions that you deploy with a campaign. </p>
   * @public
   */
  domain?: Domain | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the dataset group.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new dataset group.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The domain for the new Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobRequest {
  /**
   * <p>The name for the dataset import job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The ARN of the dataset that receives the imported data.</p>
   * @public
   */
  datasetArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the dataset import job.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Specify how to add the new records to an existing dataset. The default
   *       import mode is <code>FULL</code>. If you haven't imported bulk records into the dataset previously, you
   *       can only specify <code>FULL</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>FULL</code> to overwrite all existing bulk data in
   *           your dataset. Data you imported individually is not replaced.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>INCREMENTAL</code> to append the new records to the
   *           existing data in your dataset. Amazon Personalize replaces any record with the
   *           same ID with the new one.</p>
   *             </li>
   *          </ul>
   * @public
   */
  importMode?: ImportMode | undefined;

  /**
   * <p>If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3</p>
   * @public
   */
  publishAttributionMetricsToS3?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobResponse {
  /**
   * <p>The ARN of the dataset import job.</p>
   * @public
   */
  datasetImportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventTrackerRequest {
  /**
   * <p>The name for the event tracker.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the event tracker.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventTrackerResponse {
  /**
   * <p>The ARN of the event tracker.</p>
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * <p>The ID of the event tracker. Include this ID in requests to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   * @public
   */
  trackingId?: string | undefined;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * <p>The name of the filter to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the dataset group that the filter will belong to.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules.
   *             For information about filter expression structure and syntax, see
   *             <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.</p>
   * @public
   */
  filterExpression: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the filter.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * <p>The ARN of the new filter.</p>
   * @public
   */
  filterArn?: string | undefined;
}

/**
 * <p>Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 * @public
 */
export interface MetricAttribute {
  /**
   * <p>The metric's event type.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>The metric's name. The name helps you identify the metric in Amazon CloudWatch or Amazon S3.</p>
   * @public
   */
  metricName: string | undefined;

  /**
   * <p>The attribute's expression. Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the
   *       dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>The output configuration details for a metric attribution.</p>
 * @public
 */
export interface MetricAttributionOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   * @public
   */
  s3DataDestination?: S3DataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket and add metrics to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMetricAttributionRequest {
  /**
   * <p>A name for the metric attribution.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function.
   *       Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the
   *       dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).</p>
   * @public
   */
  metrics: MetricAttribute[] | undefined;

  /**
   * <p>The output configuration details for the metric attribution.</p>
   * @public
   */
  metricsOutputConfig: MetricAttributionOutput | undefined;
}

/**
 * @public
 */
export interface CreateMetricAttributionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the new metric attribution.</p>
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * <p>The training data configuration to use when creating a domain recommender or custom solution version (trained model).</p>
 * @public
 */
export interface TrainingDataConfig {
  /**
   * <p>Specifies the columns to exclude from training. Each key is a dataset type, and each value is a list of columns.
   *       Exclude columns to control what data Amazon Personalize uses to generate recommendations.</p>
   *          <p>
   *       For example, you might have a column that you want to use only to filter recommendations. You can
   *       exclude this column from training and Amazon Personalize considers it only when filtering.
   *     </p>
   * @public
   */
  excludedDatasetColumns?: Record<string, string[]> | undefined;

  /**
   * <p>A map that specifies which columns to include from each dataset during training. The map can contain up to 3 entries, where each key is a dataset name (maximum length of 256 characters, must contain only letters and underscores) and each value is an array of up to 50 column names. Column names can be up to 150 characters long, must start with a letter or underscore, and can contain only letters, numbers, and underscores.</p>
   * @public
   */
  includedDatasetColumns?: Record<string, string[]> | undefined;
}

/**
 * <p>The configuration details of the recommender.</p>
 * @public
 */
export interface RecommenderConfig {
  /**
   * <p>Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items. Provide <code>itemExplorationConfig</code> data only if your recommenders generate personalized recommendations for a user
   *       (not popular items or similar items).</p>
   * @public
   */
  itemExplorationConfig?: Record<string, string> | undefined;

  /**
   * <p>Specifies the requested minimum provisioned recommendation requests per second that
   *       Amazon Personalize will support. A high <code>minRecommendationRequestsPerSecond</code> will increase your bill. We recommend starting with 1 for <code>minRecommendationRequestsPerSecond</code> (the default). Track
   *       your usage using Amazon CloudWatch metrics, and increase the <code>minRecommendationRequestsPerSecond</code>
   *       as necessary.</p>
   * @public
   */
  minRecommendationRequestsPerSecond?: number | undefined;

  /**
   * <p>
   *       Specifies the training data configuration to use when creating a domain recommender.
   *     </p>
   * @public
   */
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * <p>Whether metadata with recommendations is enabled for the recommender.
   *       If enabled, you can specify the columns from your Items dataset in your request for recommendations. Amazon Personalize returns this data for each item in the recommendation response.
   *       For information about enabling metadata for a recommender, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-recommenders.html#create-recommender-return-metadata">Enabling metadata in recommendations for a recommender</a>.</p>
   *          <p>
   *       If you enable metadata in recommendations, you will incur additional costs. For more information, see <a href="https://aws.amazon.com/personalize/pricing/">Amazon Personalize pricing</a>.
   *     </p>
   * @public
   */
  enableMetadataWithRecommendations?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderRequest {
  /**
   * <p>The name of the recommender.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group
   *       use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>.
   *     </p>
   * @public
   */
  recipeArn: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the recommender.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * <p>The name for the schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A schema in Avro JSON format.</p>
   * @public
   */
  schema: string | undefined;

  /**
   * <p>The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify
   *     the domain you chose when you created the Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created schema.</p>
   * @public
   */
  schemaArn?: string | undefined;
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize
 *       determines which recipe, from the specified list, optimizes the given metric.
 *       Amazon Personalize then uses that recipe for the solution.</p>
 * @public
 */
export interface AutoMLConfig {
  /**
   * <p>The metric to optimize.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>The list of candidate recipes.</p>
   * @public
   */
  recipeList?: string[] | undefined;
}

/**
 * <p>The automatic training configuration to use when <code>performAutoTraining</code> is true.</p>
 * @public
 */
export interface AutoTrainingConfig {
  /**
   * <p>Specifies how often to automatically train new solution versions. Specify a rate expression in rate(<i>value</i>
   *             <i>unit</i>) format.
   *       For value, specify a number between 1 and 30. For unit, specify <code>day</code> or <code>days</code>.
   *       For example, to automatically create a new solution version every 5 days, specify <code>rate(5 days)</code>. The default is every 7 days.</p>
   *          <p>For more information about auto training, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html">Creating and configuring a solution</a>.</p>
   * @public
   */
  schedulingExpression?: string | undefined;
}

/**
 * <p>Describes the parameters of events, which are used in solution creation.</p>
 * @public
 */
export interface EventParameters {
  /**
   * <p>The name of the event type to be considered for solution creation.</p>
   * @public
   */
  eventType?: string | undefined;

  /**
   * <p>The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.</p>
   * @public
   */
  eventValueThreshold?: number | undefined;

  /**
   * <p>The weight of the event type. A higher weight means higher importance of the event type for the created solution.</p>
   * @public
   */
  weight?: number | undefined;
}

/**
 * <p>Describes the configuration of events, which are used in solution creation.</p>
 * @public
 */
export interface EventsConfig {
  /**
   * <p>A list of event parameters, which includes event types and their event value thresholds and weights.</p>
   * @public
   */
  eventParametersList?: EventParameters[] | undefined;
}

/**
 * <p>Provides the name and range of a categorical hyperparameter.</p>
 * @public
 */
export interface CategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Provides the name and range of a continuous hyperparameter.</p>
 * @public
 */
export interface ContinuousHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * <p>Provides the name and range of an integer-valued hyperparameter.</p>
 * @public
 */
export interface IntegerHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * <p>Specifies the hyperparameters and their ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 * @public
 */
export interface HyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their ranges.</p>
   * @public
   */
  integerHyperParameterRanges?: IntegerHyperParameterRange[] | undefined;

  /**
   * <p>The continuous hyperparameters and their ranges.</p>
   * @public
   */
  continuousHyperParameterRanges?: ContinuousHyperParameterRange[] | undefined;

  /**
   * <p>The categorical hyperparameters and their ranges.</p>
   * @public
   */
  categoricalHyperParameterRanges?: CategoricalHyperParameterRange[] | undefined;
}

/**
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         at this time.</p>
 *          </note>
 * @public
 */
export interface HPOObjective {
  /**
   * <p>The type of the metric. Valid values are <code>Maximize</code> and <code>Minimize</code>.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>A regular expression for finding the metric in the training job logs.</p>
   * @public
   */
  metricRegex?: string | undefined;
}

/**
 * <p>Describes the resource configuration for hyperparameter optimization (HPO).</p>
 * @public
 */
export interface HPOResourceConfig {
  /**
   * <p>The maximum number of training
   *       jobs when you create a
   *       solution
   *       version.
   *       The maximum value for <code>maxNumberOfTrainingJobs</code> is
   *       <code>40</code>.</p>
   * @public
   */
  maxNumberOfTrainingJobs?: string | undefined;

  /**
   * <p>The maximum number of parallel training
   *       jobs when you create a
   *       solution
   *       version.
   *       The maximum value for <code>maxParallelTrainingJobs</code> is
   *       <code>10</code>.</p>
   * @public
   */
  maxParallelTrainingJobs?: string | undefined;
}

/**
 * <p>Describes the properties for hyperparameter optimization (HPO).</p>
 * @public
 */
export interface HPOConfig {
  /**
   * <p>The metric to optimize during HPO.</p>
   *          <note>
   *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
   *         at this time.</p>
   *          </note>
   * @public
   */
  hpoObjective?: HPOObjective | undefined;

  /**
   * <p>Describes the resource configuration for HPO.</p>
   * @public
   */
  hpoResourceConfig?: HPOResourceConfig | undefined;

  /**
   * <p>The hyperparameters and their allowable ranges.</p>
   * @public
   */
  algorithmHyperParameterRanges?: HyperParameterRanges | undefined;
}

/**
 * <p>Describes the additional objective for the solution, such as maximizing streaming
 *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
 * @public
 */
export interface OptimizationObjective {
  /**
   * <p>The numerical metadata column in an Items dataset related to the optimization objective. For example, VIDEO_LENGTH (to maximize streaming minutes), or PRICE (to maximize revenue).</p>
   * @public
   */
  itemAttribute?: string | undefined;

  /**
   * <p>Specifies how Amazon Personalize balances the importance of your optimization objective versus relevance.</p>
   * @public
   */
  objectiveSensitivity?: ObjectiveSensitivity | undefined;
}

/**
 * <p>Describes the configuration properties for the solution.</p>
 * @public
 */
export interface SolutionConfig {
  /**
   * <p>Only events with a value greater than or equal to this threshold are
   *       used for training a model.</p>
   * @public
   */
  eventValueThreshold?: string | undefined;

  /**
   * <p>Describes the properties for hyperparameter optimization (HPO).</p>
   * @public
   */
  hpoConfig?: HPOConfig | undefined;

  /**
   * <p>Lists the algorithm hyperparameters and their values.</p>
   * @public
   */
  algorithmHyperParameters?: Record<string, string> | undefined;

  /**
   * <p>Lists the feature transformation parameters.</p>
   * @public
   */
  featureTransformationParameters?: Record<string, string> | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html">AutoMLConfig</a> object containing a list of recipes to search
   *       when AutoML is performed.</p>
   * @public
   */
  autoMLConfig?: AutoMLConfig | undefined;

  /**
   * <p>Describes the configuration of an event, which includes a list of event parameters. You can specify up to 10 event parameters. Events are used in solution creation.</p>
   * @public
   */
  eventsConfig?: EventsConfig | undefined;

  /**
   * <p>Describes the additional objective for the solution, such as maximizing streaming
   *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
   * @public
   */
  optimizationObjective?: OptimizationObjective | undefined;

  /**
   * <p>
   *      Specifies the training data configuration to use when creating a custom solution version (trained model).
   *     </p>
   * @public
   */
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * <p>Specifies the automatic training configuration to use.</p>
   * @public
   */
  autoTrainingConfig?: AutoTrainingConfig | undefined;
}

/**
 * @public
 */
export interface CreateSolutionRequest {
  /**
   * <p>The name for the solution.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.
   *       The default is <code>false</code>.</p>
   *          <p>When performing AutoML, this parameter is always <code>true</code> and you
   *       should not set it to <code>false</code>.</p>
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * <important>
   *             <p>We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize
   *         recipes. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/working-with-predefined-recipes.html">Choosing a recipe</a>.</p>
   *          </important>
   *          <p>Whether to perform automated machine learning (AutoML). The default is <code>false</code>.
   *       For this case, you must specify <code>recipeArn</code>.</p>
   *          <p>When set to <code>true</code>, Amazon Personalize analyzes your training data and selects
   *       the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit
   *       <code>recipeArn</code>. Amazon Personalize determines the optimal recipe by running tests with
   *       different values for the hyperparameters.
   *       AutoML lengthens the training process as compared to selecting a specific recipe.</p>
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * <p>Whether the solution uses automatic training to create new solution versions (trained models). The default is
   *         <code>True</code> and the solution automatically creates new solution versions every 7 days. You can change the training
   *       frequency by specifying a <code>schedulingExpression</code> in the <code>AutoTrainingConfig</code> as part of solution
   *       configuration. For more information about automatic training,
   *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html">Configuring automatic training</a>.</p>
   *          <p>
   *       Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within
   *       the hour, the solution skips the first automatic training.
   *     </p>
   *          <p>
   *       After training starts, you can
   *       get the solution version's Amazon Resource Name (ARN) with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> API operation.
   *       To get its status, use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>.
   *     </p>
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * <p>Whether to perform incremental training updates on your model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.</p>
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe to use for model training. This is required when
   *       <code>performAutoML</code> is false. For information about different Amazon Personalize recipes and their ARNs,
   *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/working-with-predefined-recipes.html">Choosing a recipe</a>.
   *     </p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
   * @public
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>When your have multiple event types (using an <code>EVENT_TYPE</code> schema field),
   *       this parameter specifies which event type (for example, 'click' or 'like') is used for
   *       training the model.</p>
   *          <p>If you do not provide an <code>eventType</code>, Amazon Personalize will use all interactions for training with
   *        equal weight regardless of type.</p>
   * @public
   */
  eventType?: string | undefined;

  /**
   * <p>The configuration properties for the solution. When <code>performAutoML</code> is set to
   *       true, Amazon Personalize only evaluates the <code>autoMLConfig</code> section
   *       of the solution configuration.</p>
   *          <note>
   *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
   *         at this time.</p>
   *          </note>
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the solution.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSolutionResponse {
  /**
   * <p>The ARN of the solution.</p>
   * @public
   */
  solutionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSolutionVersionRequest {
  /**
   * <p>The name of the solution version.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution containing the training configuration
   *       information.</p>
   * @public
   */
  solutionArn: string | undefined;

  /**
   * <p>The scope of training to be performed when creating the solution version.
   *       The default is <code>FULL</code>. This creates a completely new model based on the entirety
   *       of the training data from the datasets in your dataset group.
   *     </p>
   *          <p>If you use
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>,
   *       you can specify a training mode of <code>UPDATE</code>. This updates the model to consider new items for recommendations. It is not a full
   *         retraining. You should still complete a full retraining weekly.
   *         If you specify <code>UPDATE</code>, Amazon Personalize will stop automatic updates for the solution version. To resume updates, create a new solution with training mode set to <code>FULL</code>
   *         and deploy it in a campaign.
   *         For more information about automatic updates, see
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/use-case-recipe-features.html#maintaining-with-automatic-updates">Automatic updates</a>.
   *       </p>
   *          <p>The <code>UPDATE</code> option can only be used when you already have an active solution
   *         version created from the input solution using the <code>FULL</code> option and the input
   *         solution was trained with the
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>
   *         recipe or the legacy
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p>
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> to apply to the solution version.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSolutionVersionResponse {
  /**
   * <p>The ARN of the new solution version.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to delete.</p>
   * @public
   */
  campaignArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   * @public
   */
  datasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetGroupRequest {
  /**
   * <p>The ARN of the dataset group to delete.</p>
   * @public
   */
  datasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to delete.</p>
   * @public
   */
  eventTrackerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * <p>The ARN of the filter to delete.</p>
   * @public
   */
  filterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricAttributionRequest {
  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   * @public
   */
  metricAttributionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to delete.</p>
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to delete.</p>
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolutionRequest {
  /**
   * <p>The ARN of the solution to delete.</p>
   * @public
   */
  solutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm to describe.</p>
   * @public
   */
  algorithmArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmResponse {
  /**
   * <p>A listing of the properties of the algorithm.</p>
   * @public
   */
  algorithm?: Algorithm | undefined;
}

/**
 * @public
 */
export interface DescribeBatchInferenceJobRequest {
  /**
   * <p>The ARN of the batch inference job to describe.</p>
   * @public
   */
  batchInferenceJobArn: string | undefined;
}

/**
 * <p>Contains information on a batch inference job.</p>
 * @public
 */
export interface BatchInferenceJob {
  /**
   * <p>The name of the batch inference job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  batchInferenceJobArn?: string | undefined;

  /**
   * <p>The ARN of the filter used on the batch inference job.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>If the batch inference job failed, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference job
   *       was created.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The number of recommendations generated by the batch inference job. This number includes
   *       the error messages generated for failed input records.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The Amazon S3 path that leads to the input data used to generate the batch inference
   *       job.</p>
   * @public
   */
  jobInput?: BatchInferenceJobInput | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the output data generated by the batch inference job.</p>
   * @public
   */
  jobOutput?: BatchInferenceJobOutput | undefined;

  /**
   * <p>A string to string map of the configuration details of a batch inference job.</p>
   * @public
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch inference job.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The job's mode.</p>
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;

  /**
   * <p>The job's theme generation settings.</p>
   * @public
   */
  themeGenerationConfig?: ThemeGenerationConfig | undefined;

  /**
   * <p>The status of the batch inference job. The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING</p>
   *             </li>
   *             <li>
   *                <p>IN PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The time at which the batch inference job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the batch inference job was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBatchInferenceJobResponse {
  /**
   * <p>Information on the specified batch inference job.</p>
   * @public
   */
  batchInferenceJob?: BatchInferenceJob | undefined;
}

/**
 * @public
 */
export interface DescribeBatchSegmentJobRequest {
  /**
   * <p>The ARN of the batch segment job to describe.</p>
   * @public
   */
  batchSegmentJobArn: string | undefined;
}

/**
 * <p>Contains information on a batch segment job.</p>
 * @public
 */
export interface BatchSegmentJob {
  /**
   * <p>The name of the batch segment job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch segment job.</p>
   * @public
   */
  batchSegmentJobArn?: string | undefined;

  /**
   * <p>The ARN of the filter used on the batch segment job.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>If the batch segment job failed, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The number of predicted users generated by the batch segment job for each line of input data. The maximum number of users per segment is 5 million.</p>
   * @public
   */
  numResults?: number | undefined;

  /**
   * <p>The Amazon S3 path that leads to the input data used to generate the batch segment job.</p>
   * @public
   */
  jobInput?: BatchSegmentJobInput | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the output data generated by the batch segment job.</p>
   * @public
   */
  jobOutput?: BatchSegmentJobOutput | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch segment job.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the batch segment job. The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING</p>
   *             </li>
   *             <li>
   *                <p>IN PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The time at which the batch segment job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the batch segment job last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBatchSegmentJobResponse {
  /**
   * <p>Information on the specified batch segment job.</p>
   * @public
   */
  batchSegmentJob?: BatchSegmentJob | undefined;
}

/**
 * @public
 */
export interface DescribeCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   * @public
   */
  campaignArn: string | undefined;
}

/**
 * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
 * @public
 */
export interface CampaignUpdateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployed solution version.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support.</p>
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * <p>The configuration details of a campaign.</p>
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * <p>The status of the campaign update.</p>
   *          <p>A campaign update can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If a campaign update fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the campaign update was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the campaign update was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * <p>An object that describes the deployment of a solution version.
 *       For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
 * @public
 */
export interface Campaign {
  /**
   * <p>The name of the campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign. </p>
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version the campaign uses.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second. A high <code>minProvisionedTPS</code> will increase your bill. We recommend starting with 1 for <code>minProvisionedTPS</code> (the default). Track
   *       your usage using Amazon CloudWatch metrics, and increase the <code>minProvisionedTPS</code>
   *       as necessary.</p>
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * <p>The configuration details of a campaign.</p>
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;

  /**
   * <p>The status of the campaign.</p>
   *          <p>A campaign can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date and time (in Unix format) that the campaign was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix format) that the campaign was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
   *          <note>
   *             <p>The <code>latestCampaignUpdate</code> field is only returned when the campaign has had
   *         at least one <code>UpdateCampaign</code> call. </p>
   *          </note>
   * @public
   */
  latestCampaignUpdate?: CampaignUpdateSummary | undefined;
}

/**
 * @public
 */
export interface DescribeCampaignResponse {
  /**
   * <note>
   *             <p>The <code>latestCampaignUpdate</code> field is only returned when the campaign has had
   *         at least one <code>UpdateCampaign</code> call. </p>
   *          </note>
   *          <p>The properties of the campaign.</p>
   *          <note>
   *             <p>The <code>latestCampaignUpdate</code> field is only returned when the campaign has had
   *         at least one <code>UpdateCampaign</code> call.</p>
   *          </note>
   * @public
   */
  campaign?: Campaign | undefined;
}

/**
 * @public
 */
export interface DescribeDataDeletionJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data deletion job.</p>
   * @public
   */
  dataDeletionJobArn: string | undefined;
}

/**
 * <p>Describes a job that deletes all
 *       references to specific users from an Amazon Personalize dataset group in batches. For information about creating a data deletion job,
 *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/delete-records.html">Deleting users</a>.</p>
 * @public
 */
export interface DataDeletionJob {
  /**
   * <p>The name of the data deletion job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data deletion job.</p>
   * @public
   */
  dataDeletionJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group the job deletes records from.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>Describes the data source that contains the data to upload to a dataset, or the list of
   *       records to delete from Amazon Personalize.</p>
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the data deletion job.</p>
   *          <p>A data deletion job can have one of the following statuses:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING > IN_PROGRESS > COMPLETED -or- FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The number of records deleted by a COMPLETED job.</p>
   * @public
   */
  numDeleted?: number | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the data deletion
   *       job.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) the data deletion job was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a data deletion job fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataDeletionJobResponse {
  /**
   * <p>Information about the data deletion job, including the status.</p>
   *          <p>The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED</p>
   *             </li>
   *             <li>
   *                <p>FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  dataDeletionJob?: DataDeletionJob | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to describe.</p>
   * @public
   */
  datasetArn: string | undefined;
}

/**
 * <p>Describes an update to a dataset.</p>
 * @public
 */
export interface DatasetUpdateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema that replaced the previous schema of the dataset.</p>
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * <p>The status of the dataset update. </p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If updating a dataset fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the dataset update.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The last update date and time (in Unix time) of the dataset.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * <p>Provides metadata for a dataset.</p>
 * @public
 */
export interface Dataset {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want metadata
   *       for.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Interactions</p>
   *             </li>
   *             <li>
   *                <p>Items</p>
   *             </li>
   *             <li>
   *                <p>Users</p>
   *             </li>
   *             <li>
   *                <p>Actions</p>
   *             </li>
   *             <li>
   *                <p>Action_Interactions</p>
   *             </li>
   *          </ul>
   * @public
   */
  datasetType?: string | undefined;

  /**
   * <p>The ARN of the associated schema.</p>
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * <p>The status of the dataset.</p>
   *          <p>A dataset can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the dataset.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A time stamp that shows when the dataset was updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>Describes the latest update to the dataset.</p>
   * @public
   */
  latestDatasetUpdate?: DatasetUpdateSummary | undefined;

  /**
   * <p>The ID of the event tracker for an Action interactions dataset.
   *       You specify the tracker's ID in the <code>PutActionInteractions</code> API operation. Amazon Personalize uses it to direct new data to the Action interactions dataset in your dataset group.</p>
   * @public
   */
  trackingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>A listing of the dataset's properties.</p>
   * @public
   */
  dataset?: Dataset | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job to
   *       describe.</p>
   * @public
   */
  datasetExportJobArn: string | undefined;
}

/**
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more
 *       information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DatasetExportJob {
  /**
   * <p>The name of the export job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   * @public
   */
  datasetExportJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to export.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The data to export, based on how you imported the data. You can choose
   *       to export <code>BULK</code> data that you imported using a dataset import
   *       job, <code>PUT</code> data that you imported incrementally (using the
   *       console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
   *       for both types. The default value is <code>PUT</code>. </p>
   * @public
   */
  ingestionMode?: IngestionMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has
   *       permissions to add data to your output Amazon S3 bucket.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the dataset export job.</p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored. For
   *       example:</p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   * @public
   */
  jobOutput?: DatasetExportJobOutput | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the dataset export
   *       job.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) the status of the dataset export job
   *       was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a dataset export job fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetExportJobResponse {
  /**
   * <p>Information about the dataset export job, including the status.</p>
   *          <p>The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING</p>
   *             </li>
   *             <li>
   *                <p>CREATE IN_PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  datasetExportJob?: DatasetExportJob | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to
   *       describe.</p>
   * @public
   */
  datasetGroupArn: string | undefined;
}

/**
 * <p>A dataset group is a collection of related datasets (Item interactions,
 *       Users, Items, Actions, Action interactions). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a
 *       dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a
 *       solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each
 *       type of dataset.</p>
 *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in
 *       the group.</p>
 * @public
 */
export interface DatasetGroup {
  /**
   * <p>The name of the dataset group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The current status of the dataset group.</p>
   *          <p>A dataset group can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that has permissions to access
   *       the Key Management Service (KMS) key. Supplying an IAM role is only valid when also
   *       specifying a KMS key.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to
   *       encrypt the datasets.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the dataset group.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The last update date and time (in Unix time) of the dataset
   *       group.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If creating a dataset group fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The domain of a Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupResponse {
  /**
   * <p>A listing of the dataset group's properties.</p>
   * @public
   */
  datasetGroup?: DatasetGroup | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to
   *       describe.</p>
   * @public
   */
  datasetImportJobArn: string | undefined;
}

/**
 * <p>Describes a job that imports training data from a data source (Amazon S3
 *       bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DatasetImportJob {
  /**
   * <p>The name of the import job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The ARN of the dataset import job.</p>
   * @public
   */
  datasetImportJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that receives the
   *       imported data.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the dataset import job.</p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the dataset import
   *       job.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) the dataset was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a dataset import job fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The import mode used by the dataset import job to import new
   *       records.</p>
   * @public
   */
  importMode?: ImportMode | undefined;

  /**
   * <p>Whether the job publishes metrics to Amazon S3 for a metric attribution.</p>
   * @public
   */
  publishAttributionMetricsToS3?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * <p>Information about the dataset import job, including the status.</p>
   *          <p>The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING</p>
   *             </li>
   *             <li>
   *                <p>CREATE IN_PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  datasetImportJob?: DatasetImportJob | undefined;
}

/**
 * @public
 */
export interface DescribeEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to describe.</p>
   * @public
   */
  eventTrackerArn: string | undefined;
}

/**
 * <p>Provides information about an event tracker.</p>
 * @public
 */
export interface EventTracker {
  /**
   * <p>The name of the event tracker.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the event tracker.</p>
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the event tracker.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The ID of the event tracker. Include this ID in requests to the
   *     <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   * @public
   */
  trackingId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The status of the event tracker.</p>
   *          <p>An event tracker can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix format) that the event tracker was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventTrackerResponse {
  /**
   * <p>An object that describes the event tracker.</p>
   * @public
   */
  eventTracker?: EventTracker | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureTransformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the feature transformation to describe.</p>
   * @public
   */
  featureTransformationArn: string | undefined;
}

/**
 * <p>Provides feature transformation information. Feature transformation is the process
 *       of modifying raw input data into a form more suitable for model training.</p>
 * @public
 */
export interface FeatureTransformation {
  /**
   * <p>The name of the feature transformation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the FeatureTransformation object.</p>
   * @public
   */
  featureTransformationArn?: string | undefined;

  /**
   * <p>Provides the default parameters for feature transformation.</p>
   * @public
   */
  defaultParameters?: Record<string, string> | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the feature transformation.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The last update date and time (in Unix time) of the feature transformation.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The status of the feature transformation.</p>
   *          <p>A feature transformation can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureTransformationResponse {
  /**
   * <p>A listing of the FeatureTransformation properties.</p>
   * @public
   */
  featureTransformation?: FeatureTransformation | undefined;
}

/**
 * @public
 */
export interface DescribeFilterRequest {
  /**
   * <p>The ARN of the filter to describe.</p>
   * @public
   */
  filterArn: string | undefined;
}

/**
 * <p>Contains information on a recommendation filter, including its ARN, status, and filter
 *             expression.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the filter.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The time at which the filter was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the filter was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The ARN of the dataset group to which the filter belongs.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>If the filter failed, the reason for its failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Specifies the type of item interactions to filter out of recommendation results. The
   *             filter expression must follow specific format rules. For information about filter expression structure and syntax, see
   *             <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.</p>
   * @public
   */
  filterExpression?: string | undefined;

  /**
   * <p>The status of the filter.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFilterResponse {
  /**
   * <p>The filter's details.</p>
   * @public
   */
  filter?: Filter | undefined;
}

/**
 * @public
 */
export interface DescribeMetricAttributionRequest {
  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   * @public
   */
  metricAttributionArn: string | undefined;
}

/**
 * <p>Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize.
 *       Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3.
 *       For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 * @public
 */
export interface MetricAttribution {
  /**
   * <p>The metric attribution's name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * <p>The metric attribution's dataset group Amazon Resource Name (ARN).</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The metric attribution's output configuration.</p>
   * @public
   */
  metricsOutputConfig?: MetricAttributionOutput | undefined;

  /**
   * <p>The metric attribution's status.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The metric attribution's creation date time.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The metric attribution's last updated date time.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The metric attribution's failure reason.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricAttributionResponse {
  /**
   * <p>The details of the metric attribution.</p>
   * @public
   */
  metricAttribution?: MetricAttribution | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recipe to describe.</p>
   * @public
   */
  recipeArn: string | undefined;
}

/**
 * <p>Provides information about a recipe. Each recipe provides an algorithm
 *       that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *       operation. </p>
 * @public
 */
export interface Recipe {
  /**
   * <p>The name of the recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train
   *       the model.</p>
   * @public
   */
  algorithmArn?: string | undefined;

  /**
   * <p>The ARN of the FeatureTransformation object.</p>
   * @public
   */
  featureTransformationArn?: string | undefined;

  /**
   * <p>The status of the recipe.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The description of the recipe.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time (in Unix format) that the recipe was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PERSONALIZED_RANKING</p>
   *             </li>
   *             <li>
   *                <p>RELATED_ITEMS</p>
   *             </li>
   *             <li>
   *                <p>USER_PERSONALIZATION</p>
   *             </li>
   *          </ul>
   * @public
   */
  recipeType?: string | undefined;

  /**
   * <p>The date and time (in Unix format) that the recipe was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeResponse {
  /**
   * <p>An object that describes the recipe.</p>
   * @public
   */
  recipe?: Recipe | undefined;
}

/**
 * @public
 */
export interface DescribeRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to describe.</p>
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * <p>Provides a summary of the properties of a recommender update. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API.</p>
 * @public
 */
export interface RecommenderUpdateSummary {
  /**
   * <p>The configuration details of the recommender update.</p>
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * <p>The date and time (in Unix format) that the recommender update was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the recommender update was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The status of the recommender update. A recommender update can be in one of the following states:</p>
   *          <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If a recommender update fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group
 *       for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.</p>
 * @public
 */
export interface Recommender {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The name of the recommender.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.
   * </p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * <p>The date and time (in Unix format) that the recommender was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix format) that the recommender was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The status of the recommender.</p>
   *          <p>A recommender can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If a recommender fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Provides a summary of the latest updates to the recommender. </p>
   * @public
   */
  latestRecommenderUpdate?: RecommenderUpdateSummary | undefined;

  /**
   * <p>Provides evaluation metrics that help you determine the performance
   *     of a recommender. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/evaluating-recommenders.html">
   *         Evaluating a recommender</a>.</p>
   * @public
   */
  modelMetrics?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface DescribeRecommenderResponse {
  /**
   * <p>The properties of the recommender.</p>
   * @public
   */
  recommender?: Recommender | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to retrieve.</p>
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * <p>Describes the schema for a dataset. For more information on schemas, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
 * @public
 */
export interface DatasetSchema {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * <p>The schema.</p>
   * @public
   */
  schema?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The domain of a schema that you created for a dataset in a Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaResponse {
  /**
   * <p>The requested schema.</p>
   * @public
   */
  schema?: DatasetSchema | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to describe.</p>
   * @public
   */
  solutionArn: string | undefined;
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the
 *       specified metric.</p>
 * @public
 */
export interface AutoMLResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the best recipe.</p>
   * @public
   */
  bestRecipeArn?: string | undefined;
}

/**
 * <p>The configuration details of the solution update.</p>
 * @public
 */
export interface SolutionUpdateConfig {
  /**
   * <p>The automatic training configuration to use when <code>performAutoTraining</code> is true.</p>
   * @public
   */
  autoTrainingConfig?: AutoTrainingConfig | undefined;

  /**
   * <p>Describes the configuration of an event, which includes a list of event parameters. You can specify up to 10 event parameters. Events are used in solution creation.</p>
   * @public
   */
  eventsConfig?: EventsConfig | undefined;
}

/**
 * <p>Provides a summary of the properties of a solution update. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.</p>
 * @public
 */
export interface SolutionUpdateSummary {
  /**
   * <p>The configuration details of the solution.</p>
   * @public
   */
  solutionUpdateConfig?: SolutionUpdateConfig | undefined;

  /**
   * <p>The status of the solution update. A solution update can be in one of the following states:</p>
   *          <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>Whether the solution automatically creates solution versions.</p>
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates whether incremental training updates are performed on the model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.</p>
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * <p>The date and time (in Unix format) that the solution update was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the solution update was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a solution update fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Provides a summary of the properties of a solution version. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API.</p>
 * @public
 */
export interface SolutionVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The status of the solution version.</p>
   *          <p>A solution version can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The scope of training to be performed when creating the solution version. A
   *       <code>FULL</code> training considers all of the data in your dataset group.
   *       An <code>UPDATE</code> processes only the data that
   *       has changed since the latest training. Only solution versions created with the User-Personalization
   *       recipe can use <code>UPDATE</code>.
   *     </p>
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * <p>Whether the solution version was created automatically or manually.</p>
   * @public
   */
  trainingType?: TrainingType | undefined;

  /**
   * <p>The date and time (in Unix time) that this version of a solution was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the solution version was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a solution version fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <important>
 *             <p>By default, all new solutions use automatic training. With automatic training, you incur training costs while
 *            your solution is active. To avoid unnecessary costs, when you are finished you can
 *            <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html">update the solution</a> to turn off automatic training.
 *            For information about training
 *   costs, see <a href="https://aws.amazon.com/personalize/pricing/">Amazon Personalize pricing</a>.</p>
 *          </important>
 *          <p>An object that provides information about a solution. A solution includes the custom recipe, customized parameters, and
 *       trained models (Solution Versions) that Amazon Personalize uses to generate recommendations. </p>
 *          <p>After you create a solution, you can’t change its configuration. If you need to make changes, you can <a href="https://docs.aws.amazon.com/personalize/latest/dg/cloning-solution.html">clone the solution</a> with the Amazon Personalize console
 *       or create a new one.</p>
 * @public
 */
export interface Solution {
  /**
   * <p>The name of the solution.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the solution.</p>
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The
   *       default is <code>false</code>.</p>
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * <important>
   *             <p>We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize
   *         recipes. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/determining-use-case.html">Determining your use case.</a>
   *             </p>
   *          </important>
   *          <p>When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from
   *       the list specified in the solution configuration (<code>recipeArn</code> must not be specified).
   *       When false (the default), Amazon Personalize uses <code>recipeArn</code> for training.</p>
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * <p>Specifies whether the solution automatically creates solution versions. The default is <code>True</code>
   *       and the solution automatically creates new solution versions every 7 days.</p>
   *          <p>For more information about auto training, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html">Creating and configuring a solution</a>.</p>
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * <p>A Boolean value that indicates whether incremental training updates are performed on the model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe</p>
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * <p>The ARN of the recipe used to create the solution. This is required when
   *       <code>performAutoML</code> is false.</p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the model.
   *       If no <code>eventType</code> is provided, Amazon Personalize uses all interactions for training with
   *       equal weight regardless of type.</p>
   * @public
   */
  eventType?: string | undefined;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * <p>When <code>performAutoML</code> is true, specifies the best recipe found.</p>
   * @public
   */
  autoMLResult?: AutoMLResult | undefined;

  /**
   * <p>The status of the solution.</p>
   *          <p>A solution can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the solution.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>Describes the latest version of the solution, including the status and the ARN.</p>
   * @public
   */
  latestSolutionVersion?: SolutionVersionSummary | undefined;

  /**
   * <p>Provides a summary of the latest updates to the solution.</p>
   * @public
   */
  latestSolutionUpdate?: SolutionUpdateSummary | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionResponse {
  /**
   * <p>An object that describes the solution.</p>
   * @public
   */
  solution?: Solution | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * <p>If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of
 *       the best performing model.</p>
 * @public
 */
export interface TunedHPOParams {
  /**
   * <p>A list of the hyperparameter values of the best performing model.</p>
   * @public
   */
  algorithmHyperParameters?: Record<string, string> | undefined;
}

/**
 * <p>An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group.</p>
 * @public
 */
export interface SolutionVersion {
  /**
   * <p>The name of the solution version.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the solution version.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The ARN of the solution.</p>
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is
   *         <code>false</code>.</p>
   * @public
   */
  performHPO?: boolean | undefined;

  /**
   * <p>When true, Amazon Personalize searches for the most optimal recipe according to the solution
   *       configuration. When false (the default), Amazon Personalize uses <code>recipeArn</code>.</p>
   * @public
   */
  performAutoML?: boolean | undefined;

  /**
   * <p>Whether the solution version should perform an incremental update. When set to true,
   *       the training will process only the data that has changed since the latest training, similar
   *       to when trainingMode is set to UPDATE. This can only be used with solution versions that
   *       use the User-Personalization recipe.</p>
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * <p>The ARN of the recipe used in the solution.</p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the
   *       model.</p>
   * @public
   */
  eventType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group providing the training data.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   * @public
   */
  solutionConfig?: SolutionConfig | undefined;

  /**
   * <p>The time used to train the model. You are billed for the time it takes to train a model.
   *       This field is visible only after Amazon Personalize successfully trains a model.</p>
   * @public
   */
  trainingHours?: number | undefined;

  /**
   * <p>The scope of training to be performed when creating the solution version. A
   *       <code>FULL</code> training considers all of the data in your dataset group.
   *       An <code>UPDATE</code> processes only the data that
   *       has changed since the latest training. Only solution versions created with the User-Personalization
   *       recipe can use <code>UPDATE</code>.
   *     </p>
   * @public
   */
  trainingMode?: TrainingMode | undefined;

  /**
   * <p>If hyperparameter optimization was performed, contains the hyperparameter values of the
   *       best performing model.</p>
   * @public
   */
  tunedHPOParams?: TunedHPOParams | undefined;

  /**
   * <p>The status of the solution version.</p>
   *          <p>A solution version can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING</p>
   *             </li>
   *             <li>
   *                <p>CREATE IN_PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>CREATE STOPPING</p>
   *             </li>
   *             <li>
   *                <p>CREATE STOPPED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>If training a solution version fails, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date and
   *       time
   *       (in Unix time) that this version of the solution was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in
   *       Unix
   *       time) that the solution was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>Whether the solution version was created automatically or manually.</p>
   * @public
   */
  trainingType?: TrainingType | undefined;
}

/**
 * @public
 */
export interface DescribeSolutionVersionResponse {
  /**
   * <p>The solution version.</p>
   * @public
   */
  solutionVersion?: SolutionVersion | undefined;
}

/**
 * @public
 */
export interface GetSolutionMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version for which to get metrics.</p>
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * @public
 */
export interface GetSolutionMetricsResponse {
  /**
   * <p>The same solution version ARN as specified in the request.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The metrics for the solution version. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/working-with-training-metrics.html">
   *         Evaluating a solution version with metrics
   *       </a>.</p>
   * @public
   */
  metrics?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface ListBatchInferenceJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs
   *       were created.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of batch inference job results to return in each page. The default
   *       value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job
 *       summaries.</p>
 * @public
 */
export interface BatchInferenceJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  batchInferenceJobArn?: string | undefined;

  /**
   * <p>The name of the batch inference job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The status of the batch inference job. The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING</p>
   *             </li>
   *             <li>
   *                <p>IN PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The time at which the batch inference job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the batch inference job was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If the batch inference job failed, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The ARN of the solution version used by the batch inference job.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The job's mode.</p>
   * @public
   */
  batchInferenceJobMode?: BatchInferenceJobMode | undefined;
}

/**
 * @public
 */
export interface ListBatchInferenceJobsResponse {
  /**
   * <p>A list containing information on each job that is returned.</p>
   * @public
   */
  batchInferenceJobs?: BatchInferenceJobSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when
   *       there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchSegmentJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version that the batch segment jobs used to generate batch segments.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of batch segment job results to return in each page. The default
   *       value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype.
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job
 *       summaries.</p>
 * @public
 */
export interface BatchSegmentJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch segment job.</p>
   * @public
   */
  batchSegmentJobArn?: string | undefined;

  /**
   * <p>The name of the batch segment job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The status of the batch segment job. The status is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING</p>
   *             </li>
   *             <li>
   *                <p>IN PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The time at which the batch segment job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the batch segment job was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If the batch segment job failed, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.</p>
   * @public
   */
  solutionVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchSegmentJobsResponse {
  /**
   * <p>A list containing information on each job that is returned.</p>
   * @public
   */
  batchSegmentJobs?: BatchSegmentJobSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when
   *       there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to list the campaigns for. When
   *       a solution is not specified, all the campaigns associated with the account are listed.</p>
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> for getting
   *       the next set of campaigns (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of campaigns to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a campaign. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
 * @public
 */
export interface CampaignSummary {
  /**
   * <p>The name of the campaign.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   * @public
   */
  campaignArn?: string | undefined;

  /**
   * <p>The status of the campaign.</p>
   *          <p>A campaign can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the campaign was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the campaign was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * <p>A list of the campaigns.</p>
   * @public
   */
  campaigns?: CampaignSummary[] | undefined;

  /**
   * <p>A token for getting the next set of campaigns (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataDeletionJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to list data deletion jobs for.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to
   *       <code>ListDataDeletionJobs</code> for getting the next set of jobs (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of data deletion jobs to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a data deletion job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html">DescribeDataDeletionJob</a>
 *       API operation.</p>
 * @public
 */
export interface DataDeletionJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the data deletion job.</p>
   * @public
   */
  dataDeletionJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group the job deleted records from.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The name of the data deletion job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The status of the data deletion job.</p>
   *          <p>A data deletion job can have one of the following statuses:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING > IN_PROGRESS > COMPLETED -or- FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The creation date and time (in Unix time) of the data deletion
   *       job.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) the data deletion job was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a data deletion job fails, provides the reason why.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListDataDeletionJobsResponse {
  /**
   * <p>The list of data deletion jobs.</p>
   * @public
   */
  dataDeletionJobs?: DataDeletionJobSummary[] | undefined;

  /**
   * <p>A token for getting the next set of data deletion jobs (if they
   *       exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetExportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset
   *       export jobs for.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetExportJobs</code> for getting the next set of dataset
   *       export jobs (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of dataset export jobs to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a dataset export job. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API.</p>
 * @public
 */
export interface DatasetExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   * @public
   */
  datasetExportJobArn?: string | undefined;

  /**
   * <p>The name of the dataset export job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The status of the dataset export job.</p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset export job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset export job status was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a dataset export job fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetExportJobsResponse {
  /**
   * <p>The list of dataset export jobs.</p>
   * @public
   */
  datasetExportJobs?: DatasetExportJobSummary[] | undefined;

  /**
   * <p>A token for getting the next set of dataset export jobs (if they
   *       exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsRequest {
  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetGroups</code> for getting the next set of dataset
   *       groups (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of dataset groups to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a dataset group. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API.</p>
 * @public
 */
export interface DatasetGroupSummary {
  /**
   * <p>The name of the dataset group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The status of the dataset group.</p>
   *          <p>A dataset group can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset group was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset group was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If creating a dataset group fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The domain of a Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsResponse {
  /**
   * <p>The list of your dataset groups.</p>
   * @public
   */
  datasetGroups?: DatasetGroupSummary[] | undefined;

  /**
   * <p>A token for getting the next set of dataset groups (if they
   *       exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset
   *       import jobs for.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetImportJobs</code> for getting the next set of dataset
   *       import jobs (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of dataset import jobs to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a dataset import job. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API.</p>
 * @public
 */
export interface DatasetImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   * @public
   */
  datasetImportJobArn?: string | undefined;

  /**
   * <p>The name of the dataset import job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The status of the dataset import job.</p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset import job was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset import job status was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>If a dataset import job fails, the reason behind the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The import mode the dataset import job used to update the data in the dataset.
   *       For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-existing-bulk-data.html">Updating existing bulk
   *       data</a>.
   *     </p>
   * @public
   */
  importMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsResponse {
  /**
   * <p>The list of dataset import jobs.</p>
   * @public
   */
  datasetImportJobs?: DatasetImportJobSummary[] | undefined;

  /**
   * <p>A token for getting the next set of dataset import jobs (if they
   *       exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the
   *       datasets to list.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasets</code> for getting the next set of dataset
   *       import jobs (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of datasets to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a dataset. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The dataset type. One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Interactions</p>
   *             </li>
   *             <li>
   *                <p>Items</p>
   *             </li>
   *             <li>
   *                <p>Users</p>
   *             </li>
   *             <li>
   *                <p>Event-Interactions</p>
   *             </li>
   *          </ul>
   * @public
   */
  datasetType?: string | undefined;

  /**
   * <p>The status of the dataset.</p>
   *          <p>A dataset can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the dataset was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>An array of <code>Dataset</code> objects. Each object provides
   *       metadata information.</p>
   * @public
   */
  datasets?: DatasetSummary[] | undefined;

  /**
   * <p>A token for getting the next set of datasets (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventTrackersRequest {
  /**
   * <p>The ARN of a dataset group used to filter the response.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListEventTrackers</code> for getting
   *       the next set of event trackers (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of event trackers to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of an event tracker. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API.</p>
 * @public
 */
export interface EventTrackerSummary {
  /**
   * <p>The name of the event tracker.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker.</p>
   * @public
   */
  eventTrackerArn?: string | undefined;

  /**
   * <p>The status of the event tracker.</p>
   *          <p>An event tracker can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the event tracker was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventTrackersResponse {
  /**
   * <p>A list of event trackers.</p>
   * @public
   */
  eventTrackers?: EventTrackerSummary[] | undefined;

  /**
   * <p>A token for getting the next set of event trackers (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * <p>The ARN of the dataset group that contains the filters.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListFilters</code> for getting the
   *             next set of filters (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of filters to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A short summary of a filter's attributes.</p>
 * @public
 */
export interface FilterSummary {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the filter.</p>
   * @public
   */
  filterArn?: string | undefined;

  /**
   * <p>The time at which the filter was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The time at which the filter was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The ARN of the dataset group to which the filter belongs.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>If the filter failed, the reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The status of the filter.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * <p>A list of returned filters.</p>
   * @public
   */
  Filters?: FilterSummary[] | undefined;

  /**
   * <p>A token for getting the next set of filters (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the metric attribution to retrieve attributes for.</p>
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of metrics to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionMetricsResponse {
  /**
   * <p>The metrics for the specified metric attribution.</p>
   * @public
   */
  metrics?: MetricAttribute[] | undefined;

  /**
   * <p>Specify the pagination token from a previous <code>ListMetricAttributionMetricsResponse</code> request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionsRequest {
  /**
   * <p>The metric attributions' dataset group Amazon Resource Name (ARN).</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of metric attributions to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>.</p>
 * @public
 */
export interface MetricAttributionSummary {
  /**
   * <p>The name of the metric attribution.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   * @public
   */
  metricAttributionArn?: string | undefined;

  /**
   * <p>The metric attribution's status.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The metric attribution's creation date time.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The metric attribution's last updated date time.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The metric attribution's failure reason.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricAttributionsResponse {
  /**
   * <p>The list of metric attributions.</p>
   * @public
   */
  metricAttributions?: MetricAttributionSummary[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesRequest {
  /**
   * <p>The default is <code>SERVICE</code>.</p>
   * @public
   */
  recipeProvider?: RecipeProvider | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListRecipes</code> for getting
   *       the next set of recipes (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of recipes to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       Filters returned recipes by domain for a Domain dataset group. Only recipes (Domain dataset group use cases)
   *       for this domain are included in the response. If you don't specify a domain, all recipes are returned.
   *     </p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * <p>Provides a summary of the properties of a recipe. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API.</p>
 * @public
 */
export interface RecipeSummary {
  /**
   * <p>The name of the recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The status of the recipe.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the recipe was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the recipe was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The domain of the recipe (if the recipe is a Domain dataset group use case).</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListRecipesResponse {
  /**
   * <p>The list of available recipes.</p>
   * @public
   */
  recipes?: RecipeSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recipes.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group to list the recommenders for. When
   *       a Domain dataset group is not specified, all the recommenders associated with the account are listed.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListRecommenders</code> for getting
   *       the next set of recommenders (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of recommenders to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of the recommender.</p>
 * @public
 */
export interface RecommenderSummary {
  /**
   * <p>The name of the recommender.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   * @public
   */
  recommenderArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.</p>
   * @public
   */
  recipeArn?: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   * @public
   */
  recommenderConfig?: RecommenderConfig | undefined;

  /**
   * <p>The status of the recommender. A recommender can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix format) that the recommender was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix format) that the recommender was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRecommendersResponse {
  /**
   * <p>A list of the recommenders.</p>
   * @public
   */
  recommenders?: RecommenderSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recommenders (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasRequest {
  /**
   * <p>A token returned from the previous call to <code>ListSchemas</code> for getting
   *       the next set of schemas (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of schemas to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a dataset schema. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API.</p>
 * @public
 */
export interface DatasetSchemaSummary {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  schemaArn?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The domain of a schema that you created for a dataset in a Domain dataset group.</p>
   * @public
   */
  domain?: Domain | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>A list of schemas.</p>
   * @public
   */
  schemas?: DatasetSchemaSummary[] | undefined;

  /**
   * <p>A token used to get the next set of schemas (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  datasetGroupArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListSolutions</code> for getting
   *       the next set of solutions (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of solutions to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the properties of a solution. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.</p>
 * @public
 */
export interface SolutionSummary {
  /**
   * <p>The name of the solution.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution.</p>
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * <p>The status of the solution.</p>
   *          <p>A solution can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The date and time (in Unix time) that the solution was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe used by the solution.</p>
   * @public
   */
  recipeArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionsResponse {
  /**
   * <p>A list of the current solutions.</p>
   * @public
   */
  solutions?: SolutionSummary[] | undefined;

  /**
   * <p>A token for getting the next set of solutions (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution.</p>
   * @public
   */
  solutionArn?: string | undefined;

  /**
   * <p>A token returned from the previous call to <code>ListSolutionVersions</code> for getting
   *       the next set of solution versions (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of solution versions to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSolutionVersionsResponse {
  /**
   * <p>A list of solution versions describing the version properties.</p>
   * @public
   */
  solutionVersions?: SolutionVersionSummary[] | undefined;

  /**
   * <p>A token for getting the next set of solution versions (if they exist).</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The resource's tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to start.</p>
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface StartRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender you started.</p>
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface StopRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to stop.</p>
   * @public
   */
  recommenderArn: string | undefined;
}

/**
 * @public
 */
export interface StopRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender you stopped.</p>
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface StopSolutionVersionCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version you want to stop creating.</p>
   * @public
   */
  solutionVersionArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags to apply to the resource. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">Tagging Amazon Personalize resources</a>.</p>
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
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
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
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   * @public
   */
  campaignArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a new model to deploy. To specify the latest solution version of your solution,
   *       specify the ARN of your <i>solution</i> in <code>SolutionArn/$LATEST</code> format.
   *       You must use this format if you set <code>syncWithLatestSolutionVersion</code> to <code>True</code> in the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CampaignConfig.html">CampaignConfig</a>.
   *     </p>
   *          <p>
   *       To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.
   *     </p>
   *          <p>
   *       For more information about automatic campaign updates, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html#create-campaign-automatic-latest-sv-update">Enabling automatic campaign updates</a>.
   *     </p>
   * @public
   */
  solutionVersionArn?: string | undefined;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support. A high <code>minProvisionedTPS</code> will increase your bill. We recommend starting with 1 for <code>minProvisionedTPS</code> (the default). Track
   *       your usage using Amazon CloudWatch metrics, and increase the <code>minProvisionedTPS</code>
   *       as necessary.</p>
   * @public
   */
  minProvisionedTPS?: number | undefined;

  /**
   * <p>The configuration details of a campaign.</p>
   * @public
   */
  campaignConfig?: CampaignConfig | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * <p>The same campaign ARN as given in the request.</p>
   * @public
   */
  campaignArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want to update.</p>
   * @public
   */
  datasetArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new schema you want use.</p>
   * @public
   */
  schemaArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset you updated.</p>
   * @public
   */
  datasetArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricAttributionRequest {
  /**
   * <p>Add new metric attributes to the metric attribution.</p>
   * @public
   */
  addMetrics?: MetricAttribute[] | undefined;

  /**
   * <p>Remove metric attributes from the metric attribution.</p>
   * @public
   */
  removeMetrics?: string[] | undefined;

  /**
   * <p>An output config for the metric attribution.</p>
   * @public
   */
  metricsOutputConfig?: MetricAttributionOutput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the metric attribution to update.</p>
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricAttributionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the metric attribution that you updated.</p>
   * @public
   */
  metricAttributionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to modify.</p>
   * @public
   */
  recommenderArn: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   * @public
   */
  recommenderConfig: RecommenderConfig | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderResponse {
  /**
   * <p>The same recommender Amazon Resource Name (ARN) as given in the request.</p>
   * @public
   */
  recommenderArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSolutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to update.</p>
   * @public
   */
  solutionArn: string | undefined;

  /**
   * <p>Whether the solution uses automatic training to create new solution versions (trained models). You can change the training
   *       frequency by specifying a <code>schedulingExpression</code> in the <code>AutoTrainingConfig</code> as part of solution
   *       configuration. </p>
   *          <p>
   *       If you turn on automatic training, the first automatic training starts within one hour after the solution update
   *       completes. If you manually create a solution version within the hour, the solution skips the first automatic training.
   *       For more information about automatic training,
   *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html">Configuring automatic training</a>.
   *     </p>
   *          <p>
   *       After training starts, you can
   *       get the solution version's Amazon Resource Name (ARN) with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> API operation.
   *       To get its status, use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>.
   *     </p>
   * @public
   */
  performAutoTraining?: boolean | undefined;

  /**
   * <p>Whether to perform incremental training updates on your model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.</p>
   * @public
   */
  performIncrementalUpdate?: boolean | undefined;

  /**
   * <p>The new configuration details of the solution.</p>
   * @public
   */
  solutionUpdateConfig?: SolutionUpdateConfig | undefined;
}

/**
 * @public
 */
export interface UpdateSolutionResponse {
  /**
   * <p>The same solution Amazon Resource Name (ARN) as given in the request.</p>
   * @public
   */
  solutionArn?: string | undefined;
}
