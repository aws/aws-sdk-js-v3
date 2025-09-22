// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _AC,
  _aC,
  _aTO,
  _c,
  _cA,
  _CER,
  _CEr,
  _CERr,
  _cSSI,
  _cSSV,
  _cT,
  _D,
  _d,
  _dA,
  _dCT,
  _DCTM,
  _DE,
  _dE,
  _de,
  _DL,
  _DN,
  _dOTW,
  _DS,
  _dSSI,
  _dT,
  _E,
  _e,
  _eI,
  _EL,
  _EN,
  _en,
  _end,
  _env,
  _ES,
  _eTH,
  _eTM,
  _GD,
  _GDR,
  _GDRe,
  _GE,
  _GER,
  _GERe,
  _GSS,
  _GSSR,
  _GSSRe,
  _h,
  _hE,
  _hQ,
  _i,
  _kKA,
  _lCA,
  _LD,
  _LDR,
  _LDRi,
  _LE,
  _LER,
  _LERi,
  _lPA,
  _LSS,
  _LSSR,
  _LSSRi,
  _lUI,
  _m,
  _mo,
  _mR,
  _MW,
  _mW,
  _n,
  _nT,
  _pSSI,
  _pSSV,
  _qC,
  _rAe,
  _rDC,
  _rI,
  _rT,
  _S,
  _s,
  _sC,
  _SL,
  _sN,
  _so,
  _SQEE,
  _SS,
  _sS,
  _sSCS,
  _SSL,
  _sSo,
  _SSS,
  _sSUM,
  _sSUS,
  _sSUSo,
  _sTH,
  _sTM,
  _sU,
  _t,
  _ty,
  _uA,
  _UD,
  _UDR,
  _UDRp,
  _UE,
  _UER,
  _UERp,
  _UI,
  _USS,
  _USSR,
  _USSRp,
  _v,
  _vS,
  n0,
} from "./schemas_0";
import { TagsMap } from "./schemas_4_Get";

/* eslint no-var: 0 */

