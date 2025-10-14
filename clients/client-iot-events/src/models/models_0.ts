// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTEventsServiceException as __BaseException } from "./IoTEventsServiceException";

/**
 * <p>Specifies whether to get notified for alarm state changes.</p>
 * @public
 */
export interface AcknowledgeFlow {
  /**
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>TRUE</code>, you
   *       receive a notification when the alarm state changes. You must choose to acknowledge the
   *       notification before the alarm state can return to <code>NORMAL</code>. If <code>FALSE</code>,
   *       you won't receive notifications. The alarm automatically changes to the <code>NORMAL</code>
   *       state when the input property value returns to the specified range.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Information needed to clear the timer.</p>
 * @public
 */
export interface ClearTimerAction {
  /**
   * <p>The name of the timer to clear.</p>
   * @public
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
 * <p>Information needed to configure the payload.</p>
 *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
 *       contains all attribute-value pairs that have the information about the detector model instance
 *       and the event triggered the action. To configure the action payload, you can use
 *         <code>contentExpression</code>.</p>
 * @public
 */
export interface Payload {
  /**
   * <p>The content of the payload. You can use a string expression that includes quoted strings
   *         (<code>'<string>'</code>), variables (<code>$variable.<variable-name></code>),
   *       input values (<code>$input.<input-name>.<path-to-datum></code>), string
   *       concatenations, and quoted strings that contain <code>$\{\}</code> as the content. The
   *       recommended maximum size of a content expression is 1 KB.</p>
   * @public
   */
  contentExpression: string | undefined;

  /**
   * <p>The value of the payload type can be either <code>STRING</code> or
   *       <code>JSON</code>.</p>
   * @public
   */
  type: PayloadType | undefined;
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
 * @public
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
   * @public
   */
  hashKeyType?: string | undefined;

  /**
   * <p>The name of the hash key (also called the partition key). The <code>hashKeyField</code>
   *       value must match the partition key of the target DynamoDB table.</p>
   * @public
   */
  hashKeyField: string | undefined;

  /**
   * <p>The value of the hash key (also called the partition key).</p>
   * @public
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
   * @public
   */
  rangeKeyType?: string | undefined;

  /**
   * <p>The name of the range key (also called the sort key). The <code>rangeKeyField</code> value
   *       must match the sort key of the target DynamoDB table. </p>
   * @public
   */
  rangeKeyField?: string | undefined;

  /**
   * <p>The value of the range key (also called the sort key).</p>
   * @public
   */
  rangeKeyValue?: string | undefined;

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
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The name of the DynamoDB column that receives the action payload.</p>
   *          <p>If you don't specify this parameter, the name of the DynamoDB column is
   *       <code>payload</code>.</p>
   * @public
   */
  payloadField?: string | undefined;

  /**
   * <p>The name of the DynamoDB table. The <code>tableName</code> value must match the table name of
   *       the target DynamoDB table. </p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   * @public
   */
  payload?: Payload | undefined;
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
 * @public
 */
export interface DynamoDBv2Action {
  /**
   * <p>The name of the DynamoDB table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>Information needed to configure the payload.</p>
   *          <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload
   *       contains all attribute-value pairs that have the information about the detector model instance
   *       and the event triggered the action. To configure the action payload, you can use
   *         <code>contentExpression</code>.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
 * @public
 */
export interface FirehoseAction {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream where the data is written.</p>
   * @public
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>A character separator that is used to separate records written to the Kinesis Data
   *       Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows
   *       newline), ',' (comma).</p>
   * @public
   */
  separator?: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery
   *       stream.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 * @public
 */
export interface IotEventsAction {
  /**
   * <p>The name of the AWS IoT Events input where the data is sent.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to an AWS IoT Events input.</p>
   * @public
   */
  payload?: Payload | undefined;
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
 * @public
 */
export interface AssetPropertyTimestamp {
  /**
   * <p>The timestamp, in seconds, in the Unix epoch format. The valid range is between
   *       1-31556889864403199.</p>
   * @public
   */
  timeInSeconds: string | undefined;

  /**
   * <p>The nanosecond offset converted from <code>timeInSeconds</code>. The valid range is
   *       between 0-999999999.</p>
   * @public
   */
  offsetInNanos?: string | undefined;
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
 * @public
 */
export interface AssetPropertyVariant {
  /**
   * <p>The asset property value is a string. You must use an expression, and the evaluated result
   *       should be a string.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>The asset property value is an integer. You must use an expression, and the evaluated
   *       result should be an integer.</p>
   * @public
   */
  integerValue?: string | undefined;

  /**
   * <p>The asset property value is a double. You must use an expression, and the evaluated result
   *       should be a double.</p>
   * @public
   */
  doubleValue?: string | undefined;

