import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains the configuration information of an acknowledge action.</p>
 */
export interface AcknowledgeActionConfiguration {
  /**
   * <p>The note that you can leave when you acknowledge the alarm.</p>
   */
  note?: string;
}

export namespace AcknowledgeActionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcknowledgeActionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to acknowledge the alarm.</p>
 */
export interface AcknowledgeAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The note that you can leave when you acknowledge the alarm.</p>
   */
  note?: string;
}

export namespace AcknowledgeAlarmActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcknowledgeAlarmActionRequest): any => ({
    ...obj,
  });
}

export enum CustomerActionName {
  ACKNOWLEDGE = "ACKNOWLEDGE",
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
  RESET = "RESET",
  SNOOZE = "SNOOZE",
}

/**
 * <p>Contains the configuration information of a disable action.</p>
 */
export interface DisableActionConfiguration {
  /**
   * <p>The note that you can leave when you disable the alarm.</p>
   */
  note?: string;
}

export namespace DisableActionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableActionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of an enable action.</p>
 */
export interface EnableActionConfiguration {
  /**
   * <p>The note that you can leave when you enable the alarm.</p>
   */
  note?: string;
}

export namespace EnableActionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableActionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of a reset action.</p>
 */
export interface ResetActionConfiguration {
  /**
   * <p>The note that you can leave when you reset the alarm.</p>
   */
  note?: string;
}

export namespace ResetActionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetActionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of a snooze action.</p>
 */
export interface SnoozeActionConfiguration {
  /**
   * <p>The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.</p>
   */
  snoozeDuration?: number;

  /**
   * <p>The note that you can leave when you snooze the alarm.</p>
   */
  note?: string;
}

export namespace SnoozeActionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnoozeActionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the action that you can take to respond to the alarm.</p>
 */
export interface CustomerAction {
  /**
   * <p>The name of the action. The action name can be one of the following values:</p>
   *          <ul>
   *             <li>
   * 			            <p>
   *                   <code>SNOOZE</code> - When you snooze the alarm, the alarm state changes to <code>SNOOZE_DISABLED</code>.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>ENABLE</code> - When you enable the alarm, the alarm state changes to <code>NORMAL</code>.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>DISABLE</code> - When you disable the alarm, the alarm state changes to <code>DISABLED</code>.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>ACKNOWLEDGE</code> - When you acknowledge the alarm, the alarm state changes to <code>ACKNOWLEDGED</code>.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>RESET</code> - When you reset the alarm, the alarm state changes to <code>NORMAL</code>.</p>
   * 		          </li>
   *          </ul>
   *          <p>For more information, see the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_AlarmState.html">AlarmState</a> API.</p>
   */
  actionName?: CustomerActionName | string;

  /**
   * <p>Contains the configuration information of a snooze action.</p>
   */
  snoozeActionConfiguration?: SnoozeActionConfiguration;

  /**
   * <p>Contains the configuration information of an enable action.</p>
   */
  enableActionConfiguration?: EnableActionConfiguration;

  /**
   * <p>Contains the configuration information of a disable action.</p>
   */
  disableActionConfiguration?: DisableActionConfiguration;

  /**
   * <p>Contains the configuration information of an acknowledge action.</p>
   */
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;

  /**
   * <p>Contains the configuration information of a reset action.</p>
   */
  resetActionConfiguration?: ResetActionConfiguration;
}

export namespace CustomerAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerAction): any => ({
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
 * <p>Information needed to compare two values with a comparison operator.</p>
 */
export interface SimpleRuleEvaluation {
  /**
   * <p>The value of the input property, on the left side of the comparison operator.</p>
   */
  inputPropertyValue?: string;

  /**
   * <p>The comparison operator.</p>
   */
  operator?: ComparisonOperator | string;

  /**
   * <p>The threshold value, on the right side of the comparison operator.</p>
   */
  thresholdValue?: string;
}

export namespace SimpleRuleEvaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleRuleEvaluation): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to evaluate data.</p>
 */
export interface RuleEvaluation {
  /**
   * <p>Information needed to compare two values with a comparison operator.</p>
   */
  simpleRuleEvaluation?: SimpleRuleEvaluation;
}

export namespace RuleEvaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleEvaluation): any => ({
    ...obj,
  });
}

export enum AlarmStateName {
  ACKNOWLEDGED = "ACKNOWLEDGED",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  LATCHED = "LATCHED",
  NORMAL = "NORMAL",
  SNOOZE_DISABLED = "SNOOZE_DISABLED",
}

