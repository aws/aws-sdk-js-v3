import {
  AcknowledgeActionConfiguration$,
  AcknowledgeAlarmActionRequest$,
  Alarm$,
  AlarmState$,
  AlarmStateName,
  AlarmSummary$,
  BatchAcknowledgeAlarm$,
  BatchAcknowledgeAlarmCommand,
  BatchAcknowledgeAlarmRequest$,
  BatchAcknowledgeAlarmResponse$,
  BatchAlarmActionErrorEntry$,
  BatchDeleteDetector$,
  BatchDeleteDetectorCommand,
  BatchDeleteDetectorErrorEntry$,
  BatchDeleteDetectorRequest$,
  BatchDeleteDetectorResponse$,
  BatchDisableAlarm$,
  BatchDisableAlarmCommand,
  BatchDisableAlarmRequest$,
  BatchDisableAlarmResponse$,
  BatchEnableAlarm$,
  BatchEnableAlarmCommand,
  BatchEnableAlarmRequest$,
  BatchEnableAlarmResponse$,
  BatchPutMessage$,
  BatchPutMessageCommand,
  BatchPutMessageErrorEntry$,
  BatchPutMessageRequest$,
  BatchPutMessageResponse$,
  BatchResetAlarm$,
  BatchResetAlarmCommand,
  BatchResetAlarmRequest$,
  BatchResetAlarmResponse$,
  BatchSnoozeAlarm$,
  BatchSnoozeAlarmCommand,
  BatchSnoozeAlarmRequest$,
  BatchSnoozeAlarmResponse$,
  BatchUpdateDetector$,
  BatchUpdateDetectorCommand,
  BatchUpdateDetectorErrorEntry$,
  BatchUpdateDetectorRequest$,
  BatchUpdateDetectorResponse$,
  ComparisonOperator,
  CustomerAction$,
  CustomerActionName,
  DeleteDetectorRequest$,
  DescribeAlarm$,
  DescribeAlarmCommand,
  DescribeAlarmRequest$,
  DescribeAlarmResponse$,
  DescribeDetector$,
  DescribeDetectorCommand,
  DescribeDetectorRequest$,
  DescribeDetectorResponse$,
  Detector$,
  DetectorState$,
  DetectorStateDefinition$,
  DetectorStateSummary$,
  DetectorSummary$,
  DisableActionConfiguration$,
  DisableAlarmActionRequest$,
  EnableActionConfiguration$,
  EnableAlarmActionRequest$,
  ErrorCode,
  EventType,
  InternalFailureException,
  InternalFailureException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTEventsData,
  IoTEventsDataClient,
  IoTEventsDataServiceException,
  ListAlarms$,
  ListAlarmsCommand,
  ListAlarmsRequest$,
  ListAlarmsResponse$,
  ListDetectors$,
  ListDetectorsCommand,
  ListDetectorsRequest$,
  ListDetectorsResponse$,
  Message$,
  ResetActionConfiguration$,
  ResetAlarmActionRequest$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleEvaluation$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SimpleRuleEvaluation$,
  SnoozeActionConfiguration$,
  SnoozeAlarmActionRequest$,
  StateChangeConfiguration$,
  SystemEvent$,
  ThrottlingException,
  ThrottlingException$,
  Timer$,
  TimerDefinition$,
  TimestampValue$,
  TriggerType,
  UpdateDetectorRequest$,
  Variable$,
  VariableDefinition$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTEventsDataClient === "function");