  /**
   * <p>The asset property value is a Boolean value that must be <code>'TRUE'</code> or
   *         <code>'FALSE'</code>. You must use an expression, and the evaluated result should be a
   *       Boolean value.</p>
   * @public
   */
  booleanValue?: string | undefined;
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
 * @public
 */
export interface AssetPropertyValue {
  /**
   * <p>The value to send to an asset property.</p>
   * @public
   */
  value?: AssetPropertyVariant | undefined;

  /**
   * <p>The timestamp associated with the asset property value. The default is the current event
   *       time.</p>
   * @public
   */
  timestamp?: AssetPropertyTimestamp | undefined;

  /**
   * <p>The quality of the asset property value. The value must be <code>'GOOD'</code>,
   *         <code>'BAD'</code>, or <code>'UNCERTAIN'</code>.</p>
   * @public
   */
  quality?: string | undefined;
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
 * @public
 */
export interface IotSiteWiseAction {
  /**
   * <p>A unique identifier for this entry. You can use the entry ID to track which data entry
   *       causes an error in case of failure. The default is a new unique identifier.</p>
   * @public
   */
  entryId?: string | undefined;

  /**
   * <p>The ID of the asset that has the specified property.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias of the asset property.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The value to send to the asset property. This value contains timestamp, quality, and value
   *       (TQV) information. </p>
   * @public
   */
  propertyValue?: AssetPropertyValue | undefined;
}

/**
 * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
 * @public
 */
export interface IotTopicPublishAction {
  /**
   * <p>The MQTT topic of the message. You can use a string expression that includes variables
   *         (<code>$variable.<variable-name></code>) and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the topic string.</p>
   * @public
   */
  mqttTopic: string | undefined;

  /**
   * <p>You can configure the action payload when you publish a message to an AWS IoT Core
   *       topic.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>Calls a Lambda function, passing in information about the detector model instance and the
 *       event that triggered the action.</p>
 * @public
 */
export interface LambdaAction {
  /**
   * <p>The ARN of the Lambda function that is executed.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message to a Lambda function.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>Information required to reset the timer. The timer is reset to the previously evaluated
 *       result of the duration. The duration expression isn't reevaluated when you reset the
 *       timer.</p>
 * @public
 */
export interface ResetTimerAction {
  /**
   * <p>The name of the timer to reset.</p>
   * @public
   */
  timerName: string | undefined;
}

/**
 * <p>Information needed to set the timer.</p>
 * @public
 */
export interface SetTimerAction {
  /**
   * <p>The name of the timer.</p>
   * @public
   */
  timerName: string | undefined;

  /**
   * <p>The number of seconds until the timer expires. The minimum value is 60 seconds to ensure
   *       accuracy. The maximum value is 31622400 seconds. </p>
   *
   * @deprecated seconds is deprecated. You can use durationExpression for SetTimerAction. The value of seconds can be used as a string expression for durationExpression.
   * @public
   */
  seconds?: number | undefined;

  /**
   * <p>The duration of the timer, in seconds. You can use a string expression that includes
   *       numbers, variables (<code>$variable.<variable-name></code>), and input values
   *         (<code>$input.<input-name>.<path-to-datum></code>) as the duration. The range of
   *       the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds.
   *       The evaluated result of the duration is rounded down to the nearest whole number. </p>
   * @public
   */
  durationExpression?: string | undefined;
}

/**
 * <p>Information about the variable and its new value.</p>
 * @public
 */
export interface SetVariableAction {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  variableName: string | undefined;

  /**
   * <p>The new value of the variable.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Information required to publish the Amazon SNS message.</p>
 * @public
 */
export interface SNSTopicPublishAction {
  /**
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>You can configure the action payload when you send a message as an Amazon SNS push
   *       notification.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>Sends information about the detector model instance and the event that triggered the
 *       action to an Amazon SQS queue.</p>
 * @public
 */
export interface SqsAction {
  /**
   * <p>The URL of the SQS queue where the data is written.</p>
   * @public
   */
  queueUrl: string | undefined;

  /**
   * <p>Set this to TRUE if you want the data to be base-64 encoded before it is written to the
   *       queue. Otherwise, set this to FALSE.</p>
   * @public
   */
  useBase64?: boolean | undefined;

  /**
   * <p>You can configure the action payload when you send a message to an Amazon SQS
   *       queue.</p>
   * @public
   */
  payload?: Payload | undefined;
}

/**
 * <p>An action to be performed when the <code>condition</code> is TRUE.</p>
 * @public
 */
export interface Action {
  /**
   * <p>Sets a variable to a specified value.</p>
   * @public
   */
  setVariable?: SetVariableAction | undefined;

  /**
   * <p>Sends an Amazon SNS message.</p>
   * @public
   */
  sns?: SNSTopicPublishAction | undefined;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   * @public
   */
  iotTopicPublish?: IotTopicPublishAction | undefined;

