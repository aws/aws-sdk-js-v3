// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { PersonalizeServiceException as __BaseException } from "./PersonalizeServiceException";

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
  defaultHyperParameters?: Record<string, string>;

  /**
   * <p>Specifies the default hyperparameters, their ranges, and whether they
   *       are tunable. A tunable hyperparameter can
   *       have its value determined during hyperparameter optimization (HPO).</p>
   */
  defaultHyperParameterRanges?: DefaultHyperParameterRanges;

  /**
   * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
   */
  defaultResourceConfig?: Record<string, string>;

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
  itemExplorationConfig?: Record<string, string>;
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
   *       encrypt or decrypt the input and output files.</p>
   */
  kmsKeyArn?: string;
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

/**
 * <p>The output configuration parameters of a batch inference job.</p>
 */
export interface BatchInferenceJobOutput {
  /**
   * <p>Information on the Amazon S3 bucket in which the batch inference job's output is stored.</p>
   */
  s3DataDestination: S3DataConfig | undefined;
}

/**
 * <p>The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
 *       For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">Tagging Personalize resources</a>.
 *     </p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  tagKey: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  tagValue: string | undefined;
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
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.</p>
   */
  filterArn?: string;

  /**
   * <p>The number of recommendations to retrieve.</p>
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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the batch inference job.</p>
   */
  tags?: Tag[];
}

export interface CreateBatchInferenceJobResponse {
  /**
   * <p>The ARN of the batch inference job.</p>
   */
  batchInferenceJobArn?: string;
}

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The specified resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified resource is in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>Could not find the specified resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * <p>The input configuration of a batch segment job.</p>
 */
export interface BatchSegmentJobInput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   */
  s3DataSource: S3DataConfig | undefined;
}

/**
 * <p>The output configuration parameters of a batch segment job.</p>
 */
export interface BatchSegmentJobOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   */
  s3DataDestination: S3DataConfig | undefined;
}

export interface CreateBatchSegmentJobRequest {
  /**
   * <p>The name of the batch segment job to create.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version you want the batch segment job to use to generate
   *       batch segments.</p>
   */
  solutionVersionArn: string | undefined;

  /**
   * <p>The ARN of the filter to apply to the batch segment job. For more information on using
   *       filters, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering batch recommendations</a>.</p>
   */
  filterArn?: string;

  /**
   * <p>The number of predicted users generated by the batch segment job for each line of input data.</p>
   */
  numResults?: number;

  /**
   * <p>The Amazon S3 path for the input data used to generate the batch segment job.</p>
   */
  jobInput: BatchSegmentJobInput | undefined;

  /**
   * <p>The Amazon S3 path for the bucket where the job's output will be stored.</p>
   */
  jobOutput: BatchSegmentJobOutput | undefined;

  /**
   * <p>The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output
   *       Amazon S3 buckets respectively.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the batch segment job.</p>
   */
  tags?: Tag[];
}

export interface CreateBatchSegmentJobResponse {
  /**
   * <p>The ARN of the batch segment job.</p>
   */
  batchSegmentJobArn?: string;
}

/**
 * <p>The configuration details of a campaign.</p>
 */
export interface CampaignConfig {
  /**
   * <p>Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items. Provide <code>itemExplorationConfig</code> data only if your solution uses the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe.</p>
   */
  itemExplorationConfig?: Record<string, string>;
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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the campaign.</p>
   */
  tags?: Tag[];
}

export interface CreateCampaignResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn?: string;
}

export interface CreateDatasetRequest {
  /**
   * <p>The name for the dataset.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the schema to associate with the dataset. The schema
   *       defines the dataset fields.</p>
   */
  schemaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to add the dataset
   *       to.</p>
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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset.</p>
   */
  tags?: Tag[];
}

export interface CreateDatasetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  datasetArn?: string;
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

export interface CreateDatasetExportJobRequest {
  /**
   * <p>The name for the dataset export job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains the data
   *       to export.</p>
   */
  datasetArn: string | undefined;

  /**
   * <p>The data to export, based on how you imported the data. You can choose
   *       to export only <code>BULK</code> data that you imported using a dataset
   *       import job, only <code>PUT</code> data that you imported incrementally
   *       (using the console, PutEvents, PutUsers and PutItems operations), or
   *         <code>ALL</code> for both types. The default value is <code>PUT</code>.
   *     </p>
   */
  ingestionMode?: IngestionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has
   *       permissions to add data to your output Amazon S3 bucket.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored.</p>
   */
  jobOutput: DatasetExportJobOutput | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset export job.</p>
   */
  tags?: Tag[];
}

export interface CreateDatasetExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
   */
  datasetExportJobArn?: string;
}

export enum Domain {
  ECOMMERCE = "ECOMMERCE",
  VIDEO_ON_DEMAND = "VIDEO_ON_DEMAND",
}

export interface CreateDatasetGroupRequest {
  /**
   * <p>The name for the new dataset group.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that has permissions to access
   *       the Key Management Service (KMS) key. Supplying an IAM role is only valid when also
   *       specifying a KMS key.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to
   *       encrypt the datasets.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The domain of the dataset group. Specify a domain to create a
   *       Domain dataset group. The domain you specify determines the default
   *       schemas for datasets and the use cases available for recommenders. If you
   *       don't specify a domain, you create a Custom dataset group with solution
   *       versions that you deploy with a campaign. </p>
   */
  domain?: Domain | string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset group.</p>
   */
  tags?: Tag[];
}

export interface CreateDatasetGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The domain for the new Domain dataset group.</p>
   */
  domain?: Domain | string;
}

/**
 * <p>Describes the data source that contains the data to upload to a
 *       dataset.</p>
 */
