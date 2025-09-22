// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _bN,
  _cA,
  _cAe,
  _cAo,
  _DSJ,
  _DSJR,
  _DSJRe,
  _eA,
  _GSPe,
  _GSPRet,
  _GSPReti,
  _h,
  _hA,
  _hQ,
  _iC,
  _jI,
  _jIo,
  _jO,
  _k,
  _LSPi,
  _LSPRis,
  _LSPRist,
  _mR,
  _nT,
  _o,
  _pDN,
  _pI,
  _pN,
  _pO,
  _pr,
  _pV,
  _pVA,
  _r,
  _rAe,
  _rB,
  _rBe,
  _rEF,
  _rR,
  _s,
  _s_,
  _sC,
  _SCO,
  _sEA,
  _sIF,
  _SJRR,
  _SM,
  _sM,
  _SO,
  _sO,
  _sP,
  _SPi,
  _SPign,
  _SPO,
  _SPRR,
  _sR,
  _SSO,
  _st,
  _sta,
  _SVP,
  _sVP,
  _ta,
  _ty,
  _va,
  n0,
} from "./schemas_0";
import { Source } from "./schemas_7_Signing";

/* eslint no-var: 0 */

export var DescribeSigningJobRequest = struct(n0, _DSJR, 0, [_jI], [[0, 1]]);
export var DescribeSigningJobResponse = struct(
  n0,
  _DSJRe,
  0,
  [_jI, _s, _sM, _pI, _pDN, _pN, _pV, _o, _sP, _cA, _cAo, _sEA, _rB, _st, _sR, _rR, _sO, _jO, _jIo],
  [
    0,
    () => Source,
    () => SigningMaterial,
    0,
    0,
    0,
    0,
    () => SigningPlatformOverrides,
    128 | 0,
    4,
    4,
    4,
    0,
    0,
    0,
    () => SigningJobRevocationRecord,
    () => SignedObject,
    0,
    0,
  ]
);
export var GetSigningProfileRequest = struct(
  n0,
  _GSPRet,
  0,
  [_pN, _pO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pO,
      },
    ],
  ]
);
export var GetSigningProfileResponse = struct(
  n0,
  _GSPReti,
  0,
  [_pN, _pV, _pVA, _rR, _sM, _pI, _pDN, _sVP, _o, _sP, _st, _sR, _ar, _ta],
  [
    0,
    0,
    0,
    () => SigningProfileRevocationRecord,
    () => SigningMaterial,
    0,
    0,
    () => SignatureValidityPeriod,
    () => SigningPlatformOverrides,
    128 | 0,
    0,
    0,
    0,
    128 | 0,
  ]
);
export var ListSigningProfilesRequest = struct(
  n0,
  _LSPRis,
  0,
  [_iC, _mR, _nT, _pI, _sta],
  [
    [
      2,
      {
        [_hQ]: _iC,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _sta,
      },
    ],
  ]
);
export var ListSigningProfilesResponse = struct(n0, _LSPRist, 0, [_pr, _nT], [() => SigningProfiles, 0]);
export var S3SignedObject = struct(n0, _SSO, 0, [_bN, _k], [0, 0]);
export var SignatureValidityPeriod = struct(n0, _SVP, 0, [_va, _ty], [1, 0]);
export var SignedObject = struct(n0, _SO, 0, [_s_], [() => S3SignedObject]);
export var SigningConfigurationOverrides = struct(n0, _SCO, 0, [_eA, _hA], [0, 0]);
export var SigningJobRevocationRecord = struct(n0, _SJRR, 0, [_r, _rAe, _rBe], [0, 4, 0]);
export var SigningMaterial = struct(n0, _SM, 0, [_cAe], [0]);
export var SigningPlatformOverrides = struct(n0, _SPO, 0, [_sC, _sIF], [() => SigningConfigurationOverrides, 0]);
export var SigningProfile = struct(
  n0,
  _SPi,
  0,
  [_pN, _pV, _pVA, _sM, _sVP, _pI, _pDN, _sP, _st, _ar, _ta],
  [0, 0, 0, () => SigningMaterial, () => SignatureValidityPeriod, 0, 0, 128 | 0, 0, 0, 128 | 0]
);
export var SigningProfileRevocationRecord = struct(n0, _SPRR, 0, [_rEF, _rAe, _rBe], [4, 4, 0]);
export var SigningProfiles = list(n0, _SPign, 0, () => SigningProfile);
export var Statuses = 64 | 0;

export var SigningParameters = 128 | 0;

export var DescribeSigningJob = op(
  n0,
  _DSJ,
  {
    [_h]: ["GET", "/signing-jobs/{jobId}", 200],
  },
  () => DescribeSigningJobRequest,
  () => DescribeSigningJobResponse
);
export var GetSigningProfile = op(
  n0,
  _GSPe,
  {
    [_h]: ["GET", "/signing-profiles/{profileName}", 200],
  },
  () => GetSigningProfileRequest,
  () => GetSigningProfileResponse
);
export var ListSigningProfiles = op(
  n0,
  _LSPi,
  {
    [_h]: ["GET", "/signing-profiles", 200],
  },
  () => ListSigningProfilesRequest,
  () => ListSigningProfilesResponse
);
