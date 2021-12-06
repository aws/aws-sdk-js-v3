import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Specifies whether to get notified for alarm state changes.</p>
 */
export interface AcknowledgeFlow {
  /**
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>TRUE</code>, you
   *       receive a notification when the alarm state changes. You must choose to acknowledge the
   *       notification before the alarm state can return to <code>NORMAL</code>. If <code>FALSE</code>,
   *       you won't receive notifications. The alarm automatically changes to the <code>NORMAL</code>
   *       state when the input property value returns to the specified range.</p>
   */
  enabled: boolean | undefined;
}

export namespace AcknowledgeFlow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcknowledgeFlow): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to clear the timer.</p>
 */
export interface ClearTimerAction {
  /**
   * <p>The name of the timer to clear.</p>
   */
  timerName: string | undefined;
}

export namespace ClearTimerAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClearTimerAction): any => ({
    ...obj,
  });
}

export enum PayloadType {
  JSON = "JSON",
  STRING = "STRING",
}

/**
 * <p>Information needed to configure the payload.</p>
 *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
 *       contains all attribute-value pairs that have the information about the detector model instance
 *       and the event triggered the action. To configure the action payload, you can use
 *         <code>contentExpression</code>.</p>
 */
export interface Payload {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Payload): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action
 *       payload contains all the information about the detector model instance and the event that
 *       triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
 *       DynamoDB table receives all attribute-value pairs in the payload that you specify.</p>
 *          <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions
 *       accept literals, operators, functions, references, and substitution templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or input values. For example, the
 *           value for the <code>hashKeyField</code> parameter can be
 *             <code>$input.GreenhouseInput.name</code>.</p>
 *             </li>
 *             <li>
 *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a
 *           substitution template. </p>
 *                <p>
 *                   <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>For a string concatenation, you must use <code>+</code>. A string concatenation can
 *           also contain a combination of literals, operators, functions, references, and substitution
 *           templates.</p>
 *                <p>In the following example, the value for the <code>tableName</code> parameter uses a
 *           string concatenation. </p>
 *                <p>
 *                   <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 *          <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to
 *       the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text.
 *       The value for the <code>payloadField</code> parameter is
 *         <code><payload-field>_raw</code>.</p>
 */
export interface DynamoDBAction {
  /**
   * <p>The data type for the hash key (also called the partition key). You can specify the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>'STRING'</code> - The hash key is a string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'NUMBER'</code> - The hash key is a number.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify <code>hashKeyType</code>, the default value is
   *       <code>'STRING'</code>.</p>
   */
  hashKeyType?: string;

  /**
   * <p>The name of the hash key (also called the partition key). The <code>hashKeyField</code>
   *       value must match the partition key of the target DynamoDB table.</p>
   */
  hashKeyField: string | undefined;

  /**
   * <p>The value of the hash key (also called the partition key).</p>
   */
  hashKeyValue: string | undefined;

  /**
   * <p>The data type for the range key (also called the sort key), You can specify the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>'STRING'</code> - The range key is a string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'NUMBER'</code> - The range key is number.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify <code>rangeKeyField</code>, the default value is
   *         <code>'STRING'</code>.</p>
   */
  rangeKeyType?: string;

  /**
   * <p>The name of the range key (also called the sort key). The <code>rangeKeyField</code> value
   *       must match the sort key of the target DynamoDB table. </p>
   */
  rangeKeyField?: string;

  /**
   * <p>The value of the range key (also called the sort key).</p>
   */
  rangeKeyValue?: string;

  /**
   * <p>The type of operation to perform. You can specify the following values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>'INSERT'</code> - Insert data as a new item into the DynamoDB table. This item uses
   *           the specified hash key as a partition key. If you specified a range key, the item uses the
   *           range key as a sort key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'UPDATE'</code> - Update an existing item of the DynamoDB table with new data. This
   *           item's partition key must match the specified hash key. If you specified a range key, the
   *           range key must match the item's sort key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'DELETE'</code> - Delete an existing item of the DynamoDB table. This item's
   *           partition key must match the specified hash key. If you specified a range key, the range
   *           key must match the item's sort key.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify this parameter, AWS IoT Events triggers the <code>'INSERT'</code>
   *       operation.</p>
   */
  operation?: string;

  /**
   * <p>The name of the DynamoDB column that receives the action payload.</p>
   *          <p>If you don't specify this parameter, the name of the DynamoDB column is
   *       <code>payload</code>.</p>
   */
  payloadField?: string;

  /**
   * <p>The name of the DynamoDB table. The <code>tableName</code> value must match the table name of
   *       the target DynamoDB table. </p>
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

export namespace DynamoDBAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBAction): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action
 *       payload contains all the information about the detector model instance and the event that
 *       triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
 *       the DynamoDB table receives one attribute-value pair in the payload that you specify.</p>
 *          <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions
 *       accept literals, operators, functions, references, and substitution templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>tableName</code> parameter can be
 *           <code>'GreenhouseTemperatureTable'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or input values. For example, the
 *           value for the <code>tableName</code> parameter can be
 *           <code>$variable.ddbtableName</code>.</p>
 *             </li>
 *             <li>
 *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>contentExpression</code> parameter
 *           in <code>Payload</code> uses a substitution template. </p>
 *                <p>
 *                   <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\":
 *             \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>For a string concatenation, you must use <code>+</code>. A string concatenation can
 *           also contain a combination of literals, operators, functions, references, and substitution
 *           templates.</p>
 *                <p>In the following example, the value for the <code>tableName</code> parameter uses a
 *           string concatenation. </p>
 *                <p>
 *                   <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 *          <p>The value for the <code>type</code> parameter in <code>Payload</code> must be
 *         <code>JSON</code>.</p>
 */
export interface DynamoDBv2Action {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBv2Action): any => ({
    ...obj,
  });
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface FirehoseAction {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream where the data is written.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>A character separator that is used to separate records written to the Kinesis Data
   *       Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows
   *       newline), ',' (comma).</p>
   */
  separator?: string;

