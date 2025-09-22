// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _ar,
  _av,
  _bM,
  _ca,
  _cD,
  _cI,
  _cl,
  _co,
  _com,
  _cou,
  _cp,
  _CPU,
  _cr,
  _CRAS,
  _CRASC,
  _CRASR,
  _CRASRr,
  _D,
  _dA,
  _De,
  _de,
  _dev,
  _dM,
  _dPA,
  _DPCR,
  _DPCRe,
  _dPe,
  _dU,
  _en,
  _fF,
  _fi,
  _fN,
  _fr,
  _fT,
  _GD,
  _GDPC,
  _GDPCR,
  _GDPCRe,
  _GDR,
  _GDRe,
  _GJ,
  _GJR,
  _GJRe,
  _GRAS,
  _GRASR,
  _GRASRe,
  _hA,
  _he,
  _hS,
  _i,
  _iA,
  _iD,
  _IM,
  _iM,
  _IMn,
  _iMn,
  _in,
  _J,
  _j,
  _Jo,
  _jo,
  _LD,
  _LDR,
  _LDRi,
  _LJ,
  _LJR,
  _LJRi,
  _LRAS,
  _LRASR,
  _LRASRi,
  _LUP,
  _LUPR,
  _LUPRi,
  _m,
  _ma,
  _me,
  _mI,
  _mo,
  _n,
  _nT,
  _o,
  _P,
  _pA,
  _PD,
  _pl,
  _Pro,
  _prob,
  _ra,
  _rAE,
  _RAS,
  _rAS,
  _RASe,
  _rASe,
  _rDE,
  _Re,
  _re,
  _res,
  _rRAA,
  _rRE,
  _ru,
  _s,
  _sAR,
  _SJ,
  _SJR,
  _SJRt,
  _sPK,
  _SRAS,
  _SRASR,
  _SRASRt,
  _st,
  _sta,
  _su,
  _t,
  _te,
  _tT,
  _UP,
  _uP,
  _UPBERM,
  _UPn,
  _vC,
  _vCA,
  _vCi,
  _vE,
  _wid,
  DeviceMinutes,
  n0,
} from "./schemas_0";
import { VpcConfig } from "./schemas_3_RemoteAccess";
import { DeviceProxy, ScheduleRunConfiguration, ScheduleRunTest } from "./schemas_6_RemoteAccess";
import { DeviceFilters } from "./schemas_7_Device";
import { Counters } from "./schemas_12_Get";
import { DeviceInstances } from "./schemas_31_List";

/* eslint no-var: 0 */