assert(typeof IoTEventsData === "function");
// commands
assert(typeof BatchAcknowledgeAlarmCommand === "function");
assert(typeof BatchAcknowledgeAlarm$ === "object");
assert(typeof BatchDeleteDetectorCommand === "function");
assert(typeof BatchDeleteDetector$ === "object");
assert(typeof BatchDisableAlarmCommand === "function");
assert(typeof BatchDisableAlarm$ === "object");
assert(typeof BatchEnableAlarmCommand === "function");
assert(typeof BatchEnableAlarm$ === "object");
assert(typeof BatchPutMessageCommand === "function");
assert(typeof BatchPutMessage$ === "object");
assert(typeof BatchResetAlarmCommand === "function");
assert(typeof BatchResetAlarm$ === "object");
assert(typeof BatchSnoozeAlarmCommand === "function");
assert(typeof BatchSnoozeAlarm$ === "object");
assert(typeof BatchUpdateDetectorCommand === "function");
assert(typeof BatchUpdateDetector$ === "object");
assert(typeof DescribeAlarmCommand === "function");
assert(typeof DescribeAlarm$ === "object");
assert(typeof DescribeDetectorCommand === "function");
assert(typeof DescribeDetector$ === "object");
assert(typeof ListAlarmsCommand === "function");
assert(typeof ListAlarms$ === "object");
assert(typeof ListDetectorsCommand === "function");
assert(typeof ListDetectors$ === "object");
// structural schemas
assert(typeof AcknowledgeActionConfiguration$ === "object");
assert(typeof AcknowledgeAlarmActionRequest$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmState$ === "object");
assert(typeof AlarmSummary$ === "object");
assert(typeof BatchAcknowledgeAlarmRequest$ === "object");
assert(typeof BatchAcknowledgeAlarmResponse$ === "object");
assert(typeof BatchAlarmActionErrorEntry$ === "object");
assert(typeof BatchDeleteDetectorErrorEntry$ === "object");
assert(typeof BatchDeleteDetectorRequest$ === "object");
assert(typeof BatchDeleteDetectorResponse$ === "object");
assert(typeof BatchDisableAlarmRequest$ === "object");
assert(typeof BatchDisableAlarmResponse$ === "object");
assert(typeof BatchEnableAlarmRequest$ === "object");
assert(typeof BatchEnableAlarmResponse$ === "object");
assert(typeof BatchPutMessageErrorEntry$ === "object");
assert(typeof BatchPutMessageRequest$ === "object");
assert(typeof BatchPutMessageResponse$ === "object");
assert(typeof BatchResetAlarmRequest$ === "object");
assert(typeof BatchResetAlarmResponse$ === "object");
assert(typeof BatchSnoozeAlarmRequest$ === "object");
assert(typeof BatchSnoozeAlarmResponse$ === "object");
assert(typeof BatchUpdateDetectorErrorEntry$ === "object");
assert(typeof BatchUpdateDetectorRequest$ === "object");
assert(typeof BatchUpdateDetectorResponse$ === "object");
assert(typeof CustomerAction$ === "object");
assert(typeof DeleteDetectorRequest$ === "object");
assert(typeof DescribeAlarmRequest$ === "object");
assert(typeof DescribeAlarmResponse$ === "object");
assert(typeof DescribeDetectorRequest$ === "object");
assert(typeof DescribeDetectorResponse$ === "object");
assert(typeof Detector$ === "object");
assert(typeof DetectorState$ === "object");
assert(typeof DetectorStateDefinition$ === "object");
assert(typeof DetectorStateSummary$ === "object");
assert(typeof DetectorSummary$ === "object");
assert(typeof DisableActionConfiguration$ === "object");
assert(typeof DisableAlarmActionRequest$ === "object");
assert(typeof EnableActionConfiguration$ === "object");
assert(typeof EnableAlarmActionRequest$ === "object");
assert(typeof ListAlarmsRequest$ === "object");
assert(typeof ListAlarmsResponse$ === "object");
assert(typeof ListDetectorsRequest$ === "object");
assert(typeof ListDetectorsResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof ResetActionConfiguration$ === "object");
assert(typeof ResetAlarmActionRequest$ === "object");
assert(typeof RuleEvaluation$ === "object");
assert(typeof SimpleRuleEvaluation$ === "object");
assert(typeof SnoozeActionConfiguration$ === "object");
assert(typeof SnoozeAlarmActionRequest$ === "object");
assert(typeof StateChangeConfiguration$ === "object");
assert(typeof SystemEvent$ === "object");
assert(typeof Timer$ === "object");
assert(typeof TimerDefinition$ === "object");
assert(typeof TimestampValue$ === "object");
assert(typeof UpdateDetectorRequest$ === "object");
assert(typeof Variable$ === "object");
assert(typeof VariableDefinition$ === "object");
// enums
assert(typeof AlarmStateName === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof CustomerActionName === "object");
assert(typeof ErrorCode === "object");
assert(typeof EventType === "object");
assert(typeof TriggerType === "object");
// errors
assert(InternalFailureException.prototype instanceof IoTEventsDataServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTEventsDataServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTEventsDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTEventsDataServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTEventsDataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(IoTEventsDataServiceException.prototype instanceof Error);
console.log(`IoTEventsData index test passed.`);
