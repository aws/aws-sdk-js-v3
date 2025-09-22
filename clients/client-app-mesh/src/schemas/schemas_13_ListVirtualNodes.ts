// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _lUA,
  _LVN,
  _LVNI,
  _LVNO,
  _mN,
  _mO,
  _nT,
  _rO,
  _ve,
  _vNi,
  _VNL,
  _vNN,
  _VNR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVirtualNodesInput = struct(
  n0,
  _LVNI,
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
export var ListVirtualNodesOutput = struct(n0, _LVNO, 0, [_vNi, _nT], [() => VirtualNodeList, 0]);
export var VirtualNodeRef = struct(n0, _VNR, 0, [_mN, _vNN, _mO, _rO, _ar, _ve, _cA, _lUA], [0, 0, 0, 0, 0, 1, 4, 4]);
export var VirtualNodeList = list(n0, _VNL, 0, () => VirtualNodeRef);
export var ListVirtualNodes = op(
  n0,
  _LVN,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualNodes", 200],
  },
  () => ListVirtualNodesInput,
  () => ListVirtualNodesOutput
);