  /**
   * <p>You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery
   *       stream.</p>
   */
  payload?: Payload;
}

export namespace FirehoseAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirehoseAction): any => ({
    ...obj,
  });
}

/**
 * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface IotEventsAction {
  /**
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   */
  inputName: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to an AWS IoT Events input.</p>
   */
  payload?: Payload;
}

export namespace IotEventsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotEventsAction): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          <p>You must use expressions for all parameters in <code>AssetPropertyTimestamp</code>. The
 *       expressions accept literals, operators, functions, references, and substitution
 *       templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>timeInSeconds</code> parameter can be <code>'1586400675'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or input values. For example, the
 *           value for the <code>offsetInNanos</code> parameter can be
 *           <code>$variable.time</code>.</p>
 *             </li>
 *             <li>
 *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses
 *           a substitution template.</p>
 *                <p>
 *                   <code>'${$input.TemperatureInput.sensorData.timestamp / 1000}'</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 */
export interface AssetPropertyTimestamp {
  /**
   * <p>The timestamp, in seconds, in the Unix epoch format. The valid range is between
   *       1-31556889864403199.</p>
   */
  timeInSeconds: string | undefined;

  /**
   * <p>The nanosecond offset converted from <code>timeInSeconds</code>. The valid range is
   *       between 0-999999999.</p>
   */
  offsetInNanos?: string;
}

export namespace AssetPropertyTimestamp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyTimestamp): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a>
 *       in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The
 *       expressions accept literals, operators, functions, references, and substitution
 *       templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>integerValue</code> parameter can be <code>'100'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or parameters. For example, the
 *           value for the <code>booleanValue</code> parameter can be
 *           <code>$variable.offline</code>.</p>
 *             </li>
 *             <li>
 *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates. </p>
 *                <p>In the following example, the value for the <code>doubleValue</code> parameter uses a
 *           substitution template. </p>
 *                <p>
 *                   <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 *          <p>You must specify one of the following value types, depending on the <code>dataType</code>
 *       of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the
 *         <i>AWS IoT SiteWise API Reference</i>.</p>
 */
export interface AssetPropertyVariant {
  /**
   * <p>The asset property value is a string. You must use an expression, and the evaluated result
   *       should be a string.</p>
   */
  stringValue?: string;

  /**
   * <p>The asset property value is an integer. You must use an expression, and the evaluated
   *       result should be an integer.</p>
   */
  integerValue?: string;

  /**
   * <p>The asset property value is a double. You must use an expression, and the evaluated result
   *       should be a double.</p>
   */
  doubleValue?: string;

  /**
   * <p>The asset property value is a Boolean value that must be <code>'TRUE'</code> or
   *         <code>'FALSE'</code>. You must use an expression, and the evaluated result should be a
   *       Boolean value.</p>
   */
  booleanValue?: string;
}

export namespace AssetPropertyVariant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyVariant): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
 *          <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The
 *       expressions accept literals, operators, functions, references, and substitution
 *       templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or input values. For example, the
 *           value for the <code>quality</code> parameter can be
 *             <code>$input.TemperatureInput.sensorData.quality</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 */
export interface AssetPropertyValue {
  /**
   * <p>The value to send to an asset property.</p>
   */
  value?: AssetPropertyVariant;

  /**
   * <p>The timestamp associated with the asset property value. The default is the current event
   *       time.</p>
   */
  timestamp?: AssetPropertyTimestamp;

  /**
   * <p>The quality of the asset property value. The value must be <code>'GOOD'</code>,
   *         <code>'BAD'</code>, or <code>'UNCERTAIN'</code>.</p>
   */
  quality?: string;
}

export namespace AssetPropertyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
    ...obj,
  });
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to a specified asset property in AWS IoT SiteWise.</p>
 *          <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The
 *       expressions accept literals, operators, functions, references, and substitutions
 *       templates.</p>
 *          <p class="title">
 *             <b>Examples</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For literal values, the expressions must contain single quotes. For example, the value
 *           for the <code>propertyAlias</code> parameter can be
 *             <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p>
 *             </li>
 *             <li>
 *                <p>For references, you must specify either variables or input values. For example, the
 *           value for the <code>assetId</code> parameter can be
 *             <code>$input.TurbineInput.assetId1</code>.</p>
 *             </li>
 *             <li>
 *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>propertyAlias</code> parameter uses
 *           a substitution template. </p>
 *                <p>
 *                   <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/
 *             ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and
 *         <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 */
