// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _ac,
  _CT,
  _cT,
  _GSFPD,
  _GSFPDI,
  _GSFPDO,
  _GSNPD,
  _GSNPDI,
  _GSNPDO,
  _h,
  _hH,
  _n,
  _nII,
  _v,
  _vPI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSolFunctionPackageDescriptorInput = struct(
  n0,
  _GSFPDI,
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
export var GetSolFunctionPackageDescriptorOutput = struct(
  n0,
  _GSFPDO,
  0,
  [_cT, _v],
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
export var GetSolNetworkPackageDescriptorInput = struct(n0, _GSNPDI, 0, [_nII], [[0, 1]]);
export var GetSolNetworkPackageDescriptorOutput = struct(
  n0,
  _GSNPDO,
  0,
  [_cT, _n],
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
export var GetSolFunctionPackageDescriptor = op(
  n0,
  _GSFPD,
  {
    [_h]: ["GET", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd", 200],
  },
  () => GetSolFunctionPackageDescriptorInput,
  () => GetSolFunctionPackageDescriptorOutput
);
export var GetSolNetworkPackageDescriptor = op(
  n0,
  _GSNPD,
  {
    [_h]: ["GET", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd", 200],
  },
  () => GetSolNetworkPackageDescriptorInput,
  () => GetSolNetworkPackageDescriptorOutput
);
