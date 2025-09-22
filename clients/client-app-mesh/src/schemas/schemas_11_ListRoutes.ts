// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _LR,
  _LRI,
  _LRO,
  _lUA,
  _mN,
  _mO,
  _nT,
  _RL,
  _rN,
  _rO,
  _ro,
  _RR,
  _ve,
  _vRN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRoutesInput = struct(
  n0,
  _LRI,
  0,
  [_mN, _vRN, _nT, _l, _mO],
  [
    [0, 1],
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
export var ListRoutesOutput = struct(n0, _LRO, 0, [_ro, _nT], [() => RouteList, 0]);
export var RouteRef = struct(n0, _RR, 0, [_mN, _vRN, _rN, _mO, _rO, _ar, _ve, _cA, _lUA], [0, 0, 0, 0, 0, 0, 1, 4, 4]);
export var RouteList = list(n0, _RL, 0, () => RouteRef);
export var ListRoutes = op(
  n0,
  _LR,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes", 200],
  },
  () => ListRoutesInput,
  () => ListRoutesOutput
);
