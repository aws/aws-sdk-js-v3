// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cT,
  _DVR,
  _DVRe,
  _DVRI,
  _DVRIe,
  _DVRO,
  _DVROe,
  _hQ,
  _ht,
  _li,
  _met,
  _mN,
  _mO,
  _PM,
  _pM,
  _po,
  _pro,
  _s,
  _st,
  _UVR,
  _UVRI,
  _UVRO,
  _vR,
  _VRD,
  _VRL,
  _VRLir,
  _vRN,
  _VRS,
  _VRSi,
  n0,
  ResourceMetadata,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVirtualRouterInput = struct(
  n0,
  _DVRI,
  0,
  [_vRN, _mN, _mO],
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
export var DeleteVirtualRouterOutput = struct(n0, _DVRO, 0, [_vR], [[() => VirtualRouterData, 16]]);
export var DescribeVirtualRouterInput = struct(
  n0,
  _DVRIe,
  0,
  [_vRN, _mN, _mO],
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
export var DescribeVirtualRouterOutput = struct(n0, _DVROe, 0, [_vR], [[() => VirtualRouterData, 16]]);
export var PortMapping = struct(n0, _PM, 0, [_po, _pro], [1, 0]);
export var UpdateVirtualRouterInput = struct(
  n0,
  _UVRI,
  0,
  [_vRN, _mN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    () => VirtualRouterSpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateVirtualRouterOutput = struct(n0, _UVRO, 0, [_vR], [[() => VirtualRouterData, 16]]);
export var VirtualRouterData = struct(
  n0,
  _VRD,
  0,
  [_mN, _vRN, _s, _met, _st],
  [0, 0, () => VirtualRouterSpec, () => ResourceMetadata, () => VirtualRouterStatus]
);
export var VirtualRouterListener = struct(n0, _VRL, 0, [_pM], [() => PortMapping]);
export var VirtualRouterSpec = struct(n0, _VRS, 0, [_li], [() => VirtualRouterListeners]);
export var VirtualRouterStatus = struct(n0, _VRSi, 0, [_st], [0]);
export var VirtualRouterListeners = list(n0, _VRLir, 0, () => VirtualRouterListener);
export var DeleteVirtualRouter = op(
  n0,
  _DVR,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}", 200],
  },
  () => DeleteVirtualRouterInput,
  () => DeleteVirtualRouterOutput
);
export var DescribeVirtualRouter = op(
  n0,
  _DVRe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}", 200],
  },
  () => DescribeVirtualRouterInput,
  () => DescribeVirtualRouterOutput
);
export var UpdateVirtualRouter = op(
  n0,
  _UVR,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}", 200],
  },
  () => UpdateVirtualRouterInput,
  () => UpdateVirtualRouterOutput
);
