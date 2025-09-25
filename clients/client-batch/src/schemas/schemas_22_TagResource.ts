// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rA, _t, _TR, _TRR, _TRRa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/v1/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
