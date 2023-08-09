// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTEventsServiceException as __BaseException } from "./IoTEventsServiceException";

/**
 * @public
 * <p>Specifies whether to get notified for alarm state changes.</p>
 */
export interface AcknowledgeFlow {
  /**
   * @public
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>TRUE</code>, you
   *       receive a notification when the alarm state changes. You must choose to acknowledge the
   *       notification before the alarm state can return to <code>NORMAL</code>. If <code>FALSE</code>,
   *       you won't receive notifications. The alarm automatically changes to the <code>NORMAL</code>
   *       state when the input property value returns to the specified range.</p>
   */
  enabled: boolean | undefined;
}

/**
 * @public
 * <p>Information needed to clear the timer.</p>
 */
export interface ClearTimerAction {
  /**
   * @public
   * <p>The name of the timer to clear.</p>
   */
  timerName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PayloadType = {
  JSON: "JSON",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * @public
 * <p>Information needed to configure the payload.</p>
 *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
 *       contains all attribute-value pairs that have the information about the detector model instance
 *       and the event triggered the action. To configure the action payload, you can use
 *         <code>contentExpression</code>.</p>
 */
export interface Payload {
  /**
   * @public
   * <p>The content of the payload. You can use a string expression that includes quoted strings
   *         (<code>'<string>'</code>), variables (<code>$variable.<variable-name></code>),
   *       input values (<code>$input.<input-name>.<path-to-datum></code>), string
   *       concatenations, and quoted strings that contain <code>$\{\}</code> as the content. The
   *       recommended maximum size of a content expression is 1 KB.</p>
   */
  contentExpression: string | undefined;

  /**
   * @public
   * <p>The value of the payload type can be either <code>STRING</code> or
   *       <code>JSON</code>.</p>
   */
  type: PayloadType | string | undefined;
}

/**
 * @public
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
 *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a
 *           substitution template. </p>
 *                <p>
 *                   <code>'$\{$input.GreenhouseInput.temperature * 6 / 5 + 32\} in Fahrenheit'</code>
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
   * @public
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
   * @public
   * <p>The name of the hash key (also called the partition key). The <code>hashKeyField</code>
   *       value must match the partition key of the target DynamoDB table.</p>
   */
  hashKeyField: string | undefined;

  /**
   * @public
   * <p>The value of the hash key (also called the partition key).</p>
   */
  hashKeyValue: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The name of the range key (also called the sort key). The <code>rangeKeyField</code> value
   *       must match the sort key of the target DynamoDB table. </p>
   */
  rangeKeyField?: string;

  /**
   * @public
   * <p>The value of the range key (also called the sort key).</p>
   */
  rangeKeyValue?: string;

  /**
   * @public
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
   * @public
   * <p>The name of the DynamoDB column that receives the action payload.</p>
   *          <p>If you don't specify this parameter, the name of the DynamoDB column is
   *       <code>payload</code>.</p>
   */
  payloadField?: string;

  /**
   * @public
   * <p>The name of the DynamoDB table. The <code>tableName</code> value must match the table name of
   *       the target DynamoDB table. </p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   */
  payload?: Payload;
}

/**
 * @public
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
 *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>contentExpression</code> parameter
 *           in <code>Payload</code> uses a substitution template. </p>
 *                <p>
 *                   <code>'\{\"sensorID\": \"$\{$input.GreenhouseInput.sensor_id\}\", \"temperature\":
 *             \"$\{$input.GreenhouseInput.temperature * 9 / 5 + 32\}\"\}'</code>
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
   * @public
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface FirehoseAction {
  /**
   * @public
   * <p>The name of the Kinesis Data Firehose delivery stream where the data is written.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * @public
   * <p>A character separator that is used to separate records written to the Kinesis Data
   *       Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows
   *       newline), ',' (comma).</p>
   */
  separator?: string;

  /**
   * @public
   * <p>You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery
   *       stream.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface IotEventsAction {
  /**
   * @public
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   */
  inputName: string | undefined;

  /**
   * @public
   * <p>You can configure the action payload when you send a message to an AWS IoT Events input.</p>
   */
  payload?: Payload;
}

/**
 * @public
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
 *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses
 *           a substitution template.</p>
 *                <p>
 *                   <code>'$\{$input.TemperatureInput.sensorData.timestamp / 1000\}'</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information,
 *         see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a>
 *         in the <i>AWS IoT Events Developer Guide</i>.</p>
 */
