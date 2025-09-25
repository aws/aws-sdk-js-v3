// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _hQ, _ht, _rA, _TK, _tK, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      () => TagKeys,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var TagKeys = list(n0, _TK, 8, 0);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
