// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _lUA,
  _LVG,
  _LVGI,
  _LVGO,
  _mN,
  _mO,
  _nT,
  _rO,
  _ve,
  _vGi,
  _VGLir,
  _vGN,
  _VGR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVirtualGatewaysInput = struct(
  n0,
  _LVGI,
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
export var ListVirtualGatewaysOutput = struct(n0, _LVGO, 0, [_vGi, _nT], [() => VirtualGatewayList, 0]);
export var VirtualGatewayRef = struct(
  n0,
  _VGR,
  0,
  [_mN, _vGN, _mO, _rO, _ar, _ve, _cA, _lUA],
  [0, 0, 0, 0, 0, 1, 4, 4]
);
export var VirtualGatewayList = list(n0, _VGLir, 0, () => VirtualGatewayRef);
export var ListVirtualGateways = op(
  n0,
  _LVG,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualGateways", 200],
  },
  () => ListVirtualGatewaysInput,
  () => ListVirtualGatewaysOutput
);