export var CPU = struct(n0, _CPU, 0, [_fr, _ar, _cl], [0, 0, 1]);
export var CreateRemoteAccessSessionConfiguration = struct(
  n0,
  _CRASC,
  0,
  [_bM, _vCA, _dPe],
  [0, 64 | 0, () => DeviceProxy]
);
export var CreateRemoteAccessSessionRequest = struct(
  n0,
  _CRASR,
  0,
  [_pA, _dA, _iA, _sPK, _rDE, _rRE, _rRAA, _n, _cI, _co, _iM, _sAR],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, () => CreateRemoteAccessSessionConfiguration, 0, 2]
);
export var CreateRemoteAccessSessionResult = struct(n0, _CRASRr, 0, [_rAS], [() => RemoteAccessSession]);
export var Device = struct(
  n0,
  _D,
  0,
  [_a, _n, _ma, _mo, _mI, _fF, _pl, _o, _cp, _re, _hS, _me, _i, _ca, _ra, _rAE, _rDE, _fT, _fN, _in, _av],
  [0, 0, 0, 0, 0, 0, 0, 0, () => CPU, () => Resolution, 1, 1, 0, 0, 0, 2, 2, 0, 0, () => DeviceInstances, 0]
);
export var DevicePoolCompatibilityResult = struct(
  n0,
  _DPCR,
  0,
  [_de, _com, _iMn],
  [() => Device, 2, () => IncompatibilityMessages]
);
export var GetDevicePoolCompatibilityRequest = struct(
  n0,
  _GDPCR,
  0,
  [_dPA, _aA, _tT, _te, _co, _pA],
  [0, 0, 0, () => ScheduleRunTest, () => ScheduleRunConfiguration, 0]
);
export var GetDevicePoolCompatibilityResult = struct(
  n0,
  _GDPCRe,
  0,
  [_cD, _iD],
  [() => DevicePoolCompatibilityResults, () => DevicePoolCompatibilityResults]
);
export var GetDeviceRequest = struct(n0, _GDR, 0, [_a], [0]);
export var GetDeviceResult = struct(n0, _GDRe, 0, [_de], [() => Device]);
export var GetJobRequest = struct(n0, _GJR, 0, [_a], [0]);
export var GetJobResult = struct(n0, _GJRe, 0, [_j], [() => Job]);
export var GetRemoteAccessSessionRequest = struct(n0, _GRASR, 0, [_a], [0]);
export var GetRemoteAccessSessionResult = struct(n0, _GRASRe, 0, [_rAS], [() => RemoteAccessSession]);
export var IncompatibilityMessage = struct(n0, _IM, 0, [_m, _t], [0, 0]);
export var Job = struct(
  n0,
  _J,
  0,
  [_a, _n, _t, _cr, _st, _res, _sta, _s, _cou, _m, _de, _iA, _dM, _vE, _vCi],
  [0, 0, 0, 4, 0, 0, 4, 4, () => Counters, 0, () => Device, 0, () => DeviceMinutes, 0, 2]
);
export var ListDevicesRequest = struct(n0, _LDR, 0, [_a, _nT, _fi], [0, 0, () => DeviceFilters]);
export var ListDevicesResult = struct(n0, _LDRi, 0, [_dev, _nT], [() => Devices, 0]);
export var ListJobsRequest = struct(n0, _LJR, 0, [_a, _nT], [0, 0]);
export var ListJobsResult = struct(n0, _LJRi, 0, [_jo, _nT], [() => Jobs, 0]);
export var ListRemoteAccessSessionsRequest = struct(n0, _LRASR, 0, [_a, _nT], [0, 0]);
export var ListRemoteAccessSessionsResult = struct(n0, _LRASRi, 0, [_rASe, _nT], [() => RemoteAccessSessions, 0]);
export var ListUniqueProblemsRequest = struct(n0, _LUPR, 0, [_a, _nT], [0, 0]);
export var ListUniqueProblemsResult = struct(n0, _LUPRi, 0, [_uP, _nT], [() => UniqueProblemsByExecutionResultMap, 0]);
export var Problem = struct(
  n0,
  _P,
  0,
  [_ru, _j, _su, _te, _de, _res, _m],
  [() => ProblemDetail, () => ProblemDetail, () => ProblemDetail, () => ProblemDetail, () => Device, 0, 0]
);
export var ProblemDetail = struct(n0, _PD, 0, [_a, _n], [0, 0]);
export var RemoteAccessSession = struct(
  n0,
  _RAS,
  0,
  [
    _a,
    _n,
    _cr,
    _st,
    _res,
    _m,
    _sta,
    _s,
    _de,
    _iA,
    _rDE,
    _rRE,
    _rRAA,
    _hA,
    _cI,
    _bM,
    _dM,
    _en,
    _dU,
    _iM,
    _sAR,
    _vC,
    _dPe,
  ],
  [
    0,
    0,
    4,
    0,
    0,
    0,
    4,
    4,
    () => Device,
    0,
    2,
    2,
    0,
    0,
    0,
    0,
    () => DeviceMinutes,
    0,
    0,
    0,
    2,
    () => VpcConfig,
    () => DeviceProxy,
  ]
);
export var Resolution = struct(n0, _Re, 0, [_wid, _he], [1, 1]);
export var StopJobRequest = struct(n0, _SJR, 0, [_a], [0]);
export var StopJobResult = struct(n0, _SJRt, 0, [_j], [() => Job]);
export var StopRemoteAccessSessionRequest = struct(n0, _SRASR, 0, [_a], [0]);
export var StopRemoteAccessSessionResult = struct(n0, _SRASRt, 0, [_rAS], [() => RemoteAccessSession]);
export var UniqueProblem = struct(n0, _UP, 0, [_m, _prob], [0, () => Problems]);
export var DevicePoolCompatibilityResults = list(n0, _DPCRe, 0, () => DevicePoolCompatibilityResult);
export var Devices = list(n0, _De, 0, () => Device);
export var IncompatibilityMessages = list(n0, _IMn, 0, () => IncompatibilityMessage);
export var Jobs = list(n0, _Jo, 0, () => Job);
export var Problems = list(n0, _Pro, 0, () => Problem);
export var RemoteAccessSessions = list(n0, _RASe, 0, () => RemoteAccessSession);
export var UniqueProblems = list(n0, _UPn, 0, () => UniqueProblem);
export var UniqueProblemsByExecutionResultMap = map(n0, _UPBERM, 0, 0, () => UniqueProblems);
export var CreateRemoteAccessSession = op(
  n0,
  _CRAS,
  0,
  () => CreateRemoteAccessSessionRequest,
  () => CreateRemoteAccessSessionResult
);
export var GetDevice = op(
  n0,
  _GD,
  0,
  () => GetDeviceRequest,
  () => GetDeviceResult
);
export var GetDevicePoolCompatibility = op(
  n0,
  _GDPC,
  0,
  () => GetDevicePoolCompatibilityRequest,
  () => GetDevicePoolCompatibilityResult
);
export var GetJob = op(
  n0,
  _GJ,
  0,
  () => GetJobRequest,
  () => GetJobResult
);
export var GetRemoteAccessSession = op(
  n0,
  _GRAS,
  0,
  () => GetRemoteAccessSessionRequest,
  () => GetRemoteAccessSessionResult
);
export var ListDevices = op(
  n0,
  _LD,
  0,
  () => ListDevicesRequest,
  () => ListDevicesResult
);
export var ListJobs = op(
  n0,
  _LJ,
  0,
  () => ListJobsRequest,
  () => ListJobsResult
);
export var ListRemoteAccessSessions = op(
  n0,
  _LRAS,
  0,
  () => ListRemoteAccessSessionsRequest,
  () => ListRemoteAccessSessionsResult
);
export var ListUniqueProblems = op(
  n0,
  _LUP,
  0,
  () => ListUniqueProblemsRequest,
  () => ListUniqueProblemsResult
);
export var StopJob = op(
  n0,
  _SJ,
  0,
  () => StopJobRequest,
  () => StopJobResult
);
export var StopRemoteAccessSession = op(
  n0,
  _SRAS,
  0,
  () => StopRemoteAccessSessionRequest,
  () => StopRemoteAccessSessionResult
);
