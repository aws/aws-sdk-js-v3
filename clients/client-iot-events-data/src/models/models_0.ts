// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTEventsDataServiceException as __BaseException } from "./IoTEventsDataServiceException";

/**
 * <p>Contains the configuration information of an acknowledge action.</p>
 * @public
 */
export interface AcknowledgeActionConfiguration {
  /**
   * <p>The note that you can leave when you acknowledge the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Information needed to acknowledge the alarm.</p>
 * @public
 */
export interface AcknowledgeAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The note that you can leave when you acknowledge the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomerActionName = {
  ACKNOWLEDGE: "ACKNOWLEDGE",
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  RESET: "RESET",
  SNOOZE: "SNOOZE",
} as const;

/**
 * @public
 */
export type CustomerActionName = (typeof CustomerActionName)[keyof typeof CustomerActionName];

/**
 * <p>Contains the configuration information of a disable action.</p>
 * @public
 */
export interface DisableActionConfiguration {
  /**
   * <p>The note that you can leave when you disable the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Contains the configuration information of an enable action.</p>
 * @public
 */
export interface EnableActionConfiguration {
  /**
   * <p>The note that you can leave when you enable the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Contains the configuration information of a reset action.</p>
 * @public
 */
export interface ResetActionConfiguration {
  /**
   * <p>The note that you can leave when you reset the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Contains the configuration information of a snooze action.</p>
 * @public
 */
export interface SnoozeActionConfiguration {
  /**
   * <p>The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.</p>
   * @public
   */
  snoozeDuration?: number | undefined;

  /**
   * <p>The note that you can leave when you snooze the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Contains information about the action that you can take to respond to the alarm.</p>
 * @public
 */
export interface CustomerAction {
  /**
   * <p>The name of the action. The action name can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SNOOZE</code> - When you snooze the alarm, the alarm state changes to <code>SNOOZE_DISABLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLE</code> - When you enable the alarm, the alarm state changes to <code>NORMAL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLE</code> - When you disable the alarm, the alarm state changes to <code>DISABLED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACKNOWLEDGE</code> - When you acknowledge the alarm, the alarm state changes to <code>ACKNOWLEDGED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESET</code> - When you reset the alarm, the alarm state changes to <code>NORMAL</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_AlarmState.html">AlarmState</a> API.</p>
   * @public
   */
  actionName?: CustomerActionName | undefined;

  /**
   * <p>Contains the configuration information of a snooze action.</p>
   * @public
   */
  snoozeActionConfiguration?: SnoozeActionConfiguration | undefined;

  /**
   * <p>Contains the configuration information of an enable action.</p>
   * @public
   */
  enableActionConfiguration?: EnableActionConfiguration | undefined;

  /**
   * <p>Contains the configuration information of a disable action.</p>
   * @public
   */
  disableActionConfiguration?: DisableActionConfiguration | undefined;

  /**
   * <p>Contains the configuration information of an acknowledge action.</p>
   * @public
   */
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration | undefined;

  /**
   * <p>Contains the configuration information of a reset action.</p>
   * @public
   */
  resetActionConfiguration?: ResetActionConfiguration | undefined;
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
 * <p>Information needed to compare two values with a comparison operator.</p>
 * @public
 */
export interface SimpleRuleEvaluation {
  /**
   * <p>The value of the input property, on the left side of the comparison operator.</p>
   * @public
   */
  inputPropertyValue?: string | undefined;

  /**
   * <p>The comparison operator.</p>
   * @public
   */
  operator?: ComparisonOperator | undefined;

