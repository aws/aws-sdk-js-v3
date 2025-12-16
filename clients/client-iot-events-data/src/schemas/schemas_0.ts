const _A = "Alarm";
const _AAAR = "AcknowledgeAlarmActionRequest";
const _AAARc = "AcknowledgeAlarmActionRequests";
const _AAC = "AcknowledgeActionConfiguration";
const _AS = "AlarmState";
const _ASl = "AlarmSummary";
const _ASla = "AlarmSummaries";
const _BAA = "BatchAcknowledgeAlarm";
const _BAAEE = "BatchAlarmActionErrorEntry";
const _BAAEEa = "BatchAlarmActionErrorEntries";
const _BAAR = "BatchAcknowledgeAlarmRequest";
const _BAARa = "BatchAcknowledgeAlarmResponse";
const _BDA = "BatchDisableAlarm";
const _BDAR = "BatchDisableAlarmRequest";
const _BDARa = "BatchDisableAlarmResponse";
const _BDD = "BatchDeleteDetector";
const _BDDEE = "BatchDeleteDetectorErrorEntry";
const _BDDEEa = "BatchDeleteDetectorErrorEntries";
const _BDDR = "BatchDeleteDetectorRequest";
const _BDDRa = "BatchDeleteDetectorResponse";
const _BEA = "BatchEnableAlarm";
const _BEAR = "BatchEnableAlarmRequest";
const _BEARa = "BatchEnableAlarmResponse";
const _BPM = "BatchPutMessage";
const _BPMEE = "BatchPutMessageErrorEntry";
const _BPMEEa = "BatchPutMessageErrorEntries";
const _BPMR = "BatchPutMessageRequest";
const _BPMRa = "BatchPutMessageResponse";
const _BRA = "BatchResetAlarm";
const _BRAR = "BatchResetAlarmRequest";
const _BRARa = "BatchResetAlarmResponse";
const _BSA = "BatchSnoozeAlarm";
const _BSAR = "BatchSnoozeAlarmRequest";
const _BSARa = "BatchSnoozeAlarmResponse";
const _BUD = "BatchUpdateDetector";
const _BUDEE = "BatchUpdateDetectorErrorEntry";
const _BUDEEa = "BatchUpdateDetectorErrorEntries";
const _BUDR = "BatchUpdateDetectorRequest";
const _BUDRa = "BatchUpdateDetectorResponse";
const _CA = "CustomerAction";
const _D = "Detector";
const _DA = "DescribeAlarm";
const _DAAR = "DisableAlarmActionRequest";
const _DAARi = "DisableAlarmActionRequests";
const _DAC = "DisableActionConfiguration";
const _DAR = "DescribeAlarmRequest";
const _DARe = "DescribeAlarmResponse";
const _DD = "DescribeDetector";
const _DDR = "DeleteDetectorRequest";
const _DDRe = "DescribeDetectorRequest";
const _DDRel = "DeleteDetectorRequests";
const _DDRes = "DescribeDetectorResponse";
const _DS = "DetectorState";
const _DSD = "DetectorStateDefinition";
const _DSS = "DetectorStateSummary";
const _DSe = "DetectorSummary";
const _DSet = "DetectorSummaries";
const _EAAR = "EnableAlarmActionRequest";
const _EAARn = "EnableAlarmActionRequests";
const _EAC = "EnableActionConfiguration";
const _IFE = "InternalFailureException";
const _IRE = "InvalidRequestException";
const _LA = "ListAlarms";
const _LAR = "ListAlarmsRequest";
const _LARi = "ListAlarmsResponse";
const _LD = "ListDetectors";
const _LDR = "ListDetectorsRequest";
const _LDRi = "ListDetectorsResponse";
const _M = "Message";
const _Me = "Messages";
const _RAAR = "ResetAlarmActionRequest";
const _RAARe = "ResetAlarmActionRequests";
const _RAC = "ResetActionConfiguration";
const _RE = "RuleEvaluation";
const _RNFE = "ResourceNotFoundException";
const _SAAR = "SnoozeAlarmActionRequest";
const _SAARn = "SnoozeAlarmActionRequests";
const _SAC = "SnoozeActionConfiguration";
const _SCC = "StateChangeConfiguration";
const _SE = "SystemEvent";
const _SRE = "SimpleRuleEvaluation";
const _SUE = "ServiceUnavailableException";
const _T = "Timer";
const _TD = "TimerDefinition";
const _TDi = "TimerDefinitions";
const _TE = "ThrottlingException";
const _TV = "TimestampValue";
const _Ti = "Timers";
const _UDR = "UpdateDetectorRequest";
const _UDRp = "UpdateDetectorRequests";
const _V = "Variable";
const _VD = "VariableDefinition";
const _VDa = "VariableDefinitions";
const _Va = "Variables";
const _a = "alarm";
const _aAC = "acknowledgeActionConfiguration";
const _aAR = "acknowledgeActionRequests";
const _aMN = "alarmModelName";
const _aMV = "alarmModelVersion";
const _aN = "actionName";
const _aS = "alarmState";
const _aSl = "alarmSummaries";
const _bDDEE = "batchDeleteDetectorErrorEntries";
const _bUDEE = "batchUpdateDetectorErrorEntries";
const _c = "client";
const _cA = "customerAction";
const _cT = "creationTime";
const _d = "detectors";
const _dAC = "disableActionConfiguration";
const _dAR = "disableActionRequests";
const _dMN = "detectorModelName";
const _dMV = "detectorModelVersion";
const _dS = "detectorSummaries";
const _de = "detector";
const _e = "error";
const _eAC = "enableActionConfiguration";
const _eAR = "enableActionRequests";
const _eC = "errorCode";
const _eE = "errorEntries";
const _eM = "errorMessage";
const _eT = "eventType";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iN = "inputName";
const _iPV = "inputPropertyValue";
const _kV = "keyValue";
const _lUT = "lastUpdateTime";
const _m = "messages";
const _mI = "messageId";
const _mR = "maxResults";
const _me = "message";
const _n = "note";
const _nT = "nextToken";
const _na = "name";
const _o = "operator";
const _p = "payload";
const _rAC = "resetActionConfiguration";
const _rAR = "resetActionRequests";
const _rE = "ruleEvaluation";
const _rI = "requestId";
const _s = "severity";
const _sAC = "snoozeActionConfiguration";
const _sAR = "snoozeActionRequests";
const _sCC = "stateChangeConfiguration";
const _sD = "snoozeDuration";
const _sE = "systemEvent";
const _sN = "stateName";
const _sRE = "simpleRuleEvaluation";
const _se = "server";
const _sec = "seconds";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ioteventsdata";
const _st = "state";
const _t = "timers";
const _tIM = "timeInMillis";
const _tT = "triggerType";
const _tV = "thresholdValue";
const _ti = "timestamp";
const _v = "variables";
const _va = "value";
const n0 = "com.amazonaws.ioteventsdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  InternalFailureException,
  InvalidRequestException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "../models/errors";
