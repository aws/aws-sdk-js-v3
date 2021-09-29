import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Describes an algorithm image.</p>
 */
export interface AlgorithmImage {
  /**
   * <p>The name of the algorithm image.</p>
   */
  name?: string;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   */
  dockerURI: string | undefined;
}

export namespace AlgorithmImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlgorithmImage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and default range of a categorical hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultCategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: string[];

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   */
  isTunable?: boolean;
}

export namespace DefaultCategoricalHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultCategoricalHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and default range of a continuous hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultContinuousHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   */
  maxValue?: number;

  /**
   * <p>Whether the hyperparameter is tunable.</p>
   */
  isTunable?: boolean;
}

export namespace DefaultContinuousHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultContinuousHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and default range of a integer-valued hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultIntegerHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   */
  maxValue?: number;

  /**
   * <p>Indicates whether the hyperparameter is tunable.</p>
   */
  isTunable?: boolean;
}

export namespace DefaultIntegerHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultIntegerHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the hyperparameters and their default ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface DefaultHyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their default ranges.</p>
   */
  integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];

  /**
   * <p>The continuous hyperparameters and their default ranges.</p>
   */
  continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];

  /**
   * <p>The categorical hyperparameters and their default ranges.</p>
   */
  categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];
}

export namespace DefaultHyperParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultHyperParameterRanges): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a custom algorithm.</p>
 */
export interface Algorithm {
  /**
   * <p>The name of the algorithm.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  algorithmArn?: string;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   */
  algorithmImage?: AlgorithmImage;

  /**
   * <p>Specifies the default hyperparameters.</p>
   */
  defaultHyperParameters?: { [key: string]: string };

  /**
   * <p>Specifies the default hyperparameters, their ranges, and whether they
   *       are tunable. A tunable hyperparameter can
   *       have its value determined during hyperparameter optimization (HPO).</p>
   */
  defaultHyperParameterRanges?: DefaultHyperParameterRanges;

  /**
   * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
   */
  defaultResourceConfig?: { [key: string]: string };

  /**
   * <p>The training input mode.</p>
   */
  trainingInputMode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  roleArn?: string;

  /**
   * <p>The date and time (in Unix time) that the algorithm was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the algorithm was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace Algorithm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Algorithm): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration details of a batch inference job.</p>
 */
export interface BatchInferenceJobConfig {
  /**
   * <p>A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items.
   *       See <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>.</p>
   */
  itemExplorationConfig?: { [key: string]: string };
}

export namespace BatchInferenceJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchInferenceJobConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration details of an Amazon S3 input or output bucket.</p>
 */
export interface S3DataConfig {
  /**
   * <p>The file path of the Amazon S3 bucket.</p>
   */
  path: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key that Amazon Personalize uses to
   *       encrypt or decrypt the input and output files of a batch inference job.</p>
   */
  kmsKeyArn?: string;
}

export namespace S3DataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The input configuration of a batch inference job.</p>
 */
export interface BatchInferenceJobInput {
  /**
   * <p>The URI of the Amazon S3 location that contains your input data. The Amazon S3 bucket must be in the
   *       same region as the API endpoint you are calling.</p>
   */
  s3DataSource: S3DataConfig | undefined;
}

export namespace BatchInferenceJobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchInferenceJobInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output configuration parameters of a batch inference job.</p>
 */
export interface BatchInferenceJobOutput {
  /**
   * <p>Information on the Amazon S3 bucket in which the batch inference job's output is stored.</p>
   */
  s3DataDestination: S3DataConfig | undefined;
}

export namespace BatchInferenceJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchInferenceJobOutput): any => ({
    ...obj,
  });
}

export interface CreateBatchInferenceJobRequest {
  /**
   * <p>The name of the batch inference job to create.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version that will be used to generate the
   *       batch inference recommendations.</p>
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>The ARN of the filter to apply to the batch inference job. For more information on using
   *       filters, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering Batch Recommendations</a>..</p>
   */
  filterArn?: string;

  /**
   * <p>The number of recommendations to retreive.</p>
   */
  numResults?: number;

  /**
   * <p>The Amazon S3 path that leads to the input file to base your recommendations on. The input
   *       material must be in JSON format.</p>
   */
  jobInput: BatchInferenceJobInput | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output will be stored.</p>
   */
  jobOutput: BatchInferenceJobOutput | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output
   *       Amazon S3 buckets respectively.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The configuration details of a batch inference job.</p>
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig;
}

export namespace CreateBatchInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface CreateBatchInferenceJobResponse {
  /**
   * <p>The ARN of the batch inference job.</p>
   */
  batchInferenceJobArn?: string;
}

export namespace CreateBatchInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchInferenceJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>Could not find the specified resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration details of a campaign.</p>
 */
export interface CampaignConfig {
  /**
   * <p>A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items. Provide <code>itemExplorationConfig</code> data only if your solution uses the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe.</p>
   */
  itemExplorationConfig?: { [key: string]: string };
}

export namespace CampaignConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CampaignConfig): any => ({
    ...obj,
  });
}

export interface CreateCampaignRequest {
  /**
   * <p>A name for the new campaign. The campaign name must be unique within your account.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version to deploy.</p>
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support.</p>
   */
  minProvisionedTPS?: number;

  /**
   * <p>The configuration details of a campaign.</p>
   */
  campaignConfig?: CampaignConfig;
}

export namespace CreateCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCampaignRequest): any => ({
    ...obj,
  });
}

export interface CreateCampaignResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn?: string;
}

export namespace CreateCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCampaignResponse): any => ({
    ...obj,
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>The name for the dataset.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the schema to associate with the dataset. The schema defines the dataset
   *       fields.</p>
   */
  schemaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to add the dataset to.</p>
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
   *          </ul>
   */
  datasetType: string | undefined;
}

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  datasetArn?: string;
}

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