export interface AssetPropertyTimestamp {
  /**
   * @public
   * <p>The timestamp, in seconds, in the Unix epoch format. The valid range is between
   *       1-31556889864403199.</p>
   */
  timeInSeconds: string | undefined;

  /**
   * @public
   * <p>The nanosecond offset converted from <code>timeInSeconds</code>. The valid range is
   *       between 0-999999999.</p>
   */
  offsetInNanos?: string;
}

/**
 * @public
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
 *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates. </p>
 *                <p>In the following example, the value for the <code>doubleValue</code> parameter uses a
 *           substitution template. </p>
 *                <p>
 *                   <code>'$\{$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32\}'</code>
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
   * @public
   * <p>The asset property value is a string. You must use an expression, and the evaluated result
   *       should be a string.</p>
   */
  stringValue?: string;

  /**
   * @public
   * <p>The asset property value is an integer. You must use an expression, and the evaluated
   *       result should be an integer.</p>
   */
  integerValue?: string;

  /**
   * @public
   * <p>The asset property value is a double. You must use an expression, and the evaluated result
   *       should be a double.</p>
   */
  doubleValue?: string;

  /**
   * @public
   * <p>The asset property value is a Boolean value that must be <code>'TRUE'</code> or
   *         <code>'FALSE'</code>. You must use an expression, and the evaluated result should be a
   *       Boolean value.</p>
   */
  booleanValue?: string;
}

/**
 * @public
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
   * @public
   * <p>The value to send to an asset property.</p>
   */
  value?: AssetPropertyVariant;

  /**
   * @public
   * <p>The timestamp associated with the asset property value. The default is the current event
   *       time.</p>
   */
  timestamp?: AssetPropertyTimestamp;

  /**
   * @public
   * <p>The quality of the asset property value. The value must be <code>'GOOD'</code>,
   *         <code>'BAD'</code>, or <code>'UNCERTAIN'</code>.</p>
   */
  quality?: string;
}

/**
 * @public
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
 *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
 *           in single quotes. A substitution template can also contain a combination of literals,
 *           operators, functions, references, and substitution templates.</p>
 *                <p>In the following example, the value for the <code>propertyAlias</code> parameter uses
 *           a substitution template. </p>
 *                <p>
 *                   <code>'company/windfarm/$\{$input.TemperatureInput.sensorData.windfarmID\}/turbine/
 *             $\{$input.TemperatureInput.sensorData.turbineID\}/temperature'</code>
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
   * @public
   * <p>A unique identifier for this entry. You can use the entry ID to track which data entry
   *       causes an error in case of failure. The default is a new unique identifier.</p>
   */
  entryId?: string;

  /**
   * @public
   * <p>The ID of the asset that has the specified property.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias of the asset property.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The value to send to the asset property. This value contains timestamp, quality, and value
   *       (TQV) information. </p>
   */
  propertyValue?: AssetPropertyValue;
}

/**
 * @public
 * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
 */
export interface IotTopicPublishAction {
  /**
   * @public
   * <p>The MQTT topic of the message. You can use a string expression that includes variables
   *         (<code>$variable.<variable-name></code>) and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the topic string.</p>
   */
  mqttTopic: string | undefined;

  /**
   * @public
   * <p>You can configure the action payload when you publish a message to an AWS IoT Core
   *       topic.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>Calls a Lambda function, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 */
export interface LambdaAction {
  /**
   * @public
   * <p>The ARN of the Lambda function that is executed.</p>
   */
  functionArn: string | undefined;

  /**
   * @public
   * <p>You can configure the action payload when you send a message to a Lambda function.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>Information required to reset the timer. The timer is reset to the previously evaluated
 *       result of the duration. The duration expression isn't reevaluated when you reset the
 *       timer.</p>
 */
export interface ResetTimerAction {
  /**
   * @public
   * <p>The name of the timer to reset.</p>
   */
  timerName: string | undefined;
}

/**
 * @public
 * <p>Information needed to set the timer.</p>
 */
export interface SetTimerAction {
  /**
   * @public
   * <p>The name of the timer.</p>
   */
  timerName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure
   *       accuracy. The maximum value is 31622400 seconds. </p>
   */
  seconds?: number;

  /**
   * @public
   * <p>The duration of the timer, in seconds. You can use a string expression that includes
   *       numbers, variables (<code>$variable.<variable-name></code>), and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the duration. The range of
   *       the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds.
   *       The evaluated result of the duration is rounded down to the nearest whole number. </p>
   */
  durationExpression?: string;
}

/**
 * @public
 * <p>Information about the variable and its new value.</p>
 */
export interface SetVariableAction {
  /**
   * @public
   * <p>The name of the variable.</p>
   */
  variableName: string | undefined;

