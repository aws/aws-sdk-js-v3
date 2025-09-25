// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bP,
  _bV,
  _CP,
  _cP,
  _cRD,
  _CSM,
  _CSMi,
  _eCr,
  _fC,
  _ht,
  _iC,
  _m,
  _mes,
  _nAC,
  _nEC,
  _pr,
  _prog,
  _rea,
  _rIu,
  _s,
  _SCMP,
  _SCS,
  _SCSH,
  _SCSHR,
  _SCSHRe,
  _SCSM,
  _SCSMt,
  _SCSR,
  _SCSRt,
  _SCSRto,
  _SCSRtop,
  _SCST,
  _SCSt,
  _SCSTR,
  _SCSTRe,
  _sCu,
  _sJI,
  _sTe,
  _tC,
  _uC,
  _v,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CisSessionMessage = struct(n0, _CSM, 0, [_rIu, _s, _cRD], [0, 0, 21]);
export var ComputePlatform = struct(n0, _CP, 0, [_ve, _pr, _v], [0, 0, 0]);
export var SendCisSessionHealthRequest = struct(n0, _SCSHR, 0, [_sJI, _sTe], [0, 0]);
export var SendCisSessionHealthResponse = struct(n0, _SCSHRe, 0, [], []);
export var SendCisSessionTelemetryRequest = struct(n0, _SCSTR, 0, [_sJI, _sTe, _mes], [0, 0, () => CisSessionMessages]);
export var SendCisSessionTelemetryResponse = struct(n0, _SCSTRe, 0, [], []);
export var StartCisSessionMessage = struct(n0, _SCSM, 0, [_sTe], [0]);
export var StartCisSessionRequest = struct(n0, _SCSR, 0, [_sJI, _m], [0, () => StartCisSessionMessage]);
export var StartCisSessionResponse = struct(n0, _SCSRt, 0, [], []);
export var StopCisMessageProgress = struct(
  n0,
  _SCMP,
  0,
  [_tC, _sCu, _fC, _nEC, _uC, _nAC, _iC, _eCr],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var StopCisSessionMessage = struct(
  n0,
  _SCSMt,
  0,
  [_s, _rea, _prog, _cP, _bV, _bP],
  [0, 0, () => StopCisMessageProgress, () => ComputePlatform, 0, 0]
);
export var StopCisSessionRequest = struct(n0, _SCSRto, 0, [_sJI, _sTe, _m], [0, 0, () => StopCisSessionMessage]);
export var StopCisSessionResponse = struct(n0, _SCSRtop, 0, [], []);
export var CisSessionMessages = list(n0, _CSMi, 0, () => CisSessionMessage);
export var SendCisSessionHealth = op(
  n0,
  _SCSH,
  {
    [_ht]: ["PUT", "/cissession/health/send", 200],
  },
  () => SendCisSessionHealthRequest,
  () => SendCisSessionHealthResponse
);
export var SendCisSessionTelemetry = op(
  n0,
  _SCST,
  {
    [_ht]: ["PUT", "/cissession/telemetry/send", 200],
  },
  () => SendCisSessionTelemetryRequest,
  () => SendCisSessionTelemetryResponse
);
export var StartCisSession = op(
  n0,
  _SCS,
  {
    [_ht]: ["PUT", "/cissession/start", 200],
  },
  () => StartCisSessionRequest,
  () => StartCisSessionResponse
);
export var StopCisSession = op(
  n0,
  _SCSt,
  {
    [_ht]: ["PUT", "/cissession/stop", 200],
  },
  () => StopCisSessionRequest,
  () => StopCisSessionResponse
);