export interface DataSource {
  /**
   * <p>The path to the Amazon S3 bucket where the data that you want to upload to
   *       your dataset is stored. For example: </p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   */
  dataLocation?: string;
}

export enum ImportMode {
  FULL = "FULL",
  INCREMENTAL = "INCREMENTAL",
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
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the dataset import job.</p>
   */
  tags?: Tag[];

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
   */
  importMode?: ImportMode | string;

  /**
   * <p>If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3</p>
   */
  publishAttributionMetricsToS3?: boolean;
}

export interface CreateDatasetImportJobResponse {
  /**
   * <p>The ARN of the dataset import job.</p>
   */
  datasetImportJobArn?: string;
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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the event tracker.</p>
   */
  tags?: Tag[];
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
   *             <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.</p>
   */
  filterExpression: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the filter.</p>
   */
  tags?: Tag[];
}

export interface CreateFilterResponse {
  /**
   * <p>The ARN of the new filter.</p>
   */
  filterArn?: string;
}

/**
 * <p>Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 */
export interface MetricAttribute {
  /**
   * <p>The metric's event type.</p>
   */
  eventType: string | undefined;

  /**
   * <p>The metric's name. The name helps you identify the metric in Amazon CloudWatch or Amazon S3.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The attribute's expression. Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the
   *       dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).</p>
   */
  expression: string | undefined;
}

/**
 * <p>The output configuration details for a metric attribution.</p>
 */
export interface MetricAttributionOutput {
  /**
   * <p>The configuration details of an Amazon S3 input or output bucket.</p>
   */
  s3DataDestination?: S3DataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket and add metrics to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
   */
  roleArn: string | undefined;
}

export interface CreateMetricAttributionRequest {
  /**
   * <p>A name for the metric attribution.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution.</p>
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function.
   *       Available functions are <code>SUM()</code> or <code>SAMPLECOUNT()</code>. For SUM() functions, provide the
   *       dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).</p>
   */
  metrics: MetricAttribute[] | undefined;

  /**
   * <p>The output configuration details for the metric attribution.</p>
   */
  metricsOutputConfig: MetricAttributionOutput | undefined;
}

export interface CreateMetricAttributionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the new metric attribution.</p>
   */
  metricAttributionArn?: string;
}

/**
 * <p>The configuration details of the recommender.</p>
 */
export interface RecommenderConfig {
  /**
   * <p>Specifies the exploration configuration hyperparameters, including <code>explorationWeight</code> and
   *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
   *       recommending items. Provide <code>itemExplorationConfig</code> data only if your recommenders generate personalized recommendations for a user
   *       (not popular items or similar items).</p>
   */
  itemExplorationConfig?: Record<string, string>;

  /**
   * <p>Specifies the requested minimum provisioned recommendation requests per second that
   *       Amazon Personalize will support.</p>
   */
  minRecommendationRequestsPerSecond?: number;
}

export interface CreateRecommenderRequest {
  /**
   * <p>The name of the recommender.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender.</p>
   */
  datasetGroupArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group
   *       use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>.
   *     </p>
   */
  recipeArn: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   */
  recommenderConfig?: RecommenderConfig;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the recommender.</p>
   */
  tags?: Tag[];
}

export interface CreateRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   */
  recommenderArn?: string;
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

  /**
   * <p>The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify
   *     the domain you chose when you created the Domain dataset group.</p>
   */
  domain?: Domain | string;
}

export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created schema.</p>
   */
  schemaArn?: string;
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize
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
  algorithmHyperParameters?: Record<string, string>;

  /**
   * <p>Lists the feature transformation parameters.</p>
   */
  featureTransformationParameters?: Record<string, string>;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html">AutoMLConfig</a> object containing a list of recipes to search
   *       when AutoML is performed.</p>
   */
  autoMLConfig?: AutoMLConfig;

  /**
   * <p>Describes the additional objective for the solution, such as maximizing streaming
   *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
   */
  optimizationObjective?: OptimizationObjective;
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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the solution.</p>
   */
  tags?: Tag[];
}

export interface CreateSolutionResponse {
  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;
}

export enum TrainingMode {
  FULL = "FULL",
  UPDATE = "UPDATE",
}

export interface CreateSolutionVersionRequest {
  /**
   * <p>The name of the solution version.</p>
   */
  name?: string;

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

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> to apply to the solution version.</p>
   */
  tags?: Tag[];
}

export interface CreateSolutionVersionResponse {
  /**
   * <p>The ARN of the new solution version.</p>
   */
  solutionVersionArn?: string;
}

export interface DeleteCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign to delete.</p>
   */
  campaignArn: string | undefined;
}

export interface DeleteDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   */
  datasetArn: string | undefined;
}

export interface DeleteDatasetGroupRequest {
  /**
   * <p>The ARN of the dataset group to delete.</p>
   */
  datasetGroupArn: string | undefined;
}

export interface DeleteEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to delete.</p>
   */
  eventTrackerArn: string | undefined;
}

export interface DeleteFilterRequest {
  /**
   * <p>The ARN of the filter to delete.</p>
   */
  filterArn: string | undefined;
}

export interface DeleteMetricAttributionRequest {
  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   */
  metricAttributionArn: string | undefined;
}

export interface DeleteRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to delete.</p>
   */
  recommenderArn: string | undefined;
}

export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to delete.</p>
   */
  schemaArn: string | undefined;
}

export interface DeleteSolutionRequest {
  /**
   * <p>The ARN of the solution to delete.</p>
   */
  solutionArn: string | undefined;
}

export interface DescribeAlgorithmRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm to describe.</p>
   */
  algorithmArn: string | undefined;
}

