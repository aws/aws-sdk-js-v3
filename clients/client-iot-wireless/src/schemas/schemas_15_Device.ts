// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AI,
  _Ar,
  _ASPK,
  _CBT,
  _CCT,
  _CDP,
  _CDPR,
  _CDPRr,
  _CI,
  _CRT,
  _DCM,
  _DCML,
  _DDP,
  _DDPR,
  _DDPRe,
  _DP,
  _DPL,
  _DPT,
  _dPT,
  _DTI,
  _FPFL,
  _FS,
  _GDP,
  _GDPR,
  _GDPRe,
  _h,
  _hQ,
  _I,
  _LDP,
  _LDPR,
  _LDPRi,
  _LRWAN,
  _LRWANDP,
  _MAS,
  _MDC,
  _ME,
  _MR,
  _mR,
  _MV,
  _N,
  _NT,
  _nT,
  _PSD,
  _PSF,
  _PSP,
  _QS,
  _RD,
  _RDO,
  _RDR,
  _RF,
  _RPR,
  _RR,
  _S,
  _SBFC,
  _SCB,
  _SCC,
  _SCDP,
  _SGDP,
  _SJ,
  _Ta,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationServerPublicKey = sim(n0, _ASPK, 0, 8);
export var CreateDeviceProfileRequest = struct(
  n0,
  _CDPR,
  0,
  [_N, _LRWAN, _Ta, _CRT, _S],
  [0, () => LoRaWANDeviceProfile, () => TagList, [0, 4], () => SidewalkCreateDeviceProfile]
);
export var CreateDeviceProfileResponse = struct(n0, _CDPRr, 0, [_Ar, _I], [0, 0]);
export var DakCertificateMetadata = struct(n0, _DCM, 0, [_CI, _MAS, _FS, _AI, _DTI], [0, 1, 2, 0, 0]);
export var DeleteDeviceProfileRequest = struct(n0, _DDPR, 0, [_I], [[0, 1]]);
export var DeleteDeviceProfileResponse = struct(n0, _DDPRe, 0, [], []);
export var DeviceProfile = struct(n0, _DP, 0, [_Ar, _N, _I], [0, 0, 0]);
export var GetDeviceProfileRequest = struct(n0, _GDPR, 0, [_I], [[0, 1]]);
export var GetDeviceProfileResponse = struct(
  n0,
  _GDPRe,
  0,
  [_Ar, _N, _I, _LRWAN, _S],
  [0, 0, 0, () => LoRaWANDeviceProfile, [() => SidewalkGetDeviceProfile, 0]]
);
export var ListDeviceProfilesRequest = struct(
  n0,
  _LDPR,
  0,
  [_NT, _MR, _DPT],
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
    [
      0,
      {
        [_hQ]: _dPT,
      },
    ],
  ]
);
export var ListDeviceProfilesResponse = struct(n0, _LDPRi, 0, [_NT, _DPL], [0, () => DeviceProfileList]);
export var LoRaWANDeviceProfile = struct(
  n0,
  _LRWANDP,
  0,
  [_SCB, _CBT, _PSP, _PSD, _PSF, _SCC, _CCT, _MV, _RPR, _RD, _RDO, _RDR, _RF, _FPFL, _ME, _MDC, _RR, _SJ, _SBFC],
  [2, 1, 1, 1, 1, 2, 1, 0, 0, 1, 1, 1, 1, 64 | 1, 1, 1, 0, 2, 2]
);
export var SidewalkCreateDeviceProfile = struct(n0, _SCDP, 0, [], []);
export var SidewalkGetDeviceProfile = struct(
  n0,
  _SGDP,
  0,
  [_ASPK, _QS, _DCM],
  [[() => ApplicationServerPublicKey, 0], 2, () => DakCertificateMetadataList]
);
export var DakCertificateMetadataList = list(n0, _DCML, 0, () => DakCertificateMetadata);
export var DeviceProfileList = list(n0, _DPL, 0, () => DeviceProfile);
export var FactoryPresetFreqsList = 64 | 1;

export var CreateDeviceProfile = op(
  n0,
  _CDP,
  {
    [_h]: ["POST", "/device-profiles", 201],
  },
  () => CreateDeviceProfileRequest,
  () => CreateDeviceProfileResponse
);
export var DeleteDeviceProfile = op(
  n0,
  _DDP,
  {
    [_h]: ["DELETE", "/device-profiles/{Id}", 204],
  },
  () => DeleteDeviceProfileRequest,
  () => DeleteDeviceProfileResponse
);
export var GetDeviceProfile = op(
  n0,
  _GDP,
  {
    [_h]: ["GET", "/device-profiles/{Id}", 200],
  },
  () => GetDeviceProfileRequest,
  () => GetDeviceProfileResponse
);
export var ListDeviceProfiles = op(
  n0,
  _LDP,
  {
    [_h]: ["GET", "/device-profiles", 200],
  },
  () => ListDeviceProfilesRequest,
  () => ListDeviceProfilesResponse
);
