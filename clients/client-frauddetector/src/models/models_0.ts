import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export enum AsyncJobStatus {
  CANCELED = "CANCELED",
  CANCEL_IN_PROGRESS = "CANCEL_IN_PROGRESS",
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  IN_PROGRESS_INITIALIZING = "IN_PROGRESS_INITIALIZING",
}

/**
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
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

export namespace VariableEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableEntry): any => ({
    ...obj,
  });
}

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

export namespace BatchCreateVariableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateVariableRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace BatchCreateVariableError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateVariableError): any => ({
    ...obj,
  });
}

export interface BatchCreateVariableResult {
  /**
   * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
   */
  errors?: BatchCreateVariableError[];
}

export namespace BatchCreateVariableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateVariableResult): any => ({
    ...obj,
  });
}

/**
 * <p>An exception indicating an internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

/**
 * <p>An exception indicating a throttling error.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>An exception indicating a specified value is not allowed.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export interface BatchGetVariableRequest {
  /**
   * <p>The list of variable names to get.</p>
   */
  names: string[] | undefined;
}

export namespace BatchGetVariableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetVariableRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace BatchGetVariableError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetVariableError): any => ({
    ...obj,
  });
}

export enum DataSource {
  EVENT = "EVENT",
  EXTERNAL_MODEL_SCORE = "EXTERNAL_MODEL_SCORE",
  MODEL_SCORE = "MODEL_SCORE",
}

export enum DataType {
  BOOLEAN = "BOOLEAN",
  FLOAT = "FLOAT",
  INTEGER = "INTEGER",
  STRING = "STRING",
}

/**
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

export namespace Variable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
}

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

export namespace BatchGetVariableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetVariableResult): any => ({
    ...obj,
  });
}

export interface CancelBatchImportJobRequest {
  /**
   * <p> The ID of an in-progress batch import job to cancel. </p>
   *          <p>Amazon Fraud Detector will throw an error if the batch import job is in <code>FAILED</code>, <code>CANCELED</code>, or  <code>COMPLETED</code> state.</p>
   */
  jobId: string | undefined;
}

export namespace CancelBatchImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchImportJobRequest): any => ({
    ...obj,
  });
}

export interface CancelBatchImportJobResult {}

export namespace CancelBatchImportJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchImportJobResult): any => ({
    ...obj,
  });
}

/**
 * <p>An exception indicating the specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export interface CancelBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job to cancel.</p>
   */
  jobId: string | undefined;
}

export namespace CancelBatchPredictionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchPredictionJobRequest): any => ({
    ...obj,
  });
}

export interface CancelBatchPredictionJobResult {}

export namespace CancelBatchPredictionJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelBatchPredictionJobResult): any => ({
    ...obj,
  });
}

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
   * <p>The ARN of the IAM role created for Amazon S3 bucket that holds your data file.
   *          The IAM role must have read and write permissions to both input and output S3 buckets.</p>
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key-value pairs associated with this request.  </p>
   */
  tags?: Tag[];
}

export namespace CreateBatchImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchImportJobRequest): any => ({
    ...obj,
  });
}

export interface CreateBatchImportJobResult {}

export namespace CreateBatchImportJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchImportJobResult): any => ({
    ...obj,
  });
}

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
   */
  iamRoleArn: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

export namespace CreateBatchPredictionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchPredictionJobRequest): any => ({
    ...obj,
  });
}

export interface CreateBatchPredictionJobResult {}

export namespace CreateBatchPredictionJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBatchPredictionJobResult): any => ({
    ...obj,
  });
}

export enum ModelTypeEnum {
  ONLINE_FRAUD_INSIGHTS = "ONLINE_FRAUD_INSIGHTS",
  TRANSACTION_FRAUD_INSIGHTS = "TRANSACTION_FRAUD_INSIGHTS",
}

