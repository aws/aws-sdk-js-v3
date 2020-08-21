import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>Provides the error of the batch create variable API.</p>
 */
export interface BatchCreateVariableError {
  __type?: "BatchCreateVariableError";
  /**
   * <p>The error code. </p>
   */
  code?: number;

  /**
   * <p>The name.</p>
   */
  name?: string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

export namespace BatchCreateVariableError {
  export const filterSensitiveLog = (obj: BatchCreateVariableError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchCreateVariableError => __isa(o, "BatchCreateVariableError");
}

export interface BatchCreateVariableRequest {
  __type?: "BatchCreateVariableRequest";
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The list of variables for the batch create variable request.</p>
   */
  variableEntries: VariableEntry[] | undefined;
}

export namespace BatchCreateVariableRequest {
  export const filterSensitiveLog = (obj: BatchCreateVariableRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchCreateVariableRequest => __isa(o, "BatchCreateVariableRequest");
}

export interface BatchCreateVariableResult {
  __type?: "BatchCreateVariableResult";
  /**
   * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
   */
  errors?: BatchCreateVariableError[];
}

export namespace BatchCreateVariableResult {
  export const filterSensitiveLog = (obj: BatchCreateVariableResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchCreateVariableResult => __isa(o, "BatchCreateVariableResult");
}

/**
 * <p>Provides the error of the batch get variable API.</p>
 */
export interface BatchGetVariableError {
  __type?: "BatchGetVariableError";
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
  export const filterSensitiveLog = (obj: BatchGetVariableError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetVariableError => __isa(o, "BatchGetVariableError");
}

export interface BatchGetVariableRequest {
  __type?: "BatchGetVariableRequest";
  /**
   * <p>The list of variable names to get.</p>
   */
  names: string[] | undefined;
}

export namespace BatchGetVariableRequest {
  export const filterSensitiveLog = (obj: BatchGetVariableRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetVariableRequest => __isa(o, "BatchGetVariableRequest");
}

export interface BatchGetVariableResult {
  __type?: "BatchGetVariableResult";
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
  export const filterSensitiveLog = (obj: BatchGetVariableResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetVariableResult => __isa(o, "BatchGetVariableResult");
}

/**
 * <p>An exception indicating there was a conflict during a delete operation. The following delete operations can cause a conflict exception:</p>
 * 	        <ul>
 *             <li>
 *                <p>DeleteDetector: A conflict exception will occur if the detector has associated <code>Rules</code> or <code>DetectorVersions</code>. You can only delete a detector if it has no <code>Rules</code> or <code>DetectorVersions</code>.</p>
 *             </li>
 *             <li>
 *                <p>DeleteDetectorVersion: A conflict exception will occur if the <code>DetectorVersion</code> status is <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>DeleteRule: A conflict exception will occur if the <code>RuleVersion</code> is in use by an associated <code>ACTIVE</code> or <code>INACTIVE DetectorVersion</code>.</p>
 *             </li>
 *          </ul>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CreateDetectorVersionRequest {
  __type?: "CreateDetectorVersionRequest";
  /**
   * <p>The description of the detector version.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Sagemaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints?: string[];

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The ID of the detector under which you want to create a new version.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule execution mode for the rules included in the detector version.</p>
   * 	        <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Rule[] | undefined;
}

export namespace CreateDetectorVersionRequest {
  export const filterSensitiveLog = (obj: CreateDetectorVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorVersionRequest => __isa(o, "CreateDetectorVersionRequest");
}

export interface CreateDetectorVersionResult {
  __type?: "CreateDetectorVersionResult";
  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;

  /**
   * <p>The ID for the created version's parent detector.</p>
   */
  detectorId?: string;

  /**
   * <p>The ID for the created detector. </p>
   */
  detectorVersionId?: string;
}

export namespace CreateDetectorVersionResult {
  export const filterSensitiveLog = (obj: CreateDetectorVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorVersionResult => __isa(o, "CreateDetectorVersionResult");
}

export interface CreateModelRequest {
  __type?: "CreateModelRequest";
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

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
}

export namespace CreateModelRequest {
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelRequest => __isa(o, "CreateModelRequest");
}

export interface CreateModelResult {
  __type?: "CreateModelResult";
}

export namespace CreateModelResult {
  export const filterSensitiveLog = (obj: CreateModelResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelResult => __isa(o, "CreateModelResult");
}

export interface CreateModelVersionRequest {
  __type?: "CreateModelVersionRequest";
  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The training data source location in Amazon S3. </p>
   */
  trainingDataSource: TrainingDataSourceEnum | string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The model ID. </p>
   */
  modelId: string | undefined;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema: TrainingDataSchema | undefined;

  /**
   * <p>Details for the external events data used for model version training. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;
}

export namespace CreateModelVersionRequest {
  export const filterSensitiveLog = (obj: CreateModelVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelVersionRequest => __isa(o, "CreateModelVersionRequest");
}

export interface CreateModelVersionResult {
  __type?: "CreateModelVersionResult";
  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model version status. </p>
   */
  status?: string;

  /**
   * <p>The model version number of the model version created.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;
}

export namespace CreateModelVersionResult {
  export const filterSensitiveLog = (obj: CreateModelVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateModelVersionResult => __isa(o, "CreateModelVersionResult");
}

export interface CreateRuleRequest {
  __type?: "CreateRuleRequest";
  /**
   * <p>The language of the rule.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The outcome or outcomes returned when the rule expression matches.</p>
   */
  outcomes: string[] | undefined;

  /**
   * <p>The detector ID for the rule's parent detector.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The rule ID.</p>
   */
  ruleId: string | undefined;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;
}

export namespace CreateRuleRequest {
  export const filterSensitiveLog = (obj: CreateRuleRequest): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateRuleRequest => __isa(o, "CreateRuleRequest");
}

export interface CreateRuleResult {
  __type?: "CreateRuleResult";
  /**
   * <p>The created rule.</p>
   */
  rule?: Rule;
}

export namespace CreateRuleResult {
  export const filterSensitiveLog = (obj: CreateRuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRuleResult => __isa(o, "CreateRuleResult");
}

export interface CreateVariableRequest {
  __type?: "CreateVariableRequest";
  /**
   * <p>The default value for the variable when no value is received.</p>
   */
  defaultValue: string | undefined;