  /**
   * <p>Information needed to set the timer.</p>
   * @public
   */
  setTimer?: SetTimerAction | undefined;

  /**
   * <p>Information needed to clear the timer.</p>
   * @public
   */
  clearTimer?: ClearTimerAction | undefined;

  /**
   * <p>Information needed to reset the timer.</p>
   * @public
   */
  resetTimer?: ResetTimerAction | undefined;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   * @public
   */
  lambda?: LambdaAction | undefined;

  /**
   * <p>Sends AWS IoT Events input, which passes information about the detector model instance and the
   *       event that triggered the action.</p>
   * @public
   */
  iotEvents?: IotEventsAction | undefined;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   * @public
   */
  sqs?: SqsAction | undefined;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  firehose?: FirehoseAction | undefined;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the
   *       DynamoDB table receives all attribute-value pairs in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   * @public
   */
  dynamoDB?: DynamoDBAction | undefined;

  /**
   * <p>Writes to the DynamoDB table that you created. The default action payload contains all
   *       attribute-value pairs that have the information about the detector model instance and the
   *       event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of
   *       the DynamoDB table receives one attribute-value pair in the payload that you specify. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html">Actions</a> in
   *         <i>AWS IoT Events Developer Guide</i>.</p>
   * @public
   */
  dynamoDBv2?: DynamoDBv2Action | undefined;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an asset property in AWS IoT SiteWise .</p>
   * @public
   */
  iotSiteWise?: IotSiteWiseAction | undefined;
}

/**
 * <p>Specifies one of the following actions to receive notifications when the alarm state
 *       changes.</p>
 * @public
 */
export interface AlarmAction {
  /**
   * <p>Information required to publish the Amazon SNS message.</p>
   * @public
   */
  sns?: SNSTopicPublishAction | undefined;

  /**
   * <p>Information required to publish the MQTT message through the AWS IoT message broker.</p>
   * @public
   */
  iotTopicPublish?: IotTopicPublishAction | undefined;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   * @public
   */
  lambda?: LambdaAction | undefined;

  /**
   * <p>Sends an AWS IoT Events input, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   * @public
   */
  iotEvents?: IotEventsAction | undefined;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon SQS queue.</p>
   * @public
   */
  sqs?: SqsAction | undefined;

  /**
   * <p>Sends information about the detector model instance and the event that triggered the
   *       action to an Amazon Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  firehose?: FirehoseAction | undefined;

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
   * @public
   */
  dynamoDB?: DynamoDBAction | undefined;

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
   * @public
   */
  dynamoDBv2?: DynamoDBv2Action | undefined;

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
   * @public
   */
  iotSiteWise?: IotSiteWiseAction | undefined;
}

/**
 * <p>Specifies the default alarm state.
 * The configuration applies to all alarms that were created based on this alarm model.</p>
 * @public
 */
export interface InitializationConfiguration {
  /**
   * <p>The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>FALSE</code>, all
   *       alarm instances created based on the alarm model are activated. The default value is
   *         <code>TRUE</code>.</p>
   * @public
   */
  disabledOnInitialization: boolean | undefined;
}

/**
 * <p>Contains the configuration information of alarm state changes.</p>
 * @public
 */
export interface AlarmCapabilities {
  /**
   * <p>Specifies the default alarm state.
   * The configuration applies to all alarms that were created based on this alarm model.</p>
   * @public
   */
  initializationConfiguration?: InitializationConfiguration | undefined;

  /**
   * <p>Specifies whether to get notified for alarm state changes.</p>
   * @public
   */
  acknowledgeFlow?: AcknowledgeFlow | undefined;
}

/**
 * <p>Contains information about one or more alarm actions.</p>
 * @public
 */
export interface AlarmEventActions {
  /**
   * <p>Specifies one or more supported actions to receive notifications when the alarm state
   *       changes.</p>
   * @public
   */
  alarmActions?: AlarmAction[] | undefined;
}

/**
 * <p>Contains a summary of an alarm model.</p>
 * @public
 */
export interface AlarmModelSummary {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The description of the alarm model.</p>
   * @public
   */
  alarmModelDescription?: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName?: string | undefined;
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
 * <p>Contains a summary of an alarm model version.</p>
 * @public
 */
export interface AlarmModelVersionSummary {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName?: string | undefined;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  alarmModelArn?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

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
   * @public
   */
  status?: AlarmModelVersionStatus | undefined;

