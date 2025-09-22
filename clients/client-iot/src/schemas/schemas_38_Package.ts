// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aDFO,
  _CCP,
  _CCPR,
  _CCPRr,
  _cPA,
  _cPN,
  _CPR,
  _CPr,
  _CPRr,
  _cT,
  _d,
  _DPe,
  _DPR,
  _DPRe,
  _h,
  _hQ,
  _iT,
  _lFA,
  _pA,
  _pN,
  _tag,
  _UPC,
  _UPCR,
  _UPCRp,
  _vUBJC,
  n0,
  TagList,
} from "./schemas_0";
import { VersionUpdateByJobsConfig } from "./schemas_57_Configuration";
import { ResourceDescription } from "./schemas_110_Package";

/* eslint no-var: 0 */

export var CreateCertificateProviderRequest = struct(
  n0,
  _CCPR,
  0,
  [_cPN, _lFA, _aDFO, _cT, _tag],
  [[0, 1], 0, 64 | 0, [0, 4], () => TagList]
);
export var CreateCertificateProviderResponse = struct(n0, _CCPRr, 0, [_cPN, _cPA], [0, 0]);
export var CreatePackageRequest = struct(
  n0,
  _CPR,
  0,
  [_pN, _d, _tag, _cT],
  [
    [0, 1],
    [() => ResourceDescription, 0],
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
export var CreatePackageResponse = struct(n0, _CPRr, 0, [_pN, _pA, _d], [0, 0, [() => ResourceDescription, 0]]);
export var DeletePackageRequest = struct(
  n0,
  _DPR,
  0,
  [_pN, _cT],
  [
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
export var DeletePackageResponse = struct(n0, _DPRe, 0, [], []);
export var UpdatePackageConfigurationRequest = struct(
  n0,
  _UPCR,
  0,
  [_vUBJC, _cT],
  [
    () => VersionUpdateByJobsConfig,
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var UpdatePackageConfigurationResponse = struct(n0, _UPCRp, 0, [], []);
export var TagMap = 128 | 0;

export var CreateCertificateProvider = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/certificate-providers/{certificateProviderName}", 200],
  },
  () => CreateCertificateProviderRequest,
  () => CreateCertificateProviderResponse
);
export var CreatePackage = op(
  n0,
  _CPr,
  {
    [_h]: ["PUT", "/packages/{packageName}", 200],
  },
  () => CreatePackageRequest,
  () => CreatePackageResponse
);
export var DeletePackage = op(
  n0,
  _DPe,
  {
    [_h]: ["DELETE", "/packages/{packageName}", 200],
  },
  () => DeletePackageRequest,
  () => DeletePackageResponse
);
export var UpdatePackageConfiguration = op(
  n0,
  _UPC,
  {
    [_h]: ["PATCH", "/package-configuration", 200],
  },
  () => UpdatePackageConfigurationRequest,
  () => UpdatePackageConfigurationResponse
);
