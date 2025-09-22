// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rARN, _tK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(n0, _URR, 0, [_rARN, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["POST", "/untagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
