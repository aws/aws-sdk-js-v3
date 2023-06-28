// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FraudDetectorServiceException as __BaseException } from "./FraudDetectorServiceException";

/**
 * @public
 * <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>The log odds metric details.</p>
 *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 */
export interface AggregatedLogOddsMetric {
  /**
   * <p>
   *             The names of all the variables.
   *         </p>
   */
  variableNames: string[] | undefined;

  /**
   * <p>
   *             The relative importance of the variables in the list to the other event variable.
   *         </p>
   */
  aggregatedVariablesImportance: number | undefined;
}

/**
 * @public
 * <p>
 *             The details of the impact of aggregated variables on the prediction score. </p>
 *          <p>Account Takeover Insights (ATI) model  uses the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 */
export interface AggregatedVariablesImpactExplanation {
  /**
   * <p>
   *             The names of all the event variables that were used to derive the aggregated variables.
   *         </p>
   */
  eventVariableNames?: string[];

  /**
   * <p>
   *             The relative impact of the aggregated variables in terms of magnitude on the prediction scores.
   *         </p>
   */
  relativeImpact?: string;

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
   */
  logOddsImpact?: number;
}

/**
 * @public
 * <p>The details of the relative importance of the aggregated variables.</p>
 *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
 *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
 *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
 */
export interface AggregatedVariablesImportanceMetrics {
  /**
   * <p>
   *             List of variables' metrics.
   *         </p>
   */
  logOddsMetrics?: AggregatedLogOddsMetric[];
}

/**
 * @public
 * <p>
 *             The metadata of a list.
 *         </p>
 */
export interface AllowDenyList {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             The description of the list.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             The variable type of the list.
   *         </p>
   */
  variableType?: string;

  /**
   * <p>
   *             The time the list was created.
   *         </p>
   */
  createdTime?: string;

  /**
   * <p>
   *             The time the list was last updated.
   *         </p>
   */
  updatedTime?: string;

  /**
   * <p>
   *             The ARN of the list.
   *         </p>
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const AsyncJobStatus = {
  CANCELED: "CANCELED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  IN_PROGRESS_INITIALIZING: "IN_PROGRESS_INITIALIZING",
} as const;

/**
 * @public
 */
export type AsyncJobStatus = (typeof AsyncJobStatus)[keyof typeof AsyncJobStatus];

/**
 * @public
 * <p>
 *             The Account Takeover Insights (ATI) model performance metrics data points.
 *         </p>
 */
export interface ATIMetricDataPoint {
  /**
   * <p>
   *           The challenge rate. This indicates the percentage of login events that the model recommends to challenge such as
   *           one-time password, multi-factor authentication, and investigations.
   *         </p>
   */
  cr?: number;

  /**
   * <p>
   *             The anomaly discovery rate. This metric quantifies the percentage of anomalies that can be detected by the model at the selected score threshold.
   *             A lower score threshold increases the percentage of anomalies captured by the model, but would also require challenging a larger percentage of
   *             login events, leading to a higher customer friction.
   *         </p>
   */
  adr?: number;

  /**
   * <p>
   *             The model's threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is
   *             labeled as fraud.
   *         </p>
   */
  threshold?: number;

  /**
   * <p>
   *             The account takeover discovery rate. This metric quantifies the percentage of account compromise events that can be detected by the model at the selected score threshold.
   *             This metric is only available if 50 or more entities with at-least one labeled account takeover event is present in the ingested dataset.
   *         </p>
   */
  atodr?: number;
}

/**
 * @public
 * <p>
 *             The Account Takeover Insights (ATI) model performance score.
 *         </p>
 */
export interface ATIModelPerformance {
  /**
   * <p>
   *             The anomaly separation index (ASI) score. This metric summarizes the overall ability of the model to separate anomalous activities from the normal behavior. Depending on the business, a
   *             large fraction of these anomalous activities can be malicious and correspond to the account takeover attacks. A model with no separability power will have the lowest possible
   *             ASI score of 0.5, whereas the a model with a high separability power will have the highest possible ASI score of 1.0
   *         </p>
   */
  asi?: number;
}

/**
 * @public
 * <p>
 *             The Account Takeover Insights (ATI) model training metric details.
 *         </p>
 */
export interface ATITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   */
  metricDataPoints?: ATIMetricDataPoint[];

  /**
   * <p>
   *             The model's overall performance scores.
   *         </p>
   */
  modelPerformance?: ATIModelPerformance;
}

/**
 * @public
 * <p>A key and value pair. </p>
 */
export interface Tag {
  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>A value assigned to a tag key.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>A variable in the list of variables for the batch create variable request.</p>
 */
export interface VariableEntry {
  /**
   * <p>The name of the variable.</p>
   */
  name?: string;

  /**
   * <p>The data type of the variable.</p>
   */
  dataType?: string;

  /**
   * <p>The data source of the variable.</p>
   */
  dataSource?: string;

  /**
   * <p>The default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The description of the variable.</p>
   */
  description?: string;

  /**
   * <p>The type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
   *          </p>
   */
  variableType?: string;
}

/**
 * @public
 */
export interface BatchCreateVariableRequest {
  /**
   * <p>The list of variables for the batch create variable request.</p>
   */
  variableEntries: VariableEntry[] | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Provides the error of the batch create variable API.</p>
 */
export interface BatchCreateVariableError {
  /**
   * <p>The name.</p>
   */
  name?: string;

  /**
   * <p>The error code. </p>
   */
  code?: number;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchCreateVariableResult {
  /**
   * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
   */
  errors?: BatchCreateVariableError[];
}

/**
 * @public
 * <p>An exception indicating an internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>An exception indicating a throttling error.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>An exception indicating a specified value is not allowed.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface BatchGetVariableRequest {
  /**
   * <p>The list of variable names to get.</p>
   */
  names: string[] | undefined;
}

/**
 * @public
 * <p>Provides the error of the batch get variable API.</p>
 */
export interface BatchGetVariableError {
  /**
   * <p>The error name. </p>
   */
  name?: string;

  /**
   * <p>The error code. </p>
   */
  code?: number;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const DataSource = {
  EVENT: "EVENT",
  EXTERNAL_MODEL_SCORE: "EXTERNAL_MODEL_SCORE",
  MODEL_SCORE: "MODEL_SCORE",
} as const;

/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * @public
 * @enum
 */
export const DataType = {
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * @public
 * <p>The variable.</p>
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name?: string;

  /**
   * <p>The data type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>The data source of the variable.</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>The default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The description of the variable. </p>
   */
  description?: string;

  /**
   * <p>The variable type of the variable.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
   *          </p>
   */
  variableType?: string;

  /**
   * <p>The time when variable was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The time when the variable was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The ARN of the variable.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface BatchGetVariableResult {
  /**
   * <p>The returned variables.</p>
   */
  variables?: Variable[];

  /**
   * <p>The errors from the request.</p>
   */
  errors?: BatchGetVariableError[];
}

/**
 * @public
 */
export interface CancelBatchImportJobRequest {
  /**
   * <p> The ID of an in-progress batch import job to cancel. </p>
   *          <p>Amazon Fraud Detector will throw an error if the batch import job is in <code>FAILED</code>, <code>CANCELED</code>, or  <code>COMPLETED</code> state.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelBatchImportJobResult {}

/**
 * @public
 * <p>An exception indicating the specified resource was not found.</p>
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
 * @public
 */
export interface CancelBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job to cancel.</p>
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
   */
  jobId: string | undefined;

  /**
   * <p>The URI that points to the Amazon S3 location of your data file.</p>
   */
  inputPath: string | undefined;

  /**
   * <p>The URI that points to the Amazon S3 location for storing your results. </p>
   */
  outputPath: string | undefined;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The ARN of the IAM role created for Amazon S3 bucket that holds your data file.</p>
   *          <p>The IAM role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket.
   *          For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key-value pairs associated with this request.  </p>
   */
  tags?: Tag[];
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
   */
  jobId: string | undefined;

