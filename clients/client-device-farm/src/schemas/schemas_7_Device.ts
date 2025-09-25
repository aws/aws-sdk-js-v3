// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _at,
  _CDP,
  _CDPR,
  _CDPRr,
  _cMD,
  _d,
  _DF,
  _DFe,
  _DP,
  _dP,
  _DPev,
  _dPev,
  _GDP,
  _GDPR,
  _GDPRe,
  _LDP,
  _LDPR,
  _LDPRi,
  _mD,
  _n,
  _nT,
  _op,
  _pA,
  _r,
  _Ru,
  _Rul,
  _t,
  _UDP,
  _UDPR,
  _UDPRp,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDevicePoolRequest = struct(n0, _CDPR, 0, [_pA, _n, _d, _r, _mD], [0, 0, 0, () => Rules, 1]);
export var CreateDevicePoolResult = struct(n0, _CDPRr, 0, [_dP], [() => DevicePool]);
export var DeviceFilter = struct(n0, _DF, 0, [_at, _op, _v], [0, 0, 64 | 0]);
export var DevicePool = struct(n0, _DP, 0, [_a, _n, _d, _t, _r, _mD], [0, 0, 0, 0, () => Rules, 1]);
export var GetDevicePoolRequest = struct(n0, _GDPR, 0, [_a], [0]);
export var GetDevicePoolResult = struct(n0, _GDPRe, 0, [_dP], [() => DevicePool]);
export var ListDevicePoolsRequest = struct(n0, _LDPR, 0, [_a, _t, _nT], [0, 0, 0]);
export var ListDevicePoolsResult = struct(n0, _LDPRi, 0, [_dPev, _nT], [() => DevicePools, 0]);
export var Rule = struct(n0, _Ru, 0, [_at, _op, _va], [0, 0, 0]);
export var UpdateDevicePoolRequest = struct(n0, _UDPR, 0, [_a, _n, _d, _r, _mD, _cMD], [0, 0, 0, () => Rules, 1, 2]);
export var UpdateDevicePoolResult = struct(n0, _UDPRp, 0, [_dP], [() => DevicePool]);
export var DeviceFilters = list(n0, _DFe, 0, () => DeviceFilter);
export var DeviceFilterValues = 64 | 0;

export var DevicePools = list(n0, _DPev, 0, () => DevicePool);
export var Rules = list(n0, _Rul, 0, () => Rule);
export var CreateDevicePool = op(
  n0,
  _CDP,
  0,
  () => CreateDevicePoolRequest,
  () => CreateDevicePoolResult
);
export var GetDevicePool = op(
  n0,
  _GDP,
  0,
  () => GetDevicePoolRequest,
  () => GetDevicePoolResult
);
export var ListDevicePools = op(
  n0,
  _LDP,
  0,
  () => ListDevicePoolsRequest,
  () => ListDevicePoolsResult
);
export var UpdateDevicePool = op(
  n0,
  _UDP,
  0,
  () => UpdateDevicePoolRequest,
  () => UpdateDevicePoolResult
);