  /**
   * <p>The threshold value, on the right side of the comparison operator.</p>
   * @public
   */
  thresholdValue?: string | undefined;
}

/**
 * <p>Information needed to evaluate data.</p>
 * @public
 */
export interface RuleEvaluation {
  /**
   * <p>Information needed to compare two values with a comparison operator.</p>
   * @public
   */
  simpleRuleEvaluation?: SimpleRuleEvaluation | undefined;
}

/**
 * @public
 * @enum
 */
export const AlarmStateName = {
  ACKNOWLEDGED: "ACKNOWLEDGED",
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  LATCHED: "LATCHED",
  NORMAL: "NORMAL",
  SNOOZE_DISABLED: "SNOOZE_DISABLED",
} as const;

/**
 * @public
 */
export type AlarmStateName = (typeof AlarmStateName)[keyof typeof AlarmStateName];

/**
 * @public
 * @enum
 */
export const EventType = {
  STATE_CHANGE: "STATE_CHANGE",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  SNOOZE_TIMEOUT: "SNOOZE_TIMEOUT",
} as const;

/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * <p>Contains the configuration information of alarm state changes.</p>
 * @public
 */
export interface StateChangeConfiguration {
  /**
   * <p>The trigger type. If the value is <code>SNOOZE_TIMEOUT</code>, the snooze duration ends
   *       and the alarm automatically changes to the <code>NORMAL</code> state.</p>
   * @public
   */
  triggerType?: TriggerType | undefined;
}

/**
 * <p>Contains information about alarm state changes.</p>
 * @public
 */
export interface SystemEvent {
  /**
   * <p>The event type. If the value is <code>STATE_CHANGE</code>, the event contains information
   *       about alarm state changes.</p>
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * <p>Contains the configuration information of alarm state changes.</p>
   * @public
   */
  stateChangeConfiguration?: StateChangeConfiguration | undefined;
}

/**
 * <p>Contains information about the current state of the alarm.</p>
 * @public
 */
export interface AlarmState {
  /**
   * <p>The name of the alarm state. The state name can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state,
   * 		it isn't ready to evaluate data. To enable the alarm,
   * 		you must change the alarm to the <code>NORMAL</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state,
   * 		it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state,
   * 		the alarm is invoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state,
   * 		the alarm was invoked and you acknowledged the alarm.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state,
   * 		the alarm is disabled for a specified period of time. After the snooze time,
   * 		the alarm automatically changes to the <code>NORMAL</code> state. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state,
   * 		the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range.
   * 		To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p>
   *             </li>
   *          </ul>
   * @public
   */
  stateName?: AlarmStateName | undefined;

  /**
   * <p>Information needed to evaluate data.</p>
   * @public
   */
  ruleEvaluation?: RuleEvaluation | undefined;

  /**
   * <p>Contains information about the action that you can take to respond to the alarm.</p>
   * @public
   */
  customerAction?: CustomerAction | undefined;

  /**
   * <p>Contains information about alarm state changes.</p>
   * @public
   */
  systemEvent?: SystemEvent | undefined;
}

/**
 * <p>Contains information about an alarm.</p>
 * @public
 */
export interface Alarm {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>Contains information about the current state of the alarm.</p>
   * @public
   */
  alarmState?: AlarmState | undefined;

  /**
   * <p>A non-negative integer that reflects the severity level of the alarm.</p>
   * @public
   */
  severity?: number | undefined;

  /**
   * <p>The time the alarm was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the alarm was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * <p>Contains a summary of an alarm.</p>
 * @public
 */
export interface AlarmSummary {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName?: string | undefined;

  /**
   * <p>The version of the alarm model.</p>
   * @public
   */
  alarmModelVersion?: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The name of the alarm state. The state name can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state,
   * 		it isn't ready to evaluate data. To enable the alarm,
   * 		you must change the alarm to the <code>NORMAL</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state,
   * 		it's ready to evaluate data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state,
   * 		the alarm is invoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state,
   * 		the alarm was invoked and you acknowledged the alarm.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state,
   * 		the alarm is disabled for a specified period of time. After the snooze time,
   * 		the alarm automatically changes to the <code>NORMAL</code> state. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state,
   * 		the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range.
   * 		To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p>
   *             </li>
   *          </ul>
   * @public
   */
  stateName?: AlarmStateName | undefined;