export interface IotSiteWiseAction {
  /**
   * <p>A unique identifier for this entry. You can use the entry ID to track which data entry
   *       causes an error in case of failure. The default is a new unique identifier.</p>
   */
  entryId?: string;

  /**
   * <p>The ID of the asset that has the specified property.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias of the asset property.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The value to send to the asset property. This value contains timestamp, quality, and value
   *       (TQV) information. </p>
   */
  propertyValue?: AssetPropertyValue;
}

export namespace IotSiteWiseAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
 */
export interface IotTopicPublishAction {
  /**
   * <p>The MQTT topic of the message. You can use a string expression that includes variables
   *         (<code>$variable.<variable-name></code>) and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the topic string.</p>
   */
  mqttTopic: string | undefined;

  /**
   * <p>You can configure the action payload when you publish a message to an AWS IoT Core
   *       topic.</p>
   */
  payload?: Payload;
}

export namespace IotTopicPublishAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotTopicPublishAction): any => ({
    ...obj,
  });
}

/**
 * <p>Calls a Lambda function, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface LambdaAction {
  /**
   * <p>The ARN of the Lambda function that is executed.</p>
   */
  functionArn: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to a Lambda function.</p>
   */
  payload?: Payload;
}

export namespace LambdaAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information required to reset the timer. The timer is reset to the previously evaluated
 *       result of the duration. The duration expression isn't reevaluated when you reset the
 *       timer.</p>
 */
export interface ResetTimerAction {
  /**
   * <p>The name of the timer to reset.</p>
   */
  timerName: string | undefined;
}

export namespace ResetTimerAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetTimerAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to set the timer.</p>
 */
export interface SetTimerAction {
  /**
   * <p>The name of the timer.</p>
   */
  timerName: string | undefined;

  /**
   * @deprecated
   *
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure
   *       accuracy. The maximum value is 31622400 seconds. </p>
   */
  seconds?: number;

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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTimerAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the variable and its new value.</p>
 */
export interface SetVariableAction {
  /**
   * <p>The name of the variable.</p>
   */
  variableName: string | undefined;

  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;
}

export namespace SetVariableAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetVariableAction): any => ({
    ...obj,
  });
}

/**
 * <p>Information required to publish the Amazon SNS message.</p>
 */
export interface SNSTopicPublishAction {
  /**
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   */
  targetArn: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message as an Amazon SNS push
   *       notification.</p>
   */
  payload?: Payload;
}

export namespace SNSTopicPublishAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSTopicPublishAction): any => ({
    ...obj,
  });
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  /**
   * <p>The URL of the SQS queue where the data is written.</p>
   */
  queueUrl: string | undefined;

  /**
   * <p>Set this to TRUE if you want the data to be base-64 encoded before it is written to the
   *       queue. Otherwise, set this to FALSE.</p>
   */
  useBase64?: boolean;

  /**
   * <p>You can configure the action payload when you send a message to an Amazon SQS
   *       queue.</p>
   */
  payload?: Payload;
}

export namespace SqsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqsAction): any => ({
    ...obj,
  });
}

/**
 * <p>An action to be performed when the <code>condition</code> is TRUE.</p>
 */
export interface Action {
  /**
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: SetVariableAction;

  /**
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: SetTimerAction;

  /**
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: ClearTimerAction;

  /**
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: ResetTimerAction;

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
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
   *       DynamoDB table receives all attribute-value pairs in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
   *       the DynamoDB table receives one attribute-value pair in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an asset property in AWS IoT SiteWise .</p>
   */
  iotSiteWise?: IotSiteWiseAction;
}

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one of the following actions to receive notifications when the alarm state
 *       changes.</p>
 */
