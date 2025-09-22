// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _fP,
  _GSFP,
  _GSFPI,
  _GSFPM,
  _GSFPO,
  _GSNP,
  _GSNPI,
  _GSNPM,
  _GSNPO,
  _h,
  _hQ,
  _i,
  _lM,
  _LSFP,
  _LSFPI,
  _LSFPIi,
  _LSFPM,
  _LSFPO,
  _LSFPR,
  _LSNP,
  _LSNPI,
  _LSNPIi,
  _LSNPM,
  _LSNPO,
  _LSNPR,
  _me,
  _mR,
  _mr,
  _n,
  _nDs,
  _nI,
  _nII,
  _nIIsd,
  _nNs,
  _nom,
  _nOS,
  _nOSs,
  _nP,
  _nT,
  _nUS,
  _nV,
  _oS,
  _oSp,
  _t,
  _uS,
  _v,
  _vI,
  _vP,
  _vPI,
  _vPIn,
  _vPN,
  _vV,
  n0,
  TagMap,
} from "./schemas_0";
import { FunctionArtifactMeta, NetworkArtifactMeta } from "./schemas_12_Sol";

/* eslint no-var: 0 */

export var GetSolFunctionPackageInput = struct(n0, _GSFPI, 0, [_vPI], [[0, 1]]);
export var GetSolFunctionPackageMetadata = struct(n0, _GSFPM, 0, [_v, _cA, _lM], [() => FunctionArtifactMeta, 5, 5]);
export var GetSolFunctionPackageOutput = struct(
  n0,
  _GSFPO,
  0,
  [_i, _a, _oS, _oSp, _uS, _vI, _vP, _vPN, _vV, _me, _t],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => GetSolFunctionPackageMetadata, [() => TagMap, 0]]
);
export var GetSolNetworkPackageInput = struct(n0, _GSNPI, 0, [_nII], [[0, 1]]);
export var GetSolNetworkPackageMetadata = struct(n0, _GSNPM, 0, [_n, _cA, _lM], [() => NetworkArtifactMeta, 5, 5]);
export var GetSolNetworkPackageOutput = struct(
  n0,
  _GSNPO,
  0,
  [_i, _a, _nOS, _nOSs, _nUS, _nI, _nNs, _nV, _vPIn, _me, _t],
  [0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, () => GetSolNetworkPackageMetadata, [() => TagMap, 0]]
);
export var ListSolFunctionPackageInfo = struct(
  n0,
  _LSFPI,
  0,
  [_i, _a, _oS, _oSp, _uS, _vI, _vP, _vPN, _vV, _me],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => ListSolFunctionPackageMetadata]
);
export var ListSolFunctionPackageMetadata = struct(n0, _LSFPM, 0, [_cA, _lM], [5, 5]);
export var ListSolFunctionPackagesInput = struct(
  n0,
  _LSFPIi,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nom,
      },
    ],
  ]
);
export var ListSolFunctionPackagesOutput = struct(
  n0,
  _LSFPO,
  0,
  [_nT, _fP],
  [0, () => ListSolFunctionPackageResources]
);
export var ListSolNetworkPackageInfo = struct(
  n0,
  _LSNPI,
  0,
  [_i, _a, _nOS, _nOSs, _nUS, _nI, _nNs, _nV, _nDs, _nIIsd, _vPIn, _me],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, () => ListSolNetworkPackageMetadata]
);
export var ListSolNetworkPackageMetadata = struct(n0, _LSNPM, 0, [_cA, _lM], [5, 5]);
export var ListSolNetworkPackagesInput = struct(
  n0,
  _LSNPIi,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nom,
      },
    ],
  ]
);
export var ListSolNetworkPackagesOutput = struct(n0, _LSNPO, 0, [_nT, _nP], [0, () => ListSolNetworkPackageResources]);
export var ListSolFunctionPackageResources = list(n0, _LSFPR, 0, () => ListSolFunctionPackageInfo);
export var ListSolNetworkPackageResources = list(n0, _LSNPR, 0, () => ListSolNetworkPackageInfo);
export var GetSolFunctionPackage = op(
  n0,
  _GSFP,
  {
    [_h]: ["GET", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}", 200],
  },
  () => GetSolFunctionPackageInput,
  () => GetSolFunctionPackageOutput
);
export var GetSolNetworkPackage = op(
  n0,
  _GSNP,
  {
    [_h]: ["GET", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}", 200],
  },
  () => GetSolNetworkPackageInput,
  () => GetSolNetworkPackageOutput
);
export var ListSolFunctionPackages = op(
  n0,
  _LSFP,
  {
    [_h]: ["GET", "/sol/vnfpkgm/v1/vnf_packages", 200],
  },
  () => ListSolFunctionPackagesInput,
  () => ListSolFunctionPackagesOutput
);
export var ListSolNetworkPackages = op(
  n0,
  _LSNP,
  {
    [_h]: ["GET", "/sol/nsd/v1/ns_descriptors", 200],
  },
  () => ListSolNetworkPackagesInput,
  () => ListSolNetworkPackagesOutput
);
