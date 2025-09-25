// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _art,
  _at,
  _bGA,
  _bGI,
  _BGM,
  _bGM,
  _bGN,
  _bGP,
  _cD,
  _d,
  _DBGe,
  _DBGRes,
  _DBGResc,
  _DECe,
  _DECRes,
  _DECResc,
  _DTRT,
  _DTRTR,
  _DTRTRe,
  _dVN,
  _eCv,
  _eRr,
  _fC,
  _GP,
  _GPR,
  _GPRe,
  _GPV,
  _GPVR,
  _GPVRe,
  _h,
  _hQ,
  _iFB,
  _iFK,
  _lMD,
  _LP,
  _LPR,
  _LPRi,
  _LPV,
  _LPVR,
  _LPVRi,
  _me,
  _mR,
  _nT,
  _pA,
  _pN,
  _pP,
  _PS,
  _pSa,
  _PSL,
  _pVA,
  _PVS,
  _pVS,
  _PVSL,
  _rA,
  _rec,
  _sb,
  _sCu,
  _st,
  _sVS,
  _tB,
  _tI,
  _ve,
  _vN,
  n0,
} from "./schemas_0";
import { PackageVersionArtifact, PackageVersionRecipe, ResourceAttributes, Sbom } from "./schemas_12_Package";
import { BillingGroupProperties } from "./schemas_27_Billing";
import { EventConfigurations } from "./schemas_91_Configuration";
import { ResourceDescription } from "./schemas_110_Package";

/* eslint no-var: 0 */

export var BillingGroupMetadata = struct(n0, _BGM, 0, [_cD], [4]);
export var DescribeBillingGroupRequest = struct(n0, _DBGRes, 0, [_bGN], [[0, 1]]);
export var DescribeBillingGroupResponse = struct(
  n0,
  _DBGResc,
  0,
  [_bGN, _bGI, _bGA, _ve, _bGP, _bGM],
  [0, 0, 0, 1, () => BillingGroupProperties, () => BillingGroupMetadata]
);
export var DescribeEventConfigurationsRequest = struct(n0, _DECRes, 0, [], []);
export var DescribeEventConfigurationsResponse = struct(
  n0,
  _DECResc,
  0,
  [_eCv, _cD, _lMD],
  [() => EventConfigurations, 4, 4]
);
export var DescribeThingRegistrationTaskRequest = struct(n0, _DTRTR, 0, [_tI], [[0, 1]]);
export var DescribeThingRegistrationTaskResponse = struct(
  n0,
  _DTRTRe,
  0,
  [_tI, _cD, _lMD, _tB, _iFB, _iFK, _rA, _st, _me, _sCu, _fC, _pP],
  [0, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1]
);
export var GetPackageRequest = struct(n0, _GPR, 0, [_pN], [[0, 1]]);
export var GetPackageResponse = struct(
  n0,
  _GPRe,
  0,
  [_pN, _pA, _d, _dVN, _cD, _lMD],
  [0, 0, [() => ResourceDescription, 0], 0, 4, 4]
);
export var GetPackageVersionRequest = struct(
  n0,
  _GPVR,
  0,
  [_pN, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPackageVersionResponse = struct(
  n0,
  _GPVRe,
  0,
  [_pVA, _pN, _vN, _d, _at, _art, _st, _eRr, _cD, _lMD, _sb, _sVS, _rec],
  [
    0,
    0,
    0,
    [() => ResourceDescription, 0],
    [() => ResourceAttributes, 0],
    () => PackageVersionArtifact,
    0,
    0,
    4,
    4,
    () => Sbom,
    0,
    [() => PackageVersionRecipe, 0],
  ]
);
export var ListPackagesRequest = struct(
  n0,
  _LPR,
  0,
  [_mR, _nT],
  [
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
export var ListPackagesResponse = struct(n0, _LPRi, 0, [_pSa, _nT], [() => PackageSummaryList, 0]);
export var ListPackageVersionsRequest = struct(
  n0,
  _LPVR,
  0,
  [_pN, _st, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
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
export var ListPackageVersionsResponse = struct(n0, _LPVRi, 0, [_pVS, _nT], [() => PackageVersionSummaryList, 0]);
export var PackageSummary = struct(n0, _PS, 0, [_pN, _dVN, _cD, _lMD], [0, 0, 4, 4]);
export var PackageVersionSummary = struct(n0, _PVS, 0, [_pN, _vN, _st, _cD, _lMD], [0, 0, 0, 4, 4]);
export var PackageSummaryList = list(n0, _PSL, 0, () => PackageSummary);
export var PackageVersionSummaryList = list(n0, _PVSL, 0, () => PackageVersionSummary);
export var DescribeBillingGroup = op(
  n0,
  _DBGe,
  {
    [_h]: ["GET", "/billing-groups/{billingGroupName}", 200],
  },
  () => DescribeBillingGroupRequest,
  () => DescribeBillingGroupResponse
);
export var DescribeEventConfigurations = op(
  n0,
  _DECe,
  {
    [_h]: ["GET", "/event-configurations", 200],
  },
  () => DescribeEventConfigurationsRequest,
  () => DescribeEventConfigurationsResponse
);
export var DescribeThingRegistrationTask = op(
  n0,
  _DTRT,
  {
    [_h]: ["GET", "/thing-registration-tasks/{taskId}", 200],
  },
  () => DescribeThingRegistrationTaskRequest,
  () => DescribeThingRegistrationTaskResponse
);
export var GetPackage = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/packages/{packageName}", 200],
  },
  () => GetPackageRequest,
  () => GetPackageResponse
);
export var GetPackageVersion = op(
  n0,
  _GPV,
  {
    [_h]: ["GET", "/packages/{packageName}/versions/{versionName}", 200],
  },
  () => GetPackageVersionRequest,
  () => GetPackageVersionResponse
);
export var ListPackages = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/packages", 200],
  },
  () => ListPackagesRequest,
  () => ListPackagesResponse
);
export var ListPackageVersions = op(
  n0,
  _LPV,
  {
    [_h]: ["GET", "/packages/{packageName}/versions", 200],
  },
  () => ListPackageVersionsRequest,
  () => ListPackageVersionsResponse
);
