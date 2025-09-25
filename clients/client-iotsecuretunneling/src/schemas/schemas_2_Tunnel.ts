// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _de,
  _h,
  _hQ,
  _LT,
  _LTR,
  _LTRi,
  _lUA,
  _mR,
  _nT,
  _s,
  _tA,
  _tI,
  _tN,
  _TS,
  _tS,
  _TSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTunnelsRequest = struct(
  n0,
  _LTR,
  0,
  [_tN, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
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
export var ListTunnelsResponse = struct(n0, _LTRi, 0, [_tS, _nT], [() => TunnelSummaryList, 0]);
export var TunnelSummary = struct(n0, _TS, 0, [_tI, _tA, _s, _de, _cA, _lUA], [0, 0, 0, 0, 4, 4]);
export var Unit = "unit" as const;

export var TunnelSummaryList = list(n0, _TSL, 0, () => TunnelSummary);
export var ListTunnels = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/tunnels", 200],
  },
  () => ListTunnelsRequest,
  () => ListTunnelsResponse
);
