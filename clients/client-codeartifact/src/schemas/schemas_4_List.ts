// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aa,
  _AP,
  _APL,
  _aR,
  _ASL,
  _ass,
  _aT,
  _cI,
  _cT,
  _d,
  _dDV,
  _de,
  _dep,
  _dN,
  _dO,
  _do,
  _dom,
  _DS,
  _DSL,
  _dT,
  _eK,
  _f,
  _hQ,
  _ht,
  _LAP,
  _LAPR,
  _LAPRi,
  _LARFG,
  _LARFGR,
  _LARFGRi,
  _LD,
  _LDR,
  _LDRi,
  _LP,
  _LPG,
  _LPGR,
  _LPGRi,
  _LPR,
  _LPRi,
  _LPV,
  _LPVA,
  _LPVAR,
  _LPVARi,
  _LPVD,
  _LPVDR,
  _LPVDRi,
  _LPVR,
  _LPVRi,
  _LR,
  _LRID,
  _LRIDR,
  _LRIDRi,
  _LRR,
  _LRRi,
  _LSPG,
  _LSPGR,
  _LSPGRi,
  _mR,
  _mr,
  _n,
  _na,
  _nT,
  _nt,
  _o,
  _oC,
  _or,
  _oRT,
  _oT,
  _p,
  _pa,
  _par,
  _pat,
  _PD,
  _PDL,
  _pG,
  _pg,
  _pGa,
  _PGS,
  _PGSL,
  _pP,
  _pp,
  _pre,
  _pref,
  _PSL,
  _pu,
  _pV,
  _PVS,
  _PVSL,
  _r,
  _re,
  _rep,
  _rP,
  _rp,
  _RS,
  _RSL,
  _sB,
  _st,
  _up,
  _v,
  _ve,
  _vRe,
  _vRer,
  n0,
} from "./schemas_0";
import { PackageSummary } from "./schemas_2_Package";
import { PackageGroupOriginConfiguration, PackageGroupReference } from "./schemas_5_Package";
import { AssetSummary, PackageVersionOrigin } from "./schemas_6_Package";

/* eslint no-var: 0 */