export enum IngestionMode {
  ALL = "ALL",
  BULK = "BULK",
  PUT = "PUT",
}

/**
 * <p>The output configuration parameters of a dataset export job.</p>
 */
export interface DatasetExportJobOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   */
  s3DataDestination: S3DataConfig | undefined;
}

export namespace DatasetExportJobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetExportJobOutput): any => ({
    ...obj,
  });
}

export interface CreateDatasetExportJobRequest {
  /**
   * <p>The name for the dataset export job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains the data to export.</p>
   */
  datasetArn: string | undefined;

  /**
   * <p>The data to export, based on how you imported the data. You can choose to export only <code>BULK</code> data that you imported using a dataset import job,
   *       only <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
   *       for both types. The default value is <code>PUT</code>.
   *     </p>
   */
  ingestionMode?: IngestionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your
   *       output Amazon S3 bucket.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored.</p>
   */
  jobOutput: DatasetExportJobOutput | undefined;
}

export namespace CreateDatasetExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetExportJobRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   */
  datasetExportJobArn?: string;
}

export namespace CreateDatasetExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetExportJobResponse): any => ({
    ...obj,
  });
}

export interface CreateDatasetGroupRequest {
  /**
   * <p>The name for the new dataset group.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM
   *       role is only valid when also specifying a KMS key.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to encrypt the datasets.</p>
   */
  kmsKeyArn?: string;
}

export namespace CreateDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new dataset group.</p>
   */
  datasetGroupArn?: string;
}

export namespace CreateDatasetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data source that contains the data to upload to a dataset.</p>
 */
export interface DataSource {
  /**
   * <p>The path to the Amazon S3 bucket where the data that you want to upload to your dataset is
   *       stored. For example: </p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   */
  dataLocation?: string;
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
}

export interface CreateDatasetImportJobRequest {
  /**
   * <p>The name for the dataset import job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The ARN of the dataset that receives the imported data.</p>
   */
  datasetArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource: DataSource | undefined;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3 data source.</p>
   */
  roleArn: string | undefined;
}

export namespace CreateDatasetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetImportJobRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetImportJobResponse {
  /**
   * <p>The ARN of the dataset import job.</p>
   */
  datasetImportJobArn?: string;
}

export namespace CreateDatasetImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetImportJobResponse): any => ({
    ...obj,
  });
}

export interface CreateEventTrackerRequest {
  /**
   * <p>The name for the event tracker.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
   */
  datasetGroupArn: string | undefined;
}

export namespace CreateEventTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventTrackerRequest): any => ({
    ...obj,
  });
}

export interface CreateEventTrackerResponse {
  /**
   * <p>The ARN of the event tracker.</p>
   */
  eventTrackerArn?: string;

  /**
   * <p>The ID of the event tracker. Include this ID in requests to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   */
  trackingId?: string;
}

export namespace CreateEventTrackerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventTrackerResponse): any => ({
    ...obj,
  });
}

export interface CreateFilterRequest {
  /**
   * <p>The name of the filter to create.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the dataset group that the filter will belong to.</p>
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules.
   *             For information about filter expression structure and syntax, see
   *              <a>filter-expressions</a>.</p>
   */
  filterExpression: string | undefined;
}

export namespace CreateFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFilterRequest): any => ({
    ...obj,
    ...(obj.filterExpression && { filterExpression: SENSITIVE_STRING }),
  });
}

export interface CreateFilterResponse {
  /**
   * <p>The ARN of the new filter.</p>
   */
  filterArn?: string;
}

export namespace CreateFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFilterResponse): any => ({
    ...obj,
  });
}

export interface CreateSchemaRequest {
  /**
   * <p>The name for the schema.</p>
   */
  name: string | undefined;

  /**
   * <p>A schema in Avro JSON format.</p>
   */
  schema: string | undefined;
}

export namespace CreateSchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSchemaRequest): any => ({
    ...obj,
  });
}

export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created schema.</p>
   */
  schemaArn?: string;
}

export namespace CreateSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSchemaResponse): any => ({
    ...obj,
  });
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a>CreateSolution</a>), Amazon Personalize
 *       determines which recipe, from the specified list, optimizes the given metric.
 *       Amazon Personalize then uses that recipe for the solution.</p>
 */
export interface AutoMLConfig {
  /**
   * <p>The metric to optimize.</p>
   */
  metricName?: string;

  /**
   * <p>The list of candidate recipes.</p>
   */
  recipeList?: string[];
}

export namespace AutoMLConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and range of a categorical hyperparameter.</p>
 */
export interface CategoricalHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>A list of the categories for the hyperparameter.</p>
   */
  values?: string[];
}

export namespace CategoricalHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and range of a continuous hyperparameter.</p>
 */
export interface ContinuousHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   */
  maxValue?: number;
}

export namespace ContinuousHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name and range of an integer-valued hyperparameter.</p>
 */
export interface IntegerHyperParameterRange {
  /**
   * <p>The name of the hyperparameter.</p>
   */
  name?: string;

  /**
   * <p>The minimum allowable value for the hyperparameter.</p>
   */
  minValue?: number;

  /**
   * <p>The maximum allowable value for the hyperparameter.</p>
   */
  maxValue?: number;
}

export namespace IntegerHyperParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerHyperParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the hyperparameters and their ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface HyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their ranges.</p>
   */
  integerHyperParameterRanges?: IntegerHyperParameterRange[];

  /**
   * <p>The continuous hyperparameters and their ranges.</p>
   */
  continuousHyperParameterRanges?: ContinuousHyperParameterRange[];

  /**
   * <p>The categorical hyperparameters and their ranges.</p>
   */
  categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];
}

export namespace HyperParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterRanges): any => ({
    ...obj,
  });
}

/**
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         at this time.</p>
 *          </note>
 */
export interface HPOObjective {
  /**
   * <p>The type of the metric. Valid values are <code>Maximize</code> and <code>Minimize</code>.</p>
   */
  type?: string;

