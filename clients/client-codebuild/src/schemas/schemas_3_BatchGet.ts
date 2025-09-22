// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bCa,
  _BGF,
  _BGFI,
  _BGFO,
  _BGRG,
  _BGRGI,
  _BGRGO,
  _cC,
  _CF,
  _CFI,
  _CFO,
  _cont,
  _cr,
  _CRG,
  _CRGI,
  _CRGO,
  _cT,
  _dB,
  _dC,
  _eCx,
  _ef,
  _ent,
  _eTn,
  _F,
  _f,
  _Fl,
  _fl,
  _fNF,
  _FPR,
  _FPRl,
  _FS,
  _fSR,
  _id,
  _iI,
  _k,
  _lMa,
  _m,
  _mCa,
  _mTe,
  _n,
  _na,
  _oB,
  _oPR,
  _pC,
  _PCro,
  _RG,
  _rG,
  _rGA,
  _RGe,
  _rGe,
  _rGNF,
  _sC,
  _sCc,
  _SCI,
  _SCO,
  _st,
  _sTc,
  _T,
  _t,
  _ta,
  _TL,
  _TTSC,
  _tTSC,
  _TTSCa,
  _tVa,
  _UF,
  _UFI,
  _UFO,
  _URG,
  _URGI,
  _URGO,
  _va,
  _vC,
  ComputeConfiguration,
  n0,
  VpcConfig,
} from "./schemas_0";
import { ReportExportConfig } from "./schemas_1_Report";

/* eslint no-var: 0 */

export var BatchGetFleetsInput = struct(n0, _BGFI, 0, [_n], [64 | 0]);
export var BatchGetFleetsOutput = struct(n0, _BGFO, 0, [_f, _fNF], [() => Fleets, 64 | 0]);
export var BatchGetReportGroupsInput = struct(n0, _BGRGI, 0, [_rGA], [64 | 0]);
export var BatchGetReportGroupsOutput = struct(n0, _BGRGO, 0, [_rG, _rGNF], [() => ReportGroups, 64 | 0]);
export var CreateFleetInput = struct(
  n0,
  _CFI,
  0,
  [_na, _bCa, _eTn, _cT, _cC, _sCc, _oB, _vC, _pC, _iI, _fSR, _ta],
  [
    0,
    1,
    0,
    0,
    () => ComputeConfiguration,
    () => ScalingConfigurationInput,
    0,
    () => VpcConfig,
    () => ProxyConfiguration,
    0,
    0,
    () => TagList,
  ]
);
export var CreateFleetOutput = struct(n0, _CFO, 0, [_fl], [() => Fleet]);
export var CreateReportGroupInput = struct(
  n0,
  _CRGI,
  0,
  [_na, _t, _eCx, _ta],
  [0, 0, () => ReportExportConfig, () => TagList]
);
export var CreateReportGroupOutput = struct(n0, _CRGO, 0, [_rGe], [() => ReportGroup]);
export var Fleet = struct(
  n0,
  _F,
  0,
  [_a, _na, _id, _cr, _lMa, _st, _bCa, _eTn, _cT, _cC, _sCc, _oB, _vC, _pC, _iI, _fSR, _ta],
  [
    0,
    0,
    0,
    4,
    4,
    () => FleetStatus,
    1,
    0,
    0,
    () => ComputeConfiguration,
    () => ScalingConfigurationOutput,
    0,
    () => VpcConfig,
    () => ProxyConfiguration,
    0,
    0,
    () => TagList,
  ]
);
export var FleetProxyRule = struct(n0, _FPR, 0, [_t, _ef, _ent], [0, 0, 64 | 0]);
export var FleetStatus = struct(n0, _FS, 0, [_sC, _cont, _m], [0, 0, 0]);
export var ProxyConfiguration = struct(n0, _PCro, 0, [_dB, _oPR], [0, () => FleetProxyRules]);
export var ReportGroup = struct(
  n0,
  _RG,
  0,
  [_a, _na, _t, _eCx, _cr, _lMa, _ta, _st],
  [0, 0, 0, () => ReportExportConfig, 4, 4, () => TagList, 0]
);
export var ScalingConfigurationInput = struct(
  n0,
  _SCI,
  0,
  [_sTc, _tTSC, _mCa],
  [0, () => TargetTrackingScalingConfigurations, 1]
);
export var ScalingConfigurationOutput = struct(
  n0,
  _SCO,
  0,
  [_sTc, _tTSC, _mCa, _dC],
  [0, () => TargetTrackingScalingConfigurations, 1, 1]
);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TargetTrackingScalingConfiguration = struct(n0, _TTSC, 0, [_mTe, _tVa], [0, 1]);
export var UpdateFleetInput = struct(
  n0,
  _UFI,
  0,
  [_a, _bCa, _eTn, _cT, _cC, _sCc, _oB, _vC, _pC, _iI, _fSR, _ta],
  [
    0,
    1,
    0,
    0,
    () => ComputeConfiguration,
    () => ScalingConfigurationInput,
    0,
    () => VpcConfig,
    () => ProxyConfiguration,
    0,
    0,
    () => TagList,
  ]
);
export var UpdateFleetOutput = struct(n0, _UFO, 0, [_fl], [() => Fleet]);
export var UpdateReportGroupInput = struct(n0, _URGI, 0, [_a, _eCx, _ta], [0, () => ReportExportConfig, () => TagList]);
export var UpdateReportGroupOutput = struct(n0, _URGO, 0, [_rGe], [() => ReportGroup]);
export var FleetNames = 64 | 0;

export var FleetProxyRuleEntities = 64 | 0;

export var FleetProxyRules = list(n0, _FPRl, 0, () => FleetProxyRule);
export var Fleets = list(n0, _Fl, 0, () => Fleet);
export var ReportGroups = list(n0, _RGe, 0, () => ReportGroup);
export var TagList = list(n0, _TL, 0, () => Tag);
export var TargetTrackingScalingConfigurations = list(n0, _TTSCa, 0, () => TargetTrackingScalingConfiguration);
export var BatchGetFleets = op(
  n0,
  _BGF,
  0,
  () => BatchGetFleetsInput,
  () => BatchGetFleetsOutput
);
export var BatchGetReportGroups = op(
  n0,
  _BGRG,
  0,
  () => BatchGetReportGroupsInput,
  () => BatchGetReportGroupsOutput
);
export var CreateFleet = op(
  n0,
  _CF,
  0,
  () => CreateFleetInput,
  () => CreateFleetOutput
);
export var CreateReportGroup = op(
  n0,
  _CRG,
  0,
  () => CreateReportGroupInput,
  () => CreateReportGroupOutput
);
export var UpdateFleet = op(
  n0,
  _UF,
  0,
  () => UpdateFleetInput,
  () => UpdateFleetOutput
);
export var UpdateReportGroup = op(
  n0,
  _URG,
  0,
  () => UpdateReportGroupInput,
  () => UpdateReportGroupOutput
);
