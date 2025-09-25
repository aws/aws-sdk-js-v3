// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _rAes, _tK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(n0, _URR, 0, [_rAes, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