  /**
   * <p>
   *       Contains information about the status of the alarm model version.
   *     </p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * <p>Specifies an AWS Lambda function to manage alarm notifications.
 * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
 * @public
 */
export interface NotificationTargetActions {
  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the
   *       event that triggered the action.</p>
   * @public
   */
  lambdaAction?: LambdaAction | undefined;
}

/**
 * <p>Contains the subject and message of an email.</p>
 * @public
 */
export interface EmailContent {
  /**
   * <p>The subject of the email.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   * @public
   */
  additionalMessage?: string | undefined;
}

/**
 * <p>Contains information about your identity source in AWS Single Sign-On. For more information, see
 *       the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On
 *         User Guide</a>.</p>
 * @public
 */
export interface SSOIdentity {
  /**
   * <p>The ID of the AWS SSO identity store.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>The information that identifies the recipient.</p>
 * @public
 */
export interface RecipientDetail {
  /**
   * <p>The AWS Single Sign-On (AWS SSO) authentication information.</p>
   * @public
   */
  ssoIdentity?: SSOIdentity | undefined;
}

/**
 * <p>Contains the information of one or more recipients who receive the emails.</p>
 *          <important>
 *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
 *          </important>
 * @public
 */
export interface EmailRecipients {
  /**
   * <p>Specifies one or more recipients who receive the email.</p>
   * @public
   */
  to?: RecipientDetail[] | undefined;
}

/**
 * <p>Contains the configuration information of email notifications.</p>
 * @public
 */
export interface EmailConfiguration {
  /**
   * <p>The email address that sends emails.</p>
   *          <important>
   *             <p>If you use the AWS IoT Events managed AWS Lambda function to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify
   *           the email address that sends emails in Amazon SES</a>.</p>
   *          </important>
   * @public
   */
  from: string | undefined;

  /**
   * <p>Contains the subject and message of an email.</p>
   * @public
   */
  content?: EmailContent | undefined;

  /**
   * <p>Contains the information of one or more recipients who receive the emails.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p>
   *          </important>
   * @public
   */
  recipients: EmailRecipients | undefined;
}

/**
 * <p>Contains the configuration information of SMS notifications.</p>
 * @public
 */
export interface SMSConfiguration {
  /**
   * <p>The sender ID.</p>
   * @public
   */
  senderId?: string | undefined;

  /**
   * <p>The message that you want to send. The message can be up to 200 characters.</p>
   * @public
   */
  additionalMessage?: string | undefined;

  /**
   * <p>Specifies one or more recipients who receive the message.</p>
   *          <important>
   *             <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive SMS messages to your AWS SSO store</a>.</p>
   *          </important>
   * @public
   */
  recipients: RecipientDetail[] | undefined;
}

/**
 * <p>Contains the notification settings of an alarm model.
 * The settings apply to all alarms that were created based on this alarm model.</p>
 * @public
 */
export interface NotificationAction {
  /**
   * <p>Specifies an AWS Lambda function to manage alarm notifications.
   * You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>.</p>
   * @public
   */
  action: NotificationTargetActions | undefined;

  /**
   * <p>Contains the configuration information of SMS notifications.</p>
   * @public
   */
  smsConfigurations?: SMSConfiguration[] | undefined;

  /**
   * <p>Contains the configuration information of email notifications.</p>
   * @public
   */
  emailConfigurations?: EmailConfiguration[] | undefined;
}

/**
 * <p>Contains information about one or more notification actions.</p>
 * @public
 */
export interface AlarmNotification {
  /**
   * <p>Contains the notification settings of an alarm model.
   * The settings apply to all alarms that were created based on this alarm model.</p>
   * @public
   */
  notificationActions?: NotificationAction[] | undefined;
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
 * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
 * @public
 */
export interface SimpleRule {
  /**
   * <p>The value on the left side of the comparison operator. You can specify an AWS IoT Events input
   *       attribute as an input property.</p>
   * @public
   */
  inputProperty: string | undefined;

  /**
   * <p>The comparison operator.</p>
   * @public
   */
  comparisonOperator: ComparisonOperator | undefined;

  /**
   * <p>The value on the right side of the comparison operator. You can enter a number or specify
   *       an AWS IoT Events input attribute.</p>
   * @public
   */
  threshold: string | undefined;
}

/**
 * <p>Defines when your alarm is invoked.</p>
 * @public
 */
export interface AlarmRule {
  /**
   * <p>A rule that compares an input property value to a threshold value with a comparison operator.</p>
   * @public
   */
  simpleRule?: SimpleRule | undefined;
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
 * <p>Contains information that you can use to locate the field in your detector model that the
 *       analysis result references.</p>
 * @public
 */
export interface AnalysisResultLocation {
  /**
   * <p>A <a href="https://github.com/json-path/JsonPath">JsonPath</a> expression that
   *       identifies the error field in your detector model.</p>
   * @public
   */
  path?: string | undefined;
}

/**
 * <p>Contains the result of the analysis.</p>
 * @public
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
   * @public
   */
  type?: string | undefined;

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
   * @public
   */
  level?: AnalysisResultLevel | undefined;

