// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _RA, _TK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [
      0,
      {
        [_hQ]: _RA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _TK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v2/email/tags", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