export interface AlarmAction {
  /**
   * <p>Information required to publish the Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action
   *       payload contains all the information about the detector model instance and the event that
   *       triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
   *       DynamoDB table receives all attribute-value pairs in the payload that you specify.</p>
   *          <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions
   *       accept literals, operators, functions, references, and substitution templates.</p>
   *          <p class="title">
   *             <b>Examples</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For literal values, the expressions must contain single quotes. For example, the value
   *           for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p>
   *             </li>
   *             <li>
   *                <p>For references, you must specify either variables or input values. For example, the
   *           value for the <code>hashKeyField</code> parameter can be
   *             <code>$input.GreenhouseInput.name</code>.</p>
   *             </li>
   *             <li>
   *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a
   *           substitution template. </p>
   *                <p>
   *                   <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a string concatenation, you must use <code>+</code>. A string concatenation can
   *           also contain a combination of literals, operators, functions, references, and substitution
   *           templates.</p>
   *                <p>In the following example, the value for the <code>tableName</code> parameter uses a
   *           string concatenation. </p>
   *                <p>
   *                   <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information,
   *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
   *         in the <i>AWS IoT Events Developer Guide</i>.</p>
   *          <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to
   *       the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text.
   *       The value for the <code>payloadField</code> parameter is
   *         <code><payload-field>_raw</code>.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action
   *       payload contains all the information about the detector model instance and the event that
   *       triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
   *       the DynamoDB table receives one attribute-value pair in the payload that you specify.</p>
   *          <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions
   *       accept literals, operators, functions, references, and substitution templates.</p>
   *          <p class="title">
   *             <b>Examples</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For literal values, the expressions must contain single quotes. For example, the value
   *           for the <code>tableName</code> parameter can be
   *           <code>'GreenhouseTemperatureTable'</code>.</p>
   *             </li>
   *             <li>
   *                <p>For references, you must specify either variables or input values. For example, the
   *           value for the <code>tableName</code> parameter can be
   *           <code>$variable.ddbtableName</code>.</p>
   *             </li>
   *             <li>
   *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>contentExpression</code> parameter
   *           in <code>Payload</code> uses a substitution template. </p>
   *                <p>
   *                   <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\":
   *             \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For a string concatenation, you must use <code>+</code>. A string concatenation can
   *           also contain a combination of literals, operators, functions, references, and substitution
   *           templates.</p>
   *                <p>In the following example, the value for the <code>tableName</code> parameter uses a
   *           string concatenation. </p>
   *                <p>
   *                   <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information,
   *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
   *         in the <i>AWS IoT Events Developer Guide</i>.</p>
   *          <p>The value for the <code>type</code> parameter in <code>Payload</code> must be
   *         <code>JSON</code>.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to a specified asset property in AWS IoT SiteWise.</p>
   *          <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The
   *       expressions accept literals, operators, functions, references, and substitutions
   *       templates.</p>
   *          <p class="title">
   *             <b>Examples</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For literal values, the expressions must contain single quotes. For example, the value
   *           for the <code>propertyAlias</code> parameter can be
   *             <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p>
   *             </li>
   *             <li>
   *                <p>For references, you must specify either variables or input values. For example, the
   *           value for the <code>assetId</code> parameter can be
   *             <code>$input.TurbineInput.assetId1</code>.</p>
   *             </li>
   *             <li>
   *                <p>For a substitution template, you must use <code>${}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>propertyAlias</code> parameter uses
   *           a substitution template. </p>
   *                <p>
   *                   <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/
   *             ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and
   *         <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p>
   *          <p>For more information,
   *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
   *         in the <i>AWS IoT Events Developer Guide</i>.</p>
   */
  iotSiteWise?: IotSiteWiseAction;
}

export namespace AlarmAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmAction): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default alarm state.
 * The configuration applies to all alarms that were created based on this alarm model.</p>
 */
export interface InitializationConfiguration {
  /**
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>FALSE</code>, all
   *       alarm instances created based on the alarm model are activated. The default value is
   *         <code>TRUE</code>.</p>
   */
  disabledOnInitialization: boolean | undefined;
}

export namespace InitializationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitializationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of alarm state changes.</p>
 */
export interface AlarmCapabilities {
  /**
   * <p>Specifies the default alarm state.
   * The configuration applies to all alarms that were created based on this alarm model.</p>
   */
  initializationConfiguration?: InitializationConfiguration;

  /**
   * <p>Specifies whether to get notified for alarm state changes.</p>
   */
  acknowledgeFlow?: AcknowledgeFlow;
}

export namespace AlarmCapabilities {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmCapabilities): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about one or more alarm actions.</p>
 */
export interface AlarmEventActions {
  /**
   * <p>Specifies one or more supported actions to receive notifications when the alarm state
   *       changes.</p>
   */
  alarmActions?: AlarmAction[];
}

export namespace AlarmEventActions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmEventActions): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of an alarm model.</p>
 */
export interface AlarmModelSummary {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;
}

export namespace AlarmModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmModelSummary): any => ({
    ...obj,
  });
}

export enum AlarmModelVersionStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Contains a summary of an alarm model version.</p>
 */
export interface AlarmModelVersionSummary {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the alarm model. The status can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model.
   *         Activating an alarm model can take up to a few minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data.
   * 	  Check your alarm model information and update the alarm model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information
   *         and try again.</p>
   *             </li>
   *          </ul>
   */
  status?: AlarmModelVersionStatus | string;

  /**
   * <p>
   *       Contains information about the status of the alarm model version.
   *     </p>
   */
  statusMessage?: string;
}

export namespace AlarmModelVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmModelVersionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an AWS Lambda function to manage alarm notifications.
 * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
 */
export interface NotificationTargetActions {
  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambdaAction?: LambdaAction;
}

export namespace NotificationTargetActions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationTargetActions): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the subject and message of an email.</p>
 */
export interface EmailContent {
  /**
   * <p>The subject of the email.</p>
   */
  subject?: string;

  /**
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   */
  additionalMessage?: string;
}

export namespace EmailContent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailContent): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about your identity source in AWS Single Sign-On. For more information, see
 *       the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On
 *         User Guide</a>.</p>
 */
export interface SSOIdentity {
  /**
   * <p>The ID of the AWS SSO identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  userId?: string;
}

export namespace SSOIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSOIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>The information that identifies the recipient.</p>
 */
export interface RecipientDetail {
  /**
   * <p>The AWS Single Sign-On (AWS SSO) authentication information.</p>
   */
  ssoIdentity?: SSOIdentity;
}

export namespace RecipientDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipientDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the information of one or more recipients who receive the emails.</p>
 *          <important>
 *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
 *          </important>
 */
export interface EmailRecipients {
  /**
   * <p>Specifies one or more recipients who receive the email.</p>
   */
  to?: RecipientDetail[];
}

export namespace EmailRecipients {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailRecipients): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of email notifications.</p>
 */
export interface EmailConfiguration {
  /**
   * <p>The email address that sends emails.</p>
   *          <important>
   *             <p>If you use the AWS IoT Events managed AWS Lambda function to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify
   *           the email address that sends emails in Amazon SES</a>.</p>
   *          </important>
   */
  from: string | undefined;

