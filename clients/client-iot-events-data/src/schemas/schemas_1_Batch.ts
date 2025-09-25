// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _A,
  _a,
  _AAAR,
  _AAARc,
  _AAC,
  _aAC,
  _aAR,
  _aMN,
  _aMV,
  _aN,
  _AS,
  _aS,
  _ASl,
  _aSl,
  _ASla,
  _BAA,
  _BAAEE,
  _BAAEEa,
  _BAAR,
  _BAARa,
  _BDA,
  _BDAR,
  _BDARa,
  _BDD,
  _BDDEE,
  _bDDEE,
  _BDDEEa,
  _BDDR,
  _BDDRa,
  _BEA,
  _BEAR,
  _BEARa,
  _BRA,
  _BRAR,
  _BRARa,
  _BSA,
  _BSAR,
  _BSARa,
  _BUD,
  _BUDEE,
  _bUDEE,
  _BUDEEa,
  _BUDR,
  _BUDRa,
  _c,
  _CA,
  _cA,
  _cT,
  _D,
  _d,
  _DA,
  _DAAR,
  _DAARi,
  _DAC,
  _dAC,
  _DAR,
  _dAR,
  _DARe,
  _DD,
  _DDR,
  _DDRe,
  _DDRel,
  _DDRes,
  _de,
  _dMN,
  _dMV,
  _DS,
  _dS,
  _DSD,
  _DSe,
  _DSet,
  _DSS,
  _e,
  _EAAR,
  _EAARn,
  _EAC,
  _eAC,
  _eAR,
  _eC,
  _eE,
  _eM,
  _eT,
  _h,
  _hE,
  _hQ,
  _iPV,
  _kV,
  _LA,
  _LAR,
  _LARi,
  _LD,
  _LDR,
  _LDRi,
  _lUT,
  _me,
  _mI,
  _mR,
  _n,
  _na,
  _nT,
  _o,
  _RAAR,
  _RAARe,
  _RAC,
  _rAC,
  _rAR,
  _RE,
  _rE,
  _rI,
  _RNFE,
  _s,
  _SAAR,
  _SAARn,
  _SAC,
  _sAC,
  _sAR,
  _SCC,
  _sCC,
  _sD,
  _SE,
  _sE,
  _sec,
  _sN,
  _SRE,
  _sRE,
  _st,
  _T,
  _t,
  _TD,
  _TDi,
  _Ti,
  _ti,
  _tT,
  _tV,
  _UDR,
  _UDRp,
  _V,
  _v,
  _Va,
  _va,
  _VD,
  _VDa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcknowledgeActionConfiguration = struct(n0, _AAC, 0, [_n], [0]);