  /**
   * @public
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Information required to publish the Amazon SNS message.</p>
 */
export interface SNSTopicPublishAction {
  /**
   * @public
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>You can configure the action payload when you send a message as an Amazon SNS push
   *       notification.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  /**
   * @public
   * <p>The URL of the SQS queue where the data is written.</p>
   */
  queueUrl: string | undefined;

  /**
   * @public
   * <p>Set this to TRUE if you want the data to be base-64 encoded before it is written to the
   *       queue. Otherwise, set this to FALSE.</p>
   */
  useBase64?: boolean;

  /**
   * @public
   * <p>You can configure the action payload when you send a message to an Amazon SQS
   *       queue.</p>
   */
  payload?: Payload;
}

/**
 * @public
 * <p>An action to be performed when the <code>condition</code> is TRUE.</p>
 */
export interface Action {
  /**
   * @public
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: SetVariableAction;

  /**
   * @public
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * @public
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * @public
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: SetTimerAction;

  /**
   * @public
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: ClearTimerAction;

  /**
   * @public
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: ResetTimerAction;

  /**
   * @public
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambda?: LambdaAction;

  /**
   * @public
   * <p>Sends AWS IoT Events input, which passes information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * @public
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * @public
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * @public
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
   *       DynamoDB table receives all attribute-value pairs in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * @public
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
   *       the DynamoDB table receives one attribute-value pair in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * @public
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an asset property in AWS IoT SiteWise .</p>
   */
  iotSiteWise?: IotSiteWiseAction;
}

/**
 * @public
 * <p>Specifies one of the following actions to receive notifications when the alarm state
 *       changes.</p>
 */
export interface AlarmAction {
  /**
   * @public
   * <p>Information required to publish the Amazon SNS message.</p>
   */
  sns?: SNSTopicPublishAction;

  /**
   * @public
   * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
   */
  iotTopicPublish?: IotTopicPublishAction;

  /**
   * @public
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambda?: LambdaAction;

  /**
   * @public
   * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * @public
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * @public
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * @public
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
   *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a
   *           substitution template. </p>
   *                <p>
   *                   <code>'$\{$input.GreenhouseInput.temperature * 6 / 5 + 32\} in Fahrenheit'</code>
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
   * @public
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
   *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>contentExpression</code> parameter
   *           in <code>Payload</code> uses a substitution template. </p>
   *                <p>
   *                   <code>'\{\"sensorID\": \"$\{$input.GreenhouseInput.sensor_id\}\", \"temperature\":
   *             \"$\{$input.GreenhouseInput.temperature * 9 / 5 + 32\}\"\}'</code>
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
   * @public
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
   *                <p>For a substitution template, you must use <code>$\{\}</code>, and the template must be
   *           in single quotes. A substitution template can also contain a combination of literals,
   *           operators, functions, references, and substitution templates.</p>
   *                <p>In the following example, the value for the <code>propertyAlias</code> parameter uses
   *           a substitution template. </p>
   *                <p>
   *                   <code>'company/windfarm/$\{$input.TemperatureInput.sensorData.windfarmID\}/turbine/
   *             $\{$input.TemperatureInput.sensorData.turbineID\}/temperature'</code>
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

/**
 * @public
 * <p>Specifies the default alarm state.
 * The configuration applies to all alarms that were created based on this alarm model.</p>
 */
export interface InitializationConfiguration {
  /**
   * @public
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>FALSE</code>, all
   *       alarm instances created based on the alarm model are activated. The default value is
   *         <code>TRUE</code>.</p>
   */
  disabledOnInitialization: boolean | undefined;
}

/**
 * @public
 * <p>Contains the configuration information of alarm state changes.</p>
 */
export interface AlarmCapabilities {
  /**
   * @public
   * <p>Specifies the default alarm state.
   * The configuration applies to all alarms that were created based on this alarm model.</p>
   */
  initializationConfiguration?: InitializationConfiguration;

