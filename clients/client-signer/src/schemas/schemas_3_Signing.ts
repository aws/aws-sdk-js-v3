// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceLimitExceededException as __ServiceLimitExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _APP,
  _APPR,
  _APPRd,
  _ar,
  _bN,
  _c,
  _cA,
  _ca,
  _CE,
  _cH,
  _co,
  _cRT,
  _D,
  _d,
  _dN,
  _e,
  _en,
  _eT,
  _GRS,
  _GRSR,
  _GRSRe,
  _h,
  _hE,
  _hQ,
  _iR,
  _j,
  _jA,
  _jI,
  _jIo,
  _jO,
  _LPP,
  _LPPR,
  _LPPRi,
  _LSJ,
  _LSJR,
  _LSJRi,
  _LSP,
  _LSPR,
  _LSPRi,
  _m,
  _me,
  _mR,
  _mSIMB,
  _nT,
  _o,
  _P,
  _p,
  _pa,
  _pay,
  _pDN,
  _Pe,
  _pe,
  _pF,
  _pI,
  _pl,
  _pN,
  _pO,
  _pre,
  _pSB,
  _PSP,
  _PSPR,
  _PSPRu,
  _pV,
  _pVA,
  _r,
  _rB,
  _rE,
  _rI,
  _RPP,
  _RPPR,
  _RPPRe,
  _RS,
  _rS,
  _RSP,
  _RSPR,
  _RSR,
  _s,
  _s_,
  _sC,
  _SD,
  _sEA,
  _sEAi,
  _sEB,
  _sI,
  _si,
  _sIF,
  _SJ,
  _SJi,
  _SLEE,
  _sM,
  _sO,
  _SP,
  _sP,
  _SPig,
  _SPigna,
  _SPR,
  _SPRi,
  _SSJ,
  _SSJR,
  _SSJRt,
  _sT,
  _st,
  _sVP,
  _t,
  _ta,
  _TE,
  _VE,
  n0,
} from "./schemas_0";
import { SignatureValidityPeriod, SignedObject, SigningMaterial, SigningPlatformOverrides } from "./schemas_1_Signing";
import { SigningConfiguration, SigningImageFormat, Unit } from "./schemas_2_Signing";
import { Source } from "./schemas_7_Signing";

/* eslint no-var: 0 */

export var AddProfilePermissionRequest = struct(n0, _APPR, 0, [_pN, _pV, _a, _p, _rI, _sI], [[0, 1], 0, 0, 0, 0, 0]);
export var AddProfilePermissionResponse = struct(n0, _APPRd, 0, [_rI], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _co],
  [0, 0],

  __ConflictException
);
export var Destination = struct(n0, _D, 0, [_s_], [() => S3Destination]);
export var GetRevocationStatusRequest = struct(
  n0,
  _GRSR,
  0,
  [_sT, _pI, _pVA, _jA, _cH],
  [
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pVA,
      },
    ],
    [
      0,
      {
        [_hQ]: _jA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _cH,
      },
    ],
  ]
);
export var GetRevocationStatusResponse = struct(n0, _GRSRe, 0, [_rE], [64 | 0]);
export var ListProfilePermissionsRequest = struct(
  n0,
  _LPPR,
  0,
  [_pN, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProfilePermissionsResponse = struct(n0, _LPPRi, 0, [_rI, _pSB, _pe, _nT], [0, 1, () => Permissions, 0]);
export var ListSigningJobsRequest = struct(
  n0,
  _LSJR,
  0,
  [_st, _pI, _rB, _mR, _nT, _iR, _sEB, _sEAi, _jIo],
  [
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rB,
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
      2,
      {
        [_hQ]: _iR,
      },
    ],
    [
      4,
      {
        [_hQ]: _sEB,
      },
    ],
    [
      4,
      {
        [_hQ]: _sEAi,
      },
    ],
    [
      0,
      {
        [_hQ]: _jIo,
      },
    ],
  ]
);
export var ListSigningJobsResponse = struct(n0, _LSJRi, 0, [_j, _nT], [() => SigningJobs, 0]);
export var ListSigningPlatformsRequest = struct(
  n0,
  _LSPR,
  0,
  [_ca, _pa, _t, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _pa,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
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
  ]
);
export var ListSigningPlatformsResponse = struct(n0, _LSPRi, 0, [_pl, _nT], [() => SigningPlatforms, 0]);
export var Permission = struct(n0, _P, 0, [_a, _p, _sI, _pV], [0, 0, 0, 0]);
export var PutSigningProfileRequest = struct(
  n0,
  _PSPR,
  0,
  [_pN, _sM, _sVP, _pI, _o, _sP, _ta],
  [[0, 1], () => SigningMaterial, () => SignatureValidityPeriod, 0, () => SigningPlatformOverrides, 128 | 0, 128 | 0]
);
export var PutSigningProfileResponse = struct(n0, _PSPRu, 0, [_ar, _pV, _pVA], [0, 0, 0]);
export var RemoveProfilePermissionRequest = struct(
  n0,
  _RPPR,
  0,
  [_pN, _rI, _sI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [0, 1],
  ]
);
export var RemoveProfilePermissionResponse = struct(n0, _RPPRe, 0, [_rI], [0]);
export var RevokeSignatureRequest = struct(n0, _RSR, 0, [_jI, _jO, _r], [[0, 1], 0, 0]);
export var RevokeSigningProfileRequest = struct(n0, _RSPR, 0, [_pN, _pV, _r, _eT], [[0, 1], 0, 0, 4]);
export var S3Destination = struct(n0, _SD, 0, [_bN, _pre], [0, 0]);
export var ServiceLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _co],
  [0, 0],

  __ServiceLimitExceededException
);
export var SigningJob = struct(
  n0,
  _SJ,
  0,
  [_jI, _s, _sO, _sM, _cA, _st, _iR, _pN, _pV, _pI, _pDN, _sEA, _jO, _jIo],
  [0, () => Source, () => SignedObject, () => SigningMaterial, 4, 0, 2, 0, 0, 0, 0, 4, 0, 0]
);
export var SigningPlatform = struct(
  n0,
  _SP,
  0,
  [_pI, _dN, _pa, _t, _ca, _sC, _sIF, _mSIMB, _rS],
  [0, 0, 0, 0, 0, () => SigningConfiguration, () => SigningImageFormat, 1, 2]
);
export var SignPayloadRequest = struct(n0, _SPR, 0, [_pN, _pO, _pay, _pF], [0, 0, 21, 0]);
export var SignPayloadResponse = struct(n0, _SPRi, 0, [_jI, _jO, _me, _si], [0, 0, 128 | 0, 21]);
export var StartSigningJobRequest = struct(
  n0,
  _SSJR,
  0,
  [_s, _d, _pN, _cRT, _pO],
  [() => Source, () => Destination, 0, [0, 4], 0]
);
export var StartSigningJobResponse = struct(n0, _SSJRt, 0, [_jI, _jO], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _co],
  [0, 0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _co],
  [0, 0],

  __ValidationException
);
export var CertificateHashes = 64 | 0;

