// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTEventsDataServiceException as __BaseException } from "./IoTEventsDataServiceException";

/**
 * @public
 * <p>Contains the configuration information of an acknowledge action.</p>
 */
export interface AcknowledgeActionConfiguration {
  /**
   * <p>The note that you can leave when you acknowledge the alarm.</p>
   */
  note?: string;
}

/**
 * @public
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
 * @public
 * <p>Contains the configuration information of a disable action.</p>
 */
export interface DisableActionConfiguration {
  /**
   * <p>The note that you can leave when you disable the alarm.</p>
   */
  note?: string;
}

/**
 * @public
 * <p>Contains the configuration information of an enable action.</p>
 */
export interface EnableActionConfiguration {
  /**
   * <p>The note that you can leave when you enable the alarm.</p>
   */
  note?: string;
}

/**
 * @public
 * <p>Contains the configuration information of a reset action.</p>
 */
export interface ResetActionConfiguration {
  /**
   * <p>The note that you can leave when you reset the alarm.</p>
   */
  note?: string;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 * <p>Information needed to evaluate data.</p>
 */
export interface RuleEvaluation {
  /**
   * <p>Information needed to compare two values with a comparison operator.</p>
   */
  simpleRuleEvaluation?: SimpleRuleEvaluation;
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
 * @public
 * <p>Contains the configuration information of alarm state changes.</p>
 */
export interface StateChangeConfiguration {
  /**
   * <p>The trigger type. If the value is <code>SNOOZE_TIMEOUT</code>, the snooze duration ends
   *       and the alarm automatically changes to the <code>NORMAL</code> state.</p>
   */
  triggerType?: TriggerType | string;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface BatchAcknowledgeAlarmRequest {
  /**
   * <p>The list of acknowledge action requests. You can specify up to 10 requests per operation.</p>
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
 * @public
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

/**
 * @public
 */
export interface BatchAcknowledgeAlarmResponse {
  /**
   * <p>A list of errors associated with the request, or <code>null</code> if there are no errors.
   * Each error entry contains an entry ID that helps you identify the entry that failed.</p>
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
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
 * <p>Information used to delete the detector model.</p>
 */
export interface DeleteDetectorRequest {
  /**
   * <p>The ID to assign to the <code>DeleteDetectorRequest</code>. Each <code>"messageId"</code> must be unique within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The name of the detector model that was used to create the detector instance.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The value of the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html#iotevents-CreateDetectorModel-request-key">key</a> used to identify the detector. </p>
   */
  keyValue?: string;
}

/**
 * @public
 */
export interface BatchDeleteDetectorRequest {
  /**
   * <p>The list of one or more detectors to be deleted.</p>
   */
  detectors: DeleteDetectorRequest[] | undefined;
}

/**
 * @public
 * <p>Contains error messages associated with the deletion request.</p>
 */
export interface BatchDeleteDetectorErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value of the <code>"messageId"</code> in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html#iotevents-iotevents-data_BatchDeleteDetector-request-detectors">detectors</a> object of the <code>DeleteDetectorRequest</code>.)</p>
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

/**
 * @public
 */
export interface BatchDeleteDetectorResponse {
  /**
   * <p>A list of errors associated with the request, or an empty array (<code>[]</code>) if there are no errors. Each error entry contains a <code>messageId</code> that helps you identify the entry that failed.</p>
   */
  batchDeleteDetectorErrorEntries?: BatchDeleteDetectorErrorEntry[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchDisableAlarmRequest {
  /**
   * <p>The list of disable action requests. You can specify up to 10 requests per operation.</p>
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
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchEnableAlarmRequest {
  /**
   * <p>The list of enable action requests. You can specify up to 10 requests per operation.</p>
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
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

/**
 * @public
 * <p>Contains information about a timestamp.</p>
 */
export interface TimestampValue {
  /**
   * <p>The value of the timestamp, in the Unix epoch format.</p>
   */
  timeInMillis?: number;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchPutMessageRequest {
  /**
   * <p>The list of messages to send. Each message has the following format: <code>'\{ "messageId":
   *         "string", "inputName": "string", "payload": "string"\}'</code>
   *          </p>
   */
  messages: Message[] | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages.</p>
   */
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchResetAlarmRequest {
  /**
   * <p>The list of reset action requests. You can specify up to 10 requests per operation.</p>
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
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchSnoozeAlarmRequest {
  /**
   * <p>The list of snooze action requests. You can specify up to 10 requests per operation.</p>
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
   */
  errorEntries?: BatchAlarmActionErrorEntry[];
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface BatchUpdateDetectorRequest {
  /**
   * <p>The list of detectors (instances) to update, along with the values to update.</p>
   */
  detectors: UpdateDetectorRequest[] | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchUpdateDetectorResponse {
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the
   *       specific update did not occur.)</p>
   */
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface DescribeAlarmResponse {
  /**
   * <p>Contains information about an alarm.</p>
   */
  alarm?: Alarm;
}

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

/**
 * @public
 * <p>The current state of a timer.</p>
 */
export interface Timer {
  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;

  /**
   * <p>The expiration time for the timer.</p>
   */
  timestamp: Date | undefined;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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

/**
 * @public
 */
export interface DescribeDetectorResponse {
  /**
   * <p>Information about the detector (instance).</p>
   */
  detector?: Detector;
}

/**
 * @public
 * <p>Information about the detector state.</p>
 */
export interface DetectorStateSummary {
  /**
   * <p>The name of the state.</p>
   */
  stateName?: string;
}

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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