/**
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

export namespace ModelVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelVersion): any => ({
    ...obj,
  });
}

export enum RuleExecutionMode {
  ALL_MATCHED = "ALL_MATCHED",
  FIRST_MATCHED = "FIRST_MATCHED",
}

/**
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

export namespace Rule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

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
   * 	        <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

export namespace CreateDetectorVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDetectorVersionRequest): any => ({
    ...obj,
  });
}

export enum DetectorVersionStatus {
  ACTIVE = "ACTIVE",
  DRAFT = "DRAFT",
  INACTIVE = "INACTIVE",
}

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

export namespace CreateDetectorVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDetectorVersionResult): any => ({
    ...obj,
  });
}

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

export namespace CreateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
}

export interface CreateModelResult {}

export namespace CreateModelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelResult): any => ({
    ...obj,
  });
}

/**
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

export namespace ExternalEventsDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalEventsDetail): any => ({
    ...obj,
  });
}

/**
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

export namespace IngestedEventsTimeWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestedEventsTimeWindow): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the ingested event.</p>
 */
export interface IngestedEventsDetail {
  /**
   * <p>The start and stop time of the ingested events.</p>
   */
  ingestedEventsTimeWindow: IngestedEventsTimeWindow | undefined;
}

export namespace IngestedEventsDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestedEventsDetail): any => ({
    ...obj,
  });
}

export enum UnlabeledEventsTreatment {
  FRAUD = "FRAUD",
  IGNORE = "IGNORE",
  LEGIT = "LEGIT",
}

/**
 * <p>The label schema.</p>
 */
export interface LabelSchema {
  /**
   * <p>The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>{"FRAUD" => ["0"]</code>, <code>"LEGIT" => ["1"]}</code> or <code>{"FRAUD" => ["false"]</code>, <code>"LEGIT" => ["true"]}</code> or <code>{"FRAUD" => ["fraud", "abuse"]</code>, <code>"LEGIT" => ["legit", "safe"]}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
   *         </p>
   */
  labelMapper: { [key: string]: string[] } | undefined;

  /**
   * <p>The action to take for unlabeled events.</p>
   */
  unlabeledEventsTreatment?: UnlabeledEventsTreatment | string;
}

export namespace LabelSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelSchema): any => ({
    ...obj,
  });
}

/**
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
  labelSchema: LabelSchema | undefined;
}

export namespace TrainingDataSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingDataSchema): any => ({
    ...obj,
  });
}

export enum TrainingDataSourceEnum {
  EXTERNAL_EVENTS = "EXTERNAL_EVENTS",
  INGESTED_EVENTS = "INGESTED_EVENTS",
}

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

export namespace CreateModelVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelVersionRequest): any => ({
    ...obj,
  });
}

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

export namespace CreateModelVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelVersionResult): any => ({
    ...obj,
  });
}

export enum Language {
  DETECTORPL = "DETECTORPL",
}

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

export namespace CreateRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleRequest): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
}

export interface CreateRuleResult {
  /**
   * <p>The created rule.</p>
   */
  rule?: Rule;
}

export namespace CreateRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleResult): any => ({
    ...obj,
  });
}

export interface CreateVariableRequest {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type.</p>
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

export namespace CreateVariableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVariableRequest): any => ({
    ...obj,
  });
}

export interface CreateVariableResult {}

export namespace CreateVariableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVariableResult): any => ({
    ...obj,
  });
}

export interface DeleteBatchImportJobRequest {
  /**
   * <p>The ID of the batch import job to delete. </p>
   */
  jobId: string | undefined;
}

export namespace DeleteBatchImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBatchImportJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteBatchImportJobResult {}

export namespace DeleteBatchImportJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBatchImportJobResult): any => ({
    ...obj,
  });
}

export interface DeleteBatchPredictionJobRequest {
  /**
   * <p>The ID of the batch prediction job to delete.</p>
   */
  jobId: string | undefined;
}

export namespace DeleteBatchPredictionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBatchPredictionJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteBatchPredictionJobResult {}

export namespace DeleteBatchPredictionJobResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBatchPredictionJobResult): any => ({
    ...obj,
  });
}

/**
 * <p>An exception indicating there was a conflict during a delete operation.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export interface DeleteDetectorRequest {
  /**
   * <p>The ID of the detector to delete.</p>
   */
  detectorId: string | undefined;
}

export namespace DeleteDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteDetectorResult {}

export namespace DeleteDetectorResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorResult): any => ({
    ...obj,
  });
}

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

export namespace DeleteDetectorVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDetectorVersionResult {}

export namespace DeleteDetectorVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorVersionResult): any => ({
    ...obj,
  });
}

export interface DeleteEntityTypeRequest {
  /**
   * <p>The name of the entity type to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteEntityTypeResult {}

export namespace DeleteEntityTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEntityTypeResult): any => ({
    ...obj,
  });
}

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
   * <p>Specifies whether or not to delete any predictions associated with the event.</p>
   */
  deleteAuditHistory?: boolean;
}

export namespace DeleteEventRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventResult {}

export namespace DeleteEventResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventResult): any => ({
    ...obj,
  });
}

export interface DeleteEventsByEventTypeRequest {
  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;
}

export namespace DeleteEventsByEventTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventsByEventTypeRequest): any => ({
    ...obj,
  });
}

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

export namespace DeleteEventsByEventTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventsByEventTypeResult): any => ({
    ...obj,
  });
}

export interface DeleteEventTypeRequest {
  /**
   * <p>The name of the event type to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteEventTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventTypeResult {}

export namespace DeleteEventTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventTypeResult): any => ({
    ...obj,
  });
}

export interface DeleteExternalModelRequest {
  /**
   * <p>The endpoint of the Amazon Sagemaker model to delete.</p>
   */
  modelEndpoint: string | undefined;
}

export namespace DeleteExternalModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExternalModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteExternalModelResult {}

export namespace DeleteExternalModelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExternalModelResult): any => ({
    ...obj,
  });
}

export interface DeleteLabelRequest {
  /**
   * <p>The name of the label to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteLabelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLabelRequest): any => ({
    ...obj,
  });
}

export interface DeleteLabelResult {}

export namespace DeleteLabelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLabelResult): any => ({
    ...obj,
  });
}

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

export namespace DeleteModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelResult {}

export namespace DeleteModelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelResult): any => ({
    ...obj,
  });
}

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

export namespace DeleteModelVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelVersionResult {}

export namespace DeleteModelVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelVersionResult): any => ({
    ...obj,
  });
}

export interface DeleteOutcomeRequest {
  /**
   * <p>The name of the outcome to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteOutcomeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutcomeRequest): any => ({
    ...obj,
  });
}

export interface DeleteOutcomeResult {}

export namespace DeleteOutcomeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutcomeResult): any => ({
    ...obj,
  });
}

export interface DeleteRuleRequest {
  /**
   * <p>A rule.</p>
   */
  rule: Rule | undefined;
}

export namespace DeleteRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleResult {}

export namespace DeleteRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleResult): any => ({
    ...obj,
  });
}

export interface DeleteVariableRequest {
  /**
   * <p>The name of the variable to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteVariableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVariableRequest): any => ({
    ...obj,
  });
}

export interface DeleteVariableResult {}

export namespace DeleteVariableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVariableResult): any => ({
    ...obj,
  });
}

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

export namespace DescribeDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace DetectorVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorVersionSummary): any => ({
    ...obj,
  });
}

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

export namespace DescribeDetectorResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorResult): any => ({
    ...obj,
  });
}

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

export namespace DescribeModelVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelVersionsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace FieldValidationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldValidationMessage): any => ({
    ...obj,
  });
}

/**
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

export namespace FileValidationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileValidationMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The model training validation messages.</p>
 */
export interface DataValidationMetrics {
  /**
   * <p>The file-specific model training validation messages.</p>
   */
  fileLevelMessages?: FileValidationMessage[];