  /**
   * @public
   * <p>Specifies whether to get notified for alarm state changes.</p>
   */
  acknowledgeFlow?: AcknowledgeFlow;
}

/**
 * @public
 * <p>Contains information about one or more alarm actions.</p>
 */
export interface AlarmEventActions {
  /**
   * @public
   * <p>Specifies one or more supported actions to receive notifications when the alarm state
   *       changes.</p>
   */
  alarmActions?: AlarmAction[];
}

/**
 * @public
 * <p>Contains a summary of an alarm model.</p>
 */
export interface AlarmModelSummary {
  /**
   * @public
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;
}

/**
 * @public
 * @enum
 */
export const AlarmModelVersionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AlarmModelVersionStatus = (typeof AlarmModelVersionStatus)[keyof typeof AlarmModelVersionStatus];

/**
 * @public
 * <p>Contains a summary of an alarm model version.</p>
 */
export interface AlarmModelVersionSummary {
  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * @public
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * @public
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
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
   * @public
   * <p>
   *       Contains information about the status of the alarm model version.
   *     </p>
   */
  statusMessage?: string;
}

/**
 * @public
 * <p>Specifies an AWS Lambda function to manage alarm notifications.
 * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
 */
export interface NotificationTargetActions {
  /**
   * @public
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   */
  lambdaAction?: LambdaAction;
}

/**
 * @public
 * <p>Contains the subject and message of an email.</p>
 */
export interface EmailContent {
  /**
   * @public
   * <p>The subject of the email.</p>
   */
  subject?: string;

  /**
   * @public
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   */
  additionalMessage?: string;
}

/**
 * @public
 * <p>Contains information about your identity source in AWS Single Sign-On. For more information, see
 *       the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On
 *         User Guide</a>.</p>
 */
export interface SSOIdentity {
  /**
   * @public
   * <p>The ID of the AWS SSO identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  userId?: string;
}

/**
 * @public
 * <p>The information that identifies the recipient.</p>
 */
export interface RecipientDetail {
  /**
   * @public
   * <p>The AWS Single Sign-On (AWS SSO) authentication information.</p>
   */
  ssoIdentity?: SSOIdentity;
}

/**
 * @public
 * <p>Contains the information of one or more recipients who receive the emails.</p>
 *          <important>
 *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
 *          </important>
 */
export interface EmailRecipients {
  /**
   * @public
   * <p>Specifies one or more recipients who receive the email.</p>
   */
  to?: RecipientDetail[];
}

/**
 * @public
 * <p>Contains the configuration information of email notifications.</p>
 */
export interface EmailConfiguration {
  /**
   * @public
   * <p>The email address that sends emails.</p>
   *          <important>
   *             <p>If you use the AWS IoT Events managed AWS Lambda function to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify
   *           the email address that sends emails in Amazon SES</a>.</p>
   *          </important>
   */
  from: string | undefined;

  /**
   * @public
   * <p>Contains the subject and message of an email.</p>
   */
  content?: EmailContent;

  /**
   * @public
   * <p>Contains the information of one or more recipients who receive the emails.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
   *          </important>
   */
  recipients: EmailRecipients | undefined;
}

/**
 * @public
 * <p>Contains the configuration information of SMS notifications.</p>
 */
export interface SMSConfiguration {
  /**
   * @public
   * <p>The sender ID.</p>
   */
  senderId?: string;

  /**
   * @public
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   */
  additionalMessage?: string;

  /**
   * @public
   * <p>Specifies one or more recipients who receive the message.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive SMS messages to your AWS SSO store</a>.</p>
   *          </important>
   */
  recipients: RecipientDetail[] | undefined;
}

/**
 * @public
 * <p>Contains the notification settings of an alarm model.
 * The settings apply to all alarms that were created based on this alarm model.</p>
 */
export interface NotificationAction {
  /**
   * @public
   * <p>Specifies an AWS Lambda function to manage alarm notifications.
   * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
   */
  action: NotificationTargetActions | undefined;

  /**
   * @public
   * <p>Contains the configuration information of SMS notifications.</p>
   */
  smsConfigurations?: SMSConfiguration[];

  /**
   * @public
   * <p>Contains the configuration information of email notifications.</p>
   */
  emailConfigurations?: EmailConfiguration[];
}

/**
 * @public
 * <p>Contains information about one or more notification actions.</p>
 */
export interface AlarmNotification {
  /**
   * @public
   * <p>Contains the notification settings of an alarm model.
   * The settings apply to all alarms that were created based on this alarm model.</p>
   */
  notificationActions?: NotificationAction[];
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESS: "LESS",
  LESS_OR_EQUAL: "LESS_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
 */
export interface SimpleRule {
  /**
   * @public
   * <p>The value on the left side of the comparison operator. You can specify an AWS IoT Events input
   *       attribute as an input property.</p>
   */
  inputProperty: string | undefined;

