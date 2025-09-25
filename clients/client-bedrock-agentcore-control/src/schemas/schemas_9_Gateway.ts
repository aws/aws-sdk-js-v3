// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aT,
  _cA,
  _d,
  _GD,
  _gI,
  _GN,
  _GS,
  _GSa,
  _h,
  _hQ,
  _it,
  _LG,
  _LGR,
  _LGRi,
  _mR,
  _n,
  _nT,
  _pT,
  _s,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GatewayDescription = sim(n0, _GD, 0, 8);
export var GatewayName = sim(n0, _GN, 0, 8);
export var GatewaySummary = struct(
  n0,
  _GS,
  0,
  [_gI, _n, _s, _d, _cA, _uA, _aT, _pT],
  [0, [() => GatewayName, 0], 0, [() => GatewayDescription, 0], 5, 5, 0, 0]
);
export var ListGatewaysRequest = struct(
  n0,
  _LGR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListGatewaysResponse = struct(n0, _LGRi, 0, [_it, _nT], [[() => GatewaySummaries, 0], 0]);
export var GatewaySummaries = list(n0, _GSa, 0, [() => GatewaySummary, 0]);
export var ListGateways = op(
  n0,
  _LG,
  {
    [_h]: ["GET", "/gateways/", 200],
  },
  () => ListGatewaysRequest,
  () => ListGatewaysResponse
);