export interface DescribeAlgorithmResponse {
  /**
   * <p>A listing of the properties of the algorithm.</p>
   */
  algorithm?: Algorithm;
}

export interface DescribeBatchInferenceJobRequest {
  /**
   * <p>The ARN of the batch inference job to describe.</p>
   */
  batchInferenceJobArn: string | undefined;
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

export interface DescribeBatchInferenceJobResponse {
  /**
   * <p>Information on the specified batch inference job.</p>
   */
  batchInferenceJob?: BatchInferenceJob;
}

export interface DescribeBatchSegmentJobRequest {
  /**
   * <p>The ARN of the batch segment job to describe.</p>
   */
  batchSegmentJobArn: string | undefined;
}

/**
 * <p>Contains information on a batch segment job.</p>
 */
export interface BatchSegmentJob {
  /**
   * <p>The name of the batch segment job.</p>
   */
  jobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch segment job.</p>
   */
  batchSegmentJobArn?: string;

  /**
   * <p>The ARN of the filter used on the batch segment job.</p>
   */
  filterArn?: string;

  /**
   * <p>If the batch segment job failed, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The number of predicted users generated by the batch segment job for each line of input data.</p>
   */
  numResults?: number;

  /**
   * <p>The Amazon S3 path that leads to the input data used to generate the batch segment job.</p>
   */
  jobInput?: BatchSegmentJobInput;

  /**
   * <p>The Amazon S3 bucket that contains the output data generated by the batch segment job.</p>
   */
  jobOutput?: BatchSegmentJobOutput;

  /**
   * <p>The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch segment job.</p>
   */
  roleArn?: string;

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
   */
  status?: string;

  /**
   * <p>The time at which the batch segment job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the batch segment job last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export interface DescribeBatchSegmentJobResponse {
  /**
   * <p>Information on the specified batch segment job.</p>
   */
  batchSegmentJob?: BatchSegmentJob;
}

export interface DescribeCampaignRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn: string | undefined;
}

/**
 * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
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

/**
 * <p>An object that describes the deployment of a solution version.
 *       For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
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
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
   */
  latestCampaignUpdate?: CampaignUpdateSummary;
}

export interface DescribeCampaignResponse {
  /**
   * <p>The properties of the campaign.</p>
   */
  campaign?: Campaign;
}

export interface DescribeDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to describe.</p>
   */
  datasetArn: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the dataset that you want metadata
   *       for.</p>
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
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
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

export interface DescribeDatasetResponse {
  /**
   * <p>A listing of the dataset's properties.</p>
   */
  dataset?: Dataset;
}

export interface DescribeDatasetExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset export job to
   *       describe.</p>
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
   * <p>The data to export, based on how you imported the data. You can choose
   *       to export <code>BULK</code> data that you imported using a dataset import
   *       job, <code>PUT</code> data that you imported incrementally (using the
   *       console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
   *       for both types. The default value is <code>PUT</code>. </p>
   */
  ingestionMode?: IngestionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role that has
   *       permissions to add data to your output Amazon S3 bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the dataset export job.</p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The path to the Amazon S3 bucket where the job's output is stored. For
   *       example:</p>
   *          <p>
   *             <code>s3://bucket-name/folder-name/</code>
   *          </p>
   */
  jobOutput?: DatasetExportJobOutput;

  /**
   * <p>The creation date and time (in Unix time) of the dataset export
   *       job.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) the status of the dataset export job
   *       was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If a dataset export job fails, provides the reason why.</p>
   */
  failureReason?: string;
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

export interface DescribeDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to
   *       describe.</p>
   */
  datasetGroupArn: string | undefined;
}

/**
 * <p>A dataset group is a collection of related datasets (Interactions,
 *       User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a
 *       dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a
 *       solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each
 *       type of dataset.</p>
 *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in
 *       the group.</p>
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
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The ARN of the IAM role that has permissions to create the dataset
   *       group.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to
   *       encrypt the datasets.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset group.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last update date and time (in Unix time) of the dataset
   *       group.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If creating a dataset group fails, provides the reason why.</p>
   */
  failureReason?: string;

  /**
   * <p>The domain of a Domain dataset group.</p>
   */
  domain?: Domain | string;
}

export interface DescribeDatasetGroupResponse {
  /**
   * <p>A listing of the dataset group's properties.</p>
   */
  datasetGroup?: DatasetGroup;
}

export interface DescribeDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to
   *       describe.</p>
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
   * <p>The Amazon Resource Name (ARN) of the dataset that receives the
   *       imported data.</p>
   */
  datasetArn?: string;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource?: DataSource;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3
   *       data source.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the dataset import job.</p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset import
   *       job.</p>
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

  /**
   * <p>The import mode used by the dataset import job to import new
   *       records.</p>
   */
  importMode?: ImportMode | string;

  /**
   * <p>Whether the job publishes metrics to Amazon S3 for a metric attribution.</p>
   */
  publishAttributionMetricsToS3?: boolean;
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

export interface DescribeEventTrackerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event tracker to describe.</p>
   */
  eventTrackerArn: string | undefined;
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

export interface DescribeEventTrackerResponse {
  /**
   * <p>An object that describes the event tracker.</p>
   */
  eventTracker?: EventTracker;
}

export interface DescribeFeatureTransformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the feature transformation to describe.</p>
   */
  featureTransformationArn: string | undefined;
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
  defaultParameters?: Record<string, string>;

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

export interface DescribeFeatureTransformationResponse {
  /**
   * <p>A listing of the FeatureTransformation properties.</p>
   */
  featureTransformation?: FeatureTransformation;
}

export interface DescribeFilterRequest {
  /**
   * <p>The ARN of the filter to describe.</p>
   */
  filterArn: string | undefined;
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
   *             <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-expressions.html">Filter expressions</a>.</p>
   */
  filterExpression?: string;

