// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cT,
  _DVSe,
  _DVSIe,
  _DVSOe,
  _hQ,
  _ht,
  _met,
  _mN,
  _mO,
  _prov,
  _s,
  _st,
  _UVS,
  _UVSI,
  _UVSO,
  _vN,
  _vNN,
  _VNSP,
  _vR,
  _vRN,
  _VRSP,
  _vS,
  _VSD,
  _vSN,
  _VSP,
  _VSS,
  _VSSi,
  n0,
  ResourceMetadata,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeVirtualServiceInput = struct(
  n0,
  _DVSIe,
  0,
  [_vSN, _mN, _mO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DescribeVirtualServiceOutput = struct(n0, _DVSOe, 0, [_vS], [[() => VirtualServiceData, 16]]);
export var UpdateVirtualServiceInput = struct(
  n0,
  _UVSI,
  0,
  [_vSN, _mN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    () => VirtualServiceSpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateVirtualServiceOutput = struct(n0, _UVSO, 0, [_vS], [[() => VirtualServiceData, 16]]);
export var VirtualNodeServiceProvider = struct(n0, _VNSP, 0, [_vNN], [0]);
export var VirtualRouterServiceProvider = struct(n0, _VRSP, 0, [_vRN], [0]);
export var VirtualServiceData = struct(
  n0,
  _VSD,
  0,
  [_mN, _vSN, _s, _met, _st],
  [0, 0, () => VirtualServiceSpec, () => ResourceMetadata, () => VirtualServiceStatus]
);
export var VirtualServiceSpec = struct(n0, _VSS, 0, [_prov], [() => VirtualServiceProvider]);
export var VirtualServiceStatus = struct(n0, _VSSi, 0, [_st], [0]);
export var VirtualServiceProvider = uni(
  n0,
  _VSP,
  0,
  [_vN, _vR],
  [() => VirtualNodeServiceProvider, () => VirtualRouterServiceProvider]
);
export var DescribeVirtualService = op(
  n0,
  _DVSe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}", 200],
  },
  () => DescribeVirtualServiceInput,
  () => DescribeVirtualServiceOutput
);
export var UpdateVirtualService = op(
  n0,
  _UVS,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}", 200],
  },
  () => UpdateVirtualServiceInput,
  () => UpdateVirtualServiceOutput
);