export var AcknowledgeAlarmActionRequest = struct(n0, _AAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]);
export var Alarm = struct(n0, _A, 0, [_aMN, _aMV, _kV, _aS, _s, _cT, _lUT], [0, 0, 0, () => AlarmState, 1, 4, 4]);
export var AlarmState = struct(
  n0,
  _AS,
  0,
  [_sN, _rE, _cA, _sE],
  [0, () => RuleEvaluation, () => CustomerAction, () => SystemEvent]
);
export var AlarmSummary = struct(n0, _ASl, 0, [_aMN, _aMV, _kV, _sN, _cT, _lUT], [0, 0, 0, 0, 4, 4]);
export var BatchAcknowledgeAlarmRequest = struct(n0, _BAAR, 0, [_aAR], [() => AcknowledgeAlarmActionRequests]);
export var BatchAcknowledgeAlarmResponse = struct(n0, _BAARa, 0, [_eE], [() => BatchAlarmActionErrorEntries]);
export var BatchAlarmActionErrorEntry = struct(n0, _BAAEE, 0, [_rI, _eC, _eM], [0, 0, 0]);
export var BatchDeleteDetectorErrorEntry = struct(n0, _BDDEE, 0, [_mI, _eC, _eM], [0, 0, 0]);
export var BatchDeleteDetectorRequest = struct(n0, _BDDR, 0, [_d], [() => DeleteDetectorRequests]);
export var BatchDeleteDetectorResponse = struct(n0, _BDDRa, 0, [_bDDEE], [() => BatchDeleteDetectorErrorEntries]);
export var BatchDisableAlarmRequest = struct(n0, _BDAR, 0, [_dAR], [() => DisableAlarmActionRequests]);
export var BatchDisableAlarmResponse = struct(n0, _BDARa, 0, [_eE], [() => BatchAlarmActionErrorEntries]);
export var BatchEnableAlarmRequest = struct(n0, _BEAR, 0, [_eAR], [() => EnableAlarmActionRequests]);
export var BatchEnableAlarmResponse = struct(n0, _BEARa, 0, [_eE], [() => BatchAlarmActionErrorEntries]);
export var BatchResetAlarmRequest = struct(n0, _BRAR, 0, [_rAR], [() => ResetAlarmActionRequests]);
export var BatchResetAlarmResponse = struct(n0, _BRARa, 0, [_eE], [() => BatchAlarmActionErrorEntries]);
export var BatchSnoozeAlarmRequest = struct(n0, _BSAR, 0, [_sAR], [() => SnoozeAlarmActionRequests]);
export var BatchSnoozeAlarmResponse = struct(n0, _BSARa, 0, [_eE], [() => BatchAlarmActionErrorEntries]);
export var BatchUpdateDetectorErrorEntry = struct(n0, _BUDEE, 0, [_mI, _eC, _eM], [0, 0, 0]);
export var BatchUpdateDetectorRequest = struct(n0, _BUDR, 0, [_d], [() => UpdateDetectorRequests]);
export var BatchUpdateDetectorResponse = struct(n0, _BUDRa, 0, [_bUDEE], [() => BatchUpdateDetectorErrorEntries]);
export var CustomerAction = struct(
  n0,
  _CA,
  0,
  [_aN, _sAC, _eAC, _dAC, _aAC, _rAC],
  [
    0,
    () => SnoozeActionConfiguration,
    () => EnableActionConfiguration,
    () => DisableActionConfiguration,
    () => AcknowledgeActionConfiguration,
    () => ResetActionConfiguration,
  ]
);
export var DeleteDetectorRequest = struct(n0, _DDR, 0, [_mI, _dMN, _kV], [0, 0, 0]);
export var DescribeAlarmRequest = struct(
  n0,
  _DAR,
  0,
  [_aMN, _kV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _kV,
      },
    ],
  ]
);
export var DescribeAlarmResponse = struct(n0, _DARe, 0, [_a], [() => Alarm]);
export var DescribeDetectorRequest = struct(
  n0,
  _DDRe,
  0,
  [_dMN, _kV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _kV,
      },
    ],
  ]
);
export var DescribeDetectorResponse = struct(n0, _DDRes, 0, [_de], [() => Detector]);
export var Detector = struct(n0, _D, 0, [_dMN, _kV, _dMV, _st, _cT, _lUT], [0, 0, 0, () => DetectorState, 4, 4]);
export var DetectorState = struct(n0, _DS, 0, [_sN, _v, _t], [0, () => Variables, () => Timers]);
export var DetectorStateDefinition = struct(
  n0,
  _DSD,
  0,
  [_sN, _v, _t],
  [0, () => VariableDefinitions, () => TimerDefinitions]
);
export var DetectorStateSummary = struct(n0, _DSS, 0, [_sN], [0]);
export var DetectorSummary = struct(
  n0,
  _DSe,
  0,
  [_dMN, _kV, _dMV, _st, _cT, _lUT],
  [0, 0, 0, () => DetectorStateSummary, 4, 4]
);
export var DisableActionConfiguration = struct(n0, _DAC, 0, [_n], [0]);
export var DisableAlarmActionRequest = struct(n0, _DAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]);
export var EnableActionConfiguration = struct(n0, _EAC, 0, [_n], [0]);
export var EnableAlarmActionRequest = struct(n0, _EAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]);
export var ListAlarmsRequest = struct(
  n0,
  _LAR,
  0,
  [_aMN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAlarmsResponse = struct(n0, _LARi, 0, [_aSl, _nT], [() => AlarmSummaries, 0]);
export var ListDetectorsRequest = struct(
  n0,
  _LDR,
  0,
  [_dMN, _sN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sN,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDetectorsResponse = struct(n0, _LDRi, 0, [_dS, _nT], [() => DetectorSummaries, 0]);
export var ResetActionConfiguration = struct(n0, _RAC, 0, [_n], [0]);
export var ResetAlarmActionRequest = struct(n0, _RAAR, 0, [_rI, _aMN, _kV, _n], [0, 0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_me],
  [0],

  __ResourceNotFoundException
);
export var RuleEvaluation = struct(n0, _RE, 0, [_sRE], [() => SimpleRuleEvaluation]);
export var SimpleRuleEvaluation = struct(n0, _SRE, 0, [_iPV, _o, _tV], [0, 0, 0]);
export var SnoozeActionConfiguration = struct(n0, _SAC, 0, [_sD, _n], [1, 0]);
export var SnoozeAlarmActionRequest = struct(n0, _SAAR, 0, [_rI, _aMN, _kV, _n, _sD], [0, 0, 0, 0, 1]);
export var StateChangeConfiguration = struct(n0, _SCC, 0, [_tT], [0]);
export var SystemEvent = struct(n0, _SE, 0, [_eT, _sCC], [0, () => StateChangeConfiguration]);
export var Timer = struct(n0, _T, 0, [_na, _ti], [0, 4]);
export var TimerDefinition = struct(n0, _TD, 0, [_na, _sec], [0, 1]);
export var UpdateDetectorRequest = struct(n0, _UDR, 0, [_mI, _dMN, _kV, _st], [0, 0, 0, () => DetectorStateDefinition]);
export var Variable = struct(n0, _V, 0, [_na, _va], [0, 0]);
export var VariableDefinition = struct(n0, _VD, 0, [_na, _va], [0, 0]);
export var AcknowledgeAlarmActionRequests = list(n0, _AAARc, 0, () => AcknowledgeAlarmActionRequest);
export var AlarmSummaries = list(n0, _ASla, 0, () => AlarmSummary);
export var BatchAlarmActionErrorEntries = list(n0, _BAAEEa, 0, () => BatchAlarmActionErrorEntry);
export var BatchDeleteDetectorErrorEntries = list(n0, _BDDEEa, 0, () => BatchDeleteDetectorErrorEntry);
export var BatchUpdateDetectorErrorEntries = list(n0, _BUDEEa, 0, () => BatchUpdateDetectorErrorEntry);
export var DeleteDetectorRequests = list(n0, _DDRel, 0, () => DeleteDetectorRequest);
export var DetectorSummaries = list(n0, _DSet, 0, () => DetectorSummary);
export var DisableAlarmActionRequests = list(n0, _DAARi, 0, () => DisableAlarmActionRequest);
export var EnableAlarmActionRequests = list(n0, _EAARn, 0, () => EnableAlarmActionRequest);
export var ResetAlarmActionRequests = list(n0, _RAARe, 0, () => ResetAlarmActionRequest);
export var SnoozeAlarmActionRequests = list(n0, _SAARn, 0, () => SnoozeAlarmActionRequest);
export var TimerDefinitions = list(n0, _TDi, 0, () => TimerDefinition);
export var Timers = list(n0, _Ti, 0, () => Timer);
export var UpdateDetectorRequests = list(n0, _UDRp, 0, () => UpdateDetectorRequest);
export var VariableDefinitions = list(n0, _VDa, 0, () => VariableDefinition);
export var Variables = list(n0, _Va, 0, () => Variable);
export var BatchAcknowledgeAlarm = op(
  n0,
  _BAA,
  {
    [_h]: ["POST", "/alarms/acknowledge", 202],
  },
  () => BatchAcknowledgeAlarmRequest,
  () => BatchAcknowledgeAlarmResponse
);
export var BatchDeleteDetector = op(
  n0,
  _BDD,
  {
    [_h]: ["POST", "/detectors/delete", 200],
  },
  () => BatchDeleteDetectorRequest,
  () => BatchDeleteDetectorResponse
);
export var BatchDisableAlarm = op(
  n0,
  _BDA,
  {
    [_h]: ["POST", "/alarms/disable", 202],
  },
  () => BatchDisableAlarmRequest,
  () => BatchDisableAlarmResponse
);
export var BatchEnableAlarm = op(
  n0,
  _BEA,
  {
    [_h]: ["POST", "/alarms/enable", 202],
  },
  () => BatchEnableAlarmRequest,
  () => BatchEnableAlarmResponse
);
export var BatchResetAlarm = op(
  n0,
  _BRA,
  {
    [_h]: ["POST", "/alarms/reset", 202],
  },
  () => BatchResetAlarmRequest,
  () => BatchResetAlarmResponse
);
export var BatchSnoozeAlarm = op(
  n0,
  _BSA,
  {
    [_h]: ["POST", "/alarms/snooze", 202],
  },
  () => BatchSnoozeAlarmRequest,
  () => BatchSnoozeAlarmResponse
);
export var BatchUpdateDetector = op(
  n0,
  _BUD,
  {
    [_h]: ["POST", "/detectors", 200],
  },
  () => BatchUpdateDetectorRequest,
  () => BatchUpdateDetectorResponse
);
export var DescribeAlarm = op(
  n0,
  _DA,
  {
    [_h]: ["GET", "/alarms/{alarmModelName}/keyValues", 200],
  },
  () => DescribeAlarmRequest,
  () => DescribeAlarmResponse
);
export var DescribeDetector = op(
  n0,
  _DD,
  {
    [_h]: ["GET", "/detectors/{detectorModelName}/keyValues", 200],
  },
  () => DescribeDetectorRequest,
  () => DescribeDetectorResponse
);
export var ListAlarms = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/alarms/{alarmModelName}", 200],
  },
  () => ListAlarmsRequest,
  () => ListAlarmsResponse
);
export var ListDetectors = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/detectors/{detectorModelName}", 200],
  },
  () => ListDetectorsRequest,
  () => ListDetectorsResponse
);
