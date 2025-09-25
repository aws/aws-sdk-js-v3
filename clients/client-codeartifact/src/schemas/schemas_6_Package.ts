// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _aC,
  _aN,
  _aO,
  _AS,
  _as,
  _aSHA,
  _CPV,
  _CPVR,
  _CPVRo,
  _d,
  _DEP,
  _dEP,
  _dNi,
  _dO,
  _do,
  _DPV,
  _DPVe,
  _DPVi,
  _DPVR,
  _DPVRe,
  _DPVRes,
  _DPVResc,
  _DPVRi,
  _DPVRis,
  _dR,
  _dr,
  _eCN,
  _eCr,
  _eMr,
  _eS,
  _f,
  _fV,
  _GPVA,
  _GPVAR,
  _GPVARe,
  _GPVR,
  _GPVRR,
  _GPVRRe,
  _h,
  _hH,
  _hP,
  _hQ,
  _ht,
  _iFU,
  _l,
  _LI,
  _LIL,
  _n,
  _na,
  _or,
  _oT,
  _p,
  _pN,
  _PPV,
  _PPVR,
  _PPVRu,
  _pT,
  _pV,
  _PVD,
  _PVE,
  _PVEM,
  _PVO,
  _pVR,
  _r,
  _re,
  _rea,
  _rN,
  _s,
  _sCR,
  _si,
  _SPVI,
  _SPVIM,
  _sR,
  _sr,
  _st,
  _su,
  _sV,
  _tS,
  _un,
  _UPVS,
  _UPVSR,
  _UPVSRp,
  _ur,
  _v,
  _ve,
  _vR,
  _vRe,
  _XA,
  _xacs,
  _XP,
  _XP_,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Asset = sim(n0, _A, 42, {
  [_s]: 1,
});
export var AssetSummary = struct(n0, _AS, 0, [_n, _si, _h], [0, 1, 128 | 0]);
export var CopyPackageVersionsRequest = struct(
  n0,
  _CPVR,
  0,
  [_d, _dO, _sR, _dR, _f, _na, _p, _v, _vR, _aO, _iFU],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _sr,
      },
    ],
    [
      0,
      {
        [_hQ]: _dr,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    64 | 0,
    128 | 0,
    2,
    2,
  ]
);
export var CopyPackageVersionsResult = struct(
  n0,
  _CPVRo,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
);
export var DeletePackageVersionsRequest = struct(
  n0,
  _DPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _eS],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    64 | 0,
    0,
  ]
);
export var DeletePackageVersionsResult = struct(
  n0,
  _DPVRe,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
);
export var DescribePackageVersionRequest = struct(
  n0,
  _DPVRes,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
  ]
);
export var DescribePackageVersionResult = struct(n0, _DPVResc, 0, [_pV], [() => PackageVersionDescription]);
export var DisposePackageVersionsRequest = struct(
  n0,
  _DPVRi,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _vR, _eS],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    64 | 0,
    128 | 0,
    0,
  ]
);
export var DisposePackageVersionsResult = struct(
  n0,
  _DPVRis,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
);
export var DomainEntryPoint = struct(n0, _DEP, 0, [_rN, _eCN], [0, 0]);
export var GetPackageVersionAssetRequest = struct(
  n0,
  _GPVAR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _as, _pVR],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
    [
      0,
      {
        [_hQ]: _as,
      },
    ],
    [
      0,
      {
        [_hQ]: _re,
      },
    ],
  ]
);
export var GetPackageVersionAssetResult = struct(
  n0,
  _GPVARe,
  0,
  [_as, _aN, _pV, _pVR],
  [
    [() => Asset, 16],
    [
      0,
      {
        [_hH]: _XA,
      },
    ],
    [
      0,
      {
        [_hH]: _XP,
      },
    ],
    [
      0,
      {
        [_hH]: _XP_,
      },
    ],
  ]
);
export var GetPackageVersionReadmeRequest = struct(
  n0,
  _GPVRR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
  ]
);
export var GetPackageVersionReadmeResult = struct(n0, _GPVRRe, 0, [_f, _na, _p, _ve, _vRe, _rea], [0, 0, 0, 0, 0, 0]);
export var LicenseInfo = struct(n0, _LI, 0, [_n, _ur], [0, 0]);
export var PackageVersionDescription = struct(
  n0,
  _PVD,
  0,
  [_f, _na, _pN, _dNi, _ve, _su, _hP, _sCR, _pT, _l, _re, _st, _or],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, () => LicenseInfoList, 0, 0, () => PackageVersionOrigin]
);
export var PackageVersionError = struct(n0, _PVE, 0, [_eCr, _eMr], [0, 0]);
export var PackageVersionOrigin = struct(n0, _PVO, 0, [_dEP, _oT], [() => DomainEntryPoint, 0]);
export var PublishPackageVersionRequest = struct(
  n0,
  _PPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _aC, _aN, _aSHA, _un],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
    [() => Asset, 16],
    [
      0,
      {
        [_hQ]: _as,
      },
    ],
    [
      0,
      {
        [_hH]: _xacs,
      },
    ],
    [
      2,
      {
        [_hQ]: _un,
      },
    ],
  ]
);
export var PublishPackageVersionResult = struct(
  n0,
  _PPVRu,
  0,
  [_f, _na, _p, _ve, _vRe, _st, _as],
  [0, 0, 0, 0, 0, 0, () => AssetSummary]
);
export var SuccessfulPackageVersionInfo = struct(n0, _SPVI, 0, [_re, _st], [0, 0]);
export var UpdatePackageVersionsStatusRequest = struct(
  n0,
  _UPVSR,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _vR, _eS, _tS],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    64 | 0,
    128 | 0,
    0,
    0,
  ]
);
export var UpdatePackageVersionsStatusResult = struct(
  n0,
  _UPVSRp,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
);
export var LicenseInfoList = list(n0, _LIL, 0, () => LicenseInfo);
export var PackageVersionList = 64 | 0;

