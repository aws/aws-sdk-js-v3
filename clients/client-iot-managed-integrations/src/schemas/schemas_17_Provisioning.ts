// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CC,
  _CCl,
  _CCPK,
  _CPP,
  _CPPR,
  _CPPRr,
  _CT,
  _DPP,
  _DPPR,
  _GPP,
  _GPPR,
  _GPPRe,
  _h,
  _hQ,
  _I,
  _Id,
  _It,
  _LPP,
  _LPPR,
  _LPPRi,
  _MR,
  _N,
  _NT,
  _PPLD,
  _PPS,
  _PT,
  _Ta,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CaCertificate = sim(n0, _CC, 0, 8);
export var ClaimCertificate = sim(n0, _CCl, 0, 8);
export var ClaimCertificatePrivateKey = sim(n0, _CCPK, 0, 8);
export var CreateProvisioningProfileRequest = struct(
  n0,
  _CPPR,
  0,
  [_PT, _CC, _N, _CT, _Ta],
  [0, [() => CaCertificate, 0], 0, [0, 4], [() => TagsMap, 0]]
);
export var CreateProvisioningProfileResponse = struct(
  n0,
  _CPPRr,
  0,
  [_Ar, _N, _PT, _I, _CCl, _CCPK],
  [0, 0, 0, 0, [() => ClaimCertificate, 0], [() => ClaimCertificatePrivateKey, 0]]
);
export var DeleteProvisioningProfileRequest = struct(n0, _DPPR, 0, [_Id], [[0, 1]]);
export var GetProvisioningProfileRequest = struct(n0, _GPPR, 0, [_Id], [[0, 1]]);
export var GetProvisioningProfileResponse = struct(
  n0,
  _GPPRe,
  0,
  [_Ar, _N, _PT, _I, _CCl, _Ta],
  [0, 0, 0, 0, [() => ClaimCertificate, 0], [() => TagsMap, 0]]
);
export var ListProvisioningProfilesRequest = struct(
  n0,
  _LPPR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListProvisioningProfilesResponse = struct(
  n0,
  _LPPRi,
  0,
  [_It, _NT],
  [() => ProvisioningProfileListDefinition, 0]
);
export var ProvisioningProfileSummary = struct(n0, _PPS, 0, [_N, _I, _Ar, _PT], [0, 0, 0, 0]);
export var ProvisioningProfileListDefinition = list(n0, _PPLD, 0, () => ProvisioningProfileSummary);
export var CreateProvisioningProfile = op(
  n0,
  _CPP,
  {
    [_h]: ["POST", "/provisioning-profiles", 201],
  },
  () => CreateProvisioningProfileRequest,
  () => CreateProvisioningProfileResponse
);
export var DeleteProvisioningProfile = op(
  n0,
  _DPP,
  {
    [_h]: ["DELETE", "/provisioning-profiles/{Identifier}", 200],
  },
  () => DeleteProvisioningProfileRequest,
  () => Unit
);
export var GetProvisioningProfile = op(
  n0,
  _GPP,
  {
    [_h]: ["GET", "/provisioning-profiles/{Identifier}", 200],
  },
  () => GetProvisioningProfileRequest,
  () => GetProvisioningProfileResponse
);
export var ListProvisioningProfiles = op(
  n0,
  _LPP,
  {
    [_h]: ["GET", "/provisioning-profiles", 200],
  },
  () => ListProvisioningProfilesRequest,
  () => ListProvisioningProfilesResponse
);