export enum EventType {
  STATE_CHANGE = "STATE_CHANGE",
}

export enum TriggerType {
  SNOOZE_TIMEOUT = "SNOOZE_TIMEOUT",
}

/**
 * <p>Contains the configuration information of alarm state changes.</p>
 */
export interface StateChangeConfiguration {
  /**
   * <p>The trigger type. If the value is <code>SNOOZE_TIMEOUT</code>, the snooze duration ends
   *       and the alarm automatically changes to the <code>NORMAL</code> state.</p>
   */
  triggerType?: TriggerType | string;
}

export namespace StateChangeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StateChangeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about alarm state changes.</p>
 */
export interface SystemEvent {
  /**
   * <p>The event type. If the value is <code>STATE_CHANGE</code>, the event contains information
   *       about alarm state changes.</p>
   */
  eventType?: EventType | string;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   */
  stateChangeConfiguration?: StateChangeConfiguration;
}

export namespace SystemEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SystemEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the current state of the alarm.</p>
 */
export interface AlarmState {
  /**
   * <p>The name of the alarm state. The state name can be one of the following values:</p>
   *          <ul>
   *             <li>
   * 		             <p>
   *                   <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state,
   * 		it isn't ready to evaluate data. To enable the alarm,
   * 		you must change the alarm to the <code>NORMAL</code> state.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state,
   * 		it's ready to evaluate data.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state,
   * 		the alarm is invoked.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state,
   * 		the alarm was invoked and you acknowledged the alarm.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state,
   * 		the alarm is disabled for a specified period of time. After the snooze time,
   * 		the alarm automatically changes to the <code>NORMAL</code> state. </p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state,
   * 		the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range.
   * 		To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p>
   * 	           </li>
   *          </ul>
   */
  stateName?: AlarmStateName | string;

  /**
   * <p>Information needed to evaluate data.</p>
   */
  ruleEvaluation?: RuleEvaluation;

  /**
   * <p>Contains information about the action that you can take to respond to the alarm.</p>
   */
  customerAction?: CustomerAction;

  /**
   * <p>Contains information about alarm state changes.</p>
   */
  systemEvent?: SystemEvent;
}

export namespace AlarmState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmState): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an alarm.</p>
 */
export interface Alarm {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>Contains information about the current state of the alarm.</p>
   */
  alarmState?: AlarmState;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   */
  severity?: number;

  /**
   * <p>The time the alarm was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the alarm was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;
}

export namespace Alarm {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of an alarm.</p>
 */
export interface AlarmSummary {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName?: string;

  /**
   * <p>The version of the alarm model.</p>
   */
  alarmModelVersion?: string;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The name of the alarm state. The state name can be one of the following values:</p>
   *          <ul>
   *             <li>
   * 		             <p>
   *                   <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state,
   * 		it isn't ready to evaluate data. To enable the alarm,
   * 		you must change the alarm to the <code>NORMAL</code> state.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state,
   * 		it's ready to evaluate data.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state,
   * 		the alarm is invoked.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state,
   * 		the alarm was invoked and you acknowledged the alarm.</p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state,
   * 		the alarm is disabled for a specified period of time. After the snooze time,
   * 		the alarm automatically changes to the <code>NORMAL</code> state. </p>
   * 	           </li>
   *             <li>
   * 		             <p>
   *                   <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state,
   * 		the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range.
   * 		To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p>
   * 	           </li>
   *          </ul>
   */
  stateName?: AlarmStateName | string;

  /**
   * <p>The time the alarm was created, in the Unix epoch format.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the alarm was last updated, in the Unix epoch format.</p>
   */
  lastUpdateTime?: Date;
}

export namespace AlarmSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlarmSummary): any => ({
    ...obj,
  });
}

export interface BatchAcknowledgeAlarmRequest {
  /**
   * <p>The list of acknowledge action requests. You can specify up to 10 requests per operation.</p>
   */
  acknowledgeActionRequests: AcknowledgeAlarmActionRequest[] | undefined;
}

export namespace BatchAcknowledgeAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAcknowledgeAlarmRequest): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  InternalFailureException = "InternalFailureException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ServiceUnavailableException = "ServiceUnavailableException",
  ThrottlingException = "ThrottlingException",
}

/**
 * <p>Contains error messages associated with one of the following requests:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface BatchAlarmActionErrorEntry {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId?: string;

  /**
   * <p>The error code.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;
}

export namespace BatchAlarmActionErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAlarmActionErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchAcknowledgeAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

export namespace BatchAcknowledgeAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAcknowledgeAlarmResponse): any => ({
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
 * <p>Information used to disable the alarm.</p>
 */