export var Permissions = list(n0, _Pe, 0, () => Permission);
export var RevokedEntities = 64 | 0;

export var SigningJobs = list(n0, _SJi, 0, () => SigningJob);
export var SigningPlatforms = list(n0, _SPig, 0, () => SigningPlatform);
export var Metadata = 128 | 0;

export var AddProfilePermission = op(
  n0,
  _APP,
  {
    [_h]: ["POST", "/signing-profiles/{profileName}/permissions", 200],
  },
  () => AddProfilePermissionRequest,
  () => AddProfilePermissionResponse
);
export var GetRevocationStatus = op(
  n0,
  _GRS,
  {
    [_h]: ["GET", "/revocations", 200],
    [_en]: ["verification."],
  },
  () => GetRevocationStatusRequest,
  () => GetRevocationStatusResponse
);
export var ListProfilePermissions = op(
  n0,
  _LPP,
  {
    [_h]: ["GET", "/signing-profiles/{profileName}/permissions", 200],
  },
  () => ListProfilePermissionsRequest,
  () => ListProfilePermissionsResponse
);
export var ListSigningJobs = op(
  n0,
  _LSJ,
  {
    [_h]: ["GET", "/signing-jobs", 200],
  },
  () => ListSigningJobsRequest,
  () => ListSigningJobsResponse
);
export var ListSigningPlatforms = op(
  n0,
  _LSP,
  {
    [_h]: ["GET", "/signing-platforms", 200],
  },
  () => ListSigningPlatformsRequest,
  () => ListSigningPlatformsResponse
);
export var PutSigningProfile = op(
  n0,
  _PSP,
  {
    [_h]: ["PUT", "/signing-profiles/{profileName}", 200],
  },
  () => PutSigningProfileRequest,
  () => PutSigningProfileResponse
);
export var RemoveProfilePermission = op(
  n0,
  _RPP,
  {
    [_h]: ["DELETE", "/signing-profiles/{profileName}/permissions/{statementId}", 200],
  },
  () => RemoveProfilePermissionRequest,
  () => RemoveProfilePermissionResponse
);
export var RevokeSignature = op(
  n0,
  _RS,
  {
    [_h]: ["PUT", "/signing-jobs/{jobId}/revoke", 200],
  },
  () => RevokeSignatureRequest,
  () => Unit
);
export var RevokeSigningProfile = op(
  n0,
  _RSP,
  {
    [_h]: ["PUT", "/signing-profiles/{profileName}/revoke", 200],
  },
  () => RevokeSigningProfileRequest,
  () => Unit
);
export var SignPayload = op(
  n0,
  _SPigna,
  {
    [_h]: ["POST", "/signing-jobs/with-payload", 200],
  },
  () => SignPayloadRequest,
  () => SignPayloadResponse
);
export var StartSigningJob = op(
  n0,
  _SSJ,
  {
    [_h]: ["POST", "/signing-jobs", 200],
  },
  () => StartSigningJobRequest,
  () => StartSigningJobResponse
);
