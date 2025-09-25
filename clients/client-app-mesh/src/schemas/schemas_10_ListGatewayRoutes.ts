// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _gRa,
  _GRL,
  _gRN,
  _GRR,
  _hQ,
  _ht,
  _l,
  _LGR,
  _LGRI,
  _LGRO,
  _lUA,
  _mN,
  _mO,
  _nT,
  _rO,
  _ve,
  _vGN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GatewayRouteRef = struct(
  n0,
  _GRR,
  0,
  [_mN, _gRN, _vGN, _mO, _rO, _ar, _ve, _cA, _lUA],
  [0, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var ListGatewayRoutesInput = struct(
  n0,
  _LGRI,
  0,
  [_mN, _vGN, _nT, _l, _mO],
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
export var ListGatewayRoutesOutput = struct(n0, _LGRO, 0, [_gRa, _nT], [() => GatewayRouteList, 0]);
export var GatewayRouteList = list(n0, _GRL, 0, () => GatewayRouteRef);
export var ListGatewayRoutes = op(
  n0,
  _LGR,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes", 200],
  },
  () => ListGatewayRoutesInput,
  () => ListGatewayRoutesOutput
);