export interface DisableAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The note that you can leave when you disable the alarm.</p>
   */
  note?: string;
}

export namespace DisableAlarmActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableAlarmActionRequest): any => ({
    ...obj,
  });
}

export interface BatchDisableAlarmRequest {
  /**
   * <p>The list of disable action requests. You can specify up to 10 requests per operation.</p>
   */
  disableActionRequests: DisableAlarmActionRequest[] | undefined;
}

export namespace BatchDisableAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableAlarmRequest): any => ({
    ...obj,
  });
}

export interface BatchDisableAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

export namespace BatchDisableAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableAlarmResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to enable the alarm.</p>
 */
export interface EnableAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The note that you can leave when you enable the alarm.</p>
   */
  note?: string;
}

export namespace EnableAlarmActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableAlarmActionRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableAlarmRequest {
  /**
   * <p>The list of enable action requests. You can specify up to 10 requests per operation.</p>
   */
  enableActionRequests: EnableAlarmActionRequest[] | undefined;
}

export namespace BatchEnableAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableAlarmRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

export namespace BatchEnableAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableAlarmResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a timestamp.</p>
 */
export interface TimestampValue {
  /**
   * <p>The value of the timestamp, in the Unix epoch format.</p>
   */
  timeInMillis?: number;
}

export namespace TimestampValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampValue): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a message.</p>
 */
export interface Message {
  /**
   * <p>The ID to assign to the message. Within each batch sent, each <code>"messageId"</code>
   *       must be unique.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The name of the input into which the message payload is transformed.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string
   *       representing binary data (in which case you must decode it).</p>
   */
  payload: Uint8Array | undefined;

  /**
   * <p>The timestamp associated with the message.</p>
   */
  timestamp?: TimestampValue;
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

export interface BatchPutMessageRequest {
  /**
   * <p>The list of messages to send. Each message has the following format: <code>'{ "messageId":
   *         "string", "inputName": "string", "payload": "string"}'</code>
   *          </p>
   */
  messages: Message[] | undefined;
}

export namespace BatchPutMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the errors encountered.</p>
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the
   *         <code>"messageId"</code> key in the <code>"message"</code> object.)</p>
   */
  messageId?: string;

  /**
   * <p>The error code.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;
}

export namespace BatchPutMessageErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages.</p>
   */
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

export namespace BatchPutMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to reset the alarm.</p>
 */
export interface ResetAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The note that you can leave when you reset the alarm.</p>
   */
  note?: string;
}

export namespace ResetAlarmActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetAlarmActionRequest): any => ({
    ...obj,
  });
}

export interface BatchResetAlarmRequest {
  /**
   * <p>The list of reset action requests. You can specify up to 10 requests per operation.</p>
   */
  resetActionRequests: ResetAlarmActionRequest[] | undefined;
}

export namespace BatchResetAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchResetAlarmRequest): any => ({
    ...obj,
  });
}

export interface BatchResetAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

export namespace BatchResetAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchResetAlarmResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to snooze the alarm.</p>
 */
export interface SnoozeAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;

  /**
   * <p>The note that you can leave when you snooze the alarm.</p>
   */
  note?: string;

  /**
   * <p>The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.</p>
   */
  snoozeDuration: number | undefined;
}

export namespace SnoozeAlarmActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnoozeAlarmActionRequest): any => ({
    ...obj,
  });
}

export interface BatchSnoozeAlarmRequest {
  /**
   * <p>The list of snooze action requests. You can specify up to 10 requests per operation.</p>
   */
  snoozeActionRequests: SnoozeAlarmActionRequest[] | undefined;
}

export namespace BatchSnoozeAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSnoozeAlarmRequest): any => ({
    ...obj,
  });
}

export interface BatchSnoozeAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

export namespace BatchSnoozeAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSnoozeAlarmResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The new setting of a timer.</p>
 */
export interface TimerDefinition {
  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;

  /**
   * <p>The new setting of the timer (the number of seconds before the timer elapses).</p>
   */
  seconds: number | undefined;
}

export namespace TimerDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimerDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The new value of the variable.</p>
 */
export interface VariableDefinition {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;
}

export namespace VariableDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The new state, variable values, and timer settings of the detector (instance).</p>
 */