  /**
   * <p>The name of the metric.</p>
   */
  metricName?: string;

  /**
   * <p>A regular expression for finding the metric in the training job logs.</p>
   */
  metricRegex?: string;
}

export namespace HPOObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HPOObjective): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource configuration for hyperparameter optimization (HPO).</p>
 */
export interface HPOResourceConfig {
  /**
   * <p>The maximum number of training
   *       jobs when you create a
   *       solution
   *       version.
   *       The maximum value for <code>maxNumberOfTrainingJobs</code> is
   *       <code>40</code>.</p>
   */
  maxNumberOfTrainingJobs?: string;

  /**
   * <p>The maximum number of parallel training
   *       jobs when you create a
   *       solution
   *       version.
   *       The maximum value for <code>maxParallelTrainingJobs</code> is
   *       <code>10</code>.</p>
   */
  maxParallelTrainingJobs?: string;
}

export namespace HPOResourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HPOResourceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties for hyperparameter optimization (HPO).</p>
 */
export interface HPOConfig {
  /**
   * <p>The metric to optimize during HPO.</p>
   *          <note>
   *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
   *         at this time.</p>
   *          </note>
   */
  hpoObjective?: HPOObjective;

  /**
   * <p>Describes the resource configuration for HPO.</p>
   */
  hpoResourceConfig?: HPOResourceConfig;

  /**
   * <p>The hyperparameters and their allowable ranges.</p>
   */
  algorithmHyperParameterRanges?: HyperParameterRanges;
}

export namespace HPOConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HPOConfig): any => ({
    ...obj,
  });
}

export enum ObjectiveSensitivity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

/**
 * <p>Describes the additional objective for the solution, such as maximizing streaming
 *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
 */
export interface OptimizationObjective {
  /**
   * <p>The numerical metadata column in an Items dataset related to the optimization objective. For example, VIDEO_LENGTH (to maximize streaming minutes), or PRICE (to maximize revenue).</p>
   */
  itemAttribute?: string;

  /**
   * <p>Specifies how Amazon Personalize balances the importance of your optimization objective versus relevance.</p>
   */
  objectiveSensitivity?: ObjectiveSensitivity | string;
}

export namespace OptimizationObjective {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptimizationObjective): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration properties for the solution.</p>
 */
export interface SolutionConfig {
  /**
   * <p>Only events with a value greater than or equal to this threshold are
   *       used for training a model.</p>
   */
  eventValueThreshold?: string;

  /**
   * <p>Describes the properties for hyperparameter optimization (HPO).</p>
   */
  hpoConfig?: HPOConfig;

  /**
   * <p>Lists the hyperparameter names and ranges.</p>
   */
  algorithmHyperParameters?: { [key: string]: string };

  /**
   * <p>Lists the feature transformation parameters.</p>
   */
  featureTransformationParameters?: { [key: string]: string };

  /**
   * <p>The <a>AutoMLConfig</a> object containing a list of recipes to search
   *       when AutoML is performed.</p>
   */
  autoMLConfig?: AutoMLConfig;

  /**
   * <p>Describes the additional objective for the solution, such as maximizing streaming
   *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
   */
  optimizationObjective?: OptimizationObjective;
}

export namespace SolutionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SolutionConfig): any => ({
    ...obj,
  });
}

export interface CreateSolutionRequest {
  /**
   * <p>The name for the solution.</p>
   */
  name: string | undefined;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.
   *       The default is <code>false</code>.</p>
   *          <p>When performing AutoML, this parameter is always <code>true</code> and you
   *       should not set it to <code>false</code>.</p>
   */
  performHPO?: boolean;

  /**
   * <p>Whether to perform automated machine learning (AutoML). The default is <code>false</code>.
   *       For this case, you must specify <code>recipeArn</code>.</p>
   *          <p>When set to <code>true</code>, Amazon Personalize analyzes your training data and selects
   *       the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit
   *       <code>recipeArn</code>. Amazon Personalize determines the optimal recipe by running tests with
   *       different values for the hyperparameters.
   *       AutoML lengthens the training process as compared to selecting a specific recipe.</p>
   */
  performAutoML?: boolean;

  /**
   * <p>The ARN of the recipe to use for model training. Only specified when
   *       <code>performAutoML</code> is false.</p>
   */
  recipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>When your have multiple event types (using an <code>EVENT_TYPE</code> schema field),
   *       this parameter specifies which event type (for example, 'click' or 'like') is used for
   *       training the model.</p>
   *          <p>If you do not provide an <code>eventType</code>, Amazon Personalize will use all interactions for training with
   *        equal weight regardless of type.</p>
   */
  eventType?: string;

  /**
   * <p>The configuration to use with the solution. When <code>performAutoML</code> is set to
   *       true, Amazon Personalize only evaluates the <code>autoMLConfig</code> section
   *       of the solution configuration.</p>
   *          <note>
   *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
   *         at this time.</p>
   *          </note>
   */
  solutionConfig?: SolutionConfig;
}

export namespace CreateSolutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSolutionRequest): any => ({
    ...obj,
  });
}

export interface CreateSolutionResponse {
  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;
}

export namespace CreateSolutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSolutionResponse): any => ({
    ...obj,
  });
}

export enum TrainingMode {
  FULL = "FULL",
  UPDATE = "UPDATE",
}

export interface CreateSolutionVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution containing the training configuration
   *       information.</p>
   */
  solutionArn: string | undefined;

  /**
   * <p>The scope of training to be performed when creating the solution version. The
   *         <code>FULL</code> option trains the solution version based on the entirety of the input
   *       solution's training data, while the <code>UPDATE</code> option processes only the data that
   *       has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to
   *       incrementally update your solution version instead of creating an entirely new one.</p>
   *          <important>
   *             <p>The <code>UPDATE</code> option can only be used when you already have an active solution
   *         version created from the input solution using the <code>FULL</code> option and the input
   *         solution was trained with the
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>
   *         recipe or the
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p>
   *          </important>
   */
  trainingMode?: TrainingMode | string;
}