  /**
   * <p>Contains the subject and message of an email.</p>
   */
  content?: EmailContent;

  /**
   * <p>Contains the information of one or more recipients who receive the emails.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
   *          </important>
   */
  recipients: EmailRecipients | undefined;
}

export namespace EmailConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of SMS notifications.</p>
 */
export interface SMSConfiguration {
  /**
   * <p>The sender ID.</p>
   */
  senderId?: string;

  /**
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   */
  additionalMessage?: string;

  /**
   * <p>Specifies one or more recipients who receive the message.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive SMS messages to your AWS SSO store</a>.</p>
   *          </important>
   */
  recipients: RecipientDetail[] | undefined;
}

export namespace SMSConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SMSConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the notification settings of an alarm model.
 * The settings apply to all alarms that were created based on this alarm model.</p>
 */
export interface NotificationAction {
  /**
   * <p>Specifies an AWS Lambda function to manage alarm notifications.
   * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
   */
  action: NotificationTargetActions | undefined;

  /**
   * <p>Contains the configuration information of SMS notifications.</p>
   */
  smsConfigurations?: SMSConfiguration[];

  /**
   * <p>Contains the configuration information of email notifications.</p>
   */
  emailConfigurations?: EmailConfiguration[];
}

export namespace NotificationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationAction): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about one or more notification actions.</p>
 */
export interface AlarmNotification {
  /**
   * <p>Contains the notification settings of an alarm model.
   * The settings apply to all alarms that were created based on this alarm model.</p>
   */
  notificationActions?: NotificationAction[];
}

export namespace AlarmNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmNotification): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  EQUAL = "EQUAL",
  GREATER = "GREATER",
  GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
  LESS = "LESS",
  LESS_OR_EQUAL = "LESS_OR_EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
}

/**
 * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
 */
export interface SimpleRule {
  /**
   * <p>The value on the left side of the comparison operator. You can specify an AWS IoT Events input
   *       attribute as an input property.</p>
   */
  inputProperty: string | undefined;

  /**
   * <p>The comparison operator.</p>
   */
  comparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The value on the right side of the comparison operator. You can enter a number or specify
   *       an AWS IoT Events input attribute.</p>
   */
  threshold: string | undefined;
}

export namespace SimpleRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleRule): any => ({
    ...obj,
  });
}

/**
 * <p>Defines when your alarm is invoked.</p>
 */
export interface AlarmRule {
  /**
   * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
   */
  simpleRule?: SimpleRule;
}

export namespace AlarmRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmRule): any => ({
    ...obj,
  });
}

export enum AnalysisResultLevel {
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

/**
 * <p>Contains information that you can use to locate the field in your detector model that the
 *       analysis result references.</p>
 */
export interface AnalysisResultLocation {
  /**
   * <p>A <a href="https://github.com/json-path/JsonPath">JsonPath</a> expression that
   *       identifies the error field in your detector model.</p>
   */
  path?: string;
}

export namespace AnalysisResultLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisResultLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of the analysis.</p>
 */
export interface AnalysisResult {
  /**
   * <p>The type of the analysis result. Analyses fall into the following types based on the
   *       validators used to generate the analysis result:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>supported-actions</code> - You must specify AWS IoT Events supported actions that work
   *           with other AWS services in a supported AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>service-limits</code> - Resources or API operations can't exceed service
   *           quotas (also known as limits). Update your detector model or request a quota
   *           increase.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>structure</code> - The detector model must follow a structure that AWS IoT Events
   *           supports. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>expression-syntax</code> - Your expression must follow the required
   *           syntax.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>data-type</code> - Data types referenced in the detector model must be
   *           compatible.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>referenced-data</code> - You must define the data referenced in your detector
   *           model before you can use the data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>referenced-resource</code> - Resources that the detector model uses must be
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Running detector model
   *         analyses</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
   */
  type?: string;

  /**
   * <p>The severity level of the analysis result. Based on the severity level, analysis results
   *       fall into three general categories:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFO</code> - An information result tells you about a significant field in your
   *           detector model. This type of result usually doesn't require immediate action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARNING</code> - A warning result draws special attention to fields that might cause issues for your detector model.
   *           We recommend that you review warnings and take necessary actions
   *           before you use your detector model in production environments. Otherwise, the detector
   *           model might not work as expected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - An error result notifies you about a problem found in your
   *           detector model. You must fix all errors before you can publish your detector model.</p>
   *             </li>
   *          </ul>
   */
  level?: AnalysisResultLevel | string;

  /**
   * <p>Contains additional information about the analysis result.</p>
   */
  message?: string;

  /**
   * <p>Contains one or more locations that you can use to locate the fields in your detector
   *       model that the analysis result references.</p>
   */
  locations?: AnalysisResultLocation[];
}

export namespace AnalysisResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalysisResult): any => ({
    ...obj,
  });
}

export enum AnalysisStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
}

/**
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are
 *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
 *       message contains a JSON payload. Those attributes (and their paired values) specified here are
 *       available for use in the <code>condition</code> expressions used by detectors. </p>
 */