export var ActivationCode = sim(n0, _AC, 0, 8);
export var DesktopEndpoint = sim(n0, _DE, 0, 8);
export var DeviceName = sim(n0, _DN, 0, 8);
export var EnvironmentName = sim(n0, _EN, 0, 8);
export var UserId = sim(n0, _UI, 0, 8);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_n, _dA, _dE, _sSUS, _mW, _sSUM, _dSSI, _kKA, _cT, _t, _dCT],
  [
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    () => MaintenanceWindow,
    0,
    0,
    0,
    [0, 4],
    [() => TagsMap, 0],
    [() => DeviceCreationTagsMap, 0],
  ]
);
export var CreateEnvironmentResponse = struct(n0, _CERr, 0, [_en], [[() => EnvironmentSummary, 0]]);
export var Device = struct(
  n0,
  _D,
  0,
  [
    _i,
    _sN,
    _n,
    _mo,
    _eI,
    _s,
    _cSSI,
    _cSSV,
    _dSSI,
    _pSSI,
    _pSSV,
    _sSUS,
    _sSCS,
    _sSUSo,
    _lCA,
    _lPA,
    _cA,
    _uA,
    _a,
    _kKA,
    _lUI,
  ],
  [0, 0, [() => DeviceName, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, [() => UserId, 0]]
);
export var DeviceSummary = struct(
  n0,
  _DS,
  0,
  [_i, _sN, _n, _mo, _eI, _s, _cSSI, _dSSI, _pSSI, _sSUS, _lCA, _lPA, _cA, _uA, _a, _lUI],
  [0, 0, [() => DeviceName, 0], 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, [() => UserId, 0]]
);
export var Environment = struct(
  n0,
  _E,
  0,
  [_i, _n, _dA, _dE, _dT, _aC, _rDC, _sSUS, _mW, _sSUM, _dSSI, _pSSI, _pSSV, _sSCS, _cA, _uA, _a, _kKA, _dCT],
  [
    0,
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    [() => ActivationCode, 0],
    1,
    0,
    () => MaintenanceWindow,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    [() => DeviceCreationTagsMap, 0],
  ]
);
export var EnvironmentSummary = struct(
  n0,
  _ES,
  0,
  [_i, _n, _dA, _dE, _dT, _aC, _sSUS, _mW, _sSUM, _dSSI, _pSSI, _cA, _uA, _a],
  [
    0,
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    [() => ActivationCode, 0],
    0,
    () => MaintenanceWindow,
    0,
    0,
    0,
    4,
    4,
    0,
  ]
);
export var GetDeviceRequest = struct(n0, _GDR, 0, [_i], [[0, 1]]);
export var GetDeviceResponse = struct(n0, _GDRe, 0, [_d], [[() => Device, 0]]);
export var GetEnvironmentRequest = struct(n0, _GER, 0, [_i], [[0, 1]]);
export var GetEnvironmentResponse = struct(n0, _GERe, 0, [_en], [[() => Environment, 0]]);
export var GetSoftwareSetRequest = struct(n0, _GSSR, 0, [_i], [[0, 1]]);
export var GetSoftwareSetResponse = struct(n0, _GSSRe, 0, [_sS], [() => SoftwareSet]);
export var ListDevicesRequest = struct(
  n0,
  _LDR,
  0,
  [_nT, _mR],
  [
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
export var ListDevicesResponse = struct(n0, _LDRi, 0, [_de, _nT], [[() => DeviceList, 0], 0]);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_nT, _mR],
  [
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
export var ListEnvironmentsResponse = struct(n0, _LERi, 0, [_env, _nT], [[() => EnvironmentList, 0], 0]);
export var ListSoftwareSetsRequest = struct(
  n0,
  _LSSR,
  0,
  [_nT, _mR],
  [
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
export var ListSoftwareSetsResponse = struct(n0, _LSSRi, 0, [_sSo, _nT], [() => SoftwareSetList, 0]);
export var MaintenanceWindow = struct(
  n0,
  _MW,
  0,
  [_ty, _sTH, _sTM, _eTH, _eTM, _dOTW, _aTO],
  [0, 1, 1, 1, 1, 64 | 0, 0]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var Software = struct(n0, _S, 0, [_n, _v], [0, 0]);
export var SoftwareSet = struct(n0, _SS, 0, [_i, _v, _rAe, _sU, _vS, _so, _a], [0, 0, 4, 4, 0, () => SoftwareList, 0]);
export var SoftwareSetSummary = struct(n0, _SSS, 0, [_i, _v, _rAe, _sU, _vS, _a], [0, 0, 4, 4, 0, 0]);
export var UpdateDeviceRequest = struct(n0, _UDR, 0, [_i, _n, _dSSI, _sSUS], [[0, 1], [() => DeviceName, 0], 0, 0]);
export var UpdateDeviceResponse = struct(n0, _UDRp, 0, [_d], [[() => DeviceSummary, 0]]);
export var UpdateEnvironmentRequest = struct(
  n0,
  _UER,
  0,
  [_i, _n, _dA, _dE, _sSUS, _mW, _sSUM, _dSSI, _dCT],
  [
    [0, 1],
    [() => EnvironmentName, 0],
    0,
    [() => DesktopEndpoint, 0],
    0,
    () => MaintenanceWindow,
    0,
    0,
    [() => DeviceCreationTagsMap, 0],
  ]
);
export var UpdateEnvironmentResponse = struct(n0, _UERp, 0, [_en], [[() => EnvironmentSummary, 0]]);
export var UpdateSoftwareSetRequest = struct(n0, _USSR, 0, [_i, _vS], [[0, 1], 0]);
export var UpdateSoftwareSetResponse = struct(n0, _USSRp, 0, [], []);
export var DayOfWeekList = 64 | 0;

export var DeviceList = list(n0, _DL, 0, [() => DeviceSummary, 0]);
export var EnvironmentList = list(n0, _EL, 0, [() => EnvironmentSummary, 0]);
export var SoftwareList = list(n0, _SL, 0, () => Software);
export var SoftwareSetList = list(n0, _SSL, 0, () => SoftwareSetSummary);
export var DeviceCreationTagsMap = map(n0, _DCTM, 8, 0, 0);
export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/environments", 201],
    [_end]: ["api."],
  },
  () => CreateEnvironmentRequest,
  () => CreateEnvironmentResponse
);
export var GetDevice = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/devices/{id}", 200],
    [_end]: ["api."],
  },
  () => GetDeviceRequest,
  () => GetDeviceResponse
);
export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/environments/{id}", 200],
    [_end]: ["api."],
  },
  () => GetEnvironmentRequest,
  () => GetEnvironmentResponse
);
export var GetSoftwareSet = op(
  n0,
  _GSS,
  {
    [_h]: ["GET", "/softwaresets/{id}", 200],
    [_end]: ["api."],
  },
  () => GetSoftwareSetRequest,
  () => GetSoftwareSetResponse
);
export var ListDevices = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/devices", 200],
    [_end]: ["api."],
  },
  () => ListDevicesRequest,
  () => ListDevicesResponse
);
export var ListEnvironments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/environments", 200],
    [_end]: ["api."],
  },
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResponse
);
export var ListSoftwareSets = op(
  n0,
  _LSS,
  {
    [_h]: ["GET", "/softwaresets", 200],
    [_end]: ["api."],
  },
  () => ListSoftwareSetsRequest,
  () => ListSoftwareSetsResponse
);
export var UpdateDevice = op(
  n0,
  _UD,
  {
    [_h]: ["PATCH", "/devices/{id}", 200],
    [_end]: ["api."],
  },
  () => UpdateDeviceRequest,
  () => UpdateDeviceResponse
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  {
    [_h]: ["PATCH", "/environments/{id}", 200],
    [_end]: ["api."],
  },
  () => UpdateEnvironmentRequest,
  () => UpdateEnvironmentResponse
);
export var UpdateSoftwareSet = op(
  n0,
  _USS,
  {
    [_h]: ["PATCH", "/softwaresets/{id}", 204],
    [_end]: ["api."],
  },
  () => UpdateSoftwareSetRequest,
  () => UpdateSoftwareSetResponse
);
