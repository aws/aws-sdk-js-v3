import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An action to be performed when the <code>condition</code> is TRUE.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
   *       the DynamoDB table receives one attribute-value pair in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: SetTimerAction;

  /**
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: ClearTimerAction;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
   *       DynamoDB table receives all attribute-value pairs in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: ResetTimerAction;

  /**
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: SetVariableAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Sends AWS IoT Events input, which passes information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an asset property in AWS IoT SiteWise .</p>
   */
  iotSiteWise?: IotSiteWiseAction;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

/**
 * <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          <p>For parameters that are string data type, you can specify the following options:</p>
 *          <ul>
 *             <li>
 *                <p>Use a string. For example, the <code>timeInSeconds</code> value can be
 *             <code>'1586400675'</code>.</p>
 *             </li>
 *             <li>
 *                <p>Use an expression. For example, the <code>timeInSeconds</code> value can be
 *             <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in
 *           the <i>AWS IoT Events Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export interface AssetPropertyTimestamp {
  __type?: "AssetPropertyTimestamp";
  /**
   * <p>The nanosecond offset converted from <code>timeInSeconds</code>. The valid range is
   *       between 0-999999999. You can also specify an expression.</p>
   */
  offsetInNanos?: string;

  /**
   * <p>The timestamp, in seconds, in the Unix epoch format. The valid range is between
   *       1-31556889864403199. You can also specify an expression.</p>
   */
  timeInSeconds: string | undefined;
}

export namespace AssetPropertyTimestamp {
  export const filterSensitiveLog = (obj: AssetPropertyTimestamp): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetPropertyTimestamp => __isa(o, "AssetPropertyTimestamp");
}

/**
 * <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API
 *       Reference</i>.</p>
 *          <p>For parameters that are string data type, you can specify the following options: </p>
 *          <ul>
 *             <li>
 *                <p>Use a string. For example, the <code>quality</code> value can be
 *           <code>'GOOD'</code>.</p>
 *             </li>
 *             <li>
 *                <p>Use an expression. For example, the <code>quality</code> value can be
 *             <code>$input.TemperatureInput.sensorData.quality</code>
 *                .</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in
 *           the <i>AWS IoT Events Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export interface AssetPropertyValue {
  __type?: "AssetPropertyValue";
  /**
   * <p>The value to send to an asset property.</p>
   */
  value: AssetPropertyVariant | undefined;

  /**
   * <p>The timestamp associated with the asset property value. The default is the current event
   *       time.</p>
   */
  timestamp?: AssetPropertyTimestamp;

  /**
   * <p>The quality of the asset property value. The value must be <code>GOOD</code>,
   *         <code>BAD</code>, or <code>UNCERTAIN</code>. You can also specify an expression.</p>
   */
  quality?: string;
}

export namespace AssetPropertyValue {
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetPropertyValue => __isa(o, "AssetPropertyValue");
}

/**
 * <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a>
 *       in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          <important>
 *             <p>You must specify one of the following value types, depending on the
 *           <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          </important>
 *          <p>For parameters that are string data type, you can specify the following options:</p>
 *          <ul>
 *             <li>
 *                <p>Use a string. For example, the <code>doubleValue</code> value can be
 *             <code>'47.9'</code>.</p>
 *             </li>
 *             <li>
 *                <p>Use an expression. For example, the <code>doubleValue</code> value can be
 *             <code>$input.TemperatureInput.sensorData.temperature</code>.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in
 *           the <i>AWS IoT Events Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export interface AssetPropertyVariant {
  __type?: "AssetPropertyVariant";
  /**
   * <p>The asset property value is a Boolean value that must be <code>TRUE</code> or
   *         <code>FALSE</code>. You can also specify an expression. If you use an expression, the
   *       evaluated result should be a Boolean value.</p>
   */
  booleanValue?: string;

  /**
   * <p>The asset property value is a double. You can also specify an expression. If you use an
   *       expression, the evaluated result should be a double.</p>
   */
  doubleValue?: string;

  /**
   * <p>The asset property value is a string. You can also specify an expression. If you use an
   *       expression, the evaluated result should be a string.</p>
   */
  stringValue?: string;

  /**
   * <p>The asset property value is an integer. You can also specify an expression. If you use an
   *       expression, the evaluated result should be an integer.</p>
   */
  integerValue?: string;
}