  /**
   * <p>The status of the filter.</p>
   */
  status?: string;
}

export interface DescribeFilterResponse {
  /**
   * <p>The filter's details.</p>
   */
  filter?: Filter;
}

export interface DescribeMetricAttributionRequest {
  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   */
  metricAttributionArn: string | undefined;
}

/**
 * <p>Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize.
 *       Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3.
 *       For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 */
export interface MetricAttribution {
  /**
   * <p>The metric attribution's name.</p>
   */
  name?: string;

  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   */
  metricAttributionArn?: string;

  /**
   * <p>The metric attribution's dataset group Amazon Resource Name (ARN).</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The metric attribution's output configuration.</p>
   */
  metricsOutputConfig?: MetricAttributionOutput;

  /**
   * <p>The metric attribution's status.</p>
   */
  status?: string;

  /**
   * <p>The metric attribution's creation date time.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The metric attribution's last updated date time.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The metric attribution's failure reason.</p>
   */
  failureReason?: string;
}

export interface DescribeMetricAttributionResponse {
  /**
   * <p>The details of the metric attribution.</p>
   */
  metricAttribution?: MetricAttribution;
}

export interface DescribeRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recipe to describe.</p>
   */
  recipeArn: string | undefined;
}

/**
 * <p>Provides information about a recipe. Each recipe provides an algorithm
 *       that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
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

export interface DescribeRecipeResponse {
  /**
   * <p>An object that describes the recipe.</p>
   */
  recipe?: Recipe;
}

export interface DescribeRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to describe.</p>
   */
  recommenderArn: string | undefined;
}

/**
 * <p>Provides a summary of the properties of a recommender update. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API.</p>
 */
export interface RecommenderUpdateSummary {
  /**
   * <p>The configuration details of the recommender update.</p>
   */
  recommenderConfig?: RecommenderConfig;

  /**
   * <p>The date and time (in Unix format) that the recommender update was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the recommender update was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The status of the recommender update.</p>
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
   */
  status?: string;

  /**
   * <p>If a recommender update fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

/**
 * <p>Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group
 *       for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.</p>
 */
export interface Recommender {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   */
  recommenderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The name of the recommender.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.
   * </p>
   */
  recipeArn?: string;

  /**
   * <p>The configuration details of the recommender.</p>
   */
  recommenderConfig?: RecommenderConfig;

  /**
   * <p>The date and time (in Unix format) that the recommender was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix format) that the recommender was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

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
   */
  status?: string;

  /**
   * <p>If a recommender fails, the reason behind the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>Provides a summary of the latest updates to the recommender. </p>
   */
  latestRecommenderUpdate?: RecommenderUpdateSummary;

  /**
   * <p>Provides evaluation metrics that help you determine the performance
   *     of a recommender. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/evaluating-recommenders.html">
   *         Evaluating a recommender</a>.</p>
   */
  modelMetrics?: Record<string, number>;
}

export interface DescribeRecommenderResponse {
  /**
   * <p>The properties of the recommender.</p>
   */
  recommender?: Recommender;
}

export interface DescribeSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema to retrieve.</p>
   */
  schemaArn: string | undefined;
}

/**
 * <p>Describes the schema for a dataset. For more information on schemas, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
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

  /**
   * <p>The domain of a schema that you created for a dataset in a Domain dataset group.</p>
   */
  domain?: Domain | string;
}

export interface DescribeSchemaResponse {
  /**
   * <p>The requested schema.</p>
   */
  schema?: DatasetSchema;
}

export interface DescribeSolutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to describe.</p>
   */
  solutionArn: string | undefined;
}

/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the
 *       specified metric.</p>
 */
export interface AutoMLResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the best recipe.</p>
   */
  bestRecipeArn?: string;
}

/**
 * <p>Provides a summary of the properties of a solution version. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API.</p>
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

export interface DescribeSolutionResponse {
  /**
   * <p>An object that describes the solution.</p>
   */
  solution?: Solution;
}

export interface DescribeSolutionVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   */
  solutionVersionArn: string | undefined;
}

/**
 * <p>If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of
 *       the best performing model.</p>
 */
export interface TunedHPOParams {
  /**
   * <p>A list of the hyperparameter values of the best performing model.</p>
   */
  algorithmHyperParameters?: Record<string, string>;
}

/**
 * <p>An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group.</p>
 */
export interface SolutionVersion {
  /**
   * <p>The name of the solution version.</p>
   */
  name?: string;

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

export interface DescribeSolutionVersionResponse {
  /**
   * <p>The solution version.</p>
   */
  solutionVersion?: SolutionVersion;
}

export interface GetSolutionMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version for which to get metrics.</p>
   */
  solutionVersionArn: string | undefined;
}

export interface GetSolutionMetricsResponse {
  /**
   * <p>The same solution version ARN as specified in the request.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The metrics for the solution version. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/working-with-training-metrics.html">
   *         Evaluating a solution version with metrics
   *       </a>.</p>
   */
  metrics?: Record<string, number>;
}

/**
 * <p>The token is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
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

/**
 * <p>A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job
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

export interface ListBatchSegmentJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version that the batch segment jobs used to generate batch segments.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of batch segment job results to return in each page. The default
   *       value is 100.</p>
   */
  maxResults?: number;
}

/**
 * <p>A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype.
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job
 *       summaries.</p>
 */
export interface BatchSegmentJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch segment job.</p>
   */
  batchSegmentJobArn?: string;

  /**
   * <p>The name of the batch segment job.</p>
   */
  jobName?: string;

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
   */
  status?: string;

  /**
   * <p>The time at which the batch segment job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The time at which the batch segment job was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>If the batch segment job failed, the reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the solution version used by the batch segment job to generate batch segments.</p>
   */
  solutionVersionArn?: string;
}