  /**
   * <p>The field-specific model training validation messages.</p>
   */
  fieldLevelMessages?: FieldValidationMessage[];
}

export namespace DataValidationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataValidationMetrics): any => ({
    ...obj,
  });
}

/**
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

export namespace MetricDataPoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDataPoint): any => ({
    ...obj,
  });
}

/**
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

export namespace TrainingMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingMetrics): any => ({
    ...obj,
  });
}

/**
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

export namespace LogOddsMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogOddsMetric): any => ({
    ...obj,
  });
}

/**
 * <p>The variable importance metrics details.</p>
 */
export interface VariableImportanceMetrics {
  /**
   * <p>List of variable metrics.</p>
   */
  logOddsMetrics?: LogOddsMetric[];
}

export namespace VariableImportanceMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableImportanceMetrics): any => ({
    ...obj,
  });
}

/**
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

export namespace TrainingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrainingResult): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ModelVersionDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelVersionDetail): any => ({
    ...obj,
  });
}

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

export namespace DescribeModelVersionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelVersionsResult): any => ({
    ...obj,
  });
}

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

export namespace GetBatchImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchImportJobsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace BatchImport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImport): any => ({
    ...obj,
  });
}

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

export namespace GetBatchImportJobsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchImportJobsResult): any => ({
    ...obj,
  });
}

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

export namespace GetBatchPredictionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchPredictionJobsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace BatchPrediction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPrediction): any => ({
    ...obj,
  });
}

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

export namespace GetBatchPredictionJobsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBatchPredictionJobsResult): any => ({
    ...obj,
  });
}

export interface GetDeleteEventsByEventTypeStatusRequest {
  /**
   * <p>Name of event type for which to get the deletion status.</p>
   */
  eventTypeName: string | undefined;
}

export namespace GetDeleteEventsByEventTypeStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeleteEventsByEventTypeStatusRequest): any => ({
    ...obj,
  });
}

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

export namespace GetDeleteEventsByEventTypeStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeleteEventsByEventTypeStatusResult): any => ({
    ...obj,
  });
}

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

export namespace GetDetectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Detector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Detector): any => ({
    ...obj,
  });
}

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

export namespace GetDetectorsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorsResult): any => ({
    ...obj,
  });
}

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

export namespace GetDetectorVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorVersionRequest): any => ({
    ...obj,
  });
}

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
   * 	        <p>
   *             <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>
   *             <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>The detector version ARN.</p>
   */
  arn?: string;
}

export namespace GetDetectorVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorVersionResult): any => ({
    ...obj,
  });
}

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

export namespace GetEntityTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEntityTypesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace EntityType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityType): any => ({
    ...obj,
  });
}

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

export namespace GetEntityTypesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEntityTypesResult): any => ({
    ...obj,
  });
}

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

export namespace GetEventRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Entity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
}

/**
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
  eventVariables?: { [key: string]: string };

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

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
    ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
    ...(obj.entities && { entities: SENSITIVE_STRING }),
  });
}

export interface GetEventResult {
  /**
   * <p>The details of the event.</p>
   */
  event?: Event;
}

export namespace GetEventResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventResult): any => ({
    ...obj,
    ...(obj.event && { event: Event.filterSensitiveLog(obj.event) }),
  });
}

/**
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

export namespace ModelEndpointDataBlob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelEndpointDataBlob): any => ({
    ...obj,
  });
}

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
   *
   *          <p>To ensure most accurate fraud prediction and to simplify your data preparation, Amazon Fraud Detector will replace all missing variables or values as follows:</p>
   *
   *          <p>
   *             <b>For Amazon Fraud Detector trained models:</b>
   *          </p>
   *          <p>If a null value is provided explicitly for a variable or if a variable is missing, model will replace the null value or the missing variable (no variable name in the eventVariables map)
   *          with calculated default mean/medians for numeric variables and with special values for categorical variables.</p>
   *
   *          <p>
   *             <b>For imported SageMaker models:</b>
   *          </p>
   *          <p>If a null value is provided explicitly for a variable, the model and rules will use “null” as the value. If a variable is not provided (no variable name in the eventVariables map), model and rules
   *          will use the default value that is provided for the variable. </p>
   */
  eventVariables: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon SageMaker model endpoint input data blobs.</p>
   */
  externalModelEndpointDataBlobs?: { [key: string]: ModelEndpointDataBlob };
}