export namespace CreateSolutionVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSolutionVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateSolutionVersionResponse {
  /**
   * <p>The ARN of the new solution version.</p>
   */
  solutionVersionArn?: string;
}

export namespace CreateSolutionVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSolutionVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to delete.</p>
   */
  campaignArn: string | undefined;
}

export namespace DeleteCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   */
  datasetArn: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetGroupRequest {
  /**
   * <p>The ARN of the dataset group to delete.</p>
   */
  datasetGroupArn: string | undefined;
}

export namespace DeleteDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to delete.</p>
   */
  eventTrackerArn: string | undefined;
}

export namespace DeleteEventTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventTrackerRequest): any => ({
    ...obj,
  });
}

export interface DeleteFilterRequest {
  /**
   * <p>The ARN of the filter to delete.</p>
   */
  filterArn: string | undefined;
}

export namespace DeleteFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to delete.</p>
   */
  schemaArn: string | undefined;
}

export namespace DeleteSchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
    ...obj,
  });
}

export interface DeleteSolutionRequest {
  /**
   * <p>The ARN of the solution to delete.</p>
   */
  solutionArn: string | undefined;
}

export namespace DeleteSolutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSolutionRequest): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm to describe.</p>
   */
  algorithmArn: string | undefined;
}

export namespace DescribeAlgorithmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlgorithmRequest): any => ({
    ...obj,
  });
}

export interface DescribeAlgorithmResponse {
  /**
   * <p>A listing of the properties of the algorithm.</p>
   */
  algorithm?: Algorithm;
}

export namespace DescribeAlgorithmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlgorithmResponse): any => ({
    ...obj,
  });
}

export interface DescribeBatchInferenceJobRequest {
  /**
   * <p>The ARN of the batch inference job to describe.</p>
   */
  batchInferenceJobArn: string | undefined;
}

export namespace DescribeBatchInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBatchInferenceJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information on a batch inference job.</p>
 */
export interface BatchInferenceJob {
  /**
   * <p>The name of the batch inference job.</p>
   */
  jobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   */
  batchInferenceJobArn?: string;

  /**
   * <p>The ARN of the filter used on the batch inference job.</p>
   */
  filterArn?: string;

  /**
   * <p>If the batch inference job failed, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference job
   *       was created.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The number of recommendations generated by the batch inference job. This number includes
   *       the error messages generated for failed input records.</p>
   */
  numResults?: number;

  /**
   * <p>The Amazon S3 path that leads to the input data used to generate the batch inference
   *       job.</p>
   */
  jobInput?: BatchInferenceJobInput;

  /**
   * <p>The Amazon S3 bucket that contains the output data generated by the batch inference job.</p>
   */
  jobOutput?: BatchInferenceJobOutput;

  /**
   * <p>A string to string map of the configuration details of a batch inference job.</p>
   */
  batchInferenceJobConfig?: BatchInferenceJobConfig;

  /**
   * <p>The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch inference job.</p>
   */
  roleArn?: string;

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
   */
  status?: string;

  /**
   * <p>The time at which the batch inference job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the batch inference job was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace BatchInferenceJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchInferenceJob): any => ({
    ...obj,
  });
}

export interface DescribeBatchInferenceJobResponse {
  /**
   * <p>Information on the specified batch inference job.</p>
   */
  batchInferenceJob?: BatchInferenceJob;
}

export namespace DescribeBatchInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBatchInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn: string | undefined;
}

export namespace DescribeCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCampaignRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
 *       <a>DescribeCampaign</a> API.</p>
 */
export interface CampaignUpdateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployed solution version.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support.</p>
   */
  minProvisionedTPS?: number;

  /**
   * <p>The configuration details of a campaign.</p>
   */
  campaignConfig?: CampaignConfig;

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
   */
  status?: string;

  /**
   * <p>If a campaign update fails, the reason behind the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The date and time (in Unix time) that the campaign update was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the campaign update was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace CampaignUpdateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CampaignUpdateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a deployed solution version, otherwise known as a campaign.
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export interface Campaign {
  /**
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign. </p>
   */
  campaignArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a specific version of the solution.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second.</p>
   */
  minProvisionedTPS?: number;

  /**
   * <p>The configuration details of a campaign.</p>
   */
  campaignConfig?: CampaignConfig;

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
   */
  status?: string;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The date and time (in Unix format) that the campaign was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix format) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
   *       <a>DescribeCampaign</a> API.</p>
   */
  latestCampaignUpdate?: CampaignUpdateSummary;
}

export namespace Campaign {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Campaign): any => ({
    ...obj,
  });
}

export interface DescribeCampaignResponse {
  /**
   * <p>The properties of the campaign.</p>
   */
  campaign?: Campaign;
}

export namespace DescribeCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCampaignResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to describe.</p>
   */
  datasetArn: string | undefined;
}

export namespace DescribeDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides metadata for a dataset.</p>
 */
export interface Dataset {
  /**
   * <p>The name of the dataset.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want metadata for.</p>
   */
  datasetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

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
   *          </ul>
   */
  datasetType?: string;

  /**
   * <p>The ARN of the associated schema.</p>
   */
  schemaArn?: string;

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
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A time stamp that shows when the dataset was updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace Dataset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
}

export interface DescribeDatasetResponse {
  /**
   * <p>A listing of the dataset's properties.</p>
   */
  dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job to describe.</p>
   */
  datasetExportJobArn: string | undefined;
}

export namespace DescribeDatasetExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetExportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a>CreateDatasetExportJob</a>.</p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 */
export interface DatasetExportJob {
  /**
   * <p>The name of the export job.</p>
   */
  jobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   */
  datasetExportJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to export.</p>
   */
  datasetArn?: string;

