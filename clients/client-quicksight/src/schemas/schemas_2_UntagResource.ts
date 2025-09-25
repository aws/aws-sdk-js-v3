// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _k, _RAeso, _RI, _St, _TKa, _URn, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAeso, _TKa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [_RI, _St], [0, [1, 32]]);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _URn,
  {
    [_h]: ["DELETE", "/resources/{ResourceArn}/tags", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
