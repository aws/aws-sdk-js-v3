// smithy-typescript generated code
import type {
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
 * The log odds metric details.
 *
 * Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are `IP address` and `user`.
 *
 * @public
 */
export interface AggregatedLogOddsMetric {
  /**
   * The names of all the variables.
   *
   * @public
   */
  variableNames: string[] | undefined;

  /**
   * The relative importance of the variables in the list to the other event variable.
   *
   * @public
   */
  aggregatedVariablesImportance: number | undefined;
}

/**
 * The details of the impact of aggregated variables on the prediction score.
 *
 * Account Takeover Insights (ATI) model uses the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are `IP address` and `user`.
 *
 * @public
 */
export interface AggregatedVariablesImpactExplanation {
  /**
   * The names of all the event variables that were used to derive the aggregated variables.
   *
   * @public
   */
  eventVariableNames?: string[] | undefined;

  /**
   * The relative impact of the aggregated variables in terms of magnitude on the prediction scores.
   *
   * @public
   */
  relativeImpact?: string | undefined;

  /**
   * The raw, uninterpreted value represented as log-odds of the fraud. These values are usually between -10 to +10, but range from -infinity to +infinity.
   *
   * - A positive value indicates that the variables drove the risk score up.
   * - A negative value indicates that the variables drove the risk score down.
   *
   * @public
   */
  logOddsImpact?: number | undefined;
}

/**
 * The details of the relative importance of the aggregated variables.
 *
 * Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are `IP address` and `user`.
 *
 * @public
 */
export interface AggregatedVariablesImportanceMetrics {
  /**
   * List of variables' metrics.
   *
   * @public
   */
  logOddsMetrics?: AggregatedLogOddsMetric[] | undefined;
}

/**
 * The metadata of a list.
 *
 * @public
 */
export interface AllowDenyList {
  /**
   * The name of the list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The variable type of the list.
   *
   * @public
   */
  variableType?: string | undefined;

  /**
   * The time the list was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The time the list was last updated.
   *
   * @public
   */
  updatedTime?: string | undefined;

  /**
   * The ARN of the list.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * The Account Takeover Insights (ATI) model performance metrics data points.
 *
 * @public
 */
export interface ATIMetricDataPoint {
  /**
   * The challenge rate. This indicates the percentage of login events that the model recommends to challenge such as one-time password, multi-factor authentication, and investigations.
   *
   * @public
   */
  cr?: number | undefined;

  /**
   * The anomaly discovery rate. This metric quantifies the percentage of anomalies that can be detected by the model at the selected score threshold. A lower score threshold increases the percentage of anomalies captured by the model, but would also require challenging a larger percentage of login events, leading to a higher customer friction.
   *
   * @public
   */
  adr?: number | undefined;

  /**
   * The model's threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *
   * @public
   */
  threshold?: number | undefined;

  /**
   * The account takeover discovery rate. This metric quantifies the percentage of account compromise events that can be detected by the model at the selected score threshold. This metric is only available if 50 or more entities with at-least one labeled account takeover event is present in the ingested dataset.
   *
   * @public
   */
  atodr?: number | undefined;
}

/**
 * The Account Takeover Insights (ATI) model performance score.
 *
 * @public
 */
export interface ATIModelPerformance {
  /**
   * The anomaly separation index (ASI) score. This metric summarizes the overall ability of the model to separate anomalous activities from the normal behavior. Depending on the business, a large fraction of these anomalous activities can be malicious and correspond to the account takeover attacks. A model with no separability power will have the lowest possible ASI score of 0.5, whereas the a model with a high separability power will have the highest possible ASI score of 1.0
   *
   * @public
   */
  asi?: number | undefined;
}

/**
 * The Account Takeover Insights (ATI) model training metric details.
 *
 * @public
 */
export interface ATITrainingMetricsValue {
  /**
   * The model's performance metrics data points.
   *
   * @public
   */
  metricDataPoints?: ATIMetricDataPoint[] | undefined;

  /**
   * The model's overall performance scores.
   *
   * @public
   */
  modelPerformance?: ATIModelPerformance | undefined;
}

/**
 * A key and value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * A tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A value assigned to a tag key.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A variable in the list of variables for the batch create variable request.
 *
 * @public
 */
export interface VariableEntry {
  /**
   * The name of the variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the variable.
   *
   * @public
   */
  dataType?: string | undefined;

  /**
   * The data source of the variable.
   *
   * @public
   */
  dataSource?: string | undefined;

  /**
   * The default value of the variable.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The description of the variable.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the variable. For more information see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   *
   * Valid Values: `AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT`
   *
   * @public
   */
  variableType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVariableRequest {
  /**
   * The list of variables for the batch create variable request.
   *
   * @public
   */
  variableEntries: VariableEntry[] | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Provides the error of the batch create variable API.
 *
 * @public
 */
export interface BatchCreateVariableError {
  /**
   * The name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code?: number | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateVariableResult {
  /**
   * Provides the errors for the `BatchCreateVariable` request.
   *
   * @public
   */
  errors?: BatchCreateVariableError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetVariableRequest {
  /**
   * The list of variable names to get.
   *
   * @public
   */
  names: string[] | undefined;
}

/**
 * Provides the error of the batch get variable API.
 *
 * @public
 */
export interface BatchGetVariableError {
  /**
   * The error name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code?: number | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The variable.
 *
 * @public
 */
export interface Variable {
  /**
   * The name of the variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the variable. For more information see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   *
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * The data source of the variable.
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * The default value of the variable.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The description of the variable.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The variable type of the variable.
   *
   * Valid Values: `AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT`
   *
   * @public
   */
  variableType?: string | undefined;

  /**
   * The time when variable was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The time when the variable was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The ARN of the variable.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetVariableResult {
  /**
   * The returned variables.
   *
   * @public
   */
  variables?: Variable[] | undefined;

  /**
   * The errors from the request.
   *
   * @public
   */
  errors?: BatchGetVariableError[] | undefined;
}

/**
 * @public
 */
export interface CancelBatchImportJobRequest {
  /**
   * The ID of an in-progress batch import job to cancel.
   *
   * Amazon Fraud Detector will throw an error if the batch import job is in `FAILED`, `CANCELED`, or `COMPLETED` state.
   *
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
   * The ID of the batch prediction job to cancel.
   *
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
   * The ID of the batch import job. The ID cannot be of a past job, unless the job exists in `CREATE_FAILED` state.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The URI that points to the Amazon S3 location of your data file.
   *
   * @public
   */
  inputPath: string | undefined;

  /**
   * The URI that points to the Amazon S3 location for storing your results.
   *
   * @public
   */
  outputPath: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The ARN of the IAM role created for Amazon S3 bucket that holds your data file.
   *
   * The IAM role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket. For more information about bucket permissions, see [User policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  iamRoleArn: string | undefined;

  /**
   * A collection of key-value pairs associated with this request.
   *
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
   * The ID of the batch prediction job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The Amazon S3 location of your training file.
   *
   * @public
   */
  inputPath: string | undefined;

  /**
   * The Amazon S3 location of your output file.
   *
   * @public
   */
  outputPath: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The name of the detector.
   *
   * @public
   */
  detectorName: string | undefined;

  /**
   * The detector version.
   *
   * @public
   */
  detectorVersion?: string | undefined;

  /**
   * The ARN of the IAM role to use for this job request.
   *
   * The IAM Role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket. For more information about bucket permissions, see [User policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  iamRoleArn: string | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBatchPredictionJobResult {}

/**
 * The model version.
 *
 * @public
 */
export interface ModelVersion {
  /**
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber: string | undefined;

  /**
   * The model version ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * A rule.
 *
 * @public
 */
export interface Rule {
  /**
   * The detector for which the rule is associated.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The rule ID.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The rule version.
   *
   * @public
   */
  ruleVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateDetectorVersionRequest {
  /**
   * The ID of the detector under which you want to create a new version.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The description of the detector version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Sagemaker model endpoints to include in the detector version.
   *
   * @public
   */
  externalModelEndpoints?: string[] | undefined;

  /**
   * The rules to include in the detector version.
   *
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * The model versions to include in the detector version.
   *
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * The rule execution mode for the rules included in the detector version.
   *
   * You can define and edit the rule mode at the detector version level, when it is in draft status.
   *
   * If you specify `FIRST_MATCHED`, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.
   *
   * If you specifiy `ALL_MATCHED`, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules.
   *
   * The default behavior is `FIRST_MATCHED`.
   *
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDetectorVersionResult {
  /**
   * The ID for the created version's parent detector.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The ID for the created detector.
   *
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * The status of the detector version.
   *
   * @public
   */
  status?: DetectorVersionStatus | undefined;
}

/**
 * @public
 */
export interface CreateListRequest {
  /**
   * The name of the list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The names of the elements, if providing. You can also create an empty list and add elements later using the [UpdateList](https://docs.aws.amazon.com/frauddetector/latest/api/API_Updatelist.html) API.
   *
   * @public
   */
  elements?: string[] | undefined;

  /**
   * The variable type of the list. You can only assign the variable type with String data type. For more information, see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   *
   * @public
   */
  variableType?: string | undefined;

  /**
   * The description of the list.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A collection of the key and value pairs.
   *
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
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The model description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelResult {}

/**
 * Details for the external events data used for model version training.
 *
 * @public
 */
export interface ExternalEventsDetail {
  /**
   * The Amazon S3 bucket location for the data.
   *
   * @public
   */
  dataLocation: string | undefined;

  /**
   * The ARN of the role that provides Amazon Fraud Detector access to the data location.
   *
   * @public
   */
  dataAccessRoleArn: string | undefined;
}

/**
 * The start and stop time of the ingested events.
 *
 * @public
 */
export interface IngestedEventsTimeWindow {
  /**
   * Timestamp of the first ingensted event.
   *
   * @public
   */
  startTime: string | undefined;

  /**
   * Timestamp of the final ingested event.
   *
   * @public
   */
  endTime: string | undefined;
}

/**
 * The details of the ingested event.
 *
 * @public
 */
export interface IngestedEventsDetail {
  /**
   * The start and stop time of the ingested events.
   *
   * @public
   */
  ingestedEventsTimeWindow: IngestedEventsTimeWindow | undefined;
}

/**
 * The label schema.
 *
 * @public
 */
export interface LabelSchema {
  /**
   * The label mapper maps the Amazon Fraud Detector supported model classification labels (`FRAUD`, `LEGIT`) to the appropriate event type labels. For example, if "`FRAUD`" and "`LEGIT`" are Amazon Fraud Detector supported labels, this mapper could be: `\{"FRAUD" => ["0"]`, `"LEGIT" => ["1"]\}` or `\{"FRAUD" => ["false"]`, `"LEGIT" => ["true"]\}` or `\{"FRAUD" => ["fraud", "abuse"]`, `"LEGIT" => ["legit", "safe"]\}`. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
   *
   * @public
   */
  labelMapper?: Record<string, string[]> | undefined;

  /**
   * The action to take for unlabeled events.
   *
   * - Use `IGNORE` if you want the unlabeled events to be ignored. This is recommended when the majority of the events in the dataset are labeled.
   * - Use `FRAUD` if you want to categorize all unlabeled events as “Fraud”. This is recommended when most of the events in your dataset are fraudulent.
   * - Use `LEGIT` if you want to categorize all unlabeled events as “Legit”. This is recommended when most of the events in your dataset are legitimate.
   * - Use `AUTO` if you want Amazon Fraud Detector to decide how to use the unlabeled data. This is recommended when there is significant unlabeled events in the dataset.
   *
   * By default, Amazon Fraud Detector ignores the unlabeled data.
   *
   * @public
   */
  unlabeledEventsTreatment?: UnlabeledEventsTreatment | undefined;
}

/**
 * The training data schema.
 *
 * @public
 */
export interface TrainingDataSchema {
  /**
   * The training data schema variables.
   *
   * @public
   */
  modelVariables: string[] | undefined;

  /**
   * The label schema.
   *
   * @public
   */
  labelSchema?: LabelSchema | undefined;
}

/**
 * @public
 */
export interface CreateModelVersionRequest {
  /**
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The training data source location in Amazon S3.
   *
   * @public
   */
  trainingDataSource: TrainingDataSourceEnum | undefined;

  /**
   * The training data schema.
   *
   * @public
   */
  trainingDataSchema: TrainingDataSchema | undefined;

  /**
   * Details of the external events data used for model version training. Required if `trainingDataSource` is `EXTERNAL_EVENTS`.
   *
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * Details of the ingested events data used for model version training. Required if `trainingDataSource` is `INGESTED_EVENTS`.
   *
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelVersionResult {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The model version number of the model version created.
   *
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * The model version status.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * The rule ID.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The detector ID for the rule's parent detector.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The rule expression.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The language of the rule.
   *
   * @public
   */
  language: Language | undefined;

  /**
   * The outcome or outcomes returned when the rule expression matches.
   *
   * @public
   */
  outcomes: string[] | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleResult {
  /**
   * The created rule.
   *
   * @public
   */
  rule?: Rule | undefined;
}

/**
 * @public
 */
export interface CreateVariableRequest {
  /**
   * The name of the variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the variable.
   *
   * @public
   */
  dataType: DataType | undefined;

  /**
   * The source of the data.
   *
   * @public
   */
  dataSource: DataSource | undefined;

  /**
   * The default value for the variable when no value is received.
   *
   * @public
   */
  defaultValue: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The variable type. For more information see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   *
   * Valid Values: `AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT`
   *
   * @public
   */
  variableType?: string | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The ID of the batch import job to delete.
   *
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
   * The ID of the batch prediction job to delete.
   *
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
   * The ID of the detector to delete.
   *
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
   * The ID of the parent detector for the detector version to delete.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The ID of the detector version to delete.
   *
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
   * The name of the entity type to delete.
   *
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
   * The ID of the event to delete.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * Specifies whether or not to delete any predictions associated with the event. If set to `True`,
   *
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
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventsByEventTypeResult {
  /**
   * Name of event type for which to delete the events.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The status of the delete request.
   *
   * @public
   */
  eventsDeletionStatus?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventTypeRequest {
  /**
   * The name of the event type to delete.
   *
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
   * The endpoint of the Amazon Sagemaker model to delete.
   *
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
   * The name of the label to delete.
   *
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
   * The name of the list to delete.
   *
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
   * The model ID of the model to delete.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type of the model to delete.
   *
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
   * The model ID of the model version to delete.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type of the model version to delete.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The model version number of the model version to delete.
   *
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
   * The name of the outcome to delete.
   *
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
   * A rule.
   *
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
   * The name of the variable to delete.
   *
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
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The next token from the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the detector version.
 *
 * @public
 */
export interface DetectorVersionSummary {
  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * The detector version status.
   *
   * @public
   */
  status?: DetectorVersionStatus | undefined;

  /**
   * The detector version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Timestamp of when the detector version was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorResult {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The status and description for each detector version.
   *
   * @public
   */
  detectorVersionSummaries?: DetectorVersionSummary[] | undefined;

  /**
   * The next token to be used for subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The detector ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionsRequest {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The next token from the previous results.
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
}

/**
 * The message details.
 *
 * @public
 */
export interface FieldValidationMessage {
  /**
   * The field name.
   *
   * @public
   */
  fieldName?: string | undefined;

  /**
   * The message ID.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The message title.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message content.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The message type.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The message details.
 *
 * @public
 */
export interface FileValidationMessage {
  /**
   * The message title.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The message content.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The message type.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The model training data validation metrics.
 *
 * @public
 */
export interface DataValidationMetrics {
  /**
   * The file-specific model training data validation messages.
   *
   * @public
   */
  fileLevelMessages?: FileValidationMessage[] | undefined;

  /**
   * The field-specific model training validation messages.
   *
   * @public
   */
  fieldLevelMessages?: FieldValidationMessage[] | undefined;
}

/**
 * Model performance metrics data points.
 *
 * @public
 */
export interface MetricDataPoint {
  /**
   * The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *
   * @public
   */
  fpr?: number | undefined;

  /**
   * The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *
   * @public
   */
  precision?: number | undefined;

  /**
   * The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *
   * @public
   */
  tpr?: number | undefined;

  /**
   * The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * The training metric details.
 *
 * @public
 */
export interface TrainingMetrics {
  /**
   * The area under the curve. This summarizes true positive rate (TPR) and false positive rate (FPR) across all possible model score thresholds. A model with no predictive power has an AUC of 0.5, whereas a perfect model has a score of 1.0.
   *
   * @public
   */
  auc?: number | undefined;

  /**
   * The data points details.
   *
   * @public
   */
  metricDataPoints?: MetricDataPoint[] | undefined;
}

/**
 * The log odds metric details.
 *
 * @public
 */
export interface LogOddsMetric {
  /**
   * The name of the variable.
   *
   * @public
   */
  variableName: string | undefined;

  /**
   * The type of variable.
   *
   * @public
   */
  variableType: string | undefined;

  /**
   * The relative importance of the variable. For more information, see [Model variable importance](https://docs.aws.amazon.com/frauddetector/latest/ug/model-variable-importance.html).
   *
   * @public
   */
  variableImportance: number | undefined;
}

/**
 * The variable importance metrics details.
 *
 * @public
 */
export interface VariableImportanceMetrics {
  /**
   * List of variable metrics.
   *
   * @public
   */
  logOddsMetrics?: LogOddsMetric[] | undefined;
}

/**
 * The training result details.
 *
 * @public
 */
export interface TrainingResult {
  /**
   * The validation metrics.
   *
   * @public
   */
  dataValidationMetrics?: DataValidationMetrics | undefined;

  /**
   * The training metric details.
   *
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * The variable importance metrics.
   *
   * @public
   */
  variableImportanceMetrics?: VariableImportanceMetrics | undefined;
}

/**
 * The Online Fraud Insights (OFI) model performance metrics data points.
 *
 * @public
 */
export interface OFIMetricDataPoint {
  /**
   * The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *
   * @public
   */
  fpr?: number | undefined;

  /**
   * The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *
   * @public
   */
  precision?: number | undefined;

  /**
   * The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *
   * @public
   */
  tpr?: number | undefined;

  /**
   * The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity. A range is the difference between upper and lower bound of auc.
 *
 * @public
 */
export interface UncertaintyRange {
  /**
   * The lower bound value of the area under curve (auc).
   *
   * @public
   */
  lowerBoundValue: number | undefined;

  /**
   * The upper bound value of the area under curve (auc).
   *
   * @public
   */
  upperBoundValue: number | undefined;
}

/**
 * The Online Fraud Insights (OFI) model performance score.
 *
 * @public
 */
export interface OFIModelPerformance {
  /**
   * The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *
   * @public
   */
  auc?: number | undefined;

  /**
   * Indicates the range of area under curve (auc) expected from the OFI model. A range greater than 0.1 indicates higher model uncertainity.
   *
   * @public
   */
  uncertaintyRange?: UncertaintyRange | undefined;
}

/**
 * The Online Fraud Insights (OFI) model training metric details.
 *
 * @public
 */
export interface OFITrainingMetricsValue {
  /**
   * The model's performance metrics data points.
   *
   * @public
   */
  metricDataPoints?: OFIMetricDataPoint[] | undefined;

  /**
   * The model's overall performance score.
   *
   * @public
   */
  modelPerformance?: OFIModelPerformance | undefined;
}

/**
 * The performance metrics data points for Transaction Fraud Insights (TFI) model.
 *
 * @public
 */
export interface TFIMetricDataPoint {
  /**
   * The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *
   * @public
   */
  fpr?: number | undefined;

  /**
   * The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *
   * @public
   */
  precision?: number | undefined;

  /**
   * The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *
   * @public
   */
  tpr?: number | undefined;

  /**
   * The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *
   * @public
   */
  threshold?: number | undefined;
}

/**
 * The Transaction Fraud Insights (TFI) model performance score.
 *
 * @public
 */
export interface TFIModelPerformance {
  /**
   * The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *
   * @public
   */
  auc?: number | undefined;

  /**
   * Indicates the range of area under curve (auc) expected from the TFI model. A range greater than 0.1 indicates higher model uncertainity.
   *
   * @public
   */
  uncertaintyRange?: UncertaintyRange | undefined;
}

/**
 * The Transaction Fraud Insights (TFI) model training metric details.
 *
 * @public
 */
export interface TFITrainingMetricsValue {
  /**
   * The model's performance metrics data points.
   *
   * @public
   */
  metricDataPoints?: TFIMetricDataPoint[] | undefined;

  /**
   * The model performance score.
   *
   * @public
   */
  modelPerformance?: TFIModelPerformance | undefined;
}

/**
 * The training metrics details.
 *
 * @public
 */
export interface TrainingMetricsV2 {
  /**
   * The Online Fraud Insights (OFI) model training metric details.
   *
   * @public
   */
  ofi?: OFITrainingMetricsValue | undefined;

  /**
   * The Transaction Fraud Insights (TFI) model training metric details.
   *
   * @public
   */
  tfi?: TFITrainingMetricsValue | undefined;

  /**
   * The Account Takeover Insights (ATI) model training metric details.
   *
   * @public
   */
  ati?: ATITrainingMetricsValue | undefined;
}

/**
 * The training result details.
 *
 * @public
 */
export interface TrainingResultV2 {
  /**
   * The model training data validation metrics.
   *
   * @public
   */
  dataValidationMetrics?: DataValidationMetrics | undefined;

  /**
   * The training metric details.
   *
   * @public
   */
  trainingMetricsV2?: TrainingMetricsV2 | undefined;

  /**
   * The variable importance metrics details.
   *
   * @public
   */
  variableImportanceMetrics?: VariableImportanceMetrics | undefined;

  /**
   * The variable importance metrics of the aggregated variables.
   *
   * Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are `IP address` and `user`.
   *
   * @public
   */
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics | undefined;
}

/**
 * The details of the model version.
 *
 * @public
 */
export interface ModelVersionDetail {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * The status of the model version.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The model version training data source.
   *
   * @public
   */
  trainingDataSource?: TrainingDataSourceEnum | undefined;

  /**
   * The training data schema.
   *
   * @public
   */
  trainingDataSchema?: TrainingDataSchema | undefined;

  /**
   * The external events data details. This will be populated if the `trainingDataSource` for the model version is specified as `EXTERNAL_EVENTS`.
   *
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * The ingested events data details. This will be populated if the `trainingDataSource` for the model version is specified as `INGESTED_EVENTS`.
   *
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * The training results.
   *
   * @public
   */
  trainingResult?: TrainingResult | undefined;

  /**
   * The timestamp when the model was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The timestamp when the model was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The model version ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The training result details. The details include the relative importance of the variables.
   *
   * @public
   */
  trainingResultV2?: TrainingResultV2 | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionsResult {
  /**
   * The model version details.
   *
   * @public
   */
  modelVersionDetails?: ModelVersionDetail[] | undefined;

  /**
   * The next token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBatchImportJobsRequest {
  /**
   * The ID of the batch import job to get.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The maximum number of objects to return for request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The next token from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The batch import job details.
 *
 * @public
 */
export interface BatchImport {
  /**
   * The ID of the batch import job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The status of the batch import job.
   *
   * @public
   */
  status?: AsyncJobStatus | undefined;

  /**
   * The reason batch import job failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Timestamp of when the batch import job started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * Timestamp of when batch import job completed.
   *
   * @public
   */
  completionTime?: string | undefined;

  /**
   * The Amazon S3 location of your data file for batch import.
   *
   * @public
   */
  inputPath?: string | undefined;

  /**
   * The Amazon S3 location of your output file.
   *
   * @public
   */
  outputPath?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The ARN of the IAM role to use for this job request.
   *
   * @public
   */
  iamRoleArn?: string | undefined;

  /**
   * The ARN of the batch import job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of records processed by batch import job.
   *
   * @public
   */
  processedRecordsCount?: number | undefined;

  /**
   * The number of records that failed to import.
   *
   * @public
   */
  failedRecordsCount?: number | undefined;

  /**
   * The total number of records in the batch import job.
   *
   * @public
   */
  totalRecordsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetBatchImportJobsResult {
  /**
   * An array containing the details of each batch import job.
   *
   * @public
   */
  batchImports?: BatchImport[] | undefined;

  /**
   * The next token for the subsequent resquest.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsRequest {
  /**
   * The batch prediction job for which to get the details.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The next token from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The batch prediction details.
 *
 * @public
 */
export interface BatchPrediction {
  /**
   * The job ID for the batch prediction.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The batch prediction status.
   *
   * @public
   */
  status?: AsyncJobStatus | undefined;

  /**
   * The reason a batch prediction job failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * Timestamp of when the batch prediction job started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * Timestamp of when the batch prediction job completed.
   *
   * @public
   */
  completionTime?: string | undefined;

  /**
   * Timestamp of most recent heartbeat indicating the batch prediction job was making progress.
   *
   * @public
   */
  lastHeartbeatTime?: string | undefined;

  /**
   * The Amazon S3 location of your training file.
   *
   * @public
   */
  inputPath?: string | undefined;

  /**
   * The Amazon S3 location of your output file.
   *
   * @public
   */
  outputPath?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The name of the detector.
   *
   * @public
   */
  detectorName?: string | undefined;

  /**
   * The detector version.
   *
   * @public
   */
  detectorVersion?: string | undefined;

  /**
   * The ARN of the IAM role to use for this job request.
   *
   * @public
   */
  iamRoleArn?: string | undefined;

  /**
   * The ARN of batch prediction job.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of records processed by the batch prediction job.
   *
   * @public
   */
  processedRecordsCount?: number | undefined;

  /**
   * The total number of records in the batch prediction job.
   *
   * @public
   */
  totalRecordsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsResult {
  /**
   * An array containing the details of each batch prediction job.
   *
   * @public
   */
  batchPredictions?: BatchPrediction[] | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusRequest {
  /**
   * Name of event type for which to get the deletion status.
   *
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusResult {
  /**
   * The event type name.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The deletion status.
   *
   * @public
   */
  eventsDeletionStatus?: AsyncJobStatus | undefined;
}

/**
 * @public
 */
export interface GetDetectorsRequest {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The detector.
 *
 * @public
 */
export interface Detector {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The detector description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * Timestamp of when the detector was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * Timestamp of when the detector was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The detector ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorsResult {
  /**
   * The detectors.
   *
   * @public
   */
  detectors?: Detector[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorVersionRequest {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorVersionResult {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * The detector version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon SageMaker model endpoints included in the detector version.
   *
   * @public
   */
  externalModelEndpoints?: string[] | undefined;

  /**
   * The model versions included in the detector version.
   *
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * The rules included in the detector version.
   *
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * The status of the detector version.
   *
   * @public
   */
  status?: DetectorVersionStatus | undefined;

  /**
   * The timestamp when the detector version was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The timestamp when the detector version was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The execution mode of the rule in the dectector
   *
   * `FIRST_MATCHED` indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.
   *
   * `ALL_MATCHED` indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.
   *
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * The detector version ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityTypesRequest {
  /**
   * The name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The entity type details.
 *
 * @public
 */
export interface EntityType {
  /**
   * The entity type name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The entity type description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Timestamp of when the entity type was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * Timestamp of when the entity type was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The entity type ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityTypesResult {
  /**
   * An array of entity types.
   *
   * @public
   */
  entityTypes?: EntityType[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEventRequest {
  /**
   * The ID of the event to retrieve.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event type of the event to retrieve.
   *
   * @public
   */
  eventTypeName: string | undefined;
}

/**
 * The entity details.
 *
 * @public
 */
export interface Entity {
  /**
   * The entity type.
   *
   * @public
   */
  entityType: string | undefined;

  /**
   * The entity ID. If you do not know the `entityId`, you can pass `unknown`, which is areserved string literal.
   *
   * @public
   */
  entityId: string | undefined;
}

/**
 * The event details.
 *
 * @public
 */
export interface Event {
  /**
   * The event ID.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.
   *
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.
   *
   * @public
   */
  eventVariables?: Record<string, string> | undefined;

  /**
   * The label associated with the event.
   *
   * @public
   */
  currentLabel?: string | undefined;

  /**
   * The timestamp associated with the label to update. The timestamp must be specified using ISO 8601 standard in UTC.
   *
   * @public
   */
  labelTimestamp?: string | undefined;

  /**
   * The event entities.
   *
   * @public
   */
  entities?: Entity[] | undefined;
}

/**
 * @public
 */
export interface GetEventResult {
  /**
   * The details of the event.
   *
   * @public
   */
  event?: Event | undefined;
}

/**
 * A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.
 *
 * @public
 */
export interface ModelEndpointDataBlob {
  /**
   * The byte buffer of the Amazon SageMaker model endpoint input data blob.
   *
   * @public
   */
  byteBuffer?: Uint8Array | undefined;

  /**
   * The content type of the Amazon SageMaker model endpoint input data blob.
   *
   * @public
   */
  contentType?: string | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionRequest {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * The unique ID used to identify the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event type associated with the detector specified for the prediction.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The entity type (associated with the detector's event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."
   *
   * @public
   */
  entities: Entity[] | undefined;

  /**
   * Timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.
   *
   * @public
   */
  eventTimestamp: string | undefined;

  /**
   * Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.
   *
   * > **Important:** You must provide at least one eventVariable
   *
   * To ensure most accurate fraud prediction and to simplify your data preparation, Amazon Fraud Detector will replace all missing variables or values as follows:
   *
   * **For Amazon Fraud Detector trained models:**
   *
   * If a null value is provided explicitly for a variable or if a variable is missing, model will replace the null value or the missing variable (no variable name in the eventVariables map) with calculated default mean/medians for numeric variables and with special values for categorical variables.
   *
   * **For imported SageMaker models:**
   *
   * If a null value is provided explicitly for a variable, the model and rules will use “null” as the value. If a variable is not provided (no variable name in the eventVariables map), model and rules will use the default value that is provided for the variable.
   *
   * @public
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * The Amazon SageMaker model endpoint input data blobs.
   *
   * @public
   */
  externalModelEndpointDataBlobs?: Record<string, ModelEndpointDataBlob> | undefined;
}

/**
 * The Amazon SageMaker model.
 *
 * @public
 */
export interface ExternalModelSummary {
  /**
   * The endpoint of the Amazon SageMaker model.
   *
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * The source of the model.
   *
   * @public
   */
  modelSource?: ModelSource | undefined;
}

/**
 * The fraud prediction scores from Amazon SageMaker model.
 *
 * @public
 */
export interface ExternalModelOutputs {
  /**
   * The Amazon SageMaker model.
   *
   * @public
   */
  externalModel?: ExternalModelSummary | undefined;

  /**
   * The fraud prediction scores from Amazon SageMaker model.
   *
   * @public
   */
  outputs?: Record<string, string> | undefined;
}

/**
 * The fraud prediction scores.
 *
 * @public
 */
export interface ModelScores {
  /**
   * The model version.
   *
   * @public
   */
  modelVersion?: ModelVersion | undefined;

  /**
   * The model's fraud prediction scores.
   *
   * @public
   */
  scores?: Record<string, number> | undefined;
}

/**
 * The rule results.
 *
 * @public
 */
export interface RuleResult {
  /**
   * The rule ID that was matched, based on the rule execution mode.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The outcomes of the matched rule, based on the rule execution mode.
   *
   * @public
   */
  outcomes?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionResult {
  /**
   * The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.
   *
   * @public
   */
  modelScores?: ModelScores[] | undefined;

  /**
   * The results from the rules.
   *
   * @public
   */
  ruleResults?: RuleResult[] | undefined;

  /**
   * The model scores for Amazon SageMaker models.
   *
   * @public
   */
  externalModelOutputs?: ExternalModelOutputs[] | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionMetadataRequest {
  /**
   * The event ID.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event type associated with the detector specified for the prediction.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * The timestamp that defines when the prediction was generated. The timestamp must be specified using ISO 8601 standard in UTC.
   *
   * We recommend calling [ListEventPredictions](https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html) first, and using the `predictionTimestamp` value in the response to provide an accurate prediction timestamp value.
   *
   * @public
   */
  predictionTimestamp: string | undefined;
}

/**
 * The details of the external (Amazon Sagemaker) model evaluated for generating predictions.
 *
 * @public
 */
export interface EvaluatedExternalModel {
  /**
   * The endpoint of the external (Amazon Sagemaker) model.
   *
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * Indicates whether event variables were used to generate predictions.
   *
   * @public
   */
  useEventVariables?: boolean | undefined;

  /**
   * Input variables use for generating predictions.
   *
   * @public
   */
  inputVariables?: Record<string, string> | undefined;

  /**
   * Output variables.
   *
   * @public
   */
  outputVariables?: Record<string, string> | undefined;
}

/**
 * The details of the event variable's impact on the prediction score.
 *
 * @public
 */
export interface VariableImpactExplanation {
  /**
   * The event variable name.
   *
   * @public
   */
  eventVariableName?: string | undefined;

  /**
   * The event variable's relative impact in terms of magnitude on the prediction scores. The relative impact values consist of a numerical rating (0-5, 5 being the highest) and direction (increased/decreased) impact of the fraud risk.
   *
   * @public
   */
  relativeImpact?: string | undefined;

  /**
   * The raw, uninterpreted value represented as log-odds of the fraud. These values are usually between -10 to +10, but range from - infinity to + infinity.
   *
   * - A positive value indicates that the variable drove the risk score up.
   * - A negative value indicates that the variable drove the risk score down.
   *
   * @public
   */
  logOddsImpact?: number | undefined;
}

/**
 * The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.
 *
 * @public
 */
export interface PredictionExplanations {
  /**
   * The details of the event variable's impact on the prediction score.
   *
   * @public
   */
  variableImpactExplanations?: VariableImpactExplanation[] | undefined;

  /**
   * The details of the aggregated variables impact on the prediction score.
   *
   * Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are `IP address` and `user`.
   *
   * @public
   */
  aggregatedVariablesImpactExplanations?: AggregatedVariablesImpactExplanation[] | undefined;
}

/**
 * The model version evalutions.
 *
 * @public
 */
export interface ModelVersionEvaluation {
  /**
   * The output variable name.
   *
   * @public
   */
  outputVariableName?: string | undefined;

  /**
   * The evaluation score generated for the model version.
   *
   * @public
   */
  evaluationScore?: string | undefined;

  /**
   * The prediction explanations generated for the model version.
   *
   * @public
   */
  predictionExplanations?: PredictionExplanations | undefined;
}

/**
 * The model version evaluated for generating prediction.
 *
 * @public
 */
export interface EvaluatedModelVersion {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model version.
   *
   * @public
   */
  modelVersion?: string | undefined;

  /**
   * The model type.
   *
   * Valid values: `ONLINE_FRAUD_INSIGHTS` | `TRANSACTION_FRAUD_INSIGHTS`
   *
   * @public
   */
  modelType?: string | undefined;

  /**
   * Evaluations generated for the model version.
   *
   * @public
   */
  evaluations?: ModelVersionEvaluation[] | undefined;
}

/**
 * Information about the summary of an event variable that was evaluated for generating prediction.
 *
 * @public
 */
export interface EventVariableSummary {
  /**
   * The event variable name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the event variable.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The event variable source.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * The details of the rule used for evaluating variable values.
 *
 * @public
 */
export interface EvaluatedRule {
  /**
   * The rule ID.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The rule version.
   *
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * The rule expression.
   *
   * @public
   */
  expression?: string | undefined;

  /**
   * The rule expression value.
   *
   * @public
   */
  expressionWithValues?: string | undefined;

  /**
   * The rule outcome.
   *
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * Indicates whether the rule was evaluated.
   *
   * @public
   */
  evaluated?: boolean | undefined;

  /**
   * Indicates whether the rule matched.
   *
   * @public
   */
  matched?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEventPredictionMetadataResult {
  /**
   * The event ID.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The event type associated with the detector specified for this prediction.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The entity ID.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The entity type.
   *
   * @public
   */
  entityType?: string | undefined;

  /**
   * The timestamp for when the prediction was generated for the associated event ID.
   *
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: string | undefined;

  /**
   * The status of the detector version.
   *
   * @public
   */
  detectorVersionStatus?: string | undefined;

  /**
   * A list of event variables that influenced the prediction scores.
   *
   * @public
   */
  eventVariables?: EventVariableSummary[] | undefined;

  /**
   * List of rules associated with the detector version that were used for evaluating variable values.
   *
   * @public
   */
  rules?: EvaluatedRule[] | undefined;

  /**
   * The execution mode of the rule used for evaluating variable values.
   *
   * @public
   */
  ruleExecutionMode?: RuleExecutionMode | undefined;

  /**
   * The outcomes of the matched rule, based on the rule execution mode.
   *
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * Model versions that were evaluated for generating predictions.
   *
   * @public
   */
  evaluatedModelVersions?: EvaluatedModelVersion[] | undefined;

  /**
   * External (Amazon SageMaker) models that were evaluated for generating predictions.
   *
   * @public
   */
  evaluatedExternalModels?: EvaluatedExternalModel[] | undefined;

  /**
   * The timestamp that defines when the prediction was generated.
   *
   * @public
   */
  predictionTimestamp?: string | undefined;
}

/**
 * @public
 */
export interface GetEventTypesRequest {
  /**
   * The name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The event orchestration status.
 *
 * @public
 */
export interface EventOrchestration {
  /**
   * Specifies if event orchestration is enabled through Amazon EventBridge.
   *
   * @public
   */
  eventBridgeEnabled: boolean | undefined;
}

/**
 * Data about the stored events.
 *
 * @public
 */
export interface IngestedEventStatistics {
  /**
   * The number of stored events.
   *
   * @public
   */
  numberOfEvents?: number | undefined;

  /**
   * The total size of the stored events.
   *
   * @public
   */
  eventDataSizeInBytes?: number | undefined;

  /**
   * The oldest stored event.
   *
   * @public
   */
  leastRecentEvent?: string | undefined;

  /**
   * The newest stored event.
   *
   * @public
   */
  mostRecentEvent?: string | undefined;

  /**
   * Timestamp of when the stored event was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;
}

/**
 * The event type details.
 *
 * @public
 */
export interface EventType {
  /**
   * The event type name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The event type description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The event type event variables.
   *
   * @public
   */
  eventVariables?: string[] | undefined;

  /**
   * The event type labels.
   *
   * @public
   */
  labels?: string[] | undefined;

  /**
   * The event type entity types.
   *
   * @public
   */
  entityTypes?: string[] | undefined;

  /**
   * If `Enabled`, Amazon Fraud Detector stores event data when you generate a prediction and uses that data to update calculated variables in near real-time. Amazon Fraud Detector uses this data, known as `INGESTED_EVENTS`, to train your model and improve fraud predictions.
   *
   * @public
   */
  eventIngestion?: EventIngestion | undefined;

  /**
   * Data about the stored events.
   *
   * @public
   */
  ingestedEventStatistics?: IngestedEventStatistics | undefined;

  /**
   * Timestamp of when the event type was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * Timestamp of when the event type was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The entity type ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The event orchestration status.
   *
   * @public
   */
  eventOrchestration?: EventOrchestration | undefined;
}

/**
 * @public
 */
export interface GetEventTypesResult {
  /**
   * An array of event types.
   *
   * @public
   */
  eventTypes?: EventType[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetExternalModelsRequest {
  /**
   * The Amazon SageMaker model endpoint.
   *
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * The next page token for the request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The Amazon SageMaker model input configuration.
 *
 * @public
 */
export interface ModelInputConfiguration {
  /**
   * The event type name.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The format of the model input configuration. The format differs depending on if it is passed through to SageMaker or constructed by Amazon Fraud Detector.
   *
   * @public
   */
  format?: ModelInputDataFormat | undefined;

  /**
   * The event variables.
   *
   * @public
   */
  useEventVariables: boolean | undefined;

  /**
   * Template for constructing the JSON input-data sent to SageMaker. At event-evaluation, the placeholders for variable names in the template will be replaced with the variable values before being sent to SageMaker.
   *
   * @public
   */
  jsonInputTemplate?: string | undefined;

  /**
   * Template for constructing the CSV input-data sent to SageMaker. At event-evaluation, the placeholders for variable-names in the template will be replaced with the variable values before being sent to SageMaker.
   *
   * @public
   */
  csvInputTemplate?: string | undefined;
}

/**
 * Provides the Amazon Sagemaker model output configuration.
 *
 * @public
 */
export interface ModelOutputConfiguration {
  /**
   * The format of the model output configuration.
   *
   * @public
   */
  format: ModelOutputDataFormat | undefined;

  /**
   * A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables.
   *
   * @public
   */
  jsonKeyToVariableMap?: Record<string, string> | undefined;

  /**
   * A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables.
   *
   * @public
   */
  csvIndexToVariableMap?: Record<string, string> | undefined;
}

/**
 * The Amazon SageMaker model.
 *
 * @public
 */
export interface ExternalModel {
  /**
   * The Amazon SageMaker model endpoints.
   *
   * @public
   */
  modelEndpoint?: string | undefined;

  /**
   * The source of the model.
   *
   * @public
   */
  modelSource?: ModelSource | undefined;

  /**
   * The role used to invoke the model.
   *
   * @public
   */
  invokeModelEndpointRoleArn?: string | undefined;

  /**
   * The input configuration.
   *
   * @public
   */
  inputConfiguration?: ModelInputConfiguration | undefined;

  /**
   * The output configuration.
   *
   * @public
   */
  outputConfiguration?: ModelOutputConfiguration | undefined;

  /**
   * The Amazon Fraud Detector status for the external model endpoint
   *
   * @public
   */
  modelEndpointStatus?: ModelEndpointStatus | undefined;

  /**
   * Timestamp of when the model was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * Timestamp of when the model was last created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The model ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetExternalModelsResult {
  /**
   * Gets the Amazon SageMaker models.
   *
   * @public
   */
  externalModels?: ExternalModel[] | undefined;

  /**
   * The next page token to be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The KMS key details.
 *
 * @public
 */
export interface KMSKey {
  /**
   * The encryption key ARN.
   *
   * @public
   */
  kmsEncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetKMSEncryptionKeyResult {
  /**
   * The KMS encryption key.
   *
   * @public
   */
  kmsKey?: KMSKey | undefined;
}

/**
 * @public
 */
export interface GetLabelsRequest {
  /**
   * The name of the label or labels to get.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The label details.
 *
 * @public
 */
export interface Label {
  /**
   * The label name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The label description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Timestamp of when the label was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * Timestamp of when the event type was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The label ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetLabelsResult {
  /**
   * An array of labels.
   *
   * @public
   */
  labels?: Label[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetListElementsRequest {
  /**
   * The name of the list.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetListElementsResult {
  /**
   * The list elements.
   *
   * @public
   */
  elements?: string[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetListsMetadataRequest {
  /**
   * The name of the list.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetListsMetadataResult {
  /**
   * The metadata of the specified list or all lists under the account.
   *
   * @public
   */
  lists?: AllowDenyList[] | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The next token for the subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The model.
 *
 * @public
 */
export interface Model {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The model description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * Timestamp of when the model was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * Timestamp of last time the model was updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The ARN of the model.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsResult {
  /**
   * The next page token to be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The array of models.
   *
   * @public
   */
  models?: Model[] | undefined;
}

/**
 * @public
 */
export interface GetModelVersionRequest {
  /**
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber: string | undefined;
}

/**
 * @public
 */
export interface GetModelVersionResult {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * The training data source.
   *
   * @public
   */
  trainingDataSource?: TrainingDataSourceEnum | undefined;

  /**
   * The training data schema.
   *
   * @public
   */
  trainingDataSchema?: TrainingDataSchema | undefined;

  /**
   * The details of the external events data used for training the model version. This will be populated if the `trainingDataSource` is `EXTERNAL_EVENTS`
   *
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * The details of the ingested events data used for training the model version. This will be populated if the `trainingDataSource` is `INGESTED_EVENTS`.
   *
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * The model version status.
   *
   * Possible values are:
   *
   * - `TRAINING_IN_PROGRESS`
   * - `TRAINING_COMPLETE`
   * - `ACTIVATE_REQUESTED`
   * - `ACTIVATE_IN_PROGRESS`
   * - `ACTIVE`
   * - `INACTIVATE_REQUESTED`
   * - `INACTIVATE_IN_PROGRESS`
   * - `INACTIVE`
   * - `ERROR`
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The model version ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutcomesRequest {
  /**
   * The name of the outcome or outcomes to get.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next page token for the request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The outcome.
 *
 * @public
 */
export interface Outcome {
  /**
   * The outcome name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The outcome description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the outcome was last updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The timestamp when the outcome was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The outcome ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetOutcomesResult {
  /**
   * The outcomes.
   *
   * @public
   */
  outcomes?: Outcome[] | undefined;

  /**
   * The next page token for subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRulesRequest {
  /**
   * The rule ID.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The rule version.
   *
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * The next page token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of rules to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of the rule.
 *
 * @public
 */
export interface RuleDetail {
  /**
   * The rule ID.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The detector for which the rule is associated.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The rule version.
   *
   * @public
   */
  ruleVersion?: string | undefined;

  /**
   * The rule expression.
   *
   * @public
   */
  expression?: string | undefined;

  /**
   * The rule language.
   *
   * @public
   */
  language?: Language | undefined;

  /**
   * The rule outcomes.
   *
   * @public
   */
  outcomes?: string[] | undefined;

  /**
   * Timestamp of the last time the rule was updated.
   *
   * @public
   */
  lastUpdatedTime?: string | undefined;

  /**
   * The timestamp of when the rule was created.
   *
   * @public
   */
  createdTime?: string | undefined;

  /**
   * The rule ARN.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetRulesResult {
  /**
   * The details of the requested rule.
   *
   * @public
   */
  ruleDetails?: RuleDetail[] | undefined;

  /**
   * The next page token to be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVariablesRequest {
  /**
   * The name of the variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The next page token of the get variable request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The max size per page determined for the get variable request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetVariablesResult {
  /**
   * The names of the variables returned.
   *
   * @public
   */
  variables?: Variable[] | undefined;

  /**
   * The next page token to be used in subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A conditional statement for filtering a list of past predictions.
 *
 * @public
 */
export interface FilterCondition {
  /**
   * A statement containing a resource property and a value to specify filter condition.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The time period for when the predictions were generated.
 *
 * @public
 */
export interface PredictionTimeRange {
  /**
   * The start time of the time period for when the predictions were generated.
   *
   * @public
   */
  startTime: string | undefined;

  /**
   * The end time of the time period for when the predictions were generated.
   *
   * @public
   */
  endTime: string | undefined;
}

/**
 * @public
 */
export interface ListEventPredictionsRequest {
  /**
   * The event ID.
   *
   * @public
   */
  eventId?: FilterCondition | undefined;

  /**
   * The event type associated with the detector.
   *
   * @public
   */
  eventType?: FilterCondition | undefined;

  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: FilterCondition | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: FilterCondition | undefined;

  /**
   * The time period for when the predictions were generated.
   *
   * @public
   */
  predictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of predictions to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the summary of an event prediction.
 *
 * @public
 */
export interface EventPredictionSummary {
  /**
   * The event ID.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The event type.
   *
   * @public
   */
  eventTypeName?: string | undefined;

  /**
   * The timestamp of the event.
   *
   * @public
   */
  eventTimestamp?: string | undefined;

  /**
   * The timestamp when the prediction was generated.
   *
   * @public
   */
  predictionTimestamp?: string | undefined;

  /**
   * The detector ID.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventPredictionsResult {
  /**
   * The summary of the past predictions.
   *
   * @public
   */
  eventPredictionSummaries?: EventPredictionSummary[] | undefined;

  /**
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
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
   * The ARN that specifies the resource whose tags you want to list.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The next token from the previous results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects to return for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The next token for subsequent requests.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDetectorRequest {
  /**
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The description of the detector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the event type.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The name of the entity type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the event type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The event type variables.
   *
   * @public
   */
  eventVariables: string[] | undefined;

  /**
   * The event type labels.
   *
   * @public
   */
  labels?: string[] | undefined;

  /**
   * The entity type for the event type. Example entity types: customer, merchant, account.
   *
   * @public
   */
  entityTypes: string[] | undefined;

  /**
   * Specifies if ingestion is enabled or disabled.
   *
   * @public
   */
  eventIngestion?: EventIngestion | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Enables or disables event orchestration. If enabled, you can send event predictions to select AWS services for downstream processing of the events.
   *
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
   * The model endpoints name.
   *
   * @public
   */
  modelEndpoint: string | undefined;

  /**
   * The source of the model.
   *
   * @public
   */
  modelSource: ModelSource | undefined;

  /**
   * The IAM role used to invoke the model endpoint.
   *
   * @public
   */
  invokeModelEndpointRoleArn: string | undefined;

  /**
   * The model endpoint input configuration.
   *
   * @public
   */
  inputConfiguration: ModelInputConfiguration | undefined;

  /**
   * The model endpoint output configuration.
   *
   * @public
   */
  outputConfiguration: ModelOutputConfiguration | undefined;

  /**
   * The model endpoint’s status in Amazon Fraud Detector.
   *
   * @public
   */
  modelEndpointStatus: ModelEndpointStatus | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The KMS encryption key ARN.
   *
   * The KMS key must be single-Region key. Amazon Fraud Detector does not support multi-Region KMS key.
   *
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
   * The label name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The label description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The name of the outcome.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The outcome description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A collection of key and value pairs.
   *
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
   * The event ID to upload.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event type name of the event.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.
   *
   * @public
   */
  eventTimestamp: string | undefined;

  /**
   * Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.
   *
   * @public
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * The label to associate with the event. Required if specifying `labelTimestamp`.
   *
   * @public
   */
  assignedLabel?: string | undefined;

  /**
   * The timestamp associated with the label. Required if specifying `assignedLabel`.
   *
   * @public
   */
  labelTimestamp?: string | undefined;

  /**
   * An array of entities.
   *
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
   * The resource ARN.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The tags to assign to the resource.
   *
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
   * The ARN of the resource from which to remove the tag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The resource ARN.
   *
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
   * The parent detector ID for the detector version you want to update.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * The Amazon SageMaker model endpoints to include in the detector version.
   *
   * @public
   */
  externalModelEndpoints: string[] | undefined;

  /**
   * The rules to include in the detector version.
   *
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * The detector version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The model versions to include in the detector version.
   *
   * @public
   */
  modelVersions?: ModelVersion[] | undefined;

  /**
   * The rule execution mode to add to the detector.
   *
   * If you specify `FIRST_MATCHED`, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.
   *
   * If you specifiy `ALL_MATCHED`, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.
   *
   * The default behavior is `FIRST_MATCHED`.
   *
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
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * The description.
   *
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
   * The detector ID.
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The detector version ID.
   *
   * @public
   */
  detectorVersionId: string | undefined;

  /**
   * The new status.
   *
   * The only supported values are `ACTIVE` and `INACTIVE`
   *
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
   * The ID of the event associated with the label to update.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The event type of the event associated with the label to update.
   *
   * @public
   */
  eventTypeName: string | undefined;

  /**
   * The new label to assign to the event.
   *
   * @public
   */
  assignedLabel: string | undefined;

  /**
   * The timestamp associated with the label. The timestamp must be specified using ISO 8601 standard in UTC.
   *
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
   * The name of the list to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * One or more list elements to add or replace. If you are providing the elements, make sure to specify the `updateMode` to use.
   *
   * If you are deleting all elements from the list, use `REPLACE` for the `updateMode` and provide an empty list (0 elements).
   *
   * @public
   */
  elements?: string[] | undefined;

  /**
   * The new description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The update mode (type).
   *
   * - Use `APPEND` if you are adding elements to the list.
   * - Use `REPLACE` if you replacing existing elements in the list.
   * - Use `REMOVE` if you are removing elements from the list.
   *
   * @public
   */
  updateMode?: ListUpdateMode | undefined;

  /**
   * The variable type you want to assign to the list.
   *
   * > **Note:** You cannot update a variable type of a list that already has a variable type assigned to it. You can assign a variable type to a list only if the list does not already have a variable type.
   *
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
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The new model description.
   *
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
   * The model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The major version number.
   *
   * @public
   */
  majorVersionNumber: string | undefined;

  /**
   * The details of the external events data used for training the model version. Required if `trainingDataSource` is `EXTERNAL_EVENTS`.
   *
   * @public
   */
  externalEventsDetail?: ExternalEventsDetail | undefined;

  /**
   * The details of the ingested event used for training the model version. Required if your `trainingDataSource` is `INGESTED_EVENTS`.
   *
   * @public
   */
  ingestedEventsDetail?: IngestedEventsDetail | undefined;

  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateModelVersionResult {
  /**
   * The model ID.
   *
   * @public
   */
  modelId?: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType?: ModelTypeEnum | undefined;

  /**
   * The model version number of the model version updated.
   *
   * @public
   */
  modelVersionNumber?: string | undefined;

  /**
   * The status of the updated model version.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelVersionStatusRequest {
  /**
   * The model ID of the model version to update.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The model type.
   *
   * @public
   */
  modelType: ModelTypeEnum | undefined;

  /**
   * The model version number.
   *
   * @public
   */
  modelVersionNumber: string | undefined;

  /**
   * The model version status.
   *
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
   * The rule to update.
   *
   * @public
   */
  rule: Rule | undefined;

  /**
   * The rule description.
   *
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
   * The rule to update.
   *
   * @public
   */
  rule: Rule | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The rule expression.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The language.
   *
   * @public
   */
  language: Language | undefined;

  /**
   * The outcomes.
   *
   * @public
   */
  outcomes: string[] | undefined;

  /**
   * The tags to assign to the rule version.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleVersionResult {
  /**
   * The new rule version that was created.
   *
   * @public
   */
  rule?: Rule | undefined;
}

/**
 * @public
 */
export interface UpdateVariableRequest {
  /**
   * The name of the variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new default value of the variable.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The new description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The variable type. For more information see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   *
   * @public
   */
  variableType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVariableResult {}