  /**
   * <p>The Amazon S3 location of your training file.</p>
   */
  inputPath: string | undefined;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   */
  outputPath: string | undefined;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The name of the detector.</p>
   */
  detectorName: string | undefined;

  /**
   * <p>The detector version.</p>
   */
  detectorVersion?: string;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   *          <p>The IAM Role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket.
   *          For more information about bucket permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html">User policy examples</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateBatchPredictionJobResult {}

/**
 * @public
 * @enum
 */
export const ModelTypeEnum = {
  ACCOUNT_TAKEOVER_INSIGHTS: "ACCOUNT_TAKEOVER_INSIGHTS",
  ONLINE_FRAUD_INSIGHTS: "ONLINE_FRAUD_INSIGHTS",
  TRANSACTION_FRAUD_INSIGHTS: "TRANSACTION_FRAUD_INSIGHTS",
} as const;

/**
 * @public
 */
export type ModelTypeEnum = (typeof ModelTypeEnum)[keyof typeof ModelTypeEnum];

/**
 * @public
 * <p>The model version.</p>
 */
export interface ModelVersion {
  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const RuleExecutionMode = {
  ALL_MATCHED: "ALL_MATCHED",
  FIRST_MATCHED: "FIRST_MATCHED",
} as const;

/**
 * @public
 */
export type RuleExecutionMode = (typeof RuleExecutionMode)[keyof typeof RuleExecutionMode];

/**
 * @public
 * <p>A rule.</p>
 */
export interface Rule {
  /**
   * <p>The detector for which the rule is associated.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule ID.</p>
   */
  ruleId: string | undefined;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateDetectorVersionRequest {
  /**
   * <p>The ID of the detector under which you want to create a new version.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The description of the detector version.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Sagemaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints?: string[];

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Rule[] | undefined;

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The rule execution mode for the rules included in the detector version.</p>
   *          <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const DetectorVersionStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type DetectorVersionStatus = (typeof DetectorVersionStatus)[keyof typeof DetectorVersionStatus];

/**
 * @public
 */
export interface CreateDetectorVersionResult {
  /**
   * <p>The ID for the created version's parent detector.</p>
   */
  detectorId?: string;

  /**
   * <p>The ID for the created detector. </p>
   */
  detectorVersionId?: string;

  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;
}

/**
 * @public
 */
export interface CreateListRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             The names of the elements, if providing.  You can also create an empty list and add elements later using the <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_Updatelist.html">UpdateList</a> API.
   *         </p>
   */
  elements?: string[];

  /**
   * <p>
   *             The variable type of the list. You can only assign the variable type with String data type.  For more information, see
   *             <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
   *         </p>
   */
  variableType?: string;

  /**
   * <p>
   *             The description of the list.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             A collection of the key and value pairs.
   *         </p>
   */
  tags?: Tag[];
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
   */
  modelId: string | undefined;

  /**
   * <p>The model type. </p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model description. </p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelResult {}

/**
 * @public
 * <p>Details for the external events data used for model version training.</p>
 */
export interface ExternalEventsDetail {
  /**
   * <p>The Amazon S3 bucket location for the data.</p>
   */
  dataLocation: string | undefined;

  /**
   * <p>The ARN of the role that provides Amazon Fraud Detector access to the data location.</p>
   */
  dataAccessRoleArn: string | undefined;
}

/**
 * @public
 * <p>The start and stop time of the ingested events.</p>
 */
export interface IngestedEventsTimeWindow {
  /**
   * <p>Timestamp of the first ingensted event.</p>
   */
  startTime: string | undefined;

  /**
   * <p>Timestamp of the final ingested event.</p>
   */
  endTime: string | undefined;
}

/**
 * @public
 * <p>The details of the ingested event.</p>
 */
export interface IngestedEventsDetail {
  /**
   * <p>The start and stop time of the ingested events.</p>
   */
  ingestedEventsTimeWindow: IngestedEventsTimeWindow | undefined;
}

/**
 * @public
 * @enum
 */
export const UnlabeledEventsTreatment = {
  AUTO: "AUTO",
  FRAUD: "FRAUD",
  IGNORE: "IGNORE",
  LEGIT: "LEGIT",
} as const;

/**
 * @public
 */
export type UnlabeledEventsTreatment = (typeof UnlabeledEventsTreatment)[keyof typeof UnlabeledEventsTreatment];

/**
 * @public
 * <p>The label schema.</p>
 */
export interface LabelSchema {
  /**
   * <p>The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>\{"FRAUD" => ["0"]</code>, <code>"LEGIT" => ["1"]\}</code> or <code>\{"FRAUD" => ["false"]</code>, <code>"LEGIT" => ["true"]\}</code> or <code>\{"FRAUD" => ["fraud", "abuse"]</code>, <code>"LEGIT" => ["legit", "safe"]\}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
   *         </p>
   */
  labelMapper?: Record<string, string[]>;

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
   */
  unlabeledEventsTreatment?: UnlabeledEventsTreatment | string;
}

/**
 * @public
 * <p>The training data schema.</p>
 */
export interface TrainingDataSchema {
  /**
   * <p>The training data schema variables.</p>
   */
  modelVariables: string[] | undefined;

  /**
   * <p>The label schema.</p>
   */
  labelSchema?: LabelSchema;
}

/**
 * @public
 * @enum
 */
export const TrainingDataSourceEnum = {
  EXTERNAL_EVENTS: "EXTERNAL_EVENTS",
  INGESTED_EVENTS: "INGESTED_EVENTS",
} as const;

/**
 * @public
 */
export type TrainingDataSourceEnum = (typeof TrainingDataSourceEnum)[keyof typeof TrainingDataSourceEnum];

/**
 * @public
 */
export interface CreateModelVersionRequest {
  /**
   * <p>The model ID. </p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The training data source location in Amazon S3. </p>
   */
  trainingDataSource: TrainingDataSourceEnum | string | undefined;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema: TrainingDataSchema | undefined;

  /**
   * <p>Details of the external events data used for model version training. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>Details of the ingested events data used for model version training. Required if <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   */
  ingestedEventsDetail?: IngestedEventsDetail;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateModelVersionResult {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version number of the model version created.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model version status. </p>
   */
  status?: string;
}

/**
 * @public
 * @enum
 */
export const Language = {
  DETECTORPL: "DETECTORPL",
} as const;

/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>The rule ID.</p>
   */
  ruleId: string | undefined;

  /**
   * <p>The detector ID for the rule's parent detector.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;

  /**
   * <p>The language of the rule.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The outcome or outcomes returned when the rule expression matches.</p>
   */
  outcomes: string[] | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRuleResult {
  /**
   * <p>The created rule.</p>
   */
  rule?: Rule;
}

/**
 * @public
 */
export interface CreateVariableRequest {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type of the variable.</p>
   */
  dataType: DataType | string | undefined;

  /**
   * <p>The source of the data.</p>
   */
  dataSource: DataSource | string | undefined;

  /**
   * <p>The default value for the variable when no value is received.</p>
   */
  defaultValue: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
   * 				</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT</code>
   *          </p>
   */
  variableType?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchPredictionJobResult {}

/**
 * @public
 * <p>An exception indicating there was a conflict during a delete operation.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * <p>The ID of the detector to delete.</p>
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
   */
  detectorId: string | undefined;

  /**
   * <p>The ID of the detector version to delete.</p>
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
   */
  eventId: string | undefined;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>Specifies whether or not to delete any predictions associated with the event. If set to <code>True</code>, </p>
   */
  deleteAuditHistory?: boolean;
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
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventsByEventTypeResult {
  /**
   * <p>Name of event type for which to delete the events.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The status of the delete request.</p>
   */
  eventsDeletionStatus?: string;
}

/**
 * @public
 */
export interface DeleteEventTypeRequest {
  /**
   * <p>The name of the event type to delete.</p>
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
   */
  modelId: string | undefined;

  /**
   * <p>The model type of the model to delete.</p>
   */
  modelType: ModelTypeEnum | string | undefined;
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
   */
  modelId: string | undefined;

  /**
   * <p>The model type of the model version to delete.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version number of the model version to delete.</p>
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
   */
  detectorId: string | undefined;

  /**
   * <p>The next token from the previous response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of the detector version.</p>
 */
export interface DetectorVersionSummary {
  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId?: string;

  /**
   * <p>The detector version status. </p>
   */
  status?: DetectorVersionStatus | string;

  /**
   * <p>The detector version description. </p>
   */
  description?: string;

  /**
   * <p>Timestamp of when the detector version was last updated.</p>
   */
  lastUpdatedTime?: string;
}

/**
 * @public
 */
export interface DescribeDetectorResult {
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The status and description for each detector version.</p>
   */
  detectorVersionSummaries?: DetectorVersionSummary[];

  /**
   * <p>The next token to be used for subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>The detector ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DescribeModelVersionsRequest {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The next token from the previous results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The message details.</p>
 */
export interface FieldValidationMessage {
  /**
   * <p>The field name.</p>
   */
  fieldName?: string;

  /**
   * <p>The message ID.</p>
   */
  identifier?: string;

  /**
   * <p>The message title.</p>
   */
  title?: string;

  /**
   * <p>The message content.</p>
   */
  content?: string;

  /**
   * <p>The message type.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>The message details.</p>
 */
export interface FileValidationMessage {
  /**
   * <p>The message title.</p>
   */
  title?: string;

  /**
   * <p>The message content.</p>
   */
  content?: string;

  /**
   * <p>The message type.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>The model training data validation metrics.</p>
 */
export interface DataValidationMetrics {
  /**
   * <p>The file-specific model training data validation messages.</p>
   */
  fileLevelMessages?: FileValidationMessage[];

  /**
   * <p>The field-specific model training validation messages.</p>
   */
  fieldLevelMessages?: FieldValidationMessage[];
}

/**
 * @public
 * <p>Model performance metrics data points.</p>
 */
export interface MetricDataPoint {
  /**
   * <p>The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.</p>
   */
  fpr?: number;

  /**
   * <p>The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.</p>
   */
  precision?: number;

  /**
   * <p>The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.</p>
   */
  tpr?: number;

  /**
   * <p>The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.</p>
   */
  threshold?: number;
}

/**
 * @public
 * <p>The training metric details.</p>
 */
export interface TrainingMetrics {
  /**
   * <p>The area under the curve. This summarizes true positive rate (TPR) and false positive rate (FPR) across all possible model score thresholds. A model with no predictive power has an AUC of 0.5, whereas a perfect model has a score of 1.0.</p>
   */
  auc?: number;

  /**
   * <p>The data points details.</p>
   */
  metricDataPoints?: MetricDataPoint[];
}

/**
 * @public
 * <p>The log odds metric details.</p>
 */
export interface LogOddsMetric {
  /**
   * <p>The name of the variable.</p>
   */
  variableName: string | undefined;

  /**
   * <p>The type of variable.</p>
   */
  variableType: string | undefined;

  /**
   * <p>The relative importance of the variable. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/model-variable-importance.html">Model variable importance</a>.</p>
   */
  variableImportance: number | undefined;
}

/**
 * @public
 * <p>The variable importance metrics details.</p>
 */
export interface VariableImportanceMetrics {
  /**
   * <p>List of variable metrics.</p>
   */
  logOddsMetrics?: LogOddsMetric[];
}

/**
 * @public
 * <p>The training result details.</p>
 */
export interface TrainingResult {
  /**
   * <p>The validation metrics.</p>
   */
  dataValidationMetrics?: DataValidationMetrics;

  /**
   * <p>The training metric details.</p>
   */
  trainingMetrics?: TrainingMetrics;

  /**
   * <p>The variable importance metrics.</p>
   */
  variableImportanceMetrics?: VariableImportanceMetrics;
}

/**
 * @public
 * <p>
 *             The Online Fraud Insights (OFI) model performance metrics data points.
 *         </p>
 */
export interface OFIMetricDataPoint {
  /**
   * <p>
   *             The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *         </p>
   */
  fpr?: number;

  /**
   * <p>
   *             The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *         </p>
   */
  precision?: number;

  /**
   * <p>
   *             The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *         </p>
   */
  tpr?: number;

  /**
   * <p>
   *             The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.
   *         </p>
   */
  threshold?: number;
}

/**
 * @public
 * <p>
 *             Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity.
 *             A range is the difference between upper and lower bound of auc.
 *         </p>
 */
export interface UncertaintyRange {
  /**
   * <p>
   *             The lower bound value of the area under curve (auc).
   *         </p>
   */
  lowerBoundValue: number | undefined;

  /**
   * <p>
   *             The upper bound value of the area under curve (auc).
   *         </p>
   */
  upperBoundValue: number | undefined;
}

/**
 * @public
 * <p>
 *             The Online Fraud Insights (OFI) model performance score.
 *         </p>
 */
export interface OFIModelPerformance {
  /**
   * <p>
   *             The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *         </p>
   */
  auc?: number;

  /**
   * <p>
   *             Indicates the range of area under curve (auc) expected from the OFI model. A range greater than 0.1 indicates higher model uncertainity.
   *         </p>
   */
  uncertaintyRange?: UncertaintyRange;
}

/**
 * @public
 * <p>
 *             The Online Fraud Insights (OFI) model training metric details.
 *         </p>
 */
export interface OFITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   */
  metricDataPoints?: OFIMetricDataPoint[];

  /**
   * <p>
   *             The model's overall performance score.
   *         </p>
   */
  modelPerformance?: OFIModelPerformance;
}

/**
 * @public
 * <p>
 *             The performance metrics data points for Transaction Fraud Insights (TFI) model.
 *         </p>
 */
export interface TFIMetricDataPoint {
  /**
   * <p>
   *             The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.
   *         </p>
   */
  fpr?: number;

  /**
   * <p>
   *             The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.
   *         </p>
   */
  precision?: number;

  /**
   * <p>
   *             The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.
   *         </p>
   */
  tpr?: number;

  /**
   * <p>
   *             The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any
   *             model score 500 or above is labeled as fraud.
   *         </p>
   */
  threshold?: number;
}

/**
 * @public
 * <p>
 *             The Transaction Fraud Insights (TFI) model performance score.
 *         </p>
 */
export interface TFIModelPerformance {
  /**
   * <p>
   *             The area under the curve (auc). This summarizes the total positive rate (tpr) and false positive rate (FPR) across all possible model score thresholds.
   *         </p>
   */
  auc?: number;

  /**
   * <p>
   *             Indicates the range of area under curve (auc) expected from the TFI model. A range greater than 0.1 indicates higher model uncertainity.
   *         </p>
   */
  uncertaintyRange?: UncertaintyRange;
}

/**
 * @public
 * <p>
 *             The Transaction Fraud Insights (TFI) model training metric details.
 *         </p>
 */
export interface TFITrainingMetricsValue {
  /**
   * <p>
   *             The model's performance metrics data points.
   *         </p>
   */
  metricDataPoints?: TFIMetricDataPoint[];

  /**
   * <p>
   *             The model performance score.
   *         </p>
   */
  modelPerformance?: TFIModelPerformance;
}

/**
 * @public
 * <p>
 *             The training metrics details.
 *         </p>
 */
export interface TrainingMetricsV2 {
  /**
   * <p>
   *             The Online Fraud Insights (OFI) model training metric details.
   *         </p>
   */
  ofi?: OFITrainingMetricsValue;

  /**
   * <p>
   *             The Transaction Fraud Insights (TFI) model training metric details.
   *         </p>
   */
  tfi?: TFITrainingMetricsValue;

  /**
   * <p>
   *             The Account Takeover Insights (ATI) model training metric details.
   *         </p>
   */
  ati?: ATITrainingMetricsValue;
}

/**
 * @public
 * <p>
 *             The training result details.
 *         </p>
 */
export interface TrainingResultV2 {
  /**
   * <p>The model training data validation metrics.</p>
   */
  dataValidationMetrics?: DataValidationMetrics;

  /**
   * <p>
   *             The training metric details.
   *         </p>
   */
  trainingMetricsV2?: TrainingMetricsV2;

  /**
   * <p>The variable importance metrics details.</p>
   */
  variableImportanceMetrics?: VariableImportanceMetrics;

  /**
   * <p>
   *             The variable importance metrics of the aggregated variables.
   *         </p>
   *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
   *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
   *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
   */
  aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics;
}

/**
 * @public
 * <p>The details of the model version.</p>
 */
export interface ModelVersionDetail {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The status of the model version.</p>
   */
  status?: string;

  /**
   * <p>The model version training data source.</p>
   */
  trainingDataSource?: TrainingDataSourceEnum | string;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema?: TrainingDataSchema;

  /**
   * <p>The external events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as  <code>EXTERNAL_EVENTS</code>.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>The ingested events data details. This will be populated if the <code>trainingDataSource</code> for the model version is specified as  <code>INGESTED_EVENTS</code>.</p>
   */
  ingestedEventsDetail?: IngestedEventsDetail;

  /**
   * <p>The training results.</p>
   */
  trainingResult?: TrainingResult;

  /**
   * <p>The timestamp when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The timestamp when the model was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;

  /**
   * <p>
   *             The training result details. The details include the relative importance of the variables.
   *         </p>
   */
  trainingResultV2?: TrainingResultV2;
}

/**
 * @public
 */
export interface DescribeModelVersionsResult {
  /**
   * <p>The model version details.</p>
   */
  modelVersionDetails?: ModelVersionDetail[];

  /**
   * <p>The next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetBatchImportJobsRequest {
  /**
   * <p>The ID of the batch import job to get.</p>
   */
  jobId?: string;

  /**
   * <p>The maximum number of objects to return for request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token from the previous request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The batch import job details.</p>
 */
export interface BatchImport {
  /**
   * <p>The ID of the batch import job. </p>
   */
  jobId?: string;

  /**
   * <p>The status of the batch import job.</p>
   */
  status?: AsyncJobStatus | string;

  /**
   * <p>The reason batch import job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Timestamp of when the batch import job started.</p>
   */
  startTime?: string;

  /**
   * <p>Timestamp of when batch import job completed.</p>
   */
  completionTime?: string;

  /**
   * <p>The Amazon S3 location of your data file for batch import.</p>
   */
  inputPath?: string;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   */
  outputPath?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   */
  iamRoleArn?: string;

  /**
   * <p>The ARN of the batch import job.</p>
   */
  arn?: string;

  /**
   * <p>The number of records processed by batch import job.</p>
   */
  processedRecordsCount?: number;

  /**
   * <p>The number of records that failed to import. </p>
   */
  failedRecordsCount?: number;

  /**
   * <p>The total number of records in the batch import job.</p>
   */
  totalRecordsCount?: number;
}

/**
 * @public
 */
export interface GetBatchImportJobsResult {
  /**
   * <p>An array containing the details of each batch import job.</p>
   */
  batchImports?: BatchImport[];

  /**
   * <p>The next token for the subsequent resquest.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsRequest {
  /**
   * <p>The batch prediction job for which to get the details.</p>
   */
  jobId?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token from the previous request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The batch prediction details.</p>
 */
export interface BatchPrediction {
  /**
   * <p>The job ID for the batch prediction.</p>
   */
  jobId?: string;

  /**
   * <p>The batch prediction status.</p>
   */
  status?: AsyncJobStatus | string;

  /**
   * <p>The reason a batch prediction job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Timestamp of when the batch prediction job started.</p>
   */
  startTime?: string;

  /**
   * <p>Timestamp of when the batch prediction job completed.</p>
   */
  completionTime?: string;

  /**
   * <p>Timestamp of most recent heartbeat indicating the batch prediction job was making progress.</p>
   */
  lastHeartbeatTime?: string;

  /**
   * <p>The Amazon S3 location of your training file.</p>
   */
  inputPath?: string;

  /**
   * <p>The Amazon S3 location of your output file.</p>
   */
  outputPath?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The name of the detector.</p>
   */
  detectorName?: string;

  /**
   * <p>The detector version. </p>
   */
  detectorVersion?: string;

  /**
   * <p>The ARN of the IAM role to use for this job request.</p>
   */
  iamRoleArn?: string;

  /**
   * <p>The ARN of batch prediction job.</p>
   */
  arn?: string;

  /**
   * <p>The number of records processed by the batch prediction job.</p>
   */
  processedRecordsCount?: number;

  /**
   * <p>The total number of records in the batch prediction job.</p>
   */
  totalRecordsCount?: number;
}

/**
 * @public
 */
export interface GetBatchPredictionJobsResult {
  /**
   * <p>An array containing the details of each batch prediction job.</p>
   */
  batchPredictions?: BatchPrediction[];

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusRequest {
  /**
   * <p>Name of event type for which to get the deletion status.</p>
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 */
export interface GetDeleteEventsByEventTypeStatusResult {
  /**
   * <p>The event type name.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The deletion status.</p>
   */
  eventsDeletionStatus?: AsyncJobStatus | string;
}

/**
 * @public
 */
export interface GetDetectorsRequest {
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The detector.</p>
 */
export interface Detector {
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The detector description.</p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>Timestamp of when the detector was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>Timestamp of when the detector was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The detector ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetDetectorsResult {
  /**
   * <p>The detectors.</p>
   */
  detectors?: Detector[];

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetDetectorVersionRequest {
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorVersionResult {
  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>The detector version description.</p>
   */
  description?: string;

  /**
   * <p>The Amazon SageMaker model endpoints included in the detector version.</p>
   */
  externalModelEndpoints?: string[];

  /**
   * <p>The model versions included in the detector version. </p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The rules included in the detector version.</p>
   */
  rules?: Rule[];

  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;

  /**
   * <p>The timestamp when the detector version was last updated.
   *         </p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The timestamp when the detector version was created. </p>
   */
  createdTime?: string;

  /**
   * <p>The execution mode of the rule in the dectector</p>
   *          <p>
   *             <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>
   *             <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>The detector version ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetEntityTypesRequest {
  /**
   * <p>The name.</p>
   */
  name?: string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The entity type details.</p>
 */
export interface EntityType {
  /**
   * <p>The entity type name.</p>
   */
  name?: string;

  /**
   * <p>The entity type description.</p>
   */
  description?: string;

  /**
   * <p>Timestamp of when the entity type was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>Timestamp of when the entity type was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The entity type ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetEntityTypesResult {
  /**
   * <p>An array of entity types.</p>
   */
  entityTypes?: EntityType[];

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEventRequest {
  /**
   * <p>The ID of the event to retrieve.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The event type of the event to retrieve.</p>
   */
  eventTypeName: string | undefined;
}

/**
 * @public
 * <p>The entity details. </p>
 */
export interface Entity {
  /**
   * <p>The entity type.</p>
   */
  entityType: string | undefined;

  /**
   * <p>The entity ID. If you do not know the <code>entityId</code>, you can pass <code>unknown</code>, which is areserved string literal.</p>
   */
  entityId: string | undefined;
}

/**
 * @public
 * <p>The event details.</p>
 */
export interface Event {
  /**
   * <p>The event ID.</p>
   */
  eventId?: string;

  /**
   * <p>The event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   */
  eventTimestamp?: string;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
   */
  eventVariables?: Record<string, string>;

  /**
   * <p>The label associated with the event.</p>
   */
  currentLabel?: string;

  /**
   * <p>The timestamp associated with the label to update. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   */
  labelTimestamp?: string;

  /**
   * <p>The event entities.</p>
   */
  entities?: Entity[];
}

/**
 * @public
 */
export interface GetEventResult {
  /**
   * <p>The details of the event.</p>
   */
  event?: Event;
}

/**
 * @public
 * <p>A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.</p>
 */
export interface ModelEndpointDataBlob {
  /**
   * <p>The byte buffer of the Amazon SageMaker model endpoint input data blob.</p>
   */
  byteBuffer?: Uint8Array;

  /**
   * <p>The content type of the Amazon SageMaker model endpoint input data blob. </p>
   */
  contentType?: string;
}

/**
 * @public
 */
export interface GetEventPredictionRequest {
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>The unique ID used to identify the event.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The event type associated with the detector specified for the prediction.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The entity type (associated with the detector's event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."</p>
   */
  entities: Entity[] | undefined;

  /**
   * <p>Timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
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
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * <p>The Amazon SageMaker model endpoint input data blobs.</p>
   */
  externalModelEndpointDataBlobs?: Record<string, ModelEndpointDataBlob>;
}

/**
 * @public
 * @enum
 */
export const ModelSource = {
  SAGEMAKER: "SAGEMAKER",
} as const;

/**
 * @public
 */
export type ModelSource = (typeof ModelSource)[keyof typeof ModelSource];

/**
 * @public
 * <p>The Amazon SageMaker model.</p>
 */
export interface ExternalModelSummary {
  /**
   * <p>The endpoint of the Amazon SageMaker model.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The source of the model.</p>
   */
  modelSource?: ModelSource | string;
}

/**
 * @public
 * <p>The fraud prediction scores from Amazon SageMaker model.</p>
 */
export interface ExternalModelOutputs {
  /**
   * <p>The Amazon SageMaker model.</p>
   */
  externalModel?: ExternalModelSummary;

  /**
   * <p>The fraud prediction scores from Amazon SageMaker model.</p>
   */
  outputs?: Record<string, string>;
}

/**
 * @public
 * <p>The fraud prediction scores.</p>
 */
export interface ModelScores {
  /**
   * <p>The model version.</p>
   */
  modelVersion?: ModelVersion;

  /**
   * <p>The model's fraud prediction scores.</p>
   */
  scores?: Record<string, number>;
}

/**
 * @public
 * <p>The rule results.</p>
 */
export interface RuleResult {
  /**
   * <p>The rule ID that was matched, based on the rule execution mode.</p>
   */
  ruleId?: string;

  /**
   * <p>The outcomes of the matched rule, based on the rule execution mode.</p>
   */
  outcomes?: string[];
}

/**
 * @public
 */
export interface GetEventPredictionResult {
  /**
   * <p>The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.</p>
   */
  modelScores?: ModelScores[];

  /**
   * <p>The results from the rules.</p>
   */
  ruleResults?: RuleResult[];

  /**
   * <p>The model scores for Amazon SageMaker models.</p>
   */
  externalModelOutputs?: ExternalModelOutputs[];
}

/**
 * @public
 * <p>An exception indicating that the attached customer-owned (external) model threw an exception when Amazon Fraud Detector invoked the model.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface GetEventPredictionMetadataRequest {
  /**
   * <p>
   * The event ID.
   * </p>
   */
  eventId: string | undefined;

  /**
   * <p>
   * The event type associated with the detector specified for the prediction.
   * </p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>
   * The detector ID.
   * </p>
   */
  detectorId: string | undefined;

  /**
   * <p>
   * The detector version ID.
   * </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>
   *     The timestamp that defines when the prediction was generated. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   *          <p>We recommend calling <a href="https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html">ListEventPredictions</a>
   *         first, and using the <code>predictionTimestamp</code> value in the response to provide an accurate prediction timestamp value.</p>
   */
  predictionTimestamp: string | undefined;
}

/**
 * @public
 * <p>
 * The details of the external (Amazon Sagemaker) model evaluated for generating predictions.
 * </p>
 */
export interface EvaluatedExternalModel {
  /**
   * <p>
   * The endpoint of the external (Amazon Sagemaker) model.
   * </p>
   */
  modelEndpoint?: string;

  /**
   * <p>
   * Indicates whether event variables were used to generate predictions.
   * </p>
   */
  useEventVariables?: boolean;

  /**
   * <p>
   * Input variables use for generating predictions.
   * </p>
   */
  inputVariables?: Record<string, string>;

  /**
   * <p>
   * Output variables.
   * </p>
   */
  outputVariables?: Record<string, string>;
}

/**
 * @public
 * <p>
 * The details of the event variable's impact on the prediction score.
 * </p>
 */
export interface VariableImpactExplanation {
  /**
   * <p>
   * The event variable name.
   * </p>
   */
  eventVariableName?: string;

  /**
   * <p>
   *     The event variable's relative impact in terms of magnitude on the prediction scores.
   *     The relative impact values consist of a numerical rating (0-5, 5 being the highest) and direction (increased/decreased) impact of the fraud risk.
   * </p>
   */
  relativeImpact?: string;

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
   */
  logOddsImpact?: number;
}

/**
 * @public
 * <p>
 * The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.
 * </p>
 */
export interface PredictionExplanations {
  /**
   * <p>
   * The details of the event variable's impact on the prediction score.
   * </p>
   */
  variableImpactExplanations?: VariableImpactExplanation[];

  /**
   * <p>
   *             The details of the aggregated variables impact on the prediction score.
   *         </p>
   *          <p>Account Takeover Insights (ATI) model uses event variables from the login data you
   *             provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address.
   *             In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>
   */
  aggregatedVariablesImpactExplanations?: AggregatedVariablesImpactExplanation[];
}

/**
 * @public
 * <p>
 * The model version evalutions.
 * </p>
 */
export interface ModelVersionEvaluation {
  /**
   * <p>
   * The output variable name.
   * </p>
   */
  outputVariableName?: string;

  /**
   * <p>
   * The evaluation score generated for the model version.
   * </p>
   */
  evaluationScore?: string;

  /**
   * <p>
   * The prediction explanations generated for the model version.
   * </p>
   */
  predictionExplanations?: PredictionExplanations;
}

/**
 * @public
 * <p>
 * The model version evaluated for generating prediction.
 * </p>
 */
export interface EvaluatedModelVersion {
  /**
   * <p>
   * The model ID.
   * </p>
   */
  modelId?: string;

  /**
   * <p>
   * The model version.
   * </p>
   */
  modelVersion?: string;

  /**
   * <p>The model type. </p>
   *          <p>Valid values: <code>ONLINE_FRAUD_INSIGHTS</code> | <code>TRANSACTION_FRAUD_INSIGHTS</code>
   *          </p>
   */
  modelType?: string;

  /**
   * <p>
   * Evaluations generated for the model version.
   * </p>
   */
  evaluations?: ModelVersionEvaluation[];
}

/**
 * @public
 * <p>
 * Information about the summary of an event variable that was evaluated for generating prediction.
 * </p>
 */
export interface EventVariableSummary {
  /**
   * <p>
   * The event variable name.
   * </p>
   */
  name?: string;

  /**
   * <p>
   * The value of the event variable.
   * </p>
   */
  value?: string;

  /**
   * <p>
   * The event variable source.
   * </p>
   */
  source?: string;
}

/**
 * @public
 * <p>
 * The details of the rule used for evaluating variable values.
 * </p>
 */
export interface EvaluatedRule {
  /**
   * <p>
   * The rule ID.
   * </p>
   */
  ruleId?: string;

  /**
   * <p>
   * The rule version.
   * </p>
   */
  ruleVersion?: string;

  /**
   * <p>
   * The rule expression.
   * </p>
   */
  expression?: string;

  /**
   * <p>
   * The rule expression value.
   * </p>
   */
  expressionWithValues?: string;

  /**
   * <p>
   * The rule outcome.
   * </p>
   */
  outcomes?: string[];

  /**
   * <p>
   * Indicates whether the rule was evaluated.
   * </p>
   */
  evaluated?: boolean;

  /**
   * <p>
   * Indicates whether the rule matched.
   * </p>
   */
  matched?: boolean;
}

/**
 * @public
 */
export interface GetEventPredictionMetadataResult {
  /**
   * <p>
   * The event ID.
   * </p>
   */
  eventId?: string;

  /**
   * <p>
   * The event type associated with the detector specified for this prediction.
   * </p>
   */
  eventTypeName?: string;

  /**
   * <p>
   * The entity ID.
   * </p>
   */
  entityId?: string;

  /**
   * <p>
   * The entity type.
   * </p>
   */
  entityType?: string;

  /**
   * <p>
   * The timestamp for when the prediction was generated for the associated event ID.
   * </p>
   */
  eventTimestamp?: string;

  /**
   * <p>
   * The detector ID.
   * </p>
   */
  detectorId?: string;

  /**
   * <p>
   * The detector version ID.
   * </p>
   */
  detectorVersionId?: string;

  /**
   * <p>
   * The status of the detector version.
   * </p>
   */
  detectorVersionStatus?: string;

  /**
   * <p>
   * A list of event variables that influenced the prediction scores.
   * </p>
   */
  eventVariables?: EventVariableSummary[];

  /**
   * <p>
   * List of rules associated with the detector version that were used for evaluating variable values.
   * </p>
   */
  rules?: EvaluatedRule[];

  /**
   * <p>
   * The execution mode of the rule used for evaluating variable values.
   * </p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>
   * The outcomes of the matched rule, based on the rule execution mode.
   * </p>
   */
  outcomes?: string[];

  /**
   * <p>
   * Model versions that were evaluated for generating predictions.
   * </p>
   */
  evaluatedModelVersions?: EvaluatedModelVersion[];

  /**
   * <p>
   * External (Amazon SageMaker) models that were evaluated for generating predictions.
   * </p>
   */
  evaluatedExternalModels?: EvaluatedExternalModel[];

  /**
   * <p>The timestamp that defines when the prediction was generated. </p>
   */
  predictionTimestamp?: string;
}

/**
 * @public
 */
export interface GetEventTypesRequest {
  /**
   * <p>The name.</p>
   */
  name?: string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const EventIngestion = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EventIngestion = (typeof EventIngestion)[keyof typeof EventIngestion];

/**
 * @public
 * <p>
 *          The event orchestration status.
 *       </p>
 */
export interface EventOrchestration {
  /**
   * <p>Specifies if event orchestration is enabled through Amazon EventBridge.</p>
   */
  eventBridgeEnabled: boolean | undefined;
}

/**
 * @public
 * <p>Data about the stored events.</p>
 */
export interface IngestedEventStatistics {
  /**
   * <p>The number of stored events.</p>
   */
  numberOfEvents?: number;

  /**
   * <p>The total size of the stored events.</p>
   */
  eventDataSizeInBytes?: number;

  /**
   * <p>The oldest stored event.</p>
   */
  leastRecentEvent?: string;

  /**
   * <p>The newest stored event.</p>
   */
  mostRecentEvent?: string;

  /**
   * <p>Timestamp of when the stored event was last updated.
   *       </p>
   */
  lastUpdatedTime?: string;
}

/**
 * @public
 * <p>The event type details.</p>
 */
export interface EventType {
  /**
   * <p>The event type name.</p>
   */
  name?: string;

  /**
   * <p>The event type description.</p>
   */
  description?: string;

  /**
   * <p>The event type event variables.</p>
   */
  eventVariables?: string[];

  /**
   * <p>The event type labels.</p>
   */
  labels?: string[];

  /**
   * <p>The event type entity types.</p>
   */
  entityTypes?: string[];

  /**
   * <p>If <code>Enabled</code>, Amazon Fraud Detector stores event data when you generate a prediction and uses that data to update calculated variables in near real-time. Amazon Fraud Detector uses this data, known as <code>INGESTED_EVENTS</code>, to train your model and  improve fraud predictions.</p>
   */
  eventIngestion?: EventIngestion | string;

  /**
   * <p>Data about the stored events.</p>
   */
  ingestedEventStatistics?: IngestedEventStatistics;

  /**
   * <p>Timestamp of when the event type was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>Timestamp of when the event type was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The entity type ARN.</p>
   */
  arn?: string;

  /**
   * <p>The event orchestration status. </p>
   */
  eventOrchestration?: EventOrchestration;
}

/**
 * @public
 */
export interface GetEventTypesResult {
  /**
   * <p>An array of event types.</p>
   */
  eventTypes?: EventType[];

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetExternalModelsRequest {
  /**
   * <p>The Amazon SageMaker model endpoint.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The next page token for the request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ModelInputDataFormat = {
  CSV: "TEXT_CSV",
  JSON: "APPLICATION_JSON",
} as const;

/**
 * @public
 */
export type ModelInputDataFormat = (typeof ModelInputDataFormat)[keyof typeof ModelInputDataFormat];

/**
 * @public
 * <p>The Amazon SageMaker model input configuration.</p>
 */
export interface ModelInputConfiguration {
  /**
   * <p>The event type name.</p>
   */
  eventTypeName?: string;

  /**
   * <p> The format of the model input configuration. The format differs depending on if it is
   *             passed through to SageMaker or constructed by Amazon Fraud Detector.</p>
   */
  format?: ModelInputDataFormat | string;

  /**
   * <p>The event variables.</p>
   */
  useEventVariables: boolean | undefined;

  /**
   * <p> Template for constructing the JSON input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  jsonInputTemplate?: string;

  /**
   * <p> Template for constructing the CSV input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable-names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  csvInputTemplate?: string;
}

/**
 * @public
 * @enum
 */
export const ModelEndpointStatus = {
  ASSOCIATED: "ASSOCIATED",
  DISSOCIATED: "DISSOCIATED",
} as const;

/**
 * @public
 */
export type ModelEndpointStatus = (typeof ModelEndpointStatus)[keyof typeof ModelEndpointStatus];

/**
 * @public
 * @enum
 */
export const ModelOutputDataFormat = {
  CSV: "TEXT_CSV",
  JSONLINES: "APPLICATION_JSONLINES",
} as const;

/**
 * @public
 */
export type ModelOutputDataFormat = (typeof ModelOutputDataFormat)[keyof typeof ModelOutputDataFormat];

/**
 * @public
 * <p>Provides the Amazon Sagemaker model output configuration.</p>
 */
export interface ModelOutputConfiguration {
  /**
   * <p>The format of the model output configuration.</p>
   */
  format: ModelOutputDataFormat | string | undefined;

  /**
   * <p>A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. </p>
   */
  jsonKeyToVariableMap?: Record<string, string>;

  /**
   * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
   */
  csvIndexToVariableMap?: Record<string, string>;
}

/**
 * @public
 * <p>The Amazon SageMaker model.</p>
 */
export interface ExternalModel {
  /**
   * <p>The Amazon SageMaker model endpoints.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The source of the model.</p>
   */
  modelSource?: ModelSource | string;

  /**
   * <p>The role used to invoke the model. </p>
   */
  invokeModelEndpointRoleArn?: string;

  /**
   * <p>The input configuration.</p>
   */
  inputConfiguration?: ModelInputConfiguration;

  /**
   * <p>The output configuration.</p>
   */
  outputConfiguration?: ModelOutputConfiguration;

  /**
   * <p>The Amazon Fraud Detector status for the external model endpoint</p>
   */
  modelEndpointStatus?: ModelEndpointStatus | string;

  /**
   * <p>Timestamp of when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>Timestamp of when the model was last created.</p>
   */
  createdTime?: string;

  /**
   * <p>The model ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetExternalModelsResult {
  /**
   * <p>Gets the Amazon SageMaker models.</p>
   */
  externalModels?: ExternalModel[];

  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The KMS key details.</p>
 */
export interface KMSKey {
  /**
   * <p>The encryption key ARN.</p>
   */
  kmsEncryptionKeyArn?: string;
}

/**
 * @public
 */
export interface GetKMSEncryptionKeyResult {
  /**
   * <p>The KMS encryption key.</p>
   */
  kmsKey?: KMSKey;
}

/**
 * @public
 */
export interface GetLabelsRequest {
  /**
   * <p>The name of the label or labels to get.</p>
   */
  name?: string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The label details.</p>
 */
export interface Label {
  /**
   * <p>The label name.</p>
   */
  name?: string;

  /**
   * <p>The label description.</p>
   */
  description?: string;

  /**
   * <p>Timestamp of when the label was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>Timestamp of when the event type was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The label ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetLabelsResult {
  /**
   * <p>An array of labels.</p>
   */
  labels?: Label[];

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetListElementsRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             The next token for the subsequent request.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             The maximum number of objects to return for the request.
   *         </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetListElementsResult {
  /**
   * <p>
   *             The list elements.
   *         </p>
   */
  elements?: string[];

  /**
   * <p>
   *             The next page token.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetListsMetadataRequest {
  /**
   * <p>
   *             The name of the list.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             The next token for the subsequent request.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             The maximum number of objects to return for the request.
   *         </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetListsMetadataResult {
  /**
   * <p>
   *             The metadata of the specified list or all lists under the account.
   *         </p>
   */
  lists?: AllowDenyList[];

  /**
   * <p>
   *             The next page token.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The model.</p>
 */
export interface Model {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model description.</p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>Timestamp of when the model was created.</p>
   */
  createdTime?: string;

  /**
   * <p>Timestamp of last time the model was updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The ARN of the model.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetModelsResult {
  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>The array of models.</p>
   */
  models?: Model[];
}

/**
 * @public
 */
export interface GetModelVersionRequest {
  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber: string | undefined;
}

/**
 * @public
 */
export interface GetModelVersionResult {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The training data source.</p>
   */
  trainingDataSource?: TrainingDataSourceEnum | string;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema?: TrainingDataSchema;

  /**
   * <p>The details of the external events data used for training the model version.
   *          This will be populated if the <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>
   *          </p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>The details of the ingested events data used for training the model version.
   *          This will be populated if the <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   */
  ingestedEventsDetail?: IngestedEventsDetail;

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
   */
  status?: string;

  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetOutcomesRequest {
  /**
   * <p>The name of the outcome or outcomes to get.</p>
   */
  name?: string;

  /**
   * <p>The next page token for the request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The outcome.</p>
 */
export interface Outcome {
  /**
   * <p>The outcome name.</p>
   */
  name?: string;

  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>The timestamp when the outcome was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The timestamp when the outcome was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The outcome ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetOutcomesResult {
  /**
   * <p>The outcomes. </p>
   */
  outcomes?: Outcome[];

  /**
   * <p>The next page token for subsequent requests.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetRulesRequest {
  /**
   * <p>The rule ID.</p>
   */
  ruleId?: string;

  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion?: string;

  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of rules to return for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of the rule.</p>
 */
export interface RuleDetail {
  /**
   * <p>The rule ID.</p>
   */
  ruleId?: string;

  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>The detector for which the rule is associated.</p>
   */
  detectorId?: string;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression?: string;

  /**
   * <p>The rule language.</p>
   */
  language?: Language | string;

  /**
   * <p>The rule outcomes.</p>
   */
  outcomes?: string[];

  /**
   * <p>Timestamp of the last time the rule was updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The timestamp of when the rule was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The rule ARN.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetRulesResult {
  /**
   * <p>The details of the requested rule.</p>
   */
  ruleDetails?: RuleDetail[];

  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetVariablesRequest {
  /**
   * <p>The name of the variable. </p>
   */
  name?: string;

  /**
   * <p>The next page token of the get variable request. </p>
   */
  nextToken?: string;

  /**
   * <p>The max size per page determined for the get variable request. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetVariablesResult {
  /**
   * <p>The names of the variables returned. </p>
   */
  variables?: Variable[];

  /**
   * <p>The next page token to be used in subsequent requests. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 * A conditional statement for filtering a list of past predictions.
 * </p>
 */
export interface FilterCondition {
  /**
   * <p>
   * A statement containing a resource property and a value to specify filter condition.
   * </p>
   */
  value?: string;
}

/**
 * @public
 * <p>
 * The time period for when the predictions were generated.
 * </p>
 */
export interface PredictionTimeRange {
  /**
   * <p>
   * The start time of the time period for when the predictions were generated.
   * </p>
   */
  startTime: string | undefined;

  /**
   * <p>
   * The end time of the time period for when the predictions were generated.
   * </p>
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
   */
  eventId?: FilterCondition;

  /**
   * <p>
   * The event type associated with the detector.
   * </p>
   */
  eventType?: FilterCondition;

  /**
   * <p>
   * The detector ID.
   * </p>
   */
  detectorId?: FilterCondition;

  /**
   * <p>
   * The detector version ID.
   * </p>
   */
  detectorVersionId?: FilterCondition;

  /**
   * <p>
   * The time period for when the predictions were generated.
   * </p>
   */
  predictionTimeRange?: PredictionTimeRange;

  /**
   * <p>
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * </p>
   */
  nextToken?: string;

  /**
   * <p>
   * The maximum number of predictions to return for the request.
   * </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>
 * Information about the summary of an event prediction.
 * </p>
 */
export interface EventPredictionSummary {
  /**
   * <p>
   * The event ID.
   * </p>
   */
  eventId?: string;

  /**
   * <p>
   * The event type.
   * </p>
   */
  eventTypeName?: string;

  /**
   * <p>
   * The timestamp of the event.
   * </p>
   */
  eventTimestamp?: string;

  /**
   * <p>
   * The timestamp when the prediction was generated.
   * </p>
   */
  predictionTimestamp?: string;

  /**
   * <p>
   * The detector ID.
   * </p>
   */
  detectorId?: string;

  /**
   * <p>
   * The detector version ID.
   * </p>
   */
  detectorVersionId?: string;
}

/**
 * @public
 */
export interface ListEventPredictionsResult {
  /**
   * <p>
   * The summary of the past predictions.
   * </p>
   */
  eventPredictionSummaries?: EventPredictionSummary[];

  /**
   * <p>
   * Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN that specifies the resource whose tags you want to list.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>The next token from the previous results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The next token for subsequent requests. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutDetectorRequest {
  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;

  /**
   * <p>The description of the detector.</p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  name: string | undefined;

  /**
   * <p>The description of the event type.</p>
   */
  description?: string;

  /**
   * <p>The event type variables.</p>
   */
  eventVariables: string[] | undefined;

  /**
   * <p>The event type labels.</p>
   */
  labels?: string[];

  /**
   * <p>The entity type for the event type. Example entity types: customer, merchant, account.</p>
   */
  entityTypes: string[] | undefined;

  /**
   * <p>Specifies if ingestion is enabled or disabled.</p>
   */
  eventIngestion?: EventIngestion | string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>Enables or disables event orchestration. If enabled, you can send event predictions to select AWS services for downstream processing of the events.</p>
   */
  eventOrchestration?: EventOrchestration;
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
   */
  modelEndpoint: string | undefined;

  /**
   * <p>The source of the model.</p>
   */
  modelSource: ModelSource | string | undefined;

  /**
   * <p>The IAM role used to invoke the model endpoint.</p>
   */
  invokeModelEndpointRoleArn: string | undefined;

  /**
   * <p>The model endpoint input configuration.</p>
   */
  inputConfiguration: ModelInputConfiguration | undefined;

  /**
   * <p>The model endpoint output configuration.</p>
   */
  outputConfiguration: ModelOutputConfiguration | undefined;

  /**
   * <p>The model endpoint’s status in Amazon Fraud Detector.</p>
   */
  modelEndpointStatus: ModelEndpointStatus | string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  name: string | undefined;

  /**
   * <p>The label description.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  name: string | undefined;

  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
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
   */
  eventId: string | undefined;

  /**
   * <p>The event type name of the event.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</p>
   */
  eventTimestamp: string | undefined;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
   */
  eventVariables: Record<string, string> | undefined;

  /**
   * <p>The label to associate with the event. Required if specifying <code>labelTimestamp</code>.</p>
   */
  assignedLabel?: string;

  /**
   * <p>The timestamp associated with the label. Required if specifying <code>assignedLabel</code>.</p>
   */
  labelTimestamp?: string;

  /**
   * <p>An array of entities.</p>
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
   */
  resourceARN: string | undefined;

  /**
   * <p>The tags to assign to the resource.</p>
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
   */
  resourceARN: string | undefined;

  /**
   * <p>The resource ARN.</p>
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
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The Amazon SageMaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints: string[] | undefined;

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Rule[] | undefined;

  /**
   * <p>The detector version description. </p>
   */
  description?: string;

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The rule execution mode to add to the detector.</p>
   *          <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   *          <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;
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
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The description.</p>
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
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>The only supported values are <code>ACTIVE</code> and <code>INACTIVE</code>
   *          </p>
   */
  status: DetectorVersionStatus | string | undefined;
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
   */
  eventId: string | undefined;

  /**
   * <p>The event type of the event associated with the label to update.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The new label to assign to the event.</p>
   */
  assignedLabel: string | undefined;

  /**
   * <p>The timestamp associated with the label. The timestamp must be specified using ISO 8601 standard in UTC. </p>
   */
  labelTimestamp: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventLabelResult {}

/**
 * @public
 * @enum
 */
export const ListUpdateMode = {
  APPEND: "APPEND",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type ListUpdateMode = (typeof ListUpdateMode)[keyof typeof ListUpdateMode];

/**
 * @public
 */
export interface UpdateListRequest {
  /**
   * <p>
   *             The name of the list to update.
   *         </p>
   */
  name: string | undefined;

  /**
   * <p>
   *             One or more list elements to add or replace. If you are providing the elements, make sure to specify the <code>updateMode</code> to use.
   *         </p>
   *          <p>If you are deleting all elements from the list, use <code>REPLACE</code> for the <code>updateMode</code> and provide an empty list (0 elements).</p>
   */
  elements?: string[];

  /**
   * <p>
   *             The new description.
   *         </p>
   */
  description?: string;

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
   */
  updateMode?: ListUpdateMode | string;

  /**
   * <p>
   *             The variable type you want to assign to the list.
   *         </p>
   *          <note>
   *             <p>You cannot update a variable type of a list that already has a variable type assigned to it. You can assign a variable type to a list only if the list does not already have a variable type.</p>
   *          </note>
   */
  variableType?: string;
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
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The new model description.</p>
   */
  description?: string;
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
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The major version number.</p>
   */
  majorVersionNumber: string | undefined;

  /**
   * <p>The details of the external events data used for training the model version. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>The details of the ingested event used for training the model version. Required if your <code>trainingDataSource</code> is <code>INGESTED_EVENTS</code>.</p>
   */
  ingestedEventsDetail?: IngestedEventsDetail;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateModelVersionResult {
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model version number of the model version updated.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The status of the updated model version.</p>
   */
  status?: string;
}

/**
 * @public
 * @enum
 */
export const ModelVersionStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  TRAINING_CANCELLED: "TRAINING_CANCELLED",
} as const;

/**
 * @public
 */
export type ModelVersionStatus = (typeof ModelVersionStatus)[keyof typeof ModelVersionStatus];

/**
 * @public
 */
export interface UpdateModelVersionStatusRequest {
  /**
   * <p>The model ID of the model version to update.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model version status.</p>
   */
  status: ModelVersionStatus | string | undefined;
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
   */
  rule: Rule | undefined;

  /**
   * <p>The rule description.</p>
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
   */
  rule: Rule | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;

  /**
   * <p>The language.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The outcomes.</p>
   */
  outcomes: string[] | undefined;

  /**
   * <p>The tags to assign to the rule version.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateRuleVersionResult {
  /**
   * <p>The new rule version that was created.</p>
   */
  rule?: Rule;
}

/**
 * @public
 */
export interface UpdateVariableRequest {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The new default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The new description.</p>
   */
  description?: string;

  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   */
  variableType?: string;
}

/**
 * @public
 */
export interface UpdateVariableResult {}

/**
 * @internal
 */
export const CreateListRequestFilterSensitiveLog = (obj: CreateListRequest): any => ({
  ...obj,
  ...(obj.elements && { elements: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRuleRequestFilterSensitiveLog = (obj: CreateRuleRequest): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EntityFilterSensitiveLog = (obj: Entity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
  ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
  ...(obj.entities && { entities: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEventResultFilterSensitiveLog = (obj: GetEventResult): any => ({
  ...obj,
  ...(obj.event && { event: EventFilterSensitiveLog(obj.event) }),
});

/**
 * @internal
 */
export const GetEventPredictionRequestFilterSensitiveLog = (obj: GetEventPredictionRequest): any => ({
  ...obj,
  ...(obj.entities && { entities: SENSITIVE_STRING }),
  ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
  ...(obj.externalModelEndpointDataBlobs && { externalModelEndpointDataBlobs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EvaluatedExternalModelFilterSensitiveLog = (obj: EvaluatedExternalModel): any => ({
  ...obj,
  ...(obj.inputVariables && { inputVariables: SENSITIVE_STRING }),
  ...(obj.outputVariables && { outputVariables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EventVariableSummaryFilterSensitiveLog = (obj: EventVariableSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.value && { value: SENSITIVE_STRING }),
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EvaluatedRuleFilterSensitiveLog = (obj: EvaluatedRule): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
  ...(obj.expressionWithValues && { expressionWithValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEventPredictionMetadataResultFilterSensitiveLog = (obj: GetEventPredictionMetadataResult): any => ({
  ...obj,
  ...(obj.eventVariables && {
    eventVariables: obj.eventVariables.map((item) => EventVariableSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.rules && { rules: obj.rules.map((item) => EvaluatedRuleFilterSensitiveLog(item)) }),
  ...(obj.evaluatedExternalModels && {
    evaluatedExternalModels: obj.evaluatedExternalModels.map((item) => EvaluatedExternalModelFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const EventTypeFilterSensitiveLog = (obj: EventType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventTypesResultFilterSensitiveLog = (obj: GetEventTypesResult): any => ({
  ...obj,
  ...(obj.eventTypes && { eventTypes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetListElementsResultFilterSensitiveLog = (obj: GetListElementsResult): any => ({
  ...obj,
  ...(obj.elements && { elements: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RuleDetailFilterSensitiveLog = (obj: RuleDetail): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRulesResultFilterSensitiveLog = (obj: GetRulesResult): any => ({
  ...obj,
  ...(obj.ruleDetails && { ruleDetails: obj.ruleDetails.map((item) => RuleDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SendEventRequestFilterSensitiveLog = (obj: SendEventRequest): any => ({
  ...obj,
  ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
  ...(obj.entities && { entities: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateListRequestFilterSensitiveLog = (obj: UpdateListRequest): any => ({
  ...obj,
  ...(obj.elements && { elements: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateRuleVersionRequestFilterSensitiveLog = (obj: UpdateRuleVersionRequest): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});