  /**
   * <p>Contains additional information about the analysis result.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Contains one or more locations that you can use to locate the fields in your detector
   *       model that the analysis result references.</p>
   * @public
   */
  locations?: AnalysisResultLocation[] | undefined;
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
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are
 *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
 *       message contains a JSON payload. Those attributes (and their paired values) specified here are
 *       available for use in the <code>condition</code> expressions used by detectors. </p>
 * @public
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
   * @public
   */
  jsonPath: string | undefined;
}

/**
 * <p>Metadata that can be used to manage the resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAlarmModelRequest {
  /**
   * <p>A unique name that helps you identify the alarm model. You can't change this name after
   *       you create the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>A description that tells you what the alarm model detects.</p>
   * @public
   */
  alarmModelDescription?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the alarm model. The tags help you
   *       manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events
   *         resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
   *          <p>You can create up to 50 tags for one alarm model.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   * @public
   */
  severity?: number | undefined;

  /**
   * <p>Defines when your alarm is invoked.</p>
   * @public
   */
  alarmRule: AlarmRule | undefined;

  /**
   * <p>Contains information about one or more notification actions.</p>
   * @public
   */
  alarmNotification?: AlarmNotification | undefined;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   * @public
   */
  alarmEventActions?: AlarmEventActions | undefined;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   * @public
   */
  alarmCapabilities?: AlarmCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  alarmModelArn?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

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
   * @public
   */
  status?: AlarmModelVersionStatus | undefined;
}

/**
 * <p>An internal failure occurred.</p>
 * @public
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
 * <p>The request was invalid.</p>
 * @public
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
 * <p>A limit was exceeded.</p>
 * @public
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
 * <p>The resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

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
 * <p>The resource is in use.</p>
 * @public
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
 * <p>The service is currently unavailable.</p>
 * @public
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
 * <p>The request could not be completed due to throttling.</p>
 * @public
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
 * <p>Specifies the <code>actions</code> to be performed when the <code>condition</code>
 *       evaluates to TRUE.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The name of the event.</p>
   * @public
   */
  eventName: string | undefined;

  /**
   * <p>Optional. The Boolean expression that, when TRUE, causes the <code>actions</code> to be
   *       performed. If not present, the actions are performed (=TRUE). If the expression result is not
   *       a Boolean value, the actions are not performed (=FALSE).</p>
   * @public
   */
  condition?: string | undefined;

  /**
   * <p>The actions to be performed.</p>
   * @public
   */
  actions?: Action[] | undefined;
}

/**
 * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
 *       is TRUE.</p>
 * @public
 */
export interface OnEnterLifecycle {
  /**
   * <p>Specifies the actions that are performed when the state is entered and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   * @public
   */
  events?: Event[] | undefined;
}

/**
 * <p>When exiting this state, perform these <code>actions</code> if the specified
 *         <code>condition</code> is <code>TRUE</code>.</p>
 * @public
 */
export interface OnExitLifecycle {
  /**
   * <p>Specifies the <code>actions</code> that are performed when the state is exited and the
   *         <code>condition</code> is <code>TRUE</code>.</p>
   * @public
   */
  events?: Event[] | undefined;
}

/**
 * <p>Specifies the actions performed and the next state entered when a <code>condition</code>
 *       evaluates to TRUE.</p>
 * @public
 */
export interface TransitionEvent {
  /**
   * <p>The name of the transition event.</p>
   * @public
   */
  eventName: string | undefined;

  /**
   * <p>Required. A Boolean expression that when TRUE causes the actions to be performed and the
   *         <code>nextState</code> to be entered.</p>
   * @public
   */
  condition: string | undefined;

  /**
   * <p>The actions to be performed.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>The next state to enter.</p>
   * @public
   */
  nextState: string | undefined;
}

/**
 * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
 * @public
 */
export interface OnInputLifecycle {
  /**
   * <p>Specifies the actions performed when the <code>condition</code> evaluates to TRUE.</p>
   * @public
   */
  events?: Event[] | undefined;

  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>condition</code>
   *       evaluates to TRUE.</p>
   * @public
   */
  transitionEvents?: TransitionEvent[] | undefined;
}

/**
 * <p>Information that defines a state of a detector.</p>
 * @public
 */
export interface State {
  /**
   * <p>The name of the state.</p>
   * @public
   */
  stateName: string | undefined;

  /**
   * <p>When an input is received and the <code>condition</code> is TRUE, perform the specified
   *         <code>actions</code>.</p>
   * @public
   */
  onInput?: OnInputLifecycle | undefined;

  /**
   * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code>
   *       is TRUE.</p>
   * @public
   */
  onEnter?: OnEnterLifecycle | undefined;

  /**
   * <p>When exiting this state, perform these <code>actions</code> if the specified
   *         <code>condition</code> is <code>TRUE</code>.</p>
   * @public
   */
  onExit?: OnExitLifecycle | undefined;
}

/**
 * <p>Information that defines how a detector operates.</p>
 * @public
 */
export interface DetectorModelDefinition {
  /**
   * <p>Information about the states of the detector.</p>
   * @public
   */
  states: State[] | undefined;

