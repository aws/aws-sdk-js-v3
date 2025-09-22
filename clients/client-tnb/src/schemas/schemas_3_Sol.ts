// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ac,
  _CT,
  _cT,
  _f,
  _GSFPC,
  _GSFPCI,
  _GSFPCO,
  _GSNPC,
  _GSNPCI,
  _GSNPCO,
  _h,
  _hH,
  _i,
  _me,
  _n,
  _nC,
  _nI,
  _nII,
  _nNs,
  _nV,
  _pC,
  _PSFPC,
  _PSFPCI,
  _PSFPCM,
  _PSFPCO,
  _PSNPC,
  _PSNPCI,
  _PSNPCM,
  _PSNPCO,
  _SB,
  _v,
  _vI,
  _vP,
  _vPI,
  _vPIn,
  _vPN,
  _VSFPC,
  _VSFPCI,
  _VSFPCM,
  _VSFPCO,
  _VSNPC,
  _VSNPCI,
  _VSNPCM,
  _VSNPCO,
  _vV,
  n0,
} from "./schemas_0";
import { FunctionArtifactMeta, NetworkArtifactMeta } from "./schemas_12_Sol";

/* eslint no-var: 0 */

export var SensitiveBlob = sim(n0, _SB, 21, 8);
export var GetSolFunctionPackageContentInput = struct(
  n0,
  _GSFPCI,
  0,
  [_vPI, _ac],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var GetSolFunctionPackageContentOutput = struct(
  n0,
  _GSFPCO,
  0,
  [_cT, _pC],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [21, 16],
  ]
);
export var GetSolNetworkPackageContentInput = struct(
  n0,
  _GSNPCI,
  0,
  [_nII, _ac],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var GetSolNetworkPackageContentOutput = struct(
  n0,
  _GSNPCO,
  0,
  [_cT, _nC],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [21, 16],
  ]
);
export var PutSolFunctionPackageContentInput = struct(
  n0,
  _PSFPCI,
  0,
  [_vPI, _cT, _f],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [() => SensitiveBlob, 16],
  ]
);
export var PutSolFunctionPackageContentMetadata = struct(n0, _PSFPCM, 0, [_v], [() => FunctionArtifactMeta]);
export var PutSolFunctionPackageContentOutput = struct(
  n0,
  _PSFPCO,
  0,
  [_i, _vI, _vPN, _vP, _vV, _me],
  [0, 0, 0, 0, 0, () => PutSolFunctionPackageContentMetadata]
);
export var PutSolNetworkPackageContentInput = struct(
  n0,
  _PSNPCI,
  0,
  [_nII, _cT, _f],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [() => SensitiveBlob, 16],
  ]
);
export var PutSolNetworkPackageContentMetadata = struct(n0, _PSNPCM, 0, [_n], [() => NetworkArtifactMeta]);
export var PutSolNetworkPackageContentOutput = struct(
  n0,
  _PSNPCO,
  0,
  [_i, _a, _nI, _nNs, _nV, _vPIn, _me],
  [0, 0, 0, 0, 0, 64 | 0, () => PutSolNetworkPackageContentMetadata]
);
export var ValidateSolFunctionPackageContentInput = struct(
  n0,
  _VSFPCI,
  0,
  [_vPI, _cT, _f],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [() => SensitiveBlob, 16],
  ]
);
export var ValidateSolFunctionPackageContentMetadata = struct(n0, _VSFPCM, 0, [_v], [() => FunctionArtifactMeta]);
export var ValidateSolFunctionPackageContentOutput = struct(
  n0,
  _VSFPCO,
  0,
  [_i, _vI, _vPN, _vP, _vV, _me],
  [0, 0, 0, 0, 0, () => ValidateSolFunctionPackageContentMetadata]
);
export var ValidateSolNetworkPackageContentInput = struct(
  n0,
  _VSNPCI,
  0,
  [_nII, _cT, _f],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [() => SensitiveBlob, 16],
  ]
);
export var ValidateSolNetworkPackageContentMetadata = struct(n0, _VSNPCM, 0, [_n], [() => NetworkArtifactMeta]);
export var ValidateSolNetworkPackageContentOutput = struct(
  n0,
  _VSNPCO,
  0,
  [_i, _a, _nI, _nNs, _nV, _vPIn, _me],
  [0, 0, 0, 0, 0, 64 | 0, () => ValidateSolNetworkPackageContentMetadata]
);
export var GetSolFunctionPackageContent = op(
  n0,
  _GSFPC,
  {
    [_h]: ["GET", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content", 200],
  },
  () => GetSolFunctionPackageContentInput,
  () => GetSolFunctionPackageContentOutput
);
export var GetSolNetworkPackageContent = op(
  n0,
  _GSNPC,
  {
    [_h]: ["GET", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content", 200],
  },
  () => GetSolNetworkPackageContentInput,
  () => GetSolNetworkPackageContentOutput
);
export var PutSolFunctionPackageContent = op(
  n0,
  _PSFPC,
  {
    [_h]: ["PUT", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content", 202],
  },
  () => PutSolFunctionPackageContentInput,
  () => PutSolFunctionPackageContentOutput
);
export var PutSolNetworkPackageContent = op(
  n0,
  _PSNPC,
  {
    [_h]: ["PUT", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content", 200],
  },
  () => PutSolNetworkPackageContentInput,
  () => PutSolNetworkPackageContentOutput
);
export var ValidateSolFunctionPackageContent = op(
  n0,
  _VSFPC,
  {
    [_h]: ["PUT", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate", 202],
  },
  () => ValidateSolFunctionPackageContentInput,
  () => ValidateSolFunctionPackageContentOutput
);
export var ValidateSolNetworkPackageContent = op(
  n0,
  _VSNPC,
  {
    [_h]: ["PUT", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate", 200],
  },
  () => ValidateSolNetworkPackageContentInput,
  () => ValidateSolNetworkPackageContentOutput
);
