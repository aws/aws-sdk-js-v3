// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _art,
  _ASWPV,
  _ASWPVR,
  _ASWPVRs,
  _at,
  _CPVR,
  _CPVr,
  _CPVRr,
  _cT,
  _d,
  _DPV,
  _DPVR,
  _DPVRe,
  _DSFPV,
  _DSFPVR,
  _DSFPVRi,
  _dVN,
  _eC,
  _eMr,
  _eRr,
  _fN,
  _h,
  _hQ,
  _iT,
  _LSVR,
  _LSVRR,
  _LSVRRi,
  _mR,
  _nT,
  _pN,
  _PVA,
  _pVA,
  _PVR,
  _RAe,
  _rec,
  _Sb,
  _sb,
  _sL,
  _st,
  _SVRS,
  _SVRSL,
  _sVS,
  _tag,
  _uDV,
  _UPp,
  _UPR,
  _UPRp,
  _UPV,
  _UPVR,
  _UPVRp,
  _vN,
  _vR,
  _vRS,
  n0,
} from "./schemas_0";
import { S3Location } from "./schemas_25_Version";
import { ResourceDescription } from "./schemas_110_Package";

/* eslint no-var: 0 */

export var PackageVersionRecipe = sim(n0, _PVR, 0, 8);
export var AssociateSbomWithPackageVersionRequest = struct(
  n0,
  _ASWPVR,
  0,
  [_pN, _vN, _sb, _cT],
  [
    [0, 1],
    [0, 1],
    () => Sbom,
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var AssociateSbomWithPackageVersionResponse = struct(
  n0,
  _ASWPVRs,
  0,
  [_pN, _vN, _sb, _sVS],
  [0, 0, () => Sbom, 0]
);
export var CreatePackageVersionRequest = struct(
  n0,
  _CPVR,
  0,
  [_pN, _vN, _d, _at, _art, _rec, _tag, _cT],
  [
    [0, 1],
    [0, 1],
    [() => ResourceDescription, 0],
    [() => ResourceAttributes, 0],
    () => PackageVersionArtifact,
    [() => PackageVersionRecipe, 0],
    128 | 0,
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var CreatePackageVersionResponse = struct(
  n0,
  _CPVRr,
  0,
  [_pVA, _pN, _vN, _d, _at, _st, _eRr],
  [0, 0, 0, [() => ResourceDescription, 0], [() => ResourceAttributes, 0], 0, 0]
);
export var DeletePackageVersionRequest = struct(
  n0,
  _DPVR,
  0,
  [_pN, _vN, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeletePackageVersionResponse = struct(n0, _DPVRe, 0, [], []);
export var DisassociateSbomFromPackageVersionRequest = struct(
  n0,
  _DSFPVR,
  0,
  [_pN, _vN, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DisassociateSbomFromPackageVersionResponse = struct(n0, _DSFPVRi, 0, [], []);
export var ListSbomValidationResultsRequest = struct(
  n0,
  _LSVRR,
  0,
  [_pN, _vN, _vR, _mR, _nT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vR,
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
export var ListSbomValidationResultsResponse = struct(
  n0,
  _LSVRRi,
  0,
  [_vRS, _nT],
  [() => SbomValidationResultSummaryList, 0]
);
export var PackageVersionArtifact = struct(n0, _PVA, 0, [_sL], [() => S3Location]);
export var Sbom = struct(n0, _Sb, 0, [_sL], [() => S3Location]);
export var SbomValidationResultSummary = struct(n0, _SVRS, 0, [_fN, _vR, _eC, _eMr], [0, 0, 0, 0]);
export var UpdatePackageRequest = struct(
  n0,
  _UPR,
  0,
  [_pN, _d, _dVN, _uDV, _cT],
  [
    [0, 1],
    [() => ResourceDescription, 0],
    0,
    2,
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var UpdatePackageResponse = struct(n0, _UPRp, 0, [], []);
export var UpdatePackageVersionRequest = struct(
  n0,
  _UPVR,
  0,
  [_pN, _vN, _d, _at, _art, _a, _rec, _cT],
  [
    [0, 1],
    [0, 1],
    [() => ResourceDescription, 0],
    [() => ResourceAttributes, 0],
    () => PackageVersionArtifact,
    0,
    [() => PackageVersionRecipe, 0],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var UpdatePackageVersionResponse = struct(n0, _UPVRp, 0, [], []);
export var SbomValidationResultSummaryList = list(n0, _SVRSL, 0, () => SbomValidationResultSummary);
export var ResourceAttributes = map(n0, _RAe, 8, 0, 0);
export var AssociateSbomWithPackageVersion = op(
  n0,
  _ASWPV,
  {
    [_h]: ["PUT", "/packages/{packageName}/versions/{versionName}/sbom", 200],
  },
  () => AssociateSbomWithPackageVersionRequest,
  () => AssociateSbomWithPackageVersionResponse
);
export var CreatePackageVersion = op(
  n0,
  _CPVr,
  {
    [_h]: ["PUT", "/packages/{packageName}/versions/{versionName}", 200],
  },
  () => CreatePackageVersionRequest,
  () => CreatePackageVersionResponse
);
export var DeletePackageVersion = op(
  n0,
  _DPV,
  {
    [_h]: ["DELETE", "/packages/{packageName}/versions/{versionName}", 200],
  },
  () => DeletePackageVersionRequest,
  () => DeletePackageVersionResponse
);
export var DisassociateSbomFromPackageVersion = op(
  n0,
  _DSFPV,
  {
    [_h]: ["DELETE", "/packages/{packageName}/versions/{versionName}/sbom", 200],
  },
  () => DisassociateSbomFromPackageVersionRequest,
  () => DisassociateSbomFromPackageVersionResponse
);
export var ListSbomValidationResults = op(
  n0,
  _LSVR,
  {
    [_h]: ["GET", "/packages/{packageName}/versions/{versionName}/sbom-validation-results", 200],
  },
  () => ListSbomValidationResultsRequest,
  () => ListSbomValidationResultsResponse
);
export var UpdatePackage = op(
  n0,
  _UPp,
  {
    [_h]: ["PATCH", "/packages/{packageName}", 200],
  },
  () => UpdatePackageRequest,
  () => UpdatePackageResponse
);
export var UpdatePackageVersion = op(
  n0,
  _UPV,
  {
    [_h]: ["PATCH", "/packages/{packageName}/versions/{versionName}", 200],
  },
  () => UpdatePackageVersionRequest,
  () => UpdatePackageVersionResponse
);
