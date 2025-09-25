// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import { _c, _e, _end, _hE, _hQ, _ht, _m, _rA, _tK, _UE, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags", 200],
    [_end]: ["api."],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
