// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _jN, _RA, _T, _t, _TR, _TRR, _TRRa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RA, _T],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/v2/tags/{ResourceArn}", 201],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