  /**
   * @public
   * <p>The comparison operator.</p>
   */
  comparisonOperator: ComparisonOperator | string | undefined;

  /**
   * @public
   * <p>The value on the right side of the comparison operator. You can enter a number or specify
   *       an AWS IoT Events input attribute.</p>
   */
  threshold: string | undefined;
}

/**
 * @public
 * <p>Defines when your alarm is invoked.</p>
 */
export interface AlarmRule {
  /**
   * @public
   * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
   */
  simpleRule?: SimpleRule;
}

/**
 * @public
 * @enum
 */
export const AnalysisResultLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type AnalysisResultLevel = (typeof AnalysisResultLevel)[keyof typeof AnalysisResultLevel];

/**
 * @public
 * <p>Contains information that you can use to locate the field in your detector model that the
 *       analysis result references.</p>
 */
export interface AnalysisResultLocation {
  /**
   * @public
   * <p>A <a href="https://github.com/json-path/JsonPath">JsonPath</a> expression that
   *       identifies the error field in your detector model.</p>
   */
  path?: string;
}

/**
 * @public
 * <p>Contains the result of the analysis.</p>
 */
export interface AnalysisResult {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>Contains additional information about the analysis result.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Contains one or more locations that you can use to locate the fields in your detector
   *       model that the analysis result references.</p>
   */
  locations?: AnalysisResultLocation[];
}

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are
 *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
 *       message contains a JSON payload. Those attributes (and their paired values) specified here are
 *       available for use in the <code>condition</code> expressions used by detectors. </p>
 */
export interface Attribute {
  /**
   * @public
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

/**
 * @public
 * <p>Metadata that can be used to manage the resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAlarmModelRequest {
  /**
   * @public
   * <p>A unique name that helps you identify the alarm model. You can't change this name after
   *       you create the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * @public
   * <p>A description that tells you what the alarm model detects.</p>
   */
  alarmModelDescription?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the alarm model. The tags help you
   *       manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events
   *         resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
   *          <p>You can create up to 50 tags for one alarm model.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   */
  key?: string;

  /**
   * @public
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * @public
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule: AlarmRule | undefined;

  /**
   * @public
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * @public
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * @public
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

/**
 * @public
 */
export interface CreateAlarmModelResponse {
  /**
   * @public
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * @public
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * @public
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
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

/**
 * @public
 * <p>An internal failure occurred.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * @public
 * <p>The request was invalid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * @public
 * <p>A limit was exceeded.</p>
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
 * @public
 * <p>The resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * @public
 * <p>The resource is in use.</p>
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
 * @public
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 * <p>The request could not be completed due to throttling.</p>
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
 * <p>Specifies the <code>actions</code> to be performed when the <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;

  /**
   * @public
   * <p>Optional. The Boolean expression that, when TRUE, causes the <code>actions</code> to be
   *       performed. If not present, the actions are performed (=TRUE). If the expression result is not
   *       a Boolean value, the actions are not performed (=FALSE).</p>
   */
  condition?: string;

  /**
   * @public
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];
}

/**
 * @public
 * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
 *       is TRUE.</p>
 */
export interface OnEnterLifecycle {
  /**
   * @public
   * <p>Specifies the actions that are performed when the state is entered and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

/**
 * @public
 * <p>When exiting this state, perform these <code>actions</code> if the specified
 *         <code>condition</code> is <code>TRUE</code>.</p>
 */
export interface OnExitLifecycle {
  /**
   * @public
   * <p>Specifies the <code>actions</code> that are performed when the state is exited and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  events?: Event[];
}

/**
 * @public
 * <p>Specifies the actions performed and the next state entered when a <code>condition</code>
 *       evaluates to TRUE.</p>
 */
export interface TransitionEvent {
  /**
   * @public
   * <p>The name of the transition event.</p>
   */
  eventName: string | undefined;

  /**
   * @public
   * <p>Required. A Boolean expression that when TRUE causes the actions to be performed and the
   *         <code>nextState</code> to be entered.</p>
   */
  condition: string | undefined;

  /**
   * @public
   * <p>The actions to be performed.</p>
   */
  actions?: Action[];

  /**
   * @public
   * <p>The next state to enter.</p>
   */
  nextState: string | undefined;
}

/**
 * @public
 * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
 */
export interface OnInputLifecycle {
  /**
   * @public
   * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
   */
  events?: Event[];