export var AssociatedPackage = struct(n0, _AP, 0, [_f, _na, _p, _aT], [0, 0, 0, 0]);
export var DomainSummary = struct(n0, _DS, 0, [_n, _o, _a, _st, _cT, _eK], [0, 0, 0, 0, 4, 0]);
export var ListAllowedRepositoriesForGroupRequest = struct(
  n0,
  _LARFGR,
  0,
  [_d, _dO, _pG, _oRT, _mR, _nT],
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
    [
      0,
      {
        [_hQ]: _oRT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAllowedRepositoriesForGroupResult = struct(n0, _LARFGRi, 0, [_aR, _nT], [64 | 0, 0]);
export var ListAssociatedPackagesRequest = struct(
  n0,
  _LAPR,
  0,
  [_d, _dO, _pG, _mR, _nT, _pre],
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
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      2,
      {
        [_hQ]: _pre,
      },
    ],
  ]
);
export var ListAssociatedPackagesResult = struct(n0, _LAPRi, 0, [_pa, _nT], [() => AssociatedPackageList, 0]);
export var ListDomainsRequest = struct(n0, _LDR, 0, [_mR, _nT], [1, 0]);
export var ListDomainsResult = struct(n0, _LDRi, 0, [_dom, _nT], [() => DomainSummaryList, 0]);
export var ListPackageGroupsRequest = struct(
  n0,
  _LPGR,
  0,
  [_d, _dO, _mR, _nT, _pref],
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
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _pref,
      },
    ],
  ]
);
export var ListPackageGroupsResult = struct(n0, _LPGRi, 0, [_pGa, _nT], [() => PackageGroupSummaryList, 0]);
export var ListPackagesRequest = struct(
  n0,
  _LPR,
  0,
  [_d, _dO, _r, _f, _na, _pP, _mR, _nT, _pu, _up],
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
        [_hQ]: _pp,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _pu,
      },
    ],
    [
      0,
      {
        [_hQ]: _up,
      },
    ],
  ]
);
export var ListPackagesResult = struct(n0, _LPRi, 0, [_pa, _nT], [() => PackageSummaryList, 0]);
export var ListPackageVersionAssetsRequest = struct(
  n0,
  _LPVAR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _mR, _nT],
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
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListPackageVersionAssetsResult = struct(
  n0,
  _LPVARi,
  0,
  [_f, _na, _p, _ve, _vRe, _nT, _ass],
  [0, 0, 0, 0, 0, 0, () => AssetSummaryList]
);
export var ListPackageVersionDependenciesRequest = struct(
  n0,
  _LPVDR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _nT],
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
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListPackageVersionDependenciesResult = struct(
  n0,
  _LPVDRi,
  0,
  [_f, _na, _p, _ve, _vRe, _nT, _dep],
  [0, 0, 0, 0, 0, 0, () => PackageDependencyList]
);
export var ListPackageVersionsRequest = struct(
  n0,
  _LPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _st, _sB, _mR, _nT, _oT],
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
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _oT,
      },
    ],
  ]
);
export var ListPackageVersionsResult = struct(
  n0,
  _LPVRi,
  0,
  [_dDV, _f, _na, _p, _v, _nT],
  [0, 0, 0, 0, () => PackageVersionSummaryList, 0]
);
export var ListRepositoriesInDomainRequest = struct(
  n0,
  _LRIDR,
  0,
  [_d, _dO, _aA, _rP, _mR, _nT],
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
        [_hQ]: _aa,
      },
    ],
    [
      0,
      {
        [_hQ]: _rp,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListRepositoriesInDomainResult = struct(n0, _LRIDRi, 0, [_rep, _nT], [() => RepositorySummaryList, 0]);
export var ListRepositoriesRequest = struct(
  n0,
  _LRR,
  0,
  [_rP, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _rp,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListRepositoriesResult = struct(n0, _LRRi, 0, [_rep, _nT], [() => RepositorySummaryList, 0]);
export var ListSubPackageGroupsRequest = struct(
  n0,
  _LSPGR,
  0,
  [_d, _dO, _pG, _mR, _nT],
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
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListSubPackageGroupsResult = struct(n0, _LSPGRi, 0, [_pGa, _nT], [() => PackageGroupSummaryList, 0]);
export var PackageDependency = struct(n0, _PD, 0, [_na, _p, _dT, _vRer], [0, 0, 0, 0]);
export var PackageGroupSummary = struct(
  n0,
  _PGS,
  0,
  [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
  [0, 0, 0, 0, 4, 0, 0, () => PackageGroupOriginConfiguration, () => PackageGroupReference]
);
export var PackageVersionSummary = struct(n0, _PVS, 0, [_ve, _re, _st, _or], [0, 0, 0, () => PackageVersionOrigin]);
export var RepositorySummary = struct(n0, _RS, 0, [_n, _aA, _dN, _dO, _a, _de, _cT], [0, 0, 0, 0, 0, 0, 4]);
export var AssetSummaryList = list(n0, _ASL, 0, () => AssetSummary);
export var AssociatedPackageList = list(n0, _APL, 0, () => AssociatedPackage);
export var DomainSummaryList = list(n0, _DSL, 0, () => DomainSummary);
export var PackageDependencyList = list(n0, _PDL, 0, () => PackageDependency);
export var PackageGroupSummaryList = list(n0, _PGSL, 0, () => PackageGroupSummary);
export var PackageSummaryList = list(n0, _PSL, 0, () => PackageSummary);
export var PackageVersionSummaryList = list(n0, _PVSL, 0, () => PackageVersionSummary);
export var RepositorySummaryList = list(n0, _RSL, 0, () => RepositorySummary);
export var ListAllowedRepositoriesForGroup = op(
  n0,
  _LARFG,
  {
    [_ht]: ["GET", "/v1/package-group-allowed-repositories", 200],
  },
  () => ListAllowedRepositoriesForGroupRequest,
  () => ListAllowedRepositoriesForGroupResult
);
export var ListAssociatedPackages = op(
  n0,
  _LAP,
  {
    [_ht]: ["GET", "/v1/list-associated-packages", 200],
  },
  () => ListAssociatedPackagesRequest,
  () => ListAssociatedPackagesResult
);
export var ListDomains = op(
  n0,
  _LD,
  {
    [_ht]: ["POST", "/v1/domains", 200],
  },
  () => ListDomainsRequest,
  () => ListDomainsResult
);
export var ListPackageGroups = op(
  n0,
  _LPG,
  {
    [_ht]: ["POST", "/v1/package-groups", 200],
  },
  () => ListPackageGroupsRequest,
  () => ListPackageGroupsResult
);
export var ListPackages = op(
  n0,
  _LP,
  {
    [_ht]: ["POST", "/v1/packages", 200],
  },
  () => ListPackagesRequest,
  () => ListPackagesResult
);
export var ListPackageVersionAssets = op(
  n0,
  _LPVA,
  {
    [_ht]: ["POST", "/v1/package/version/assets", 200],
  },
  () => ListPackageVersionAssetsRequest,
  () => ListPackageVersionAssetsResult
);
export var ListPackageVersionDependencies = op(
  n0,
  _LPVD,
  {
    [_ht]: ["POST", "/v1/package/version/dependencies", 200],
  },
  () => ListPackageVersionDependenciesRequest,
  () => ListPackageVersionDependenciesResult
);
export var ListPackageVersions = op(
  n0,
  _LPV,
  {
    [_ht]: ["POST", "/v1/package/versions", 200],
  },
  () => ListPackageVersionsRequest,
  () => ListPackageVersionsResult
);
export var ListRepositories = op(
  n0,
  _LR,
  {
    [_ht]: ["POST", "/v1/repositories", 200],
  },
  () => ListRepositoriesRequest,
  () => ListRepositoriesResult
);
export var ListRepositoriesInDomain = op(
  n0,
  _LRID,
  {
    [_ht]: ["POST", "/v1/domain/repositories", 200],
  },
  () => ListRepositoriesInDomainRequest,
  () => ListRepositoriesInDomainResult
);
export var ListSubPackageGroups = op(
  n0,
  _LSPG,
  {
    [_ht]: ["POST", "/v1/package-groups/sub-groups", 200],
  },
  () => ListSubPackageGroupsRequest,
  () => ListSubPackageGroupsResult
);
