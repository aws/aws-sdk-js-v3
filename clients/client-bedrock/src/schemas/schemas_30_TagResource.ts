// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rARN, _ta, _TR, _TRR, _TRRa, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
