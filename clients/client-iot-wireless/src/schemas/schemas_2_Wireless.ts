// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _AGM,
  _Ap,
  _Ar,
  _Ax,
  _CM,
  _CRT,
  _CSl,
  _CSP,
  _CSPR,
  _CSPRr,
  _D,
  _DBS,
  _DM,
  _DMr,
  _DN,
  _DPI,
  _DRl,
  _DRP,
  _DSP,
  _DSPR,
  _DSPRe,
  _DSRF,
  _FCS,
  _FP,
  _FPo,
  _Gn,
  _GSP,
  _GSPR,
  _GSPRe,
  _h,
  _HAr,
  _hQ,
  _I,
  _LRWAN,
  _LRWANGSPI,
  _LRWANSP,
  _LRWANUD,
  _LSP,
  _LSPR,
  _LSPRi,
  _MGD,
  _MR,
  _mR,
  _N,
  _NGL,
  _NT,
  _nT,
  _NTM,
  _NTMb,
  _P,
  _PA,
  _RAa,
  _RDSB,
  _RDSM,
  _SPe,
  _SPI,
  _SPL,
  _Str,
  _T,
  _Ta,
  _TP,
  _TPIM,
  _TPIMx,
  _U_,
  _UBS,
  _UFP,
  _UR,
  _URP,
  _UWD,
  _UWDR,
  _UWDRp,
  _Ux,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationConfig = struct(n0, _AC, 0, [_FP, _T, _DN], [1, 0, 0]);
export var CreateServiceProfileRequest = struct(
  n0,
  _CSPR,
  0,
  [_N, _LRWAN, _Ta, _CRT],
  [0, () => LoRaWANServiceProfile, () => TagList, [0, 4]]
);
export var CreateServiceProfileResponse = struct(n0, _CSPRr, 0, [_Ar, _I], [0, 0]);
export var DeleteServiceProfileRequest = struct(n0, _DSPR, 0, [_I], [[0, 1]]);
export var DeleteServiceProfileResponse = struct(n0, _DSPRe, 0, [], []);
export var GetServiceProfileRequest = struct(n0, _GSPR, 0, [_I], [[0, 1]]);
export var GetServiceProfileResponse = struct(
  n0,
  _GSPRe,
  0,
  [_Ar, _N, _I, _LRWAN],
  [0, 0, 0, () => LoRaWANGetServiceProfileInfo]
);
export var ListServiceProfilesRequest = struct(
  n0,
  _LSPR,
  0,
  [_NT, _MR],
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
export var ListServiceProfilesResponse = struct(n0, _LSPRi, 0, [_NT, _SPL], [0, () => ServiceProfileList]);
export var LoRaWANGetServiceProfileInfo = struct(
  n0,
  _LRWANGSPI,
  0,
  [
    _UR,
    _UBS,
    _URP,
    _DRl,
    _DBS,
    _DRP,
    _AGM,
    _DSRF,
    _RDSB,
    _RDSM,
    _DM,
    _DMr,
    _CM,
    _PA,
    _HAr,
    _RAa,
    _NGL,
    _TP,
    _MGD,
    _TPIM,
    _TPIMx,
    _NTM,
    _NTMb,
  ],
  [1, 1, 0, 1, 1, 0, 2, 1, 2, 2, 1, 1, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]
);
export var LoRaWANServiceProfile = struct(
  n0,
  _LRWANSP,
  0,
  [_AGM, _DM, _DMr, _PA, _RAa, _TPIM, _TPIMx, _NTM, _NTMb],
  [2, 1, 1, 2, 2, 1, 1, 1, 1]
);
export var LoRaWANUpdateDevice = struct(
  n0,
  _LRWANUD,
  0,
  [_DPI, _SPI, _A, _Ax, _FPo],
  [0, 0, () => UpdateAbpV1_1, () => UpdateAbpV1_0_x, () => UpdateFPorts]
);
export var Positioning = struct(n0, _P, 0, [_CSl, _Str, _Gn], [1, 1, 1]);
export var ServiceProfile = struct(n0, _SPe, 0, [_Ar, _N, _I], [0, 0, 0]);
export var UpdateAbpV1_0_x = struct(n0, _Ux, 0, [_FCS], [1]);
export var UpdateAbpV1_1 = struct(n0, _U_, 0, [_FCS], [1]);
export var UpdateFPorts = struct(n0, _UFP, 0, [_P, _Ap], [() => Positioning, () => Applications]);
export var UpdateWirelessDeviceRequest = struct(
  n0,
  _UWDR,
  0,
  [_I, _DN, _N, _D, _LRWAN, _P],
  [[0, 1], 0, 0, 0, () => LoRaWANUpdateDevice, 0]
);
export var UpdateWirelessDeviceResponse = struct(n0, _UWDRp, 0, [], []);
export var Applications = list(n0, _Ap, 0, () => ApplicationConfig);
export var ServiceProfileList = list(n0, _SPL, 0, () => ServiceProfile);
export var CreateServiceProfile = op(
  n0,
  _CSP,
  {
    [_h]: ["POST", "/service-profiles", 201],
  },
  () => CreateServiceProfileRequest,
  () => CreateServiceProfileResponse
);
export var DeleteServiceProfile = op(
  n0,
  _DSP,
  {
    [_h]: ["DELETE", "/service-profiles/{Id}", 204],
  },
  () => DeleteServiceProfileRequest,
  () => DeleteServiceProfileResponse
);
export var GetServiceProfile = op(
  n0,
  _GSP,
  {
    [_h]: ["GET", "/service-profiles/{Id}", 200],
  },
  () => GetServiceProfileRequest,
  () => GetServiceProfileResponse
);
export var ListServiceProfiles = op(
  n0,
  _LSP,
  {
    [_h]: ["GET", "/service-profiles", 200],
  },
  () => ListServiceProfilesRequest,
  () => ListServiceProfilesResponse
);
export var UpdateWirelessDevice = op(
  n0,
  _UWD,
  {
    [_h]: ["PATCH", "/wireless-devices/{Id}", 204],
  },
  () => UpdateWirelessDeviceRequest,
  () => UpdateWirelessDeviceResponse
);