  /**
   * <p>The data to export, based on how you imported the data. You can choose to export <code>BULK</code> data that you imported using a dataset import job,
   *       <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
   *       for both types. The default value is <code>PUT</code>.
   *     </p>
   */
  ingestionMode?: IngestionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your
   *       output Amazon S3 bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the dataset export job.</p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored.  For example:</p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   */
  jobOutput?: DatasetExportJobOutput;

  /**
   * <p>The creation date and time (in Unix time) of the dataset export job.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) the status of the dataset export job was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a dataset export job fails, provides the reason why.</p>
   */
  failureReason?: string;
}

export namespace DatasetExportJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetExportJob): any => ({
    ...obj,
  });
}

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
   */
  datasetExportJob?: DatasetExportJob;
}

export namespace DescribeDatasetExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetExportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to describe.</p>
   */
  datasetGroupArn: string | undefined;
}

export namespace DescribeDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You
 *       create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a
 *       dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset
 *       group is used to create and train a solution by calling <a>CreateSolution</a>. A
 *       dataset group can contain only one of each type of dataset.</p>
 *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>
 */
export interface DatasetGroup {
  /**
   * <p>The name of the dataset group.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The current status of the dataset group.</p>
   *          <p>A dataset group can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The ARN of the IAM role that has permissions to create the dataset group.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the datasets.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset group.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last update date and time (in Unix time) of the dataset group.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If creating a dataset group fails, provides the reason why.</p>
   */
  failureReason?: string;
}

export namespace DatasetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetGroup): any => ({
    ...obj,
  });
}

export interface DescribeDatasetGroupResponse {
  /**
   * <p>A listing of the dataset group's properties.</p>
   */
  datasetGroup?: DatasetGroup;
}

export namespace DescribeDatasetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to describe.</p>
   */
  datasetImportJobArn: string | undefined;
}

export namespace DescribeDatasetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetImportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an
 *       Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 */
export interface DatasetImportJob {
  /**
   * <p>The name of the import job.</p>
   */
  jobName?: string;

  /**
   * <p>The ARN of the dataset import job.</p>
   */
  datasetImportJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that receives the imported data.</p>
   */
  datasetArn?: string;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource?: DataSource;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3 data
   *       source.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the dataset import job.</p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset import job.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a dataset import job fails, provides the reason why.</p>
   */
  failureReason?: string;
}

export namespace DatasetImportJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetImportJob): any => ({
    ...obj,
  });
}

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
   */
  datasetImportJob?: DatasetImportJob;
}

export namespace DescribeDatasetImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetImportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to describe.</p>
   */
  eventTrackerArn: string | undefined;
}

export namespace DescribeEventTrackerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventTrackerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an event tracker.</p>
 */
export interface EventTracker {
  /**
   * <p>The name of the event tracker.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the event tracker.</p>
   */
  eventTrackerArn?: string;

  /**
   * <p>The Amazon Web Services account that owns the event tracker.</p>
   */
  accountId?: string;

  /**
   * <p>The ID of the event tracker. Include this ID in requests to the
   *     <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   */
  trackingId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
   */
  datasetGroupArn?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix format) that the event tracker was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace EventTracker {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventTracker): any => ({
    ...obj,
  });
}

export interface DescribeEventTrackerResponse {
  /**
   * <p>An object that describes the event tracker.</p>
   */
  eventTracker?: EventTracker;
}

export namespace DescribeEventTrackerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventTrackerResponse): any => ({
    ...obj,
  });
}

export interface DescribeFeatureTransformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the feature transformation to describe.</p>
   */
  featureTransformationArn: string | undefined;
}

export namespace DescribeFeatureTransformationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureTransformationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides feature transformation information. Feature transformation is the process
 *       of modifying raw input data into a form more suitable for model training.</p>
 */
export interface FeatureTransformation {
  /**
   * <p>The name of the feature transformation.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the FeatureTransformation object.</p>
   */
  featureTransformationArn?: string;

  /**
   * <p>Provides the default parameters for feature transformation.</p>
   */
  defaultParameters?: { [key: string]: string };

  /**
   * <p>The creation date and time (in Unix time) of the feature transformation.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last update date and time (in Unix time) of the feature transformation.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The status of the feature transformation.</p>
   *          <p>A feature transformation can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;
}

export namespace FeatureTransformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureTransformation): any => ({
    ...obj,
  });
}

export interface DescribeFeatureTransformationResponse {
  /**
   * <p>A listing of the FeatureTransformation properties.</p>
   */
  featureTransformation?: FeatureTransformation;
}

export namespace DescribeFeatureTransformationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeatureTransformationResponse): any => ({
    ...obj,
  });
}

export interface DescribeFilterRequest {
  /**
   * <p>The ARN of the filter to describe.</p>
   */
  filterArn: string | undefined;
}

export namespace DescribeFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFilterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information on a recommendation filter, including its ARN, status, and filter
 *             expression.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the filter.</p>
   */
  filterArn?: string;

  /**
   * <p>The time at which the filter was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the filter was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The ARN of the dataset group to which the filter belongs.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>If the filter failed, the reason for its failure.</p>
   */
  failureReason?: string;

  /**
   * <p>Specifies the type of item interactions to filter out of recommendation results. The
   *             filter expression must follow specific format rules. For information about filter expression structure and syntax, see
   *             <a>filter-expressions</a>.</p>
   */
  filterExpression?: string;

  /**
   * <p>The status of the filter.</p>
   */
  status?: string;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
    ...(obj.filterExpression && { filterExpression: SENSITIVE_STRING }),
  });
}

export interface DescribeFilterResponse {
  /**
   * <p>The filter's details.</p>
   */
  filter?: Filter;
}

export namespace DescribeFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFilterResponse): any => ({
    ...obj,
    ...(obj.filter && { filter: Filter.filterSensitiveLog(obj.filter) }),
  });
}

export interface DescribeRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recipe to describe.</p>
   */
  recipeArn: string | undefined;
}

