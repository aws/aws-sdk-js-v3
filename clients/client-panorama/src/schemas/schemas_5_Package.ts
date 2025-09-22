// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _BPL,
  _Bu,
  _CP,
  _CPR,
  _CPRr,
  _CT,
  _DP,
  _DPe,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _FD,
  _GPL,
  _h,
  _hQ,
  _LP,
  _LPR,
  _LPRi,
  _MPL,
  _MR,
  _mR,
  _NT,
  _nT,
  _P,
  _PI,
  _PL,
  _PLI,
  _PN,
  _RAPA,
  _RPL,
  _SL,
  _T,
  _WAPA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePackageRequest = struct(n0, _CPR, 0, [_PN, _T], [0, 128 | 0]);
export var CreatePackageResponse = struct(n0, _CPRr, 0, [_PI, _A, _SL], [0, 0, () => StorageLocation]);
export var DeletePackageRequest = struct(
  n0,
  _DPR,
  0,
  [_PI, _FD],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _FD,
      },
    ],
  ]
);
export var DeletePackageResponse = struct(n0, _DPRe, 0, [], []);
export var DescribePackageRequest = struct(n0, _DPRes, 0, [_PI], [[0, 1]]);
export var DescribePackageResponse = struct(
  n0,
  _DPResc,
  0,
  [_PI, _PN, _A, _SL, _RAPA, _WAPA, _CT, _T],
  [0, 0, 0, () => StorageLocation, 64 | 0, 64 | 0, 4, 128 | 0]
);
export var ListPackagesRequest = struct(
  n0,
  _LPR,
  0,
  [_MR, _NT],
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
export var ListPackagesResponse = struct(n0, _LPRi, 0, [_P, _NT], [() => PackageList, 0]);
export var PackageListItem = struct(n0, _PLI, 0, [_PI, _PN, _A, _CT, _T], [0, 0, 0, 4, 128 | 0]);
export var StorageLocation = struct(n0, _SL, 0, [_Bu, _RPL, _GPL, _BPL, _MPL], [0, 0, 0, 0, 0]);
export var PackageList = list(n0, _PL, 0, () => PackageListItem);
export var PrincipalArnsList = 64 | 0;

export var CreatePackage = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/packages", 200],
  },
  () => CreatePackageRequest,
  () => CreatePackageResponse
);
export var DeletePackage = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/packages/{PackageId}", 200],
  },
  () => DeletePackageRequest,
  () => DeletePackageResponse
);
export var DescribePackage = op(
  n0,
  _DPe,
  {
    [_h]: ["GET", "/packages/metadata/{PackageId}", 200],
  },
  () => DescribePackageRequest,
  () => DescribePackageResponse
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