import { IoTEventsDataServiceException } from "../models/IoTEventsDataServiceException";

/* eslint no-var: 0 */
export var AcknowledgeActionConfiguration$: StaticStructureSchema = [3, n0, _AAC, 0, [_n], [0]];
export var AcknowledgeAlarmActionRequest$: StaticStructureSchema = [
  3,
  n0,
  _AAAR,
  0,
  [_rI, _aMN, _kV, _n],
  [0, 0, 0, 0],
];
export var Alarm$: StaticStructureSchema = [
  3,
  n0,
  _A,
  0,
  [_aMN, _aMV, _kV, _aS, _s, _cT, _lUT],
  [0, 0, 0, () => AlarmState$, 1, 4, 4],
];
export var AlarmState$: StaticStructureSchema = [
  3,
  n0,
  _AS,
  0,
  [_sN, _rE, _cA, _sE],
  [0, () => RuleEvaluation$, () => CustomerAction$, () => SystemEvent$],
];
export var AlarmSummary$: StaticStructureSchema = [
  3,
  n0,
  _ASl,
  0,
  [_aMN, _aMV, _kV, _sN, _cT, _lUT],
  [0, 0, 0, 0, 4, 4],
];
export var BatchAcknowledgeAlarmRequest$: StaticStructureSchema = [
  3,
  n0,
  _BAAR,
  0,
  [_aAR],
  [() => AcknowledgeAlarmActionRequests],
];
export var BatchAcknowledgeAlarmResponse$: StaticStructureSchema = [
  3,
  n0,
  _BAARa,
  0,
  [_eE],
  [() => BatchAlarmActionErrorEntries],
];
export var BatchAlarmActionErrorEntry$: StaticStructureSchema = [3, n0, _BAAEE, 0, [_rI, _eC, _eM], [0, 0, 0]];
export var BatchDeleteDetectorErrorEntry$: StaticStructureSchema = [3, n0, _BDDEE, 0, [_mI, _eC, _eM], [0, 0, 0]];
export var BatchDeleteDetectorRequest$: StaticStructureSchema = [3, n0, _BDDR, 0, [_d], [() => DeleteDetectorRequests]];
export var BatchDeleteDetectorResponse$: StaticStructureSchema = [
  3,
  n0,
  _BDDRa,
  0,
  [_bDDEE],
  [() => BatchDeleteDetectorErrorEntries],
];
export var BatchDisableAlarmRequest$: StaticStructureSchema = [
  3,
  n0,
  _BDAR,
  0,
  [_dAR],
  [() => DisableAlarmActionRequests],
];
export var BatchDisableAlarmResponse$: StaticStructureSchema = [
  3,
  n0,
  _BDARa,
  0,
  [_eE],
  [() => BatchAlarmActionErrorEntries],
];
export var BatchEnableAlarmRequest$: StaticStructureSchema = [
  3,
  n0,
  _BEAR,
  0,
  [_eAR],
  [() => EnableAlarmActionRequests],
];
export var BatchEnableAlarmResponse$: StaticStructureSchema = [
  3,
  n0,
  _BEARa,
  0,
  [_eE],
  [() => BatchAlarmActionErrorEntries],
];
export var BatchPutMessageErrorEntry$: StaticStructureSchema = [3, n0, _BPMEE, 0, [_mI, _eC, _eM], [0, 0, 0]];
export var BatchPutMessageRequest$: StaticStructureSchema = [3, n0, _BPMR, 0, [_m], [() => Messages]];
export var BatchPutMessageResponse$: StaticStructureSchema = [
  3,
  n0,
  _BPMRa,
  0,
  [_BPMEEa],
  [() => BatchPutMessageErrorEntries],
];
export var BatchResetAlarmRequest$: StaticStructureSchema = [3, n0, _BRAR, 0, [_rAR], [() => ResetAlarmActionRequests]];
export var BatchResetAlarmResponse$: StaticStructureSchema = [
  3,
  n0,
  _BRARa,
  0,
  [_eE],
  [() => BatchAlarmActionErrorEntries],
];
export var BatchSnoozeAlarmRequest$: StaticStructureSchema = [
  3,
  n0,
  _BSAR,
  0,
  [_sAR],
  [() => SnoozeAlarmActionRequests],
];
export var BatchSnoozeAlarmResponse$: StaticStructureSchema = [
  3,
  n0,
  _BSARa,
  0,
  [_eE],
  [() => BatchAlarmActionErrorEntries],
];
export var BatchUpdateDetectorErrorEntry$: StaticStructureSchema = [3, n0, _BUDEE, 0, [_mI, _eC, _eM], [0, 0, 0]];
export var BatchUpdateDetectorRequest$: StaticStructureSchema = [3, n0, _BUDR, 0, [_d], [() => UpdateDetectorRequests]];
export var BatchUpdateDetectorResponse$: StaticStructureSchema = [
  3,
  n0,
  _BUDRa,
  0,
  [_bUDEE],
  [() => BatchUpdateDetectorErrorEntries],
];
export var CustomerAction$: StaticStructureSchema = [
  3,
  n0,
  _CA,
  0,
  [_aN, _sAC, _eAC, _dAC, _aAC, _rAC],
  [
    0,
    () => SnoozeActionConfiguration$,
    () => EnableActionConfiguration$,
    () => DisableActionConfiguration$,
    () => AcknowledgeActionConfiguration$,
    () => ResetActionConfiguration$,
  ],
];
export var DeleteDetectorRequest$: StaticStructureSchema = [3, n0, _DDR, 0, [_mI, _dMN, _kV], [0, 0, 0]];
export var DescribeAlarmRequest$: StaticStructureSchema = [
  3,
  n0,
  _DAR,
  0,
  [_aMN, _kV],
  [
    [0, 1],
    [0, { [_hQ]: _kV }],
  ],
];
export var DescribeAlarmResponse$: StaticStructureSchema = [3, n0, _DARe, 0, [_a], [() => Alarm$]];
export var DescribeDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _DDRe,
  0,
  [_dMN, _kV],
  [
    [0, 1],
    [0, { [_hQ]: _kV }],
  ],
];
export var DescribeDetectorResponse$: StaticStructureSchema = [3, n0, _DDRes, 0, [_de], [() => Detector$]];
export var Detector$: StaticStructureSchema = [
  3,
  n0,
  _D,
  0,
  [_dMN, _kV, _dMV, _st, _cT, _lUT],
  [0, 0, 0, () => DetectorState$, 4, 4],
];
export var DetectorState$: StaticStructureSchema = [3, n0, _DS, 0, [_sN, _v, _t], [0, () => Variables, () => Timers]];
export var DetectorStateDefinition$: StaticStructureSchema = [
  3,
  n0,
  _DSD,
  0,
  [_sN, _v, _t],
  [0, () => VariableDefinitions, () => TimerDefinitions],
];
export var DetectorStateSummary$: StaticStructureSchema = [3, n0, _DSS, 0, [_sN], [0]];
export var DetectorSummary$: StaticStructureSchema = [
  3,
  n0,
  _DSe,
  0,
  [_dMN, _kV, _dMV, _st, _cT, _lUT],
  [0, 0, 0, () => DetectorStateSummary$, 4, 4],
];
export var DisableActionConfiguration$: StaticStructureSchema = [3, n0, _DAC, 0, [_n], [0]];
export var DisableAlarmActionRequest$: StaticStructureSchema = [3, n0, _DAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]];
export var EnableActionConfiguration$: StaticStructureSchema = [3, n0, _EAC, 0, [_n], [0]];
export var EnableAlarmActionRequest$: StaticStructureSchema = [3, n0, _EAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]];
export var InternalFailureException$: StaticErrorSchema = [-3, n0, _IFE, { [_e]: _se, [_hE]: 500 }, [_me], [0]];
TypeRegistry.for(n0).registerError(InternalFailureException$, InternalFailureException);
export var InvalidRequestException$: StaticErrorSchema = [-3, n0, _IRE, { [_e]: _c, [_hE]: 400 }, [_me], [0]];
TypeRegistry.for(n0).registerError(InvalidRequestException$, InvalidRequestException);
export var ListAlarmsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_aMN, _nT, _mR],
  [
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListAlarmsResponse$: StaticStructureSchema = [3, n0, _LARi, 0, [_aSl, _nT], [() => AlarmSummaries, 0]];
export var ListDetectorsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LDR,
  0,
  [_dMN, _sN, _nT, _mR],
  [
    [0, 1],
    [0, { [_hQ]: _sN }],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListDetectorsResponse$: StaticStructureSchema = [3, n0, _LDRi, 0, [_dS, _nT], [() => DetectorSummaries, 0]];
export var Message$: StaticStructureSchema = [3, n0, _M, 0, [_mI, _iN, _p, _ti], [0, 0, 21, () => TimestampValue$]];
export var ResetActionConfiguration$: StaticStructureSchema = [3, n0, _RAC, 0, [_n], [0]];
export var ResetAlarmActionRequest$: StaticStructureSchema = [3, n0, _RAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_me], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RuleEvaluation$: StaticStructureSchema = [3, n0, _RE, 0, [_sRE], [() => SimpleRuleEvaluation$]];
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE, { [_e]: _se, [_hE]: 503 }, [_me], [0]];
TypeRegistry.for(n0).registerError(ServiceUnavailableException$, ServiceUnavailableException);
export var SimpleRuleEvaluation$: StaticStructureSchema = [3, n0, _SRE, 0, [_iPV, _o, _tV], [0, 0, 0]];
export var SnoozeActionConfiguration$: StaticStructureSchema = [3, n0, _SAC, 0, [_sD, _n], [1, 0]];
export var SnoozeAlarmActionRequest$: StaticStructureSchema = [
  3,
  n0,
  _SAAR,
  0,
  [_rI, _aMN, _kV, _n, _sD],
  [0, 0, 0, 0, 1],
];
export var StateChangeConfiguration$: StaticStructureSchema = [3, n0, _SCC, 0, [_tT], [0]];
export var SystemEvent$: StaticStructureSchema = [3, n0, _SE, 0, [_eT, _sCC], [0, () => StateChangeConfiguration$]];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_me], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var Timer$: StaticStructureSchema = [3, n0, _T, 0, [_na, _ti], [0, 4]];
export var TimerDefinition$: StaticStructureSchema = [3, n0, _TD, 0, [_na, _sec], [0, 1]];
export var TimestampValue$: StaticStructureSchema = [3, n0, _TV, 0, [_tIM], [1]];
export var UpdateDetectorRequest$: StaticStructureSchema = [
  3,
  n0,
  _UDR,
  0,
  [_mI, _dMN, _kV, _st],
  [0, 0, 0, () => DetectorStateDefinition$],
];
export var Variable$: StaticStructureSchema = [3, n0, _V, 0, [_na, _va], [0, 0]];
export var VariableDefinition$: StaticStructureSchema = [3, n0, _VD, 0, [_na, _va], [0, 0]];
export var IoTEventsDataServiceException$: StaticErrorSchema = [-3, _sm, "IoTEventsDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IoTEventsDataServiceException$, IoTEventsDataServiceException);
var AcknowledgeAlarmActionRequests: StaticListSchema = [1, n0, _AAARc, 0, () => AcknowledgeAlarmActionRequest$];
var AlarmSummaries: StaticListSchema = [1, n0, _ASla, 0, () => AlarmSummary$];
var BatchAlarmActionErrorEntries: StaticListSchema = [1, n0, _BAAEEa, 0, () => BatchAlarmActionErrorEntry$];
var BatchDeleteDetectorErrorEntries: StaticListSchema = [1, n0, _BDDEEa, 0, () => BatchDeleteDetectorErrorEntry$];
var BatchPutMessageErrorEntries: StaticListSchema = [1, n0, _BPMEEa, 0, () => BatchPutMessageErrorEntry$];
var BatchUpdateDetectorErrorEntries: StaticListSchema = [1, n0, _BUDEEa, 0, () => BatchUpdateDetectorErrorEntry$];
var DeleteDetectorRequests: StaticListSchema = [1, n0, _DDRel, 0, () => DeleteDetectorRequest$];
var DetectorSummaries: StaticListSchema = [1, n0, _DSet, 0, () => DetectorSummary$];
var DisableAlarmActionRequests: StaticListSchema = [1, n0, _DAARi, 0, () => DisableAlarmActionRequest$];
var EnableAlarmActionRequests: StaticListSchema = [1, n0, _EAARn, 0, () => EnableAlarmActionRequest$];
var Messages: StaticListSchema = [1, n0, _Me, 0, () => Message$];
var ResetAlarmActionRequests: StaticListSchema = [1, n0, _RAARe, 0, () => ResetAlarmActionRequest$];
var SnoozeAlarmActionRequests: StaticListSchema = [1, n0, _SAARn, 0, () => SnoozeAlarmActionRequest$];
var TimerDefinitions: StaticListSchema = [1, n0, _TDi, 0, () => TimerDefinition$];
var Timers: StaticListSchema = [1, n0, _Ti, 0, () => Timer$];
var UpdateDetectorRequests: StaticListSchema = [1, n0, _UDRp, 0, () => UpdateDetectorRequest$];
var VariableDefinitions: StaticListSchema = [1, n0, _VDa, 0, () => VariableDefinition$];
var Variables: StaticListSchema = [1, n0, _Va, 0, () => Variable$];
export var BatchAcknowledgeAlarm$: StaticOperationSchema = [
  9,
  n0,
  _BAA,
  { [_h]: ["POST", "/alarms/acknowledge", 202] },
  () => BatchAcknowledgeAlarmRequest$,
  () => BatchAcknowledgeAlarmResponse$,
];
export var BatchDeleteDetector$: StaticOperationSchema = [
  9,
  n0,
  _BDD,
  { [_h]: ["POST", "/detectors/delete", 200] },
  () => BatchDeleteDetectorRequest$,
  () => BatchDeleteDetectorResponse$,
];
export var BatchDisableAlarm$: StaticOperationSchema = [
  9,
  n0,
  _BDA,
  { [_h]: ["POST", "/alarms/disable", 202] },
  () => BatchDisableAlarmRequest$,
  () => BatchDisableAlarmResponse$,
];
export var BatchEnableAlarm$: StaticOperationSchema = [
  9,
  n0,
  _BEA,
  { [_h]: ["POST", "/alarms/enable", 202] },
  () => BatchEnableAlarmRequest$,
  () => BatchEnableAlarmResponse$,
];
export var BatchPutMessage$: StaticOperationSchema = [
  9,
  n0,
  _BPM,
  { [_h]: ["POST", "/inputs/messages", 200] },
  () => BatchPutMessageRequest$,
  () => BatchPutMessageResponse$,
];
export var BatchResetAlarm$: StaticOperationSchema = [
  9,
  n0,
  _BRA,
  { [_h]: ["POST", "/alarms/reset", 202] },
  () => BatchResetAlarmRequest$,
  () => BatchResetAlarmResponse$,
];
export var BatchSnoozeAlarm$: StaticOperationSchema = [
  9,
  n0,
  _BSA,
  { [_h]: ["POST", "/alarms/snooze", 202] },
  () => BatchSnoozeAlarmRequest$,
  () => BatchSnoozeAlarmResponse$,
];
export var BatchUpdateDetector$: StaticOperationSchema = [
  9,
  n0,
  _BUD,
  { [_h]: ["POST", "/detectors", 200] },
  () => BatchUpdateDetectorRequest$,
  () => BatchUpdateDetectorResponse$,
];
export var DescribeAlarm$: StaticOperationSchema = [
  9,
  n0,
  _DA,
  { [_h]: ["GET", "/alarms/{alarmModelName}/keyValues", 200] },
  () => DescribeAlarmRequest$,
  () => DescribeAlarmResponse$,
];
export var DescribeDetector$: StaticOperationSchema = [
  9,
  n0,
  _DD,
  { [_h]: ["GET", "/detectors/{detectorModelName}/keyValues", 200] },
  () => DescribeDetectorRequest$,
  () => DescribeDetectorResponse$,
];
export var ListAlarms$: StaticOperationSchema = [
  9,
  n0,
  _LA,
  { [_h]: ["GET", "/alarms/{alarmModelName}", 200] },
  () => ListAlarmsRequest$,
  () => ListAlarmsResponse$,
];
export var ListDetectors$: StaticOperationSchema = [
  9,
  n0,
  _LD,
  { [_h]: ["GET", "/detectors/{detectorModelName}", 200] },
  () => ListDetectorsRequest$,
  () => ListDetectorsResponse$,
];