export var AssetHashes = 128 | 0;

export var PackageVersionErrorMap = map(n0, _PVEM, 0, 0, () => PackageVersionError);
export var PackageVersionRevisionMap = 128 | 0;

export var SuccessfulPackageVersionInfoMap = map(n0, _SPVIM, 0, 0, () => SuccessfulPackageVersionInfo);
export var CopyPackageVersions = op(
  n0,
  _CPV,
  {
    [_ht]: ["POST", "/v1/package/versions/copy", 200],
  },
  () => CopyPackageVersionsRequest,
  () => CopyPackageVersionsResult
);
export var DeletePackageVersions = op(
  n0,
  _DPV,
  {
    [_ht]: ["POST", "/v1/package/versions/delete", 200],
  },
  () => DeletePackageVersionsRequest,
  () => DeletePackageVersionsResult
);
export var DescribePackageVersion = op(
  n0,
  _DPVe,
  {
    [_ht]: ["GET", "/v1/package/version", 200],
  },
  () => DescribePackageVersionRequest,
  () => DescribePackageVersionResult
);
export var DisposePackageVersions = op(
  n0,
  _DPVi,
  {
    [_ht]: ["POST", "/v1/package/versions/dispose", 200],
  },
  () => DisposePackageVersionsRequest,
  () => DisposePackageVersionsResult
);
export var GetPackageVersionAsset = op(
  n0,
  _GPVA,
  {
    [_ht]: ["GET", "/v1/package/version/asset", 200],
  },
  () => GetPackageVersionAssetRequest,
  () => GetPackageVersionAssetResult
);
export var GetPackageVersionReadme = op(
  n0,
  _GPVR,
  {
    [_ht]: ["GET", "/v1/package/version/readme", 200],
  },
  () => GetPackageVersionReadmeRequest,
  () => GetPackageVersionReadmeResult
);
export var PublishPackageVersion = op(
  n0,
  _PPV,
  {
    [_ht]: ["POST", "/v1/package/version/publish", 200],
  },
  () => PublishPackageVersionRequest,
  () => PublishPackageVersionResult
);
export var UpdatePackageVersionsStatus = op(
  n0,
  _UPVS,
  {
    [_ht]: ["POST", "/v1/package/versions/update_status", 200],
  },
  () => UpdatePackageVersionsStatusRequest,
  () => UpdatePackageVersionsStatusResult
);