export interface ListBatchSegmentJobsResponse {
  /**
   * <p>A list containing information on each job that is returned.</p>
   */
  batchSegmentJobs?: BatchSegmentJobSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when
   *       there are no more results to return.</p>
   */
  nextToken?: string;
}

export interface ListCampaignsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution to list the campaigns for. When
   *         a solution is not specified, all the campaigns associated with the account are listed.</p>
   */
  solutionArn?: string;

  /**
   * <p>A token returned from the previous call to <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> for getting
   *       the next set of campaigns (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of campaigns to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a campaign. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.</p>
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

export interface ListDatasetExportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset
   *       export jobs for.</p>
   */
  datasetArn?: string;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetExportJobs</code> for getting the next set of dataset
   *       export jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset export jobs to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a dataset export job. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API.</p>
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

export interface ListDatasetExportJobsResponse {
  /**
   * <p>The list of dataset export jobs.</p>
   */
  datasetExportJobs?: DatasetExportJobSummary[];

  /**
   * <p>A token for getting the next set of dataset export jobs (if they
   *       exist).</p>
   */
  nextToken?: string;
}

export interface ListDatasetGroupsRequest {
  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetGroups</code> for getting the next set of dataset
   *       groups (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset groups to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a dataset group. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API.</p>
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

  /**
   * <p>The domain of a Domain dataset group.</p>
   */
  domain?: Domain | string;
}

export interface ListDatasetGroupsResponse {
  /**
   * <p>The list of your dataset groups.</p>
   */
  datasetGroups?: DatasetGroupSummary[];

  /**
   * <p>A token for getting the next set of dataset groups (if they
   *       exist).</p>
   */
  nextToken?: string;
}

export interface ListDatasetImportJobsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset
   *       import jobs for.</p>
   */
  datasetArn?: string;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetImportJobs</code> for getting the next set of dataset
   *       import jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of dataset import jobs to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a dataset import job. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API.</p>
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

  /**
   * <p>The import mode the dataset import job used to update the data in the dataset.
   *       For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-existing-bulk-data.html">Updating existing bulk
   *       data</a>.
   *     </p>
   */
  importMode?: ImportMode | string;
}

export interface ListDatasetImportJobsResponse {
  /**
   * <p>The list of dataset import jobs.</p>
   */
  datasetImportJobs?: DatasetImportJobSummary[];

  /**
   * <p>A token for getting the next set of dataset import jobs (if they
   *       exist).</p>
   */
  nextToken?: string;
}

export interface ListDatasetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the
   *       datasets to list.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to
   *         <code>ListDatasetImportJobs</code> for getting the next set of dataset
   *       import jobs (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of datasets to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a dataset. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API.</p>
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

export interface ListDatasetsResponse {
  /**
   * <p>An array of <code>Dataset</code> objects. Each object provides
   *       metadata information.</p>
   */
  datasets?: DatasetSummary[];

  /**
   * <p>A token for getting the next set of datasets (if they exist).</p>
   */
  nextToken?: string;
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

/**
 * <p>Provides a summary of the properties of an event tracker. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API.</p>
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

export interface ListMetricAttributionMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the metric attribution to retrieve attributes for.</p>
   */
  metricAttributionArn?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of metrics to return in one page of results.</p>
   */
  maxResults?: number;
}

export interface ListMetricAttributionMetricsResponse {
  /**
   * <p>The metrics for the specified metric attribution.</p>
   */
  metrics?: MetricAttribute[];

  /**
   * <p>Specify the pagination token from a previous <code>ListMetricAttributionMetricsResponse</code> request to retrieve the next page of results.</p>
   */
  nextToken?: string;
}

export interface ListMetricAttributionsRequest {
  /**
   * <p>The metric attributions' dataset group Amazon Resource Name (ARN).</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of metric attributions to return in one page of results.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>.</p>
 */
export interface MetricAttributionSummary {
  /**
   * <p>The name of the metric attribution.</p>
   */
  name?: string;

  /**
   * <p>The metric attribution's Amazon Resource Name (ARN).</p>
   */
  metricAttributionArn?: string;

  /**
   * <p>The metric attribution's status.</p>
   */
  status?: string;

  /**
   * <p>The metric attribution's creation date time.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The metric attribution's last updated date time.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The metric attribution's failure reason.</p>
   */
  failureReason?: string;
}

export interface ListMetricAttributionsResponse {
  /**
   * <p>The list of metric attributions.</p>
   */
  metricAttributions?: MetricAttributionSummary[];

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   */
  nextToken?: string;
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

  /**
   * <p>
   *       Filters returned recipes by domain for a Domain dataset group. Only recipes (Domain dataset group use cases)
   *       for this domain are included in the response. If you don't specify a domain, all recipes are returned.
   *     </p>
   */
  domain?: Domain | string;
}

/**
 * <p>Provides a summary of the properties of a recipe. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API.</p>
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

  /**
   * <p>The domain of the recipe (if the recipe is a Domain dataset group use case).</p>
   */
  domain?: Domain | string;
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

export interface ListRecommendersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group to list the recommenders for. When
   *       a Domain dataset group is not specified, all the recommenders associated with the account are listed.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>A token returned from the previous call to <code>ListRecommenders</code> for getting
   *       the next set of recommenders (if they exist).</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recommenders to return.</p>
   */
  maxResults?: number;
}

/**
 * <p>Provides a summary of the properties of the recommender.</p>
 */
export interface RecommenderSummary {
  /**
   * <p>The name of the recommender.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender.</p>
   */
  recommenderArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for.</p>
   */
  recipeArn?: string;

  /**
   * <p>The configuration details of the recommender.</p>
   */
  recommenderConfig?: RecommenderConfig;

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
   */
  status?: string;

  /**
   * <p>The date and time (in Unix format) that the recommender was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix format) that the recommender was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export interface ListRecommendersResponse {
  /**
   * <p>A list of the recommenders.</p>
   */
  recommenders?: RecommenderSummary[];

  /**
   * <p>A token for getting the next set of recommenders (if they exist).</p>
   */
  nextToken?: string;
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

/**
 * <p>Provides a summary of the properties of a dataset schema. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API.</p>
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

  /**
   * <p>The domain of a schema that you created for a dataset in a Domain dataset group.</p>
   */
  domain?: Domain | string;
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

/**
 * <p>Provides a summary of the properties of a solution. For a complete listing, call the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) of the recipe used by the solution.</p>
   */
  recipeArn?: string;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource's tags.</p>
   */
  tags?: Tag[];
}

export interface StartRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to start.</p>
   */
  recommenderArn: string | undefined;
}

