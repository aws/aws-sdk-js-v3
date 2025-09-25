// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _ADE,
  _APR,
  _APRs,
  _APs,
  _APV,
  _c,
  _CAr,
  _CM,
  _DN,
  _DP,
  _DPD,
  _DPDL,
  _DPe,
  _DPF,
  _DPFL,
  _DPi,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _DPRi,
  _DPRis,
  _DPS,
  _e,
  _ED,
  _EM,
  _ETr,
  _F,
  _GPVH,
  _GPVHR,
  _GPVHRe,
  _h,
  _hE,
  _hQ,
  _LDFP,
  _LDFPR,
  _LDFPRi,
  _LPFD,
  _LPFDR,
  _LPFDRi,
  _LU,
  _LUA,
  _m,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _PDa,
  _PDac,
  _PDL,
  _PID,
  _PNa,
  _PSa,
  _PTa,
  _PV,
  _PVH,
  _PVHL,
  _RP,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AssociatePackageRequest = struct(
  n0,
  _APR,
  0,
  [_PID, _DN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AssociatePackageResponse = struct(n0, _APRs, 0, [_DPD], [() => DomainPackageDetails]);
export var DeletePackageRequest = struct(n0, _DPR, 0, [_PID], [[0, 1]]);
export var DeletePackageResponse = struct(n0, _DPRe, 0, [_PDac], [() => PackageDetails]);
export var DescribePackagesFilter = struct(n0, _DPF, 0, [_N, _V], [0, 64 | 0]);
export var DescribePackagesRequest = struct(n0, _DPRes, 0, [_F, _MR, _NT], [() => DescribePackagesFilterList, 1, 0]);
export var DescribePackagesResponse = struct(n0, _DPResc, 0, [_PDL, _NT], [() => PackageDetailsList, 0]);
export var DissociatePackageRequest = struct(
  n0,
  _DPRi,
  0,
  [_PID, _DN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DissociatePackageResponse = struct(n0, _DPRis, 0, [_DPD], [() => DomainPackageDetails]);
export var DomainPackageDetails = struct(
  n0,
  _DPD,
  0,
  [_PID, _PNa, _PTa, _LU, _DN, _DPS, _PV, _RP, _ED],
  [0, 0, 0, 4, 0, 0, 0, 0, () => ErrorDetails]
);
export var ErrorDetails = struct(n0, _ED, 0, [_ETr, _EM], [0, 0]);
export var GetPackageVersionHistoryRequest = struct(
  n0,
  _GPVHR,
  0,
  [_PID, _MR, _NT],
  [
    [0, 1],
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
export var GetPackageVersionHistoryResponse = struct(
  n0,
  _GPVHRe,
  0,
  [_PID, _PVHL, _NT],
  [0, () => PackageVersionHistoryList, 0]
);
export var ListDomainsForPackageRequest = struct(
  n0,
  _LDFPR,
  0,
  [_PID, _MR, _NT],
  [
    [0, 1],
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
export var ListDomainsForPackageResponse = struct(n0, _LDFPRi, 0, [_DPDL, _NT], [() => DomainPackageDetailsList, 0]);
export var ListPackagesForDomainRequest = struct(
  n0,
  _LPFDR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
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
export var ListPackagesForDomainResponse = struct(n0, _LPFDRi, 0, [_DPDL, _NT], [() => DomainPackageDetailsList, 0]);
export var PackageDetails = struct(
  n0,
  _PDac,
  0,
  [_PID, _PNa, _PTa, _PDa, _PSa, _CAr, _LUA, _APV, _ED],
  [0, 0, 0, 0, 0, 4, 4, 0, () => ErrorDetails]
);
export var PackageVersionHistory = struct(n0, _PVH, 0, [_PV, _CM, _CAr], [0, 0, 4]);
export var DescribePackagesFilterList = list(n0, _DPFL, 0, () => DescribePackagesFilter);
export var DescribePackagesFilterValues = 64 | 0;

export var DomainPackageDetailsList = list(n0, _DPDL, 0, () => DomainPackageDetails);
export var PackageDetailsList = list(n0, _PDL, 0, () => PackageDetails);
export var PackageVersionHistoryList = list(n0, _PVHL, 0, () => PackageVersionHistory);
export var AssociatePackage = op(
  n0,
  _APs,
  {
    [_h]: ["POST", "/2015-01-01/packages/associate/{PackageID}/{DomainName}", 200],
  },
  () => AssociatePackageRequest,
  () => AssociatePackageResponse
);
export var DeletePackage = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/2015-01-01/packages/{PackageID}", 200],
  },
  () => DeletePackageRequest,
  () => DeletePackageResponse
);
export var DescribePackages = op(
  n0,
  _DPe,
  {
    [_h]: ["POST", "/2015-01-01/packages/describe", 200],
  },
  () => DescribePackagesRequest,
  () => DescribePackagesResponse
);
export var DissociatePackage = op(
  n0,
  _DPi,
  {
    [_h]: ["POST", "/2015-01-01/packages/dissociate/{PackageID}/{DomainName}", 200],
  },
  () => DissociatePackageRequest,
  () => DissociatePackageResponse
);
export var GetPackageVersionHistory = op(
  n0,
  _GPVH,
  {
    [_h]: ["GET", "/2015-01-01/packages/{PackageID}/history", 200],
  },
  () => GetPackageVersionHistoryRequest,
  () => GetPackageVersionHistoryResponse
);
export var ListDomainsForPackage = op(
  n0,
  _LDFP,
  {
    [_h]: ["GET", "/2015-01-01/packages/{PackageID}/domains", 200],
  },
  () => ListDomainsForPackageRequest,
  () => ListDomainsForPackageResponse
);
export var ListPackagesForDomain = op(
  n0,
  _LPFD,
  {
    [_h]: ["GET", "/2015-01-01/domain/{DomainName}/packages", 200],
  },
  () => ListPackagesForDomainRequest,
  () => ListPackagesForDomainResponse
);
