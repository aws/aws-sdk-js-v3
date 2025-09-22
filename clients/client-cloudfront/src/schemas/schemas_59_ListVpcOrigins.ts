// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CTr,
  _h,
  _hQ,
  _I,
  _Id,
  _IT,
  _LMT,
  _LVO,
  _LVOR,
  _LVORi,
  _Ma,
  _MI,
  _N,
  _NM,
  _OEA,
  _Q,
  _S,
  _VOL,
  _VOS,
  _VOSL,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVpcOriginsRequest = struct(
  n0,
  _LVOR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListVpcOriginsResult = struct(n0, _LVORi, 0, [_VOL], [[() => VpcOriginList, 16]]);
export var VpcOriginList = struct(
  n0,
  _VOL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => VpcOriginSummaryList, 0]]
);
export var VpcOriginSummary = struct(n0, _VOS, 0, [_Id, _N, _S, _CTr, _LMT, _Ar, _OEA], [0, 0, 0, 4, 4, 0, 0]);
export var VpcOriginSummaryList = list(n0, _VOSL, 0, [
  () => VpcOriginSummary,
  {
    [_xN]: _VOS,
  },
]);
export var ListVpcOrigins = op(
  n0,
  _LVO,
  {
    [_h]: ["GET", "/2020-05-31/vpc-origin", 200],
  },
  () => ListVpcOriginsRequest,
  () => ListVpcOriginsResult
);