  /**
   * @public
   * <p>Specifies the actions performed, and the next state entered, when a <code>condition</code>
   *       evaluates to TRUE.</p>
   */
  transitionEvents?: TransitionEvent[];
}

/**
 * @public
 * <p>Information that defines a state of a detector.</p>
 */
export interface State {
  /**
   * @public
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * @public
   * <p>When an input is received and the <code>condition</code> is TRUE, perform the specified
   *         <code>actions</code>.</p>
   */
  onInput?: OnInputLifecycle;

  /**
   * @public
   * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
   *       is TRUE.</p>
   */
  onEnter?: OnEnterLifecycle;

  /**
   * @public
   * <p>When exiting this state, perform these <code>actions</code> if the specified
   *         <code>condition</code> is <code>TRUE</code>.</p>
   */
  onExit?: OnExitLifecycle;
}

/**
 * @public
 * <p>Information that defines how a detector operates.</p>
 */
export interface DetectorModelDefinition {
  /**
   * @public
   * <p>Information about the states of the detector.</p>
   */
  states: State[] | undefined;

  /**
   * @public
   * <p>The state that is entered at the creation of each detector (instance).</p>
   */
  initialStateName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationMethod = {
  BATCH: "BATCH",
  SERIAL: "SERIAL",
} as const;

/**
 * @public
 */
export type EvaluationMethod = (typeof EvaluationMethod)[keyof typeof EvaluationMethod];

/**
 * @public
 */
export interface CreateDetectorModelRequest {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * @public
   * <p>Information that defines how the detectors operate.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * @public
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * @public
   * <p>The input attribute key used to identify a device or system to create a detector (an
   *       instance of the detector model) and then to route each input received to the appropriate
   *       detector (instance). This parameter uses a JSON-path expression in the message payload of each
   *       input to specify the attribute-value pair that is used to identify the device associated with
   *       the input.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Metadata that can be used to manage the detector model.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

/**
 * @public
 * @enum
 */
export const DetectorModelVersionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  PAUSED: "PAUSED",
} as const;

/**
 * @public
 */
export type DetectorModelVersionStatus = (typeof DetectorModelVersionStatus)[keyof typeof DetectorModelVersionStatus];

/**
 * @public
 * <p>Information about how the detector model is configured.</p>
 */
export interface DetectorModelConfiguration {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * @public
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * @public
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * @public
   * <p>The ARN of the detector model.</p>
   */
  detectorModelArn?: string;

  /**
   * @public
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The status of the detector model.</p>
   */
  status?: DetectorModelVersionStatus | string;

  /**
   * @public
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
   * @public
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

/**
 * @public
 */
export interface CreateDetectorModelResponse {
  /**
   * @public
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

/**
 * @public
 * <p>The definition of the input.</p>
 */
export interface InputDefinition {
  /**
   * @public
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are
   *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
   *       message contains a JSON payload, and those attributes (and their paired values) specified here
   *       are available for use in the <code>condition</code> expressions used by detectors that monitor
   *       this input. </p>
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 */
export interface CreateInputRequest {
  /**
   * @public
   * <p>The name you want to give to the input.</p>
   */
  inputName: string | undefined;

  /**
   * @public
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * @public
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;

  /**
   * @public
   * <p>Metadata that can be used to manage the input.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const InputStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type InputStatus = (typeof InputStatus)[keyof typeof InputStatus];

/**
 * @public
 * <p>Information about the configuration of an input.</p>
 */
export interface InputConfiguration {
  /**
   * @public
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;

  /**
   * @public
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * @public
   * <p>The ARN of the input.</p>
   */
  inputArn: string | undefined;

