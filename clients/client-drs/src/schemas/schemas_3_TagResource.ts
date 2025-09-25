// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rA, _t, _TR, _TRR, n0, TagsMap, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [0, 1],
    [() => TagsMap, 0],
  ]
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