  /**
   * <p>The time the alarm was created, in the Unix epoch format.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the alarm was last updated, in the Unix epoch format.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchAcknowledgeAlarmRequest {
  /**
   * <p>The list of acknowledge action requests. You can specify up to 10 requests per operation.</p>
   * @public
   */
  acknowledgeActionRequests: AcknowledgeAlarmActionRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  InternalFailureException: "InternalFailureException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ServiceUnavailableException: "ServiceUnavailableException",
  ThrottlingException: "ThrottlingException",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

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
 * @public
 */
export interface BatchAlarmActionErrorEntry {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAcknowledgeAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   * @public
   */
  errorEntries?: BatchAlarmActionErrorEntry[] | undefined;
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
 * <p>Information used to delete the detector model.</p>
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * <p>The ID to assign to the <code>DeleteDetectorRequest</code>. Each <code>"messageId"</code> must be unique within each batch sent.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The name of the detector model that was used to create the detector instance.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html#iotevents-CreateDetectorModel-request-key">key</a> used to identify the detector. </p>
   * @public
   */
  keyValue?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDetectorRequest {
  /**
   * <p>The list of one or more detectors to be deleted.</p>
   * @public
   */
  detectors: DeleteDetectorRequest[] | undefined;
}

/**
 * <p>Contains error messages associated with the deletion request.</p>
 * @public
 */
export interface BatchDeleteDetectorErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value of the <code>"messageId"</code> in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html#iotevents-iotevents-data_BatchDeleteDetector-request-detectors">detectors</a> object of the <code>DeleteDetectorRequest</code>.)</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDetectorResponse {
  /**
   * <p>A list of errors associated with the request, or an empty array (<code>[]</code>) if there are no errors. Each error entry contains a <code>messageId</code> that helps you identify the entry that failed.</p>
   * @public
   */
  batchDeleteDetectorErrorEntries?: BatchDeleteDetectorErrorEntry[] | undefined;
}

/**
 * <p>Information used to disable the alarm.</p>
 * @public
 */
export interface DisableAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The note that you can leave when you disable the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisableAlarmRequest {
  /**
   * <p>The list of disable action requests. You can specify up to 10 requests per operation.</p>
   * @public
   */
  disableActionRequests: DisableAlarmActionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchDisableAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   * @public
   */
  errorEntries?: BatchAlarmActionErrorEntry[] | undefined;
}

/**
 * <p>Information needed to enable the alarm.</p>
 * @public
 */
export interface EnableAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The note that you can leave when you enable the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * @public
 */
export interface BatchEnableAlarmRequest {
  /**
   * <p>The list of enable action requests. You can specify up to 10 requests per operation.</p>
   * @public
   */
  enableActionRequests: EnableAlarmActionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchEnableAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   * @public
   */
  errorEntries?: BatchAlarmActionErrorEntry[] | undefined;
}

/**
 * <p>Contains information about a timestamp.</p>
 * @public
 */
export interface TimestampValue {
  /**
   * <p>The value of the timestamp, in the Unix epoch format.</p>
   * @public
   */
  timeInMillis?: number | undefined;
}

/**
 * <p>Information about a message.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The ID to assign to the message. Within each batch sent, each <code>"messageId"</code>
   *       must be unique.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The name of the input into which the message payload is transformed.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string
   *       representing binary data (in which case you must decode it).</p>
   * @public
   */
  payload: Uint8Array | undefined;

  /**
   * <p>The timestamp associated with the message.</p>
   * @public
   */
  timestamp?: TimestampValue | undefined;
}

/**
 * @public
 */
export interface BatchPutMessageRequest {
  /**
   * <p>The list of messages to send. Each message has the following format: <code>'\{ "messageId":
   *         "string", "inputName": "string", "payload": "string"\}'</code>
   *          </p>
   * @public
   */
  messages: Message[] | undefined;
}

/**
 * <p>Contains information about the errors encountered.</p>
 * @public
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the
   *         <code>"messageId"</code> key in the <code>"message"</code> object.)</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages.</p>
   * @public
   */
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[] | undefined;
}

/**
 * <p>Information needed to reset the alarm.</p>
 * @public
 */
export interface ResetAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The note that you can leave when you reset the alarm.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * @public
 */
export interface BatchResetAlarmRequest {
  /**
   * <p>The list of reset action requests. You can specify up to 10 requests per operation.</p>
   * @public
   */
  resetActionRequests: ResetAlarmActionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchResetAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   * @public
   */
  errorEntries?: BatchAlarmActionErrorEntry[] | undefined;
}

/**
 * <p>Information needed to snooze the alarm.</p>
 * @public
 */
export interface SnoozeAlarmActionRequest {
  /**
   * <p>The request ID. Each ID must be unique within each batch.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The note that you can leave when you snooze the alarm.</p>
   * @public
   */
  note?: string | undefined;