export namespace GetEventPredictionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventPredictionRequest): any => ({
    ...obj,
    ...(obj.entities && { entities: SENSITIVE_STRING }),
    ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
    ...(obj.externalModelEndpointDataBlobs && { externalModelEndpointDataBlobs: SENSITIVE_STRING }),
  });
}

export enum ModelSource {
  SAGEMAKER = "SAGEMAKER",
}

/**
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

export namespace ExternalModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalModelSummary): any => ({
    ...obj,
  });
}

/**
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
  outputs?: { [key: string]: string };
}

export namespace ExternalModelOutputs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalModelOutputs): any => ({
    ...obj,
  });
}

/**
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
  scores?: { [key: string]: number };
}

export namespace ModelScores {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelScores): any => ({
    ...obj,
  });
}

/**
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

export namespace RuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleResult): any => ({
    ...obj,
  });
}

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

export namespace GetEventPredictionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventPredictionResult): any => ({
    ...obj,
  });
}

/**
 * <p>An exception indicating that the attached customer-owned (external) model threw an exception when Amazon Fraud Detector invoked the model.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  message?: string;
}

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
   * The timestamp that defines when the prediction was generated.
   * </p>
   */
  predictionTimestamp: string | undefined;
}

export namespace GetEventPredictionMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventPredictionMetadataRequest): any => ({
    ...obj,
  });
}

/**
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
  inputVariables?: { [key: string]: string };

  /**
   * <p>
   * Output variables.
   * </p>
   */
  outputVariables?: { [key: string]: string };
}

export namespace EvaluatedExternalModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluatedExternalModel): any => ({
    ...obj,
    ...(obj.inputVariables && { inputVariables: SENSITIVE_STRING }),
    ...(obj.outputVariables && { outputVariables: SENSITIVE_STRING }),
  });
}

/**
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

export namespace VariableImpactExplanation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableImpactExplanation): any => ({
    ...obj,
  });
}

/**
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
}

export namespace PredictionExplanations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictionExplanations): any => ({
    ...obj,
  });
}

/**
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

export namespace ModelVersionEvaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelVersionEvaluation): any => ({
    ...obj,
  });
}

/**
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

export namespace EvaluatedModelVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluatedModelVersion): any => ({
    ...obj,
  });
}

/**
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

export namespace EventVariableSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventVariableSummary): any => ({
    ...obj,
    ...(obj.name && { name: SENSITIVE_STRING }),
    ...(obj.value && { value: SENSITIVE_STRING }),
    ...(obj.source && { source: SENSITIVE_STRING }),
  });
}

/**
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

export namespace EvaluatedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluatedRule): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
    ...(obj.expressionWithValues && { expressionWithValues: SENSITIVE_STRING }),
  });
}

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
   * <p>The timestamp that defines when the prediction was generated.
   * </p>
   */
  predictionTimestamp?: string;
}

export namespace GetEventPredictionMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventPredictionMetadataResult): any => ({
    ...obj,
    ...(obj.eventVariables && {
      eventVariables: obj.eventVariables.map((item) => EventVariableSummary.filterSensitiveLog(item)),
    }),
    ...(obj.rules && { rules: obj.rules.map((item) => EvaluatedRule.filterSensitiveLog(item)) }),
    ...(obj.evaluatedExternalModels && {
      evaluatedExternalModels: obj.evaluatedExternalModels.map((item) =>
        EvaluatedExternalModel.filterSensitiveLog(item)
      ),
    }),
  });
}

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