export namespace DescribeRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecipeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a recipe. Each recipe provides an algorithm
 *       that Amazon Personalize uses in model training when you use the <a>CreateSolution</a>
 *       operation. </p>
 */
export interface Recipe {
  /**
   * <p>The name of the recipe.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   */
  recipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train
   *       the model.</p>
   */
  algorithmArn?: string;

  /**
   * <p>The ARN of the FeatureTransformation object.</p>
   */
  featureTransformationArn?: string;

  /**
   * <p>The status of the recipe.</p>
   */
  status?: string;

  /**
   * <p>The description of the recipe.</p>
   */
  description?: string;

  /**
   * <p>The date and time (in Unix format) that the recipe was created.</p>
   */
  creationDateTime?: Date;

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
   */
  recipeType?: string;

  /**
   * <p>The date and time (in Unix format) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace Recipe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recipe): any => ({
    ...obj,
  });
}

export interface DescribeRecipeResponse {
  /**
   * <p>An object that describes the recipe.</p>
   */
  recipe?: Recipe;
}

export namespace DescribeRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecipeResponse): any => ({
    ...obj,
  });
}

export interface DescribeSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to retrieve.</p>
   */
  schemaArn: string | undefined;
}

export namespace DescribeSchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the schema for a dataset. For more information on schemas, see
 *       <a>CreateSchema</a>.</p>
 */
export interface DatasetSchema {
  /**
   * <p>The name of the schema.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  schemaArn?: string;

  /**
   * <p>The schema.</p>
   */
  schema?: string;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DatasetSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSchema): any => ({
    ...obj,
  });
}

export interface DescribeSchemaResponse {
  /**
   * <p>The requested schema.</p>
   */
  schema?: DatasetSchema;
}

export namespace DescribeSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSchemaResponse): any => ({
    ...obj,
  });
}

export interface DescribeSolutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to describe.</p>
   */
  solutionArn: string | undefined;
}

export namespace DescribeSolutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSolutionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a>CreateSolution</a>), specifies the recipe that best optimized the
 *       specified metric.</p>
 */
export interface AutoMLResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the best recipe.</p>
   */
  bestRecipeArn?: string;
}

export namespace AutoMLResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoMLResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a solution version. For a complete listing, call the
 *       <a>DescribeSolutionVersion</a> API.</p>
 */
export interface SolutionVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The status of the solution version.</p>
   *          <p>A solution version can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that this version of a solution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution version was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a solution version fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export namespace SolutionVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SolutionVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that provides information about a solution. A solution is a trained model
 *       that can be deployed as a campaign.</p>
 */
export interface Solution {
  /**
   * <p>The name of the solution.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The
   *       default is <code>false</code>.</p>
   */
  performHPO?: boolean;

  /**
   * <p>When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from
   *       the list specified in the solution configuration (<code>recipeArn</code> must not be specified).
   *       When false (the default), Amazon Personalize uses <code>recipeArn</code> for training.</p>
   */
  performAutoML?: boolean;

  /**
   * <p>The ARN of the recipe used to create the solution.</p>
   */
  recipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the model.
   *       If no <code>eventType</code> is provided, Amazon Personalize uses all interactions for training with
   *       equal weight regardless of type.</p>
   */
  eventType?: string;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: SolutionConfig;

  /**
   * <p>When <code>performAutoML</code> is true, specifies the best recipe found.</p>
   */
  autoMLResult?: AutoMLResult;

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
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the solution.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Describes the latest version of the solution, including the status and the ARN.</p>
   */
  latestSolutionVersion?: SolutionVersionSummary;
}

export namespace Solution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Solution): any => ({
    ...obj,
  });
}

export interface DescribeSolutionResponse {
  /**
   * <p>An object that describes the solution.</p>
   */
  solution?: Solution;
}

export namespace DescribeSolutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSolutionResponse): any => ({
    ...obj,
  });
}

export interface DescribeSolutionVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   */
  solutionVersionArn: string | undefined;
}

export namespace DescribeSolutionVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSolutionVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of
 *       the best performing model.</p>
 */
export interface TunedHPOParams {
  /**
   * <p>A list of the hyperparameter values of the best performing model.</p>
   */
  algorithmHyperParameters?: { [key: string]: string };
}

export namespace TunedHPOParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TunedHPOParams): any => ({
    ...obj,
  });
}

/**
 * <p>An object that provides information about a specific version of a <a>Solution</a>.</p>
 */
export interface SolutionVersion {
  /**
   * <p>The ARN of the solution version.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is
   *         <code>false</code>.</p>
   */
  performHPO?: boolean;

  /**
   * <p>When true, Amazon Personalize searches for the most optimal recipe according to the solution
   *       configuration. When false (the default), Amazon Personalize uses <code>recipeArn</code>.</p>
   */
  performAutoML?: boolean;

  /**
   * <p>The ARN of the recipe used in the solution.</p>
   */
  recipeArn?: string;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the
   *       model.</p>
   */
  eventType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group providing the training data.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: SolutionConfig;

  /**
   * <p>The time used to train the model. You are billed for the time it takes to train a model.
   *       This field is visible only after Amazon Personalize successfully trains a model.</p>
   */
  trainingHours?: number;

  /**
   * <p>The scope of training to be performed when creating the solution version. The
   *       <code>FULL</code> option trains the solution version based on the entirety of the input
   *       solution's training data, while the <code>UPDATE</code> option processes only the data that
   *       has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to
   *       incrementally update your solution version instead of creating an entirely new one.</p>
   *          <important>
   *             <p>The <code>UPDATE</code> option can only be used when you already have an active solution
   *         version created from the input solution using the <code>FULL</code> option and the input
   *         solution was trained with the
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>
   *         recipe or the
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p>
   *          </important>
   */
  trainingMode?: TrainingMode | string;

  /**
   * <p>If hyperparameter optimization was performed, contains the hyperparameter values of the
   *       best performing model.</p>
   */
  tunedHPOParams?: TunedHPOParams;

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
   */
  status?: string;

