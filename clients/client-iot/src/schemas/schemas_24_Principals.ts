// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aO,
  _h,
  _hH,
  _hQ,
  _iAO,
  _LPP,
  _LPPR,
  _LPPRi,
  _LTP,
  _LTPR,
  _LTPRi,
  _ma,
  _mR,
  _nM,
  _nT,
  _pNo,
  _pri,
  _pS,
  _tN,
  _xaip_,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPolicyPrincipalsRequest = struct(
  n0,
  _LPPR,
  0,
  [_pNo, _ma, _pS, _aO],
  [
    [
      0,
      {
        [_hH]: _xaip_,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListPolicyPrincipalsResponse = struct(n0, _LPPRi, 0, [_pri, _nM], [64 | 0, 0]);
export var ListThingPrincipalsRequest = struct(
  n0,
  _LTPR,
  0,
  [_nT, _mR, _tN],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListThingPrincipalsResponse = struct(n0, _LTPRi, 0, [_pri, _nT], [64 | 0, 0]);
export var Principals = 64 | 0;

export var ListPolicyPrincipals = op(
  n0,
  _LPP,
  {
    [_h]: ["GET", "/policy-principals", 200],
  },
  () => ListPolicyPrincipalsRequest,
  () => ListPolicyPrincipalsResponse
);
export var ListThingPrincipals = op(
  n0,
  _LTP,
  {
    [_h]: ["GET", "/things/{thingName}/principals", 200],
  },
  () => ListThingPrincipalsRequest,
  () => ListThingPrincipalsResponse
);