  /**
   * <p>The state that is entered at the creation of each detector (instance).</p>
   * @public
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
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information that defines how the detectors operate.</p>
   * @public
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   * @public
   */
  detectorModelDescription?: string | undefined;

  /**
   * <p>The input attribute key used to identify a device or system to create a detector (an
   *       instance of the detector model) and then to route each input received to the appropriate
   *       detector (instance). This parameter uses a JSON-path expression in the message payload of each
   *       input to specify the attribute-value pair that is used to identify the device associated with
   *       the input.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the detector model.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   * @public
   */
  evaluationMethod?: EvaluationMethod | undefined;
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
 * <p>Information about how the detector model is configured.</p>
 * @public
 */
export interface DetectorModelConfiguration {
  /**
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName?: string | undefined;

  /**
   * <p>The version of the detector model.</p>
   * @public
   */
  detectorModelVersion?: string | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   * @public
   */
  detectorModelDescription?: string | undefined;

  /**
   * <p>The ARN of the detector model.</p>
   * @public
   */
  detectorModelArn?: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The time the detector model was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the detector model was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The status of the detector model.</p>
   * @public
   */
  status?: DetectorModelVersionStatus | undefined;

  /**
   * <p>The value used to identify a detector instance. When a device or system sends input, a new
   *       detector instance with a unique key value is created. AWS IoT Events can continue to route input to its
   *       corresponding detector instance based on this identifying information. </p>
   *          <p>This parameter uses a JSON-path expression to select the attribute-value pair in the
   *       message payload that is used for identification. To route the message to the correct detector
   *       instance, the device must send a message payload that contains the same
   *       attribute-value.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   * @public
   */
  evaluationMethod?: EvaluationMethod | undefined;
}

/**
 * @public
 */
export interface CreateDetectorModelResponse {
  /**
   * <p>Information about how the detector model is configured.</p>
   * @public
   */
  detectorModelConfiguration?: DetectorModelConfiguration | undefined;
}

/**
 * <p>The definition of the input.</p>
 * @public
 */
export interface InputDefinition {
  /**
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are
   *       derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such
   *       message contains a JSON payload, and those attributes (and their paired values) specified here
   *       are available for use in the <code>condition</code> expressions used by detectors that monitor
   *       this input. </p>
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 */
export interface CreateInputRequest {
  /**
   * <p>The name you want to give to the input.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   * @public
   */
  inputDescription?: string | undefined;

  /**
   * <p>The definition of the input.</p>
   * @public
   */
  inputDefinition: InputDefinition | undefined;

  /**
   * <p>Metadata that can be used to manage the input.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
 * <p>Information about the configuration of an input.</p>
 * @public
 */
export interface InputConfiguration {
  /**
   * <p>The name of the input.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   * @public
   */
  inputDescription?: string | undefined;

  /**
   * <p>The ARN of the input.</p>
   * @public
   */
  inputArn: string | undefined;

