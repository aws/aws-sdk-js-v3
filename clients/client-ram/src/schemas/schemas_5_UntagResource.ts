// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _rAe, _rSA, _tKa, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(n0, _URR, 0, [_rSA, _tKa, _rAe], [0, 64 | 0, 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untagresource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
