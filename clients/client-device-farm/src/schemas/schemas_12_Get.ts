// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { IdempotencyException as __IdempotencyException } from "../models/index";
import {
  _a,
  _aA,
  _aC,
  _aPC,
  _aU,
  _bM,
  _C,
  _c,
  _cAP,
  _cJ,
  _co,
  _cou,
  _cr,
  _dM,
  _dPA,
  _dPe,
  _DSC,
  _dSC,
  _DSR,
  _dSR,
  _e,
  _EC,
  _eC,
  _eCx,
  _er,
  _f,
  _fi,
  _GR,
  _GRR,
  _GRRe,
  _GS,
  _GSR,
  _GSRe,
  _GT,
  _GTR,
  _GTRe,
  _IE,
  _jTM,
  _loc,
  _loca,
  _LR,
  _LRR,
  _LRRi,
  _LSi,
  _LSRis,
  _LSRist,
  _LT,
  _LTR,
  _LTRi,
  _m,
  _mD,
  _mDC,
  _n,
  _nP,
  _nT,
  _p,
  _pA,
  _pl,
  _pRU,
  _rad,
  _rCe,
  _res,
  _ru,
  _Run,
  _run,
  _Runs,
  _s,
  _sAR,
  _see,
  _sk,
  _SR,
  _SRR,
  _SRRc,
  _SRRt,
  _SRRto,
  _SRt,
  _st,
  _sta,
  _Su,
  _su,
  _Sui,
  _sui,
  _t,
  _Te,
  _te,
  _Tes,
  _tes,
  _tJ,
  _to,
  _tSA,
  _vC,
  _vCi,
  _w,
  _wU,
  DeviceMinutes,
  n0,
} from "./schemas_0";
import { VpcConfig } from "./schemas_3_RemoteAccess";
import {
  CustomerArtifactPaths,
  DeviceProxy,
  Location,
  Radios,
  ScheduleRunConfiguration,
  ScheduleRunTest,
} from "./schemas_6_RemoteAccess";
import { DeviceFilters } from "./schemas_7_Device";
import { NetworkProfile } from "./schemas_11_Network";

/* eslint no-var: 0 */

export var Counters = struct(n0, _C, 0, [_to, _p, _f, _w, _er, _s, _sk], [1, 1, 1, 1, 1, 1, 1]);
export var DeviceSelectionConfiguration = struct(n0, _DSC, 0, [_fi, _mD], [() => DeviceFilters, 1]);
export var DeviceSelectionResult = struct(n0, _DSR, 0, [_fi, _mDC, _mD], [() => DeviceFilters, 1, 1]);
export var ExecutionConfiguration = struct(n0, _EC, 0, [_jTM, _aC, _aPC, _vCi, _sAR], [1, 2, 2, 2, 2]);
export var GetRunRequest = struct(n0, _GRR, 0, [_a], [0]);
export var GetRunResult = struct(n0, _GRRe, 0, [_ru], [() => Run]);
export var GetSuiteRequest = struct(n0, _GSR, 0, [_a], [0]);
export var GetSuiteResult = struct(n0, _GSRe, 0, [_su], [() => Suite]);
export var GetTestRequest = struct(n0, _GTR, 0, [_a], [0]);
export var GetTestResult = struct(n0, _GTRe, 0, [_te], [() => Test]);
export var IdempotencyException = error(
  n0,
  _IE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __IdempotencyException
);
export var ListRunsRequest = struct(n0, _LRR, 0, [_a, _nT], [0, 0]);
export var ListRunsResult = struct(n0, _LRRi, 0, [_run, _nT], [() => Runs, 0]);
export var ListSuitesRequest = struct(n0, _LSRis, 0, [_a, _nT], [0, 0]);
export var ListSuitesResult = struct(n0, _LSRist, 0, [_sui, _nT], [() => Suites, 0]);
export var ListTestsRequest = struct(n0, _LTR, 0, [_a, _nT], [0, 0]);
export var ListTestsResult = struct(n0, _LTRi, 0, [_tes, _nT], [() => Tests, 0]);
export var Run = struct(
  n0,
  _Run,
  0,
  [
    _a,
    _n,
    _t,
    _pl,
    _cr,
    _st,
    _res,
    _sta,
    _s,
    _cou,
    _m,
    _tJ,
    _cJ,
    _bM,
    _dM,
    _nP,
    _dPe,
    _pRU,
    _rCe,
    _see,
    _aU,
    _eC,
    _jTM,
    _dPA,
    _loc,
    _rad,
    _loca,
    _cAP,
    _wU,
    _sAR,
    _tSA,
    _dSR,
    _vC,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    4,
    4,
    () => Counters,
    0,
    1,
    1,
    0,
    () => DeviceMinutes,
    () => NetworkProfile,
    () => DeviceProxy,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    () => Radios,
    () => Location,
    () => CustomerArtifactPaths,
    0,
    2,
    0,
    () => DeviceSelectionResult,
    () => VpcConfig,
  ]
);
export var ScheduleRunRequest = struct(
  n0,
  _SRR,
  0,
  [_pA, _aA, _dPA, _dSC, _n, _te, _co, _eCx],
  [
    0,
    0,
    0,
    () => DeviceSelectionConfiguration,
    0,
    () => ScheduleRunTest,
    () => ScheduleRunConfiguration,
    () => ExecutionConfiguration,
  ]
);
export var ScheduleRunResult = struct(n0, _SRRc, 0, [_ru], [() => Run]);
export var StopRunRequest = struct(n0, _SRRt, 0, [_a], [0]);
export var StopRunResult = struct(n0, _SRRto, 0, [_ru], [() => Run]);
export var Suite = struct(
  n0,
  _Su,
  0,
  [_a, _n, _t, _cr, _st, _res, _sta, _s, _cou, _m, _dM],
  [0, 0, 0, 4, 0, 0, 4, 4, () => Counters, 0, () => DeviceMinutes]
);
export var Test = struct(
  n0,
  _Te,
  0,
  [_a, _n, _t, _cr, _st, _res, _sta, _s, _cou, _m, _dM],
  [0, 0, 0, 4, 0, 0, 4, 4, () => Counters, 0, () => DeviceMinutes]
);
export var Runs = list(n0, _Runs, 0, () => Run);
export var Suites = list(n0, _Sui, 0, () => Suite);
export var Tests = list(n0, _Tes, 0, () => Test);
export var GetRun = op(
  n0,
  _GR,
  0,
  () => GetRunRequest,
  () => GetRunResult
);
export var GetSuite = op(
  n0,
  _GS,
  0,
  () => GetSuiteRequest,
  () => GetSuiteResult
);
export var GetTest = op(
  n0,
  _GT,
  0,
  () => GetTestRequest,
  () => GetTestResult
);
export var ListRuns = op(
  n0,
  _LR,
  0,
  () => ListRunsRequest,
  () => ListRunsResult
);
export var ListSuites = op(
  n0,
  _LSi,
  0,
  () => ListSuitesRequest,
  () => ListSuitesResult
);
export var ListTests = op(
  n0,
  _LT,
  0,
  () => ListTestsRequest,
  () => ListTestsResult
);
export var ScheduleRun = op(
  n0,
  _SR,
  0,
  () => ScheduleRunRequest,
  () => ScheduleRunResult
);
export var StopRun = op(
  n0,
  _SRt,
  0,
  () => StopRunRequest,
  () => StopRunResult
);
