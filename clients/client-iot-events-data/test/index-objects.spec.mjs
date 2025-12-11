import {
  AlarmStateName,
  BatchAcknowledgeAlarmCommand,
  BatchDeleteDetectorCommand,
  BatchDisableAlarmCommand,
  BatchEnableAlarmCommand,
  BatchPutMessageCommand,
  BatchResetAlarmCommand,
  BatchSnoozeAlarmCommand,
  BatchUpdateDetectorCommand,
  ComparisonOperator,
  CustomerActionName,
  DescribeAlarmCommand,
  DescribeDetectorCommand,
  ErrorCode,
  EventType,
  InternalFailureException,
  InvalidRequestException,
  IoTEventsData,
  IoTEventsDataClient,
  IoTEventsDataServiceException,
  ListAlarmsCommand,
  ListDetectorsCommand,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  TriggerType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTEventsDataClient === "function");
assert(typeof IoTEventsData === "function");
// commands
assert(typeof BatchAcknowledgeAlarmCommand === "function");
assert(typeof BatchDeleteDetectorCommand === "function");
assert(typeof BatchDisableAlarmCommand === "function");
assert(typeof BatchEnableAlarmCommand === "function");
assert(typeof BatchPutMessageCommand === "function");
assert(typeof BatchResetAlarmCommand === "function");
assert(typeof BatchSnoozeAlarmCommand === "function");
assert(typeof BatchUpdateDetectorCommand === "function");
assert(typeof DescribeAlarmCommand === "function");
assert(typeof DescribeDetectorCommand === "function");
assert(typeof ListAlarmsCommand === "function");
assert(typeof ListDetectorsCommand === "function");
// enums
assert(typeof AlarmStateName === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof CustomerActionName === "object");
assert(typeof ErrorCode === "object");
assert(typeof EventType === "object");
assert(typeof TriggerType === "object");
// errors
assert(InternalFailureException.prototype instanceof IoTEventsDataServiceException);
assert(InvalidRequestException.prototype instanceof IoTEventsDataServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTEventsDataServiceException);
assert(ServiceUnavailableException.prototype instanceof IoTEventsDataServiceException);
assert(ThrottlingException.prototype instanceof IoTEventsDataServiceException);
assert(IoTEventsDataServiceException.prototype instanceof Error);
console.log(`IoTEventsData index test passed.`);