  /**
   * <p>If training a solution version fails, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The date and
   *       time
   *       (in Unix time) that this version of the solution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in
   *       Unix
   *       time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace SolutionVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SolutionVersion): any => ({
    ...obj,
  });
}

export interface DescribeSolutionVersionResponse {
  /**
   * <p>The solution version.</p>
   */
  solutionVersion?: SolutionVersion;
}

export namespace DescribeSolutionVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSolutionVersionResponse): any => ({
    ...obj,
  });
}

export interface GetSolutionMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version for which to get metrics.</p>
   */
  solutionVersionArn: string | undefined;
}

export namespace GetSolutionMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSolutionMetricsRequest): any => ({
    ...obj,
  });
}

export interface GetSolutionMetricsResponse {
  /**
   * <p>The same solution version ARN as specified in the request.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The metrics for the solution version.</p>
   */
  metrics?: { [key: string]: number };
}

export namespace GetSolutionMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSolutionMetricsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The token is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface ListBatchInferenceJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs
   *       were created.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch inference job results to return in each page. The default
   *       value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListBatchInferenceJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchInferenceJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job
 *       summaries.</p>
 */
export interface BatchInferenceJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   */
  batchInferenceJobArn?: string;

  /**
   * <p>The name of the batch inference job.</p>
   */
  jobName?: string;

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
   */
  status?: string;

  /**
   * <p>The time at which the batch inference job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the batch inference job was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If the batch inference job failed, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The ARN of the solution version used by the batch inference job.</p>
   */
  solutionVersionArn?: string;
}

export namespace BatchInferenceJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchInferenceJobSummary): any => ({
    ...obj,
  });
}

export interface ListBatchInferenceJobsResponse {
  /**
   * <p>A list containing information on each job that is returned.</p>
   */
  batchInferenceJobs?: BatchInferenceJobSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when
   *       there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListBatchInferenceJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBatchInferenceJobsResponse): any => ({
    ...obj,
  });
}

export interface ListCampaignsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to list the campaigns for. When
   *         a solution is not specified, all the campaigns associated with the account are listed.</p>
   */
  solutionArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListCampaigns</code> for getting
   *       the next set of campaigns (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of campaigns to return.</p>
   */
  maxResults?: number;
}

export namespace ListCampaignsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCampaignsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a campaign. For a complete listing, call the
 *       <a>DescribeCampaign</a> API.</p>
 */
export interface CampaignSummary {
  /**
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the campaign was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export namespace CampaignSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CampaignSummary): any => ({
    ...obj,
  });
}

export interface ListCampaignsResponse {
  /**
   * <p>A list of the campaigns.</p>
   */
  campaigns?: CampaignSummary[];

  /**
   * <p>A token for getting the next set of campaigns (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListCampaignsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCampaignsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetExportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset export jobs for.</p>
   */
  datasetArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListDatasetExportJobs</code> for getting
   *       the next set of dataset export jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset export jobs to return.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetExportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a dataset export job. For a complete listing, call the
 *       <a>DescribeDatasetExportJob</a> API.</p>
 */
export interface DatasetExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   */
  datasetExportJobArn?: string;

  /**
   * <p>The name of the dataset export job.</p>
   */
  jobName?: string;

  /**
   * <p>The status of the dataset export job.</p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset export job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset export job status was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a dataset export job fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export namespace DatasetExportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetExportJobSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetExportJobsResponse {
  /**
   * <p>The list of dataset export jobs.</p>
   */
  datasetExportJobs?: DatasetExportJobSummary[];

  /**
   * <p>A token for getting the next set of dataset export jobs (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListDatasetExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetExportJobsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetGroupsRequest {
  /**
   * <p>A token returned from the previous call to <code>ListDatasetGroups</code> for getting the
   *       next set of dataset groups (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset groups to return.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a dataset group. For a complete listing, call the
 *       <a>DescribeDatasetGroup</a> API.</p>
 */
export interface DatasetGroupSummary {
  /**
   * <p>The name of the dataset group.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset group was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset group was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If creating a dataset group fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export namespace DatasetGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetGroupSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetGroupsResponse {
  /**
   * <p>The list of your dataset groups.</p>
   */
  datasetGroups?: DatasetGroupSummary[];

  /**
   * <p>A token for getting the next set of dataset groups (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListDatasetGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetImportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset import jobs for.</p>
   */
  datasetArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting
   *       the next set of dataset import jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset import jobs to return.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetImportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a dataset import job. For a complete listing, call the
 *       <a>DescribeDatasetImportJob</a> API.</p>
 */
export interface DatasetImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  datasetImportJobArn?: string;

  /**
   * <p>The name of the dataset import job.</p>
   */
  jobName?: string;

  /**
   * <p>The status of the dataset import job.</p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset import job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset import job status was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a dataset import job fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export namespace DatasetImportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetImportJobSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetImportJobsResponse {
  /**
   * <p>The list of dataset import jobs.</p>
   */
  datasetImportJobs?: DatasetImportJobSummary[];

  /**
   * <p>A token for getting the next set of dataset import jobs (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListDatasetImportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetImportJobsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the datasets to
   *       list.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting
   *       the next set of dataset import jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of datasets to return.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a dataset. For a complete listing, call the
 *       <a>DescribeDataset</a> API.</p>
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  datasetArn?: string;

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
   */
  datasetType?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DatasetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetsResponse {
  /**
   * <p>An array of <code>Dataset</code> objects. Each object provides metadata
   *       information.</p>
   */
  datasets?: DatasetSummary[];

  /**
   * <p>A token for getting the next set of datasets (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
}

export interface ListEventTrackersRequest {
  /**
   * <p>The ARN of a dataset group used to filter the response.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListEventTrackers</code> for getting
   *       the next set of event trackers (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of event trackers to return.</p>
   */
  maxResults?: number;
}

export namespace ListEventTrackersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventTrackersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of an event tracker. For a complete listing, call the
 *       <a>DescribeEventTracker</a> API.</p>
 */
export interface EventTrackerSummary {
  /**
   * <p>The name of the event tracker.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker.</p>
   */
  eventTrackerArn?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the event tracker was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace EventTrackerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventTrackerSummary): any => ({
    ...obj,
  });
}

export interface ListEventTrackersResponse {
  /**
   * <p>A list of event trackers.</p>
   */
  eventTrackers?: EventTrackerSummary[];

