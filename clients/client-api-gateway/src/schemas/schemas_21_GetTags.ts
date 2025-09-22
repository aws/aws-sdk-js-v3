// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GT, _GTR, _hQ, _ht, _li, _p, _rA, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTagsRequest = struct(
  n0,
  _GTR,
  0,
  [_rA, _p, _li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var Tags = struct(n0, _T, 0, [_t], [128 | 0]);
export var GetTags = op(
  n0,
  _GT,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => GetTagsRequest,
  () => Tags
);