export interface Attribute {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata that can be used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
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

export interface CreateAlarmModelRequest {
  /**
   * <p>A unique name that helps you identify the alarm model. You can't change this name after
   *       you create the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>A description that tells you what the alarm model detects.</p>
   */
  alarmModelDescription?: string;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the alarm model. The tags help you
   *       manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events
   *         resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
   *          <p>You can create up to 50 tags for one alarm model.</p>
   */
  tags?: Tag[];

  /**
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   */
  key?: string;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule: AlarmRule | undefined;

  /**
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

export namespace CreateAlarmModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlarmModelRequest): any => ({
    ...obj,
  });
}

export interface CreateAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the alarm model. The status can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model.
   *         Activating an alarm model can take up to a few minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data.
   * 	  Check your alarm model information and update the alarm model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information
   *         and try again.</p>
   *             </li>
   *          </ul>
   */
  status?: AlarmModelVersionStatus | string;
}

export namespace CreateAlarmModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlarmModelResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the <code>actions</code> to be performed when the <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface Event {
  /**
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>Optional. The Boolean expression that, when TRUE, causes the <code>actions</code> to be
   *       performed. If not present, the actions are performed (=TRUE). If the expression result is not
   *       a Boolean value, the actions are not performed (=FALSE).</p>
   */
  condition?: string;

  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
 *       is TRUE.</p>
 */
export interface OnEnterLifecycle {
  /**
   * <p>Specifies the actions that are performed when the state is entered and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

export namespace OnEnterLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnEnterLifecycle): any => ({
    ...obj,
  });
}

/**
 * <p>When exiting this state, perform these <code>actions</code> if the specified
 *         <code>condition</code> is <code>TRUE</code>.</p>
 */
export interface OnExitLifecycle {
  /**
   * <p>Specifies the <code>actions</code> that are performed when the state is exited and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

export namespace OnExitLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnExitLifecycle): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the actions performed and the next state entered when a <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface TransitionEvent {
  /**
   * <p>The name of the transition event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>Required. A Boolean expression that when TRUE causes the actions to be performed and the
   *         <code>nextState</code> to be entered.</p>
   */
  condition: string | undefined;

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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitionEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
 */
export interface OnInputLifecycle {
  /**
   * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
   */
  events?: Event[];

  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>condition</code>
   *       evaluates to TRUE.</p>
   */
  transitionEvents?: TransitionEvent[];
}

export namespace OnInputLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnInputLifecycle): any => ({
    ...obj,
  });
}

/**
 * <p>Information that defines a state of a detector.</p>
 */
export interface State {
  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * <p>When an input is received and the <code>condition</code> is TRUE, perform the specified
   *         <code>actions</code>.</p>
   */
  onInput?: OnInputLifecycle;

  /**
   * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
   *       is TRUE.</p>
   */
  onEnter?: OnEnterLifecycle;

  /**
   * <p>When exiting this state, perform these <code>actions</code> if the specified
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  onExit?: OnExitLifecycle;
}

export namespace State {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: State): any => ({
    ...obj,
  });
}

/**
 * <p>Information that defines how a detector operates.</p>
 */
export interface DetectorModelDefinition {
  /**
   * <p>Information about the states of the detector.</p>
   */
  states: State[] | undefined;

  /**
   * <p>The state that is entered at the creation of each detector (instance).</p>
   */
  initialStateName: string | undefined;
}

export namespace DetectorModelDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorModelDefinition): any => ({
    ...obj,
  });
}

export enum EvaluationMethod {
  BATCH = "BATCH",
  SERIAL = "SERIAL",
}

export interface CreateDetectorModelRequest {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information that defines how the detectors operate.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The input attribute key used to identify a device or system to create a detector (an
   *       instance of the detector model) and then to route each input received to the appropriate
   *       detector (instance). This parameter uses a JSON-path expression in the message payload of each
   *       input to specify the attribute-value pair that is used to identify the device associated with
   *       the input.</p>
   */
  key?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the detector model.</p>
   */
  tags?: Tag[];

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

export namespace CreateDetectorModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDetectorModelRequest): any => ({
    ...obj,
  });
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
 * <p>Information about how the detector model is configured.</p>
 */
export interface DetectorModelConfiguration {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The ARN of the detector model.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn?: string;

  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the detector model.</p>
   */
  status?: DetectorModelVersionStatus | string;

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
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

export namespace DetectorModelConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorModelConfiguration): any => ({
    ...obj,
  });
}

export interface CreateDetectorModelResponse {
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace CreateDetectorModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDetectorModelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the input.</p>
 */
export interface InputDefinition {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDefinition): any => ({
    ...obj,
  });
}

export interface CreateInputRequest {
  /**
   * <p>The name you want to give to the input.</p>
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

  /**
   * <p>Metadata that can be used to manage the input.</p>
   */
  tags?: Tag[];
}

export namespace CreateInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
}

export enum InputStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>Information about the configuration of an input.</p>
 */
export interface InputConfiguration {
  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The ARN of the input.</p>
   */
  inputArn: string | undefined;

  /**
   * <p>The time the input was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The status of the input.</p>
   */
  status: InputStatus | string | undefined;
}

export namespace InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj,
  });
}

