// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACs,
  _APR,
  _APRs,
  _APRss,
  _APRsso,
  _APs,
  _APss,
  _CAr,
  _CMo,
  _CN,
  _CR,
  _D,
  _DN,
  _DPD,
  _DPDL,
  _DPi,
  _DPis,
  _DPRi,
  _DPRis,
  _DPRiss,
  _DPRisso,
  _DPS,
  _ED,
  _EM,
  _ETr,
  _GPVH,
  _GPVHR,
  _GPVHRe,
  _h,
  _hQ,
  _KARA,
  _KSAE,
  _KSAO,
  _LDFP,
  _LDFPR,
  _LDFPRi,
  _LF,
  _LPFD,
  _LPFDR,
  _LPFDRi,
  _LR,
  _LU,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _PAC,
  _PC,
  _PDFA,
  _PDFAL,
  _PID,
  _PL,
  _PNa,
  _PPIDL,
  _PPl,
  _PTa,
  _PV,
  _PVH,
  _PVHL,
  _RP,
  _RRFCU,
  _USIB,
  _Ver,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatePackageRequest = struct(
  n0,
  _APR,
  0,
  [_PID, _DN, _PPIDL, _ACs],
  [[0, 1], [0, 1], 64 | 0, () => PackageAssociationConfiguration]
);
export var AssociatePackageResponse = struct(n0, _APRs, 0, [_DPD], [() => DomainPackageDetails]);
export var AssociatePackagesRequest = struct(n0, _APRss, 0, [_PL, _DN], [() => PackageDetailsForAssociationList, 0]);
export var AssociatePackagesResponse = struct(n0, _APRsso, 0, [_DPDL], [() => DomainPackageDetailsList]);
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
export var DissociatePackagesRequest = struct(n0, _DPRiss, 0, [_PL, _DN], [64 | 0, 0]);
export var DissociatePackagesResponse = struct(n0, _DPRisso, 0, [_DPDL], [() => DomainPackageDetailsList]);
export var DomainPackageDetails = struct(
  n0,
  _DPD,
  0,
  [_PID, _PNa, _PTa, _LU, _DN, _DPS, _PV, _PPIDL, _RP, _ED, _ACs],
  [0, 0, 0, 4, 0, 0, 0, 64 | 0, 0, () => ErrorDetails, () => PackageAssociationConfiguration]
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
export var KeyStoreAccessOption = struct(n0, _KSAO, 0, [_KARA, _KSAE], [0, 2]);
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
export var PackageAssociationConfiguration = struct(n0, _PAC, 0, [_KSAO], [() => KeyStoreAccessOption]);
export var PackageConfiguration = struct(n0, _PC, 0, [_LR, _LF, _CR, _RRFCU], [0, 0, 0, 2]);
export var PackageDetailsForAssociation = struct(
  n0,
  _PDFA,
  0,
  [_PID, _PPIDL, _ACs],
  [0, 64 | 0, () => PackageAssociationConfiguration]
);
export var PackageVersionHistory = struct(
  n0,
  _PVH,
  0,
  [_PV, _CMo, _CAr, _PPl, _PC],
  [0, 0, 4, () => PluginProperties, () => PackageConfiguration]
);
export var PluginProperties = struct(n0, _PPl, 0, [_N, _D, _Ver, _CN, _USIB], [0, 0, 0, 0, 1]);
export var DomainPackageDetailsList = list(n0, _DPDL, 0, () => DomainPackageDetails);
export var PackageDetailsForAssociationList = list(n0, _PDFAL, 0, () => PackageDetailsForAssociation);
export var PackageIDList = 64 | 0;

export var PackageVersionHistoryList = list(n0, _PVHL, 0, () => PackageVersionHistory);
export var AssociatePackage = op(
  n0,
  _APs,
  {
    [_h]: ["POST", "/2021-01-01/packages/associate/{PackageID}/{DomainName}", 200],
  },
  () => AssociatePackageRequest,
  () => AssociatePackageResponse
);
export var AssociatePackages = op(
  n0,
  _APss,
  {
    [_h]: ["POST", "/2021-01-01/packages/associateMultiple", 200],
  },
  () => AssociatePackagesRequest,
  () => AssociatePackagesResponse
);
export var DissociatePackage = op(
  n0,
  _DPi,
  {
    [_h]: ["POST", "/2021-01-01/packages/dissociate/{PackageID}/{DomainName}", 200],
  },
  () => DissociatePackageRequest,
  () => DissociatePackageResponse
);
export var DissociatePackages = op(
  n0,
  _DPis,
  {
    [_h]: ["POST", "/2021-01-01/packages/dissociateMultiple", 200],
  },
  () => DissociatePackagesRequest,
  () => DissociatePackagesResponse
);
export var GetPackageVersionHistory = op(
  n0,
  _GPVH,
  {
    [_h]: ["GET", "/2021-01-01/packages/{PackageID}/history", 200],
  },
  () => GetPackageVersionHistoryRequest,
  () => GetPackageVersionHistoryResponse
);
export var ListDomainsForPackage = op(
  n0,
  _LDFP,
  {
    [_h]: ["GET", "/2021-01-01/packages/{PackageID}/domains", 200],
  },
  () => ListDomainsForPackageRequest,
  () => ListDomainsForPackageResponse
);
export var ListPackagesForDomain = op(
  n0,
  _LPFD,
  {
    [_h]: ["GET", "/2021-01-01/domain/{DomainName}/packages", 200],
  },
  () => ListPackagesForDomainRequest,
  () => ListPackagesForDomainResponse
);