  /**
   * @public
   * <p>The time the input was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date | undefined;

  /**
   * @public
   * <p>The status of the input.</p>
   */
  status: InputStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateInputResponse {
  /**
   * @public
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}

/**
 * @public
 */
export interface DeleteAlarmModelRequest {
  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmModelResponse {}

/**
 * @public
 * <p>The resource was not found.</p>
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
export interface DeleteDetectorModelRequest {
  /**
   * @public
   * <p>The name of the detector model to be deleted.</p>
   */
  detectorModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDetectorModelResponse {}

/**
 * @public
 */
export interface DeleteInputRequest {
  /**
   * @public
   * <p>The name of the input to delete.</p>
   */
  inputName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInputResponse {}

/**
 * @public
 */
export interface DescribeAlarmModelRequest {
  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * @public
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;
}

/**
 * @public
 */
export interface DescribeAlarmModelResponse {
  /**
   * @public
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * @public
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * @public
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
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
   * @public
   * <p>
   *       Contains information about the status of the alarm model.
   *     </p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * @public
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   */
  key?: string;

  /**
   * @public
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * @public
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule?: AlarmRule;

  /**
   * @public
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * @public
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * @public
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

/**
 * @public
 */
export interface DescribeDetectorModelRequest {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * @public
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;
}

/**
 * @public
 * <p>Information about the detector model.</p>
 */
export interface DetectorModel {
  /**
   * @public
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: DetectorModelDefinition;

  /**
   * @public
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

/**
 * @public
 */
export interface DescribeDetectorModelResponse {
  /**
   * @public
   * <p>Information about the detector model.</p>
   */
  detectorModel?: DetectorModel;
}

/**
 * @public
 */
export interface DescribeDetectorModelAnalysisRequest {
  /**
   * @public
   * <p>The ID of the analysis result that you want to retrieve.</p>
   */
  analysisId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorModelAnalysisResponse {
  /**
   * @public
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

/**
 * @public
 */
export interface DescribeInputRequest {
  /**
   * @public
   * <p>The name of the input.</p>
   */
  inputName: string | undefined;
}

/**
 * @public
 * <p>Information about the input.</p>
 */
export interface Input {
  /**
   * @public
   * <p>Information about the configuration of an input.</p>
   */
  inputConfiguration?: InputConfiguration;

  /**
   * @public
   * <p>The definition of the input.</p>
   */
  inputDefinition?: InputDefinition;
}

/**
 * @public
 */
export interface DescribeInputResponse {
  /**
   * @public
   * <p>Information about the input.</p>
   */
  input?: Input;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {}

/**
 * @public
 * <p>The detector model and the specific detectors (instances) for which the logging level is
 *       given.</p>
 */
export interface DetectorDebugOption {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string | undefined;

  /**
   * @public
   * <p>The value of the input attribute key used to create the detector (the instance of the
   *       detector model).</p>
   */
  keyValue?: string;
}

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
} as const;

/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * <p>The values of the AWS IoT Events logging options.</p>
 */
export interface LoggingOptions {
  /**
   * @public
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The logging level.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * @public
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>Information that identifies those detector models and their detectors (instances) for
   *       which the logging level is given.</p>
   */
  detectorDebugOptions?: DetectorDebugOption[];
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * @public
   * <p>The current settings of the AWS IoT Events logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

/**
 * @public
 * <p>The requested operation is not supported.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}

/**
 * @public
 * <p>Information about the detector model.</p>
 */
export interface DetectorModelSummary {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * @public
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * @public
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;
}

/**
 * @public
 * <p>Information about the detector model version.</p>
 */
export interface DetectorModelVersionSummary {
  /**
   * @public
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * @public
   * <p>The ID of the detector model version.</p>
   */
  detectorModelVersion?: string;

  /**
   * @public
   * <p>The ARN of the detector model version.</p>
   */
  detectorModelArn?: string;

  /**
   * @public
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The status of the detector model version.</p>
   */
  status?: DetectorModelVersionStatus | string;

  /**
   * @public
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

/**
 * @public
 */
export interface GetDetectorModelAnalysisResultsRequest {
  /**
   * @public
   * <p>The ID of the analysis result that you want to retrieve.</p>
   */
  analysisId: string | undefined;

  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetDetectorModelAnalysisResultsResponse {
  /**
   * @public
   * <p>Contains information about one or more analysis results.</p>
   */
  analysisResults?: AnalysisResult[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *       The identifier of the input routed to AWS IoT Events.
 *     </p>
 */
export interface IotEventsInputIdentifier {
  /**
   * @public
   * <p>
   *       The name of the input routed to AWS IoT Events.
   *     </p>
   */
  inputName: string | undefined;
}

/**
 * @public
 * <p>
 *       The asset model property identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 */
export interface IotSiteWiseAssetModelPropertyIdentifier {
  /**
   * @public
   * <p>
   *       The ID of the AWS IoT SiteWise asset model.
   *     </p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>
   *       The ID of the AWS IoT SiteWise asset property.
   *     </p>
   */
  propertyId: string | undefined;
}

/**
 * @public
 * <p>
 *       The identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 */
export interface IotSiteWiseInputIdentifier {
  /**
   * @public
   * <p>
   *       The identifier of the AWS IoT SiteWise asset model property.
   *     </p>
   */
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}

/**
 * @public
 * <p>
 *       The identifer of the input.
 *     </p>
 */
export interface InputIdentifier {
  /**
   * @public
   * <p>
   *       The identifier of the input routed to AWS IoT Events.
   *     </p>
   */
  iotEventsInputIdentifier?: IotEventsInputIdentifier;

  /**
   * @public
   * <p>
   *       The identifer of the input routed from AWS IoT SiteWise.
   *     </p>
   */
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
}

/**
 * @public
 * <p>Information about the input.</p>
 */
export interface InputSummary {
  /**
   * @public
   * <p>The name of the input.</p>
   */
  inputName?: string;

  /**
   * @public
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * @public
   * <p>The ARN of the input.</p>
   */
  inputArn?: string;

  /**
   * @public
   * <p>The time the input was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The status of the input.</p>
   */
  status?: InputStatus | string;
}

/**
 * @public
 */
export interface ListAlarmModelsRequest {
  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAlarmModelsResponse {
  /**
   * @public
   * <p>A list that summarizes each alarm model.</p>
   */
  alarmModelSummaries?: AlarmModelSummary[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAlarmModelVersionsRequest {
  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAlarmModelVersionsResponse {
  /**
   * @public
   * <p>A list that summarizes each alarm model version.</p>
   */
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDetectorModelsRequest {
  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDetectorModelsResponse {
  /**
   * @public
   * <p>Summary information about the detector models.</p>
   */
  detectorModelSummaries?: DetectorModelSummary[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDetectorModelVersionsRequest {
  /**
   * @public
   * <p>The name of the detector model whose versions are returned.</p>
   */
  detectorModelName: string | undefined;

  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDetectorModelVersionsResponse {
  /**
   * @public
   * <p>Summary information about the detector model versions.</p>
   */
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListInputRoutingsRequest {
  /**
   * @public
   * <p>
   *       The identifer of the routed input.
   *     </p>
   */
  inputIdentifier: InputIdentifier | undefined;

  /**
   * @public
   * <p>
   *       The maximum number of results to be returned per request.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       The token that you can use to return the next set of results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *       Contains information about the routed resource.
 *     </p>
 */
export interface RoutedResource {
  /**
   * @public
   * <p>
   *       The name of the routed resource.
   *     </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *       The ARN of the routed resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
   *     </p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListInputRoutingsResponse {
  /**
   * @public
   * <p>
   *       Summary information about the routed resources.
   *     </p>
   */
  routedResources?: RoutedResource[];

  /**
   * @public
   * <p>
   *       The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListInputsRequest {
  /**
   * @public
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListInputsResponse {
  /**
   * @public
   * <p>Summary information about the inputs.</p>
   */
  inputSummaries?: InputSummary[];

  /**
   * @public
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * @public
   * <p>The new values of the AWS IoT Events logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface StartDetectorModelAnalysisRequest {
  /**
   * @public
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;
}

/**
 * @public
 */
export interface StartDetectorModelAnalysisResponse {
  /**
   * @public
   * <p>The ID that you can use to retrieve the analysis result.</p>
   */
  analysisId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The new or modified tags for the resource.</p>
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags to be removed from the resource.</p>
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
export interface UpdateAlarmModelRequest {
  /**
   * @public
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * @public
   * <p>The description of the alarm model.</p>
   */
  alarmModelDescription?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * @public
   * <p>Defines when your alarm is invoked.</p>
   */
  alarmRule: AlarmRule | undefined;

  /**
   * @public
   * <p>Contains information about one or more notification actions.</p>
   */
  alarmNotification?: AlarmNotification;

  /**
   * @public
   * <p>Contains information about one or more alarm actions.</p>
   */
  alarmEventActions?: AlarmEventActions;

  /**
   * @public
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  alarmCapabilities?: AlarmCapabilities;
}

/**
 * @public
 */
export interface UpdateAlarmModelResponse {
  /**
   * @public
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   */
  alarmModelArn?: string;

  /**
   * @public
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * @public
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateDetectorModelRequest {
  /**
   * @public
   * <p>The name of the detector model that is updated.</p>
   */
  detectorModelName: string | undefined;

  /**
   * @public
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * @public
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * @public
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   */
  evaluationMethod?: EvaluationMethod | string;
}

/**
 * @public
 */
export interface UpdateDetectorModelResponse {
  /**
   * @public
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: DetectorModelConfiguration;
}

/**
 * @public
 */
export interface UpdateInputRequest {
  /**
   * @public
   * <p>The name of the input you want to update.</p>
   */
  inputName: string | undefined;

  /**
   * @public
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * @public
   * <p>The definition of the input.</p>
   */
  inputDefinition: InputDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateInputResponse {
  /**
   * @public
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: InputConfiguration;
}