export namespace GetEventTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventTypesRequest): any => ({
    ...obj,
  });
}

export enum EventIngestion {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
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

export namespace IngestedEventStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestedEventStatistics): any => ({
    ...obj,
  });
}

/**
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
}

export namespace EventType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventType): any => ({
    ...obj,
  });
}

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

export namespace GetEventTypesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventTypesResult): any => ({
    ...obj,
    ...(obj.eventTypes && { eventTypes: SENSITIVE_STRING }),
  });
}

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

export namespace GetExternalModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExternalModelsRequest): any => ({
    ...obj,
  });
}

export enum ModelInputDataFormat {
  CSV = "TEXT_CSV",
  JSON = "APPLICATION_JSON",
}

/**
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

export namespace ModelInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelInputConfiguration): any => ({
    ...obj,
  });
}

export enum ModelEndpointStatus {
  ASSOCIATED = "ASSOCIATED",
  DISSOCIATED = "DISSOCIATED",
}

export enum ModelOutputDataFormat {
  CSV = "TEXT_CSV",
  JSONLINES = "APPLICATION_JSONLINES",
}

/**
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
  jsonKeyToVariableMap?: { [key: string]: string };

  /**
   * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
   */
  csvIndexToVariableMap?: { [key: string]: string };
}

export namespace ModelOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelOutputConfiguration): any => ({
    ...obj,
  });
}

/**
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

export namespace ExternalModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalModel): any => ({
    ...obj,
  });
}

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

export namespace GetExternalModelsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExternalModelsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The KMS key details.</p>
 */
export interface KMSKey {
  /**
   * <p>The encryption key ARN.</p>
   */
  kmsEncryptionKeyArn?: string;
}

export namespace KMSKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSKey): any => ({
    ...obj,
  });
}

export interface GetKMSEncryptionKeyResult {
  /**
   * <p>The KMS encryption key.</p>
   */
  kmsKey?: KMSKey;
}

export namespace GetKMSEncryptionKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKMSEncryptionKeyResult): any => ({
    ...obj,
  });
}

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

export namespace GetLabelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLabelsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Label {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Label): any => ({
    ...obj,
  });
}

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

export namespace GetLabelsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLabelsResult): any => ({
    ...obj,
  });
}

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

export namespace GetModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Model {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
}

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

export namespace GetModelsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelsResult): any => ({
    ...obj,
  });
}

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

export namespace GetModelVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelVersionRequest): any => ({
    ...obj,
  });
}

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
   * 	        <p>Possible values are:</p>
   * 	        <ul>
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

export namespace GetModelVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetModelVersionResult): any => ({
    ...obj,
  });
}

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

export namespace GetOutcomesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutcomesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Outcome {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Outcome): any => ({
    ...obj,
  });
}

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

export namespace GetOutcomesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutcomesResult): any => ({
    ...obj,
  });
}

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

export namespace GetRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRulesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace RuleDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleDetail): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
}

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

export namespace GetRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRulesResult): any => ({
    ...obj,
    ...(obj.ruleDetails && { ruleDetails: obj.ruleDetails.map((item) => RuleDetail.filterSensitiveLog(item)) }),
  });
}

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

export namespace GetVariablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVariablesRequest): any => ({
    ...obj,
  });
}

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

export namespace GetVariablesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVariablesResult): any => ({
    ...obj,
  });
}

/**
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

export namespace FilterCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterCondition): any => ({
    ...obj,
  });
}

/**
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

export namespace PredictionTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictionTimeRange): any => ({
    ...obj,
  });
}

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

export namespace ListEventPredictionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventPredictionsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace EventPredictionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventPredictionSummary): any => ({
    ...obj,
  });
}

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

export namespace ListEventPredictionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventPredictionsResult): any => ({
    ...obj,
  });
}

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

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

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

export namespace ListTagsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

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

export namespace PutDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDetectorRequest): any => ({
    ...obj,
  });
}

export interface PutDetectorResult {}

export namespace PutDetectorResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDetectorResult): any => ({
    ...obj,
  });
}

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

export namespace PutEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface PutEntityTypeResult {}

export namespace PutEntityTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEntityTypeResult): any => ({
    ...obj,
  });
}

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
   * <p>Specifies if ingenstion is enabled or disabled.</p>
   */
  eventIngestion?: EventIngestion | string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];
}

