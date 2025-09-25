// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GT, _GTR, _GTRe, _ht, _jN, _RA, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTagsRequest = struct(n0, _GTR, 0, [_RA], [[0, 1]]);
export var GetTagsResponse = struct(
  n0,
  _GTRe,
  0,
  [_T],
  [
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var GetTags = op(
  n0,
  _GT,
  {
    [_ht]: ["GET", "/v2/tags/{ResourceArn}", 200],
  },
  () => GetTagsRequest,
  () => GetTagsResponse
);
