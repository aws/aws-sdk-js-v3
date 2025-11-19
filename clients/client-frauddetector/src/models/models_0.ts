// smithy-typescript generated code
import {
  AsyncJobStatus,
  DataSource,
  DataType,
  DetectorVersionStatus,
  EventIngestion,
  Language,
  ListUpdateMode,
  ModelEndpointStatus,
  ModelInputDataFormat,
  ModelOutputDataFormat,
  ModelSource,
  ModelTypeEnum,
  ModelVersionStatus,
  RuleExecutionMode,
  TrainingDataSourceEnum,
  UnlabeledEventsTreatment,
} from "./enums";

/**
 * <p>The log odds metric details.</p>
 *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 * @public
 */
export interface AggregatedLogOddsMetric {
  /**
   * <p>
   *             The names of all the variables.
   *         </p>
   * @public
   */
  variableNames: string[] | undefined;

  /**
   * <p>
   *             The relative importance of the variables in the list to the other event variable.
   *         </p>
   * @public
   */
  aggregatedVariablesImportance: number | undefined;
}

/**
 * <p>
 *             The details of the impact of aggregated variables on the prediction score. </p>
 *          <p>Account Takeover Insights (ATI) model  uses the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 * @public
 */
export interface AggregatedVariablesImpactExplanation {
  /**
   * <p>
   *             The names of all the event variables that were used to derive the aggregated variables.
   *         </p>
   * @public
   */
  eventVariableNames?: string[] | undefined;

  /**
   * <p>
   *             The relative impact of the aggregated variables in terms of magnitude on the prediction scores.
   *         </p>
   * @public
   */
  relativeImpact?: string | undefined;

  /**
   * <p>
   *             The raw, uninterpreted value represented as log-odds of the fraud.  These values are usually between -10 to +10, but range from -infinity to +infinity.</p>
   *          <ul>
   *             <li>
   *                <p>A positive value indicates that the variables drove the risk score up.</p>
   *             </li>
   *             <li>
   *                <p>A negative value indicates that the variables drove the risk score down.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logOddsImpact?: number | undefined;
}

/**
 * <p>The details of the relative importance of the aggregated variables.</p>
 *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 * @public
 */
export interface AggregatedVariablesImportanceMetrics {
  /**
   * <p>
   *             List of variables' metrics.
   *         </p>
   * @public
   */
  logOddsMetrics?: AggregatedLogOddsMetric[] | undefined;
}

/**
 * <p>
 *             The metadata of a list.
 *         </p>
 * @public
 */
export interface AllowDenyList {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             The description of the list.
   *         </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *             The variable type of the list.
   *         </p>
   * @public
   */
  variableType?: string | undefined;

  /**
   * <p>
   *             The time the list was created.
   *         </p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>
   *             The time the list was last updated.
   *         </p>
   * @public
   */
  updatedTime?: string | undefined;

  /**
   * <p>
   *             The ARN of the list.
   *         </p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>
 *             The Account Takeover Insights (ATI) model performance metrics data points.
 *         </p>
 * @public
 */
export interface ATIMetricDataPoint {
  /**
   * <p>
   *           The challenge rate. This indicates the percentage of login events that the model recommends to challenge such as
   *           one-time password, multi-factor authentication, and investigations.
   *         </p>
   * @public
   */
  cr?: number | undefined;

  /**
   * <p>
   *             The anomaly discovery rate. This metric quantifies the percentage of anomalies that can be detected by the model at the selected score threshold.
   *             A lower score threshold increases the percentage of anomalies captured by the model, but would also require challenging a larger percentage of
   *             login events, leading to a higher customer friction.
   *         </p>
   * @public
   */
  adr?: number | undefined;

  /**
   * <p>
   *             The model's threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is
   *             labeled as fraud.
   *         </p>
   * @public
   */
  threshold?: number | undefined;

  /**
   * <p>
   *             The account takeover discovery rate. This metric quantifies the percentage of account compromise events that can be detected by the model at the selected score threshold.
   *             This metric is only available if 50 or more entities with at-least one labeled account takeover event is present in the ingested dataset.
   *         </p>
   * @public
   */
  atodr?: number | undefined;
}

/**
 * <p>
 *             The Account Takeover Insights (ATI) model performance score.
 *         </p>
 * @public
 */
export interface ATIModelPerformance {
  /**
   * <p>
   *             The anomaly separation index (ASI) score. This metric summarizes the overall ability of the model to separate anomalous activities from the normal behavior. Depending on the business, a
   *             large fraction of these anomalous activities can be malicious and correspond to the account takeover attacks. A model with no separability power will have the lowest possible
   *             ASI score of 0.5, whereas the a model with a high separability power will have the highest possible ASI score of 1.0
   *         </p>
   * @public
   */
  asi?: number | undefined;
}

/**
 * <p>
 *             The Account Takeover Insights (ATI) model training metric details.
 *         </p>
 * @public
 */
export interface ATITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   * @public
   */
  metricDataPoints?: ATIMetricDataPoint[] | undefined;

  /**
   * <p>
   *             The model's overall performance scores.
   *         </p>
   * @public
   */
  modelPerformance?: ATIModelPerformance | undefined;
}

/**
 * <p>A key and value pair. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>A tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A value assigned to a tag key.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A variable in the list of variables for the batch create variable request.</p>
 * @public
 */
export interface VariableEntry {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the variable.</p>
   * @public
   */
  dataType?: string | undefined;

  /**
   * <p>The data source of the variable.</p>
   * @public
   */
  dataSource?: string | undefined;