export namespace PutEventTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventTypeRequest): any => ({
    ...obj,
  });
}

export interface PutEventTypeResult {}

export namespace PutEventTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventTypeResult): any => ({
    ...obj,
  });
}

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

export namespace PutExternalModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutExternalModelRequest): any => ({
    ...obj,
  });
}

export interface PutExternalModelResult {}

export namespace PutExternalModelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutExternalModelResult): any => ({
    ...obj,
  });
}

export interface PutKMSEncryptionKeyRequest {
  /**
   * <p>The KMS encryption key ARN.</p>
   */
  kmsEncryptionKeyArn: string | undefined;
}

export namespace PutKMSEncryptionKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutKMSEncryptionKeyRequest): any => ({
    ...obj,
  });
}

export interface PutKMSEncryptionKeyResult {}

export namespace PutKMSEncryptionKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutKMSEncryptionKeyResult): any => ({
    ...obj,
  });
}

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
   * <p></p>
   */
  tags?: Tag[];
}

export namespace PutLabelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLabelRequest): any => ({
    ...obj,
  });
}

export interface PutLabelResult {}

export namespace PutLabelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLabelResult): any => ({
    ...obj,
  });
}

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

export namespace PutOutcomeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOutcomeRequest): any => ({
    ...obj,
  });
}

export interface PutOutcomeResult {}

export namespace PutOutcomeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutOutcomeResult): any => ({
    ...obj,
  });
}

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
  eventVariables: { [key: string]: string } | undefined;

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

export namespace SendEventRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendEventRequest): any => ({
    ...obj,
    ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
    ...(obj.entities && { entities: SENSITIVE_STRING }),
  });
}

export interface SendEventResult {}

export namespace SendEventResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendEventResult): any => ({
    ...obj,
  });
}

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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {}

export namespace TagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {}

export namespace UntagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}

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
   * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;
}

export namespace UpdateDetectorVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDetectorVersionResult {}

export namespace UpdateDetectorVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateDetectorVersionMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateDetectorVersionMetadataResult {}

export namespace UpdateDetectorVersionMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionMetadataResult): any => ({
    ...obj,
  });
}

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
   */
  status: DetectorVersionStatus | string | undefined;
}

export namespace UpdateDetectorVersionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateDetectorVersionStatusResult {}

export namespace UpdateDetectorVersionStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorVersionStatusResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateEventLabelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventLabelRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventLabelResult {}

export namespace UpdateEventLabelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventLabelResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj,
  });
}

export interface UpdateModelResult {}

export namespace UpdateModelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateModelVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelVersionRequest): any => ({
    ...obj,
  });
}

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

export namespace UpdateModelVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelVersionResult): any => ({
    ...obj,
  });
}

export enum ModelVersionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  TRAINING_CANCELLED = "TRAINING_CANCELLED",
}

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

export namespace UpdateModelVersionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelVersionStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateModelVersionStatusResult {}

export namespace UpdateModelVersionStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelVersionStatusResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateRuleMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateRuleMetadataResult {}

export namespace UpdateRuleMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleMetadataResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateRuleVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleVersionRequest): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
}

export interface UpdateRuleVersionResult {
  /**
   * <p>The new rule version that was created.</p>
   */
  rule?: Rule;
}

export namespace UpdateRuleVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleVersionResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateVariableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVariableRequest): any => ({
    ...obj,
  });
}

export interface UpdateVariableResult {}

export namespace UpdateVariableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVariableResult): any => ({
    ...obj,
  });
}