export interface CreateInputResponse {
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace CreateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
}

export interface DeleteAlarmModelRequest {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;
}

export namespace DeleteAlarmModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteAlarmModelResponse {}

export namespace DeleteAlarmModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmModelResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteDetectorModelRequest {
  /**
   * <p>The name of the detector model to be deleted.</p>
   */
  detectorModelName: string | undefined;
}

export namespace DeleteDetectorModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteDetectorModelResponse {}

export namespace DeleteDetectorModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDetectorModelResponse): any => ({
    ...obj,
  });
}

export interface DeleteInputRequest {
  /**
   * <p>The name of the input to delete.</p>
   */
  inputName: string | undefined;
}

export namespace DeleteInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
}

export interface DeleteInputResponse {}

export namespace DeleteInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
}

export interface DescribeAlarmModelRequest {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;
}

export namespace DescribeAlarmModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlarmModelRequest): any => ({
    ...obj,
  });
}

export interface DescribeAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the alarm model. The status can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model.
   *         Activating an alarm model can take up to a few minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data.
   * 	  Check your alarm model information and update the alarm model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information
   *         and try again.</p>
   *             </li>
   *          </ul>
   */
  status?: AlarmModelVersionStatus | string;

  /**
   * <p>
   *       Contains information about the status of the alarm model.
   *     </p>
   */
  statusMessage?: string;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   */
  key?: string;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule?: AlarmRule;

  /**
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

export namespace DescribeAlarmModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlarmModelResponse): any => ({
    ...obj,
  });
}

export interface DescribeDetectorModelRequest {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;
}

export namespace DescribeDetectorModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModel {
  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: DetectorModelDefinition;

  /**
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace DetectorModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorModel): any => ({
    ...obj,
  });
}

export interface DescribeDetectorModelResponse {
  /**
   * <p>Information about the detector model.</p>
   */
  detectorModel?: DetectorModel;
}

export namespace DescribeDetectorModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorModelResponse): any => ({
    ...obj,
  });
}

export interface DescribeDetectorModelAnalysisRequest {
  /**
   * <p>The ID of the analysis result that you want to retrieve.</p>
   */
  analysisId: string | undefined;
}

export namespace DescribeDetectorModelAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorModelAnalysisRequest): any => ({
    ...obj,
  });
}

export interface DescribeDetectorModelAnalysisResponse {
  /**
   * <p>The status of the analysis activity. The status can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - AWS IoT Events is analyzing your detector model. This process can take
   *           several minutes to complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> - AWS IoT Events finished analyzing your detector model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - AWS IoT Events couldn't analyze your detector model. Try again
   *           later.</p>
   *             </li>
   *          </ul>
   */
  status?: AnalysisStatus | string;
}

export namespace DescribeDetectorModelAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorModelAnalysisResponse): any => ({
    ...obj,
  });
}

export interface DescribeInputRequest {
  /**
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;
}

export namespace DescribeInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the input.</p>
 */
export interface Input {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

export interface DescribeInputResponse {
  /**
   * <p>Information about the input.</p>
   */
  input?: Input;
}

export namespace DescribeInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsRequest {}

export namespace DescribeLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The detector model and the specific detectors (instances) for which the logging level is
 *       given.</p>
 */
export interface DetectorDebugOption {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input attribute key used to create the detector (the instance of the
   *       detector model).</p>
   */
  keyValue?: string;
}

export namespace DetectorDebugOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorDebugOption): any => ({
    ...obj,
  });
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
  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The logging level.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Information that identifies those detector models and their detectors (instances) for
   *       which the logging level is given.</p>
   */
  detectorDebugOptions?: DetectorDebugOption[];
}

export namespace LoggingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current settings of the AWS IoT Events logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector model.</p>
 */
export interface DetectorModelSummary {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;
}

export namespace DetectorModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorModelSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector model version.</p>
 */
export interface DetectorModelVersionSummary {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The ID of the detector model version.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The ARN of the detector model version.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   */
  roleArn?: string;

  /**
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the detector model version.</p>
   */
  status?: DetectorModelVersionStatus | string;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

export namespace DetectorModelVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorModelVersionSummary): any => ({
    ...obj,
  });
}

export interface GetDetectorModelAnalysisResultsRequest {
  /**
   * <p>The ID of the analysis result that you want to retrieve.</p>
   */
  analysisId: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace GetDetectorModelAnalysisResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorModelAnalysisResultsRequest): any => ({
    ...obj,
  });
}