  /**
   * <p>The time the input was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last time the input was updated.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The status of the input.</p>
   * @public
   */
  status: InputStatus | undefined;
}

/**
 * @public
 */
export interface CreateInputResponse {
  /**
   * <p>Information about the configuration of the input.</p>
   * @public
   */
  inputConfiguration?: InputConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmModelRequest {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmModelResponse {}

/**
 * <p>The resource was not found.</p>
 * @public
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
   * <p>The name of the detector model to be deleted.</p>
   * @public
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
   * <p>The name of the input to delete.</p>
   * @public
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
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  alarmModelArn?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

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
   * @public
   */
  status?: AlarmModelVersionStatus | undefined;

  /**
   * <p>
   *       Contains information about the status of the alarm model.
   *     </p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName?: string | undefined;

  /**
   * <p>The description of the alarm model.</p>
   * @public
   */
  alarmModelDescription?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>An input attribute used as a key to create an alarm.
   * AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a>
   * associated with this key to the alarm.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   * @public
   */
  severity?: number | undefined;

  /**
   * <p>Defines when your alarm is invoked.</p>
   * @public
   */
  alarmRule?: AlarmRule | undefined;

  /**
   * <p>Contains information about one or more notification actions.</p>
   * @public
   */
  alarmNotification?: AlarmNotification | undefined;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   * @public
   */
  alarmEventActions?: AlarmEventActions | undefined;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   * @public
   */
  alarmCapabilities?: AlarmCapabilities | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorModelRequest {
  /**
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>The version of the detector model.</p>
   * @public
   */
  detectorModelVersion?: string | undefined;
}

/**
 * <p>Information about the detector model.</p>
 * @public
 */
export interface DetectorModel {
  /**
   * <p>Information that defines how a detector operates.</p>
   * @public
   */
  detectorModelDefinition?: DetectorModelDefinition | undefined;

  /**
   * <p>Information about how the detector is configured.</p>
   * @public
   */
  detectorModelConfiguration?: DetectorModelConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorModelResponse {
  /**
   * <p>Information about the detector model.</p>
   * @public
   */
  detectorModel?: DetectorModel | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorModelAnalysisRequest {
  /**
   * <p>The ID of the analysis result that you want to retrieve.</p>
   * @public
   */
  analysisId: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  status?: AnalysisStatus | undefined;
}

/**
 * @public
 */
export interface DescribeInputRequest {
  /**
   * <p>The name of the input.</p>
   * @public
   */
  inputName: string | undefined;
}

/**
 * <p>Information about the input.</p>
 * @public
 */
export interface Input {
  /**
   * <p>Information about the configuration of an input.</p>
   * @public
   */
  inputConfiguration?: InputConfiguration | undefined;

  /**
   * <p>The definition of the input.</p>
   * @public
   */
  inputDefinition?: InputDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeInputResponse {
  /**
   * <p>Information about the input.</p>
   * @public
   */
  input?: Input | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {}

/**
 * <p>The detector model and the specific detectors (instances) for which the logging level is
 *       given.</p>
 * @public
 */
export interface DetectorDebugOption {
  /**
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input attribute key used to create the detector (the instance of the
   *       detector model).</p>
   * @public
   */
  keyValue?: string | undefined;
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
 * <p>The values of the AWS IoT Events logging options.</p>
 * @public
 */
export interface LoggingOptions {
  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The logging level.</p>
   * @public
   */
  level: LoggingLevel | undefined;

  /**
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Information that identifies those detector models and their detectors (instances) for
   *       which the logging level is given.</p>
   * @public
   */
  detectorDebugOptions?: DetectorDebugOption[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current settings of the AWS IoT Events logging options.</p>
   * @public
   */
  loggingOptions?: LoggingOptions | undefined;
}

/**
 * <p>The requested operation is not supported.</p>
 * @public
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
 * <p>Information about the detector model.</p>
 * @public
 */
export interface DetectorModelSummary {
  /**
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName?: string | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   * @public
   */
  detectorModelDescription?: string | undefined;

  /**
   * <p>The time the detector model was created.</p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * <p>Information about the detector model version.</p>
 * @public
 */
export interface DetectorModelVersionSummary {
  /**
   * <p>The name of the detector model.</p>
   * @public
   */
  detectorModelName?: string | undefined;

  /**
   * <p>The ID of the detector model version.</p>
   * @public
   */
  detectorModelVersion?: string | undefined;

  /**
   * <p>The ARN of the detector model version.</p>
   * @public
   */
  detectorModelArn?: string | undefined;

  /**
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The time the detector model version was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the detector model version was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The status of the detector model version.</p>
   * @public
   */
  status?: DetectorModelVersionStatus | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   * @public
   */
  evaluationMethod?: EvaluationMethod | undefined;
}

/**
 * @public
 */
export interface GetDetectorModelAnalysisResultsRequest {
  /**
   * <p>The ID of the analysis result that you want to retrieve.</p>
   * @public
   */
  analysisId: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetDetectorModelAnalysisResultsResponse {
  /**
   * <p>Contains information about one or more analysis results.</p>
   * @public
   */
  analysisResults?: AnalysisResult[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *       The identifier of the input routed to AWS IoT Events.
 *     </p>
 * @public
 */
export interface IotEventsInputIdentifier {
  /**
   * <p>
   *       The name of the input routed to AWS IoT Events.
   *     </p>
   * @public
   */
  inputName: string | undefined;
}

/**
 * <p>
 *       The asset model property identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 * @public
 */
export interface IotSiteWiseAssetModelPropertyIdentifier {
  /**
   * <p>
   *       The ID of the AWS IoT SiteWise asset model.
   *     </p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>
   *       The ID of the AWS IoT SiteWise asset property.
   *     </p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>
 *       The identifer of the input routed from AWS IoT SiteWise.
 *     </p>
 * @public
 */
export interface IotSiteWiseInputIdentifier {
  /**
   * <p>
   *       The identifier of the AWS IoT SiteWise asset model property.
   *     </p>
   * @public
   */
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier | undefined;
}

/**
 * <p>
 *       The identifer of the input.
 *     </p>
 * @public
 */
export interface InputIdentifier {
  /**
   * <p>
   *       The identifier of the input routed to AWS IoT Events.
   *     </p>
   * @public
   */
  iotEventsInputIdentifier?: IotEventsInputIdentifier | undefined;

  /**
   * <p>
   *       The identifer of the input routed from AWS IoT SiteWise.
   *     </p>
   * @public
   */
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier | undefined;
}

/**
 * <p>Information about the input.</p>
 * @public
 */
export interface InputSummary {
  /**
   * <p>The name of the input.</p>
   * @public
   */
  inputName?: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   * @public
   */
  inputDescription?: string | undefined;

  /**
   * <p>The ARN of the input.</p>
   * @public
   */
  inputArn?: string | undefined;

  /**
   * <p>The time the input was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the input was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The status of the input.</p>
   * @public
   */
  status?: InputStatus | undefined;
}

/**
 * @public
 */
export interface ListAlarmModelsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAlarmModelsResponse {
  /**
   * <p>A list that summarizes each alarm model.</p>
   * @public
   */
  alarmModelSummaries?: AlarmModelSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAlarmModelVersionsRequest {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAlarmModelVersionsResponse {
  /**
   * <p>A list that summarizes each alarm model version.</p>
   * @public
   */
  alarmModelVersionSummaries?: AlarmModelVersionSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorModelsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDetectorModelsResponse {
  /**
   * <p>Summary information about the detector models.</p>
   * @public
   */
  detectorModelSummaries?: DetectorModelSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorModelVersionsRequest {
  /**
   * <p>The name of the detector model whose versions are returned.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDetectorModelVersionsResponse {
  /**
   * <p>Summary information about the detector model versions.</p>
   * @public
   */
  detectorModelVersionSummaries?: DetectorModelVersionSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInputRoutingsRequest {
  /**
   * <p>
   *       The identifer of the routed input.
   *     </p>
   * @public
   */
  inputIdentifier: InputIdentifier | undefined;

  /**
   * <p>
   *       The maximum number of results to be returned per request.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       The token that you can use to return the next set of results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *       Contains information about the routed resource.
 *     </p>
 * @public
 */
export interface RoutedResource {
  /**
   * <p>
   *       The name of the routed resource.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *       The ARN of the routed resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
   *     </p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListInputRoutingsResponse {
  /**
   * <p>
   *       Summary information about the routed resources.
   *     </p>
   * @public
   */
  routedResources?: RoutedResource[] | undefined;

  /**
   * <p>
   *       The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInputsRequest {
  /**
   * <p>The token that you can use to return the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInputsResponse {
  /**
   * <p>Summary information about the inputs.</p>
   * @public
   */
  inputSummaries?: InputSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * <p>The new values of the AWS IoT Events logging options.</p>
   * @public
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface StartDetectorModelAnalysisRequest {
  /**
   * <p>Information that defines how a detector operates.</p>
   * @public
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;
}

/**
 * @public
 */
export interface StartDetectorModelAnalysisResponse {
  /**
   * <p>The ID that you can use to retrieve the analysis result.</p>
   * @public
   */
  analysisId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   * @public
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
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   * @public
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
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The description of the alarm model.</p>
   * @public
   */
  alarmModelDescription?: string | undefined;

  /**
   * <p>The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   * @public
   */
  severity?: number | undefined;

  /**
   * <p>Defines when your alarm is invoked.</p>
   * @public
   */
  alarmRule: AlarmRule | undefined;

  /**
   * <p>Contains information about one or more notification actions.</p>
   * @public
   */
  alarmNotification?: AlarmNotification | undefined;

  /**
   * <p>Contains information about one or more alarm actions.</p>
   * @public
   */
  alarmEventActions?: AlarmEventActions | undefined;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   * @public
   */
  alarmCapabilities?: AlarmCapabilities | undefined;
}

/**
 * @public
 */
export interface UpdateAlarmModelResponse {
  /**
   * <p>The time the alarm model was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The ARN of the alarm model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.</p>
   * @public
   */
  alarmModelArn?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The time the alarm model was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

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
   * @public
   */
  status?: AlarmModelVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorModelRequest {
  /**
   * <p>The name of the detector model that is updated.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>Information that defines how a detector operates.</p>
   * @public
   */
  detectorModelDefinition: DetectorModelDefinition | undefined;

  /**
   * <p>A brief description of the detector model.</p>
   * @public
   */
  detectorModelDescription?: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Information about the order in which events are evaluated and how actions are executed.
   *     </p>
   * @public
   */
  evaluationMethod?: EvaluationMethod | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorModelResponse {
  /**
   * <p>Information about how the detector model is configured.</p>
   * @public
   */
  detectorModelConfiguration?: DetectorModelConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateInputRequest {
  /**
   * <p>The name of the input you want to update.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>A brief description of the input.</p>
   * @public
   */
  inputDescription?: string | undefined;

  /**
   * <p>The definition of the input.</p>
   * @public
   */
  inputDefinition: InputDefinition | undefined;
}

/**
 * @public
 */
export interface UpdateInputResponse {
  /**
   * <p>Information about the configuration of the input.</p>
   * @public
   */
  inputConfiguration?: InputConfiguration | undefined;
}
