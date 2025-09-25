// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _d,
  _dO,
  _do,
  _DP,
  _dP,
  _DPe,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _f,
  _hQ,
  _ht,
  _n,
  _na,
  _oC,
  _p,
  _PDa,
  _POC,
  _POR,
  _PPOC,
  _PPOCR,
  _PPOCRu,
  _PS,
  _pu,
  _r,
  _res,
  _up,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePackageRequest = struct(
  n0,
  _DPR,
  0,
  [_d, _dO, _r, _f, _na, _p],
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
  ]
);
export var DeletePackageResult = struct(n0, _DPRe, 0, [_dP], [() => PackageSummary]);
export var DescribePackageRequest = struct(
  n0,
  _DPRes,
  0,
  [_d, _dO, _r, _f, _na, _p],
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
  ]
);
export var DescribePackageResult = struct(n0, _DPResc, 0, [_p], [() => PackageDescription]);
export var PackageDescription = struct(n0, _PDa, 0, [_f, _na, _n, _oC], [0, 0, 0, () => PackageOriginConfiguration]);
export var PackageOriginConfiguration = struct(n0, _POC, 0, [_res], [() => PackageOriginRestrictions]);
export var PackageOriginRestrictions = struct(n0, _POR, 0, [_pu, _up], [0, 0]);
export var PackageSummary = struct(n0, _PS, 0, [_f, _na, _p, _oC], [0, 0, 0, () => PackageOriginConfiguration]);
export var PutPackageOriginConfigurationRequest = struct(
  n0,
  _PPOCR,
  0,
  [_d, _dO, _r, _f, _na, _p, _res],
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
    () => PackageOriginRestrictions,
  ]
);
export var PutPackageOriginConfigurationResult = struct(n0, _PPOCRu, 0, [_oC], [() => PackageOriginConfiguration]);
export var DeletePackage = op(
  n0,
  _DP,
  {
    [_ht]: ["DELETE", "/v1/package", 200],
  },
  () => DeletePackageRequest,
  () => DeletePackageResult
);
export var DescribePackage = op(
  n0,
  _DPe,
  {
    [_ht]: ["GET", "/v1/package", 200],
  },
  () => DescribePackageRequest,
  () => DescribePackageResult
);
export var PutPackageOriginConfiguration = op(
  n0,
  _PPOC,
  {
    [_ht]: ["POST", "/v1/package", 200],
  },
  () => PutPackageOriginConfigurationRequest,
  () => PutPackageOriginConfigurationResult
);