  /**
   * <p>A token for getting the next set of event trackers (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListEventTrackersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventTrackersResponse): any => ({
    ...obj,
  });
}

export interface ListFiltersRequest {
  /**
   * <p>The ARN of the dataset group that contains the filters.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListFilters</code> for getting the
   *             next set of filters (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of filters to return.</p>
   */
  maxResults?: number;
}

export namespace ListFiltersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFiltersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A short summary of a filter's attributes.</p>
 */
export interface FilterSummary {
  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the filter.</p>
   */
  filterArn?: string;

  /**
   * <p>The time at which the filter was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the filter was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The ARN of the dataset group to which the filter belongs.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>If the filter failed, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The status of the filter.</p>
   */
  status?: string;
}

export namespace FilterSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterSummary): any => ({
    ...obj,
  });
}

export interface ListFiltersResponse {
  /**
   * <p>A list of returned filters.</p>
   */
  Filters?: FilterSummary[];

  /**
   * <p>A token for getting the next set of filters (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListFiltersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFiltersResponse): any => ({
    ...obj,
  });
}

export enum RecipeProvider {
  SERVICE = "SERVICE",
}

export interface ListRecipesRequest {
  /**
   * <p>The default is <code>SERVICE</code>.</p>
   */
  recipeProvider?: RecipeProvider | string;

  /**
   * <p>A token returned from the previous call to <code>ListRecipes</code> for getting
   *       the next set of recipes (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recipes to return.</p>
   */
  maxResults?: number;
}

export namespace ListRecipesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a recipe. For a complete listing, call the
 *       <a>DescribeRecipe</a> API.</p>
 */
export interface RecipeSummary {
  /**
   * <p>The name of the recipe.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe.</p>
   */
  recipeArn?: string;

  /**
   * <p>The status of the recipe.</p>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the recipe was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the recipe was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace RecipeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipeSummary): any => ({
    ...obj,
  });
}

export interface ListRecipesResponse {
  /**
   * <p>The list of available recipes.</p>
   */
  recipes?: RecipeSummary[];

  /**
   * <p>A token for getting the next set of recipes.</p>
   */
  nextToken?: string;
}

export namespace ListRecipesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipesResponse): any => ({
    ...obj,
  });
}

export interface ListSchemasRequest {
  /**
   * <p>A token returned from the previous call to <code>ListSchemas</code> for getting
   *       the next set of schemas (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of schemas to return.</p>
   */
  maxResults?: number;
}

export namespace ListSchemasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a dataset schema. For a complete listing, call the
 *       <a>DescribeSchema</a> API.</p>
 */
export interface DatasetSchemaSummary {
  /**
   * <p>The name of the schema.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  schemaArn?: string;

  /**
   * <p>The date and time (in Unix time) that the schema was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the schema was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DatasetSchemaSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSchemaSummary): any => ({
    ...obj,
  });
}

export interface ListSchemasResponse {
  /**
   * <p>A list of schemas.</p>
   */
  schemas?: DatasetSchemaSummary[];

  /**
   * <p>A token used to get the next set of schemas (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListSchemasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
}

export interface ListSolutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListSolutions</code> for getting
   *       the next set of solutions (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of solutions to return.</p>
   */
  maxResults?: number;
}

export namespace ListSolutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSolutionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the properties of a solution. For a complete listing, call the
 *       <a>DescribeSolution</a> API.</p>
 */
export interface SolutionSummary {
  /**
   * <p>The name of the solution.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution.</p>
   */
  solutionArn?: string;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the solution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace SolutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SolutionSummary): any => ({
    ...obj,
  });
}

export interface ListSolutionsResponse {
  /**
   * <p>A list of the current solutions.</p>
   */
  solutions?: SolutionSummary[];

  /**
   * <p>A token for getting the next set of solutions (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListSolutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSolutionsResponse): any => ({
    ...obj,
  });
}

export interface ListSolutionVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution.</p>
   */
  solutionArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListSolutionVersions</code> for getting
   *       the next set of solution versions (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of solution versions to return.</p>
   */
  maxResults?: number;
}

export namespace ListSolutionVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSolutionVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListSolutionVersionsResponse {
  /**
   * <p>A list of solution versions describing the version properties.</p>
   */
  solutionVersions?: SolutionVersionSummary[];

  /**
   * <p>A token for getting the next set of solution versions (if they exist).</p>
   */
  nextToken?: string;
}

export namespace ListSolutionVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSolutionVersionsResponse): any => ({
    ...obj,
  });
}

export interface StopSolutionVersionCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version you want to stop creating.</p>
   */
  solutionVersionArn: string | undefined;
}

export namespace StopSolutionVersionCreationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSolutionVersionCreationRequest): any => ({
    ...obj,
  });
}

export interface UpdateCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn: string | undefined;

  /**
   * <p>The ARN of a new solution version to deploy.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
   *       Amazon Personalize will support.</p>
   */
  minProvisionedTPS?: number;

  /**
   * <p>The configuration details of a campaign.</p>
   */
  campaignConfig?: CampaignConfig;
}

export namespace UpdateCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCampaignRequest): any => ({
    ...obj,
  });
}

export interface UpdateCampaignResponse {
  /**
   * <p>The same campaign ARN as given in the request.</p>
   */
  campaignArn?: string;
}

export namespace UpdateCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCampaignResponse): any => ({
    ...obj,
  });
}
