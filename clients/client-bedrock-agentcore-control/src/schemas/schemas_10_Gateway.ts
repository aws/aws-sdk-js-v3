// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cA,
  _d,
  _gIa,
  _h,
  _hQ,
  _it,
  _LGT,
  _LGTR,
  _LGTRi,
  _mR,
  _n,
  _nT,
  _s,
  _TD,
  _tI,
  _TN,
  _TS,
  _TSa,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TargetDescription = sim(n0, _TD, 0, 8);
export var TargetName = sim(n0, _TN, 0, 8);
export var ListGatewayTargetsRequest = struct(
  n0,
  _LGTR,
  0,
  [_gIa, _mR, _nT],
  [
    [0, 1],
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
export var ListGatewayTargetsResponse = struct(n0, _LGTRi, 0, [_it, _nT], [[() => TargetSummaries, 0], 0]);
export var TargetSummary = struct(
  n0,
  _TS,
  0,
  [_tI, _n, _s, _d, _cA, _uA],
  [0, [() => TargetName, 0], 0, [() => TargetDescription, 0], 5, 5]
);
export var TargetSummaries = list(n0, _TSa, 0, [() => TargetSummary, 0]);
export var ListGatewayTargets = op(
  n0,
  _LGT,
  {
    [_h]: ["GET", "/gateways/{gatewayIdentifier}/targets/", 200],
  },
  () => ListGatewayTargetsRequest,
  () => ListGatewayTargetsResponse
);
