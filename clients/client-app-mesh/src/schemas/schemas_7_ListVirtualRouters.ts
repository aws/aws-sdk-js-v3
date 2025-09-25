// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _lUA,
  _LVR,
  _LVRI,
  _LVRO,
  _mN,
  _mO,
  _nT,
  _rO,
  _ve,
  _vRi,
  _VRLi,
  _vRN,
  _VRR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVirtualRoutersInput = struct(
  n0,
  _LVRI,
  0,
  [_mN, _nT, _l, _mO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var ListVirtualRoutersOutput = struct(n0, _LVRO, 0, [_vRi, _nT], [() => VirtualRouterList, 0]);
export var VirtualRouterRef = struct(n0, _VRR, 0, [_mN, _vRN, _mO, _rO, _ar, _ve, _cA, _lUA], [0, 0, 0, 0, 0, 1, 4, 4]);
export var VirtualRouterList = list(n0, _VRLi, 0, () => VirtualRouterRef);
export var ListVirtualRouters = op(
  n0,
  _LVR,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualRouters", 200],
  },
  () => ListVirtualRoutersInput,
  () => ListVirtualRoutersOutput
);