  /**
   * <p>The default value of the variable.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The description of the variable.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
   *          </p>
   * @public
   */
  variableType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVariableRequest {
  /**
   * <p>The list of variables for the batch create variable request.</p>
   * @public
   */
  variableEntries: VariableEntry[] | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Provides the error of the batch create variable API.</p>
 * @public
 */
export interface BatchCreateVariableError {
  /**
   * <p>The name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The error code. </p>
   * @public
   */
  code?: number | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVariableResult {
  /**
   * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
   * @public
   */
  errors?: BatchCreateVariableError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetVariableRequest {
  /**
   * <p>The list of variable names to get.</p>
   * @public
   */
  names: string[] | undefined;
}

/**
 * <p>Provides the error of the batch get variable API.</p>
 * @public
 */
export interface BatchGetVariableError {
  /**
   * <p>The error name. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The error code. </p>
   * @public
   */
  code?: number | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The variable.</p>
 * @public
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * <p>The data source of the variable.</p>
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * <p>The default value of the variable.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The description of the variable. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The variable type of the variable.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
   *          </p>
   * @public
   */
  variableType?: string | undefined;

  /**
   * <p>The time when variable was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The time when the variable was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The ARN of the variable.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetVariableResult {
  /**
   * <p>The returned variables.</p>
   * @public
   */
  variables?: Variable[] | undefined;

  /**
   * <p>The errors from the request.</p>
   * @public
   */
  errors?: BatchGetVariableError[] | undefined;
}

/**
 * @public
 */
export interface CancelBatchImportJobRequest {
  /**
   * <p> The ID of an in-progress batch import job to cancel. </p>
   *          <p>Amazon Fraud Detector will throw an error if the batch import job is in <code>FAILED</code>, <code>CANCELED</code>, or  <code>COMPLETED</code> state.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelBatchImportJobResult {}

/**
 * @public
 */
export interface CancelBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job to cancel.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelBatchPredictionJobResult {}

/**
 * @public
 */
export interface CreateBatchImportJobRequest {
  /**
   * <p>The ID of the batch import job. The ID cannot be of a past job, unless the job exists in <code>CREATE_FAILED</code> state.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The URI that points to the Amazon S3 location of your data file.</p>
   * @public
   */
  inputPath: string | undefined;

  /**
   * <p>The URI that points to the Amazon S3 location for storing your results. </p>
   * @public
   */
  outputPath: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>The ARN of the IAM role created for Amazon S3 bucket that holds your data file.</p>
   *          <p>The IAM role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket.
   *          For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key-value pairs associated with this request.  </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBatchImportJobResult {}

/**
 * @public
 */
export interface CreateBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon S3 location of your training file.</p>
   * @public
   */
  inputPath: string | undefined;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   * @public
   */
  outputPath: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>The name of the detector.</p>
   * @public
   */
  detectorName: string | undefined;

  /**
   * <p>The detector version.</p>
   * @public
   */
  detectorVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   *          <p>The IAM Role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket.
   *          For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBatchPredictionJobResult {}

/**
 * <p>The model version.</p>
 * @public
 */
export interface ModelVersion {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model version ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>A rule.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The detector for which the rule is associated.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The rule ID.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The rule version.</p>
   * @public
   */
  ruleVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateDetectorVersionRequest {
  /**
   * <p>The ID of the detector under which you want to create a new version.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The description of the detector version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Sagemaker model endpoints to include in the detector version.</p>
   * @public
   */
  externalModelEndpoints?: string[] | undefined;

  /**
   * <p>The rules to include in the detector version.</p>
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * <p>The model versions to include in the detector version.</p>
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * <p>The rule execution mode for the rules included in the detector version.</p>
   *          <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDetectorVersionResult {
  /**
   * <p>The ID for the created version's parent detector.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The ID for the created detector. </p>
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * <p>The status of the detector version.</p>
   * @public
   */
  status?: DetectorVersionStatus | undefined;
}

/**
 * @public
 */
export interface CreateListRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             The names of the elements, if providing.  You can also create an empty list and add elements later using the <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_Updatelist.html">UpdateList</a> API.
   *         </p>
   * @public
   */
  elements?: string[] | undefined;

  /**
   * <p>
   *             The variable type of the list. You can only assign the variable type with String data type.  For more information, see
   *             <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
   *         </p>
   * @public
   */
  variableType?: string | undefined;

  /**
   * <p>
   *             The description of the list.
   *         </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *             A collection of the key and value pairs.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateListResult {}

/**
 * @public
 */
export interface CreateModelRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type. </p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The model description. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelResult {}

/**
 * <p>Details for the external events data used for model version training.</p>
 * @public
 */
export interface ExternalEventsDetail {
  /**
   * <p>The Amazon S3 bucket location for the data.</p>
   * @public
   */
  dataLocation: string | undefined;

  /**
   * <p>The ARN of the role that provides Amazon Fraud Detector access to the data location.</p>
   * @public
   */
  dataAccessRoleArn: string | undefined;
}

/**
 * <p>The start and stop time of the ingested events.</p>
 * @public
 */
export interface IngestedEventsTimeWindow {
  /**
   * <p>Timestamp of the first ingensted event.</p>
   * @public
   */
  startTime: string | undefined;

  /**
   * <p>Timestamp of the final ingested event.</p>
   * @public
   */
  endTime: string | undefined;
}

/**
 * <p>The details of the ingested event.</p>
 * @public
 */
export interface IngestedEventsDetail {
  /**
   * <p>The start and stop time of the ingested events.</p>
   * @public
   */
  ingestedEventsTimeWindow: IngestedEventsTimeWindow | undefined;
}

/**
 * <p>The label schema.</p>
 * @public
 */
export interface LabelSchema {
  /**
   * <p>The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>\{"FRAUD" => ["0"]</code>, <code>"LEGIT" => ["1"]\}</code> or <code>\{"FRAUD" => ["false"]</code>, <code>"LEGIT" => ["true"]\}</code> or <code>\{"FRAUD" => ["fraud", "abuse"]</code>, <code>"LEGIT" => ["legit", "safe"]\}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
   *         </p>
   * @public
   */
  labelMapper?: Record<string, string[]> | undefined;

  /**
   * <p>The action to take for unlabeled events.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>IGNORE</code> if you want the unlabeled events to be ignored. This is recommended when the majority of the events in the dataset are labeled.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>FRAUD</code>  if you want to categorize all unlabeled events as “Fraud”.  This is recommended when most of the events in your dataset are fraudulent.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>LEGIT</code> if you want to categorize all unlabeled events as “Legit”. This is recommended when most of the events in your dataset are legitimate.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>AUTO</code> if you want Amazon Fraud Detector to decide how to use the unlabeled data.  This is recommended when there is significant unlabeled events in the dataset.</p>
   *             </li>
   *          </ul>
   *          <p>By default, Amazon Fraud Detector ignores the unlabeled data.</p>
   * @public
   */
  unlabeledEventsTreatment?: UnlabeledEventsTreatment | undefined;
}

/**
 * <p>The training data schema.</p>
 * @public
 */
export interface TrainingDataSchema {
  /**
   * <p>The training data schema variables.</p>
   * @public
   */
  modelVariables: string[] | undefined;

  /**
   * <p>The label schema.</p>
   * @public
   */
  labelSchema?: LabelSchema | undefined;
}

/**
 * @public
 */
export interface CreateModelVersionRequest {
  /**
   * <p>The model ID. </p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The training data source location in Amazon S3. </p>
   * @public
   */
  trainingDataSource: TrainingDataSourceEnum | undefined;

  /**
   * <p>The training data schema.</p>
   * @public
   */
  trainingDataSchema: TrainingDataSchema | undefined;

  /**
   * <p>Details of the external events data used for model version training. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * <p>Details of the ingested events data used for model version training. Required if <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelVersionResult {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The model version number of the model version created.</p>
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * <p>The model version status. </p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>The rule ID.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The detector ID for the rule's parent detector.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The rule description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The rule expression.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The language of the rule.</p>
   * @public
   */
  language: Language | undefined;

  /**
   * <p>The outcome or outcomes returned when the rule expression matches.</p>
   * @public
   */
  outcomes: string[] | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleResult {
  /**
   * <p>The created rule.</p>
   * @public
   */
  rule?: Rule | undefined;
}

/**
 * @public
 */
export interface CreateVariableRequest {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the variable.</p>
   * @public
   */
  dataType: DataType | undefined;

  /**
   * <p>The source of the data.</p>
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * <p>The default value for the variable when no value is received.</p>
   * @public
   */
  defaultValue: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
   * 				</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT</code>
   *          </p>
   * @public
   */
  variableType?: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateVariableResult {}

/**
 * @public
 */
export interface DeleteBatchImportJobRequest {
  /**
   * <p>The ID of the batch import job to delete. </p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchImportJobResult {}

/**
 * @public
 */
export interface DeleteBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job to delete.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchPredictionJobResult {}

/**
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * <p>The ID of the detector to delete.</p>
   * @public
   */
  detectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDetectorResult {}

/**
 * @public
 */
export interface DeleteDetectorVersionRequest {
  /**
   * <p>The ID of the parent detector for the detector version to delete.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The ID of the detector version to delete.</p>
   * @public
   */
  detectorVersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDetectorVersionResult {}

/**
 * @public
 */
export interface DeleteEntityTypeRequest {
  /**
   * <p>The name of the entity type to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEntityTypeResult {}

/**
 * @public
 */
export interface DeleteEventRequest {
  /**
   * <p>The ID of the event to delete.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>Specifies whether or not to delete any predictions associated with the event. If set to <code>True</code>, </p>
   * @public
   */
  deleteAuditHistory?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteEventResult {}

/**
 * @public
 */
export interface DeleteEventsByEventTypeRequest {
  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventsByEventTypeResult {
  /**
   * <p>Name of event type for which to delete the events.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>The status of the delete request.</p>
   * @public
   */
  eventsDeletionStatus?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTypeRequest {
  /**
   * <p>The name of the event type to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTypeResult {}

/**
 * @public
 */
export interface DeleteExternalModelRequest {
  /**
   * <p>The endpoint of the Amazon Sagemaker model to delete.</p>
   * @public
   */
  modelEndpoint: string | undefined;
}

/**
 * @public
 */
export interface DeleteExternalModelResult {}

/**
 * @public
 */
export interface DeleteLabelRequest {
  /**
   * <p>The name of the label to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelResult {}

/**
 * @public
 */
export interface DeleteListRequest {
  /**
   * <p>
   *             The name of the list to delete.
   *         </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteListResult {}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * <p>The model ID of the model to delete.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type of the model to delete.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;
}

/**
 * @public
 */
export interface DeleteModelResult {}

/**
 * @public
 */
export interface DeleteModelVersionRequest {
  /**
   * <p>The model ID of the model version to delete.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type of the model version to delete.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The model version number of the model version to delete.</p>
   * @public
   */
  modelVersionNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelVersionResult {}

/**
 * @public
 */
export interface DeleteOutcomeRequest {
  /**
   * <p>The name of the outcome to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteOutcomeResult {}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>A rule.</p>
   * @public
   */
  rule: Rule | undefined;
}

/**
 * @public
 */
export interface DeleteRuleResult {}

/**
 * @public
 */
export interface DeleteVariableRequest {
  /**
   * <p>The name of the variable to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteVariableResult {}

/**
 * @public
 */
export interface DescribeDetectorRequest {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The next token from the previous response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the detector version.</p>
 * @public
 */
export interface DetectorVersionSummary {
  /**
   * <p>The detector version ID. </p>
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * <p>The detector version status. </p>
   * @public
   */
  status?: DetectorVersionStatus | undefined;

  /**
   * <p>The detector version description. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp of when the detector version was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorResult {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The status and description for each detector version.</p>
   * @public
   */
  detectorVersionSummaries?: DetectorVersionSummary[] | undefined;

  /**
   * <p>The next token to be used for subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The detector ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionsRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The next token from the previous results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The message details.</p>
 * @public
 */
export interface FieldValidationMessage {
  /**
   * <p>The field name.</p>
   * @public
   */
  fieldName?: string | undefined;

  /**
   * <p>The message ID.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The message title.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message content.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The message type.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The message details.</p>
 * @public
 */
export interface FileValidationMessage {
  /**
   * <p>The message title.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The message content.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The message type.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The model training data validation metrics.</p>
 * @public
 */
export interface DataValidationMetrics {
  /**
   * <p>The file-specific model training data validation messages.</p>
   * @public
   */
  fileLevelMessages?: FileValidationMessage[] | undefined;

  /**
   * <p>The field-specific model training validation messages.</p>
   * @public
   */
  fieldLevelMessages?: FieldValidationMessage[] | undefined;
}

/**
 * <p>Model performance metrics data points.</p>
 * @public
 */
export interface MetricDataPoint {
  /**
   * <p>The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.</p>
   * @public
   */
  fpr?: number | undefined;

  /**
   * <p>The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.</p>
   * @public
   */
  precision?: number | undefined;

  /**
   * <p>The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.</p>
   * @public
   */
  tpr?: number | undefined;

  /**
   * <p>The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.</p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * <p>The training metric details.</p>
 * @public
 */
export interface TrainingMetrics {
  /**
   * <p>The area under the curve. This summarizes true positive rate (TPR) and false positive rate (FPR) across all possible model score thresholds. A model with no predictive power has an AUC of 0.5, whereas a perfect model has a score of 1.0.</p>
   * @public
   */
  auc?: number | undefined;

  /**
   * <p>The data points details.</p>
   * @public
   */
  metricDataPoints?: MetricDataPoint[] | undefined;
}

/**
 * <p>The log odds metric details.</p>
 * @public
 */
export interface LogOddsMetric {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  variableName: string | undefined;

  /**
   * <p>The type of variable.</p>
   * @public
   */
  variableType: string | undefined;

  /**
   * <p>The relative importance of the variable. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/model-variable-importance.html">Model variable importance</a>.</p>
   * @public
   */
  variableImportance: number | undefined;
}

/**
 * <p>The variable importance metrics details.</p>
 * @public
 */
export interface VariableImportanceMetrics {
  /**
   * <p>List of variable metrics.</p>
   * @public
   */
  logOddsMetrics?: LogOddsMetric[] | undefined;
}

/**
 * <p>The training result details.</p>
 * @public
 */
export interface TrainingResult {
  /**
   * <p>The validation metrics.</p>
   * @public
   */
  dataValidationMetrics?: DataValidationMetrics | undefined;

  /**
   * <p>The training metric details.</p>
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * <p>The variable importance metrics.</p>
   * @public
   */
  variableImportanceMetrics?: VariableImportanceMetrics | undefined;
}

/**
 * <p>
 *             The Online Fraud Insights (OFI) model performance metrics data points.
 *         </p>
 * @public
 */
export interface OFIMetricDataPoint {
  /**
   * <p>
   *             The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *         </p>
   * @public
   */
  fpr?: number | undefined;

  /**
   * <p>
   *             The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *         </p>
   * @public
   */
  precision?: number | undefined;

  /**
   * <p>
   *             The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *         </p>
   * @public
   */
  tpr?: number | undefined;

  /**
   * <p>
   *             The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *         </p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * <p>
 *             Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity.
 *             A range is the difference between upper and lower bound of auc.
 *         </p>
 * @public
 */
export interface UncertaintyRange {
  /**
   * <p>
   *             The lower bound value of the area under curve (auc).
   *         </p>
   * @public
   */
  lowerBoundValue: number | undefined;

  /**
   * <p>
   *             The upper bound value of the area under curve (auc).
   *         </p>
   * @public
   */
  upperBoundValue: number | undefined;
}

/**
 * <p>
 *             The Online Fraud Insights (OFI) model performance score.
 *         </p>
 * @public
 */
export interface OFIModelPerformance {
  /**
   * <p>
   *             The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *         </p>
   * @public
   */
  auc?: number | undefined;

  /**
   * <p>
   *             Indicates the range of area under curve (auc) expected from the OFI model. A range greater than 0.1 indicates higher model uncertainity.
   *         </p>
   * @public
   */
  uncertaintyRange?: UncertaintyRange | undefined;
}

/**
 * <p>
 *             The Online Fraud Insights (OFI) model training metric details.
 *         </p>
 * @public
 */
export interface OFITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   * @public
   */
  metricDataPoints?: OFIMetricDataPoint[] | undefined;

  /**
   * <p>
   *             The model's overall performance score.
   *         </p>
   * @public
   */
  modelPerformance?: OFIModelPerformance | undefined;
}

/**
 * <p>
 *             The performance metrics data points for Transaction Fraud Insights (TFI) model.
 *         </p>
 * @public
 */
export interface TFIMetricDataPoint {
  /**
   * <p>
   *             The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *         </p>
   * @public
   */
  fpr?: number | undefined;

  /**
   * <p>
   *             The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *         </p>
   * @public
   */
  precision?: number | undefined;

  /**
   * <p>
   *             The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *         </p>
   * @public
   */
  tpr?: number | undefined;

  /**
   * <p>
   *             The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any
   *             model score 500 or above is labeled as fraud.
   *         </p>
   * @public
   */
  threshold?: number | undefined;
}

/**
 * <p>
 *             The Transaction Fraud Insights (TFI) model performance score.
 *         </p>
 * @public
 */
export interface TFIModelPerformance {
  /**
   * <p>
   *             The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *         </p>
   * @public
   */
  auc?: number | undefined;

  /**
   * <p>
   *             Indicates the range of area under curve (auc) expected from the TFI model. A range greater than 0.1 indicates higher model uncertainity.
   *         </p>
   * @public
   */
  uncertaintyRange?: UncertaintyRange | undefined;
}

/**
 * <p>
 *             The Transaction Fraud Insights (TFI) model training metric details.
 *         </p>
 * @public
 */
export interface TFITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   * @public
   */
  metricDataPoints?: TFIMetricDataPoint[] | undefined;

  /**
   * <p>
   *             The model performance score.
   *         </p>
   * @public
   */
  modelPerformance?: TFIModelPerformance | undefined;
}

/**
 * <p>
 *             The training metrics details.
 *         </p>
 * @public
 */
export interface TrainingMetricsV2 {
  /**
   * <p>
   *             The Online Fraud Insights (OFI) model training metric details.
   *         </p>
   * @public
   */
  ofi?: OFITrainingMetricsValue | undefined;

  /**
   * <p>
   *             The Transaction Fraud Insights (TFI) model training metric details.
   *         </p>
   * @public
   */
  tfi?: TFITrainingMetricsValue | undefined;

  /**
   * <p>
   *             The Account Takeover Insights (ATI) model training metric details.
   *         </p>
   * @public
   */
  ati?: ATITrainingMetricsValue | undefined;
}

/**
 * <p>
 *             The training result details.
 *         </p>
 * @public
 */
export interface TrainingResultV2 {
  /**
   * <p>The model training data validation metrics.</p>
   * @public
   */
  dataValidationMetrics?: DataValidationMetrics | undefined;

  /**
   * <p>
   *             The training metric details.
   *         </p>
   * @public
   */
  trainingMetricsV2?: TrainingMetricsV2 | undefined;

  /**
   * <p>The variable importance metrics details.</p>
   * @public
   */
  variableImportanceMetrics?: VariableImportanceMetrics | undefined;

  /**
   * <p>
   *             The variable importance metrics of the aggregated variables.
   *         </p>
   *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
   *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
   *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
   * @public
   */
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics | undefined;
}

/**
 * <p>The details of the model version.</p>
 * @public
 */
export interface ModelVersionDetail {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * <p>The status of the model version.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The model version training data source.</p>
   * @public
   */
  trainingDataSource?: TrainingDataSourceEnum | undefined;

  /**
   * <p>The training data schema.</p>
   * @public
   */
  trainingDataSchema?: TrainingDataSchema | undefined;

  /**
   * <p>The external events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as  <code>EXTERNAL_EVENTS</code>.</p>
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * <p>The ingested events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as  <code>INGESTED_EVENTS</code>.</p>
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * <p>The training results.</p>
   * @public
   */
  trainingResult?: TrainingResult | undefined;

  /**
   * <p>The timestamp when the model was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The timestamp when the model was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The model version ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *             The training result details. The details include the relative importance of the variables.
   *         </p>
   * @public
   */
  trainingResultV2?: TrainingResultV2 | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionsResult {
  /**
   * <p>The model version details.</p>
   * @public
   */
  modelVersionDetails?: ModelVersionDetail[] | undefined;

  /**
   * <p>The next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBatchImportJobsRequest {
  /**
   * <p>The ID of the batch import job to get.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The maximum number of objects to return for request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The next token from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The batch import job details.</p>
 * @public
 */
export interface BatchImport {
  /**
   * <p>The ID of the batch import job. </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The status of the batch import job.</p>
   * @public
   */
  status?: AsyncJobStatus | undefined;

  /**
   * <p>The reason batch import job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Timestamp of when the batch import job started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>Timestamp of when batch import job completed.</p>
   * @public
   */
  completionTime?: string | undefined;

  /**
   * <p>The Amazon S3 location of your data file for batch import.</p>
   * @public
   */
  inputPath?: string | undefined;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   * @public
   */
  outputPath?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   * @public
   */
  iamRoleArn?: string | undefined;

  /**
   * <p>The ARN of the batch import job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of records processed by batch import job.</p>
   * @public
   */
  processedRecordsCount?: number | undefined;

  /**
   * <p>The number of records that failed to import. </p>
   * @public
   */
  failedRecordsCount?: number | undefined;

  /**
   * <p>The total number of records in the batch import job.</p>
   * @public
   */
  totalRecordsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetBatchImportJobsResult {
  /**
   * <p>An array containing the details of each batch import job.</p>
   * @public
   */
  batchImports?: BatchImport[] | undefined;

  /**
   * <p>The next token for the subsequent resquest.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsRequest {
  /**
   * <p>The batch prediction job for which to get the details.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The next token from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The batch prediction details.</p>
 * @public
 */
export interface BatchPrediction {
  /**
   * <p>The job ID for the batch prediction.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The batch prediction status.</p>
   * @public
   */
  status?: AsyncJobStatus | undefined;

  /**
   * <p>The reason a batch prediction job failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>Timestamp of when the batch prediction job started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>Timestamp of when the batch prediction job completed.</p>
   * @public
   */
  completionTime?: string | undefined;

  /**
   * <p>Timestamp of most recent heartbeat indicating the batch prediction job was making progress.</p>
   * @public
   */
  lastHeartbeatTime?: string | undefined;

  /**
   * <p>The Amazon S3 location of your training file.</p>
   * @public
   */
  inputPath?: string | undefined;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   * @public
   */
  outputPath?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>The name of the detector.</p>
   * @public
   */
  detectorName?: string | undefined;

  /**
   * <p>The detector version. </p>
   * @public
   */
  detectorVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   * @public
   */
  iamRoleArn?: string | undefined;

  /**
   * <p>The ARN of batch prediction job.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of records processed by the batch prediction job.</p>
   * @public
   */
  processedRecordsCount?: number | undefined;

  /**
   * <p>The total number of records in the batch prediction job.</p>
   * @public
   */
  totalRecordsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsResult {
  /**
   * <p>An array containing the details of each batch prediction job.</p>
   * @public
   */
  batchPredictions?: BatchPrediction[] | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusRequest {
  /**
   * <p>Name of event type for which to get the deletion status.</p>
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusResult {
  /**
   * <p>The event type name.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>The deletion status.</p>
   * @public
   */
  eventsDeletionStatus?: AsyncJobStatus | undefined;
}

/**
 * @public
 */
export interface GetDetectorsRequest {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The detector.</p>
 * @public
 */
export interface Detector {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The detector description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>Timestamp of when the detector was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>Timestamp of when the detector was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The detector ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorsResult {
  /**
   * <p>The detectors.</p>
   * @public
   */
  detectors?: Detector[] | undefined;

  /**
   * <p>The next page token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorVersionRequest {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   * @public
   */
  detectorVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorVersionResult {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The detector version ID.</p>
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * <p>The detector version description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon SageMaker model endpoints included in the detector version.</p>
   * @public
   */
  externalModelEndpoints?: string[] | undefined;

  /**
   * <p>The model versions included in the detector version. </p>
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * <p>The rules included in the detector version.</p>
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * <p>The status of the detector version.</p>
   * @public
   */
  status?: DetectorVersionStatus | undefined;

  /**
   * <p>The timestamp when the detector version was last updated.
   *         </p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The timestamp when the detector version was created. </p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The execution mode of the rule in the dectector</p>
   *          <p>
   *             <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>
   *             <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * <p>The detector version ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityTypesRequest {
  /**
   * <p>The name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The entity type details.</p>
 * @public
 */
export interface EntityType {
  /**
   * <p>The entity type name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The entity type description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp of when the entity type was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>Timestamp of when the entity type was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The entity type ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityTypesResult {
  /**
   * <p>An array of entity types.</p>
   * @public
   */
  entityTypes?: EntityType[] | undefined;

  /**
   * <p>The next page token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEventRequest {
  /**
   * <p>The ID of the event to retrieve.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event type of the event to retrieve.</p>
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * <p>The entity details. </p>
 * @public
 */
export interface Entity {
  /**
   * <p>The entity type.</p>
   * @public
   */
  entityType: string | undefined;

  /**
   * <p>The entity ID. If you do not know the <code>entityId</code>, you can pass <code>unknown</code>, which is areserved string literal.</p>
   * @public
   */
  entityId: string | undefined;
}

/**
 * <p>The event details.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The event ID.</p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>The event type.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
   * @public
   */
  eventVariables?: Record<string, string> | undefined;

  /**
   * <p>The label associated with the event.</p>
   * @public
   */
  currentLabel?: string | undefined;

  /**
   * <p>The timestamp associated with the label to update. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   * @public
   */
  labelTimestamp?: string | undefined;

  /**
   * <p>The event entities.</p>
   * @public
   */
  entities?: Entity[] | undefined;
}

/**
 * @public
 */
export interface GetEventResult {
  /**
   * <p>The details of the event.</p>
   * @public
   */
  event?: Event | undefined;
}

/**
 * <p>A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.</p>
 * @public
 */
export interface ModelEndpointDataBlob {
  /**
   * <p>The byte buffer of the Amazon SageMaker model endpoint input data blob.</p>
   * @public
   */
  byteBuffer?: Uint8Array | undefined;

  /**
   * <p>The content type of the Amazon SageMaker model endpoint input data blob. </p>
   * @public
   */
  contentType?: string | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionRequest {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * <p>The unique ID used to identify the event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event type associated with the detector specified for the prediction.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>The entity type (associated with the detector's event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."</p>
   * @public
   */
  entities: Entity[] | undefined;

  /**
   * <p>Timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   * @public
   */
  eventTimestamp: string | undefined;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and
   *          their corresponding values for the event you are sending for evaluation.</p>
   *          <important>
   *             <p>You must provide at least one eventVariable</p>
   *          </important>
   *          <p>To ensure most accurate fraud prediction and to simplify your data preparation, Amazon Fraud Detector will replace all missing variables or values as follows:</p>
   *          <p>
   *             <b>For Amazon Fraud Detector trained models:</b>
   *          </p>
   *          <p>If a null value is provided explicitly for a variable or if a variable is missing, model will replace the null value or the missing variable (no variable name in the eventVariables map)
   *          with calculated default mean/medians for numeric variables and with special values for categorical variables.</p>
   *          <p>
   *             <b>For imported SageMaker models:</b>
   *          </p>
   *          <p>If a null value is provided explicitly for a variable, the model and rules will use “null” as the value. If a variable is not provided (no variable name in the eventVariables map), model and rules
   *          will use the default value that is provided for the variable. </p>
   * @public
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * <p>The Amazon SageMaker model endpoint input data blobs.</p>
   * @public
   */
  externalModelEndpointDataBlobs?: Record<string, ModelEndpointDataBlob> | undefined;
}

/**
 * <p>The Amazon SageMaker model.</p>
 * @public
 */
export interface ExternalModelSummary {
  /**
   * <p>The endpoint of the Amazon SageMaker model.</p>
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * <p>The source of the model.</p>
   * @public
   */
  modelSource?: ModelSource | undefined;
}

/**
 * <p>The fraud prediction scores from Amazon SageMaker model.</p>
 * @public
 */
export interface ExternalModelOutputs {
  /**
   * <p>The Amazon SageMaker model.</p>
   * @public
   */
  externalModel?: ExternalModelSummary | undefined;

  /**
   * <p>The fraud prediction scores from Amazon SageMaker model.</p>
   * @public
   */
  outputs?: Record<string, string> | undefined;
}

/**
 * <p>The fraud prediction scores.</p>
 * @public
 */
export interface ModelScores {
  /**
   * <p>The model version.</p>
   * @public
   */
  modelVersion?: ModelVersion | undefined;

  /**
   * <p>The model's fraud prediction scores.</p>
   * @public
   */
  scores?: Record<string, number> | undefined;
}

/**
 * <p>The rule results.</p>
 * @public
 */
export interface RuleResult {
  /**
   * <p>The rule ID that was matched, based on the rule execution mode.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The outcomes of the matched rule, based on the rule execution mode.</p>
   * @public
   */
  outcomes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionResult {
  /**
   * <p>The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.</p>
   * @public
   */
  modelScores?: ModelScores[] | undefined;

  /**
   * <p>The results from the rules.</p>
   * @public
   */
  ruleResults?: RuleResult[] | undefined;

  /**
   * <p>The model scores for Amazon SageMaker models.</p>
   * @public
   */
  externalModelOutputs?: ExternalModelOutputs[] | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionMetadataRequest {
  /**
   * <p>
   * The event ID.
   * </p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>
   * The event type associated with the detector specified for the prediction.
   * </p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>
   * The detector ID.
   * </p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>
   * The detector version ID.
   * </p>
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * <p>
   *     The timestamp that defines when the prediction was generated. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   *          <p>We recommend calling <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html">ListEventPredictions</a>
   *         first, and using the <code>predictionTimestamp</code> value in the response to provide an accurate prediction timestamp value.</p>
   * @public
   */
  predictionTimestamp: string | undefined;
}

/**
 * <p>
 * The details of the external (Amazon Sagemaker) model evaluated for generating predictions.
 * </p>
 * @public
 */
export interface EvaluatedExternalModel {
  /**
   * <p>
   * The endpoint of the external (Amazon Sagemaker) model.
   * </p>
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * <p>
   * Indicates whether event variables were used to generate predictions.
   * </p>
   * @public
   */
  useEventVariables?: boolean | undefined;

  /**
   * <p>
   * Input variables use for generating predictions.
   * </p>
   * @public
   */
  inputVariables?: Record<string, string> | undefined;

  /**
   * <p>
   * Output variables.
   * </p>
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * <p>
 * The details of the event variable's impact on the prediction score.
 * </p>
 * @public
 */
export interface VariableImpactExplanation {
  /**
   * <p>
   * The event variable name.
   * </p>
   * @public
   */
  eventVariableName?: string | undefined;

  /**
   * <p>
   *     The event variable's relative impact in terms of magnitude on the prediction scores.
   *     The relative impact values consist of a numerical rating (0-5, 5 being the highest) and direction (increased/decreased) impact of the fraud risk.
   * </p>
   * @public
   */
  relativeImpact?: string | undefined;

  /**
   * <p>
   *     The raw, uninterpreted value represented as log-odds of the fraud. These values are usually between -10 to +10, but range from - infinity to + infinity.</p>
   *          <ul>
   *             <li>
   *                <p>A positive value indicates that the variable drove the risk score up.</p>
   *             </li>
   *             <li>
   *                <p>A negative value indicates that the variable drove the risk score down.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logOddsImpact?: number | undefined;
}

/**
 * <p>
 * The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.
 * </p>
 * @public
 */
export interface PredictionExplanations {
  /**
   * <p>
   * The details of the event variable's impact on the prediction score.
   * </p>
   * @public
   */
  variableImpactExplanations?: VariableImpactExplanation[] | undefined;

  /**
   * <p>
   *             The details of the aggregated variables impact on the prediction score.
   *         </p>
   *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
   *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
   *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
   * @public
   */
  aggregatedVariablesImpactExplanations?: AggregatedVariablesImpactExplanation[] | undefined;
}

/**
 * <p>
 * The model version evalutions.
 * </p>
 * @public
 */
export interface ModelVersionEvaluation {
  /**
   * <p>
   * The output variable name.
   * </p>
   * @public
   */
  outputVariableName?: string | undefined;

  /**
   * <p>
   * The evaluation score generated for the model version.
   * </p>
   * @public
   */
  evaluationScore?: string | undefined;

  /**
   * <p>
   * The prediction explanations generated for the model version.
   * </p>
   * @public
   */
  predictionExplanations?: PredictionExplanations | undefined;
}

/**
 * <p>
 * The model version evaluated for generating prediction.
 * </p>
 * @public
 */
export interface EvaluatedModelVersion {
  /**
   * <p>
   * The model ID.
   * </p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>
   * The model version.
   * </p>
   * @public
   */
  modelVersion?: string | undefined;

  /**
   * <p>The model type. </p>
   *          <p>Valid values: <code>ONLINE_FRAUD_INSIGHTS</code> | <code>TRANSACTION_FRAUD_INSIGHTS</code>
   *          </p>
   * @public
   */
  modelType?: string | undefined;

  /**
   * <p>
   * Evaluations generated for the model version.
   * </p>
   * @public
   */
  evaluations?: ModelVersionEvaluation[] | undefined;
}

/**
 * <p>
 * Information about the summary of an event variable that was evaluated for generating prediction.
 * </p>
 * @public
 */
export interface EventVariableSummary {
  /**
   * <p>
   * The event variable name.
   * </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   * The value of the event variable.
   * </p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>
   * The event variable source.
   * </p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>
 * The details of the rule used for evaluating variable values.
 * </p>
 * @public
 */
export interface EvaluatedRule {
  /**
   * <p>
   * The rule ID.
   * </p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>
   * The rule version.
   * </p>
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * <p>
   * The rule expression.
   * </p>
   * @public
   */
  expression?: string | undefined;

  /**
   * <p>
   * The rule expression value.
   * </p>
   * @public
   */
  expressionWithValues?: string | undefined;

  /**
   * <p>
   * The rule outcome.
   * </p>
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * <p>
   * Indicates whether the rule was evaluated.
   * </p>
   * @public
   */
  evaluated?: boolean | undefined;

  /**
   * <p>
   * Indicates whether the rule matched.
   * </p>
   * @public
   */
  matched?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionMetadataResult {
  /**
   * <p>
   * The event ID.
   * </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>
   * The event type associated with the detector specified for this prediction.
   * </p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>
   * The entity ID.
   * </p>
   * @public
   */
  entityId?: string | undefined;

  /**
   * <p>
   * The entity type.
   * </p>
   * @public
   */
  entityType?: string | undefined;

  /**
   * <p>
   * The timestamp for when the prediction was generated for the associated event ID.
   * </p>
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * <p>
   * The detector ID.
   * </p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>
   * The detector version ID.
   * </p>
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * <p>
   * The status of the detector version.
   * </p>
   * @public
   */
  detectorVersionStatus?: string | undefined;

  /**
   * <p>
   * A list of event variables that influenced the prediction scores.
   * </p>
   * @public
   */
  eventVariables?: EventVariableSummary[] | undefined;

  /**
   * <p>
   * List of rules associated with the detector version that were used for evaluating variable values.
   * </p>
   * @public
   */
  rules?: EvaluatedRule[] | undefined;

  /**
   * <p>
   * The execution mode of the rule used for evaluating variable values.
   * </p>
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * <p>
   * The outcomes of the matched rule, based on the rule execution mode.
   * </p>
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * <p>
   * Model versions that were evaluated for generating predictions.
   * </p>
   * @public
   */
  evaluatedModelVersions?: EvaluatedModelVersion[] | undefined;

  /**
   * <p>
   * External (Amazon SageMaker) models that were evaluated for generating predictions.
   * </p>
   * @public
   */
  evaluatedExternalModels?: EvaluatedExternalModel[] | undefined;

  /**
   * <p>The timestamp that defines when the prediction was generated. </p>
   * @public
   */
  predictionTimestamp?: string | undefined;
}

/**
 * @public
 */
export interface GetEventTypesRequest {
  /**
   * <p>The name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *          The event orchestration status.
 *       </p>
 * @public
 */
export interface EventOrchestration {
  /**
   * <p>Specifies if event orchestration is enabled through Amazon EventBridge.</p>
   * @public
   */
  eventBridgeEnabled: boolean | undefined;
}

/**
 * <p>Data about the stored events.</p>
 * @public
 */
export interface IngestedEventStatistics {
  /**
   * <p>The number of stored events.</p>
   * @public
   */
  numberOfEvents?: number | undefined;

  /**
   * <p>The total size of the stored events.</p>
   * @public
   */
  eventDataSizeInBytes?: number | undefined;

  /**
   * <p>The oldest stored event.</p>
   * @public
   */
  leastRecentEvent?: string | undefined;

  /**
   * <p>The newest stored event.</p>
   * @public
   */
  mostRecentEvent?: string | undefined;

  /**
   * <p>Timestamp of when the stored event was last updated.
   *       </p>
   * @public
   */
  lastUpdatedTime?: string | undefined;
}

/**
 * <p>The event type details.</p>
 * @public
 */
export interface EventType {
  /**
   * <p>The event type name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The event type description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The event type event variables.</p>
   * @public
   */
  eventVariables?: string[] | undefined;

  /**
   * <p>The event type labels.</p>
   * @public
   */
  labels?: string[] | undefined;

  /**
   * <p>The event type entity types.</p>
   * @public
   */
  entityTypes?: string[] | undefined;

  /**
   * <p>If <code>Enabled</code>, Amazon Fraud Detector stores event data when you generate a prediction and uses that data to update calculated variables in near real-time. Amazon Fraud Detector uses this data, known as <code>INGESTED_EVENTS</code>, to train your model and  improve fraud predictions.</p>
   * @public
   */
  eventIngestion?: EventIngestion | undefined;

  /**
   * <p>Data about the stored events.</p>
   * @public
   */
  ingestedEventStatistics?: IngestedEventStatistics | undefined;

  /**
   * <p>Timestamp of when the event type was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>Timestamp of when the event type was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The entity type ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The event orchestration status. </p>
   * @public
   */
  eventOrchestration?: EventOrchestration | undefined;
}

/**
 * @public
 */
export interface GetEventTypesResult {
  /**
   * <p>An array of event types.</p>
   * @public
   */
  eventTypes?: EventType[] | undefined;

  /**
   * <p>The next page token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExternalModelsRequest {
  /**
   * <p>The Amazon SageMaker model endpoint.</p>
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * <p>The next page token for the request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The Amazon SageMaker model input configuration.</p>
 * @public
 */
export interface ModelInputConfiguration {
  /**
   * <p>The event type name.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p> The format of the model input configuration. The format differs depending on if it is
   *             passed through to SageMaker or constructed by Amazon Fraud Detector.</p>
   * @public
   */
  format?: ModelInputDataFormat | undefined;

  /**
   * <p>The event variables.</p>
   * @public
   */
  useEventVariables: boolean | undefined;

  /**
   * <p> Template for constructing the JSON input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   * @public
   */
  jsonInputTemplate?: string | undefined;

  /**
   * <p> Template for constructing the CSV input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable-names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   * @public
   */
  csvInputTemplate?: string | undefined;
}

/**
 * <p>Provides the Amazon Sagemaker model output configuration.</p>
 * @public
 */
export interface ModelOutputConfiguration {
  /**
   * <p>The format of the model output configuration.</p>
   * @public
   */
  format: ModelOutputDataFormat | undefined;

  /**
   * <p>A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. </p>
   * @public
   */
  jsonKeyToVariableMap?: Record<string, string> | undefined;

  /**
   * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
   * @public
   */
  csvIndexToVariableMap?: Record<string, string> | undefined;
}

/**
 * <p>The Amazon SageMaker model.</p>
 * @public
 */
export interface ExternalModel {
  /**
   * <p>The Amazon SageMaker model endpoints.</p>
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * <p>The source of the model.</p>
   * @public
   */
  modelSource?: ModelSource | undefined;

  /**
   * <p>The role used to invoke the model. </p>
   * @public
   */
  invokeModelEndpointRoleArn?: string | undefined;

  /**
   * <p>The input configuration.</p>
   * @public
   */
  inputConfiguration?: ModelInputConfiguration | undefined;

  /**
   * <p>The output configuration.</p>
   * @public
   */
  outputConfiguration?: ModelOutputConfiguration | undefined;

  /**
   * <p>The Amazon Fraud Detector status for the external model endpoint</p>
   * @public
   */
  modelEndpointStatus?: ModelEndpointStatus | undefined;

  /**
   * <p>Timestamp of when the model was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>Timestamp of when the model was last created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The model ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetExternalModelsResult {
  /**
   * <p>Gets the Amazon SageMaker models.</p>
   * @public
   */
  externalModels?: ExternalModel[] | undefined;

  /**
   * <p>The next page token to be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The KMS key details.</p>
 * @public
 */
export interface KMSKey {
  /**
   * <p>The encryption key ARN.</p>
   * @public
   */
  kmsEncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetKMSEncryptionKeyResult {
  /**
   * <p>The KMS encryption key.</p>
   * @public
   */
  kmsKey?: KMSKey | undefined;
}

/**
 * @public
 */
export interface GetLabelsRequest {
  /**
   * <p>The name of the label or labels to get.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The label details.</p>
 * @public
 */
export interface Label {
  /**
   * <p>The label name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The label description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp of when the label was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>Timestamp of when the event type was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The label ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetLabelsResult {
  /**
   * <p>An array of labels.</p>
   * @public
   */
  labels?: Label[] | undefined;

  /**
   * <p>The next page token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetListElementsRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             The next token for the subsequent request.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of objects to return for the request.
   *         </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetListElementsResult {
  /**
   * <p>
   *             The list elements.
   *         </p>
   * @public
   */
  elements?: string[] | undefined;

  /**
   * <p>
   *             The next page token.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetListsMetadataRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *             The next token for the subsequent request.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of objects to return for the request.
   *         </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetListsMetadataResult {
  /**
   * <p>
   *             The metadata of the specified list or all lists under the account.
   *         </p>
   * @public
   */
  lists?: AllowDenyList[] | undefined;

  /**
   * <p>
   *             The next page token.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The next token for the subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The model.</p>
 * @public
 */
export interface Model {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The model description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>Timestamp of when the model was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>Timestamp of last time the model was updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The ARN of the model.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsResult {
  /**
   * <p>The next page token to be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The array of models.</p>
   * @public
   */
  models?: Model[] | undefined;
}

/**
 * @public
 */
export interface GetModelVersionRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber: string | undefined;
}

/**
 * @public
 */
export interface GetModelVersionResult {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * <p>The training data source.</p>
   * @public
   */
  trainingDataSource?: TrainingDataSourceEnum | undefined;

  /**
   * <p>The training data schema.</p>
   * @public
   */
  trainingDataSchema?: TrainingDataSchema | undefined;

  /**
   * <p>The details of the external events data used for training the model version.
   *          This will be populated if the <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>
   *          </p>
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * <p>The details of the ingested events data used for training the model version.
   *          This will be populated if the <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * <p>The model version status.</p>
   *          <p>Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TRAINING_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRAINING_COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATE_REQUESTED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVATE_REQUESTED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The model version ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutcomesRequest {
  /**
   * <p>The name of the outcome or outcomes to get.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The next page token for the request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The outcome.</p>
 * @public
 */
export interface Outcome {
  /**
   * <p>The outcome name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The outcome description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the outcome was last updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The timestamp when the outcome was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The outcome ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutcomesResult {
  /**
   * <p>The outcomes. </p>
   * @public
   */
  outcomes?: Outcome[] | undefined;

  /**
   * <p>The next page token for subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRulesRequest {
  /**
   * <p>The rule ID.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The rule version.</p>
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * <p>The next page token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of rules to return for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of the rule.</p>
 * @public
 */
export interface RuleDetail {
  /**
   * <p>The rule ID.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The rule description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The detector for which the rule is associated.</p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The rule version.</p>
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * <p>The rule expression.</p>
   * @public
   */
  expression?: string | undefined;

  /**
   * <p>The rule language.</p>
   * @public
   */
  language?: Language | undefined;

  /**
   * <p>The rule outcomes.</p>
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * <p>Timestamp of the last time the rule was updated.</p>
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * <p>The timestamp of when the rule was created.</p>
   * @public
   */
  createdTime?: string | undefined;

  /**
   * <p>The rule ARN.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetRulesResult {
  /**
   * <p>The details of the requested rule.</p>
   * @public
   */
  ruleDetails?: RuleDetail[] | undefined;

  /**
   * <p>The next page token to be used in subsequent requests.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVariablesRequest {
  /**
   * <p>The name of the variable. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The next page token of the get variable request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The max size per page determined for the get variable request. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetVariablesResult {
  /**
   * <p>The names of the variables returned. </p>
   * @public
   */
  variables?: Variable[] | undefined;

  /**
   * <p>The next page token to be used in subsequent requests. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 * A conditional statement for filtering a list of past predictions.
 * </p>
 * @public
 */
export interface FilterCondition {
  /**
   * <p>
   * A statement containing a resource property and a value to specify filter condition.
   * </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>
 * The time period for when the predictions were generated.
 * </p>
 * @public
 */
export interface PredictionTimeRange {
  /**
   * <p>
   * The start time of the time period for when the predictions were generated.
   * </p>
   * @public
   */
  startTime: string | undefined;

  /**
   * <p>
   * The end time of the time period for when the predictions were generated.
   * </p>
   * @public
   */
  endTime: string | undefined;
}

/**
 * @public
 */
export interface ListEventPredictionsRequest {
  /**
   * <p>
   * The event ID.
   * </p>
   * @public
   */
  eventId?: FilterCondition | undefined;

  /**
   * <p>
   * The event type associated with the detector.
   * </p>
   * @public
   */
  eventType?: FilterCondition | undefined;

  /**
   * <p>
   * The detector ID.
   * </p>
   * @public
   */
  detectorId?: FilterCondition | undefined;

  /**
   * <p>
   * The detector version ID.
   * </p>
   * @public
   */
  detectorVersionId?: FilterCondition | undefined;

  /**
   * <p>
   * The time period for when the predictions were generated.
   * </p>
   * @public
   */
  predictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p>
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   * The maximum number of predictions to return for the request.
   * </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 * Information about the summary of an event prediction.
 * </p>
 * @public
 */
export interface EventPredictionSummary {
  /**
   * <p>
   * The event ID.
   * </p>
   * @public
   */
  eventId?: string | undefined;

  /**
   * <p>
   * The event type.
   * </p>
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * <p>
   * The timestamp of the event.
   * </p>
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * <p>
   * The timestamp when the prediction was generated.
   * </p>
   * @public
   */
  predictionTimestamp?: string | undefined;

  /**
   * <p>
   * The detector ID.
   * </p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>
   * The detector version ID.
   * </p>
   * @public
   */
  detectorVersionId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventPredictionsResult {
  /**
   * <p>
   * The summary of the past predictions.
   * </p>
   * @public
   */
  eventPredictionSummaries?: EventPredictionSummary[] | undefined;

  /**
   * <p>
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN that specifies the resource whose tags you want to list.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The next token from the previous results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The next token for subsequent requests. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDetectorRequest {
  /**
   * <p>The detector ID. </p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The description of the detector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the event type.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutDetectorResult {}

/**
 * @public
 */
export interface PutEntityTypeRequest {
  /**
   * <p>The name of the entity type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutEntityTypeResult {}

/**
 * @public
 */
export interface PutEventTypeRequest {
  /**
   * <p>The name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the event type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The event type variables.</p>
   * @public
   */
  eventVariables: string[] | undefined;

  /**
   * <p>The event type labels.</p>
   * @public
   */
  labels?: string[] | undefined;

  /**
   * <p>The entity type for the event type. Example entity types: customer, merchant, account.</p>
   * @public
   */
  entityTypes: string[] | undefined;

  /**
   * <p>Specifies if ingestion is enabled or disabled.</p>
   * @public
   */
  eventIngestion?: EventIngestion | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Enables or disables event orchestration. If enabled, you can send event predictions to select AWS services for downstream processing of the events.</p>
   * @public
   */
  eventOrchestration?: EventOrchestration | undefined;
}

/**
 * @public
 */
export interface PutEventTypeResult {}

/**
 * @public
 */
export interface PutExternalModelRequest {
  /**
   * <p>The model endpoints name.</p>
   * @public
   */
  modelEndpoint: string | undefined;

  /**
   * <p>The source of the model.</p>
   * @public
   */
  modelSource: ModelSource | undefined;

  /**
   * <p>The IAM role used to invoke the model endpoint.</p>
   * @public
   */
  invokeModelEndpointRoleArn: string | undefined;

  /**
   * <p>The model endpoint input configuration.</p>
   * @public
   */
  inputConfiguration: ModelInputConfiguration | undefined;

  /**
   * <p>The model endpoint output configuration.</p>
   * @public
   */
  outputConfiguration: ModelOutputConfiguration | undefined;

  /**
   * <p>The model endpoint’s status in Amazon Fraud Detector.</p>
   * @public
   */
  modelEndpointStatus: ModelEndpointStatus | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutExternalModelResult {}

/**
 * @public
 */
export interface PutKMSEncryptionKeyRequest {
  /**
   * <p>The KMS encryption key ARN.</p>
   *          <p>The KMS key must be single-Region key. Amazon Fraud Detector does not support multi-Region KMS key.</p>
   * @public
   */
  kmsEncryptionKeyArn: string | undefined;
}

/**
 * @public
 */
export interface PutKMSEncryptionKeyResult {}

/**
 * @public
 */
export interface PutLabelRequest {
  /**
   * <p>The label name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The label description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutLabelResult {}

/**
 * @public
 */
export interface PutOutcomeRequest {
  /**
   * <p>The name of the outcome.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The outcome description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutOutcomeResult {}

/**
 * @public
 */
export interface SendEventRequest {
  /**
   * <p>The event ID to upload.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event type name of the event.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   * @public
   */
  eventTimestamp: string | undefined;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
   * @public
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * <p>The label to associate with the event. Required if specifying <code>labelTimestamp</code>.</p>
   * @public
   */
  assignedLabel?: string | undefined;

  /**
   * <p>The timestamp associated with the label. Required if specifying <code>assignedLabel</code>.</p>
   * @public
   */
  labelTimestamp?: string | undefined;

  /**
   * <p>An array of entities.</p>
   * @public
   */
  entities: Entity[] | undefined;
}

/**
 * @public
 */
export interface SendEventResult {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The tags to assign to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource from which to remove the tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The resource ARN.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateDetectorVersionRequest {
  /**
   * <p>The parent detector ID for the detector version you want to update.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The Amazon SageMaker model endpoints to include in the detector version.</p>
   * @public
   */
  externalModelEndpoints: string[] | undefined;

  /**
   * <p>The rules to include in the detector version.</p>
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * <p>The detector version description. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The model versions to include in the detector version.</p>
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * <p>The rule execution mode to add to the detector.</p>
   *          <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorVersionResult {}

/**
 * @public
 */
export interface UpdateDetectorVersionMetadataRequest {
  /**
   * <p>The detector ID.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorVersionMetadataResult {}

/**
 * @public
 */
export interface UpdateDetectorVersionStatusRequest {
  /**
   * <p>The detector ID. </p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>The only supported values are <code>ACTIVE</code> and <code>INACTIVE</code>
   *          </p>
   * @public
   */
  status: DetectorVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorVersionStatusResult {}

/**
 * @public
 */
export interface UpdateEventLabelRequest {
  /**
   * <p>The ID of the event associated with the label to update.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event type of the event associated with the label to update.</p>
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * <p>The new label to assign to the event.</p>
   * @public
   */
  assignedLabel: string | undefined;

  /**
   * <p>The timestamp associated with the label. The timestamp must be specified using ISO 8601 standard in UTC. </p>
   * @public
   */
  labelTimestamp: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventLabelResult {}

/**
 * @public
 */
export interface UpdateListRequest {
  /**
   * <p>
   *             The name of the list to update.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             One or more list elements to add or replace. If you are providing the elements, make sure to specify the <code>updateMode</code> to use.
   *         </p>
   *          <p>If you are deleting all elements from the list, use <code>REPLACE</code> for the <code>updateMode</code> and provide an empty list (0 elements).</p>
   * @public
   */
  elements?: string[] | undefined;

  /**
   * <p>
   *             The new description.
   *         </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *             The update mode (type).
   *         </p>
   *          <ul>
   *             <li>
   *                <p>Use <code>APPEND</code> if you are adding elements to the list.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>REPLACE</code> if you replacing existing elements in the list.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>REMOVE</code> if you are removing elements from the list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  updateMode?: ListUpdateMode | undefined;

  /**
   * <p>
   *             The variable type you want to assign to the list.
   *         </p>
   *          <note>
   *             <p>You cannot update a variable type of a list that already has a variable type assigned to it. You can assign a variable type to a list only if the list does not already have a variable type.</p>
   *          </note>
   * @public
   */
  variableType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateListResult {}

/**
 * @public
 */
export interface UpdateModelRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The new model description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelResult {}

/**
 * @public
 */
export interface UpdateModelVersionRequest {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The major version number.</p>
   * @public
   */
  majorVersionNumber: string | undefined;

  /**
   * <p>The details of the external events data used for training the model version. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * <p>The details of the ingested event used for training the model version. Required if your <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateModelVersionResult {
  /**
   * <p>The model ID.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * <p>The model version number of the model version updated.</p>
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * <p>The status of the updated model version.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelVersionStatusRequest {
  /**
   * <p>The model ID of the model version to update.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * <p>The model version number.</p>
   * @public
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model version status.</p>
   * @public
   */
  status: ModelVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateModelVersionStatusResult {}

/**
 * @public
 */
export interface UpdateRuleMetadataRequest {
  /**
   * <p>The rule to update.</p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p>The rule description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleMetadataResult {}

/**
 * @public
 */
export interface UpdateRuleVersionRequest {
  /**
   * <p>The rule to update.</p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The rule expression.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The language.</p>
   * @public
   */
  language: Language | undefined;

  /**
   * <p>The outcomes.</p>
   * @public
   */
  outcomes: string[] | undefined;

  /**
   * <p>The tags to assign to the rule version.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleVersionResult {
  /**
   * <p>The new rule version that was created.</p>
   * @public
   */
  rule?: Rule | undefined;
}

/**
 * @public
 */
export interface UpdateVariableRequest {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new default value of the variable.</p>
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * <p>The new description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   * @public
   */
  variableType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariableResult {}