export interface DetectorStateDefinition {
  /**
   * <p>The name of the new state of the detector (instance).</p>
   */
  stateName: string | undefined;

  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is
   *       cleared.</p>
   */
  variables: VariableDefinition[] | undefined;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is cleared,
   *       and its timeout event won't occur.</p>
   */
  timers: TimerDefinition[] | undefined;
}

export namespace DetectorStateDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorStateDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Information used to update the detector (instance).</p>
 */
export interface UpdateDetectorRequest {
  /**
   * <p>The ID to assign to the detector update <code>"message"</code>. Each
   *         <code>"messageId"</code> must be unique within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The name of the detector model that created the detectors (instances).</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input key attribute (identifying the device or system) that caused the
   *       creation of this detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   */
  state: DetectorStateDefinition | undefined;
}

export namespace UpdateDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDetectorRequest): any => ({
    ...obj,
  });
}

export interface BatchUpdateDetectorRequest {
  /**
   * <p>The list of detectors (instances) to update, along with the values to update.</p>
   */
  detectors: UpdateDetectorRequest[] | undefined;
}

export namespace BatchUpdateDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDetectorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the error that occurred when attempting to update a detector.</p>
 */
export interface BatchUpdateDetectorErrorEntry {
  /**
   * <p>The <code>"messageId"</code> of the update request that caused the error. (The value of
   *       the <code>"messageId"</code> in the update request <code>"Detector"</code> object.)</p>
   */
  messageId?: string;

  /**
   * <p>The error code.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;
}

export namespace BatchUpdateDetectorErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDetectorErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchUpdateDetectorResponse {
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the
   *       specific update did not occur.)</p>
   */
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}

export namespace BatchUpdateDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateDetectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeAlarmRequest {
  /**
   * <p>The name of the alarm model.</p>
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   */
  keyValue?: string;
}

export namespace DescribeAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlarmRequest): any => ({
    ...obj,
  });
}

export interface DescribeAlarmResponse {
  /**
   * <p>Contains information about an alarm.</p>
   */
  alarm?: Alarm;
}

export namespace DescribeAlarmResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlarmResponse): any => ({
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

export interface DescribeDetectorRequest {
  /**
   * <p>The name of the detector model whose detectors (instances) you want information
   *       about.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter used to limit results to detectors (instances) created because of the given key
   *       ID.</p>
   */
  keyValue?: string;
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
 * <p>The current state of a timer.</p>
 */
export interface Timer {
  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;

  /**
   * <p>The number of seconds which have elapsed on the timer.</p>
   */
  timestamp: Date | undefined;
}

export namespace Timer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Timer): any => ({
    ...obj,
  });
}

/**
 * <p>The current state of the variable.</p>
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The current value of the variable.</p>
   */
  value: string | undefined;
}

export namespace Variable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the current state of the detector instance.</p>
 */
export interface DetectorState {
  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * <p>The current values of the detector's variables.</p>
   */
  variables: Variable[] | undefined;

  /**
   * <p>The current state of the detector's timers.</p>
   */
  timers: Timer[] | undefined;
}

export namespace DetectorState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorState): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface Detector {
  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *       detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorState;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace Detector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Detector): any => ({
    ...obj,
  });
}

export interface DescribeDetectorResponse {
  /**
   * <p>Information about the detector (instance).</p>
   */
  detector?: Detector;
}

export namespace DescribeDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector state.</p>
 */
export interface DetectorStateSummary {
  /**
   * <p>The name of the state.</p>
   */
  stateName?: string;
}

export namespace DetectorStateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorStateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface DetectorSummary {
  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *       detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorStateSummary;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace DetectorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectorSummary): any => ({
    ...obj,
  });
}

export interface ListAlarmsRequest {
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

export namespace ListAlarmsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmsRequest): any => ({
    ...obj,
  });
}

export interface ListAlarmsResponse {
  /**
   * <p>A list that summarizes each alarm.</p>
   */
  alarmSummaries?: AlarmSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListAlarmsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlarmsResponse): any => ({
    ...obj,
  });
}

export interface ListDetectorsRequest {
  /**
   * <p>The name of the detector model whose detectors (instances) are listed.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter that limits results to those detectors (instances) in the given state.</p>
   */
  stateName?: string;

  /**
   * <p>The token that you can use to return the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorsRequest): any => ({
    ...obj,
  });
}

export interface ListDetectorsResponse {
  /**
   * <p>A list of summary information about the detectors (instances).</p>
   */
  detectorSummaries?: DetectorSummary[];

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectorsResponse): any => ({
    ...obj,
  });
}