export interface StartRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender you started.</p>
   */
  recommenderArn?: string;
}

export interface StopRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to stop.</p>
   */
  recommenderArn: string | undefined;
}

export interface StopRecommenderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender you stopped.</p>
   */
  recommenderArn?: string;
}

export interface StopSolutionVersionCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version you want to stop creating.</p>
   */
  solutionVersionArn: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags to apply to the resource. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">Tagging Personalize resources</a>.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per resource). </p>
 */
export class TooManyTagKeysException extends __BaseException {
  readonly name: "TooManyTagKeysException" = "TooManyTagKeysException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagKeysException, __BaseException>) {
    super({
      name: "TooManyTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagKeysException.prototype);
  }
}

export interface UntagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys to remove from the resource's tags.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

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

export interface UpdateCampaignResponse {
  /**
   * <p>The same campaign ARN as given in the request.</p>
   */
  campaignArn?: string;
}

export interface UpdateMetricAttributionRequest {
  /**
   * <p>Add new metric attributes to the metric attribution.</p>
   */
  addMetrics?: MetricAttribute[];

  /**
   * <p>Remove metric attributes from the metric attribution.</p>
   */
  removeMetrics?: string[];

  /**
   * <p>An output config for the metric attribution.</p>
   */
  metricsOutputConfig?: MetricAttributionOutput;

  /**
   * <p>The Amazon Resource Name (ARN) for the metric attribution to update.</p>
   */
  metricAttributionArn?: string;
}

export interface UpdateMetricAttributionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the metric attribution that you updated.</p>
   */
  metricAttributionArn?: string;
}

export interface UpdateRecommenderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommender to modify.</p>
   */
  recommenderArn: string | undefined;

  /**
   * <p>The configuration details of the recommender.</p>
   */
  recommenderConfig: RecommenderConfig | undefined;
}

export interface UpdateRecommenderResponse {
  /**
   * <p>The same recommender Amazon Resource Name (ARN) as given in the request.</p>
   */
  recommenderArn?: string;
}

/**
 * @internal
 */
