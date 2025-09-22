// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _lUA,
  _LVS,
  _LVSI,
  _LVSO,
  _mN,
  _mO,
  _nT,
  _rO,
  _ve,
  _vSi,
  _VSL,
  _vSN,
  _VSR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVirtualServicesInput = struct(
  n0,
  _LVSI,
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
export var ListVirtualServicesOutput = struct(n0, _LVSO, 0, [_vSi, _nT], [() => VirtualServiceList, 0]);
export var VirtualServiceRef = struct(
  n0,
  _VSR,
  0,
  [_mN, _vSN, _mO, _rO, _ar, _ve, _cA, _lUA],
  [0, 0, 0, 0, 0, 1, 4, 4]
);
export var VirtualServiceList = list(n0, _VSL, 0, () => VirtualServiceRef);
export var ListVirtualServices = op(
  n0,
  _LVS,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualServices", 200],
  },
  () => ListVirtualServicesInput,
  () => ListVirtualServicesOutput
);