  /**
   * <p>The source of the data.</p>
   */
  dataSource: DataSource | string | undefined;

  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
   * 				</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT | SHIPPING_ZIP | USERAGENT</code>
   *          </p>
   */
  variableType?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The data type.</p>
   */
  dataType: DataType | string | undefined;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;
}

export namespace CreateVariableRequest {
  export const filterSensitiveLog = (obj: CreateVariableRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVariableRequest => __isa(o, "CreateVariableRequest");
}

export interface CreateVariableResult {
  __type?: "CreateVariableResult";
}

export namespace CreateVariableResult {
  export const filterSensitiveLog = (obj: CreateVariableResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVariableResult => __isa(o, "CreateVariableResult");
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
 * <p>The model training validation messages.</p>
 */
export interface DataValidationMetrics {
  __type?: "DataValidationMetrics";
  /**
   * <p>The field-specific model training validation messages.</p>
   */
  fieldLevelMessages?: FieldValidationMessage[];

  /**
   * <p>The file-specific model training validation messages.</p>
   */
  fileLevelMessages?: FileValidationMessage[];
}

export namespace DataValidationMetrics {
  export const filterSensitiveLog = (obj: DataValidationMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataValidationMetrics => __isa(o, "DataValidationMetrics");
}

export interface DeleteDetectorRequest {
  __type?: "DeleteDetectorRequest";
  /**
   * <p>The ID of the detector to delete.</p>
   */
  detectorId: string | undefined;
}

export namespace DeleteDetectorRequest {
  export const filterSensitiveLog = (obj: DeleteDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorRequest => __isa(o, "DeleteDetectorRequest");
}

export interface DeleteDetectorResult {
  __type?: "DeleteDetectorResult";
}

export namespace DeleteDetectorResult {
  export const filterSensitiveLog = (obj: DeleteDetectorResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorResult => __isa(o, "DeleteDetectorResult");
}

export interface DeleteDetectorVersionRequest {
  __type?: "DeleteDetectorVersionRequest";
  /**
   * <p>The ID of the detector version to delete.</p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The ID of the parent detector for the detector version to delete.</p>
   */
  detectorId: string | undefined;
}

export namespace DeleteDetectorVersionRequest {
  export const filterSensitiveLog = (obj: DeleteDetectorVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorVersionRequest => __isa(o, "DeleteDetectorVersionRequest");
}

export interface DeleteDetectorVersionResult {
  __type?: "DeleteDetectorVersionResult";
}

export namespace DeleteDetectorVersionResult {
  export const filterSensitiveLog = (obj: DeleteDetectorVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorVersionResult => __isa(o, "DeleteDetectorVersionResult");
}

export interface DeleteEventRequest {
  __type?: "DeleteEventRequest";
  /**
   * <p>The ID of the event to delete.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;
}

export namespace DeleteEventRequest {
  export const filterSensitiveLog = (obj: DeleteEventRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEventRequest => __isa(o, "DeleteEventRequest");
}

export interface DeleteEventResult {
  __type?: "DeleteEventResult";
}

export namespace DeleteEventResult {
  export const filterSensitiveLog = (obj: DeleteEventResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEventResult => __isa(o, "DeleteEventResult");
}

export interface DeleteRuleRequest {
  __type?: "DeleteRuleRequest";
  /**
   * <p>A rule.</p>
   */
  rule: Rule | undefined;
}

export namespace DeleteRuleRequest {
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRuleRequest => __isa(o, "DeleteRuleRequest");
}

export interface DeleteRuleResult {
  __type?: "DeleteRuleResult";
}

export namespace DeleteRuleResult {
  export const filterSensitiveLog = (obj: DeleteRuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRuleResult => __isa(o, "DeleteRuleResult");
}

export interface DescribeDetectorRequest {
  __type?: "DescribeDetectorRequest";
  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The maximum number of results to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token from the previous response.</p>
   */
  nextToken?: string;
}

export namespace DescribeDetectorRequest {
  export const filterSensitiveLog = (obj: DescribeDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDetectorRequest => __isa(o, "DescribeDetectorRequest");
}

export interface DescribeDetectorResult {
  __type?: "DescribeDetectorResult";
  /**
   * <p>The status and description for each detector version.</p>
   */
  detectorVersionSummaries?: DetectorVersionSummary[];

  /**
   * <p>The detector ARN.</p>
   */
  arn?: string;

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The next token to be used for subsequent requests.</p>
   */
  nextToken?: string;
}

export namespace DescribeDetectorResult {
  export const filterSensitiveLog = (obj: DescribeDetectorResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDetectorResult => __isa(o, "DescribeDetectorResult");
}

export interface DescribeModelVersionsRequest {
  __type?: "DescribeModelVersionsRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The next token from the previous results.</p>
   */
  nextToken?: string;
}

export namespace DescribeModelVersionsRequest {
  export const filterSensitiveLog = (obj: DescribeModelVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeModelVersionsRequest => __isa(o, "DescribeModelVersionsRequest");
}

export interface DescribeModelVersionsResult {
  __type?: "DescribeModelVersionsResult";
  /**
   * <p>The next token.</p>
   */
  nextToken?: string;

  /**
   * <p>The model version details.</p>
   */
  modelVersionDetails?: ModelVersionDetail[];
}

export namespace DescribeModelVersionsResult {
  export const filterSensitiveLog = (obj: DescribeModelVersionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeModelVersionsResult => __isa(o, "DescribeModelVersionsResult");
}

/**
 * <p>The detector.</p>
 */
export interface Detector {
  __type?: "Detector";
  /**
   * <p>Timestamp of when the detector was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The detector description.</p>
   */
  description?: string;

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The detector ARN.</p>
   */
  arn?: string;

  /**
   * <p>Timestamp of when the detector was last updated.</p>
   */
  lastUpdatedTime?: string;
}

export namespace Detector {
  export const filterSensitiveLog = (obj: Detector): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Detector => __isa(o, "Detector");
}

export enum DetectorVersionStatus {
  ACTIVE = "ACTIVE",
  DRAFT = "DRAFT",
  INACTIVE = "INACTIVE",
}

/**
 * <p>The summary of the detector version.</p>
 */
export interface DetectorVersionSummary {
  __type?: "DetectorVersionSummary";
  /**
   * <p>The detector version status. </p>
   */
  status?: DetectorVersionStatus | string;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId?: string;

  /**
   * <p>Timestamp of when the detector version was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The detector version description. </p>
   */
  description?: string;
}

export namespace DetectorVersionSummary {
  export const filterSensitiveLog = (obj: DetectorVersionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorVersionSummary => __isa(o, "DetectorVersionSummary");
}

/**
 * <p>The entity details. </p>
 */
export interface Entity {
  __type?: "Entity";
  /**
   * <p>The entity ID. If you do not know the <code>entityId</code>, you can pass <code>unknown</code>, which is areserved string literal.</p>
   */
  entityId: string | undefined;

  /**
   * <p>The entity type.</p>
   */
  entityType: string | undefined;
}

export namespace Entity {
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Entity => __isa(o, "Entity");
}

/**
 * <p>The entity type details.</p>
 */
export interface EntityType {
  __type?: "EntityType";
  /**
   * <p>The entity type ARN.</p>
   */
  arn?: string;

  /**
   * <p>Timestamp of when the entity type was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The entity type description.</p>
   */
  description?: string;

  /**
   * <p>The entity type name.</p>
   */
  name?: string;

  /**
   * <p>Timestamp of when the entity type was created.</p>
   */
  createdTime?: string;
}

export namespace EntityType {
  export const filterSensitiveLog = (obj: EntityType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EntityType => __isa(o, "EntityType");
}

/**
 * <p>The event type details.</p>
 */
export interface EventType {
  __type?: "EventType";
  /**
   * <p>The event type description.</p>
   */
  description?: string;

  /**
   * <p>The event type name.</p>
   */
  name?: string;

  /**
   * <p>Timestamp of when the event type was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The event type entity types.</p>
   */
  entityTypes?: string[];

  /**
   * <p>The event type labels.</p>
   */
  labels?: string[];

  /**
   * <p>The entity type ARN.</p>
   */
  arn?: string;

  /**
   * <p>Timestamp of when the event type was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The event type event variables.</p>
   */
  eventVariables?: string[];
}

export namespace EventType {
  export const filterSensitiveLog = (obj: EventType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventType => __isa(o, "EventType");
}

/**
 * <p>Details for the external events data used for model version training.</p>
 */
export interface ExternalEventsDetail {
  __type?: "ExternalEventsDetail";
  /**
   * <p>The ARN of the role that provides Amazon Fraud Detector access to the data location.</p>
   */
  dataAccessRoleArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket location for the data.</p>
   */
  dataLocation: string | undefined;
}

export namespace ExternalEventsDetail {
  export const filterSensitiveLog = (obj: ExternalEventsDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExternalEventsDetail => __isa(o, "ExternalEventsDetail");
}

/**
 * <p>The Amazon SageMaker model.</p>
 */
export interface ExternalModel {
  __type?: "ExternalModel";
  /**
   * <p>The model ARN.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon SageMaker model endpoints.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The input configuration.</p>
   */
  inputConfiguration?: ModelInputConfiguration;

  /**
   * <p>Timestamp of when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The role used to invoke the model. </p>
   */
  invokeModelEndpointRoleArn?: string;

  /**
   * <p>The source of the model.</p>
   */
  modelSource?: ModelSource | string;

  /**
   * <p>The Amazon Fraud Detector status for the external model endpoint</p>
   */
  modelEndpointStatus?: ModelEndpointStatus | string;

  /**
   * <p>Timestamp of when the model was last created.</p>
   */
  createdTime?: string;

  /**
   * <p>The output configuration.</p>
   */
  outputConfiguration?: ModelOutputConfiguration;
}

export namespace ExternalModel {
  export const filterSensitiveLog = (obj: ExternalModel): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExternalModel => __isa(o, "ExternalModel");
}

/**
 * <p>The message details.</p>
 */
export interface FieldValidationMessage {
  __type?: "FieldValidationMessage";
  /**
   * <p>The message type.</p>
   */
  type?: string;

  /**
   * <p>The field name.</p>
   */
  fieldName?: string;

  /**
   * <p>The message ID.</p>
   */
  identifier?: string;

  /**
   * <p>The message content.</p>
   */
  content?: string;

  /**
   * <p>The message title.</p>
   */
  title?: string;
}

export namespace FieldValidationMessage {
  export const filterSensitiveLog = (obj: FieldValidationMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FieldValidationMessage => __isa(o, "FieldValidationMessage");
}

/**
 * <p>The message details.</p>
 */
export interface FileValidationMessage {
  __type?: "FileValidationMessage";
  /**
   * <p>The message content.</p>
   */
  content?: string;

  /**
   * <p>The message type.</p>
   */
  type?: string;

  /**
   * <p>The message title.</p>
   */
  title?: string;
}

export namespace FileValidationMessage {
  export const filterSensitiveLog = (obj: FileValidationMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FileValidationMessage => __isa(o, "FileValidationMessage");
}

export interface GetDetectorsRequest {
  __type?: "GetDetectorsRequest";
  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;
}

export namespace GetDetectorsRequest {
  export const filterSensitiveLog = (obj: GetDetectorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorsRequest => __isa(o, "GetDetectorsRequest");
}

export interface GetDetectorsResult {
  __type?: "GetDetectorsResult";
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
  export const filterSensitiveLog = (obj: GetDetectorsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorsResult => __isa(o, "GetDetectorsResult");
}

export interface GetDetectorVersionRequest {
  __type?: "GetDetectorVersionRequest";
  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;
}

export namespace GetDetectorVersionRequest {
  export const filterSensitiveLog = (obj: GetDetectorVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorVersionRequest => __isa(o, "GetDetectorVersionRequest");
}

export interface GetDetectorVersionResult {
  __type?: "GetDetectorVersionResult";
  /**
   * <p>The Amazon SageMaker model endpoints included in the detector version.</p>
   */
  externalModelEndpoints?: string[];

  /**
   * <p>The execution mode of the rule in the dectector</p>
   * 	        <p>
   *             <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>
   *             <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>The detector version description.</p>
   */
  description?: string;

  /**
   * <p>The detector version ARN.</p>
   */
  arn?: string;

  /**
   * <p>The status of the detector version.</p>
   */
  status?: DetectorVersionStatus | string;

  /**
   * <p>The rules included in the detector version.</p>
   */
  rules?: Rule[];

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
   * <p>The model versions included in the detector version. </p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The detector ID.</p>
   */
  detectorId?: string;
}

export namespace GetDetectorVersionResult {
  export const filterSensitiveLog = (obj: GetDetectorVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDetectorVersionResult => __isa(o, "GetDetectorVersionResult");
}

export interface GetEntityTypesRequest {
  __type?: "GetEntityTypesRequest";
  /**
   * <p>The name.</p>
   */
  name?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;
}

export namespace GetEntityTypesRequest {
  export const filterSensitiveLog = (obj: GetEntityTypesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEntityTypesRequest => __isa(o, "GetEntityTypesRequest");
}

export interface GetEntityTypesResult {
  __type?: "GetEntityTypesResult";
  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of entity types.</p>
   */
  entityTypes?: EntityType[];
}

export namespace GetEntityTypesResult {
  export const filterSensitiveLog = (obj: GetEntityTypesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEntityTypesResult => __isa(o, "GetEntityTypesResult");
}

export interface GetEventPredictionRequest {
  __type?: "GetEventPredictionRequest";
  /**
   * <p>The unique ID used to identify the event.</p>
   */
  eventId: string | undefined;

  /**
   * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
   */
  eventVariables: { [key: string]: string } | undefined;

  /**
   * <p>The detector version ID.</p>
   */
  detectorVersionId?: string;

  /**
   * <p>The Amazon SageMaker model endpoint input data blobs.</p>
   */
  externalModelEndpointDataBlobs?: { [key: string]: ModelEndpointDataBlob };

  /**
   * <p>The event type associated with the detector specified for the prediction.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>Timestamp that defines when the event under evaluation occurred.</p>
   */
  eventTimestamp: string | undefined;

  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The entity type (associated with the detector's event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."</p>
   */
  entities: Entity[] | undefined;
}

export namespace GetEventPredictionRequest {
  export const filterSensitiveLog = (obj: GetEventPredictionRequest): any => ({
    ...obj,
    ...(obj.eventVariables && { eventVariables: SENSITIVE_STRING }),
    ...(obj.externalModelEndpointDataBlobs && { externalModelEndpointDataBlobs: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetEventPredictionRequest => __isa(o, "GetEventPredictionRequest");
}

export interface GetEventPredictionResult {
  __type?: "GetEventPredictionResult";
  /**
   * <p>The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.</p>
   */
  modelScores?: ModelScores[];

  /**
   * <p>The results.</p>
   */
  ruleResults?: RuleResult[];
}

export namespace GetEventPredictionResult {
  export const filterSensitiveLog = (obj: GetEventPredictionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventPredictionResult => __isa(o, "GetEventPredictionResult");
}

export interface GetEventTypesRequest {
  __type?: "GetEventTypesRequest";
  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;

  /**
   * <p>The name.</p>
   */
  name?: string;
}

export namespace GetEventTypesRequest {
  export const filterSensitiveLog = (obj: GetEventTypesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventTypesRequest => __isa(o, "GetEventTypesRequest");
}

export interface GetEventTypesResult {
  __type?: "GetEventTypesResult";
  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of event types.</p>
   */
  eventTypes?: EventType[];
}

export namespace GetEventTypesResult {
  export const filterSensitiveLog = (obj: GetEventTypesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventTypesResult => __isa(o, "GetEventTypesResult");
}

export interface GetExternalModelsRequest {
  __type?: "GetExternalModelsRequest";
  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon SageMaker model endpoint.</p>
   */
  modelEndpoint?: string;

  /**
   * <p>The next page token for the request.</p>
   */
  nextToken?: string;
}

export namespace GetExternalModelsRequest {
  export const filterSensitiveLog = (obj: GetExternalModelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExternalModelsRequest => __isa(o, "GetExternalModelsRequest");
}

export interface GetExternalModelsResult {
  __type?: "GetExternalModelsResult";
  /**
   * <p>The next page token to be used in subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>Gets the Amazon SageMaker models.</p>
   */
  externalModels?: ExternalModel[];
}

export namespace GetExternalModelsResult {
  export const filterSensitiveLog = (obj: GetExternalModelsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExternalModelsResult => __isa(o, "GetExternalModelsResult");
}

export interface GetKMSEncryptionKeyResult {
  __type?: "GetKMSEncryptionKeyResult";
  /**
   * <p>The KMS encryption key.</p>
   */
  kmsKey?: KMSKey;
}

export namespace GetKMSEncryptionKeyResult {
  export const filterSensitiveLog = (obj: GetKMSEncryptionKeyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetKMSEncryptionKeyResult => __isa(o, "GetKMSEncryptionKeyResult");
}

export interface GetLabelsRequest {
  __type?: "GetLabelsRequest";
  /**
   * <p>The name of the label or labels to get.</p>
   */
  name?: string;

  /**
   * <p>The maximum number of objects to return for the request.</p>
   */
  maxResults?: number;

  /**
   * <p>The next token for the subsequent request.</p>
   */
  nextToken?: string;
}

export namespace GetLabelsRequest {
  export const filterSensitiveLog = (obj: GetLabelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLabelsRequest => __isa(o, "GetLabelsRequest");
}

export interface GetLabelsResult {
  __type?: "GetLabelsResult";
  /**
   * <p>The next page token.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of labels.</p>
   */
  labels?: Label[];
}

export namespace GetLabelsResult {
  export const filterSensitiveLog = (obj: GetLabelsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLabelsResult => __isa(o, "GetLabelsResult");
}

export interface GetModelsRequest {
  __type?: "GetModelsRequest";
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

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;
}

export namespace GetModelsRequest {
  export const filterSensitiveLog = (obj: GetModelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelsRequest => __isa(o, "GetModelsRequest");
}

export interface GetModelsResult {
  __type?: "GetModelsResult";
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
  export const filterSensitiveLog = (obj: GetModelsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelsResult => __isa(o, "GetModelsResult");
}

export interface GetModelVersionRequest {
  __type?: "GetModelVersionRequest";
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
  export const filterSensitiveLog = (obj: GetModelVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelVersionRequest => __isa(o, "GetModelVersionRequest");
}

export interface GetModelVersionResult {
  __type?: "GetModelVersionResult";
  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;

  /**
   * <p>The training data source.</p>
   */
  trainingDataSource?: TrainingDataSourceEnum | string;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema?: TrainingDataSchema;

  /**
   * <p>The model version status.</p>
   */
  status?: string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The event details.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;
}

export namespace GetModelVersionResult {
  export const filterSensitiveLog = (obj: GetModelVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetModelVersionResult => __isa(o, "GetModelVersionResult");
}

export interface GetOutcomesRequest {
  __type?: "GetOutcomesRequest";
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
  export const filterSensitiveLog = (obj: GetOutcomesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutcomesRequest => __isa(o, "GetOutcomesRequest");
}

export interface GetOutcomesResult {
  __type?: "GetOutcomesResult";
  /**
   * <p>The next page token for subsequent requests.</p>
   */
  nextToken?: string;

  /**
   * <p>The outcomes. </p>
   */
  outcomes?: Outcome[];
}

export namespace GetOutcomesResult {
  export const filterSensitiveLog = (obj: GetOutcomesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutcomesResult => __isa(o, "GetOutcomesResult");
}

export interface GetRulesRequest {
  __type?: "GetRulesRequest";
  /**
   * <p>The maximum number of rules to return for the request.</p>
   */
  maxResults?: number;

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
   * <p>The rule ID.</p>
   */
  ruleId?: string;
}

export namespace GetRulesRequest {
  export const filterSensitiveLog = (obj: GetRulesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRulesRequest => __isa(o, "GetRulesRequest");
}

export interface GetRulesResult {
  __type?: "GetRulesResult";
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
  export const filterSensitiveLog = (obj: GetRulesResult): any => ({
    ...obj,
    ...(obj.ruleDetails && { ruleDetails: obj.ruleDetails.map((item) => RuleDetail.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is GetRulesResult => __isa(o, "GetRulesResult");
}

export interface GetVariablesRequest {
  __type?: "GetVariablesRequest";
  /**
   * <p>The name of the variable. </p>
   */
  name?: string;

  /**
   * <p>The max size per page determined for the get variable request. </p>
   */
  maxResults?: number;

  /**
   * <p>The next page token of the get variable request. </p>
   */
  nextToken?: string;
}

export namespace GetVariablesRequest {
  export const filterSensitiveLog = (obj: GetVariablesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVariablesRequest => __isa(o, "GetVariablesRequest");
}

export interface GetVariablesResult {
  __type?: "GetVariablesResult";
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
  export const filterSensitiveLog = (obj: GetVariablesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVariablesResult => __isa(o, "GetVariablesResult");
}

/**
 * <p>An exception indicating an internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>The KMS key details.</p>
 */
export interface KMSKey {
  __type?: "KMSKey";
  /**
   * <p>The encryption key ARN.</p>
   */
  kmsEncryptionKeyArn?: string;
}

export namespace KMSKey {
  export const filterSensitiveLog = (obj: KMSKey): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KMSKey => __isa(o, "KMSKey");
}

/**
 * <p>The label details.</p>
 */
export interface Label {
  __type?: "Label";
  /**
   * <p>Timestamp of when the label was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The label ARN.</p>
   */
  arn?: string;

  /**
   * <p>The label description.</p>
   */
  description?: string;

  /**
   * <p>The label name.</p>
   */
  name?: string;

  /**
   * <p>Timestamp of when the event type was created.</p>
   */
  createdTime?: string;
}

export namespace Label {
  export const filterSensitiveLog = (obj: Label): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Label => __isa(o, "Label");
}

/**
 * <p>The label schema.</p>
 */
export interface LabelSchema {
  __type?: "LabelSchema";
  /**
   * <p>The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>{"FRAUD" => ["0"]</code>, <code>"LEGIT" => ["1"]}</code> or <code>{"FRAUD" => ["false"]</code>, <code>"LEGIT" => ["true"]}</code> or <code>{"FRAUD" => ["fraud", "abuse"]</code>, <code>"LEGIT" => ["legit", "safe"]}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
   *         </p>
   */
  labelMapper: { [key: string]: string[] } | undefined;
}

export namespace LabelSchema {
  export const filterSensitiveLog = (obj: LabelSchema): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LabelSchema => __isa(o, "LabelSchema");
}

export enum Language {
  DETECTORPL = "DETECTORPL",
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The next token from the previous results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects to return for the request. </p>
   */
  maxResults?: number;

  /**
   * <p>The ARN that specifies the resource whose tags you want to list.</p>
   */
  resourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResult => __isa(o, "ListTagsForResourceResult");
}

/**
 * <p>Model performance metrics data points.</p>
 */
export interface MetricDataPoint {
  __type?: "MetricDataPoint";
  /**
   * <p>The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.</p>
   */
  threshold?: number;

  /**
   * <p>The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.</p>
   */
  fpr?: number;

  /**
   * <p>The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.</p>
   */
  tpr?: number;

  /**
   * <p>The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.</p>
   */
  precision?: number;
}

export namespace MetricDataPoint {
  export const filterSensitiveLog = (obj: MetricDataPoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricDataPoint => __isa(o, "MetricDataPoint");
}

/**
 * <p>The model.</p>
 */
export interface Model {
  __type?: "Model";
  /**
   * <p>The model description.</p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName?: string;

  /**
   * <p>Timestamp of last time the model was updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The ARN of the model.</p>
   */
  arn?: string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>Timestamp of when the model was created.</p>
   */
  createdTime?: string;
}

export namespace Model {
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Model => __isa(o, "Model");
}

/**
 * <p>A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.</p>
 */
export interface ModelEndpointDataBlob {
  __type?: "ModelEndpointDataBlob";
  /**
   * <p>The content type of the Amazon SageMaker model endpoint input data blob. </p>
   */
  contentType?: string;

  /**
   * <p>The byte buffer of the Amazon SageMaker model endpoint input data blob.</p>
   */
  byteBuffer?: Uint8Array;
}

export namespace ModelEndpointDataBlob {
  export const filterSensitiveLog = (obj: ModelEndpointDataBlob): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelEndpointDataBlob => __isa(o, "ModelEndpointDataBlob");
}

export enum ModelEndpointStatus {
  ASSOCIATED = "ASSOCIATED",
  DISSOCIATED = "DISSOCIATED",
}

/**
 * <p>The Amazon SageMaker model input configuration.</p>
 */
export interface ModelInputConfiguration {
  __type?: "ModelInputConfiguration";
  /**
   * <p> Template for constructing the CSV input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable-names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  csvInputTemplate?: string;

  /**
   * <p> The format of the model input configuration. The format differs depending on if it is
   *             passed through to SageMaker or constructed by Amazon Fraud Detector.</p>
   */
  format?: ModelInputDataFormat | string;

  /**
   * <p> Template for constructing the JSON input-data sent to SageMaker. At event-evaluation,
   *             the placeholders for variable names in the template will be replaced with the variable
   *             values before being sent to SageMaker. </p>
   */
  jsonInputTemplate?: string;

  /**
   * <p>The event type name.</p>
   */
  eventTypeName?: string;

  /**
   * <p>The event variables.</p>
   */
  useEventVariables: boolean | undefined;
}

export namespace ModelInputConfiguration {
  export const filterSensitiveLog = (obj: ModelInputConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelInputConfiguration => __isa(o, "ModelInputConfiguration");
}

export enum ModelInputDataFormat {
  CSV = "TEXT_CSV",
  JSON = "APPLICATION_JSON",
}

/**
 * <p>Provides the Amazon Sagemaker model output configuration.</p>
 */
export interface ModelOutputConfiguration {
  __type?: "ModelOutputConfiguration";
  /**
   * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
   */
  csvIndexToVariableMap?: { [key: string]: string };

  /**
   * <p>A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. </p>
   */
  jsonKeyToVariableMap?: { [key: string]: string };

  /**
   * <p>The format of the model output configuration.</p>
   */
  format: ModelOutputDataFormat | string | undefined;
}

export namespace ModelOutputConfiguration {
  export const filterSensitiveLog = (obj: ModelOutputConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelOutputConfiguration => __isa(o, "ModelOutputConfiguration");
}

export enum ModelOutputDataFormat {
  CSV = "TEXT_CSV",
  JSONLINES = "APPLICATION_JSONLINES",
}

/**
 * <p>The fraud prediction scores.</p>
 */
export interface ModelScores {
  __type?: "ModelScores";
  /**
   * <p>The model's fraud prediction scores.</p>
   */
  scores?: { [key: string]: number };

  /**
   * <p>The model version.</p>
   */
  modelVersion?: ModelVersion;
}

export namespace ModelScores {
  export const filterSensitiveLog = (obj: ModelScores): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelScores => __isa(o, "ModelScores");
}

export enum ModelSource {
  SAGEMAKER = "SAGEMAKER",
}

export enum ModelTypeEnum {
  ONLINE_FRAUD_INSIGHTS = "ONLINE_FRAUD_INSIGHTS",
}

/**
 * <p>The model version.</p>
 */
export interface ModelVersion {
  __type?: "ModelVersion";
  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;
}

export namespace ModelVersion {
  export const filterSensitiveLog = (obj: ModelVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelVersion => __isa(o, "ModelVersion");
}

/**
 * <p>The details of the model version.</p>
 */
export interface ModelVersionDetail {
  __type?: "ModelVersionDetail";
  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber?: string;

  /**
   * <p>The timestamp when the model was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The status of the model version.</p>
   */
  status?: string;

  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The timestamp when the model was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The model version ARN.</p>
   */
  arn?: string;

  /**
   * <p>The model version training data source.</p>
   */
  trainingDataSource?: TrainingDataSourceEnum | string;

  /**
   * <p>The training results.</p>
   */
  trainingResult?: TrainingResult;

  /**
   * <p>The event details.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The training data schema.</p>
   */
  trainingDataSchema?: TrainingDataSchema;
}

export namespace ModelVersionDetail {
  export const filterSensitiveLog = (obj: ModelVersionDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelVersionDetail => __isa(o, "ModelVersionDetail");
}

export enum ModelVersionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>The outcome.</p>
 */
export interface Outcome {
  __type?: "Outcome";
  /**
   * <p>The timestamp when the outcome was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The timestamp when the outcome was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>The outcome name.</p>
   */
  name?: string;

  /**
   * <p>The outcome ARN.</p>
   */
  arn?: string;
}

export namespace Outcome {
  export const filterSensitiveLog = (obj: Outcome): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Outcome => __isa(o, "Outcome");
}

export interface PutDetectorRequest {
  __type?: "PutDetectorRequest";
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The description of the detector.</p>
   */
  description?: string;

  /**
   * <p>The name of the event type.</p>
   */
  eventTypeName: string | undefined;

  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;
}

export namespace PutDetectorRequest {
  export const filterSensitiveLog = (obj: PutDetectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDetectorRequest => __isa(o, "PutDetectorRequest");
}

export interface PutDetectorResult {
  __type?: "PutDetectorResult";
}

export namespace PutDetectorResult {
  export const filterSensitiveLog = (obj: PutDetectorResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDetectorResult => __isa(o, "PutDetectorResult");
}

export interface PutEntityTypeRequest {
  __type?: "PutEntityTypeRequest";
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
  export const filterSensitiveLog = (obj: PutEntityTypeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEntityTypeRequest => __isa(o, "PutEntityTypeRequest");
}

export interface PutEntityTypeResult {
  __type?: "PutEntityTypeResult";
}

export namespace PutEntityTypeResult {
  export const filterSensitiveLog = (obj: PutEntityTypeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEntityTypeResult => __isa(o, "PutEntityTypeResult");
}

export interface PutEventTypeRequest {
  __type?: "PutEventTypeRequest";
  /**
   * <p>The event type labels.</p>
   */
  labels?: string[];

  /**
   * <p>The event type variables.</p>
   */
  eventVariables: string[] | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The entity type for the event type. Example entity types: customer, merchant, account.</p>
   */
  entityTypes: string[] | undefined;

  /**
   * <p>The description of the event type.</p>
   */
  description?: string;

  /**
   * <p>The name.</p>
   */
  name: string | undefined;
}

export namespace PutEventTypeRequest {
  export const filterSensitiveLog = (obj: PutEventTypeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventTypeRequest => __isa(o, "PutEventTypeRequest");
}

export interface PutEventTypeResult {
  __type?: "PutEventTypeResult";
}

export namespace PutEventTypeResult {
  export const filterSensitiveLog = (obj: PutEventTypeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEventTypeResult => __isa(o, "PutEventTypeResult");
}

export interface PutExternalModelRequest {
  __type?: "PutExternalModelRequest";
  /**
   * <p>The IAM role used to invoke the model endpoint.</p>
   */
  invokeModelEndpointRoleArn: string | undefined;

  /**
   * <p>The model endpoint’s status in Amazon Fraud Detector.</p>
   */
  modelEndpointStatus: ModelEndpointStatus | string | undefined;

  /**
   * <p>The model endpoint input configuration.</p>
   */
  inputConfiguration: ModelInputConfiguration | undefined;

  /**
   * <p>The model endpoints name.</p>
   */
  modelEndpoint: string | undefined;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The source of the model.</p>
   */
  modelSource: ModelSource | string | undefined;

  /**
   * <p>The model endpoint output configuration.</p>
   */
  outputConfiguration: ModelOutputConfiguration | undefined;
}

export namespace PutExternalModelRequest {
  export const filterSensitiveLog = (obj: PutExternalModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutExternalModelRequest => __isa(o, "PutExternalModelRequest");
}

export interface PutExternalModelResult {
  __type?: "PutExternalModelResult";
}

export namespace PutExternalModelResult {
  export const filterSensitiveLog = (obj: PutExternalModelResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutExternalModelResult => __isa(o, "PutExternalModelResult");
}

export interface PutKMSEncryptionKeyRequest {
  __type?: "PutKMSEncryptionKeyRequest";
  /**
   * <p>The KMS encryption key ARN.</p>
   */
  kmsEncryptionKeyArn: string | undefined;
}

export namespace PutKMSEncryptionKeyRequest {
  export const filterSensitiveLog = (obj: PutKMSEncryptionKeyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutKMSEncryptionKeyRequest => __isa(o, "PutKMSEncryptionKeyRequest");
}

export interface PutKMSEncryptionKeyResult {
  __type?: "PutKMSEncryptionKeyResult";
}

export namespace PutKMSEncryptionKeyResult {
  export const filterSensitiveLog = (obj: PutKMSEncryptionKeyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutKMSEncryptionKeyResult => __isa(o, "PutKMSEncryptionKeyResult");
}

export interface PutLabelRequest {
  __type?: "PutLabelRequest";
  /**
   * <p></p>
   */
  tags?: Tag[];

  /**
   * <p>The label name.</p>
   */
  name: string | undefined;

  /**
   * <p>The label description.</p>
   */
  description?: string;
}

export namespace PutLabelRequest {
  export const filterSensitiveLog = (obj: PutLabelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutLabelRequest => __isa(o, "PutLabelRequest");
}

export interface PutLabelResult {
  __type?: "PutLabelResult";
}

export namespace PutLabelResult {
  export const filterSensitiveLog = (obj: PutLabelResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutLabelResult => __isa(o, "PutLabelResult");
}

export interface PutOutcomeRequest {
  __type?: "PutOutcomeRequest";
  /**
   * <p>The outcome description.</p>
   */
  description?: string;

  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the outcome.</p>
   */
  name: string | undefined;
}

export namespace PutOutcomeRequest {
  export const filterSensitiveLog = (obj: PutOutcomeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutOutcomeRequest => __isa(o, "PutOutcomeRequest");
}

export interface PutOutcomeResult {
  __type?: "PutOutcomeResult";
}

export namespace PutOutcomeResult {
  export const filterSensitiveLog = (obj: PutOutcomeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutOutcomeResult => __isa(o, "PutOutcomeResult");
}

/**
 * <p>An exception indicating the specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>A rule.</p>
 */
export interface Rule {
  __type?: "Rule";
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
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Rule => __isa(o, "Rule");
}

/**
 * <p>The details of the rule.</p>
 */
export interface RuleDetail {
  __type?: "RuleDetail";
  /**
   * <p>The rule language.</p>
   */
  language?: Language | string;

  /**
   * <p>The rule description.</p>
   */
  description?: string;

  /**
   * <p>The timestamp of when the rule was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The rule ID.</p>
   */
  ruleId?: string;

  /**
   * <p>The rule expression.</p>
   */
  expression?: string;

  /**
   * <p>The detector for which the rule is associated.</p>
   */
  detectorId?: string;

  /**
   * <p>The rule outcomes.</p>
   */
  outcomes?: string[];

  /**
   * <p>The rule ARN.</p>
   */
  arn?: string;

  /**
   * <p>The rule version.</p>
   */
  ruleVersion?: string;

  /**
   * <p>Timestamp of the last time the rule was updated.</p>
   */
  lastUpdatedTime?: string;
}

export namespace RuleDetail {
  export const filterSensitiveLog = (obj: RuleDetail): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is RuleDetail => __isa(o, "RuleDetail");
}

export enum RuleExecutionMode {
  ALL_MATCHED = "ALL_MATCHED",
  FIRST_MATCHED = "FIRST_MATCHED",
}

/**
 * <p>The rule results.</p>
 */
export interface RuleResult {
  __type?: "RuleResult";
  /**
   * <p>The outcomes of the matched rule, based on the rule execution mode.</p>
   */
  outcomes?: string[];

  /**
   * <p>The rule ID that was matched, based on the rule execution mode.</p>
   */
  ruleId?: string;
}

export namespace RuleResult {
  export const filterSensitiveLog = (obj: RuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RuleResult => __isa(o, "RuleResult");
}

/**
 * <p>A key and value pair. </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A value assigned to a tag key.</p>
   */
  value: string | undefined;

  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResult {
  __type?: "TagResourceResult";
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResult => __isa(o, "TagResourceResult");
}

/**
 * <p>An exception indicating a throttling error.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

/**
 * <p>The training data schema.</p>
 */
export interface TrainingDataSchema {
  __type?: "TrainingDataSchema";
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
  export const filterSensitiveLog = (obj: TrainingDataSchema): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TrainingDataSchema => __isa(o, "TrainingDataSchema");
}

export enum TrainingDataSourceEnum {
  EXTERNAL_EVENTS = "EXTERNAL_EVENTS",
}

/**
 * <p>The training metric details.</p>
 */
export interface TrainingMetrics {
  __type?: "TrainingMetrics";
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
  export const filterSensitiveLog = (obj: TrainingMetrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TrainingMetrics => __isa(o, "TrainingMetrics");
}

/**
 * <p>The training result details.</p>
 */
export interface TrainingResult {
  __type?: "TrainingResult";
  /**
   * <p>The validation metrics.</p>
   */
  dataValidationMetrics?: DataValidationMetrics;

  /**
   * <p>The training metric details.</p>
   */
  trainingMetrics?: TrainingMetrics;
}

export namespace TrainingResult {
  export const filterSensitiveLog = (obj: TrainingResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TrainingResult => __isa(o, "TrainingResult");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResult {
  __type?: "UntagResourceResult";
}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResult => __isa(o, "UntagResourceResult");
}

export interface UpdateDetectorVersionMetadataRequest {
  __type?: "UpdateDetectorVersionMetadataRequest";
  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The detector ID.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The description.</p>
   */
  description: string | undefined;
}

export namespace UpdateDetectorVersionMetadataRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionMetadataRequest =>
    __isa(o, "UpdateDetectorVersionMetadataRequest");
}

export interface UpdateDetectorVersionMetadataResult {
  __type?: "UpdateDetectorVersionMetadataResult";
}

export namespace UpdateDetectorVersionMetadataResult {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionMetadataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionMetadataResult =>
    __isa(o, "UpdateDetectorVersionMetadataResult");
}

export interface UpdateDetectorVersionRequest {
  __type?: "UpdateDetectorVersionRequest";
  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;

  /**
   * <p>The model versions to include in the detector version.</p>
   */
  modelVersions?: ModelVersion[];

  /**
   * <p>The parent detector ID for the detector version you want to update.</p>
   */
  detectorId: string | undefined;

  /**
   * <p>The detector version description. </p>
   */
  description?: string;

  /**
   * <p>The rules to include in the detector version.</p>
   */
  rules: Rule[] | undefined;

  /**
   * <p>The Amazon SageMaker model endpoints to include in the detector version.</p>
   */
  externalModelEndpoints: string[] | undefined;

  /**
   * <p>The rule execution mode to add to the detector.</p>
   * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
   * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
   *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
   */
  ruleExecutionMode?: RuleExecutionMode | string;
}

export namespace UpdateDetectorVersionRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionRequest => __isa(o, "UpdateDetectorVersionRequest");
}

export interface UpdateDetectorVersionResult {
  __type?: "UpdateDetectorVersionResult";
}

export namespace UpdateDetectorVersionResult {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionResult => __isa(o, "UpdateDetectorVersionResult");
}

export interface UpdateDetectorVersionStatusRequest {
  __type?: "UpdateDetectorVersionStatusRequest";
  /**
   * <p>The detector ID. </p>
   */
  detectorId: string | undefined;

  /**
   * <p>The new status.</p>
   */
  status: DetectorVersionStatus | string | undefined;

  /**
   * <p>The detector version ID. </p>
   */
  detectorVersionId: string | undefined;
}

export namespace UpdateDetectorVersionStatusRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionStatusRequest =>
    __isa(o, "UpdateDetectorVersionStatusRequest");
}

export interface UpdateDetectorVersionStatusResult {
  __type?: "UpdateDetectorVersionStatusResult";
}

export namespace UpdateDetectorVersionStatusResult {
  export const filterSensitiveLog = (obj: UpdateDetectorVersionStatusResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorVersionStatusResult => __isa(o, "UpdateDetectorVersionStatusResult");
}

export interface UpdateModelRequest {
  __type?: "UpdateModelRequest";
  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The new model description.</p>
   */
  description?: string;
}

export namespace UpdateModelRequest {
  export const filterSensitiveLog = (obj: UpdateModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelRequest => __isa(o, "UpdateModelRequest");
}

export interface UpdateModelResult {
  __type?: "UpdateModelResult";
}

export namespace UpdateModelResult {
  export const filterSensitiveLog = (obj: UpdateModelResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelResult => __isa(o, "UpdateModelResult");
}

export interface UpdateModelVersionRequest {
  __type?: "UpdateModelVersionRequest";
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags?: Tag[];

  /**
   * <p>The major version number.</p>
   */
  majorVersionNumber: string | undefined;

  /**
   * <p>The model ID.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The event details.</p>
   */
  externalEventsDetail?: ExternalEventsDetail;
}

export namespace UpdateModelVersionRequest {
  export const filterSensitiveLog = (obj: UpdateModelVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelVersionRequest => __isa(o, "UpdateModelVersionRequest");
}

export interface UpdateModelVersionResult {
  __type?: "UpdateModelVersionResult";
  /**
   * <p>The model type.</p>
   */
  modelType?: ModelTypeEnum | string;

  /**
   * <p>The status of the updated model version.</p>
   */
  status?: string;

  /**
   * <p>The model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The model version number of the model version updated.</p>
   */
  modelVersionNumber?: string;
}

export namespace UpdateModelVersionResult {
  export const filterSensitiveLog = (obj: UpdateModelVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelVersionResult => __isa(o, "UpdateModelVersionResult");
}

export interface UpdateModelVersionStatusRequest {
  __type?: "UpdateModelVersionStatusRequest";
  /**
   * <p>The model ID of the model version to update.</p>
   */
  modelId: string | undefined;

  /**
   * <p>The model version number.</p>
   */
  modelVersionNumber: string | undefined;

  /**
   * <p>The model type.</p>
   */
  modelType: ModelTypeEnum | string | undefined;

  /**
   * <p>The model version status.</p>
   */
  status: ModelVersionStatus | string | undefined;
}

export namespace UpdateModelVersionStatusRequest {
  export const filterSensitiveLog = (obj: UpdateModelVersionStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelVersionStatusRequest => __isa(o, "UpdateModelVersionStatusRequest");
}

export interface UpdateModelVersionStatusResult {
  __type?: "UpdateModelVersionStatusResult";
}

export namespace UpdateModelVersionStatusResult {
  export const filterSensitiveLog = (obj: UpdateModelVersionStatusResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateModelVersionStatusResult => __isa(o, "UpdateModelVersionStatusResult");
}

export interface UpdateRuleMetadataRequest {
  __type?: "UpdateRuleMetadataRequest";
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
  export const filterSensitiveLog = (obj: UpdateRuleMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRuleMetadataRequest => __isa(o, "UpdateRuleMetadataRequest");
}

export interface UpdateRuleMetadataResult {
  __type?: "UpdateRuleMetadataResult";
}

export namespace UpdateRuleMetadataResult {
  export const filterSensitiveLog = (obj: UpdateRuleMetadataResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRuleMetadataResult => __isa(o, "UpdateRuleMetadataResult");
}

export interface UpdateRuleVersionRequest {
  __type?: "UpdateRuleVersionRequest";
  /**
   * <p>The tags to assign to the rule version.</p>
   */
  tags?: Tag[];

  /**
   * <p>The language.</p>
   */
  language: Language | string | undefined;

  /**
   * <p>The outcomes.</p>
   */
  outcomes: string[] | undefined;

  /**
   * <p>The rule expression.</p>
   */
  expression: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The rule to update.</p>
   */
  rule: Rule | undefined;
}

export namespace UpdateRuleVersionRequest {
  export const filterSensitiveLog = (obj: UpdateRuleVersionRequest): any => ({
    ...obj,
    ...(obj.expression && { expression: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateRuleVersionRequest => __isa(o, "UpdateRuleVersionRequest");
}

export interface UpdateRuleVersionResult {
  __type?: "UpdateRuleVersionResult";
  /**
   * <p>The new rule version that was created.</p>
   */
  rule?: Rule;
}

export namespace UpdateRuleVersionResult {
  export const filterSensitiveLog = (obj: UpdateRuleVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRuleVersionResult => __isa(o, "UpdateRuleVersionResult");
}

export interface UpdateVariableRequest {
  __type?: "UpdateVariableRequest";
  /**
   * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   */
  variableType?: string;

  /**
   * <p>The new description.</p>
   */
  description?: string;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The new default value of the variable.</p>
   */
  defaultValue?: string;
}

export namespace UpdateVariableRequest {
  export const filterSensitiveLog = (obj: UpdateVariableRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVariableRequest => __isa(o, "UpdateVariableRequest");
}

export interface UpdateVariableResult {
  __type?: "UpdateVariableResult";
}

export namespace UpdateVariableResult {
  export const filterSensitiveLog = (obj: UpdateVariableResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVariableResult => __isa(o, "UpdateVariableResult");
}

/**
 * <p>An exception indicating a specified value is not allowed.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}

/**
 * <p>The variable.</p>
 */
export interface Variable {
  __type?: "Variable";
  /**
   * <p>The default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The data type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>The ARN of the variable.</p>
   */
  arn?: string;

  /**
   * <p>The data source of the variable.</p>
   */
  dataSource?: DataSource | string;

  /**
   * <p>The time when variable was last updated.</p>
   */
  lastUpdatedTime?: string;

  /**
   * <p>The name of the variable.</p>
   */
  name?: string;

  /**
   * <p>The variable type of the variable.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT | SHIPPING_ZIP | USERAGENT</code>
   *          </p>
   */
  variableType?: string;

  /**
   * <p>The time when the variable was created.</p>
   */
  createdTime?: string;

  /**
   * <p>The description of the variable. </p>
   */
  description?: string;
}

export namespace Variable {
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Variable => __isa(o, "Variable");
}

/**
 * <p>A variable in the list of variables for the batch create variable request.</p>
 */
export interface VariableEntry {
  __type?: "VariableEntry";
  /**
   * <p>The name of the variable.</p>
   */
  name?: string;

  /**
   * <p>The description of the variable.</p>
   */
  description?: string;

  /**
   * <p>The data source of the variable.</p>
   */
  dataSource?: string;

  /**
   * <p>The type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
   *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT | SHIPPING_ZIP | USERAGENT</code>
   *          </p>
   */
  variableType?: string;

  /**
   * <p>The default value of the variable.</p>
   */
  defaultValue?: string;

  /**
   * <p>The data type of the variable.</p>
   */
  dataType?: string;
}

export namespace VariableEntry {
  export const filterSensitiveLog = (obj: VariableEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VariableEntry => __isa(o, "VariableEntry");
}