export const AlgorithmImageFilterSensitiveLog = (obj: AlgorithmImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultCategoricalHyperParameterRangeFilterSensitiveLog = (
  obj: DefaultCategoricalHyperParameterRange
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultContinuousHyperParameterRangeFilterSensitiveLog = (
  obj: DefaultContinuousHyperParameterRange
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultIntegerHyperParameterRangeFilterSensitiveLog = (obj: DefaultIntegerHyperParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultHyperParameterRangesFilterSensitiveLog = (obj: DefaultHyperParameterRanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmFilterSensitiveLog = (obj: Algorithm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchInferenceJobConfigFilterSensitiveLog = (obj: BatchInferenceJobConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataConfigFilterSensitiveLog = (obj: S3DataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchInferenceJobInputFilterSensitiveLog = (obj: BatchInferenceJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchInferenceJobOutputFilterSensitiveLog = (obj: BatchInferenceJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBatchInferenceJobRequestFilterSensitiveLog = (obj: CreateBatchInferenceJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBatchInferenceJobResponseFilterSensitiveLog = (obj: CreateBatchInferenceJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSegmentJobInputFilterSensitiveLog = (obj: BatchSegmentJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSegmentJobOutputFilterSensitiveLog = (obj: BatchSegmentJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBatchSegmentJobRequestFilterSensitiveLog = (obj: CreateBatchSegmentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBatchSegmentJobResponseFilterSensitiveLog = (obj: CreateBatchSegmentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignConfigFilterSensitiveLog = (obj: CampaignConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCampaignRequestFilterSensitiveLog = (obj: CreateCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCampaignResponseFilterSensitiveLog = (obj: CreateCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetExportJobOutputFilterSensitiveLog = (obj: DatasetExportJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetExportJobRequestFilterSensitiveLog = (obj: CreateDatasetExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetExportJobResponseFilterSensitiveLog = (obj: CreateDatasetExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetGroupRequestFilterSensitiveLog = (obj: CreateDatasetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetGroupResponseFilterSensitiveLog = (obj: CreateDatasetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetImportJobRequestFilterSensitiveLog = (obj: CreateDatasetImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetImportJobResponseFilterSensitiveLog = (obj: CreateDatasetImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventTrackerRequestFilterSensitiveLog = (obj: CreateEventTrackerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventTrackerResponseFilterSensitiveLog = (obj: CreateEventTrackerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFilterRequestFilterSensitiveLog = (obj: CreateFilterRequest): any => ({
  ...obj,
  ...(obj.filterExpression && { filterExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateFilterResponseFilterSensitiveLog = (obj: CreateFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricAttributeFilterSensitiveLog = (obj: MetricAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricAttributionOutputFilterSensitiveLog = (obj: MetricAttributionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMetricAttributionRequestFilterSensitiveLog = (obj: CreateMetricAttributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMetricAttributionResponseFilterSensitiveLog = (obj: CreateMetricAttributionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommenderConfigFilterSensitiveLog = (obj: RecommenderConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecommenderRequestFilterSensitiveLog = (obj: CreateRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecommenderResponseFilterSensitiveLog = (obj: CreateRecommenderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaRequestFilterSensitiveLog = (obj: CreateSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaResponseFilterSensitiveLog = (obj: CreateSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLConfigFilterSensitiveLog = (obj: AutoMLConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoricalHyperParameterRangeFilterSensitiveLog = (obj: CategoricalHyperParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContinuousHyperParameterRangeFilterSensitiveLog = (obj: ContinuousHyperParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntegerHyperParameterRangeFilterSensitiveLog = (obj: IntegerHyperParameterRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterRangesFilterSensitiveLog = (obj: HyperParameterRanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HPOObjectiveFilterSensitiveLog = (obj: HPOObjective): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HPOResourceConfigFilterSensitiveLog = (obj: HPOResourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HPOConfigFilterSensitiveLog = (obj: HPOConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptimizationObjectiveFilterSensitiveLog = (obj: OptimizationObjective): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionConfigFilterSensitiveLog = (obj: SolutionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSolutionRequestFilterSensitiveLog = (obj: CreateSolutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSolutionResponseFilterSensitiveLog = (obj: CreateSolutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSolutionVersionRequestFilterSensitiveLog = (obj: CreateSolutionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSolutionVersionResponseFilterSensitiveLog = (obj: CreateSolutionVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCampaignRequestFilterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetGroupRequestFilterSensitiveLog = (obj: DeleteDatasetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventTrackerRequestFilterSensitiveLog = (obj: DeleteEventTrackerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFilterRequestFilterSensitiveLog = (obj: DeleteFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMetricAttributionRequestFilterSensitiveLog = (obj: DeleteMetricAttributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecommenderRequestFilterSensitiveLog = (obj: DeleteRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchemaRequestFilterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSolutionRequestFilterSensitiveLog = (obj: DeleteSolutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmRequestFilterSensitiveLog = (obj: DescribeAlgorithmRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmResponseFilterSensitiveLog = (obj: DescribeAlgorithmResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchInferenceJobRequestFilterSensitiveLog = (obj: DescribeBatchInferenceJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchInferenceJobFilterSensitiveLog = (obj: BatchInferenceJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchInferenceJobResponseFilterSensitiveLog = (obj: DescribeBatchInferenceJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchSegmentJobRequestFilterSensitiveLog = (obj: DescribeBatchSegmentJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSegmentJobFilterSensitiveLog = (obj: BatchSegmentJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchSegmentJobResponseFilterSensitiveLog = (obj: DescribeBatchSegmentJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCampaignRequestFilterSensitiveLog = (obj: DescribeCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignUpdateSummaryFilterSensitiveLog = (obj: CampaignUpdateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignFilterSensitiveLog = (obj: Campaign): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCampaignResponseFilterSensitiveLog = (obj: DescribeCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetFilterSensitiveLog = (obj: Dataset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetExportJobRequestFilterSensitiveLog = (obj: DescribeDatasetExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetExportJobFilterSensitiveLog = (obj: DatasetExportJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetExportJobResponseFilterSensitiveLog = (obj: DescribeDatasetExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetGroupRequestFilterSensitiveLog = (obj: DescribeDatasetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetGroupFilterSensitiveLog = (obj: DatasetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetGroupResponseFilterSensitiveLog = (obj: DescribeDatasetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetImportJobRequestFilterSensitiveLog = (obj: DescribeDatasetImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetImportJobFilterSensitiveLog = (obj: DatasetImportJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetImportJobResponseFilterSensitiveLog = (obj: DescribeDatasetImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTrackerRequestFilterSensitiveLog = (obj: DescribeEventTrackerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventTrackerFilterSensitiveLog = (obj: EventTracker): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTrackerResponseFilterSensitiveLog = (obj: DescribeEventTrackerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureTransformationRequestFilterSensitiveLog = (
  obj: DescribeFeatureTransformationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureTransformationFilterSensitiveLog = (obj: FeatureTransformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureTransformationResponseFilterSensitiveLog = (
  obj: DescribeFeatureTransformationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFilterRequestFilterSensitiveLog = (obj: DescribeFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
  ...(obj.filterExpression && { filterExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeFilterResponseFilterSensitiveLog = (obj: DescribeFilterResponse): any => ({
  ...obj,
  ...(obj.filter && { filter: FilterFilterSensitiveLog(obj.filter) }),
});

/**
 * @internal
 */
export const DescribeMetricAttributionRequestFilterSensitiveLog = (obj: DescribeMetricAttributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricAttributionFilterSensitiveLog = (obj: MetricAttribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricAttributionResponseFilterSensitiveLog = (obj: DescribeMetricAttributionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecipeRequestFilterSensitiveLog = (obj: DescribeRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeFilterSensitiveLog = (obj: Recipe): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecipeResponseFilterSensitiveLog = (obj: DescribeRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecommenderRequestFilterSensitiveLog = (obj: DescribeRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommenderUpdateSummaryFilterSensitiveLog = (obj: RecommenderUpdateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommenderFilterSensitiveLog = (obj: Recommender): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecommenderResponseFilterSensitiveLog = (obj: DescribeRecommenderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchemaRequestFilterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSchemaFilterSensitiveLog = (obj: DatasetSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchemaResponseFilterSensitiveLog = (obj: DescribeSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSolutionRequestFilterSensitiveLog = (obj: DescribeSolutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoMLResultFilterSensitiveLog = (obj: AutoMLResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionVersionSummaryFilterSensitiveLog = (obj: SolutionVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionFilterSensitiveLog = (obj: Solution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSolutionResponseFilterSensitiveLog = (obj: DescribeSolutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSolutionVersionRequestFilterSensitiveLog = (obj: DescribeSolutionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TunedHPOParamsFilterSensitiveLog = (obj: TunedHPOParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionVersionFilterSensitiveLog = (obj: SolutionVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSolutionVersionResponseFilterSensitiveLog = (obj: DescribeSolutionVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSolutionMetricsRequestFilterSensitiveLog = (obj: GetSolutionMetricsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSolutionMetricsResponseFilterSensitiveLog = (obj: GetSolutionMetricsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchInferenceJobsRequestFilterSensitiveLog = (obj: ListBatchInferenceJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchInferenceJobSummaryFilterSensitiveLog = (obj: BatchInferenceJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchInferenceJobsResponseFilterSensitiveLog = (obj: ListBatchInferenceJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchSegmentJobsRequestFilterSensitiveLog = (obj: ListBatchSegmentJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSegmentJobSummaryFilterSensitiveLog = (obj: BatchSegmentJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchSegmentJobsResponseFilterSensitiveLog = (obj: ListBatchSegmentJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCampaignsRequestFilterSensitiveLog = (obj: ListCampaignsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignSummaryFilterSensitiveLog = (obj: CampaignSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCampaignsResponseFilterSensitiveLog = (obj: ListCampaignsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetExportJobsRequestFilterSensitiveLog = (obj: ListDatasetExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetExportJobSummaryFilterSensitiveLog = (obj: DatasetExportJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetExportJobsResponseFilterSensitiveLog = (obj: ListDatasetExportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetGroupsRequestFilterSensitiveLog = (obj: ListDatasetGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetGroupSummaryFilterSensitiveLog = (obj: DatasetGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetGroupsResponseFilterSensitiveLog = (obj: ListDatasetGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetImportJobsRequestFilterSensitiveLog = (obj: ListDatasetImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetImportJobSummaryFilterSensitiveLog = (obj: DatasetImportJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetImportJobsResponseFilterSensitiveLog = (obj: ListDatasetImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsRequestFilterSensitiveLog = (obj: ListDatasetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSummaryFilterSensitiveLog = (obj: DatasetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsResponseFilterSensitiveLog = (obj: ListDatasetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventTrackersRequestFilterSensitiveLog = (obj: ListEventTrackersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventTrackerSummaryFilterSensitiveLog = (obj: EventTrackerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventTrackersResponseFilterSensitiveLog = (obj: ListEventTrackersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFiltersRequestFilterSensitiveLog = (obj: ListFiltersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterSummaryFilterSensitiveLog = (obj: FilterSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFiltersResponseFilterSensitiveLog = (obj: ListFiltersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricAttributionMetricsRequestFilterSensitiveLog = (
  obj: ListMetricAttributionMetricsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricAttributionMetricsResponseFilterSensitiveLog = (
  obj: ListMetricAttributionMetricsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricAttributionsRequestFilterSensitiveLog = (obj: ListMetricAttributionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricAttributionSummaryFilterSensitiveLog = (obj: MetricAttributionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricAttributionsResponseFilterSensitiveLog = (obj: ListMetricAttributionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipesRequestFilterSensitiveLog = (obj: ListRecipesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeSummaryFilterSensitiveLog = (obj: RecipeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipesResponseFilterSensitiveLog = (obj: ListRecipesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendersRequestFilterSensitiveLog = (obj: ListRecommendersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommenderSummaryFilterSensitiveLog = (obj: RecommenderSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendersResponseFilterSensitiveLog = (obj: ListRecommendersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasRequestFilterSensitiveLog = (obj: ListSchemasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSchemaSummaryFilterSensitiveLog = (obj: DatasetSchemaSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasResponseFilterSensitiveLog = (obj: ListSchemasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSolutionsRequestFilterSensitiveLog = (obj: ListSolutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionSummaryFilterSensitiveLog = (obj: SolutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSolutionsResponseFilterSensitiveLog = (obj: ListSolutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSolutionVersionsRequestFilterSensitiveLog = (obj: ListSolutionVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSolutionVersionsResponseFilterSensitiveLog = (obj: ListSolutionVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecommenderRequestFilterSensitiveLog = (obj: StartRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRecommenderResponseFilterSensitiveLog = (obj: StartRecommenderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopRecommenderRequestFilterSensitiveLog = (obj: StopRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopRecommenderResponseFilterSensitiveLog = (obj: StopRecommenderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSolutionVersionCreationRequestFilterSensitiveLog = (obj: StopSolutionVersionCreationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignRequestFilterSensitiveLog = (obj: UpdateCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignResponseFilterSensitiveLog = (obj: UpdateCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMetricAttributionRequestFilterSensitiveLog = (obj: UpdateMetricAttributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMetricAttributionResponseFilterSensitiveLog = (obj: UpdateMetricAttributionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecommenderRequestFilterSensitiveLog = (obj: UpdateRecommenderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecommenderResponseFilterSensitiveLog = (obj: UpdateRecommenderResponse): any => ({
  ...obj,
});