export namespace AssetPropertyVariant {
  export const filterSensitiveLog = (obj: AssetPropertyVariant): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetPropertyVariant => __isa(o, "AssetPropertyVariant");
}

/**
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are
 *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
 *       message contains a JSON payload. Those attributes (and their paired values) specified here are
 *       available for use in the <code>condition</code> expressions used by detectors. </p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p>An expression that specifies an attribute-value pair in a JSON structure. Use this to
   *       specify an attribute from the JSON payload that is made available by the input. Inputs are
   *       derived from messages sent to AWS IoT Events (<code>BatchPutMessage</code>). Each such message contains
   *       a JSON payload. The attribute (and its paired value) specified here are available for use in
   *       the <code>condition</code> expressions used by detectors. </p>
   *          <p>Syntax: <code><field-name>.<field-name>...</code>
   *          </p>
   */
  jsonPath: string | undefined;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

/**
 * <p>Information needed to clear the timer.</p>
 */
export interface ClearTimerAction {
  __type?: "ClearTimerAction";
  /**
   * <p>The name of the timer to clear.</p>
   */
  timerName: string | undefined;
}

export namespace ClearTimerAction {
  export const filterSensitiveLog = (obj: ClearTimerAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClearTimerAction => __isa(o, "ClearTimerAction");
}

export interface CreateDetectorModelRequest {
  __type?: "CreateDetectorModelRequest";
  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The input attribute key used to identify a device or system to create a detector (an
   *       instance of the detector model) and then to route each input received to the appropriate
   *       detector (instance). This parameter uses a JSON-path expression in the message payload of each
   *       input to specify the attribute-value pair that is used to identify the device associated with
   *       the input.</p>
   */
  key?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>Information that defines how the detectors operate.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>Metadata that can be used to manage the detector model.</p>
   */
  tags?: Tag[];

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;
}

export namespace CreateDetectorModelRequest {
  export const filterSensitiveLog = (obj: CreateDetectorModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorModelRequest => __isa(o, "CreateDetectorModelRequest");
}

export interface CreateDetectorModelResponse {
  __type?: "CreateDetectorModelResponse";
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace CreateDetectorModelResponse {
  export const filterSensitiveLog = (obj: CreateDetectorModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDetectorModelResponse => __isa(o, "CreateDetectorModelResponse");
}

export interface CreateInputRequest {
  __type?: "CreateInputRequest";
  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The name you want to give to the input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the input.</p>
   */
  tags?: Tag[];

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;
}

export namespace CreateInputRequest {
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInputRequest => __isa(o, "CreateInputRequest");
}

export interface CreateInputResponse {
  __type?: "CreateInputResponse";
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace CreateInputResponse {
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInputResponse => __isa(o, "CreateInputResponse");
}

export interface DeleteDetectorModelRequest {
  __type?: "DeleteDetectorModelRequest";
  /**
   * <p>The name of the detector model to be deleted.</p>
   */
  detectorModelName: string | undefined;
}

export namespace DeleteDetectorModelRequest {
  export const filterSensitiveLog = (obj: DeleteDetectorModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorModelRequest => __isa(o, "DeleteDetectorModelRequest");
}

export interface DeleteDetectorModelResponse {
  __type?: "DeleteDetectorModelResponse";
}

export namespace DeleteDetectorModelResponse {
  export const filterSensitiveLog = (obj: DeleteDetectorModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDetectorModelResponse => __isa(o, "DeleteDetectorModelResponse");
}

export interface DeleteInputRequest {
  __type?: "DeleteInputRequest";
  /**
   * <p>The name of the input to delete.</p>
   */
  inputName: string | undefined;
}

export namespace DeleteInputRequest {
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInputRequest => __isa(o, "DeleteInputRequest");
}

export interface DeleteInputResponse {
  __type?: "DeleteInputResponse";
}

export namespace DeleteInputResponse {
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInputResponse => __isa(o, "DeleteInputResponse");
}

export interface DescribeDetectorModelRequest {
  __type?: "DescribeDetectorModelRequest";
  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;
}

export namespace DescribeDetectorModelRequest {
  export const filterSensitiveLog = (obj: DescribeDetectorModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDetectorModelRequest => __isa(o, "DescribeDetectorModelRequest");
}

export interface DescribeDetectorModelResponse {
  __type?: "DescribeDetectorModelResponse";
  /**
   * <p>Information about the detector model.</p>
   */
  detectorModel?: DetectorModel;
}

export namespace DescribeDetectorModelResponse {
  export const filterSensitiveLog = (obj: DescribeDetectorModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDetectorModelResponse => __isa(o, "DescribeDetectorModelResponse");
}

export interface DescribeInputRequest {
  __type?: "DescribeInputRequest";
  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;
}

export namespace DescribeInputRequest {
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeInputRequest => __isa(o, "DescribeInputRequest");
}

export interface DescribeInputResponse {
  __type?: "DescribeInputResponse";
  /**
   * <p>Information about the input.</p>
   */
  input?: Input;
}

export namespace DescribeInputResponse {
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeInputResponse => __isa(o, "DescribeInputResponse");
}

export interface DescribeLoggingOptionsRequest {
  __type?: "DescribeLoggingOptionsRequest";
}

export namespace DescribeLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeLoggingOptionsRequest => __isa(o, "DescribeLoggingOptionsRequest");
}

export interface DescribeLoggingOptionsResponse {
  __type?: "DescribeLoggingOptionsResponse";
  /**
   * <p>The current settings of the AWS IoT Events logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeLoggingOptionsResponse => __isa(o, "DescribeLoggingOptionsResponse");
}

/**
 * <p>The detector model and the specific detectors (instances) for which the logging level is
 *       given.</p>
 */
export interface DetectorDebugOption {
  __type?: "DetectorDebugOption";
  /**
   * <p>The value of the input attribute key used to create the detector (the instance of the
   *       detector model).</p>
   */
  keyValue?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;
}

export namespace DetectorDebugOption {
  export const filterSensitiveLog = (obj: DetectorDebugOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorDebugOption => __isa(o, "DetectorDebugOption");
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModel {
  __type?: "DetectorModel";
  /**
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;

  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: DetectorModelDefinition;
}

export namespace DetectorModel {
  export const filterSensitiveLog = (obj: DetectorModel): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorModel => __isa(o, "DetectorModel");
}

/**
 * <p>Information about how the detector model is configured.</p>
 */
export interface DetectorModelConfiguration {
  __type?: "DetectorModelConfiguration";
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn?: string;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The ARN of the detector model.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The value used to identify a detector instance. When a device or system sends input, a new
   *       detector instance with a unique key value is created. AWS IoT Events can continue to route input to its
   *       corresponding detector instance based on this identifying information. </p>
   *          <p>This parameter uses a JSON-path expression to select the attribute-value pair in the
   *       message payload that is used for identification. To route the message to the correct detector
   *       instance, the device must send a message payload that contains the same
   *       attribute-value.</p>
   */
  key?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The status of the detector model.</p>
   */
  status?: DetectorModelVersionStatus | string;

  /**
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace DetectorModelConfiguration {
  export const filterSensitiveLog = (obj: DetectorModelConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorModelConfiguration => __isa(o, "DetectorModelConfiguration");
}

/**
 * <p>Information that defines how a detector operates.</p>
 */
export interface DetectorModelDefinition {
  __type?: "DetectorModelDefinition";
  /**
   * <p>The state that is entered at the creation of each detector (instance).</p>
   */
  initialStateName: string | undefined;

  /**
   * <p>Information about the states of the detector.</p>
   */
  states: State[] | undefined;
}

export namespace DetectorModelDefinition {
  export const filterSensitiveLog = (obj: DetectorModelDefinition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorModelDefinition => __isa(o, "DetectorModelDefinition");
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModelSummary {
  __type?: "DetectorModelSummary";
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;
}

export namespace DetectorModelSummary {
  export const filterSensitiveLog = (obj: DetectorModelSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorModelSummary => __isa(o, "DetectorModelSummary");
}

export enum DetectorModelVersionStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  DEPRECATED = "DEPRECATED",
  DRAFT = "DRAFT",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  PAUSED = "PAUSED",
}

/**
 * <p>Information about the detector model version.</p>
 */
export interface DetectorModelVersionSummary {
  __type?: "DetectorModelVersionSummary";
  /**
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the detector model version.</p>
   */
  status?: DetectorModelVersionStatus | string;

  /**
   * <p>The ARN of the detector model version.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The ID of the detector model version.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   */
  roleArn?: string;
}

export namespace DetectorModelVersionSummary {
  export const filterSensitiveLog = (obj: DetectorModelVersionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DetectorModelVersionSummary => __isa(o, "DetectorModelVersionSummary");
}

/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action
 *       payload contains all attribute-value pairs that have the information about the detector model
 *       instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>.
 *       One column of the DynamoDB table receives all attribute-value pairs in the payload that you
 *       specify.</p>
 *          <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name
 *       and the partition key of the DynamoDB table. </p>
 *          <note>
 *             <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The
 *           <code>rangeKeyField</code> value must match the sort key.</p>
 *          </note>
 *          <p></p>
 *          <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates.
 *       These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p>
 *          <p>You can use expressions for parameters that are string data type. For more information,
 *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the
 *         <i>AWS IoT Events Developer Guide</i>.</p>
 *          <note>
 *             <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data
 *         to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded
 *         text. The <code>payloadField</code> is <code><payload-field>_raw</code>.</p>
 *          </note>
 */
export interface DynamoDBAction {
  __type?: "DynamoDBAction";
  /**
   * <p>The value of the range key (also called the sort key).</p>
   */
  rangeKeyValue?: string;

  /**
   * <p>The name of the DynamoDB column that receives the action payload.</p>
   *          <p>If you don't specify this parameter, the name of the DynamoDB column is
   *       <code>payload</code>.</p>
   */
  payloadField?: string;

  /**
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The value of the hash key (also called the partition key).</p>
   */
  hashKeyValue: string | undefined;

  /**
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   */
  payload?: Payload;

  /**
   * <p>The data type for the hash key (also called the partition key). You can specify the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STRING</code> - The hash key is a string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NUMBER</code> - The hash key is a number.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify <code>hashKeyType</code>, the default value is
   *       <code>STRING</code>.</p>
   */
  hashKeyType?: string;

  /**
   * <p>The name of the hash key (also called the partition key).</p>
   */
  hashKeyField: string | undefined;

  /**
   * <p>The data type for the range key (also called the sort key), You can specify the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STRING</code> - The range key is a string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NUMBER</code> - The range key is number.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify <code>rangeKeyField</code>, the default value is
   *       <code>STRING</code>.</p>
   */
  rangeKeyType?: string;

  /**
   * <p>The type of operation to perform. You can specify the following values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INSERT</code> - Insert data as a new item into the DynamoDB table. This item uses
   *           the specified hash key as a partition key. If you specified a range key, the item uses the
   *           range key as a sort key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE</code> - Update an existing item of the DynamoDB table with new data. This
   *           item's partition key must match the specified hash key. If you specified a range key, the
   *           range key must match the item's sort key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Delete an existing item of the DynamoDB table. This item's
   *           partition key must match the specified hash key. If you specified a range key, the range
   *           key must match the item's sort key.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify this parameter, AWS IoT Events triggers the <code>INSERT</code>
   *       operation.</p>
   */
  operation?: string;

  /**
   * <p>The name of the range key (also called the sort key).</p>
   */
  rangeKeyField?: string;
}

export namespace DynamoDBAction {
  export const filterSensitiveLog = (obj: DynamoDBAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DynamoDBAction => __isa(o, "DynamoDBAction");
}

/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action
 *       payload contains all attribute-value pairs that have the information about the detector model
 *       instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A
 *       separate column of the DynamoDB table receives one attribute-value pair in the payload that you
 *       specify.</p>
 *          <important>
 *             <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p>
 *          </important>
 *          <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
 */
export interface DynamoDBv2Action {
  __type?: "DynamoDBv2Action";
  /**
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   */
  payload?: Payload;
}

export namespace DynamoDBv2Action {
  export const filterSensitiveLog = (obj: DynamoDBv2Action): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DynamoDBv2Action => __isa(o, "DynamoDBv2Action");
}

export enum EvaluationMethod {
  BATCH = "BATCH",
  SERIAL = "SERIAL",
}

/**
 * <p>Specifies the <code>actions</code> to be performed when the <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];

  /**
   * <p>Optional. The Boolean expression that, when TRUE, causes the <code>actions</code> to be
   *       performed. If not present, the actions are performed (=TRUE). If the expression result is not
   *       a Boolean value, the actions are not performed (=FALSE).</p>
   */
  condition?: string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface FirehoseAction {
  __type?: "FirehoseAction";
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream where the data is written.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery
   *       stream.</p>
   */
  payload?: Payload;

  /**
   * <p>A character separator that is used to separate records written to the Kinesis Data
   *       Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows
   *       newline), ',' (comma).</p>
   */
  separator?: string;
}

export namespace FirehoseAction {
  export const filterSensitiveLog = (obj: FirehoseAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FirehoseAction => __isa(o, "FirehoseAction");
}

/**
 * <p>Information about the input.</p>
 */
export interface Input {
  __type?: "Input";
  /**
   * <p>Information about the configuration of an input.</p>
   */
  inputConfiguration?: InputConfiguration;

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition?: InputDefinition;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Input => __isa(o, "Input");
}

/**
 * <p>Information about the configuration of an input.</p>
 */
export interface InputConfiguration {
  __type?: "InputConfiguration";
  /**
   * <p>The ARN of the input.</p>
   */
  inputArn: string | undefined;

  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The status of the input.</p>
   */
  status: InputStatus | string | undefined;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The time the input was created.</p>
   */
  creationTime: Date | undefined;
}

export namespace InputConfiguration {
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputConfiguration => __isa(o, "InputConfiguration");
}

/**
 * <p>The definition of the input.</p>
 */
export interface InputDefinition {
  __type?: "InputDefinition";
  /**
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are
   *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
   *       message contains a JSON payload, and those attributes (and their paired values) specified here
   *       are available for use in the <code>condition</code> expressions used by detectors that monitor
   *       this input. </p>
   */
  attributes: Attribute[] | undefined;
}

export namespace InputDefinition {
  export const filterSensitiveLog = (obj: InputDefinition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputDefinition => __isa(o, "InputDefinition");
}

export enum InputStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>Information about the input.</p>
 */
export interface InputSummary {
  __type?: "InputSummary";
  /**
   * <p>The ARN of the input.</p>
   */
  inputArn?: string;

  /**
   * <p>The time the input was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The name of the input.</p>
   */
  inputName?: string;

  /**
   * <p>The status of the input.</p>
   */
  status?: InputStatus | string;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;
}

export namespace InputSummary {
  export const filterSensitiveLog = (obj: InputSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputSummary => __isa(o, "InputSummary");
}

/**
 * <p>An internal failure occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalFailureException => __isa(o, "InternalFailureException");
}

/**
 * <p>The request was invalid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

/**
 * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface IotEventsAction {
  __type?: "IotEventsAction";
  /**
   * <p>You can configure the action payload when you send a message to an AWS IoT Events input.</p>
   */
  payload?: Payload;

  /**
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   */
  inputName: string | undefined;
}

export namespace IotEventsAction {
  export const filterSensitiveLog = (obj: IotEventsAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IotEventsAction => __isa(o, "IotEventsAction");
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to a specified asset property in AWS IoT SiteWise.</p>
 *          <important>
 *             <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and
 *           <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p>
 *          </important>
 *          <p>For parameters that are string data type, you can specify the following options: </p>
 *          <ul>
 *             <li>
 *                <p>Use a string. For example, the <code>propertyAlias</code> value can be
 *             <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p>
 *             </li>
 *             <li>
 *                <p>Use an expression. For example, the <code>propertyAlias</code> value can be
 *             <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in
 *           the <i>AWS IoT Events Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 */
export interface IotSiteWiseAction {
  __type?: "IotSiteWiseAction";
  /**
   * <p>The ID of the asset property. You can specify an expression.</p>
   */
  propertyId?: string;

  /**
   * <p>A unique identifier for this entry. You can use the entry ID to track which data entry
   *       causes an error in case of failure. The default is a new unique identifier. You can also
   *       specify an expression.</p>
   */
  entryId?: string;

  /**
   * <p>The value to send to the asset property. This value contains timestamp, quality, and value
   *       (TQV) information. </p>
   */
  propertyValue: AssetPropertyValue | undefined;

  /**
   * <p>The alias of the asset property. You can also specify an expression.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset that has the specified property. You can specify an expression.</p>
   */
  assetId?: string;
}

export namespace IotSiteWiseAction {
  export const filterSensitiveLog = (obj: IotSiteWiseAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IotSiteWiseAction => __isa(o, "IotSiteWiseAction");
}

/**
 * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
 */
export interface IotTopicPublishAction {
  __type?: "IotTopicPublishAction";
  /**
   * <p>You can configure the action payload when you publish a message to an AWS IoT Core
   *       topic.</p>
   */
  payload?: Payload;

  /**
   * <p>The MQTT topic of the message. You can use a string expression that includes variables
   *         (<code>$variable.<variable-name></code>) and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the topic string.</p>
   */
  mqttTopic: string | undefined;
}

export namespace IotTopicPublishAction {
  export const filterSensitiveLog = (obj: IotTopicPublishAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IotTopicPublishAction => __isa(o, "IotTopicPublishAction");
}

/**
 * <p>Calls a Lambda function, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface LambdaAction {
  __type?: "LambdaAction";
  /**
   * <p>You can configure the action payload when you send a message to a Lambda function.</p>
   */
  payload?: Payload;

  /**
   * <p>The ARN of the Lambda function that is executed.</p>
   */
  functionArn: string | undefined;
}

export namespace LambdaAction {
  export const filterSensitiveLog = (obj: LambdaAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LambdaAction => __isa(o, "LambdaAction");
}

/**
 * <p>A limit was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListDetectorModelsRequest {
  __type?: "ListDetectorModelsRequest";
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorModelsRequest {
  export const filterSensitiveLog = (obj: ListDetectorModelsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorModelsRequest => __isa(o, "ListDetectorModelsRequest");
}

export interface ListDetectorModelsResponse {
  __type?: "ListDetectorModelsResponse";
  /**
   * <p>Summary information about the detector models.</p>
   */
  detectorModelSummaries?: DetectorModelSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no
   *       additional results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelsResponse {
  export const filterSensitiveLog = (obj: ListDetectorModelsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorModelsResponse => __isa(o, "ListDetectorModelsResponse");
}

export interface ListDetectorModelVersionsRequest {
  __type?: "ListDetectorModelVersionsRequest";
  /**
   * <p>The name of the detector model whose versions are returned.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorModelVersionsRequest {
  export const filterSensitiveLog = (obj: ListDetectorModelVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorModelVersionsRequest => __isa(o, "ListDetectorModelVersionsRequest");
}

export interface ListDetectorModelVersionsResponse {
  __type?: "ListDetectorModelVersionsResponse";
  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no
   *       additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>Summary information about the detector model versions.</p>
   */
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];
}

export namespace ListDetectorModelVersionsResponse {
  export const filterSensitiveLog = (obj: ListDetectorModelVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDetectorModelVersionsResponse => __isa(o, "ListDetectorModelVersionsResponse");
}

export interface ListInputsRequest {
  __type?: "ListInputsRequest";
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListInputsRequest {
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInputsRequest => __isa(o, "ListInputsRequest");
}

export interface ListInputsResponse {
  __type?: "ListInputsResponse";
  /**
   * <p>Summary information about the inputs.</p>
   */
  inputSummaries?: InputSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no
   *       additional results.</p>
   */
  nextToken?: string;
}

export namespace ListInputsResponse {
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInputsResponse => __isa(o, "ListInputsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export enum LoggingLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
}

/**
 * <p>The values of the AWS IoT Events logging options.</p>
 */
export interface LoggingOptions {
  __type?: "LoggingOptions";
  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The logging level.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * <p>Information that identifies those detector models and their detectors (instances) for
   *       which the logging level is given.</p>
   */
  detectorDebugOptions?: DetectorDebugOption[];

  /**
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   */
  enabled: boolean | undefined;
}

export namespace LoggingOptions {
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoggingOptions => __isa(o, "LoggingOptions");
}

/**
 * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
 *       is TRUE.</p>
 */
export interface OnEnterLifecycle {
  __type?: "OnEnterLifecycle";
  /**
   * <p>Specifies the actions that are performed when the state is entered and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

export namespace OnEnterLifecycle {
  export const filterSensitiveLog = (obj: OnEnterLifecycle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OnEnterLifecycle => __isa(o, "OnEnterLifecycle");
}

/**
 * <p>When exiting this state, perform these <code>actions</code> if the specified
 *         <code>condition</code> is <code>TRUE</code>.</p>
 */
export interface OnExitLifecycle {
  __type?: "OnExitLifecycle";
  /**
   * <p>Specifies the <code>actions</code> that are performed when the state is exited and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

export namespace OnExitLifecycle {
  export const filterSensitiveLog = (obj: OnExitLifecycle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OnExitLifecycle => __isa(o, "OnExitLifecycle");
}

/**
 * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
 */
export interface OnInputLifecycle {
  __type?: "OnInputLifecycle";
  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>condition</code>
   *       evaluates to TRUE.</p>
   */
  transitionEvents?: TransitionEvent[];

  /**
   * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
   */
  events?: Event[];
}

export namespace OnInputLifecycle {
  export const filterSensitiveLog = (obj: OnInputLifecycle): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OnInputLifecycle => __isa(o, "OnInputLifecycle");
}

/**
 * <p>Information needed to configure the payload.</p>
 *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
 *       contains all attribute-value pairs that have the information about the detector model instance
 *       and the event triggered the action. To configure the action payload, you can use
 *         <code>contentExpression</code>.</p>
 */
export interface Payload {
  __type?: "Payload";
  /**
   * <p>The content of the payload. You can use a string expression that includes quoted strings
   *         (<code>'<string>'</code>), variables (<code>$variable.<variable-name></code>),
   *       input values (<code>$input.<input-name>.<path-to-datum></code>), string
   *       concatenations, and quoted strings that contain <code>${}</code> as the content. The
   *       recommended maximum size of a content expression is 1 KB.</p>
   */
  contentExpression: string | undefined;

  /**
   * <p>The value of the payload type can be either <code>STRING</code> or
   *       <code>JSON</code>.</p>
   */
  type: PayloadType | string | undefined;
}

export namespace Payload {
  export const filterSensitiveLog = (obj: Payload): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Payload => __isa(o, "Payload");
}

export enum PayloadType {
  JSON = "JSON",
  STRING = "STRING",
}

export interface PutLoggingOptionsRequest {
  __type?: "PutLoggingOptionsRequest";
  /**
   * <p>The new values of the AWS IoT Events logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutLoggingOptionsRequest => __isa(o, "PutLoggingOptionsRequest");
}

/**
 * <p>Information required to reset the timer. The timer is reset to the previously evaluated
 *       result of the duration. The duration expression isn't reevaluated when you reset the
 *       timer.</p>
 */
export interface ResetTimerAction {
  __type?: "ResetTimerAction";
  /**
   * <p>The name of the timer to reset.</p>
   */
  timerName: string | undefined;
}

export namespace ResetTimerAction {
  export const filterSensitiveLog = (obj: ResetTimerAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResetTimerAction => __isa(o, "ResetTimerAction");
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException => __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>The resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceInUseException => __isa(o, "ResourceInUseException");
}

/**
 * <p>The resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

/**
 * <p>Information needed to set the timer.</p>
 */
export interface SetTimerAction {
  __type?: "SetTimerAction";
  /**
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure
   *       accuracy. The maximum value is 31622400 seconds. </p>
   */
  seconds?: number;

  /**
   * <p>The name of the timer.</p>
   */
  timerName: string | undefined;

  /**
   * <p>The duration of the timer, in seconds. You can use a string expression that includes
   *       numbers, variables (<code>$variable.<variable-name></code>), and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the duration. The range of
   *       the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds.
   *       The evaluated result of the duration is rounded down to the nearest whole number. </p>
   */
  durationExpression?: string;
}

export namespace SetTimerAction {
  export const filterSensitiveLog = (obj: SetTimerAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SetTimerAction => __isa(o, "SetTimerAction");
}

/**
 * <p>Information about the variable and its new value.</p>
 */
export interface SetVariableAction {
  __type?: "SetVariableAction";
  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;

  /**
   * <p>The name of the variable.</p>
   */
  variableName: string | undefined;
}

export namespace SetVariableAction {
  export const filterSensitiveLog = (obj: SetVariableAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SetVariableAction => __isa(o, "SetVariableAction");
}

/**
 * <p>Information required to publish the Amazon SNS message.</p>
 */
export interface SNSTopicPublishAction {
  __type?: "SNSTopicPublishAction";
  /**
   * <p>You can configure the action payload when you send a message as an Amazon SNS push
   *       notification.</p>
   */
  payload?: Payload;

  /**
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   */
  targetArn: string | undefined;
}

export namespace SNSTopicPublishAction {
  export const filterSensitiveLog = (obj: SNSTopicPublishAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SNSTopicPublishAction => __isa(o, "SNSTopicPublishAction");
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  __type?: "SqsAction";
  /**
   * <p>You can configure the action payload when you send a message to an Amazon SQS
   *       queue.</p>
   */
  payload?: Payload;

  /**
   * <p>Set this to TRUE if you want the data to be base-64 encoded before it is written to the
   *       queue. Otherwise, set this to FALSE.</p>
   */
  useBase64?: boolean;

  /**
   * <p>The URL of the SQS queue where the data is written.</p>
   */
  queueUrl: string | undefined;
}

export namespace SqsAction {
  export const filterSensitiveLog = (obj: SqsAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SqsAction => __isa(o, "SqsAction");
}

/**
 * <p>Information that defines a state of a detector.</p>
 */
export interface State {
  __type?: "State";
  /**
   * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
   *       is TRUE.</p>
   */
  onEnter?: OnEnterLifecycle;

  /**
   * <p>When an input is received and the <code>condition</code> is TRUE, perform the specified
   *         <code>actions</code>.</p>
   */
  onInput?: OnInputLifecycle;

  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * <p>When exiting this state, perform these <code>actions</code> if the specified
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  onExit?: OnExitLifecycle;
}

export namespace State {
  export const filterSensitiveLog = (obj: State): any => ({
    ...obj,
  });
  export const isa = (o: any): o is State => __isa(o, "State");
}

/**
 * <p>Metadata that can be used to manage the resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's value.</p>
   */
  value: string | undefined;

  /**
   * <p>The tag's key.</p>
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
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>The request could not be completed due to throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

/**
 * <p>Specifies the actions performed and the next state entered when a <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface TransitionEvent {
  __type?: "TransitionEvent";
  /**
   * <p>Required. A Boolean expression that when TRUE causes the actions to be performed and the
   *         <code>nextState</code> to be entered.</p>
   */
  condition: string | undefined;

  /**
   * <p>The name of the transition event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];

  /**
   * <p>The next state to enter.</p>
   */
  nextState: string | undefined;
}

export namespace TransitionEvent {
  export const filterSensitiveLog = (obj: TransitionEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TransitionEvent => __isa(o, "TransitionEvent");
}

/**
 * <p>The requested operation is not supported.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedOperationException => __isa(o, "UnsupportedOperationException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateDetectorModelRequest {
  __type?: "UpdateDetectorModelRequest";
  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>The name of the detector model that is updated.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;
}

export namespace UpdateDetectorModelRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorModelRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorModelRequest => __isa(o, "UpdateDetectorModelRequest");
}

export interface UpdateDetectorModelResponse {
  __type?: "UpdateDetectorModelResponse";
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace UpdateDetectorModelResponse {
  export const filterSensitiveLog = (obj: UpdateDetectorModelResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDetectorModelResponse => __isa(o, "UpdateDetectorModelResponse");
}

export interface UpdateInputRequest {
  __type?: "UpdateInputRequest";
  /**
   * <p>The name of the input you want to update.</p>
   */
  inputName: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;
}

export namespace UpdateInputRequest {
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInputRequest => __isa(o, "UpdateInputRequest");
}

export interface UpdateInputResponse {
  __type?: "UpdateInputResponse";
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace UpdateInputResponse {
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInputResponse => __isa(o, "UpdateInputResponse");
}
