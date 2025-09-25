// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _DRSPi,
  _DRSPRi,
  _DRSPRis,
  _eQN,
  _ERSP,
  _ERSPR,
  _ERSPRn,
  _GRSP,
  _GRSPR,
  _GRSPRe,
  _it,
  _RSI,
  _rSI,
  _RSPLo,
  _rSPo,
  _RSPou,
  _RSPout,
  _rSPSo,
  _RTI,
  _rTI,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisableRouteServerPropagationRequest = struct(n0, _DRSPRi, 0, [_RSI, _RTI, _DR], [0, 0, 2]);
export var DisableRouteServerPropagationResult = struct(
  n0,
  _DRSPRis,
  0,
  [_RSPou],
  [
    [
      () => RouteServerPropagation,
      {
        [_eQN]: `RouteServerPropagation`,
        [_xN]: _rSPo,
      },
    ],
  ]
);
export var EnableRouteServerPropagationRequest = struct(n0, _ERSPR, 0, [_RSI, _RTI, _DR], [0, 0, 2]);
export var EnableRouteServerPropagationResult = struct(
  n0,
  _ERSPRn,
  0,
  [_RSPou],
  [
    [
      () => RouteServerPropagation,
      {
        [_eQN]: `RouteServerPropagation`,
        [_xN]: _rSPo,
      },
    ],
  ]
);
export var GetRouteServerPropagationsRequest = struct(n0, _GRSPR, 0, [_RSI, _RTI, _DR], [0, 0, 2]);
export var GetRouteServerPropagationsResult = struct(
  n0,
  _GRSPRe,
  0,
  [_RSPout],
  [
    [
      () => RouteServerPropagationsList,
      {
        [_eQN]: `RouteServerPropagationSet`,
        [_xN]: _rSPSo,
      },
    ],
  ]
);
export var RouteServerPropagation = struct(
  n0,
  _RSPou,
  0,
  [_RSI, _RTI, _St],
  [
    [
      0,
      {
        [_eQN]: `RouteServerId`,
        [_xN]: _rSI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var RouteServerPropagationsList = list(n0, _RSPLo, 0, [
  () => RouteServerPropagation,
  {
    [_xN]: _it,
  },
]);
export var DisableRouteServerPropagation = op(
  n0,
  _DRSPi,
  0,
  () => DisableRouteServerPropagationRequest,
  () => DisableRouteServerPropagationResult
);
export var EnableRouteServerPropagation = op(
  n0,
  _ERSP,
  0,
  () => EnableRouteServerPropagationRequest,
  () => EnableRouteServerPropagationResult
);
export var GetRouteServerPropagations = op(
  n0,
  _GRSP,
  0,
  () => GetRouteServerPropagationsRequest,
  () => GetRouteServerPropagationsResult
);
