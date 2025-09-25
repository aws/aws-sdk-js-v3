// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _CI,
  _cI,
  _DN,
  _dN,
  _DNSTR,
  _DTR,
  _dTR,
  _GRS,
  _GRSR,
  _GRSRe,
  _h,
  _HZA,
  _hZA,
  _jN,
  _lORi,
  _NLBR,
  _nLBR,
  _R,
  _r,
  _RA,
  _rA,
  _Res,
  _rR,
  _RRe,
  _RRR,
  _RSA,
  _rSA,
  _RSea,
  _rSea,
  _RSI,
  _rSI,
  _RSN,
  _rSN,
  _RST,
  _rST,
  _RT,
  _rT,
  _T,
  _t,
  _TR,
  _tR,
  _URS,
  _URSR,
  _URSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DNSTargetResource = struct(
  n0,
  _DNSTR,
  0,
  [_DN, _HZA, _RSI, _RT, _TR],
  [
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _hZA,
      },
    ],
    [
      0,
      {
        [_jN]: _rSI,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      () => TargetResource,
      {
        [_jN]: _tR,
      },
    ],
  ]
);
export var GetResourceSetRequest = struct(n0, _GRSR, 0, [_RSN], [[0, 1]]);
export var GetResourceSetResponse = struct(
  n0,
  _GRSRe,
  0,
  [_RSA, _RSN, _RST, _R, _T],
  [
    [
      0,
      {
        [_jN]: _rSA,
      },
    ],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var NLBResource = struct(
  n0,
  _NLBR,
  0,
  [_A],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
  ]
);
export var R53ResourceRecord = struct(
  n0,
  _RRR,
  0,
  [_DN, _RSI],
  [
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      0,
      {
        [_jN]: _rSI,
      },
    ],
  ]
);
export var Resource = struct(
  n0,
  _Res,
  0,
  [_CI, _DTR, _RSea, _RA],
  [
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      () => DNSTargetResource,
      {
        [_jN]: _dTR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSea,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
  ]
);
export var TargetResource = struct(
  n0,
  _TR,
  0,
  [_NLBR, _RRe],
  [
    [
      () => NLBResource,
      {
        [_jN]: _nLBR,
      },
    ],
    [
      () => R53ResourceRecord,
      {
        [_jN]: _rR,
      },
    ],
  ]
);
export var UpdateResourceSetRequest = struct(
  n0,
  _URSR,
  0,
  [_RSN, _RST, _R],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var UpdateResourceSetResponse = struct(
  n0,
  _URSRp,
  0,
  [_RSA, _RSN, _RST, _R, _T],
  [
    [
      0,
      {
        [_jN]: _rSA,
      },
    ],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __listOfResource = list(n0, _lORi, 0, [() => Resource, 0]);
export var GetResourceSet = op(
  n0,
  _GRS,
  {
    [_h]: ["GET", "/resourcesets/{ResourceSetName}", 200],
  },
  () => GetResourceSetRequest,
  () => GetResourceSetResponse
);
export var UpdateResourceSet = op(
  n0,
  _URS,
  {
    [_h]: ["PUT", "/resourcesets/{ResourceSetName}", 200],
  },
  () => UpdateResourceSetRequest,
  () => UpdateResourceSetResponse
);