export interface GetDetectorModelAnalysisResultsResponse {
  /**
   * <p>Contains information about one or more analysis results.</p>
   */
  analysisResults?: AnalysisResult[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace GetDetectorModelAnalysisResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDetectorModelAnalysisResultsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The identifier of the input routed to AWS IoT Events.
 *     </p>
 */
export interface IotEventsInputIdentifier {
  /**
   * <p>
   *       The name of the input routed to AWS IoT Events.
   *     </p>
   */
  inputName: string | undefined;
}

export namespace IotEventsInputIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotEventsInputIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The asset model property identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 */
export interface IotSiteWiseAssetModelPropertyIdentifier {
  /**
   * <p>
   *       The ID of the AWS IoT SiteWise asset model.
   *     </p>
   */
  assetModelId: string | undefined;

  /**
   * <p>
   *       The ID of the AWS IoT SiteWise asset property.
   *     </p>
   */
  propertyId: string | undefined;
}

export namespace IotSiteWiseAssetModelPropertyIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseAssetModelPropertyIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 */
export interface IotSiteWiseInputIdentifier {
  /**
   * <p>
   *       The identifier of the AWS IoT SiteWise asset model property.
   *     </p>
   */
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}

export namespace IotSiteWiseInputIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseInputIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The identifer of the input.
 *     </p>
 */
export interface InputIdentifier {
  /**
   * <p>
   *       The identifier of the input routed to AWS IoT Events.
   *     </p>
   */
  iotEventsInputIdentifier?: IotEventsInputIdentifier;

  /**
   * <p>
   *       The identifer of the input routed from AWS IoT SiteWise.
   *     </p>
   */
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
}

export namespace InputIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the input.</p>
 */
export interface InputSummary {
  /**
   * <p>The name of the input.</p>
   */
  inputName?: string;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The ARN of the input.</p>
   */
  inputArn?: string;

  /**
   * <p>The time the input was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the input.</p>
   */
  status?: InputStatus | string;
}

export namespace InputSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSummary): any => ({
    ...obj,
  });
}

export interface ListAlarmModelsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListAlarmModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmModelsRequest): any => ({
    ...obj,
  });
}

export interface ListAlarmModelsResponse {
  /**
   * <p>A list that summarizes each alarm model.</p>
   */
  alarmModelSummaries?: AlarmModelSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListAlarmModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmModelsResponse): any => ({
    ...obj,
  });
}

export interface ListAlarmModelVersionsRequest {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListAlarmModelVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmModelVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListAlarmModelVersionsResponse {
  /**
   * <p>A list that summarizes each alarm model version.</p>
   */
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListAlarmModelVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmModelVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListDetectorModelsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorModelsRequest): any => ({
    ...obj,
  });
}

export interface ListDetectorModelsResponse {
  /**
   * <p>Summary information about the detector models.</p>
   */
  detectorModelSummaries?: DetectorModelSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorModelsResponse): any => ({
    ...obj,
  });
}

export interface ListDetectorModelVersionsRequest {
  /**
   * <p>The name of the detector model whose versions are returned.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorModelVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorModelVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListDetectorModelVersionsResponse {
  /**
   * <p>Summary information about the detector model versions.</p>
   */
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorModelVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorModelVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListInputRoutingsRequest {
  /**
   * <p>
   *       The identifer of the routed input.
   *     </p>
   */
  inputIdentifier: InputIdentifier | undefined;

  /**
   * <p>
   *       The maximum number of results to be returned per request.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token that you can use to return the next set of results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListInputRoutingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputRoutingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       Contains information about the routed resource.
 *     </p>
 */
export interface RoutedResource {
  /**
   * <p>
   *       The name of the routed resource.
   *     </p>
   */
  name?: string;

  /**
   * <p>
   *       The ARN of the routed resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
   *     </p>
   */
  arn?: string;
}

export namespace RoutedResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutedResource): any => ({
    ...obj,
  });
}

export interface ListInputRoutingsResponse {
  /**
   * <p>
   *       Summary information about the routed resources.
   *     </p>
   */
  routedResources?: RoutedResource[];

  /**
   * <p>
   *       The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListInputRoutingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputRoutingsResponse): any => ({
    ...obj,
  });
}

export interface ListInputsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListInputsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
}

export interface ListInputsResponse {
  /**
   * <p>Summary information about the inputs.</p>
   */
  inputSummaries?: InputSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListInputsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>The new values of the AWS IoT Events logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface StartDetectorModelAnalysisRequest {
  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;
}

export namespace StartDetectorModelAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDetectorModelAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartDetectorModelAnalysisResponse {
  /**
   * <p>The ID that you can use to retrieve the analysis result.</p>
   */
  analysisId?: string;
}

export namespace StartDetectorModelAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDetectorModelAnalysisResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
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

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAlarmModelRequest {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule: AlarmRule | undefined;

  /**
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

export namespace UpdateAlarmModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAlarmModelRequest): any => ({
    ...obj,
  });
}

export interface UpdateAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The status of the alarm model. The status can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The alarm model is active and it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATING</code> - AWS IoT Events is activating your alarm model.
   *         Activating an alarm model can take up to a few minutes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code> - The alarm model is inactive, so it isn't ready to evaluate data.
   * 	  Check your alarm model information and update the alarm model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - You couldn't create or update the alarm model. Check your alarm model information
   *         and try again.</p>
   *             </li>
   *          </ul>
   */
  status?: AlarmModelVersionStatus | string;
}

export namespace UpdateAlarmModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAlarmModelResponse): any => ({
    ...obj,
  });
}

export interface UpdateDetectorModelRequest {
  /**
   * <p>The name of the detector model that is updated.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

export namespace UpdateDetectorModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorModelRequest): any => ({
    ...obj,
  });
}

export interface UpdateDetectorModelResponse {
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

export namespace UpdateDetectorModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorModelResponse): any => ({
    ...obj,
  });
}

export interface UpdateInputRequest {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
}

export interface UpdateInputResponse {
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

export namespace UpdateInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
}