  /**
   * <p>The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.</p>
   * @public
   */
  snoozeDuration: number | undefined;
}

/**
 * @public
 */
export interface BatchSnoozeAlarmRequest {
  /**
   * <p>The list of snooze action requests. You can specify up to 10 requests per operation.</p>
   * @public
   */
  snoozeActionRequests: SnoozeAlarmActionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchSnoozeAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   * @public
   */
  errorEntries?: BatchAlarmActionErrorEntry[] | undefined;
}

/**
 * <p>The new setting of a timer.</p>
 * @public
 */
export interface TimerDefinition {
  /**
   * <p>The name of the timer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new setting of the timer (the number of seconds before the timer elapses).</p>
   * @public
   */
  seconds: number | undefined;
}

/**
 * <p>The new value of the variable.</p>
 * @public
 */
export interface VariableDefinition {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new value of the variable.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The new state, variable values, and timer settings of the detector (instance).</p>
 * @public
 */
export interface DetectorStateDefinition {
  /**
   * <p>The name of the new state of the detector (instance).</p>
   * @public
   */
  stateName: string | undefined;

  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is
   *       cleared.</p>
   * @public
   */
  variables: VariableDefinition[] | undefined;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is cleared,
   *       and its timeout event won't occur.</p>
   * @public
   */
  timers: TimerDefinition[] | undefined;
}

/**
 * <p>Information used to update the detector (instance).</p>
 * @public
 */
export interface UpdateDetectorRequest {
  /**
   * <p>The ID to assign to the detector update <code>"message"</code>. Each
   *         <code>"messageId"</code> must be unique within each batch sent.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The name of the detector model that created the detectors (instances).</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the input key attribute (identifying the device or system) that caused the
   *       creation of this detector (instance).</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   * @public
   */
  state: DetectorStateDefinition | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDetectorRequest {
  /**
   * <p>The list of detectors (instances) to update, along with the values to update.</p>
   * @public
   */
  detectors: UpdateDetectorRequest[] | undefined;
}

/**
 * <p>Information about the error that occurred when attempting to update a detector.</p>
 * @public
 */
export interface BatchUpdateDetectorErrorEntry {
  /**
   * <p>The <code>"messageId"</code> of the update request that caused the error. (The value of
   *       the <code>"messageId"</code> in the update request <code>"Detector"</code> object.)</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDetectorResponse {
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the
   *       specific update did not occur.)</p>
   * @public
   */
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmRequest {
  /**
   * <p>The name of the alarm model.</p>
   * @public
   */
  alarmModelName: string | undefined;

  /**
   * <p>The value of the key used as a filter to select only the alarms associated with the
   * <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.</p>
   * @public
   */
  keyValue?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmResponse {
  /**
   * <p>Contains information about an alarm.</p>
   * @public
   */
  alarm?: Alarm | undefined;
}

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
export interface DescribeDetectorRequest {
  /**
   * <p>The name of the detector model whose detectors (instances) you want information
   *       about.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter used to limit results to detectors (instances) created because of the given key
   *       ID.</p>
   * @public
   */
  keyValue?: string | undefined;
}

/**
 * <p>The current state of a timer.</p>
 * @public
 */
export interface Timer {
  /**
   * <p>The name of the timer.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The expiration time for the timer.</p>
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * <p>The current state of the variable.</p>
 * @public
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current value of the variable.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Information about the current state of the detector instance.</p>
 * @public
 */
export interface DetectorState {
  /**
   * <p>The name of the state.</p>
   * @public
   */
  stateName: string | undefined;

  /**
   * <p>The current values of the detector's variables.</p>
   * @public
   */
  variables: Variable[] | undefined;

  /**
   * <p>The current state of the detector's timers.</p>
   * @public
   */
  timers: Timer[] | undefined;
}

/**
 * <p>Information about the detector (instance).</p>
 * @public
 */
export interface Detector {
  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   * @public
   */
  detectorModelName?: string | undefined;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *       detector (instance).</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   * @public
   */
  detectorModelVersion?: string | undefined;

  /**
   * <p>The current state of the detector (instance).</p>
   * @public
   */
  state?: DetectorState | undefined;

  /**
   * <p>The time the detector (instance) was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDetectorResponse {
  /**
   * <p>Information about the detector (instance).</p>
   * @public
   */
  detector?: Detector | undefined;
}

/**
 * <p>Information about the detector state.</p>
 * @public
 */
export interface DetectorStateSummary {
  /**
   * <p>The name of the state.</p>
   * @public
   */
  stateName?: string | undefined;
}

/**
 * <p>Information about the detector (instance).</p>
 * @public
 */
export interface DetectorSummary {
  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   * @public
   */
  detectorModelName?: string | undefined;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *       detector (instance).</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   * @public
   */
  detectorModelVersion?: string | undefined;

  /**
   * <p>The current state of the detector (instance).</p>
   * @public
   */
  state?: DetectorStateSummary | undefined;

  /**
   * <p>The time the detector (instance) was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAlarmsRequest {
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
export interface ListAlarmsResponse {
  /**
   * <p>A list that summarizes each alarm.</p>
   * @public
   */
  alarmSummaries?: AlarmSummary[] | undefined;

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
export interface ListDetectorsRequest {
  /**
   * <p>The name of the detector model whose detectors (instances) are listed.</p>
   * @public
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter that limits results to those detectors (instances) in the given state.</p>
   * @public
   */
  stateName?: string | undefined;

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
export interface ListDetectorsResponse {
  /**
   * <p>A list of summary information about the detectors (instances).</p>
   * @public
   */
  detectorSummaries?: DetectorSummary[] | undefined;

  /**
   * <p>The token that you can use to return the next set of results,
   * or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}
