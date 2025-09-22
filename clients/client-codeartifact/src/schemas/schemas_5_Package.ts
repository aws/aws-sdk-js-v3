// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAR,
  _aRU,
  _aT,
  _cI,
  _CPG,
  _CPGR,
  _CPGRr,
  _cT,
  _d,
  _de,
  _dN,
  _dO,
  _do,
  _DPG,
  _DPGe,
  _DPGR,
  _DPGRe,
  _DPGRes,
  _DPGResc,
  _eM,
  _f,
  _GAPG,
  _GAPGR,
  _GAPGRe,
  _hQ,
  _ht,
  _iF,
  _mo,
  _na,
  _oC,
  _oRT,
  _p,
  _par,
  _pat,
  _pG,
  _pg,
  _PGAR,
  _PGARL,
  _PGARU,
  _PGARUa,
  _PGD,
  _PGOC,
  _PGOR,
  _PGORa,
  _PGR,
  _rAR,
  _rCe,
  _res,
  _rN,
  _t,
  _UPG,
  _UPGOC,
  _UPGOCR,
  _UPGOCRp,
  _UPGR,
  _UPGRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_7_Create";

/* eslint no-var: 0 */

export var CreatePackageGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_d, _dO, _pG, _cI, _de, _t],
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
    0,
    0,
    0,
    () => TagList,
  ]
);
export var CreatePackageGroupResult = struct(n0, _CPGRr, 0, [_pG], [() => PackageGroupDescription]);
export var DeletePackageGroupRequest = struct(
  n0,
  _DPGR,
  0,
  [_d, _dO, _pG],
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
        [_hQ]: _pg,
      },
    ],
  ]
);
export var DeletePackageGroupResult = struct(n0, _DPGRe, 0, [_pG], [() => PackageGroupDescription]);
export var DescribePackageGroupRequest = struct(
  n0,
  _DPGRes,
  0,
  [_d, _dO, _pG],
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
        [_hQ]: _pg,
      },
    ],
  ]
);
export var DescribePackageGroupResult = struct(n0, _DPGResc, 0, [_pG], [() => PackageGroupDescription]);
export var GetAssociatedPackageGroupRequest = struct(
  n0,
  _GAPGR,
  0,
  [_d, _dO, _f, _na, _p],
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
export var GetAssociatedPackageGroupResult = struct(n0, _GAPGRe, 0, [_pG, _aT], [() => PackageGroupDescription, 0]);
export var PackageGroupAllowedRepository = struct(n0, _PGAR, 0, [_rN, _oRT], [0, 0]);
export var PackageGroupDescription = struct(
  n0,
  _PGD,
  0,
  [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
  [0, 0, 0, 0, 4, 0, 0, () => PackageGroupOriginConfiguration, () => PackageGroupReference]
);
export var PackageGroupOriginConfiguration = struct(n0, _PGOC, 0, [_res], [() => PackageGroupOriginRestrictions]);
export var PackageGroupOriginRestriction = struct(
  n0,
  _PGOR,
  0,
  [_mo, _eM, _iF, _rCe],
  [0, 0, () => PackageGroupReference, 1]
);
export var PackageGroupReference = struct(n0, _PGR, 0, [_a, _pat], [0, 0]);
export var UpdatePackageGroupOriginConfigurationRequest = struct(
  n0,
  _UPGOCR,
  0,
  [_d, _dO, _pG, _res, _aAR, _rAR],
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
        [_hQ]: _pg,
      },
    ],
    128 | 0,
    () => PackageGroupAllowedRepositoryList,
    () => PackageGroupAllowedRepositoryList,
  ]
);
export var UpdatePackageGroupOriginConfigurationResult = struct(
  n0,
  _UPGOCRp,
  0,
  [_pG, _aRU],
  [() => PackageGroupDescription, map(n0, _PGARU, 0, 0, map(n0, _PGARUa, 0, 0, 64 | 0))]
);
export var UpdatePackageGroupRequest = struct(
  n0,
  _UPGR,
  0,
  [_d, _dO, _pG, _cI, _de],
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
    0,
    0,
    0,
  ]
);
export var UpdatePackageGroupResult = struct(n0, _UPGRp, 0, [_pG], [() => PackageGroupDescription]);
export var PackageGroupAllowedRepositoryList = list(n0, _PGARL, 0, () => PackageGroupAllowedRepository);
export var RepositoryNameList = 64 | 0;

export var OriginRestrictions = 128 | 0;

export var PackageGroupAllowedRepositoryUpdate = map(n0, _PGARUa, 0, 0, 64 | 0);
export var PackageGroupAllowedRepositoryUpdates = map(n0, _PGARU, 0, 0, map(n0, _PGARUa, 0, 0, 64 | 0));
export var PackageGroupOriginRestrictions = map(n0, _PGORa, 0, 0, () => PackageGroupOriginRestriction);
export var CreatePackageGroup = op(
  n0,
  _CPG,
  {
    [_ht]: ["POST", "/v1/package-group", 200],
  },
  () => CreatePackageGroupRequest,
  () => CreatePackageGroupResult
);
export var DeletePackageGroup = op(
  n0,
  _DPG,
  {
    [_ht]: ["DELETE", "/v1/package-group", 200],
  },
  () => DeletePackageGroupRequest,
  () => DeletePackageGroupResult
);
export var DescribePackageGroup = op(
  n0,
  _DPGe,
  {
    [_ht]: ["GET", "/v1/package-group", 200],
  },
  () => DescribePackageGroupRequest,
  () => DescribePackageGroupResult
);
export var GetAssociatedPackageGroup = op(
  n0,
  _GAPG,
  {
    [_ht]: ["GET", "/v1/get-associated-package-group", 200],
  },
  () => GetAssociatedPackageGroupRequest,
  () => GetAssociatedPackageGroupResult
);
export var UpdatePackageGroup = op(
  n0,
  _UPG,
  {
    [_ht]: ["PUT", "/v1/package-group", 200],
  },
  () => UpdatePackageGroupRequest,
  () => UpdatePackageGroupResult
);
export var UpdatePackageGroupOriginConfiguration = op(
  n0,
  _UPGOC,
  {
    [_ht]: ["PUT", "/v1/package-group-origin-configuration", 200],
  },
  () => UpdatePackageGroupOriginConfigurationRequest,
  () => UpdatePackageGroupOriginConfigurationResult
);
